import React, { useState } from 'react';
import './App.css';
import Lesson1 from './Lessons/Lesson-1/JSX-Element-and-Rendering';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      Bismillahir Rahmanir Rahim
      <Lesson1 />
    </div>
  );
}

export default App;
