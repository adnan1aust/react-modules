import useSWR from "swr";

const fetcher =  async (...args) => {
    const dataStream = await fetch(...args);
    const data = await dataStream.json();
    return data;
}

const SWRExample = () => {
    const {data, error} = useSWR('https://jsonplaceholder.typicode.com/users', fetcher, {suspense: true});
    if(error) return (<h1>There is an error</h1>)
    return(
        <div>
            <h1>SWR example</h1>
            {data.map(user => <div key={user.id}>{user.name}</div>)}
        </div>
    );
}

export default SWRExample;

/*
SWR does not help with fetching, we have to use fetch api or axios to retrive the data,
wrap this component with <Suspense fallback={<h1>Loading data</h1>}><SWRExample/></Suspense> tag with
a fallback attribute to present a loader while data is being retrived
*/