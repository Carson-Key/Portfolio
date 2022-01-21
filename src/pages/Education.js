// Components
import Container from '../components/Container'
import EducationSection from '../ui/EducationSection'
import EducationCard from '../ui/EducationCard'

const Education = () => {
	
    return (
		<Container className="divide-y divide-solid">
			<EducationSection expand name="Oregon State University" gpa="3.56" years="2017-2021">
				<EducationCard
					title="CS 461/462/463 - Capstone"
					id="capstoneclass"
					term="Fall/Winter/Spring"
					year="2021"
					objective="This course introduces the senior student to the realities of delivering professional quality software. The course provides the student a team-based opportunity to engage a real client in the software development process, from requirements gathering to continuous deployment, and to reflect upon the craft of software engineering. The course uses the Extreme Programming method, stand-up meetings, and project-specific platforms. The primary learning outcomes are: design, plan, organize, synthesize and complete a significant software project in three academic quarters; apply all aspects of the software engineering process, including project planning, requirements documents, software design, coding, testing, walk-throughs, documentation, and delivery; demonstrate good communication skills in the form of weekly reports and project talks, posters, and elevator talks; participate effectively in a team environment; analyze and organize their own career preparation; evaluate the professional, legal, and/or social implications of software product development; evaluate the contributions and importance of software projects to the broad user community; explain the importance of software projects to people from other disciplines and the general public; sevelop and articulate content knowledge and critical thinking in the discipline through frequent practice of informal and formal writing; demonstrate knowledge/understanding of audience expectations, genres, and conventions appropriate to communicating in the discipline; demonstrate the ability to compose a document of at least 2000 words through multiple aspects of writing, including brainstorming, drafting, using sources appropriately, and revising comprehensively after receiving feedback on a draft"
					textbook="GBrooks, F. (1995). The Mythical Man-Month: Essays on Software Engineering and Jeffries, R. (2015). The Nature of Software Development."
					grade="B/A-/A"
					credits="3/3/2"
					projects={[
						{name: "Guardian Group", id: "#capstone"}
					]}
				/>
				<EducationCard
					title="CS 434 - Machine Learning & Data Mining"
					id="cs434"
					term="Spring"
					year="2021"
					objective="At the completion of this course, students will be able to: apply supervised learning algorithms to prediction problems and evaluate the results; analyze data using unsupervised learning programs and evaluate the performance; implement and test reinforcement learning for control and optimization problems; formulate given learning problems appropriately as instances of supervised, unsupervised, or reinforcement learning problem"
					textbook="Geron, A. (2019). Hands-On Machine Learning with Scikit-Learn, Keras and TensorFlow: Concepts, Tools and Techniques to Build Intelligent Systems (2nd ed)"
					grade="A"
					credits="4"
				/>
				<EducationCard
					title="CS 478 - Network Security"
					id="cs478"
					term="Spring"
					year="2021"
					objective="Upon successful completion of this course, students will be able to: select among packet capture strategies for specific situations, analyze protocols to determine potential security weaknesses, create protocol fuzzers to find potential vulnerabilities, select appropriate defensive strategies based on goals"
					textbook="None"
					grade="A"
					credits="4"
				/>
				<EducationCard
					title="CS 493 - Cloud Application Development"
					id="cs493"
					term="Winter"
					year="2021"
					objective="This course covers developing RESTful cloud services, an approach based on representational state transfer technology, an architectural style and approach to communications used in modern cloud services development. It includes RESTful application design, resources, data storage models, authentication/authorization, queueing, and cloud API deployment. The primary learning outcomes are: design and implement an effective RESTful application, using appropriate HTTP verbs (GET, POST, DELETE, etc.) to access specific API resources, evaluate various approaches to representing data in API requests and responses, evaluate various approaches to alerting, use modern tools and techniques for storing API data, use modern techniques to replicate and synchronize data to ensure data safety and consistency, employ secure mechanisms for authenticating users and authorizing the use of specific portions of an API, use modern tools and techniques to queue and process API requests, select an available open-source search index to meet an API's information retrieval needs, create a publicly available cloud API, evaluate an API's performance and reliability using appropriate metrics, proper use of code, regardless of programming language."
					textbook="Gulabani, S. (2019). Amazon Web Services Bootcamp. and Yahiaoui, H. (2017). Firebase Cookbook."
					grade="A"
					credits="4"
					projects={[
						{name: "FrontEnd", id: "#cs493finalfront"}, 
						{name: "BackEnd", id: "#cs493finalback"},
						{name: "Electron", id: "#cs493finalelectron"}
					]}
				/>
			</EducationSection>
			<EducationSection name="Summit High School" years="2013-2017"/>
		</Container>
	)
}

export default Education
