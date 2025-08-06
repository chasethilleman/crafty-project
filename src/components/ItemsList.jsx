export default function ItemsList(props) {
  const itemsListItems = props.items.map((item, index) => (
    <li key={index}>{item}</li>
  ));

  return (
    <>
      <ul>{itemsListItems}</ul>
      {props.items.length > 3 && (
        <div className="ready-card">
          <h2>Ready to get crafty?</h2>
          <p>Click the button below to get a craft idea!</p>
          <button onClick={props.getCraft}>Get Craft</button>
        </div>
      )}
    </>
  );
}
