export default async function fetchPokems() {
   const res =  await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
   return await res.json();
}