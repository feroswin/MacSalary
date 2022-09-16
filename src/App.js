
import './App.css';
import Header from "./components/Header/Header";
import SectionWelcome from "./components/SectionWelcome/SectionWelcome";
import SectionSubscribe from "./components/SectionSubscribe/SectionSubscribe";
import SectionNews from "./components/SectionNews/SectionNews";
import SectionAboutUs from "./components/SectionAboutUs/SectionAboutUs";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <SectionWelcome/>
      <SectionSubscribe/>
      <SectionNews/>
      <SectionAboutUs/>
      <Footer/>
    </div>
  );
}

export default App;
