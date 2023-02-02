'use client'
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

async function addTodo(name: string, refresh: () => void) {
  if (name == "") {
    return;
  }
  let result = await fetch(`/api/todo/add`, {
    method: "POST",
    body: JSON.stringify({ name })
  });
  refresh();
}

export default function AddNewTodo() {
  const [newTodo, setNewTodo] = useState("");
  const router = useRouter();

  const addNewTodo = (e: FormEvent<HTMLFormElement>) => {
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
      <button onClick={() => addTodo(newTodo, router.refresh)} className="ml-1 rounded px-2 bg-yellow-500">Add</button>
    </form>
  );
}