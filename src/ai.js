import Anthropic from "@anthropic-ai/sdk";

const SYSTEM_PROMPT = `
You are an assistant that receives a list of items and then suggests a craft idea that someone can make or do with the items. You don't have to use all of the items in the list and can suggest new items if you see fit. Format your response in markdown so it's easy to display on a webpage.
`;

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY, // Set this in your environment
  dangerouslyAllowBrowser: true,
});

export async function getCraftIdeaFromClaude(itemsArr) {
  const itemsString = itemsArr.join(", ");

  try {
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
  } catch (err) {
    console.error("Claude error:", err.message);
    return "Sorry, there was a problem generating your craft idea.";
  }
}
