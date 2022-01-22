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
			<div className="flex flex-col h-screen justify-between">
				<Header />
				<PageRoutes />
				<Footer />
			</div>
		</Router>
	)
}

export default App
