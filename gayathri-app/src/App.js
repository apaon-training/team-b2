import logo from './logo.svg';
import './App.css';
import {Avatar} from 'primereact/avatar';

function App() {
  return (
    <div className="App flex-column">
      <div className='flex h-10rem'>
        <div className='flex-column text-white-alpha-90 font-bold w-full bg-indigo-500'>
          Store Locator
        </div>
        <div className='flex-column text-white-alpha-90 font-bold w-5rem bg-orange-500'>
          <Avatar label="P" size="xlarge" shape="circle" />
        </div>
      </div>
      <div className='flex h-auto'>
        <div className='flex-column text-white-alpha-90 font-bold w-30rem bg-green-500'>
          List Container
        </div>
        <div className='flex-column text-white-alpha-90 text-right font-bold w-full bg-pink-600'>
        <div className='flex h-30rem'>
          Map container 
        </div>
        <div className='flex align-items-stretch flex-wrap column-gap-8 h-15rem'>
        <div className='flex w-4 justify-content-center text-white-alpha-90 font-bold bg-yellow-600'>
          Store Timings
          </div>
        <div className='flex w-7 justify-content-center text-white-alpha-90 font-bold bg-yellow-600'>
          Store Contact Details
          </div>
      </div>
    </div>
  </div>
 </div>

  );
}

export default App;
