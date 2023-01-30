import React from "react";
import AddNewTodo from './add-new-todo';

export default function RootLayout(
  { children }: { children: React.ReactNode }
) {
  return (
    <main className="flex space-x-4 divide-x-2 p-5">
      <div>
        <h2>NeXt <br /> <b>Todo</b> <br /> </h2>
      </div>

      <div className="flex-1 pl-5">
        <AddNewTodo />
        <div>{children}</div>
      </div>
    </main>
  )
}