import TForm from "./TForm";
import {useState} from "react"

const TItem = () => {
const [tedit, setTedit] =useState(false)

const editHandler = () => setTedit((prev) => !prev);


const TDelete = () => {
  if (confirm("삭제하시겠습니까?")) {
    setTodos((prev) => prev.filter((item) => item !== payload));
    alert("삭제했습니다");
  } else {
    alert("취소했습니다");
  }
};

  return (
      <li>
  {tedit ? <TForm
  onCancel={editHandler}
  />: (<div>
    {<p>{payload.text}</p>
  </div>)
}
      </li>
  );
};

export default TItem;
