export default async function fetchTodos() {
   const res =  await fetch("https://jsonplaceholder.typicode.com/todos");
   return await res.json();
}