import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home/Home";
import Shops from "../Shops/Shops";

const router= createBrowserRouter([
      {
            path:'/',
            element:<Main></Main>,
            children:[
                  {
                        path:'/',
                        element:<Home></Home>
                  },
                  {
                        path:'shop',
                        element:<Shops></Shops>
                  }
            ]
      }
])


export default router