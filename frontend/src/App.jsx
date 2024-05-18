import Navbar from './components/navbar'
import './App.css'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import Home from './components/home'
import Favorites from './components/favorites'
import InProgress from './components/inProgress'
import Complete from './components/complete'
import ClickMe from './components/clickMe'

function App() {
  const router = createBrowserRouter ([
    {
      path: "/",
      element:  <> <Navbar/>  <Home/> </>
    },
    {
      path: "/favorites",
      element:  <>  <Navbar/> <Favorites/> </>
    },
    {
      path: "/inProgress",
      element:  <>  <Navbar/> <InProgress/> </>
    },
    {
      path: "/complete",
      element:  <>  <Navbar/> <Complete/>  </>
    },
    
  ])

  return (
    <>
      <ClickMe/>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
