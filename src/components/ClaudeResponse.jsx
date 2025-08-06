import Markdown from "react-markdown";

export default function ClaudeResponse(props) {
  return (
    <div className="claude-response">
      <h2>Craft Idea</h2>
      <Markdown>{props.response}</Markdown>
    </div>
  );
}
