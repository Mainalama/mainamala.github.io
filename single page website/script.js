// Function to fetch data from JSON file
async function fetchData() {
    const response = await fetch('data.json');
    const data = await response.json();
    return data;
}

// Function to handle form submission
async function handleFormSubmit(event) {
    event.preventDefault(); // Prevents default form submission behavior
    const name = document.getElementById('name').value; // Gets the name entered by the user
    const data = await fetchData(); // Fetches data from JSON file
    const person = data.find(person => person.name.toLowerCase() === name.toLowerCase()); // Finds the person with the entered name

    const contentDiv = document.getElementById('content'); // Selects the div where the content will be displayed
    contentDiv.innerHTML = ''; // Clears any previous content

    if (person) {
        // Displays the details of the person if found
        contentDiv.innerHTML = `<p>Name: ${person.name}</p><p>Age: ${person.age}</p><p>Occupation: ${person.occupation}</p>`;
    } else {
        // Displays a message if the person is not found
        contentDiv.innerHTML = `<p>No person found with the name "${name}".</p>`;
    }
}

// Adds event listener to the form for handling submission
document.getElementById('nameForm').addEventListener('submit', handleFormSubmit);
