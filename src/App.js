import logo from './logo.svg';
import './App.css';
import Navigation from "./customer/components/Navigation/Navigation.jsx";
import HomePage from './customer/pages/HomePage/HomePage';
import Footer from './customer/footer/footer';
import Product from './customer/components/Product/Product';

function App() {
  return (
    <div className=''>
      <Navigation />
      <div>
        {/* <HomePage /> */}
        <Product />
      </div>
      <Footer />
    </div>
  );
}

export default App;
