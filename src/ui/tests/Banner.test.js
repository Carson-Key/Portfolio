// Packages
import renderer from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom'
// UI
import Banner from '../Banner'

describe('Banner Component', () => {
    it('Should Render Banner Component', () => {
        const banner = renderer.create(
            <Router>
                <Banner />
            </Router>
        ).toJSON()
        expect(banner).toMatchSnapshot()
    })
})