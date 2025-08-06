import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);
  return (
    <>
      {loading && (
        <div className="spinner-container">
          <span className="spinner"></span>
        </div>
      )}
      <Header />
      <Main loading={loading} setLoading={setLoading} />
    </>
  );
}

export default App;
