// import logo from './logo.svg';
import './App.scss';
import Header from './components/Header/Header';
import Benefits from './containers/Benefits/Benefits';
import BigSlider from './containers/BigSlider/BigSlider';
import OrthopedicMattress from './containers/OrthopedicMattress/OrthopedicMattress';
import SpringBlock from './containers/SpringBlock/SpringBlock';
import Test from './containers/Test/Test';
import OurWork from './containers/OurWork/OurWork';

function App() {
  return (
    <div className="App">
      <Header />
      <BigSlider />
      <Benefits />
      <Test />
      <OrthopedicMattress />
      <SpringBlock />
      <OurWork />
    </div>
  );
}

export default App;
