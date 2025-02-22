import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App.tsx'
<link rel="preconnect" href="https://fonts.googleapis.com"></link>
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
