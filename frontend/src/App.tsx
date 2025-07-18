import { useState } from 'react';
import { Button } from './components/Button';
import { PlusIcon } from './icons/PlusIcon';
import { ShareIcon } from './icons/ShareIcon';
import { Card } from './components/Card';
import './index.css'
import { CreateContentModel } from './components/CreateContentModel';
import { Sidebar } from './components/Sidebar';

function App() {
  const [modelOpen, setModelOpen] = useState(false)

  return (
    <div className='h-screen flex '>
      <div>
        <Sidebar />
      </div>
      <div>
        <CreateContentModel open={modelOpen} onClose={() => {
          setModelOpen(false)
        }} />

        <div className='flex justify-end items-end mt-5 mr-10 h-auto'>
          <Button startIcon={<ShareIcon size={'lg'} />} variant='secondary' size='md' text='Share'></Button>

          <Button
            onClick={() => {
              setModelOpen(true)
            }}
            startIcon={<PlusIcon size='lg' />} variant='primary' size='md' text='Add content'></Button>
        </div>

        <div className='flex justify-around items-center flex-col sm:flex-row flex-wrap'>
          <Card
            title='My Setup'
            link='https://x.com/rajscriptsX/status/1942073859769073756'
            type='twitter'
            detail=''
          />

          <Card
            title='Cracked US Startup'
            link='https://www.youtube.com/watch?v=-bLHgQqkTHk'
            type='youtube'
            detail='Video about 100xDev success story'
          />
          <Card
            title='Cracked US Startup'
            link='https://www.youtube.com/watch?v=-bLHgQqkTHk'
            type='youtube'
            detail='Video about 100xDev success story'
          />
          <Card
            title='Notion ToDos'
            link='https://www.notion.so/ToDos-App-d270cea6af3244248ac6cdd0129a87b6?source=copy_link'
            type='note'
            detail='Notion Docs of my TODos'
          />
        </div>
      </div>
    </div>
  );
}

export default App;
