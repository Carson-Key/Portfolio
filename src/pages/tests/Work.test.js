// Packages
import renderer from 'react-test-renderer'
// Pages
import Work from '../Work'

describe('Work Page', () => {
    it('Should Render Work page', () => {
        const work = renderer.create(
            <Work />
        ).toJSON()
        expect(work).toMatchSnapshot()
    })
})