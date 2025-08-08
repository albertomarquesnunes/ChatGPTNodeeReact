import './styles/App.css';
import './styles/reset.css';
import { makeRequest } from './api/api';
import {useState} from 'react';
import {SideMenu} from './components/SideMenu/SideMenu';
import {ChatMessage} from './components/ChatMessage/ChatMessage';

function App() {
  const [input, setInput] = useState("");
  const [chatlog, setChatlog] = useState([
    {
      user:"gpt",
      message:"Hello, how can I assist you today?"
    }
  ]);

  async function handleSubmit(event) {
    event.preventDefault();

    let response = await makeRequest({ prompt: input });

    response = response.data.split('\n').map(line => <p>{line}</p>);
    // Update chatlog with the new message from the user and the response from GPT
    setChatlog([...chatlog, {
      user: 'me',
      message: `${input}`
    }, 
    {
      user: 'gpt',
      message: response
    }])
    setInput("")
  }

  return (
    <div className="App">

      <SideMenu></SideMenu>

        <section className="chatbox">

          <div className="chat-log">    
            {chatlog.map((message, index) => (
              <ChatMessage
                key={index}
                message={message}/>
            ))}
          </div>

          <div className="chat-input-holder">
           <form onSubmit={handleSubmit}>
              <input
                rows='1'
                className='chat-input-textarea'
                type="text"
                placeholder="Type your message here..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
             
           </form>
          </div>
        </section>
    </div>
  );
}

export default App;
