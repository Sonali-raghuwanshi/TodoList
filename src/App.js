import Todo from "./components/Todo";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <div >
      <Provider store={store}>
        <Todo />
      </Provider>
    </div>
  );
}

export default App;
