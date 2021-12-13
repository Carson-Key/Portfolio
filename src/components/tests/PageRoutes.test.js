// Packages
import renderer from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom'
// Pages
import PageRoutes from '../PageRoutes'

describe('PageRoutes Component', () => {
    it('Should Render PageRoutes component', () => {
        const pageroutes = renderer.create(
            <Router>
                <PageRoutes />
            </Router>
        ).toJSON()
        expect(pageroutes).toMatchSnapshot()
    })
})