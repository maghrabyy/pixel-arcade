import './App.css';
import { LandingPage } from './components/LandingPage';
// import { ArcadeConsole } from './Console Games/Console/Console';
import { MainLayout } from './layout/Main-Layout';
import { Content } from './components/Content';
import { ToggleableSidebar } from './components/ToggleableSidebar';
import { ShopppingCart } from './components/ShoppingCart';

function App() {
  return (
    <div className={`App`}>
        <ToggleableSidebar/>
        <ShopppingCart/>
        <MainLayout>
          {/* <LandingPage /> */}
          <Content/>
        </MainLayout>
        {/* <ArcadeConsole /> */}
    </div>
  );    
}

export default App;
