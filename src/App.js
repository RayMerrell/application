import './App.css';
import Spinner from 'react-bootstrap/Spinner';
import Badge from 'react-bootstrap/Badge';

function App() {
  return (
    <div className="App">
       <Spinner animation="border" variant="danger" />
       <Badge bg="secondary">Hello World</Badge>
    </div>
  );
}

export default App;
