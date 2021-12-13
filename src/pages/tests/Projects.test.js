// Packages
import renderer from 'react-test-renderer'
// Pages
import Projects from '../About'

describe('Projects Page', () => {
    it('Should Render Projects page', () => {
        const projects = renderer.create(
            <Projects />
        ).toJSON()
        expect(projects).toMatchSnapshot()
    })
})