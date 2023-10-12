import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CoinInfo from './components/coinInfo';
import { Input } from "semantic-ui-react";

const API_KEY = import.meta.env.VITE_APP_API_KEY;

function App() {
  const [list, setList] = useState(null);

  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  //On creation
  useEffect(() => {
    const fetchAllCoinData = async () => {
      const response = await fetch(
        `https://min-api.cryptocompare.com/data/all/coinlist?&api_key=${API_KEY}`
      );
      const json = await response.json();
      setList(json);
    };
    fetchAllCoinData().catch(console.error);
  }, []); 

  const searchItems = searchValue => {
    setSearchInput(searchValue);
    if (searchValue !== "") {
      const filteredData = Object.keys(list.Data).filter((item) => 
        Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      )
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(Object.keys(list.Data));
    }
  };

  console.log(list);
  return (
    <div className="App">
        <h1>My Crypto List</h1>
          <input
            type="text"
            placeholder="Search..."
            onChange={(inputString) => searchItems(inputString.target.value)}
          />

          <ul>      
            {(searchInput.length > 0)
            ? filteredResults.map((coin) => 
                  list.Data[coin].PlatformType === "blockchain" ? 
                  <CoinInfo
                    image={list.Data[coin].ImageUrl}
                    name={list.Data[coin].FullName}
                    symbol={list.Data[coin].Symbol}
                  />
                  : null
              )
            : list && Object.entries(list.Data).map(([coin]) => 
                  list.Data[coin].PlatformType === "blockchain" ? 
                  <CoinInfo
                    image={list.Data[coin].ImageUrl}
                    name={list.Data[coin].FullName}
                    symbol={list.Data[coin].Symbol}
                  />
                  : null
              )}
          </ul>
    </div>
  )
}

export default App
