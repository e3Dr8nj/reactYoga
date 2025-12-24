import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '100px', fontFamily: 'Arial' }}>
      <h1>Мой первый проект на Vite + React</h1>
      <p>Счётчик: {count}</p>
      <button onClick={() => setCount(count + 1)} style={{ padding: '10px 20px', fontSize: '18px' }}>
        Увеличить на 1
      </button>
    </div>
  );
}

export default App;