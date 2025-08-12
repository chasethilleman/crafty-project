import { useState } from "react";
import ItemsList from "./ItemsList";
import ClaudeResponse from "./ClaudeResponse";
import { getResponseFromClaude } from "../ai";

export default function Main({ setLoading }) {
  const [items, setItems] = useState([]);
  const [response, setResponse] = useState("");
  const [itemInput, setItemInput] = useState("");

  async function getCraft() {
    setLoading(true);
    const responseMarkdown = await getResponseFromClaude(items);
    setResponse(responseMarkdown);
    setLoading(false);
    const element = document.querySelector(".claude-response");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  function addItem(formData) {
    const newItem = formData.get("item");
    setItems((prevItems) => [...prevItems, newItem]);
    setItemInput(""); // Clear input after adding item
  }

  function deleteItem(index) {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
  }

  return (
    <>
      <div className="main-body">
        <div className="input-card">
          <h1>Welcome to Crafty!</h1>
          <p>
            Add your crafty items below, and get a creative idea from Claude!
          </p>
          <form
            action={addItem}
            onChange={(e) => setItemInput(e.target.value)}
            className="item-form"
          >
            <label>
              <input type="text" placeholder="e.g. yarn" name="item" />
              <button type="submit" disabled={!itemInput}>
                Add Item
              </button>
            </label>
          </form>
          {items.length > 0 && (
            <ItemsList
              items={items}
              getCraft={getCraft}
              deleteItem={deleteItem}
            />
          )}
        </div>
        {response && <ClaudeResponse response={response} />}
      </div>
    </>
  );
}
