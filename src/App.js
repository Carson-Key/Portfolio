// Packages
import { BrowserRouter as Router } from 'react-router-dom'
// UI
import Header from './ui/Header'
// Components
import PageRoutes from './components/PageRoutes'

const App = () => {
	return (
		<Router>
			<Header />
			<PageRoutes />
		</Router>
	)
}

export default App
