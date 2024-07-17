import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App flex-column">
      <div className='flex h-10rem'>
        <div className='flex-column w-full bg-teal-500'>
          Store Locator
        </div>
        <div className='flex-column w-5rem bg-teal-700'>
          Avatar
        </div>
      </div>

      <div className='flex h-full'>
        <div className='flex-column w-30rem bg-pink-500'>
          List Container
        </div>
        <div className='flex-column w-full bg-pink-600'>
          Detail Container
        </div>

      </div>

    </div>
  );
}

export default App;
