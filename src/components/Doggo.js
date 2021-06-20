import axios from 'axios';
import { useState, useEffect } from 'react';

function Doggo(count) {
  const [doggo, setDoggo] = useState('');

  async function fetchDoggoUrl() {
    const result = await axios({
      method: 'get',
      url: 'https://api.thedogapi.com/v1/images/search',
      responseType: 'json',
    });

    setDoggo(result.data[0].url);
  }

  useEffect(() => {
    fetchDoggoUrl();
  }, [count]);

  return (
    <div>
      <img 
        className="doggoImg"
        src={doggo} 
        alt="The best random doggo you ever did see" 
      />
    </div>
  );
}

export default Doggo
