import React, {useContext} from 'react';
import { UserContext } from './CompA'; // Location of UserContext

export default function CompC() {
    const user = useContext(UserContext);
    return (
    <div>
        <h3>
            Hello CompC
            <h4>By {user}</h4>    
        </h3>
        
    </div>
)
}
