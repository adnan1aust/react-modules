import { Suspense } from 'react';
import './App.css';
import SWRExample from './components/data-fetching/swr-lib/swr.component';

function App() {
  return (
    <div className="App">
		<Suspense fallback={<h1>Loading data</h1>}>
			<SWRExample/>
		</Suspense>
    </div>
  );
}

export default App;
