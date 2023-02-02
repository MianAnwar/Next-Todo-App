"use client"
import { Button, Checkbox, Flex, ListItem, OrderedList, Input } from '@chakra-ui/react'
import { useState } from 'react'

export default function Home() {
  let todos: string[] = [];
  const [tasks, setTasks] = useState(todos)
  const [Item, setItem] = useState("")

  function removeItem(taskName: string) {
    setTasks(tasks.filter(task => {
      return task != taskName
    }));
  }

  function AddItem() {
    debugger
    if (Item != "" && !tasks.includes(Item)) {
      let temp = tasks;
      temp.push(Item);
      setTasks(temp);
      setItem("");
    }
  }

  return (
    <>
      <form onSubmit={e => {
        e.preventDefault();
        AddItem();
      }}>
        <Flex
          height="100%"
          flexDirection="row">

          <Input className="
            placeholder:italic placeholder:text-slate-300
            bg-white border border-slate-300 rounded-md py-1 pl-1
            shadow-sm sm:text-sm"
            placeholder='Item Name' variant='filled'
            value={Item}
            onChange={(e) => {
              setItem(e.target.value)
            }}>
          </Input>
          <Button onClick={AddItem} className="ml-1 rounded px-2 bg-yellow-500 text-white">Add</Button>
          <Button onClick={e => { setTasks(todos) }} className="ml-1 rounded px-2 bg-red-500 text-white">Clear All</Button>

        </Flex>
      </form>


      <OrderedList style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((task) => {
          return (<ListItem key={task} style={{ padding: "5px 0" }}>

            <Button
              ml={10} backgroundColor="black" color="#e7e7e7"
              className="mr-2 rounded px-1 bg-yellow-700 text-white"
              onClick={() => {
                removeItem(task)
              }}>
              Delete
              </Button>
            <Checkbox> {task}</Checkbox>

          </ListItem>)
        })}
      </OrderedList></>
  )
}