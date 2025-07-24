import { useEffect } from 'react';
import './modals.css';
// import "./modal.css";

export default function Modal({ onClose }) {
  // Close on Escape key
  useEffect(() => {
    function handleEsc(e) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Stop propagation when clicking inside modal
  function handleInnerClick(e) {
    e.stopPropagation();
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={handleInnerClick}>
        <h1>Modal Title</h1>
        <p>This is a basic modal with backdrop + Esc support.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
