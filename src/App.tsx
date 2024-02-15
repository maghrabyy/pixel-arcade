import './App.css';
import { LandingPage } from './components/LandingPage';
// import { ArcadeConsole } from './Console Games/Console/Console';
import { Content } from './components/Content';
import { ToggleableSidebar } from './components/ToggleableSidebar';
import { ShopppingCart } from './components/ShoppingCart';

function App() {
  return (
    <div className={`App bg-gradient-to-tr from-blue-900 to-purple-950`}>
        <ToggleableSidebar/>
        <ShopppingCart/>
        <LandingPage />
        <Content/>
        {/* <ArcadeConsole /> */}
    </div>
  );    
}

export default App;
