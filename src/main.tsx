import { createRoot } from 'react-dom/client'
import { ClippyProvider } from '@react95/clippy'
import App from './components/App.tsx'
import './global.css'


createRoot(document.getElementById('root')!).render(
    <ClippyProvider>
        <App />
    </ClippyProvider>
)
