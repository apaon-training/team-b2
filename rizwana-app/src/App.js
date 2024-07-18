import logo from './logo.svg';
import './App.css';
import { Avatar } from 'primereact/avatar';

function App() {
  return (
    <div className="App flex-column">
      <div className='flex h-10rem'>
        <div className='flex-column w-full bg-pink-500'>
             store locator
        </div>
        <div className='flex-column shadow-8 w-5rem bg-teal-600'>
        <Avatar label="SR" size="xlarge" shape="circle" />
        </div>
      </div>
      <div className='flex h-full'>
        <div className='flex-column w-30rem bg-purple-400'>
          List container
        </div>
        <div className='flex-column w-full bg-orange-200'>
           <div className='flex h-25rem'>
              <div className='flex-column w-full bg-indigo-100'>   
        Detail container</div>
        </div>
        <div className='flex h-20rem'>
        <div className='flex-column w-6 bg-yellow-300'>
           store detail
        </div>
        <div className='flex-row w-6 bg-green-300'>
          store address
          </div>
        </div>
       </div> 
      </div>
    </div>
  );
}

export default App;
