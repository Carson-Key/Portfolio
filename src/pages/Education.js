// Components
import Container from '../components/Container'
import EducationSection from '../ui/EducationSection'
import EducationCard from '../ui/EducationCard'

const Education = () => {
	
    return (
		<Container className="divide-y divide-solid">
			<EducationSection expand name="Oregon State University" gpa="3.56" years="2017-2021">
				<EducationCard
					title="CS 493"
					id="cs493"
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
