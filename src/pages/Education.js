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
					term="Every"
					year="2020/2021"
					objective="This course introduces the senior student to the realities of delivering professional quality software. The course provides the student a team-based opportunity to engage a real client in the software development process, from requirements gathering to continuous deployment, and to reflect upon the craft of software engineering. The course uses the Extreme Programming method, stand-up meetings, and project-specific platforms. The primary learning outcomes are: design, plan, organize, synthesize and complete a significant software project in three academic quarters; apply all aspects of the software engineering process, including project planning, requirements documents, software design, coding, testing, walk-throughs, documentation, and delivery; demonstrate good communication skills in the form of weekly reports and project talks, posters, and elevator talks; participate effectively in a team environment; analyze and organize their own career preparation; evaluate the professional, legal, and/or social implications of software product development; evaluate the contributions and importance of software projects to the broad user community; explain the importance of software projects to people from other disciplines and the general public; sevelop and articulate content knowledge and critical thinking in the discipline through frequent practice of informal and formal writing; demonstrate knowledge/understanding of audience expectations, genres, and conventions appropriate to communicating in the discipline; demonstrate the ability to compose a document of at least 2000 words through multiple aspects of writing, including brainstorming, drafting, using sources appropriately, and revising comprehensively after receiving feedback on a draft."
					textbook="GBrooks, F. (1995). The Mythical Man-Month: Essays on Software Engineering. and Jeffries, R. (2015). The Nature of Software Development."
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
					textbook="Geron, A. (2019). Hands-On Machine Learning with Scikit-Learn and TensorFlow: Concepts, Tools and Techniques to Build Intelligent Systems"
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
					textbook="Fowler, M. (2019). Refactoring: Improving the Design of Existing Code and Metz, S. (2021). 99 Bottles of OOP"
					grade="A"
					credits="4"
					projects={[
						{name: "House", id: "#se303final"}
					]}
				/>
				<EducationCard
					title="SE 468 - Business of Software III"
					id="se468"
					term="Spring"
					year="2021"
					objective="Creating a software product is one thing, and selling it is another. Every SaaS product shares a common set of requirements: providing a recurring subscription model, end-user subscription management, administrative customer management, and, most importantly, conducting monetary transactions. In this term of the sequence, we will create this common suite of functionality that every SaaS product needs in order to be successful and generate revenue. Our learning outcomes include: execute a software-as-a-service (SaaS) business model, from ideation to sales; apply software engineering techniques to iteratively improve a software product to meet customer requirements and market demand; implement product management processes and techniques to design, build, and scale a software-as-a-service platform; integrate e-commerce tools and systems for monetary transactions; execute a marketing and sales plan; discuss the management of a startup software business; present a business and its product for capital investment; participate effectively in a team environment."
					textbook="Savoia, A. (2019). The Right It. and Oliver, C. (2021). Payments with Ruby on Rails Master Class."
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
				<EducationCard
					title="SE 467 - Business of Software II"
					id="se467"
					term="Winter"
					year="2021"
					objective="This course provides its students with an opportunity to build a business selling software as a service (SaaS). Students shall focus on product development, interpreting customer feedback, architecting multi-tenant systems, and how to conduct monetary subscription transactions online. The goal is for each student-led product team to create and deploy a minimum viable product and an online commerce system enabling a customer to purchase the product. The primary learning outcomes are: execute a software-as-a-service (SaaS) business model, from ideation to sales; apply software engineering techniques to iteratively improve a software product to meet customer requirements and market demand; implement product management processes and techniques to design, build, and scale a software-as-a-service platform; integrate e-commerce tools and systems for monetary transactions; execute a marketing and sales plan; discuss the management of a startup software business; present a business and its product for capital investment; participate effectively in a team environment."
					textbook="Olsen, D. (2015). The Lean Product Playbook."
					grade="A"
					credits="4"
				/>
				<EducationCard
					title="CS 466 - Web-Based StartUp Project"
					id="cs466"
					term="Fall"
					year="2020"
					objective="This course introduces position the student in the context of working at a “tech” startup to design a new product that solves a problem and can be sold for money. The senior student shall conduct investigations of product ideas, test hypotheses, identify revenue models, and conduct customer experiments. The course provides a hands-on, team-based experience involving discovery, design, product evaluation, rapid iteration, analytics to inform decision making. The primary learning outcomes are: identify the key elements of a business model and explain the importance of articulating and testing the assumptions related to web and mobile web startups, interview customers to iterate and refine key assumptions comprising the value proposition and business model, identify state-of-the-art technologies available in web/mobile delivery, design and deliver a minimal viable product in a web or mobile application, synthesize customer feedback to refine product-market fit, explain importance of build-measure-learn process."
					textbook="Ries, E. (2011). The Lean Startup. and Aulet, B. (2013). Disciplined Entrepreneurship."
					grade="A-"
					credits="4"
				/>
				<EducationCard
					title="CS 492 - Mobile Software Development"
					id="cs492"
					term="Fall"
					year="2020"
					objective="This course introduces students to mobile software development, emphasizing the important principles of mobile software and devices, and industry-relevant frameworks, libraries, and tools. The course provides students a hands-on, project-driven experience to apply a modern mobile software development environment to explore design patterns, language features, libraries, implementation recipes, software architecture, development workflow, and user interface design. The primary learning outcomes are: design and create applications on one or more modern mobile platforms; use mobile development tools, such as device emulators, for developing and testing applications; apply appropriate design principles to create an effective mobile application interface; employ elements of responsive design to create mobile applications that work on different screen sizes; use other apps on a mobile device to perform operations such as mapping and content sharing; rmploy different kinds of on-device data storage, such as preferences, on-device databases, and file-based storage; evaluate mobile application performance and apply appropriate optimization techniques to allow the application to scale; use analytics tools to understand in-app user behavior."
					textbook="Windmill, E. (2019) Flutter in Action."
					grade="A"
					credits="4"
				/>
				<EducationCard
					title="CS 475 - Intro to Parrell Programming"
					id="cs475"
					term="Summer"
					year="2020"
					objective="Theoretical and practical survey of parallel programming, including a discussion of parallel architectures, parallel programming paradigms, and parallel algorithms. Programming one or more parallel computers in a higher-level parallel language."
					textbook="None"
					grade="A-"
					credits="4"
				/>
				<EducationCard
					title="CS 362 - Software Engineering II"
					id="cs362"
					term="Spring"
					year="2020"
					objective="This course continues an exploration of the fundamental concepts in software engineering based on best practices and cutting edge technologies, methodologies and architectures. The course provides the experienced student the opportunity to build applications using today's most relevant technology, informed by today's best practices, and supports the skills and perspective necessary for analyzing and constructing real-world software. The primary learning outcomes are: apply automated tools such as make and CVS in a realistic setting; describe the cost-benefit trade-offs inherent in the use of automated tools for building software and configuration management; describe several techniques for validating and measuring the quality of software; use appropriate techniques and tools, including a debugger, to locate program faults; describe several types of maintenance processes associated with correcting and enhancing software systems; participate effectively in a software inspection; participate effectively in a team environment. Also including: improve legacy software via refactoring, testing and other best practices; apply testing techniques, including black-box and white-box techniques, automatic testing activities and regression testing; sefine essential vocabulary from the corpus of software engineering; sistinguish benefits and drawbacks of tools, technologies and methodologies; apply postmodern languages, tools and methodologies to create usable software; apply architectural, integration and object-oriented design patterns; an ability to identify, formulate, and solve engineering problems based on a fundamental understanding of concepts of software engineering topics; an ability to use the techniques, skills and modern engineering tools necessary for software engineering practice."
					textbook="Feathers, M. (2005). Working Effectively with Legacy Code. and Rappin, N. (2018). Rails 5 Test Prescriptions."
					grade="A"
					credits="4"
				/>
				<EducationCard
					title="CS 381 - Programming Language fund."
					id="cs381"
					term="Spring"
					year="2020"
					objective="This course is an examination of the constructs of programming languages, the four major programming paradigms, and several programming languages, including their application and underlying execution models. The paradigms examined in this course include imperative, object-oriented, functional, and logical. Students will gain exposure to and experience in a variety of languages, including Perl, Prolog, Python, and Racket. Other languages will be discussed in context in lectures: define abstract syntax for a language that is given in concrete syntax; produce and explain the output of a given program under static versus dynamic scoping mechanisms; produce and explain the behavior of a given program under static versus dynamic typing mechanisms; produce and explain the output of a given program under a selection of parameter passing mechanisms, such as by-value, by-reference, by-constant, by-result, by-value-result, and by-name; produce and explain the contents of the run-time stack of a given program as it stands at any moment in program execution; produce programs exhibiting the following kinds of polymorphism: parametric polymorphism, overloading, and subtype polymorphism, and explain their advantages and disadvantages; explain exception handling mechanisms and demonstrate the effects of exceptions on the runtime stack; explain the differences between imperative, functional, object-oriented, and one other programming language paradigm, and why it is important to understand these programming language paradigms; define the semantics of simple languages or for individual language constructs using axiomatic, operational, or denotational semantics, and given such definitions, predict specific program values or relationships between values using the definitions."
					textbook="Sebesta, R. (2018). Concepts of Programming Languages."
					grade="A-"
					credits="4"
				/>
				<EducationCard
					title="CS 444 - Operating Systems II"
					id="cs444"
					term="Spring"
					year="2020"
					objective="This course is intended as an introduction to the implementation of a modern operating system. This will involve implementing pieces of a Unix-like kernel, as well as additional coding projects intended to further your understanding. Upon completion of this course, students will be able to: explain why synchronization is necessary for a concurrent processes scenario, and design synchronization solutions; analyze program data access patterns that may affect the performance of a virtual memory system; design, implement, and test operating system related functions within a large and complex open source code base; select appropriately among processes, user threads, or kernel threads to solve a concurrent problem; apply appropriate algorithms to avoid deadlock for given concurrent processes; explain the strengths and weaknesses of several CPU scheduling algorithms with respect to wait time, turnaround time, throughput, and context-switching implementation challenges; explain various mechanism for protection of memory, the operating system, and system/user files; map virtual addresses to physical addresses; explain various disk block allocation / free-space management strategies; compute access times for various disk scheduling algorithms; participate effectively in a team environment; for CS544 students (or aggressive undergrads): Synthesize and apply concurrency concepts to implement solutions to classical concurrency problems."
					textbook="Operating Systems: Three Easy Pieces by Remzi Arpaci-Dusseau & Andrea Arpaci-Dusseau. and xv6: a simple, Unix-like teaching operating system, 2017 draft by Russ Cox, Frans Kaashoek, and Robert Morris. "
					grade="B+"
					credits="4"
				/>
				<EducationCard
					title="CS 340 - Intro to Databases"
					id="cs340"
					term="Winter"
					year="2020"
					objective="This course introduces the concepts of data, data modeling, relational database concepts, and relational database management systems. The course provides the student the opportunity to write programs that interact with data, gather requirements for database schemas, design and implement relational schemas, understand relational algebra, and work with SQL queries. The course uses the SQLite relational database management system. The primary learning outcomes are: describe the difference between a relational database and a flat file; model a moderately complex data set by using an ER or UML diagram, and derive a relational schema from that diagram; create a relational database from a relational schema; create multiple indices in a relational database, and explain when and why such indices are appropriate; formulate SQL statements for data manipulation; formulate simple queries in relational algebra by using projection, selection, product, and join operations; describe the components and interfaces of a Web-based database system; Design and implement a Web-based relational database system, using one or more scripting languages and an open-source database development system."
					textbook="Murach's MySQL (3rd Edition), by Joel Murach."
					grade="A"
					credits="4"
				/>
				<EducationCard
					title="CS 344 - Operating Systems I"
					id="cs344"
					term="Winter"
					year="2020"
					objective="Introduction to operating systems using UNIX as the case study. System calls and utilities, fundamentals of processes and inter-process communication. The primary learning outcomes are: explain why multiprogramming is important for modern operating systems, explain the general structure of a multi-programmed operating system, explain the purpose and operation of system calls, write programs utilizing system calls, write programs using a scripting language (bash), write a program that uses regular expressions to parse input data, write a program that spawns processes and provides mutual exclusion for variables or other resources shared by the processes, write a program that uses sockets to implement a client/server system."
					textbook="THE LINUX PROGRAMMING INTERFACE by Michael Kerrisk"
					grade="B"
					credits="4"
				/>
				<EducationCard
					title="CS 361 - Software Engineering I"
					id="cs361"
					term="Winter"
					year="2020"
					objective="This course introduces the fundamental concepts in software engineering based on best practices and cutting edge technologies, methodologies and architectures. The course provides the experienced student the opportunity to build applications using today's most relevant technology, informed by today's best practices, and supports the skills and perspective necessary for analyzing and constructing real-world software. The primary learning outcomes are: define essential vocabulary from the corpus of software engineering; distinguish benefits and drawbacks of tools, technologies and methodologies; apply postmodern languages, tools and methodologies to create usable software; construct, analyze and deconstruct a software specification into components and architecture; design and construct multiple applications that meet functional requirements; compare and assess the quality of written computer programs, tools and architectures; design and conduct experiments and to analyze and interpret data related to software and hardware design solutions; identify, formulate, and solve engineering problems based on a fundamental understanding of concepts of software engineering topics; articulate personal, professional, and ethical responsibility in software engineering; use the techniques, skills and modern engineering tools necessary for software engineering practice. Also including: select the most appropriate software process model to use in a particular situation, synthesize requirements for a realistic software system and write a requirements specification document, model system requirements using one or more semi-formal notations such as UML, dataflow diagrams, entity-relationship diagrams, or state diagrams, design software systems at an architectural level and at lower levels, using one or more techniques, such as object-oriented design or agile methods, and express these designs in design specification documents, validate designs and adjust the specification or design as necessary, describe several methods of estimating the cost and developing a schedule for a programming project, participate effectively in a team environment, produce professional-quality software-related documents."
					textbook="Martin, R. (2008). Clean Code. and Metz, S. (2013). Practical Object-Oriented Design in Ruby."
					grade="A-"
					credits="4"
				/>
				<EducationCard
					title="CS 325 - Analysis of Algorithms"
					id="cs325"
					term="Fall"
					year="2019"
					objective="At the completion of this course, students will be able to: use O, Ω, Θ, and simple recurrences to analyze time complexity of recursive algorithms; prove the correctness of algorithms; implement recursive, iterative and heuristic algorithms; prove that a problem is NP-complete using reductions."
					textbook="Algorithms by Jeff Erickson (2019)."
					grade="B+"
					credits="4"
				/>
				<EducationCard
					title="CS 352 - Intro to Usability"
					id="cs352"
					term="Fall"
					year="2019"
					objective="Basic principles of usability engineering methods for the design and evaluation of software systems. Includes the study of human-machine interactions, user interface characteristics and design strategies, software evaluation methods, and related guidelines and standards. At the completion of this course, students should be able to: describe the human centered design process and usability engineering process and their roles in system design and development; discuss usability design guidelines, their foundations, assumptions, advantages, and weaknesses; describe basics of human subjects research; complete a basic human subjects research certification form; design a user interface based on analysis of human needs and prepare a prototype system; assess user interfaces using different usability engineering techniques; make a final report that justifies design decisions."
					textbook="Interaction Design: Beyond Human-Computer Interaction."
					grade="A"
					credits="4"
				/>
				<EducationCard
					title="CS 372 - Intro to Computer Networks"
					id="cs372"
					term="Fall"
					year="2019"
					objective="Introduction to wired/wireless network principles, organization, topologies, hardware, applications, and protocols in the OSI hierarchy context. Configuration and implementation of local area networks and intranets. Internet protocols, packet forwarding, and routing. The primary learning outcomes are: describe the hardware devices used to create a network; give examples of networking technologies, and examine the associated standards; describe the essential features of a networking protocol; describe various congestion control, error detection, and error correction schemes; create a local area network and a model intranet by configuring networking hardware and software in a controlled laboratory environment; create low-level client-server application programs using the socket API; demonstrate (simulate) the processes of packet construction, packet switching, and packet deconstruction; apply a route discovery algorithm to determine the shortest path in an internet represented as a weighted graph; compare/contrast cable networking and wireless networking; use a variety of networking services, such as DNS, NAT, and ARP; associate networking functions with the appropriate layers of the ISO/OSI network layering model, and associate internetworking functions with the appropriate layers of the TCP/IP layering model; describe network security issues and some of the methods for managing those issues. Also including: explain the concept of packet-switching, and identify and analyze the different types of packet delay in packet-switched networks; describe the essential principles of a transport layer protocol including reliable data transfer, flow control, and congestion control; use IP addressing and apply routing algorithms to find shortest paths for network-layer packet delivery; describe and compare data link layer services and multiple access techniques; describe network security issues and some of the methods that address them; use networking tools to observe and analyze behaviors of networking protocols."
					textbook="Cisco Networking Academy - Introduction to Networking."
					grade="B"
					credits="4"
				/>
				<EducationCard
					title="SE 201 - Software Development"
					id="se201"
					term="Fall"
					year="2019"
					objective="Over fifty years have passed since the birth of “software engineering” and the “software crisis,” yet we still face similar challenges today. This course prepares students on a path toward the discipline of software engineering, and focuses on tools, workflow and building larger systems than is usually presented in introductory computer science courses. Students will explore different styles of programming paradigms, and collaborate to build a distributed system using multiple technologies. We'll explore software architecture, and the tools, principles and practice of modern software development. The primary learning outcomes are: create software application solutions that solve customer-defined problems and meet user requirements; analyze a problem domain to create appropriate abstractions; apply software engineering design principles and practice writing high-quality code; assess the maintainability and quality of code, and apply basic refactoring techniques; practice using tools to facilitate the implementation of software applications; discover and explain the features of third-party libraries and services; and integrate third-party APIs into a software system; work in a team to design a moderately-sized software system; define the terminology and describe the basic concepts of software architecture."
					textbook="Lopes, C. (2014). Exercises in Programming Style."
					grade="A-"
					credits="4"
					projects={[
						{name: "Trade Wars", id: "#se201final"}
					]}
				/>
				<EducationCard
					title="CS 290 - Web Development"
					id="cs290"
					term="Spring"
					year="2019"
					objective="How to design and implement a multi-tier application using web technologies: Creation of extensive custom client- and server-side code, consistent with achieving a high-quality software architecture."
					textbook="None"
					grade="B+"
					credits="4"
				/>
				<EducationCard
					title="CS 391 - Social & Ethical Issues in CS"
					id="cs391"
					term="Spring"
					year="2019"
					objective="Upon completion of this course, students will be able to: analyze relationships among science, technology, and society using critical perspectives or examples from historical, political, or economic disciplines; analyze the role of science and technology in shaping diverse fields of study over time; explain the roles and responsibilities of a computer professional; articulate in writing a critical perspective on issues involving science, technology, and society using evidence as support."
					textbook="None"
					grade="A"
					credits="4"
				/>
				<EducationCard
					title="WR 327 - Technical writing"
					id="wr327"
					term="Spring"
					year="2019"
					objective="Continued practice in writing with an emphasis on the rhetorical and critical thinking demands of writers in scientific and technological fields."
					textbook="Team Writing by Joanna Wolfe"
					grade="A"
					credits="3"
				/>
				<EducationCard
					title="BA 260 - Intro to Entrepreneurship"
					id="ba260"
					term="Fall"
					year="2018"
					objective="Topics include evaluating entrepreneurial capabilities, creativity, business plan creation, opportunity assessment and feasibility analysis, business implementation, new product introduction, and seeking funds."
					textbook="Unknown"
					grade="A-"
					credits="4"
				/>
				<EducationCard
					title="CS 261 - Data Structures"
					id="cs261"
					term="Fall"
					year="2018"
					objective="This course introduces students to recognizing common “problem patterns” and solutions involving data structures, in a hands-on, problem-driven approach. Students will be able to improve the quality of their code, recognize universal APIs of common abstract data types, and improve the performance of their programs using data structures and algorithms. Students will also understand foundation concepts in algorithmic analysis. The primary learning outcomes are: describe the properties, interfaces, and behaviors of basic abstract data types, such as collection, bag, indexed collection, sorted collection, stack, and queue; read an algorithm or program code segment that contains iterative constructs and analyze the asymptotic time complexity of the algorithm or code segment; state the asymptotic time complexity of the fundamental operations associated with a variety of data structures, such as vector, linked list, tree, and heap; recall the space utilization of common data structures in terms of the long-term storage needed to maintain the structure, as well as the short-term memory requirements of fundamental operations, such as sorting; design and implement general-purpose, reusable data structures that implement one or more abstractions; compare and contrast the operation of common data structures (such as linear structures, priority queues, tree structures, hash tables, maps, and graphs) in terms of time complexity, space utilization, and the abstract data types they implement."
					textbook="Miller, B., & Ranum, D. (2011). Problem Solving with Algorithms and Data Structures Using Python."
					grade="A"
					credits="4"
				/>
				<EducationCard
					title="CS 271 - Comp Arch. and Assembly"
					id="cs271"
					term="Spring"
					year="2018"
					objective="Introduction to functional organization and operation of digital computers. Coverage of assembly language; addressing, stacks, argument passing, arithmetic operations, decisions, macros, modularization, linkers and debuggers."
					textbook="None"
					grade="B"
					credits="4"
				/>
				<EducationCard
					title="CS 195 - Website Design"
					id="cs195"
					term="Fall"
					year="2017"
					objective="This class focused on teaching the prope use of website layout, animations, colors, and pictures to provide an enjoyable experience (both visually and interactively) to any user."
					textbook="Unknown"
					grade="B"
					credits="4"
				/>
			</EducationSection>
			<EducationSection name="Summit High School" years="2013-2017">
				<EducationCard
					disableMore
					title="Honors Degree"
					id="honordegree"
					term="Fall-Spring"
					year="2013-2017"
					requirments="The Bend-La Pine School District offers students the opportunity to earn an Honors Diploma. The Honors Diploma requires 27 (26 with a normal diploma) credits with increased requirements in mathematics, science, and applied/fine arts. Students must also complete five capstone classes, three of which must be AP courses."
				/>
				<EducationCard
					disableMore
					title="Robotics Club"
					id="robotics"
					term="Fall-Spring"
					year="2014-2017"
					description="Robotics club was a school/student funded club that participated in the internationally known FRC and FTC robotics league. I learned some great skills in this club, including: programming skills, budget managment, leadership, and networking. And who could forget all the wonderful people I met, some are still my best friends to this day!"
				/>
				<EducationCard
					disableMore
					title="Student Government - Tech Coordinator"
					id="techguy"
					term="Fall-Spring"
					year="2016-2017"
					description="After a couple rounds of interviewing, by both teachers and students, I was chosen to coop the tech coordinator postion with another student! I learned many things during my time as tech coordinator, including: leadership, networking, team building, team work(!), and I gained some life long friends!"
				/>
			</EducationSection>
		</Container>
	)
}

export default Education
