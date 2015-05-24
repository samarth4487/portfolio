// format for projects section
projects = '<li><h3><strong><em>%data%</em></strong></h3></li><div class="row"><div class="col-md-4"><img src="images/%data1%" alt="projects" class="img-responsive img-rounded" width="400px" height="200px"></div><div class="col-md-8"><h4>Language(s): <strong><em>%data2%</em></strong></h4><p>%data3%</p></div></div>';
projectsObject = {
	'name': ['Portfolio','Change My Voice','Gaming Hour','Grapher','Resume Builder','Magic of Beginners'],
	'image': ['portfolio.png',
			'changemyvoice.jpg',
			'gaming.png',
			'grapher.png',
			'resume.jpg',
			'education.png'],
	'language': ['Javascript, jQuery, HTML, CSS3, Bootstrap',
				'Swift',
				'HTML, CSS3, Bootstrap',
				'Python(2.7), Pygame',
				'C++ with HTML embedded',
				'HTML, CSS3'],
	'details': []
}
for(var a=0; a<projectsObject.name.length; a++){
	projects1 = projects.replace('%data%', projectsObject.name[a]);
	projects2 = projects1.replace('%data1%', projectsObject.image[a]);
	projects3 = projects2.replace('%data2%', projectsObject.language[a]);
	projects4 = projects3.replace('%data3%', projectsObject.details[a]);
	$('.projects-info').append(projects4);
}


// format for skills section
skills = '<div class="col-md-3"><img src="images/%data%" alt="skills" class="img-responsive img-circle"></div>';
skillsArray = ['python.png','js.png','html.png','css.png','jquery.png','django.png','c.png','cpp.png','swift.png','java.png','ruby.png'];
for(var a=0; a<skillsArray.length; a++){
	skills1 = skills.replace('%data%', skillsArray[a]);
	$('.skills-info').append(skills1);
}


