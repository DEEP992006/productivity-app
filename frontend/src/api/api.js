import axios from "axios"
let api_url = "http://localhost:5001/todo"
export const fetchitem = async () => {
  const b = await axios.get(api_url)
  return b.data
}
export const add = async (data) => {
  const a = await axios.post(api_url,data)
  return a
}
export const delete_todo = async (nam) => {
  console.log(nam);
  const a = await axios.delete(api_url,{
    data: {name:nam}
  })
  
  return a
}
export const edit_todo = async (name,new_name) => {
  const a = axios.put(api_url,{
    
      name:name,
      new_todo:{
        name:new_name
      }
   
  })
  return a
}