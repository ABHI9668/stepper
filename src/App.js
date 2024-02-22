import logo from './logo.svg';
import './App.css';

import Stepperr from './components/Stepperr';


const CHECKOUT_STEPS=[
  {
    name :"Customer Info",
    Component:()=> <div><h3>Provide your contact details</h3></div>
},
{
  name :"Shipping Info",
  Component:()=> <div><h3>Enter your Shipping address</h3></div>
},
{
  name :"Payment",
  Component:()=> <div><h3>Complete payment for your order</h3></div>
},
{
  name :"Delivered",
  Component:()=> <div><h3>Your Order has been Delivered</h3></div>
}
]

function App() {
  return (
    <div >
      <h2 style={{marginLeft:"20px"}}>Checkout</h2>
    <Stepperr stepsConfig={CHECKOUT_STEPS}/>
    </div>
  );
}

export default App;
