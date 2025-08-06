import { useState } from "react";
import ItemsList from "./ItemsList";
import ClaudeResponse from "./ClaudeResponse";
import { getResponseFromClaude } from "../ai";

export default function Main({ setLoading }) {
  const [items, setItems] = useState([]);
  const [response, setResponse] = useState("");

  async function getCraft() {
    setLoading(true);
    const responseMarkdown = await getResponseFromClaude(items);
    setResponse(responseMarkdown);
    setLoading(false);
  }

  function addItem(formData) {
    const newItem = formData.get("item");
    setItems((prevItems) => [...prevItems, newItem]);
  }

  return (
    <>
      <div className="main-body">
        <form action={addItem}>
          <label>
            <input type="text" placeholder="e.g. yarn" name="item" />
          </label>
          <button type="submit">Add Item</button>
        </form>
        {items.length > 0 && <ItemsList items={items} getCraft={getCraft} />}
        {response && <ClaudeResponse response={response} />}
      </div>
    </>
  );
}
