import { Routes, Route } from 'react-router';

function App() {
  return (
    <Routes>
      <Route path="*" element={<h1>Default Page</h1>}></Route>
      <Route path="/" element={<a href='http://127.0.0.1:3000/auth/google'>Login With Google</a>}></Route>
      <Route path='/auth/google/callback' element={<h1>Hello User</h1>}></Route>
      <Route path='/auth/failure' element={<h1>Hello Failure</h1>}></Route>
      <Route path='/protected' element={<h1>Hello Protected</h1>}></Route>
    </Routes>
  );
}

export default App;

