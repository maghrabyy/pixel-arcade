import './App.css';
import { RootLayout } from './layout/RootLayout';
import { ArcadeConsolePage } from './pages/Console Page/ConsolePage';
import { ItemsShopPage } from './pages/Items Shop Page/ItemsShopPage';
import { MyItemsPage } from './pages/My Items Page/MyItemsPage';
import { AboutUsPage } from './pages/Aboutus Page/AboutUsPage';
import { ContactPage } from './pages/Contact Page/ContactPage';
import { CustomAlert } from './util/Alert';

import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route path='/console' element={<ArcadeConsolePage/>} />
      <Route path='/items-shop' element={<ItemsShopPage/>} />
      <Route path='/my-items' element={<MyItemsPage/>} />
      <Route path='/aboutus' element={<AboutUsPage/>} />
      <Route path='/contact' element={<ContactPage/>} />
    </Route>
  ))
  return (
    <div className={`App bg-[url(assets/images/header.jpg)] bg-cover bg-center md:bg-top`}>
        <CustomAlert/>
        <RouterProvider router={router} />
    </div>
  );    
}

export default App;
