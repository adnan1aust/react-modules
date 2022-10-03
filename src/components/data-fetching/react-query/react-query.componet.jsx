import { QueryClientProvider, QueryClient } from "react-query";
import DummyChild from "../../dummy-children/dummy-child";

const ReactQueryExample = () => {
    const client = new QueryClient();

    return(
        <div>
            <h1>React Query example</h1>
            <QueryClientProvider client={client}>
                <DummyChild/> 
                <DummyChild/>
            </QueryClientProvider>
        </div>
    );
}

export default ReactQueryExample;
/*React query helps with caching, does not need to fetch same data twice or props drilling
Only one of the child will call for data and another one will just reuse it.
*/ 