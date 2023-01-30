import type { NextApiRequest, NextApiResponse } from 'next'
import { addTodo } from "./list";

export type Data = {
  msg: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    let { name: todo } = JSON.parse(req.body);
    addTodo(todo);
    res.status(200).json({ msg: "todo added" });
  } else {
    res.status(400).json({ msg: "invalid request method" });
  }
}
