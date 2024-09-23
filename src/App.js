import "./App.css";
import Message from "./elements/hw_1/Message.js";
import CommentsList from "./elements/hw_2/CommentsList.js";
import TemperatureConverter from "./elements/hw_3/TemperatureConverter.js";
import TodoList from "./elements/hw_3/TodoList.js";

function App() {
  return (
    <div>
      <p className="headingHW">Homework_1</p>
      <Message text="Привет, тестовое сообщение раз!" />
      <Message text="Тестовое сообщение два" />
      <hr />
      <p className="headingHW">Homework_2</p>
      <CommentsList />
      <hr />
      <TemperatureConverter />
      <TodoList />
      <hr />
    </div>
  );
}

export default App;
