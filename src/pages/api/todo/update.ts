import { updateTodo } from "./list";
import type { NextApiRequest, NextApiResponse } from 'next'
import { Data } from "./add";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    let { id, isDone } = JSON.parse(req.body);
    updateTodo({ id, isDone: Boolean(isDone) });
    res.status(200).json({ msg: "todo updated" });
  } else {
    res.status(400).json({ msg: "invalid request method" });
  }
}
