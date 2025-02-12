import React from 'react';
import { Link, Outlet } from "react-router-dom";


export default function AboutLayout() {
  return (
    <div>
        <h1>AboutLayout</h1>
        <Link to="/about/1">About 1</Link>
        <br />
        <Link to="/about/2">About 2</Link>
        <br />
        <Link to="/about/3">About 3</Link>
        <Outlet />
    </div>
  )
}
