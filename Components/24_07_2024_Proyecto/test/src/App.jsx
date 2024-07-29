import "./App.css";
import data from "../data/data";
import Section from "./components/Section/Section";

const App = () => {
  return (
    <>
      {data.map((element) => (
        <Section title={element.section} items={element.items} />
      ))}
    </>
  );
};

export default App;
