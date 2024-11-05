// Check if there's already a 'reviewCount' in localStorage
let reviewCount = localStorage.getItem('reviewCount');

// If 'reviewCount' is null (no previous count), initialize it to 0
if (reviewCount === null) {
    reviewCount = 0;
} else {
    // Convert the retrieved value to a number since localStorage stores values as strings
    reviewCount = Number(reviewCount);
}

// Increment the review count by 1
reviewCount += 1;

// Update the value in localStorage
localStorage.setItem('reviewCount', reviewCount);

// Display the updated count on the page
document.getElementById('reviewCounter').textContent = reviewCount;
