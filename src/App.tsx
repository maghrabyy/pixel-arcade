import './App.css';
import { RootLayout } from './layout/RootLayout';
import { ItemsShopPage } from './pages/Items Shop Page/ItemsShopPage';
import { MyItemsPage } from './pages/My Items Page/MyItemsPage';
import { AboutUsPage } from './pages/Aboutus Page/AboutUsPage';
import { GamesListPage } from './pages/Console Page/GamesListPage';
import { ArcadeConsolePage } from './pages/Console Page/ConsolePage';
import { TicTacToe } from './Console Games/TicTacToe';
import { RockPaperScissors } from './Console Games/RockPaperScissors';

import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route path='/console' element={<GamesListPage/>}>
        <Route path='rockpaperscissor' element={<ArcadeConsolePage arcadeGame={<RockPaperScissors/>}/>}/>
        <Route path='tictactoe' element={<ArcadeConsolePage arcadeGame={<TicTacToe/>}/>}/>
      </Route>
      <Route path='/items-shop' element={<ItemsShopPage/>} />
      <Route path='/my-items' element={<MyItemsPage/>} />
      <Route path='/aboutus' element={<AboutUsPage/>} />
    </Route>
  ))
  return (
    <div className={`App bg-[url(assets/images/header.jpg)] bg-cover bg-center md:bg-top`}>
        <RouterProvider router={router} />
    </div>
  );    
}

export default App;
