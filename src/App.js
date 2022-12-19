// import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/layout/Main';
import Home from './components/Home/Home';
import Topic from './components/Topic/Topic';
import Statastics from './components/Statastics/Statastics';
import Blogs from './components/Blogs/Blogs';


function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>,
      children: [
        // { path: '/', element: <Home></Home> },
        { path: '/statastics', element: <Statastics></Statastics> },
        { path: '/blogs', element: <Blogs></Blogs> },
        {
          path: '/',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <Home></Home>
        },
        {
          path: '/topic/:topicId',
          loader: async ({ params }) => {
            // console.log(params);
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`)
          },

          element: <Topic></Topic>
        }
      ]
    },


    { path: '*', element: <div>This router not found</div> },


  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
