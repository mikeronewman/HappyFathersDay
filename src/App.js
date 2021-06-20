import { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Joke from './components/Joke';
import Doggo from './components/Doggo';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box className="app" color="primary.main">
      <Container maxWidth="sm">
        <h1>Happy Father's Day!</h1>
        <Joke count={count} />
        <Doggo count={count} />
        <Button 
          onClick={() => {
            const newValue = count + 1;
            setCount(newValue);
            console.log(count);
          }}
          variant="contained"
          color="primary"
        >
            Click at your own risk
        </Button>
      </Container>
    </Box>
  );
}

export default App;
