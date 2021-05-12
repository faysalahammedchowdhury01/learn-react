import React, { useState } from 'react';
import './App.css';
import Lesson1 from './Lessons/Lesson-1/JSX-Element-and-Rendering';
import Lesson2 from './Lessons/Lesson-2/Component-and-Props';
import Lesson3 from './Lessons/Lesson-3/State-and-Lifecycle-in-Class-Component';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>Bismillahir Rahmanir Rahim</h1>
      <Lesson1 />
      <Lesson2 />
      <Lesson3 locale="bn-BD" />
    </div>
  );
}

export default App;
