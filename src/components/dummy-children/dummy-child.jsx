import { useQuery } from "react-query";
const DummyChild = () => {
    const {data} = useQuery('users', async () => {
        const dataStream = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await dataStream.json();
        return data;
    })
    return (<div>
                <h1>Dummy Children</h1>
                {data?.map(user => <div key={user?.id}>{user?.name}</div>)}
            </div>)}
export default DummyChild;