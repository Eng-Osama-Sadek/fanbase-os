import { NextResponse } from "next/server";

async function callGemini(apiKey: string, contents: any[], retries = 2): Promise<string> {
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-goog-api-key": apiKey,
          },
          body: JSON.stringify({
            contents,
            systemInstruction: {
              parts: [{
                text: "You are the AI Representative for Alex Creator, a top content creator with 700K+ followers. Be concise, actionable, and helpful. Answer in Arabic or English.",
              }],
            },
          }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (text) return text;
      }

      // Handle rate limit - wait and retry
      if (res.status === 429 || data?.error?.code === 429) {
        console.log(`Rate limited (attempt ${attempt + 1}), waiting...`);
        await new Promise((r) => setTimeout(r, 2000 * (attempt + 1)));
        continue;
      }

      // Other error - log and break
      console.error("Gemini API Error:", JSON.stringify(data));
      if (attempt === retries) {
        throw new Error(data?.error?.message || "API error");
      }
    } catch (error: any) {
      console.error(`Attempt ${attempt + 1} failed:`, error.message);
      if (attempt === retries) throw error;
      await new Promise((r) => setTimeout(r, 1000 * (attempt + 1)));
    }
  }
  throw new Error("All retries failed");
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ reply: "AI is not configured yet." });
    }

    const historyMessages = messages.slice(0, -1);
    const firstUserIndex = historyMessages.findIndex((m: any) => m.role === "user");
    const cleanedHistory = firstUserIndex >= 0 ? historyMessages.slice(firstUserIndex) : [];

    const contents = cleanedHistory.map((m: any) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    contents.push({
      role: "user",
      parts: [{ text: messages[messages.length - 1].content }],
    });

    const reply = await callGemini(apiKey, contents);

    return NextResponse.json({ reply });
  } catch (error: any) {
    console.error("Final Error:", error.message);
    return NextResponse.json(
      {
        reply: "I'm having a brief technical issue. Please try again in a few seconds. 🙏",
        error: error.message,
      },
      { status: 200 }
    );
  }
}