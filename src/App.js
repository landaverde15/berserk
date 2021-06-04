import './App.css';
import logo from'./logo.png';
import cart from './cart.png';
import a2 from './athlete2.jpg';
import shirt from './shirt.png';
import logoTxt from './text.png';

function App() {
  return (
    <div className="App">
      {/* header section */}
      <div className="header">
        <div className="headerCol oneHalf">
          <img className="logo" src={logo}/>
        </div>
        <div className="headerCol2 oneHalf">
          <img className="cart" src={cart}/>
        </div>
      </div>
      {/* banner section */}
      <div className="banner">
        <div className="bannerCol oneHalf mobileOneOne ">
          <p className="defLine1 bannerTxt">ber·serk</p>
          <p className="defLine2 bannerTxt">/bərˈzərk,bərˈsərk/</p>
          <p className="bannerTxt"><i>adjective</i></p>
          <p className="defLineLast bannerTxt">out of control with anger or excitement; wild or frenzied.</p>
        </div>
        <div className="bannerCol oneHalf mobileOneOne">
          <img className="imgSizer" src={a2}/>
        </div>
      </div>
      {/* products section */}
      <div className="products">
        <div className="productTitleCol">
          <p className="productsTitle">Products</p>
        </div>
        <div className="displayProducts">
          <div className="product productOneOne">
            <img className="shirtImg" src={shirt}/>
            <p>Product Name</p>
            <p>Product Price</p>
          </div>
          <div className="product productOneOne">
            <img className="shirtImg" src={shirt}/>
            <p>Product Name</p>
            <p>Product Price</p>
          </div>  
          <div className="product productOneOne">
            <img className="shirtImg" src={shirt}/>
            <p>Product Name</p>
            <p>Product Price</p>
          </div>
        </div>
      </div>
      {/* footer section */}
      <div className="footer">
        <div className="footerCol">
          <img className="footerLogo" src={logoTxt}/>
        </div>
        <div className="footerCol copyright">
          &copy; Copyright 2021
        </div>
      </div>
    </div>
  );
}

export default App;
