
import './App.css';
import { Data1 } from './reacttasks/data1';
import { Excercise2 } from './reacttasks/excercise2';

import { Home } from './reacttasks/home';
import {
  RouterProvider, createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet
} from 'react-router-dom';
import { Excercise1 } from './reacttasks/excercise1';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Outlet/>}>
      <Route path="/Excercise1" element={<Excercise1 />} />
      <Route path="/excercise2" element={<Excercise2 />} />
      {/* <Route path="/task3" element={<Task3 />} /> */}
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
