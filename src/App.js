import Header from "./components/Header";
import InputForm from "./components/InputForm";
import TodoList from "./components/TodoList";
function App() {
  return (
    <div className="App">
      <div className="lg:mx-52 mx-0">
        <Header />
        <InputForm />
      </div>
    </div>
  );
}

export default App;
