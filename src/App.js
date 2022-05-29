import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Card date={"28/10/2020"} brand={"Amazon"} image="https://www.hoo-zoo.com/wp-content/uploads/2021/01/amazon-app-icon-20.jpg"
      pay={"Pay"} platform={"Desktop"} color={"#f4a540"}/>
      <Card date={"17 Sep 2020"} brand={"Apple"} image="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png"
      pay={"Payment"} platform={"MacOS"} color={"#f5f5f5"}/>
    </div>
  );
}

export default App;
