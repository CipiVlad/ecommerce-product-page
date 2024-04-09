import LandingPage from './pages/LandingPage'
import NavBar from './components/NavBar'
import './sass/App.scss'
import CounterContextProvider from './contexts/CounterContextProvider'
function App() {

  return (
    <CounterContextProvider>
      <div className="App">
        <NavBar />
        <div className="line"></div>
        <LandingPage />
      </div>
    </CounterContextProvider>
  )
}

export default App
