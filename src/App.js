import { useState, useRef } from "react";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([{ id: 1, name: "Todo1", completed: false }]);

  const todoNameRef = useRef();

  const handleAddTodo = () => {
    // タスクを追加する。
    console.log(todoNameRef)
    
  }

  return (
    <>
      <TodoList todos={todos} />
      <input type="text" />
      <button onClick={handleAddTodo}>タスクの追加</button>
      <button>完了したタスクの削除</button>
      <div>残りのタスク:0</div>
    </>
  );
}

export default App;
