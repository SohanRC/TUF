
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Home from './components/Home.jsx'
import UpdateCard from './components/UpdateCard.jsx'
import AddCard from './components/AddCard.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import Dashboard from './components/Dashboard.jsx'
import AdminProtected from './components/AdminProtected.jsx'
import Signin from './components/Signin.jsx'
import AllCards from './components/AllCards.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />} path='/'>
      <Route element={<Home />} path='/' />
      <Route element={<Signin />} path='signin' />
      <Route
        element={<AdminProtected>
          <Dashboard />
        </AdminProtected>}
        path='dashboard'
      />
      <Route
        element={<AdminProtected>
          <AllCards />
        </AdminProtected>}
        path='showCards'
      />
      <Route
        element={<AdminProtected>
          <AddCard />
        </AdminProtected>}
        path='addCard'
      />
      <Route
        element={<AdminProtected>
          <UpdateCard />
        </AdminProtected>}
        path='updateCard/:id'
      />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}>
    </RouterProvider>
  </Provider>

)
