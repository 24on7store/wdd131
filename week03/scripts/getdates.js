var currentYear = new Date().getFullYear();

var copyrightParagraph = document.getElementById("copyright");
copyrightParagraph.innerHTML = + currentYear;

var copyrightParagraph = document.getElementById("copy");
copyrightParagraph.innerHTML = + currentYear - 220;

var lastModifiedParagraph = document.getElementById('lastModified');
var lastModifiedDate = document.lastModified;
lastModifiedParagraph.innerHTML = 'Last Modified' + lastModifiedDate;

// Define static values for temperature and wind speed
let temperature = 50;  // In Fahrenheit (°F)
let windSpeed = 5;     // In miles per hour (mph)

// Function to calculate wind chill factor
function calculateWindChill(temp, speed) {
    // Wind chill formula in Fahrenheit
    return (
        35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16)
    ).toFixed(2); // Return the result with 2 decimal points
}

// Check if the conditions for wind chill are met
function displayWindChill() {
    let windChillValue;

    if (temperature <= 50 && windSpeed > 3) {
        // Call the wind chill calculation function
        windChillValue = calculateWindChill(temperature, windSpeed);
    } else {
        // Display 'N/A' if conditions are not met
        windChillValue = "N/A";
    }

    // Display the wind chill value on the page
    document.getElementById('windchill').textContent = windChillValue;
}

// Call the function to display the wind chill when the page loads
displayWindChill();
