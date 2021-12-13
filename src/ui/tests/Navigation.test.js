// Packages
import renderer from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom'
// UI
import Navigation from '../Navigation'

describe('Navigation Component', () => {
    it('Should Render Navigation Component', () => {
        const navigaion = renderer.create(
            <Router>
                <Navigation />
            </Router>
        ).toJSON()
        expect(navigaion).toMatchSnapshot()
    })
})