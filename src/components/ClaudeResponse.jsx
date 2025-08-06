export default function ClaudeResponse(props) {
  return (
    <div className="claude-response">
      <h2>Craft Idea</h2>
      <p>{props.response}</p>
    </div>
  );
}
