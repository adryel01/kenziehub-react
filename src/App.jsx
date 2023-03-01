import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import { Register } from './pages/Register';
import { GlobalStyle } from './styles/global'
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { PageError404 } from './pages/404';

function App() {
	
	return (
		<div className="App">
			<Routes>
				<Route path='/' element={<Login/>}/>
				<Route path='/register' element={<Register/>}/>
				<Route path='/dashboard' element={<Dashboard/>}/>
				<Route path='*' element={<PageError404/>}/>
			</Routes>
			<ToastContainer/>
			<GlobalStyle/>
		</div>
	)
}

export default App
