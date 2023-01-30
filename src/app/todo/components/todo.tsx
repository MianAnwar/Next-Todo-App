'use client'
import { TodoModel } from '../todo-model';

export default function Todo({ todo }: { todo: TodoModel }) {
  return (
    <>
      <button className="mr-2 rounded px-1 bg-yellow-700 text-white">delete</button>
      <input type="checkbox" className="mr-2" onChange={() => { }} />
      {todo.name}
    </>
  );
}