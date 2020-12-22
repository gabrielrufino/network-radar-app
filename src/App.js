import {useEffect} from 'react'
import 'bulma/css/bulma.min.css';

function App() {
  useEffect(() => {
    fetch('http://localhost:3000/speeds')
      .then(response => response.json())
      .then(data => console.log(data))
  }, [])

  return (
    <div>
      <h1>Network Radar</h1>
    </div>
  );
}

export default App;
