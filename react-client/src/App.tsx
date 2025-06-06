
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { Toaster } from "./styles/ui/toaster";


function App() {
  return (
  <>
    <RouterProvider router={router} />
    <Toaster />
  </>

  );
}

export default App;
