import { Outlet } from "react-router-dom";
import RoutesProvider from "./routes/Routes";

function App() {
  return (
    <>
      <RoutesProvider />
    </>
  );
}

export default App;
