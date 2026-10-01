import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function categorizeMessage(content: string) {
  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      { role: "system", content: `You are an AI Representative for a top creator. Categorize the following DM into one of: OPPORTUNITY, FAN_MAIL, IDEA, SPAM. Summarize it in one sentence. Return JSON: { category: string, summary: string }` },
      { role: "user", content }
    ],
    response_format: { type: "json_object" }
  });
  return JSON.parse(response.choices[0].message.content || '{}');
}

export async function evaluateIdea(title: string, content: string) {
  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      { role: "system", content: `You are a community manager AI. Evaluate this fan idea. Score it from 1-100 based on feasibility and potential impact. Provide a 2-sentence summary. Return JSON: { score: number, summary: string }` },
      { role: "user", content: `Title: ${title}\nContent: ${content}` }
    ],
    response_format: { type: "json_object" }
  });
  return JSON.parse(response.choices[0].message.content || '{}');
}

export async function askAIAboutCommunity(query: string, context: string) {
  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      { role: "system", content: `You are the Creator's AI Representative. Answer questions based on the provided community context. Be concise and actionable.` },
      { role: "user", content: `Context: ${context}\n\nQuestion: ${query}` }
    ]
  });
  return response.choices[0].message.content;
}
