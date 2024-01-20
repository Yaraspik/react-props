import Stars from './components/Stars';
import Listing from './components/Listing';
import MessageHistory from './components/MessageHistory';
import './App.css'
import data from './db/second_task/data';
import messages from './db/second_task/messages';

function App() {
  return (
    <>
      <div className='stars'>
        <Stars />
        <Stars count={-1} />
        <Stars count={1} />
        <Stars count={2} />
        <Stars count={3} />
        <Stars count={4} />
        <Stars count={5} />
        <Stars count={6} />
      </div>
      <Listing items={data} />
      <div className="clearfix container">
        <div className="chat">
          <div className="chat-history">
            <MessageHistory list={messages} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App
