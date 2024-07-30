import logo from '../logo.svg'
import './Home.css';
import { Avatar } from 'primereact/avatar';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
function Home(props) {
  const onLogoutclicked = ()=>{
  props.LogoutSuccess();
  }
  return (
    <div className="App flex-column">
      <div className='flex justify-content-center h-8rem navbar'>
        <div className='flex align-items-center justify-content-center w-full text-6xl textcolor'>
             Store locator
        </div>
        <div className='flex align-items-center justify-content-center w-8rem text-6xl mr-4'>
        <Button label="logout" severity="danger" raised onClick={() => onLogoutclicked()} size= "small" />
        <Avatar label="sv" size="xlarge" shape="circle" />       
        </div>
     </div>
     <div className='flex h-full'>
      <div className='flex-column w-30rem bg-cyan-300'>
      <InputText type="text" placeholder="Search" />
      <storelist/>
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

export default Home;
