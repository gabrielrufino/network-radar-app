import {useEffect} from 'react'
import 'bulma/css/bulma.min.css';

import Header from './components/Header'

function App() {
  useEffect(() => {
    fetch('http://localhost:3000/speeds')
      .then(response => response.json())
      .then(data => console.log(data))
  }, [])

  return (
    <div>
      <Header />
      <h1>Network Radar</h1>
    </div>
  );
}

export default App;
