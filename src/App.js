import { BrowserRouter, Route } from "react-router-dom"
import Home from "./components/Home"
import LoginPage from "./components/LoginPage"

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Route path='/' exact component={Home} />
        <Route path='/authentication' component={LoginPage} />
      </div>
    </BrowserRouter>
  )
}

export default App
