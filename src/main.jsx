import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { CarrinhoProvider } from './context/CarrinhoContext.jsx';

const root = document.getElementById('root');

createRoot(root).render(
    <CarrinhoProvider>
        <App />
    </CarrinhoProvider>
);
