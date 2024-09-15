import './App.css';
import Message from './elements/hw_1/Message.js';
import CommentsList from './elements/hw_2/CommentsList.js';

function App() {
	return (
		<div>
			<p className="headingHW">Homework_1</p>
      <Message text="Привет, тестовое сообщение раз!" />
      <Message text="Тестовое сообщение два" />
			<hr/>
			<p className="headingHW">Homework_2</p>
      <CommentsList/>
      <hr/>
		</div>
	);
}

export default App;
