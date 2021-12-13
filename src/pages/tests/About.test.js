// Packages
import renderer from 'react-test-renderer'
// Pages
import About from '../About'

describe('About Page', () => {
    it('Should Render About page', () => {
        const about = renderer.create(
            <About />
        ).toJSON()
        expect(about).toMatchSnapshot()
    })
})