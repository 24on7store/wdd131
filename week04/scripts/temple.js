var currentYear = new Date().getFullYear();

var copyrightParagraph = document.getElementById("copyright");
copyrightParagraph.innerHTML = + currentYear;

var lastModifiedParagraph = document.getElementById('lastModified');
var lastModifiedDate = document.lastModified;
lastModifiedParagraph.innerHTML = 'Last Modification: ' + lastModifiedDate;








var navBar = document.getElementById("navBar");

function showMenu(){
    navBar.style.right = "0";
}

function hideMenu(){
    navBar.style.right = "-200px";
}



// const temples = [
//     {
//         templeName: "Aba Nigeria",
//         location: "Aba, Nigeria",
//         dedicated: "2005, August, 7",
//         area: 11500,
//         imageUrl:
//         "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
//         },
//         {
//         templeName: "Manti Utah",
//         location: "Manti, Utah, United States",
//         dedicated: "1888, May, 21",
//         area: 74792,
//         imageUrl:
//         "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
//         },
//         {
//         templeName: "Payson Utah",
//         location: "Payson, Utah, United States",
//         dedicated: "2015, June, 7",
//         area: 96630,
//         imageUrl:
//         "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
//         },
//         {
//         templeName: "Yigo Guam",
//         location: "Yigo, Guam",
//         dedicated: "2020, May, 2",
//         area: 6861,
//         imageUrl:
//         "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
//         },
//         {
//         templeName: "Washington D.C.",
//         location: "Kensington, Maryland, United States",
//         dedicated: "1974, November, 19",
//         area: 156558,
//         imageUrl:
//         "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
//         },
//         {
//         templeName: "Lima Perú",
//         location: "Lima, Perú",
//         dedicated: "1986, January, 10",
//         area: 9600,
//         imageUrl:
//         "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
//         },
//         {
//         templeName: "Mexico City Mexico",
//         location: "Mexico City, Mexico",
//         dedicated: "1983, December, 2",
//         area: 116642,
//         imageUrl:
//         "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
//         },

        // Add more temple objects here...
//         {
//         templeName: "Port-au-Prince Haiti1",
//         location: "Port-au-Prince, Haiti",
//         dedicated: "1993, December, 2",
//         area: 126642,
//         imageUrl:
//         "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"

//         },


//         {
//         templeName: "Mexico City Mexico2",
//         location: "Mexico City, Mexico",
//         dedicated: "1983, December, 2",
//         area: 116642,
//         imageUrl:
//         "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
//         },
//         {
//         templeName: "Mexico City Mexico3",
//         location: "Mexico City, Mexico",
//         dedicated: "1983, December, 2",
//         area: 116642,
//         imageUrl:
//         "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
//         },
//     ];

// createTempleCard();

// function createTempleCard(){
//     temples.forEach(temple =>{
//         let card = document.createElement("cover");
//         let name = document.createElement("h1");
//         let location = document.createElement("p");
//         let dedication = document.createElement("p");
//         let area =  document.createElement("p");
//         let img = document.createElement("img");


//         name.textContent = temple.templeName;
//         location.innerHTML = `<span class-"label">Location:</span> ${temple.location}`;
//         dedication.innerHTML = `<span class-"label">Dedication:</span> ${temple.dedicated}`;
//         area.innerHTML = `<span class-"label">Size:</span> ${temple.area} sq ft`;

//         img.setAttribute("src", temple.imageUrl);
//         img.setAttribute("alt", `${temple.templeName} Temple`);
//         img.setAttribute("loading", "lazy");


//         card.appendChild(name);
//         card.appendChild(location);
//         card.appendChild(dedication);
//         card.appendChild(area);
//         card.appendChild(img);

//         document.querySelector(".cover").appendChild(card);
//     });
// }


const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

    // Add more temple objects here........
        {
        templeName: "Port-au-Prince Haiti",
        location: "Port-au-Prince, Haiti",
        dedicated: "2019, September, 1",
        area: 10396,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/port-au-prince-haiti-temple/port-au-prince-haiti-temple-6211.jpg"
        },
        {
        templeName: "Lisbon Portugal",
        location: "Lisbon, Portugal",
        dedicated: "2015, December, 5",
        area: 23730,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/lisbon-portugal-temple/lisbon-portugal-temple-54.jpg"
        },
        {
        templeName: "Santiago Chile",
        location: "Santiago, Chile",
        dedicated: "1981, May, 30",
        area: 20831,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/santiago-chile-temple/santiago-chile-temple-7564.jpg"
        },



];

// Function to create and display temple cards
function createTempleCard(filteredTemples) {
    const templeContainer = document.querySelector(".cover");
    templeContainer.innerHTML = ""; // Clear previous content

    filteredTemples.forEach(temple => {
        let card = document.createElement("div");
        let name = document.createElement("h1");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area =  document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedication:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;

        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        templeContainer.appendChild(card);
    });
}

// Filter functions based on menu items
function filterTemplesByAge(ageGroup) {
    if (ageGroup === "Old") {
        return temples.filter(temple => parseInt(temple.dedicated.split(',')[0]) < 1900);
    } else if (ageGroup === "New") {
        return temples.filter(temple => parseInt(temple.dedicated.split(',')[0]) > 2000);
    } else {
        return temples;
    }
}

function filterTemplesBySize(sizeGroup) {
    if (sizeGroup === "Large") {
        return temples.filter(temple => temple.area > 90000);
    } else if (sizeGroup === "Small") {
        return temples.filter(temple => temple.area < 10000);
    } else {
        return temples;
    }
}

// Event listeners for navigation menu items
document.querySelector("nav ul").addEventListener("click", function(event) {
    const target = event.target.textContent;

    if (target === "Home") {
        createTempleCard(temples);
    } else if (target === "Old" || target === "New") {
        const filteredTemples = filterTemplesByAge(target);
        createTempleCard(filteredTemples);
    } else if (target === "Large" || target === "Small") {
        const filteredTemples = filterTemplesBySize(target);
        createTempleCard(filteredTemples);
    }
});

// Initial display of all temples on page load
createTempleCard(temples);
