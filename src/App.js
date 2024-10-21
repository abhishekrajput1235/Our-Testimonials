import Testimonials from './components/Testimonials';
import './App.css';
import reviews from './data';

function App() {
  return (
    <div className="App flex justify-center items-center mt-[3rem]">
          
          <Testimonials reviews={ reviews }/>
    </div>
  );
}

export default App;
