import './App.css';
import HeaderFn from './Comps/headerNav';
import FooterNav from './Comps/footerNav';
import MainComp from './Comps/mainComp';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom';
import SignUpForm from './Comps/Form';
import React from 'react';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    };
  }
  unSubscribeFromAuth = null;

  componentDidMount(){
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
    })
  }
  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }

  render(){
  return (
    <div className='page-container' style={{ backgroundImage: "url(./images/bg3.png)"}}>
      <div className='content-wrap'>
      <HeaderFn currentUser={this.state.currentUser}/>
      <Routes>
        <Route path="/" element={
        <div><MainComp /></div>} />
        <Route path="/Form" element={<SignUpForm />}></Route>
      </Routes>
      <FooterNav />
      </div>
    </div>
  );
}
}

export default App;
