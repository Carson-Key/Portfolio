// Packages
import renderer from 'react-test-renderer'
// Pages
import Education from '../Education'

describe('Education Page', () => {
    it('Should Render Education page', () => {
        const education = renderer.create(
            <Education />
        ).toJSON()
        expect(education).toMatchSnapshot()
    })
})