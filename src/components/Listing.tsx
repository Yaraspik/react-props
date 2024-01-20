import ListingInterface from "../interfaces/ListingInterface";
import CreateListItem from "./CreateListItem";

const Listing = (props: ListingInterface): JSX.Element => { //TODO Можно ли сдезь как-то задать значение по умолчанию равное пустому массиву, или реализация строчкой ниже является верной?
  const items = props.items ? props.items : [];

  return (
    <>
      <div className="item-list">
        {items.map(i => <CreateListItem item={i} key={i.listing_id} />)}
      </div>
    </>
  )
}

export default Listing;
