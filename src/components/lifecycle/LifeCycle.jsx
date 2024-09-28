import React, {useEffect, useState} from "react";
import axios from "axios";

const LifeCycle = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        handleAPI();
    }, []);

    const handleAPI = async() => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users/");
        // console.log(response.data);
        setUser(response.data);
    }

    console.log(user)
   
    return(
        <>
            <h1>Lifecycle Components</h1>
            <div >
                {user.map((data, index) => (
                    <div key={index} style={{backgroundColor: "maroon", border: "1px solid black", margin: 20}}>
                        <p style={{color: "white"}}>Nama : {data.name}</p>
                        <p>Username : {data.username}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default LifeCycle;