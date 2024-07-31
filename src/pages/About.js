// Components
import Container from '../components/Container'
// Assests
import CarsonPicture from '../assets/Key-Silver-Selfie.png'
import BendiPicture from '../assets/Profile-Kitty.png'

const About = () => {
    return (
		<Container>
			<section className="m-4">
				<h2 className="font-bold text-3xl mb-4">About Me</h2>
				<div className="flex border-2 border-black rounded-xl">
					<div className="w-1/2 px-4 py-2 lg:w-1/5 border-r-2 border-black">
						<img src={CarsonPicture} alt="A selfie of Carson key and Stephen Silver (the character designer behind Danny Phantom and Kim Possible) at Comic-Con San Diego 2024"/>
						<p className="text-xs text-center font-extralight mt-1">Carson Key (on the right) and Danny Phantom character designer Stephen Silver (on the left) at Comic-Con San Diego 2024</p>
					</div>
					<p className="py-4 w-1/2 lg:w-4/5 px-6">My name is Carson Key I'm a software engineer based in beautiful Central Oregon. I've been creating software since I was 13 (and that 12 years has flown by!), starting with simple HTML/CSS websites that has now grown into building out entire full stack applications. In my free time you can either find me preparing for my next Dungeons and Dragons sessions, or playing it! I've been DMing a local group for the past 5 years, and this year I've started up two more.</p>
				</div>
				{/* <img className="float-right w-1/2 lg:w-1/5 my-2 mx-2" src={BendiPicture} alt="Bendi, the kitty, who is a black and white tuxedo cat. She is half in a bag locking her chops"/> */}
			</section>
			<section className="m-4">
				<h2 className="font-bold text-3xl">Links</h2>
				<div className='flex gap-1 mx-1 my-2'>
					<h3 className="font-bold">GitHub:</h3><a className="text-primary underline" target='_blank' href="https://github.com/Carson-Key" rel="noreferrer">https://github.com/Carson-Key</a>
				</div>
				<div className='flex gap-1 mx-1 my-2'>
					<h3 className="font-bold">LinkedIn:</h3><a className="text-primary underline" target='_blank' href="https://www.linkedin.com/in/carson-key-720a04b6/" rel="noreferrer">https://www.linkedin.com/in/carson-key-720a04b6/</a>
				</div>
			</section>
			<section className="m-4">
				<h2 className="font-bold text-3xl">Skills</h2>
				<div className='mx-1 my-2'>
					<h3 className="font-bold text-lg">AWS:</h3>
					<ul className="flex flex-wrap mx-5 mt-4 gap-4 justify-evenly">
						<li className="border-2 border-black rounded-lg px-2 py-3 w-60">
							<h4 className="font-semibold">Cloudformation</h4>
							<ul className="mx-4">
								<li className="flex gap-1"><p className="font-medium">Years of Experience:</p>2.5</li>
								<li className="flex gap-1"><p className="font-medium">Skill Level:</p>9/10</li>
							</ul>
						</li>
						<li className="border-2 border-black rounded-lg px-2 py-3 w-60">
							<h4 className="font-semibold">AWS CLI</h4>
							<ul className="mx-4">
								<li className="flex gap-1"><p className="font-medium">Years of Experience:</p>3</li>
								<li className="flex gap-1"><p className="font-medium">Skill Level:</p>7/10</li>
							</ul>
						</li>
						<li className="border-2 border-black rounded-lg px-2 py-3 w-60">
							<h4 className="font-semibold">Lambda</h4>
							<ul className="mx-4">
								<li className="flex gap-1"><p className="font-medium">Years of Experience:</p>2.5</li>
								<li className="flex gap-1"><p className="font-medium">Skill Level:</p>9/10</li>
							</ul>
						</li>
						<li className="border-2 border-black rounded-lg px-2 py-3 w-60">
							<h4 className="font-semibold">API Gateway</h4>
							<ul className="mx-4">
								<li className="flex gap-1"><p className="font-medium">Years of Experience:</p>2.5</li>
								<li className="flex gap-1"><p className="font-medium">Skill Level:</p>9/10</li>
							</ul>
						</li>
						<li className="border-2 border-black rounded-lg px-2 py-3 w-60">
							<h4 className="font-semibold">EC2</h4>
							<ul className="mx-4">
								<li className="flex gap-1"><p className="font-medium">Years of Experience:</p>1</li>
								<li className="flex gap-1"><p className="font-medium">Skill Level:</p>6/10</li>
							</ul>
						</li>
						<li className="border-2 border-black rounded-lg px-2 py-3 w-60">
							<h4 className="font-semibold">Control Tower</h4>
							<ul className="mx-4">
								<li className="flex gap-1"><p className="font-medium">Years of Experience:</p>2</li>
								<li className="flex gap-1"><p className="font-medium">Skill Level:</p>8/10</li>
							</ul>
						</li>
						<li className="border-2 border-black rounded-lg px-2 py-3 w-60">
							<h4 className="font-semibold">Idenity Center</h4>
							<ul className="mx-4">
								<li className="flex gap-1"><p className="font-medium">Years of Experience:</p>2</li>
								<li className="flex gap-1"><p className="font-medium">Skill Level:</p>8/10</li>
							</ul>
						</li>
						<li className="border-2 border-black rounded-lg px-2 py-3 w-60">
							<h4 className="font-semibold">AWS SAM</h4>
							<ul className="mx-4">
								<li className="flex gap-1"><p className="font-medium">Years of Experience:</p>2</li>
								<li className="flex gap-1"><p className="font-medium">Skill Level:</p>9/10</li>
							</ul>
						</li>
						<li className="border-2 border-black rounded-lg px-2 py-3 w-60">
							<h4 className="font-semibold">VPC</h4>
							<ul className="mx-4">
								<li className="flex gap-1"><p className="font-medium">Years of Experience:</p>1.5</li>
								<li className="flex gap-1"><p className="font-medium">Skill Level:</p>6.5/10</li>
							</ul>
						</li>
						<li className="border-2 border-black rounded-lg px-2 py-3 w-60">
							<h4 className="font-semibold">VPC VPN</h4>
							<ul className="mx-4">
								<li className="flex gap-1"><p className="font-medium">Years of Experience:</p>1</li>
								<li className="flex gap-1"><p className="font-medium">Skill Level:</p>7/10</li>
							</ul>
						</li>
						<li className="border-2 border-black rounded-lg px-2 py-3 w-60">
							<h4 className="font-semibold">Workspaces</h4>
							<ul className="mx-4">
								<li className="flex gap-1"><p className="font-medium">Years of Experience:</p>0.5</li>
								<li className="flex gap-1"><p className="font-medium">Skill Level:</p>8/10</li>
							</ul>
						</li>
						<li className="border-2 border-black rounded-lg px-2 py-3 w-60">
							<h4 className="font-semibold">SQS</h4>
							<ul className="mx-4">
								<li className="flex gap-1"><p className="font-medium">Years of Experience:</p>2</li>
								<li className="flex gap-1"><p className="font-medium">Skill Level:</p>8/10</li>
							</ul>
						</li>
						<li className="border-2 border-black rounded-lg px-2 py-3 w-60">
							<h4 className="font-semibold">IAM</h4>
							<ul className="mx-4">
								<li className="flex gap-1"><p className="font-medium">Years of Experience:</p>3</li>
								<li className="flex gap-1"><p className="font-medium">Skill Level:</p>8/10</li>
							</ul>
						</li>
						<li className="border-2 border-black rounded-lg px-2 py-3 w-60">
							<h4 className="font-semibold">Bedrock</h4>
							<ul className="mx-4">
								<li className="flex gap-1"><p className="font-medium">Years of Experience:</p>0.5</li>
								<li className="flex gap-1"><p className="font-medium">Skill Level:</p>5/10</li>
							</ul>
						</li>
						<li className="border-2 border-black rounded-lg px-2 py-3 w-60">
							<h4 className="font-semibold">Cloudwatch</h4>
							<ul className="mx-4">
								<li className="flex gap-1"><p className="font-medium">Years of Experience:</p>3</li>
								<li className="flex gap-1"><p className="font-medium">Skill Level:</p>8/10</li>
							</ul>
						</li>
						<li className="border-2 border-black rounded-lg px-2 py-3 w-60">
							<h4 className="font-semibold">DynamoDB</h4>
							<ul className="mx-4">
								<li className="flex gap-1"><p className="font-medium">Years of Experience:</p>2</li>
								<li className="flex gap-1"><p className="font-medium">Skill Level:</p>6/10</li>
							</ul>
						</li>
						<li className="border-2 border-black rounded-lg px-2 py-3 w-60">
							<h4 className="font-semibold">Amplify</h4>
							<ul className="mx-4">
								<li className="flex gap-1"><p className="font-medium">Years of Experience:</p>2.5</li>
								<li className="flex gap-1"><p className="font-medium">Skill Level:</p>7/10</li>
							</ul>
						</li>
					</ul>
				</div>
				<div className='mx-1 my-2'>
					<h3 className="font-bold text-lg">Frontend:</h3>
					<ul className="flex flex-wrap mx-5 mt-4 gap-4 justify-evenly">
						<li className="border-2 border-black rounded-lg px-2 py-3 w-60">
							<h4 className="font-semibold">React</h4>
							<ul className="mx-4">
								<li className="flex gap-1"><p className="font-medium">Years of Experience:</p>4</li>
								<li className="flex gap-1"><p className="font-medium">Skill Level:</p>9/10</li>
							</ul>
						</li>
						<li className="border-2 border-black rounded-lg px-2 py-3 w-60">
							<h4 className="font-semibold">Javascript</h4>
							<ul className="mx-4">
								<li className="flex gap-1"><p className="font-medium">Years of Experience:</p>6</li>
								<li className="flex gap-1"><p className="font-medium">Skill Level:</p>10/10</li>
							</ul>
						</li>
						<li className="border-2 border-black rounded-lg px-2 py-3 w-60">
							<h4 className="font-semibold">Typescript</h4>
							<ul className="mx-4">
								<li className="flex gap-1"><p className="font-medium">Years of Experience:</p>1</li>
								<li className="flex gap-1"><p className="font-medium">Skill Level:</p>5/10</li>
							</ul>
						</li>
						<li className="border-2 border-black rounded-lg px-2 py-3 w-60">
							<h4 className="font-semibold">HTML</h4>
							<ul className="mx-4">
								<li className="flex gap-1"><p className="font-medium">Years of Experience:</p>8</li>
								<li className="flex gap-1"><p className="font-medium">Skill Level:</p>10/10</li>
							</ul>
						</li>
						<li className="border-2 border-black rounded-lg px-2 py-3 w-60">
							<h4 className="font-semibold">CSS</h4>
							<ul className="mx-4">
								<li className="flex gap-1"><p className="font-medium">Years of Experience:</p>8</li>
								<li className="flex gap-1"><p className="font-medium">Skill Level:</p>10/10</li>
							</ul>
						</li>
						<li className="border-2 border-black rounded-lg px-2 py-3 w-60">
							<h4 className="font-semibold">Tailwind</h4>
							<ul className="mx-4">
								<li className="flex gap-1"><p className="font-medium">Years of Experience:</p>3</li>
								<li className="flex gap-1"><p className="font-medium">Skill Level:</p>10/10</li>
							</ul>
						</li>
					</ul>
				</div>
				<div className='mx-1 my-2'>
					<h3 className="font-bold text-lg">Backend:</h3>
					<ul className="flex flex-wrap mx-5 mt-4 gap-4 justify-evenly">
						<li className="border-2 border-black rounded-lg px-2 py-3 w-60">
							<h4 className="font-semibold">NodeJs</h4>
							<ul className="mx-4">
								<li className="flex gap-1"><p className="font-medium">Years of Experience:</p>4</li>
								<li className="flex gap-1"><p className="font-medium">Skill Level:</p>7/10</li>
							</ul>
						</li>
						<li className="border-2 border-black rounded-lg px-2 py-3 w-60">
							<h4 className="font-semibold">PHP</h4>
							<ul className="mx-4">
								<li className="flex gap-1"><p className="font-medium">Years of Experience:</p>6</li>
								<li className="flex gap-1"><p className="font-medium">Skill Level:</p>8/10</li>
							</ul>
						</li>
						<li className="border-2 border-black rounded-lg px-2 py-3 w-60">
							<h4 className="font-semibold">NextJs</h4>
							<ul className="mx-4">
								<li className="flex gap-1"><p className="font-medium">Years of Experience:</p>0.5</li>
								<li className="flex gap-1"><p className="font-medium">Skill Level:</p>4/10</li>
							</ul>
						</li>
						<li className="border-2 border-black rounded-lg px-2 py-3 w-60">
							<h4 className="font-semibold">Python (Lambda/Boto3)</h4>
							<ul className="mx-4">
								<li className="flex gap-1"><p className="font-medium">Years of Experience:</p>2</li>
								<li className="flex gap-1"><p className="font-medium">Skill Level:</p>8/10</li>
							</ul>
						</li>
					</ul>
				</div>
				<div className='mx-1 my-2'>
					<h3 className="font-bold text-lg">Productivity:</h3>
					<ul className="flex flex-wrap mx-5 mt-4 gap-4 justify-evenly">
						<li className="border-2 border-black rounded-lg px-2 py-3 w-60">
							<h4 className="font-semibold">Git</h4>
							<ul className="mx-4">
								<li className="flex gap-1"><p className="font-medium">Years of Experience:</p>8</li>
								<li className="flex gap-1"><p className="font-medium">Skill Level:</p>9/10</li>
							</ul>
						</li>
						<li className="border-2 border-black rounded-lg px-2 py-3 w-60">
							<h4 className="font-semibold">GitHub</h4>
							<ul className="mx-4">
								<li className="flex gap-1"><p className="font-medium">Years of Experience:</p>8</li>
								<li className="flex gap-1"><p className="font-medium">Skill Level:</p>8/10</li>
							</ul>
						</li>
						<li className="border-2 border-black rounded-lg px-2 py-3 w-60">
							<h4 className="font-semibold">GitLabs</h4>
							<ul className="mx-4">
								<li className="flex gap-1"><p className="font-medium">Years of Experience:</p>1</li>
								<li className="flex gap-1"><p className="font-medium">Skill Level:</p>6/10</li>
							</ul>
						</li>
						<li className="border-2 border-black rounded-lg px-2 py-3 w-60">
							<h4 className="font-semibold">ClickUp</h4>
							<ul className="mx-4">
								<li className="flex gap-1"><p className="font-medium">Years of Experience:</p>2</li>
								<li className="flex gap-1"><p className="font-medium">Skill Level:</p>8/10</li>
							</ul>
						</li>
						<li className="border-2 border-black rounded-lg px-2 py-3 w-60">
							<h4 className="font-semibold">Confluence</h4>
							<ul className="mx-4">
								<li className="flex gap-1"><p className="font-medium">Years of Experience:</p>2</li>
								<li className="flex gap-1"><p className="font-medium">Skill Level:</p>7/10</li>
							</ul>
						</li>
					</ul>
				</div>
			</section>
		</Container>
	)
}

export default About
