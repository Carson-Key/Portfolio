// Packages
import renderer from 'react-test-renderer'
// Pages
import Resume from '../Resume'

describe('Resume Page', () => {
    it('Should Render Resume page', () => {
        const resume = renderer.create(
            <Resume />
        ).toJSON()
        expect(resume).toMatchSnapshot()
    })
})