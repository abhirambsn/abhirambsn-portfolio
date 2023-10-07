import { RouterProvider } from "react-router-dom";
import router from "./router";
import { PortfolioProvider } from "./components/PortfolioContext";

function App() {
  return (
    <>
      <PortfolioProvider>
        <RouterProvider router={router} />
      </PortfolioProvider>
    </>
  );
}

export default App;
