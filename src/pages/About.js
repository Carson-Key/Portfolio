// Components
import Container from '../components/Container'
// Assests
import CarsonPicture from '../assets/Profile-Picture.png'
import BendiPicture from '../assets/Profile-Kitty.png'

const About = () => {
    return (
		<Container>
			<img className="float-left w-1/2 my-2 mx-2" src={CarsonPicture}/>
			<h3 className="font-bold">About Me</h3>
			<p><img className="float-right w-1/2 my-2 mx-2" src={BendiPicture}/></p>
		</Container>
	)
}

export default About
