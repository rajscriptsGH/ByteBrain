
import './index.css'
import { Button } from './components/Button';
import { PlusIcon } from './icons/PlusIcon';
import { ShareIcon } from './icons/ShareIcon';
import { Card } from './components/Card';

function App() {


  return (
    <>
      <div className='flex justify-end items-end mt-5 mr-10'>
        <Button startIcon={<ShareIcon size={'lg'} />} variant='secondary' size='md' text='Share'></Button>

        <Button startIcon={<PlusIcon size='lg' />} variant='primary' size='md' text='Add content'></Button>
      </div>

      <div className='flex justify-around items-center'>
        <Card
          title='Cracked US Startup'
          link='https://www.youtube.com/watch?v=-bLHgQqkTHk'
          type='youtube' />

        <Card
          title='My Intro on X'
          link='https://x.com/rajscriptsX/status/1944876307403207116'
          type='twitter' />
      </div>







    </>
  );
}

export default App;
