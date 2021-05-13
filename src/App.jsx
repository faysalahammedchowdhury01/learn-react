import React, { useState } from 'react';
import './App.css';
/* import Lesson1 from './Lessons/Lesson-1/JSX-Element-and-Rendering';
import Lesson2 from './Lessons/Lesson-2/Component-and-Props';
import Lesson3 from './Lessons/Lesson-3/State-and-Lifecycle-in-Class-Component';
import Lesson4 from './Lessons/Lesson-4/Handling-Events--Detect-and-Control-Unnecessary-Re-Renders'; 
import Lesson5 from './Lessons/Lesson-5/Conditional-Rendering'; */

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>Bismillahir Rahmanir Rahim</h1>
      {/* <Lesson1 />
      <Lesson2 />
      <Lesson3 locale="bn-BD" />
      <Lesson4 /> 
      <Lesson5 /> */}
    </div>
  );
}

export default App;
