import ListItemInterface from "../interfaces/ListItemInterface";

const CreateListItem = (props: { item: ListItemInterface }): JSX.Element => {
  const { item } = props;

  if (!item || item.state === "removed") return <></>;

  let price, level = "level-medium";

  switch (item.currency_code) {
    case "USD":
      price = `$${item.price}`;
      break;
    case "EUR":
      price = `€${item.price}`;
      break;

    default:
      price = item.price + " " + item.currency_code;
      break;
  }

  if (item.quantity < 10) {
    level = "level-low";
  } else if (item.quantity > 20) {
    level = "level-high";
  }

  return (
    <>
      <div className="item">
        <div className="item-image">
          <a href={item.url}>
            <img src={item.MainImage ? item.MainImage.url_570xN : ""}></img>
          </a>
        </div>
        <div className="item-details">
          <p className="item-title" dangerouslySetInnerHTML={{__html: item.title.substring(0, 49) + "..."}}></p>
          <p className="item-price">{price}</p>
          <p className={`item-quantity ${level}`}>{item.quantity}</p>
        </div>
      </div>
    </>
  )
}

export default CreateListItem;
