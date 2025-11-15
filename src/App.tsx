import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import Search from './components/Search'
import WeatherInfo from './components/WeatherInfo'
import WeatherApp from './components/WeatherApp';
import About from './components/About'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className="App">
        <WeatherApp />
      </div>
      <About />
      
    </>
  )
}

export default App
