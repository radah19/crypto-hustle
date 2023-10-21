import { useRoutes } from "react-router-dom";
import CoinList from "./components/CoinList";
import DetailView from "./components/DetailView";

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <CoinList/>,
    },
    {
      path: "/coinDetails/:symbol",
      element: <DetailView />,
    },
    ]);
    
  return (
    <div className="App">
        {element}
    </div>
  )
}

export default App
