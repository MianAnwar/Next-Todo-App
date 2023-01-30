'use client'

import { FormEvent, useState } from "react";

export default function AddNewTodo() {
  const [newTodo, setNewTodo] = useState("");

  const addNewTodo = (e: FormEvent<HTMLFormElement>) => {
    debugger
    e.preventDefault();
    setNewTodo("");
  };

  return (
    <form onSubmit={addNewTodo}>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        className="
            placeholder:italic placeholder:text-slate-300
            bg-white border border-slate-300 rounded-md py-1 pl-1
            shadow-sm sm:text-sm"
        placeholder="Type NEW Todo"
      />
      <button className="ml-1 rounded px-2 bg-yellow-500">Add</button>
    </form>
  );
}