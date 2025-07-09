import { useImperativeHandle, useState, useRef, useEffect } from "react";

function Edit({ ref, todo }) {
  const [description, setDescription] = useState("");
  const dialog = useRef();

  useEffect(() => {
    if (todo && todo.description) {
      setDescription(todo.description);
    }
  }, [todo]);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  async function updateText(e) {
    e.preventDefault();
    try {
      const body = { description };
      const updatedData = await fetch(
        `http://localhost:5000/todos/${todo.todo_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      window.location = "/";
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <dialog
      ref={dialog}
      className={
        open
          ? "absolute px-2  top-1/2 left-1/3 bg-gray-300 h-60 w-90 border-1 md:h-80 md:w-120"
          : ""
      }
      onClose={() => setDescription(todo.description)}
    >
      <h2 className="font-mono text-2xl m-4 flex items-center justify-center">
        The Edit Modal
      </h2>

      <form method="dialog" className=" w-[100%]">
        <input
          type="text"
          value={description}
          className=" w-[100%] px-4 my-4 h-8 rounded-xl border-b outline-none shadow-xl text-l font-mono bg-gray-50 "
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="flex justify-between">
          <button
            className="font-mono h-15 w-20  mx-4 rounded-xl bg-green-500 hover:cursor-pointer"
            onClick={(e) => updateText(e)}
          >
            Edit
          </button>
          <button
            className="font-mono h-15 w-20  mx-4 rounded-xl bg-red-500 hover:cursor-pointer"
            onClick={() => setDescription(todo.description)}
          >
            Close
          </button>
        </div>
      </form>
    </dialog>
  );
}

export default Edit;
