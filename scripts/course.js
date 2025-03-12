const courses = [
  {
    subject: "CSE",
    number: 110,
    title: "Introduction to Programming",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.",
    technology: ["Python"],
    completed: true,
  },
  {
    subject: "WDD",
    number: 130,
    title: "Web Fundamentals",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.",
    technology: ["HTML", "CSS"],
    completed: true,
  },
  {
    subject: "CSE",
    number: 111,
    title: "Programming with Functions",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.",
    technology: ["Python"],
    completed: true,
  },
  {
    subject: "CSE",
    number: 210,
    title: "Programming with Classes",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.",
    technology: ["C#"],
    completed: false,
  },
  {
    subject: "WDD",
    number: 131,
    title: "Dynamic Web Fundamentals",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.",
    technology: ["HTML", "CSS", "JavaScript"],
    completed: true,
  },
  {
    subject: "WDD",
    number: 231,
    title: "Frontend Web Development I",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.",
    technology: ["HTML", "CSS", "JavaScript"],
    completed: false,
  },
];

// variables
const courses_list = document.getElementById("courses-list");
const all_courses_button = document.getElementById("all-courses");
const cse_courses_button = document.getElementById("cse-courses");
const wdd_courses_button = document.getElementById("wdd-courses");

function clearCoursesList() {
  courses_list.innerHTML = "";
}

function createCourseCard(course_info) {
  const card = document.createElement("div");
  const active_class = course_info.completed ? "active" : "inactive";
  card.className = `course-card ${active_class}`;

  const card_title = document.createElement("div");
  card_title.className = "course-title";
  card_title.innerText = `${course_info.subject} ${course_info.number}`;

  card.appendChild(card_title);
  courses_list.appendChild(card);
}

function showCourses(filter) {
  clearCoursesList();
  all_courses_button.classList.remove("active");
  cse_courses_button.classList.remove("active");
  wdd_courses_button.classList.remove("active");

  courses
    .filter(function (course) {
      if (filter !== undefined) {
        if (course.subject.toLowerCase() == filter) {
          return true;
        }
      } else {
        return true;
      }
    })
    .forEach((course) => {
      createCourseCard(course);
    });
}

showCourses();
all_courses_button.classList.add("active");

all_courses_button.addEventListener("click", function () {
  showCourses();
  all_courses_button.classList.add("active");
});

cse_courses_button.addEventListener("click", function () {
  showCourses("cse");
  cse_courses_button.classList.add("active");
});

wdd_courses_button.addEventListener("click", function () {
  showCourses("wdd");
  wdd_courses_button.classList.add("active");
});
