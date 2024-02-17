import './App.css';
import { MainLayout } from './layout/Main-Layout';
import { ArcadeConsolePage } from './pages/Console Page/ConsolePage';
import { ItemsShopPage } from './pages/Items Shop Page/ItemsShopPage';
import { MyItemsPage } from './pages/My Items Page/MyItemsPage';
import { AboutUsPage } from './pages/Aboutus Page/AboutUsPage';
import { ContactPage } from './pages/Contact Page/ContactPage';

import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route path='/console' element={<ArcadeConsolePage/>} />
      <Route path='/items-shop' element={<ItemsShopPage/>} />
      <Route path='/my-items' element={<MyItemsPage/>} />
      <Route path='/aboutus' element={<AboutUsPage/>} />
      <Route path='/contact' element={<ContactPage/>} />
    </Route>
  ))
  return (
    <div className={`App h-screen`}>
        <RouterProvider router={router} />
    </div>
  );    
}

export default App;
