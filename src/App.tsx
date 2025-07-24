import { useState } from 'react';
import './App.css';
import Modal from './modals/modals';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bodybut">
        <button onClick={() => setIsOpen(true)}>Open Modal</button>
      </div>
      {isOpen && <Modal onClose={() => setIsOpen(false)} />}
    </>
  );
}

export default App;
