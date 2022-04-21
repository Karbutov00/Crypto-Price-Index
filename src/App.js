import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Coins from "./components/Coins";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Coin from "./routes/Coin";
function App() {
    const [coins, setCoins] = useState([]);
    const url =
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

    useEffect(() => {
        axios
            .get(url)
            .then((res) => {
                setCoins(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={<Coins coins={coins} />} />
                <Route path="/coin" element={<Coin />}>
                    <Route path=":coinId" element={<Coin />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
