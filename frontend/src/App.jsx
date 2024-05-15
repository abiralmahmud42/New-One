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
      element: <Home/>
    },
    {
      path: "/favorites",
      element: <Favorites/>
    },
    {
      path: "/inProgress",
      element: <InProgress/>
    },
    {
      path: "/complete",
      element: <Complete/>
    },
    
  ])

  return (
    <>
      <Navbar/>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
