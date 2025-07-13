
import './App.css'
import { Button } from './components/Button';
import { PlusIcon } from './icons/PlusIcon';

function App() {


  return (
    <>
    <Button startIcon={<PlusIcon/>}  variant='primary' size='md' text='Share'></Button>
    <Button variant='secondary' size='md' text='Add content'></Button>
    </>
  );
}

export default App;
