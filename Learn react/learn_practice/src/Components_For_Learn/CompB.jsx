import React, { useContext } from 'react';
import CompC from './CompC';
import { UserContext } from './CompA';


export default function CompB() {
    const user = useContext(UserContext);
  return (
    <div>
        <h3>
            Hello CompB
            <h4>By {user}</h4>
            <CompC></CompC>
        </h3>
    </div>
  )
}
