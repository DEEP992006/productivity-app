import { useState, useEffect } from 'react'
import './App.css'
import { fetchitem, add, delete_todo, edit_todo } from './api/api'
import { useForm } from "react-hook-form"
import { Camera, Pencil, Trash } from 'lucide-react';
import { toast,Toaster } from 'react-hot-toast'
function App() {
  // form control
  const { register, handleSubmit, setValue, formState: { errors } } = useForm()

  // states
  const [todos, setTodos] = useState([])
  const [editingTodoName, setEditingTodoName] = useState("")
  const [isEditing, setIsEditing] = useState(false)

  // fetch todos on load
  useEffect(() => {
    loadTodos()
  }, [])

  // fetch todos
  const loadTodos = async () => {
    const fetchedTodos = await fetchitem()
    setTodos(fetchedTodos)
  }

  // add or edit todo
  const handleFormSubmit = async (formData) => {
    if (isEditing) {
      await edit_todo(editingTodoName, formData.name)
      setIsEditing(false)
      toast.success(`${formData.name} edited`)
    } else {
      await add(formData)
      toast.success(`${formData.name} added`)
    }
    setValue("name", "") // clear input
    loadTodos()
  }

  // delete todo
  const handleDelete = async (todoName) => {
    await delete_todo(todoName)
    toast.error(`${todoName} added`)
    loadTodos()
  }

  // start edit
  const handleEdit = (todoName) => {
    setEditingTodoName(todoName)
    setIsEditing(true)
    setValue("name", todoName)
    
  }

  return (
    <>
      <p className=" text-5xl text-center bg-gray-200 pt-4 pb-2">Todo App</p>
      <Toaster position="top-center" reverseOrder={false} />
      {/* form */}
      <form onSubmit={handleSubmit(handleFormSubmit)} className="flex gap-2 p-4 w-full justify-center bg-slate-200 flex-col items-center">
        <input
          {...register("name")}
          placeholder="Enter todo name"
          className="border px-2 py-1 rounded-3xl w-1/3 h-12 text-center items-center text-xl"
        />
        <input
          type="submit"
          value={isEditing ? "Update" : "Add"}
          className="bg-green-500 px-4 py-1 text-white rounded-3xl  w-1/4 h-10 text-xl"
        />
      </form>

      {/* todo list */}
      <div className="w-full h-[80vh] bg-slate-200 overflow-auto flex flex-col items-center gap-3 p-4">
        {todos.map((todo, index) => (
          <div key={index} className="bg-white w-80 flex px-2 py-2 gap-2 items-center rounded-xl shadow-md hover:shadow-xl">
            <p className=" flex-1 ml-4 text-xl overflow-hidden rounded items-center">{todo.name}</p>
            {/* delete button */}
            <Trash color="black" size={20} onClick={() => handleDelete(todo.name)} className='transition-all ease-in-out duration-300'/>
            {/* edit button */}
            <Pencil color="black" size={20} onClick={() => handleEdit(todo.name)} />
           
          </div>
        ))}
      </div>
    </>
  )
}

export default App
