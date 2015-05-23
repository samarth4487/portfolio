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
				]
}
for(var a=0; a<coursesObject.name.length; a++){
coursesNew1 = courses.replace("%data%",coursesObject.name[a]);
coursesNew2 = coursesNew1.replace('%info%',coursesObject.details[a]);
$('.courses-info').append(coursesNew2);
}