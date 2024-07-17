import logo from './logo.svg';
import './App.css';

function App() {
  return (
    //Main container
    <div className="App flex-column">
      {/* Top navigation bar */}
      <div className='flex h-10rem'>
        {/* Title column */}
        <div className='flex-column w-full bg-green-300'>
             Store locator
        </div>
        {/* Avatar column */}
        <div className='flex-column shadow-8  w-5rem bg-green-700'>
             Avatar
        </div>
      </div> 
      {/* Details container */}
      <div className='flex h-full'>
        {/* List container */}
        <div className='flex-column w-30rem bg-green-300'>
           List container
        </div>  
        {/* Details container */}
        <div className='flex-column w-full bg-green-500'>
          <div className='flex h-30rem'>
            Map container
          </div>
        <div className='flex align-items-stretch flex-wrap h-20rem'>
            {/* Store details */}
            <div className='flex align-items-center w-6  justify-content-center bg-green-300'>
                Store details
            </div>
            {/* Store address */}
            <div className='flex align-items-center w-6  justify-content-center shadow-8  bg-green-700'>
                Address
            </div>
      </div>
    </div>
 </div> 
</div>
  );
}

export default App;
