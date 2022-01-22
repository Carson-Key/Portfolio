// Components
import Container from '../components/Container'
// Assests
import CarsonPicture from '../assets/Profile-Picture.png'
import BendiPicture from '../assets/Profile-Kitty.png'

const About = () => {
    return (
		<Container className="min-h-screen">
			<img className="float-left w-1/2 my-2 mx-2 lg:w-1/5" src={CarsonPicture} alt="Picture of carson ket, wiht a beautiful centeral oregon sky and landscape background"/>
			<h3 className="font-bold">About Me</h3>
			<p>I'm a software engineer currently based out of Bend Oregon, also born and raised a Bendite! I went to Oregon State University Casacdes Campus, where I got a Bachelors of Science in Computer Science with an emphasis on Software Engineering. However, I've been programming for well over 10 years, and was fortunate enought to find my passion for programming at a fairly young age. In 2018 I took an intern position at CBT Nuggets, where I learned React and instantly fell in love with the framework. Ever since I've tried to use React in every area of my life I can, and hope to find a career as a React <img className="float-right w-1/2 lg:w-1/5 my-2 mx-2" src={BendiPicture} alt="Picture of Bendi, the kitty, who is a black and white tuxedo cat. She is half in a bag locking her chops"/> programmer. Although my skills and education are in all aspects of programming. I love to learn new and exsiting technologies, with my current sights set on learning Next.js to apply my past in PHP with my love for React. I crrently live with my adorable kitten Bendi who, as you can see in her portrait, is quite the rascal.</p>
		</Container>
	)
}

export default About
