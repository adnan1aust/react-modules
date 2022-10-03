/* import { Suspense } from 'react'; */
import './App.css';
import ReactQueryExample from './components/data-fetching/react-query/react-query.componet';

function App() {
  return (
    <div className="App">
		{/* <Suspense fallback={<h1>Loading data</h1>}> */}
			<ReactQueryExample/>
		{/* </Suspense> */}
    </div>
  );
}

export default App;
