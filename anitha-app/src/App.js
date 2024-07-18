
import './App.css';

function App() {
  return (
    <div className="App flex-column">
      <div className='flex h-10rem'>
        <div className='flex-colunm w-full bg-indigo-300'>
           store locator
        </div>
        <div className='flex-column w-5rem bg-pink-700'>
         Avatar
       </div>
       </div>

  <div className='flex h-full'>
   <div className='flex-column w-30rem bg-yellow-300'>
    List container 
    </div>
    <div className='flex-column w-full bg-cyan-500'>
      Detail container
    </div>

  </div>

  </div>
  );
}


export default App;
