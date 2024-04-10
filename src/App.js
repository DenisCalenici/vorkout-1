import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Dialogs from './components/Dialogs/Dialogs'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profaile/Profaile'
import News from './components/News/News'
import Settings from './components/Settings/Settings'
import Music from './components/Music/Music'

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/profile" component={Profile} />
          <Route path="/dialogs" component={Dialogs} />
          <Route path="/music" component={Music} />
          <Route path="/news" component={News} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
