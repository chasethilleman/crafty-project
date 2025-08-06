export default function ItemsList(props) {
  const itemsListItems = props.items.map((item, index) => (
    <li key={index}>{item}</li>
  ));

  return (
    <>
      <div className="items-list-container">
        <h2>Your crafty items</h2>
        <ul className="items-list">{itemsListItems}</ul>
      </div>
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
