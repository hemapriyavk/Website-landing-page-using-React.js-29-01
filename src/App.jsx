import './App.css'
import Home from './Components/Home';
// import ImageSlider from './Components/ImageSlider';
import About from './Components/About';
import ImageView from './Components/ImageView';
import Footer from './Components/Footer';
import Form from './Components/Form';
// import SeasonsColumn from './Components/SeasonsColumn';
import ImageSliderPage from './Components/ImageSliderPage';

function App() {
  return (
    <>
        <div className="App">
          <Home />
          <ImageSliderPage />
          <About />
          <ImageView />
          {/* <SeasonsColumn /> */}
          <Form />
          <Footer />
        </div>
      
    </>
  );
}

export default App;
