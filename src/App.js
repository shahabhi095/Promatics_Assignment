import './App.css';
import { UserInformation } from './Components/UserInformation';
import { ShippingDetails } from './Components/ShippingDetails';
import { PaymentInformation } from './Components/PaymentInformation';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UserInformation/>}></Route>
        <Route path="/shipingdetails" element={<ShippingDetails/>}></Route>
        <Route path="/paymentinformation" element={<PaymentInformation/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
