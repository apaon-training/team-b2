import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App flex-column">
      <div className='flex h-10rem'>
        <div className='flex-column w-full bg-cyan-300'>
             Store locator
        </div>
        <div className='flex-column w-5rem bg-cyan-700'>
             Avatar
        </div>
     </div>
     <div className='flex h-full'>
      <div className='flex-column w-30rem bg-cyan-300'>
        List container
      </div>
      <div className='flex-column w-full bg-cyan-500'>
        <div className='flex h-25rem'>
      <div className='flex-column w-full bg-cyan-800'>
       Detail container</div>
       </div>
       <div className='flex h-20rem'>
        <div className='flex-row w-6 bg-cyan-900'>
          Store Detail
      </div>
      <div className='flex-row w-6 bg-cyan-700'>
             store address
        </div>
      </div>
      </div>
      </div>
      </div>
    
  );
}

export default App;
