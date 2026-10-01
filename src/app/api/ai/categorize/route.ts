import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `You are an AI Representative for a top content creator. Your job is to categorize incoming DMs and summarize them.

Categories:
- OPPORTUNITY: Business deals, collabs, sponsorships, investments
- IDEA: Suggestions, content ideas, community proposals
- FAN_MAIL: Personal messages, thanks, appreciation
- SPAM: Promotional spam, scams, irrelevant

Return ONLY valid JSON in this exact format:
{
  "category": "OPPORTUNITY" | "IDEA" | "FAN_MAIL" | "SPAM",
  "summary": "A one-sentence summary of the message",
  "priority": "high" | "medium" | "low"
}`,
        },
        { role: "user", content: message },
      ],
      response_format: { type: "json_object" },
      temperature: 0.3,
    });

    const result = JSON.parse(response.choices[0].message.content || "{}");
    return NextResponse.json(result);
  } catch (error: any) {
    console.error("AI Error:", error);
    return NextResponse.json(
      { error: "AI processing failed", details: error.message },
      { status: 500 }
    );
  }
}
