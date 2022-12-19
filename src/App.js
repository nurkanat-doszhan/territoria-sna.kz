// import logo from './logo.svg';
import './App.scss';
import Header from './components/Header/Header';
import Benefits from './containers/Benefits/Benefits';
import BigSlider from './containers/BigSlider/BigSlider';
import OrthopedicMattress from './containers/OrthopedicMattress/OrthopedicMattress';
import SpringBlock from './containers/SpringBlock/SpringBlock';
import Test from './containers/Test/Test';
import OurWork from './containers/OurWork/OurWork';
import Faq from './containers/Faq/Faq';
import Footer from './components/Footer/Footer';
import Map from './containers/Map/Map';
import Comment from './containers/Comment/Comment';

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
      <Comment />
      <Faq />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
