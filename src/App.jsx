import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NewsLetter from "./components/NewsLetter/NewsLetter";
import PlayersSection from "./components/PlayersSection/PlayersSection";

function App() {
  const [coin, setCoin] = useState(0);

  const handleClaimCoin = () => {
    setCoin(coin + 100000);
  };
  return (
    <>
      <Header coin={coin} />
      <Banner handleClaimCoin={handleClaimCoin} />

      <PlayersSection coin={coin} setCoin={setCoin} />

      <NewsLetter />
      <Footer />
    </>
  );
}

export default App;
