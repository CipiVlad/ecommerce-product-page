import LandingPage from './pages/LandingPage'
import NavBar from './components/NavBar'
import './sass/App.scss'

function App() {
  const tsDummy: string = 'hello world'

  return (

    <div className="App">
      <NavBar />
      <div className="line"></div>
      <LandingPage />
    </div>

  )
}

export default App
