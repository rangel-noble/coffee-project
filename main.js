"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<div>' + coffee.name + " " + '<span class="roastType">' + coffee.roast + '</span>' + '</div>';
    // html += '<td>' + coffee.roast + '</td>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}
var coffee3 = function myFunction() {
    var coffeeSearch = document.forms.search.coffeeSearch;
    var coffeeFilter = coffeeSearch.value.toUpperCase();
    var coffee3 = [];
    coffees.forEach(function (value, i) {
        if(coffees[i].name.toUpperCase().indexOf(coffeeFilter) > -1){
            coffee3.push(coffees[i]);}
    });
    tbody.innerHTML = renderCoffees(coffee3);
    return coffee3;
}

// function myFunction(input) {
//     var coffeeSearch = document.getElementById("coffeeSearch");
//     var coffeeFilter = coffeeSearch.value.toUpperCase();
//     if (coffees[input].name.toUpperCase().indexOf(coffeeFilter) > -1){
//         return true;
//     } else {
//         return false;
//     }
// }

// var coffeeSearch = document.getElementById("coffeeSearch");
// coffeeSearch.addEventListener("keyup", function () {
//     var searchedCoffee = document.getElementById("coffeeSearch").value;
//     console.log(searchedCoffee)
// });

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffee3().forEach(function(coffee, i) {console.log(i);
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];
console.log(coffees[0].name);
var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
