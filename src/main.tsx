import { createRoot } from 'react-dom/client';
import App from './app.tsx';
import './global.css';


createRoot(document.getElementById('root')!).render(
  <div className='flex flex-col w-full min-h-screen'>
    <App />
  </div>
);
