// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
let tbody = d3.select("tbody");

// Console.log the data from data.js
console.table(data);

// create a function that will populate the table with the data
function buildTable(data) {
    tbody.html("");

    // run through each object in data and add rows to the table
    data.forEach((dataRow) => {
        console.table(dataRow);
        let row = tbody.append('tr');
    
        // add the object values to the table cells
        Object.values(dataRow).forEach((value) => {
            let cell = row.append('td');
            cell.text(value);
        })
    })
}

// create a function after click on filter button
function handleClick() {
    d3.event.preventDefault();

    let date = d3.select('#datetime').property('value');
    let filterData = tableData;

    if(date) {
        filterData = filterData.filter((row) => row.datetime === date);
    }

    buildTable(filterData);
}

// event for button click
d3.selectAll('#filter-btn').on('click', handleClick);

// call the function
buildTable(tableData);