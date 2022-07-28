import { useState, useEffect, useRef } from 'react';
import './App.css';
import List from './components/List'
import Form from './components/Form'
import { Sub } from './types';

const INITIAL_STATE = [
  {
    nick: 'dapelu',
    subMonths: 7,
    avatar: 'https://i.pravatar.cc/150',
    description: 'este zasddasasdsadasdsad'
  },
  {
    nick: 'tujuan',
    subMonths: 10,
    avatar: 'https://i.pravatar.cc/150',
    description: 'culote'
  }
]

interface AppState {
  subs: Array<Sub>
  newSubsNumber: number
}


function App() {
  // Array tipo generico parametrizable
  const [subs, setSubs] = useState<AppState["subs"]>([])
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0)

  const divRef = useRef<HTMLDivElement>(null)
  // al montarse el componente
  useEffect(() => {
    setSubs(INITIAL_STATE)
  }, [])
  
  const handleNewSub = (newSub: Sub): void => {
    setSubs(subs => [...subs, newSub])
  }

  return (
    <div className="App" ref={divRef}>
      <h1>Subs</h1>
      <List subs={subs}/>
      <Form onNewSub={handleNewSub}></Form>
    </div>
  );
}

export default App;
