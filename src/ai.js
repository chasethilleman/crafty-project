export async function getResponseFromClaude(items) {
  const res = await fetch("/.netlify/functions/ai", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ items }),
  });

  const data = await res.json();
  return data.text || "No response from Claude";
}
