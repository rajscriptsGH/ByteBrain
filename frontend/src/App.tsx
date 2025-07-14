
import './index.css'
import { Button } from './components/Button';
import { PlusIcon } from './icons/PlusIcon';
import { ShareIcon } from './icons/ShareIcon';
import { Card } from './components/Card';

function App() {


  return (
    <>
    <div className='flex'>
    <Button startIcon={<ShareIcon size={'lg'}/>}  variant='secondary' size='md' text='Share'></Button>

    <Button startIcon={<PlusIcon size='lg'/>} variant='primary' size='md' text='Add content'></Button>
    </div>

    <div>
      <Card/>
    </div>







    </>
  );
}

export default App;
