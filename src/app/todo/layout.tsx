import React from "react";
import AddNewTodo from './components/add-new-todo';
import TodoList from "./components/todo-list";

export default function RootLayout(
  { children }: { children: React.ReactNode }
) {
  return (
    <main className="flex space-x-4 divide-x-2 p-5">
      <div>
        <h2>NeXt <br /> <b>Todo</b> <br /> </h2>
      </div>

      <div className="flex-1 pl-3">
        <AddNewTodo />
        <div>{children}</div>
        {/* @ts-ignore */}
        <TodoList />
      </div>
    </main>
  )
}