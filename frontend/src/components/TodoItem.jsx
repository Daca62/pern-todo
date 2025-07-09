import { createPortal } from "react-dom";

function TodoItem({ item, action }) {
  return (
    <div className="flex items-center justify-center px-1 my-5 hover:bg-gray-100 hover:rounded-xl">
      <p className="flex-1 text-xl">{item.description}</p>
      <button
        className="font-mono h-15 w-20  mx-4 rounded-xl bg-green-600 hover:cursor-pointer"
        onClick={action}
      >
        Edit
      </button>
      {/* {createPortal(<h2>This is the Edit Modal.</h2>, document.body)} */}
      <button
        className="font-mono h-15 w-20  mx-4 rounded-xl bg-red-500 hover:cursor-pointer"
        onClick={() => deleteTodo(item.todo_id)}
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
