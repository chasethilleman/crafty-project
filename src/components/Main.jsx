import { useState } from "react";
import ItemsList from "./components/ItemsList";

export default function Main() {
  const [items, setItems] = useState([]);
  const [response, setResponse] = useState("");

  async function getCraft() {
    const responseMarkdown = await getResponseFromClaude(items);
    setResponse(responseMarkdown);
  }

  function addItem(formData) {
    const newItem = formData.get("item");
    setItems((prevItems) => [...prevItems, newItem]);
  }

  return (
    <>
      <form action={addItem}>
        <label>
          Item:
          <input type="text" name="item" />
        </label>
        <button type="submit">Submit</button>
      </form>
      {items.length > 0 && <ItemsList items={items} getCraft={getCraft} />}
      {response && <ClaudeResponse response={response} />}
    </>
  );
}
