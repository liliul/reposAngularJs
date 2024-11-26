import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Provider} from 'react-redux'
import { store } from './components/redux/index.jsx'

import App from './App.jsx'
import './index.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <App />
      </Provider>
   </QueryClientProvider>
  </StrictMode>,
)
