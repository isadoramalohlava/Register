import { useState } from 'react';
import { Photo } from './components/Photo';
import { Register } from './components/Register';
import styles from './App.module.css';

function App() {
  return (
    <div id={styles.login}>
      <Register />
      <Photo />
    </div>
  )
}

export default App
