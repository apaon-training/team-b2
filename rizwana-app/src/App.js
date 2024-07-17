import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App flex-column">
      <div className='flex h-10rem'>
        <div className='flex-column w-full bg-pink-500'>
             store locator
        </div>
        <div className='flex-column w-5rem bg-teal-600'>
          Avatar
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
       </div>   
      </div>
    </div>
  );
}

export default App;
