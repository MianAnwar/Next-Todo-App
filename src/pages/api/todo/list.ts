import { v4 as uuidv4 } from 'uuid';
import type { NextApiRequest, NextApiResponse } from 'next'

type Todo = {
  id: string;
  name: string;
  isDone: boolean;
}

var todos: Todo[] = [
  {
    id: uuidv4(),
    name: "Learn Next.js",
    isDone: false,
  },
  {
    id: uuidv4(),
    name: "Learn API Development",
    isDone: false,
  },
  {
    id: uuidv4(),
    name: "New Start up",
    isDone: false,
  },
];

export const addTodo = (name: string) => {
  let newTodo = {
    id: uuidv4(),
    name,
    isDone: false,
  };
  todos.push(newTodo);
};

export const deleteTodo = (id: string) => {
  todos = todos.filter((obj) => {
    return obj.id !== id;
  });
};

export const updateTodo = ({ id, isDone }: { id: string, isDone: boolean }) => {
  let newTodos: Todo[] = [];
  todos.map((obj) => {
    let newTodo = { ...obj };
    if (obj.id == id) {
      newTodo = {
        id,
        name: obj.name,
        isDone,
      };
    }
    newTodos.push(newTodo);
  });
  todos = newTodos;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ todos: Todo[] }>
) {
  res.status(200).json({ todos });
}
