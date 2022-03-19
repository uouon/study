import React, {useState} from 'react';
import ContextSample from './ContextSample';
import Counter from './Counter';
import Info from './Info';

const App = () => {
  const [counterVisi, setCounterVisi] = useState(false);
  const [contextVisi, setContextVisi] = useState(false);
  const [infoVisi, setInfoVisi] = useState(false);
  return (
    <div>
      Counter : <button onClick={() => {setCounterVisi(!counterVisi)}}>
        {counterVisi ? "접기" : "펼치기"}
      </button>

      {counterVisi && <Counter />}

      <hr/>

      Info : <button onClick={() => {setInfoVisi(!counterVisi)}}>
        {infoVisi ? "접기" : "펼치기"}
      </button>

      {infoVisi && <Info />}

      <hr/>

      Context : <button onClick={() => {setContextVisi(!contextVisi)}}>
        {contextVisi ? "접기" : "펼치기"}
      </button>

      {contextVisi && <ContextSample />}
    </div>
  );  
};

export default App;