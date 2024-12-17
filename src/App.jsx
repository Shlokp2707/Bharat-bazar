import Home from './pages/Home'
import Footer from './Component/Footer'
import Bigcard1 from './pages/Bigcard1'
import AppLayout from './pages/Layout/AppLayout'
import Login from './pages/Login'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import "slick-carousel/slick/slick.css" 
import Card_m from './Component/Card_m'
import Card_w from './Component/Card_w'
import Card_L from './Component/Card_L'
import Congrats from './pages/Congrats'
import SignIn from './pages/SignIn'
import Help from './pages/Help'
import Cardb from './Component/Cardb'
function App() {
   const router = createBrowserRouter([
    {
      path:'/',
      element:<AppLayout/>,
      children:[
          {
            path:'/',
            element:<Home></Home>
          },
          {
          path:'/card',
          element:<Bigcard1/>
        },
         {
          path:'/footer',
          element:<Footer/>
         },
         {
          path:'/cardm',
          element:<Card_m></Card_m>,
        },
         {
          path:'/cardf',
          element:<Cardb></Cardb>,
        },
        {
          path:'/cardw',
          element:<Card_w></Card_w>
        },
        {
          path:'/laptop',
          element:<Card_L></Card_L>,
        }, 
      ],
          },{
            path:'/',
            element:<Home/>
          },{ 
            path:'/congrats',
            element:<Congrats></Congrats>
          },          {
            path:'/login',
            element:<Login/>
          },{
            path:'/card',
            element:<Bigcard1/>
          },{
            path:':cardId',
            element:<Bigcard1/>
          }, {
            path:'/cardm',
            element:<Card_m></Card_m>,
          },{
            path:'/laptop',
            element:<Card_L></Card_L>,
          },{
            path:"/signin",
            element:<SignIn></SignIn>
          },{
            path:'/help',
            element:<Help></Help>,
          },
  ])
  return (
      <RouterProvider router={router}/>
  )}
export default App