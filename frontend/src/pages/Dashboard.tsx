import { useState } from 'react';
import { Button } from '../components/Button';
import { PlusIcon } from '../icons/PlusIcon';
import { ShareIcon } from '../icons/ShareIcon';
import { Card } from '../components/Card';
import '../index.css'
import { CreateContentModel } from '../components/CreateContentModel';
import { Sidebar } from '../components/Sidebar';
import { useContent } from '../hooks/UserContent';

function Dashboard() {
  const [modelOpen, setModelOpen] = useState(false)
  const contents = useContent()

  return (
    <div className='h-screen flex justify-center lg:justify-normal '>
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
          {contents.map(({ title, link, type, detail, content }) =>
            <Card
              key={content}
              title={title}
              link={link}
              type={type}
              detail={detail}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
