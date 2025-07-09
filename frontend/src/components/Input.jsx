/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import Button from "./Button";

function Input() {
  const [description, setDescription] = useState("");

  async function submitText(e) {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
    } catch (error) {
      console.log(error.message);
    }
  }

  // function fetchTodos() {
  //   try {
  //     const todos = fetch("http://localhost:5000/todos");
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }

  // useEffect(async () => {
  //   const data = await fetchTodos();

  //   console.log(data);
  // }, []);

  return (
    <form
      className="flex items-center justify-center w-full mt-5"
      onSubmit={submitText}
    >
      <input
        name="text"
        type="text"
        value={description}
        className=" w-full px-1 h-8 rounded-xl border-b outline-none shadow-xl text-l font-mono bg-amber-50"
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className="font-mono h-15 w-20  mx-4 rounded-xl bg-blue-400 hover:cursor-pointer">
        Add
      </button>
    </form>
  );
}

export default Input;
