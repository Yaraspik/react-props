import MessageInterface from "../interfaces/MessageInterface";
import Message from "./chat/Message";
import Response from "./chat/Response";
import Typing from "./chat/Typing";

const MessageHistory = (props: { list: Array<MessageInterface> }): JSX.Element => {
  const list = props.list ? props.list : [];
  if (list.length === 0) return <></>;

  return (
    <>
      <ul className="chat-no-marker">
        {list.map((i) => 
          i.type === "message" ? <Message from={i.from} key={i.id} message={i.text} time={i.time}/> :
          i.type === "response" ? <Response from={i.from} key={i.id} message={i.text} time={i.time}/> :
          i.type === "typing" ? <Typing from={i.from} key={i.id} message={i.text} time={i.time}/> : <></>
        )}
      </ul>
    </>
  )
}

export default MessageHistory;
