import ListItemInterface from "../interfaces/ListItemInterface";
import CreateListItem from "./CreateListItem";

const Listing = (props: {items: Array<ListItemInterface>}): JSX.Element => {
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
