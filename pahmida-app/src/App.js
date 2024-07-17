import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App flex-column">
     <div className='flex h-10rem'>
      <div className='flex-column w-full bg-pink-200'>
       store locator
      </div>
        <div className='flex-column w-5rem bg-pink-300'>
            Avatar
        </div>
    </div>

     <div className='flex h-full'>
      <div className='flex-column w-30rem bg-pink-400'>
         list container
      </div>
      <div className='flex-column w-full bg-pink-500'>
        <div className='flex h-25rem '>
           Detail container
         </div>
         <div className='flex-column w-full bg-pink-600'>
          <div className='flex h-20rem'>
     <div className='flex h-20rem'>
      <div className='flex-row w-30rem bg-pink-200'>
       details
      </div>
        <div className='flex-row w-30rem bg-pink-300'>
            phone number
        </div>
    </div>
          </div>
          </div>
          </div>
      </div>
      </div>
  );
}

export default App;
