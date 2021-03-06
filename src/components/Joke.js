import axios from 'axios';
import { useState, useEffect } from 'react'

function Joke({count}) { 
  const [joke, setJoke] = useState('');

  async function fetchJoke() {
    const result = await axios({
      method: 'get',
      url: 'https://icanhazdadjoke.com/',
      responseType: 'json',
      headers: {
        'Accept': 'application/json'
      }
    });
    setJoke(result.data.joke);
  }

  useEffect(() => {
    fetchJoke();
  }, [count]);

  return (
    <div>
      <h4>{joke}</h4>
    </div>
  );
}

export default Joke;
