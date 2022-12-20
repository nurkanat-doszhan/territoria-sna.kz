// import logo from './logo.svg';
import './App.scss';
import Header from './components/Header/Header';
import BigSlider from './containers/BigSlider/BigSlider';
import Benefits from './containers/Benefits/Benefits';
import Test from './containers/Test/Test';
import OrthopedicMattress from './containers/OrthopedicMattress/OrthopedicMattress';
import Mattress1 from './containers/Mattress/Mattress1';
import Mattress2 from './containers/Mattress/Mattress2';
import Mattress3 from './containers/Mattress/Mattress3';
import Mattress4 from './containers/Mattress/Mattress4';
import OurWork from './containers/OurWork/OurWork';
import Comment from './containers/Comment/Comment';
import Faq from './containers/Faq/Faq';
import Map from './containers/Map/Map';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <BigSlider />
      <Benefits />
      <Test />
      <OrthopedicMattress />
      <Mattress1 />
      <Mattress2 />
      <Mattress3 />
      <Mattress4 />
      <OurWork />
      <Comment />
      <Faq />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
