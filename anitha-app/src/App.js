import logo from './logo.svg';
import './App.css';
import {Avatar} from 'primereact/avatar';

function App() {
  return (
    <div className="App flex-column">
      <div className='flex justify-content-center navigation-bar h-8rem'>
        <div className='flex align-items-center justify-content-center store-locator-container text-6xl text-white-alpha-90 w-full'>
          Store Locator
        </div>
        <div className='flex align-items-center justify-content-center w-5rem'>
          <Avatar label="VA" size="xlarge" shape="circle" className='mr-3'/>
        </div>
      </div>
      <div className='flex h-auto'>
        <div className='flex-column text-white-alpha-90 font-bold w-30rem bg-green-100'>
          List Container
        </div>
        <div className='flex-column text-white-alpha-90 text-right font-bold w-full bg-pink-600'>
        <div className='flex h-30rem'>
          Map container 
        </div>
        <div className='flex align-items-stretch flex-wrap h-15rem'>
        <div className='flex w-6 justify-content-center text-white-alpha-90 font-bold bg-purple-500'>
          Store Timings
          </div>
        <div className='flex w-6 justify-content-center text-white-alpha-90 font-bold bg-blue-400'>
          Store Contact Details
          </div>
      </div>
    </div>
  </div>
 </div>

  );
}

export default App;
