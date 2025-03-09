import { useState,useCallback } from "react";
import { Container, Form } from "./components/";

interface Props {
  id:string
  text:string
}

const TForm = () => {
  const [todo, setTodo] = useState<Props>({id:"", text:""});
 
  const onSubmit = useCallback(
   async()=>{
    try {
      if(todo.id.lenght ===0){
        return alert(" 할일을 정확히 입력해세요." )
      }
    } catch (error:any) {
      return alert(error.message)
    }
    },[]
  ) 

  const onChange = (e: React.changeEvent<HTMLInputElement> ) => {
    setTodo( e.target.value );
  };

  return (
    <Container.Col >
      <form action="" onSubmit={onSubmit}>
      <Form.Input
      onChange={onChange}
      />
      </form>
   
    </Container.Col>
  );
};

export default TForm;
