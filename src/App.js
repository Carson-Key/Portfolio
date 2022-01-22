// Packages
import { BrowserRouter as Router } from 'react-router-dom'
// UI
import Header from './ui/Header'
import Footer from './ui/Footer'
// Components
import PageRoutes from './components/PageRoutes'

const App = () => {
	return (
		<Router>
			<Header />
			<PageRoutes />
			<Footer />
		</Router>
	)
}

export default App
