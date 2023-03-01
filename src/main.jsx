import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { UserProvider } from './contexts/UserContext'


ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<React.StrictMode>
			<UserProvider>
				<App />
			</UserProvider>
		</React.StrictMode>
	</BrowserRouter>
)
