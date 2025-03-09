import { useState } from "react";
import TForm from "./TForm";
import TItem from "./TItem";
import { Container } from "./components";

interface Props {
  id:string
  text:string
}

const App = () => {
  const [todos, setTodos] = useState<Props[]>([]);

  return (
    <Container.Col>
      <h1>파이어베이스</h1>
      <TForm todos={todos} setTodos={setTodos}/>
      <ul>
        {todos.map((todo, index) => {
          return <TItem 
          key={todo.id}
          index={index}
          payload={todo}
          setTodo={setTodo}
          todo={todo}
          />;
        })}
      </ul>
    </Container.Col>
  );
};

export default App;