// format for courses section
courses = '<li><h3 class="courses-heading"><strong><em>%data%</em></strong></h3><p class="courses-information">%info%</p></li>';
coursesObject = {
	'name': ['CS50x Introduction to Computer Science',
			'Programming in C++ Part I',
			'Programming in C++ Part II',
			'Programming in Python',
			'HTML5 from W3C',
			'Algorithms and Data Structures',
			'Web Application Architecture',
			'Programming in Javascript',
			'Object Oriented Javascript',
			'Intro to HTML and CSS',
			'Intro to jquery',
			'IOS App Development with Swift',
			'Intro to Relational Databases',
			'Full Stack Foundations',
			'Authentication and Authorization',
			'Scalable Apps with Python',
			'Responsive Web Design Fundamentals',
			'Responsive Images',
			'Intro to Computer Science using Python',
			'Linux for Full Stack Developers'],
	'details': ["This is CS50, Harvard University's introduction to the intellectual enterprises of computer science and the art of programming for majors and non-majors alike, with or without prior programming experience. An entry-level course taught by David J. Malan, CS50 teaches students how to think algorithmically and solve problems efficiently. Topics include abstraction, algorithms, data structures, encapsulation, resource management, security, software engineering, and web development. Languages include C, PHP, and JavaScript plus SQL, CSS, and HTML. Problem sets inspired by real-world domains of biology, cryptography, finance, forensics, and gaming.",
				"This is the first of a two-part course, and corresponds to the first half ofthe Computer Programming course CS101 at IIT Bombay. In this part, basic concepts of computer programming are introduced starting with the notion of an algorithm. Emphasis is on developing the ability to write programs to solve practical computational problems. Participants will get to read and understand many sample programs, and will have to write several on their own. This course deals with procedural programming, and attempts to inculcate good programming practices in a novice programmer.",
				"This is the second of a two-part course, and corresponds to the second half of the Computer Programming course CS101 at IIT Bombay. The first participants(CS101.1x) discussed Basic Programming Concepts, and emphasized procedural programming using C++. Technically, this is an independent course. We do not assume that participants have done the previous course. We only assume the knowledge of the topics listed under that course. To help those who have not taken the course CS101.1x, this second part begins with a set of review problems. These will help the participants review their knowledge of the basic programming principles.",
				"This course is the first of a two-course sequence: Introduction to Computer Science and Programming Using Python, and Introduction to Computational Thinking and Data Science. Together, they are designed to help people with no prior exposure to computer science or programming learn to think computationally and write programs to tackle useful problems. Some of the people taking the two courses will use them as a stepping stone to more advanced computer science courses, but for many it will be their first and last computer science courses.",
				"HTML5 is the specification that defines the 5th major revision of the core language of the World Wide Web: the Hypertext Markup Language (HTML). HTML5 will help you create great Web sites, in a simplified but powerful way. The Learn HTML5 from W3C course is designed in two parts that present the new features included in HTML5. Part 1 will focus on Web design fundamentals at an intermediate level. With this course, Web developers and designers will be able to test their new skills through numerous interactive exercises and practical assignments.",
				"An introduction to fundamental data types, algorithms, and data structures, with emphasis on applications and scientific performance analysis of Java implementations. Specific topics covered include: union-find algorithms; basic iterable data types (stack, queues, and bags); sorting algorithms (quicksort, mergesort, heapsort) and applications; priority queues; binary search trees; red-black trees; hash tables; and symbol-table applications.",
				"Understand the major architectural components in web apps, and how they fit together.  Modern web apps are complex.  A typical application has a database along with numerous scripts on one end of the web stack, a web server in the middle that delivers information over the Internet, and a user's browser on the other end of the web stack.  Even getting started in trying to understand these components can be overwhelming. Consider just the programming languages involved in a typical web stack: from the database (SQL), to the web server (scripting language), to the browser (JavaScript, HTML, CSS), we're dealing with five different programming languages, not to mention the protocols they're operating over – and you need to know a little about them too! We'll introduce a number of software design patterns throughout the course that are aimed at helping you to manage this complexity.",
				"We're here to get you started with JavaScript! In the twenty plus years since its inception, JavaScript has become the lingua franca of the web, that's to say, it's become the main tool to create interactive content on the Internet. In this course, you'll explore the JavaScript programming language by creating an interactive version of your résumé. You’ll learn the JavaScript programming fundamentals you need while building new elements and sections to enhance your résumé.",
				"Have you been dabbling with JavaScript but find your files keep turning into a mess of spaghetti code? Do you find yourself copying and pasting lines of code over and over throughout your application? Surely there’s a better way, right? Yes, there is a better way -- object-oriented programming will allow you to build websites using reusable blocks of code known as libraries, similar to using bricks to build a house. This course is designed to teach web developers how to utilize the various object-oriented programming features within JavaScript, and more importantly, how to write reusable and maintainable libraries that will make your life easier.",
				"HTML and CSS are markup languages and the building blocks that make up the web. This course is called 'Not your Typical Intro...' because it does not follow the usual pattern of other courses and tutorials that you find on the Internet. Usually HTML and CSS are taught with a focus on language syntax. But knowing syntax alone does not enable you to create a webpage from a design. You need to know where to start and how to approach the task, in other words - you need to learn how to think like a front-end developer.",
				"jQuery is the most popular JavaScript library today, in use by over 60% of the top 100,000 most visited websites. This course will teach you how to use jQuery’s core features - DOM element selections, traversal and manipulation. You'll also learn how to read and make sense of jQuery's documentation, making it easy for you to go beyond the methods taught in this class and take advantage of jQuery's full array of features!",
				"This course will set you on your way to becoming an iOS Developer, where you’ll establish a basic understanding of the iOS ecosystem. You’ll also have working knowledge of Swift, Apple’s custom programming language created exclusively for the mobile developer. In this course we will build an iPhone app that records a conversation between you and a friend, and then makes your voices sound like a Chipmunk or Darth Vader.",
				"This course is a quick, fun introduction to using a relational database from your code, using examples in Python. You'll learn the basics of SQL (the Structured Query Language) and database design, as well as the Python API for connecting Python code to a database. You'll also learn a bit about protecting your database-backed web apps from common security problems.",
				"You’ll start by learning how to interact with a database from a web application using an Object-Relational Mapping (ORM) layer. From there, you’ll learn how GET and POST requests translate to CRUD operations. You’ll then explore the Flask framework and the various ways in which it can speed up the development of your applications. Finally, you’ll develop your very own web application from the ground up using the iterative development process.",
				"As a Python programmer, leveraging Flask allows you to quickly and easily build your own web applications. But before you share your apps on the Internet you should protect your users' data, ensuring information stored on your site is safe from unwanted manipulation. You could implement web security and permissions on your own, but relying on trusted providers is a faster, safer, and easier way to allow users to login to your application - without having to create and maintain another account, profile, and password. By the end of this course, you will write the necessary code to implement Google+ Sign-In and Facebook Login in options so users can create restaurant menus that are viewable by everyone but only modifiable by the original creator.",
				"You will learn about challenges of building applications that can serve hundreds of thousands of users, and how you can prepare for them as a developer. And more importantly - you will learn how to harness the power of App Engine - Platform as a Service, run by Google, so you can focus on your application's features, not on managing infrastructure that runs your app. Let Google run and scale the infrastructure and do what you do best - write code!",
				"You’ll start by exploring what makes a site responsive and how some common responsive design patterns work across different devices. From there, you’ll learn how to create your own responsive layout using the viewport tag and CSS media queries. As you proceed, you’ll experiment with major and minor breakpoints, and optimizing text for reading. In this course you'll learn the fundamentals of responsive web design with Google's Pete LePage! You'll create your own responsive web page that works well on any device - phone, tablet, desktop or anything in between.",
				"Quick load times and responsive content leads to higher conversions. There's much more to images on the web than <img>. Attributes like srcset, markup techniques using CSS, fonts, and inline images, and the brand new <picture> element are now available to help you create the best possible experience for your users. This course will help you ensure that you deliver the highest quality images with the fewest possible bytes.",
				"You’ll learn the programming language Python, and you’ll explore foundational concepts in computer science. Most importantly, you’ll start thinking like a software engineer by solving interesting problems (how to build a web crawler or a social network) using computer programming. This course is a first step into the world of computer science, and whether you want to become a software engineer, or collaborate with software engineers, this course is for you. You’ll be prepared for intermediate-level computer science classes when you’ve mastered the concepts covered in this course.",
				"After Sometime"]
}
for(var a=0; a<coursesObject.name.length; a++){
coursesNew1 = courses.replace("%data%",coursesObject.name[a]);
coursesNew2 = coursesNew1.replace('%info%',coursesObject.details[a]);
$('.courses-info').append(coursesNew2);
}