
let courses = {
    170: {
        title:"Introduction to Programming",
        description:"Develop algorithms for computers",
        creditHours: 5
    },
    250: {
        title:"Web Development",
        description:"Build web applications",
        creditHours: 3
    },
    310: {
        title:"Operating Systems",
        description:"Process management and memory management",
        creditHours: 3
    },
    430: {
        title:"Artificial Intelligence",
        description: "Simulate human thinking",
        creditHours: 2
    }
}
for (let course in courses){
    if (courses[course].creditHours === 3){
        console.log(course + " " + courses[course].title);
    }
}

let coursesObj = Object.keys(courses); //creates an array of keys of an object's properties
console.log(coursesObj);
console.log(coursesObj.length);


console.log(coursesObj);
console.log(coursesObj.length);

console.log(Object.keys(courses).push("500"));




//in operator returns true if object contains given property
if (500 in courses){
    console.log(true);
} else {
    console.log(false);
}

console.log(Object.keys(courses).length);

//remove element
delete courses[430];
console.log(courses)