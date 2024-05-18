import Navbar from './components/navbar'
import './App.css'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import Home from './components/home'
import Favorites from './components/favorites'
import InProgress from './components/inProgress'
import Complete from './components/complete'

function App() {
  const router = createBrowserRouter ([
    {
      path: "/",
      element:  <> <Navbar/> <Home/> </>
    },
    {
      path: "/favorites",
      element:  <> <Navbar/> <Favorites/> </>
    },
    {
      path: "/inProgress",
      element:  <> <Navbar/> <InProgress/> </>
    },
    {
      path: "/complete",
      element:  <> <Navbar/> <Complete/>  </>
    },
    
  ])

  return (
    <>
      
      <RouterProvider router={router}/>
    </>
  )
}

export default App
