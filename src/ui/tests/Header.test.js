// Packages
import renderer from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom'
// UI
import Header from '../Header'

describe('Header Component', () => {
    it('Should Render Header Component', () => {
        const header = renderer.create(
            <Router>
                <Header />
            </Router>
        ).toJSON()
        expect(header).toMatchSnapshot()
    })
})