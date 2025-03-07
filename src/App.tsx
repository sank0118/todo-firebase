import { useState } from "react";
import TForm from "./TForm";
import TItem from "./TItem";
import { Container } from "./components";

const App = () => {
  const [todos, setTodos] = useState([]);

  return (
    <Container.Col>
      <h1>파이어베이스</h1>
      <TForm />
      <ul>
        {todos.map((todos, index) => {
          return <TItem />;
        })}
      </ul>
    </Container.Col>
  );
};

export default App;
