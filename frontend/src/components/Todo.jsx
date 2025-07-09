import { useEffect, useRef, useState } from "react";

import Input from "./Input";
import Edit from "./Edit";
import TodoItem from "./TodoItem";

function Todo() {
  const dialog = useRef();
  const [data, setData] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(undefined);

  function show(todoItem) {
    setSelectedTodo(todoItem);
    console.log(selectedTodo);
    dialog.current?.open();
  }

  async function deleteTodo(id) {
    try {
      const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      });

      setData(data.filter((item) => item.todo_id !== id));
    } catch (error) {
      console.error(error.message);
    }
  }

  async function getTodos() {
    try {
      const response = await fetch(`http://localhost:5000/todos`);
      const data = await response.json();

      setData(data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <section className="relative flex-col w-60% mx-10">
        <Input />
        <h1 className="font-bold font-mono text-3xl border-b-2">
          List Of Todos:
        </h1>
        <div className="flex-col">
          <Edit todo={selectedTodo} ref={dialog} />
          {data.map((item) => (
            //  <div key={item.todo_id}>
            //    <TodoItem item={item} action={show} />
            //   <Edit ref={dialog} todo={item} />
            // </div>
            <div
              className="flex items-center justify-center px-1 my-5 hover:bg-gray-100 hover:rounded-xl"
              key={item.todo_id}
            >
              <p className="flex-1 text-xl">{item.description}</p>
              <button
                className="font-mono h-15 w-20  mx-4 rounded-xl bg-green-600 hover:cursor-pointer"
                onClick={() => show(item)}
              >
                Edit
              </button>
              <button
                className="font-mono h-15 w-20  mx-4 rounded-xl bg-red-500 hover:cursor-pointer"
                onClick={() => deleteTodo(item.todo_id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Todo;
