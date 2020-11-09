

// Question 1:
const cat = {

    complain: function() {
        console.log("Meow");
    }
}

cat.complain();

// Question 2:

const header = document.querySelector("h3"); 

header.innerHTML = "<h3>Updated heading</h3>";

// Question 3:

header.style.fontSize = "2em";

// Question 4:

const mainHeading = document.querySelector("subheading");
header.subheading = "mainHeading";

// Question 5:

const paragraph = document.querySelectorAll ("p");

for(let i = 0; i< paragraph.length; i++) {
    paragraph[i].style.color = "red";
}


// Question 6:

const resultsContainer = document.querySelector ("div.results")
resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

// Question 7:
/*Create a function that has one parameter called list.

Inside the function, loop through the list parameter and console log the name property in each object.

Call the function and pass in the cats variable in the script.js file in the repo.*/
const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    },
];

function list() {
    console.log()
}



// Question 8:



