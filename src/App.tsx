import LandingPage from './pages/LandingPage'
import './sass/App.scss'

function App() {
  const tsDummy: string = 'hello world'

  return (

    <div className="App">
      <LandingPage />
      <h1>Hello World</h1>
      <h2>O Boy, {tsDummy}</h2>
    </div>
  )
}

export default App
