export default function ItemsList(props) {
  const itemsListItems = props.items.map((item, index) => (
    <li key={index} className="items-list-item">
      <span>{item}</span>
      <button
        type="button"
        aria-label="Remove item"
        className="trash-btn"
        onClick={() => props.deleteItem(index)}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="3 6 5 6 21 6" />
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
          <line x1="10" y1="11" x2="10" y2="17" />
          <line x1="14" y1="11" x2="14" y2="17" />
        </svg>
      </button>
    </li>
  ));

  return (
    <>
      <ul className="items-list">{itemsListItems}</ul>
      {props.items.length > 3 && (
        <div className="ready-card">
          <div>
            <h2>Ready to get crafty?</h2>
            <p>Click the button to get a craft idea!</p>
          </div>
          <button onClick={props.getCraft}>Get Crafty</button>
        </div>
      )}
    </>
  );
}
