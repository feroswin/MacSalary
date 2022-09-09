
import './App.css';
import Header from "./components/Header/Header";
import SectionWelcome from "./components/SectionWelcome/SectionWelcome";
import SectionSubscribe from "./components/SectionSubscribe/SectionSubscribe";

function App() {
  return (
    <div className="App">
      <Header/>
      <SectionWelcome/>
      <SectionSubscribe/>
    </div>
  );
}

export default App;
