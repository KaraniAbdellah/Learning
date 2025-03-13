import React, {useState, createContext} from 'react';
import CompB from './CompB';


export const UserContext = createContext();

export default function CompA() {
    const [user, setUser] = useState("Abdellah");
    return (
        <div>
            <h3>
                Hello CompA
                <UserContext.Provider value={user}>
                    <CompB user={user}></CompB>
                </UserContext.Provider>
            </h3>
        </div>
    );
}

