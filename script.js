// Example function to handle form submission
document.getElementById('state-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Grab input values
    const alabamaSpanish = document.getElementById('alabama-spanish').value;
    const alabamaForeign = document.getElementById('alabama-foreign').value;

    // Log the values (you can later use them to update the map or send to the server)
    console.log(`Alabama - Spanish Speakers: ${alabamaSpanish}`);
    console.log(`Alabama - Foreign Language Speakers: ${alabamaForeign}`);

    // Optionally, you can save the data locally or do other operations
    // Example: Saving the data to localStorage
    localStorage.setItem('alabama-spanish', alabamaSpanish);
    localStorage.setItem('alabama-foreign', alabamaForeign);
});
