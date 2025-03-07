import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import BookDetails from './Components/BookDetails/BookDetails';
import ListedBooks from './Components/ListedBooks/ListedBooks';

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/books/:bookId',
        element: <BookDetails />,
        loader: async () => {
          const res = await fetch('/booksData.json'); 
          return res.json();
        }
      },
      {
      path:'listedBooks',
      element:<ListedBooks></ListedBooks>,
      loader: async () => {
        const res = await fetch('/booksData.json'); 
        return res.json();
      }
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer></ToastContainer>
  </StrictMode>
);
