import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { RouterProvider  , createBrowserRouter} from 'react-router-dom'
import ResponsiveAppBar from './ResponsiveAppBar.jsx'
import { ThemeProvider } from '@emotion/react'
import theme from './theme/theme.js'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App /> ,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
    <ResponsiveAppBar/>
    <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  </StrictMode>,
)
