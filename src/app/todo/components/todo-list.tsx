import { TodoModel } from '../todo-model';
import Todo from './todo';

const getTodos = async () => {
  let todos = await fetch(`http://localhost:3000/api/todo/list`,
    {
      method: "GET",
      mode: "no-cors"
    });
  const data = await todos.json();
  return data.todos as TodoModel[];
}

export default async function TodoList() {
  const todos = await getTodos();
  console.log(todos);
  return (
    <div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo: TodoModel) => {
          return <li key={todo.id} style={{ padding: "5px 0" }}>
            <Todo todo={todo} />
          </li>
        })}
      </ul>
    </div>
  );
}