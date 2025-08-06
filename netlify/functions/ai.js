import Anthropic from "@anthropic-ai/sdk";

const SYSTEM_PROMPT = `
You are an assistant that receives a list of items and then suggests a craft idea that someone can make or do with the items. You don't have to use all of the items in the list and can suggest new items if you see fit. Format your response in markdown so it's easy to display on a webpage.
`;

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// This helper is local to this file (not exposed to frontend)
async function getCraftIdea(itemsArr) {
  const itemsString = itemsArr.join(", ");

  const msg = await anthropic.messages.create({
    model: "claude-3-haiku-20240307",
    max_tokens: 1024,
    system: SYSTEM_PROMPT,
    messages: [
      {
        role: "user",
        content: `Here are the items: ${itemsString}. Please give me a craft idea I can make!`,
      },
    ],
  });

  return msg.content[0].text;
}

// Netlify serverless function entry point
export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  try {
    const { items } = JSON.parse(event.body || "{}");

    if (!Array.isArray(items)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Invalid or missing 'items' array" }),
      };
    }

    const result = await getCraftIdea(items);

    return {
      statusCode: 200,
      body: JSON.stringify({ text: result }),
    };
  } catch (err) {
    console.error("Claude API error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to get response from Claude" }),
    };
  }
}
