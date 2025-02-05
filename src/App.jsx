import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/landing";

function App() {
  const router = createBrowserRouter([
    {
      index: true,
      element: <LandingPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
