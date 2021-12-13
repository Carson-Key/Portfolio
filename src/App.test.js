// Packages
import renderer from 'react-test-renderer'
// App
import App from './App'

describe('App', () => {
    it('Should Render App', () => {
        const app = renderer.create(
            <App />
        ).toJSON()
        expect(app).toMatchSnapshot()
    })
})