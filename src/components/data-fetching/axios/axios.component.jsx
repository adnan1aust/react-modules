import { useEffect, useState } from "react";
import axios from "axios";

const AxiosExample = () => {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        const fetchData = async () =>{
            const dataObj = await axios.get('https://jsonplaceholder.typicode.com/users'); //actual data in response data property
            setUsers(dataObj.data);
        }
        fetchData();
    },[]);

    return(
        <div>
            <h1>Axios example</h1>
            {users.map(user => <div key={user?.id}>{user?.name}</div>)}
        </div>
    );
}

export default AxiosExample;