import './styles/App.css';
import Header from './components/Header';
import Form from './components/Form'
import Table from './components/Table';
import { useState } from 'react';

function App() {

  const [list, setList] = useState([])
  const handleDataChange = (data) => {
    setList(data);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Form onDataChange={handleDataChange}/>
        <Table users={list}/>
      </header>
    </div>
  );
}

export default App;
