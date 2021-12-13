// Packages
import { Routes, Route } from 'react-router-dom'
// Pages
import Projects from '../pages/Projects'
import Work from '../pages/Work'
import Education from '../pages/Education'
import Resume from '../pages/Resume'
import About from '../pages/About'

const PageRoutes = () => {
    return (
        <Routes>
            <Route path='/Projects' element={<Projects />} />
            <Route path='/Work' element={<Work />} />
            <Route path="/Education" element={<Education />} />
            <Route path="/Resume" element={<Resume />} />
            <Route path="/About" element={<About />} />
            <Route path="/" element={<About />} />
        </Routes>
	)
}

export default PageRoutes
