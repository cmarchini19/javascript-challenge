// from data.js
var tableData = data;

// YOUR CODE HERE!

// Building function to take in parameter(s) and build our table

var tableBody = d3.select("tbody")

function ufoTable(ufoData) {
    tableBody.html("");
    ufoData.forEach((ufoObject) => {
        var row = tableBody.append("tr");
        Object.values(ufoObject).forEach((value) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

ufoTable(tableData)

// Establishing active filter

function dateFilter () {
    var date = d3.select("#datetime").property("value");
    var filterData = tableData;
    filterData = filterData.filter(row => row.datetime == date);
    ufoTable (filterData);
};

// Establish click 

d3.select("#filter-btn").on("click", dateFilter)

