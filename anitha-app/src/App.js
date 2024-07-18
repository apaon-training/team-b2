
import './App.css';
import {Avatar} from 'primereact/avatar';

function App() {
  return (
    <div className="App flex-column">
      <div className='flex h-10rem'>
        <div className='flex-colunm text-white-alpha-90 font-bold w-full bg-indigo-300'>
           Store Locator
        </div>
        <div className='flex-column shadow-8  w-5rem bg-pink-700'>
        <Avatar label="P"size="xlarge" shape="circle"/>
       </div>
       </div>

  <div className='flex h-full'>
   <div className='flex-column w-30rem bg-yellow-300'>
    List Container 
    </div>
    <div className='flex-column w-full bg-cyan-500'>
      <div className='flex h-30rem'>
        Map Container
      </div>
      <div className='flex-align-items-stretch flex-wrap h-20rem'>
        <div className='flex align-items-center w-6 justify-content-center bg-purple-300'>
          Store Details
        </div>
        <div className='flex align-items-center w-6 justify-content-center shadow-8 bg-purple-300'>
          Address
        </div>
     </div>
    </div>

  </div>

  </div>
  );
}


export default App;
