import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

export default function Login(){
    const[username,setUsername] = useState('')
    const[password,setPassword] = useState('')

    let {setUser} = useContext(UserContext);

    const handleClick = (e) => {
        e.preventDefault();
        setUser({username,password})
    }

    return(
        <div>
            <h2>Login</h2>
            <input type="text"
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
            placeholder="username" />
            {" "}
            <input type="text"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            placeholder="password"/>
            <button onClick={handleClick}>Submit</button>
        </div>
    )
}