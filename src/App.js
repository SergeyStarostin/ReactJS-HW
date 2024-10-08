import "./App.css";
import Message from "./elements/hw_1/Message.js";
import CommentsList from "./elements/hw_2/CommentsList.js";
import TemperatureConverter from "./elements/hw_3/TemperatureConverter.js";
import TodoList from "./elements/hw_3/TodoList.js";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./elements/hw_4/HomePage.jsx";
import AboutPage from "./elements/hw_4/AboutPage.jsx";
import { Provider, useSelector } from "react-redux";
import store from "./elements/hw_5/store";
import ToggleTheme from "./elements/hw_5/ToggleTheme";
import "./elements/hw_5/styles.css";

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
      <p className="headingHW">Homework_3</p>
      <TemperatureConverter />
      <TodoList />
      <hr />
      <p className="headingHW">Homework_4</p>
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Главная страница</Link>
            </li>
            <li>
              <Link to="/about">О нас</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
    <hr />
    <p className="headingHW">Homework_5</p>
    <Provider store={store}>
      <AppWithTheme />
    </Provider>
    <hr />
    </div>
  );
}

const AppWithTheme = () => {
  const theme = useSelector((state) => state.theme);
  return (
    <div className={`app ${theme}`}>
      <h2>Choosing a theme color</h2>
      <ToggleTheme />
    </div>
  );
};

export default App;
