// Packages
import { Routes, Route } from 'react-router-dom'
// Pages
import Projects from '../pages/Projects'
import Experience from '../pages/Experience'
import Education from '../pages/Education'
import Resume from '../pages/Resume'
import About from '../pages/About'

const PageRoutes = () => {
    return (
        <Routes>
            <Route path='/Projects' element={<Projects />} />
            <Route path='/Experience' element={<Experience />} />
            <Route path="/Education" element={<Education />} />
            <Route path="/Resume" element={<Resume />} />
            <Route path="/About" element={<About />} />
            <Route path="/" element={<Projects />} />
        </Routes>
	)
}

export default PageRoutes
