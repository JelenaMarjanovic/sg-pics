import { useState } from 'react';

function App() {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <div>
        Enter some text
      </div>
      <input value={text} onChange={handleChange} />

      <h3>Your Text</h3>
      <p>
        {text}
      </p>
    </div>
  );
}

export default App;