import { Line } from 'react-chartjs-2'
import {useEffect, useState} from 'react'
import 'bulma/css/bulma.min.css'

import Header from './components/Header'

function App() {
  const [speeds, setSpeeds] = useState([])

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/speeds`)
      .then(response => response.json())
      .then(data => setSpeeds(data))
  }, [])

  return (
    <div>
      <Header />
      <Line
        data={{
          labels: speeds.map(speed => speed.started_at),
          datasets: [
            {
              label: 'Download',
              data: speeds.map(speed => speed.download)
            },
            {
              label: 'Upload',
              data: speeds.map(speed => speed.upload)
            }
          ]
        }}
      />
    </div>
  );
}

export default App;
