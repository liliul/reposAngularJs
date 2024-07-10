import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './app.css'
import { CreateTripPage } from "./pages/create-trip";
import { TripDetailsPage } from "./pages/trip-datalis";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateTripPage />,
  },
  {
    path: "/trips/:tripId",
    element: <TripDetailsPage />
  }
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App