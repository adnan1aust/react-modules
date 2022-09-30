import { useEffect, useState } from "react";

const FetchAPIExample = () => {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        const fetchData = async () =>{
            const dataStream = await fetch('https://jsonplaceholder.typicode.com/users'); //returns data stream no actual data
            const data = await dataStream.json(); // one extra step to convert datastream to actual data
            setUsers(data);
        }
        fetchData();
    },[]);

    return(
        <div>
            <h1>Fetch API example</h1>
            {users.map(user => <div key={user?.id}>{user?.name}</div>)}
        </div>
    );
}

export default FetchAPIExample;