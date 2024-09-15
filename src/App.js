import logo from './logo.svg';
import './App.css';
import Message from './elements/hw_1/Message.js';


function App() {
  return (
      <div className="app-container">
      <img src={logo} className="App-logo" alt="logo" />
      <Message text="Привет, тестовое сообщение раз!" />
      <Message text="Тестовое сообщение два" />
    </div>
  );
}

export default App;
