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
					objective="This course introduces the senior student to the realities of delivering professional quality software. The course provides the student a team-based opportunity to engage a real client in the software development process, from requirements gathering to continuous deployment, and to reflect upon the craft of software engineering. The course uses the Extreme Programming method, stand-up meetings, and project-specific platforms. The primary learning outcomes are: design, plan, organize, synthesize and complete a significant software project in three academic quarters; apply all aspects of the software engineering process, including project planning, requirements documents, software design, coding, testing, walk-throughs, documentation, and delivery; demonstrate good communication skills in the form of weekly reports and project talks, posters, and elevator talks; participate effectively in a team environment; analyze and organize their own career preparation; evaluate the professional, legal, and/or social implications of software product development; evaluate the contributions and importance of software projects to the broad user community; explain the importance of software projects to people from other disciplines and the general public; sevelop and articulate content knowledge and critical thinking in the discipline through frequent practice of informal and formal writing; demonstrate knowledge/understanding of audience expectations, genres, and conventions appropriate to communicating in the discipline; demonstrate the ability to compose a document of at least 2000 words through multiple aspects of writing, including brainstorming, drafting, using sources appropriately, and revising comprehensively after receiving feedback on a draft."
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
					objective="At the completion of this course, students will be able to: apply supervised learning algorithms to prediction problems and evaluate the results; analyze data using unsupervised learning programs and evaluate the performance; implement and test reinforcement learning for control and optimization problems; formulate given learning problems appropriately as instances of supervised, unsupervised, or reinforcement learning problem."
					textbook="Geron, A. (2019). Hands-On Machine Learning with Scikit-Learn, Keras and TensorFlow: Concepts, Tools and Techniques to Build Intelligent Systems (2nd ed)"
					grade="A"
					credits="4"
				/>
				<EducationCard
					title="CS 478 - Network Security"
					id="cs478"
					term="Spring"
					year="2021"
					objective="Upon successful completion of this course, students will be able to: select among packet capture strategies for specific situations, analyze protocols to determine potential security weaknesses, create protocol fuzzers to find potential vulnerabilities, select appropriate defensive strategies based on goals."
					textbook="None"
					grade="A"
					credits="4"
				/>
				<EducationCard
					title="SE 303 - Software Engineering III"
					id="se303"
					term="Spring"
					year="2021"
					objective="We strive to engineer software to accommodate change easily, but so much code that we encounter is not easy to change. It is rigid. It emits smells. We can choose to make it better, or, under the pressure of deadlines, likely make it worse. By studying known smells and targeted refactoring techniques to remove them, we become better and more efficient at engineering software for change. Furthermore, if we can incorporate these tools into a repeatable process, we might see a discipline of software engineering emerge, rather than a subjective art. In this course, we introduce students to smells and refactoring techniques to improve the quality and maintainability of software. And, we'll explore advanced tools, such as containers, and processes such as continuous integration, to enhance the discipline in our daily work. recognize flaws in software design (e.g. “code smells”), sescribe common refactoring techniques, apply refactoring techniques in a test-driven process to improve the quality and maintainability of code, describe deployment processes such as continuous integration and continuous delivery, apply tools for managing the construction and deployment of N-tier applications for virtualized environments, sescribe the benefits and drawbacks of containers for managing development and production environments, apply containerization tools to create development and production environments, participate effectively in a software engineering team."
					textbook="Fowler, M. (2019). Refactoring: Improving the Design of Existing Code, 2nd Edition and Metz, S. (2021). 99 Bottles of OOP, 2nd Edition"
					grade="A"
					credits="4"
				/>
				<EducationCard
					title="SE 468 - Business of Software III"
					id="se468"
					term="Spring"
					year="2021"
					objective="Creating a software product is one thing, and selling it is another. Every SaaS product shares a common set of requirements: providing a recurring subscription model, end-user subscription management, administrative customer management, and, most importantly, conducting monetary transactions. In this term of the sequence, we will create this common suite of functionality that every SaaS product needs in order to be successful and generate revenue. Our learning outcomes include: execute a software-as-a-service (SaaS) business model, from ideation to sales; apply software engineering techniques to iteratively improve a software product to meet customer requirements and market demand; implement product management processes and techniques to design, build, and scale a software-as-a-service platform; integrate e-commerce tools and systems for monetary transactions; execute a marketing and sales plan; discuss the management of a startup software business; present a business and its product for capital investment; participate effectively in a team environment."
					textbook="Savoia, A. (2019). The Right It. Harper One. and Oliver, C. (2021). Payments with Ruby on Rails Master Class."
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
