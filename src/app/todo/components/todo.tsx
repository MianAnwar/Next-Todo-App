'use client'
import { useRouter } from 'next/navigation';
import { TodoModel } from '../todo-model';

async function update(id: string, isDone: boolean, refresh: () => void) {
  let result = await fetch(`/api/todo/update`,
    {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify({ id, isDone })
    });
  refresh();
}

async function deleteTodo(id: string, refresh: () => void) {
  let result = await fetch(`/api/todo/delete?id=${id}`,
    {
      method: "DELETE"
    });
  refresh();
}

export default function Todo({ todo }: { todo: TodoModel }) {

  const router = useRouter();

  return (
    <>
      <button onClick={() => deleteTodo(todo.id, router.refresh)} className="mr-2 rounded px-1 bg-yellow-700 text-white">delete</button>
      <input type="checkbox" className="mr-2"
        onChange={(e) => update(todo.id, e.target.checked, router.refresh)}
        checked={todo.isDone}
      />
      {todo.name}
    </>
  );
}