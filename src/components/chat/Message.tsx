const Message = (props: { from: { name: string }, message?: string, time: string }): JSX.Element => {
  const { from, message, time } = props;

  return (
    <>
      <li className="clearfix">
        <div className="message-data align-right">
          <span className="message-data-time">{time}</span> &nbsp; &nbsp;
          <span className="message-data-name">{from.name}</span>
          <i className="fa fa-circle me"></i>
        </div>
        <div className="message my-message float-right">
          {message}
        </div>
      </li>
    </>
  )
}

export default Message;
