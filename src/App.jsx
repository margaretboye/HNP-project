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

  return (
    <div style={{ backgroundColor: "#F3F0EB", minHeight: "100vh" }}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
