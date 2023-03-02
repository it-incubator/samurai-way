import './App.css';
import Technologies from './components/technologies/Technologies';
import Header from './components/header/Header';
import { Footer } from './components/footer/Footer';
const App = () => {
  return (
    <div>
      <Header />
      <Technologies />
      <Footer />
    </div>
  )
}

export default App;
