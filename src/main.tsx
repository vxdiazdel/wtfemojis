import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { EmojiProvider } from '@/context/EmojiContext';
import App from './App';
import './index.css';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <EmojiProvider>
      <App />
    </EmojiProvider>
  </StrictMode>,
);
