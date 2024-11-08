import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NewsLetter from "./components/NewsLetter/NewsLetter";
import PlayersSection from "./components/PlayersSection/PlayersSection";

function App() {
  return (
    <>
      <Header />
      <Banner />

      <PlayersSection />

      <NewsLetter />
      <Footer />
    </>
  );
}

export default App;
