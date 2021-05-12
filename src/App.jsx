import React, { useState } from 'react';
import './App.css';
import Lesson1 from './Lessons/Lesson-1/JSX-Element-and-Rendering';
import Lesson2 from './Lessons/Lesson-2/Component-and-Props';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      Bismillahir Rahmanir Rahim
      <Lesson1 />
      <Lesson2 />
    </div>
  );
}

export default App;
