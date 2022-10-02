import './App.css';
import HeaderFn from './Comps/headerNav';
import FooterNav from './Comps/footerNav';
import MainComp from './Comps/mainComp';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className='page-container' style={{ backgroundImage: "url(./images/bg3.png)"}}>
      <div className='content-wrap'>
        <HeaderFn />
        <MainComp />
        <FooterNav />
      </div>
    </div>
  );
}

export default App;
