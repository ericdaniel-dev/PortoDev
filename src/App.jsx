import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from '../component/header.jsx';
import Introduction from '../component/introduction.jsx';
import Aboutme from '../component/aboutme.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Introduction/>
      <Aboutme/>
    </>
  )
}

export default App;