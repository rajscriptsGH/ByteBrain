import { useState } from 'react';
import { Button } from '../components/Button';
import { PlusIcon } from '../icons/PlusIcon';
import { ShareIcon } from '../icons/ShareIcon';
import { Card } from '../components/Card';
import '../index.css'
import { CreateContentModel } from '../components/CreateContentModel';
import { Sidebar } from '../components/Sidebar';
import { useContent } from '../hooks/UserContent';
import axios from 'axios';
import { BACKEND_URL } from '../config';

function Dashboard() {
  const [modelOpen, setModelOpen] = useState(false)
  const contents = useContent()
  const token = localStorage.getItem("token");


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
          <Button
            onClick={async () => {
              if (!token) {
                alert("You're not logged in");
                return;
              }
              try {
                const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`, {
                  share: true
                }, {
                  headers: {
                    Authorization: `Bearer ${token}`
                  }
                });

                const shareUrl = `http://localhost:5173/share/${response.data.hash}`
                await navigator.clipboard.writeText(shareUrl)
                alert("Copied to clipboard!");
              } catch (error) {
                console.error("Share failed:", error);
                alert("Failed to generate share link");
              }
            }}
            startIcon={<ShareIcon size={'lg'} />}
            variant='secondary'
            size='md'
            text='Share'>
          </Button>

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
