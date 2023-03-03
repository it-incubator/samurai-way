import './App.css'
import { Content } from './components/profile/Profile'
import { Header } from './components/header/Header'
import { Navigation } from './components/navigation/Navigation'

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Navigation />
      <Content />
    </div>
  )
}

export default App
