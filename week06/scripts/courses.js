document.addEventListener("DOMContentLoaded", function() {
    const filterSelect = document.getElementById("level-filter");
    const courses = document.querySelectorAll(".course");

    filterSelect.addEventListener("change", function() {
        const selectedLevel = filterSelect.value;
        
        courses.forEach(course => {
            const courseLevel = course.getAttribute("data-level");
            
            if (selectedLevel === "all" || courseLevel === selectedLevel) {
                course.style.display = "block";
            } else {
                course.style.display = "none";
            }
        });
    });
});
