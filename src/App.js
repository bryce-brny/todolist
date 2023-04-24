// import logo from './logo.svg';
import './App.scss';
import { FaHome } from 'react-icons/fa'

function App() {
  return (
  <div className='container'>
    <header className='header'>
      <span>
        <FaHome/>
      </span>
      
      <h3>CC-Todolist</h3>
      
    </header>

    <aside className='sidebar'>Sidebar</aside>

    <main>Content</main>
    
  </div>
  ) 
}

export default App;
