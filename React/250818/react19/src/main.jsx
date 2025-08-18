import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import App from './App.jsx';
// import App from './App2.jsx';
import TodoApp from './App3_practice_teacher';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  // <App />
  <TodoApp />
  // </StrictMode>,
);
