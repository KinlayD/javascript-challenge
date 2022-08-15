
var tableData = data;

// show all:
var tbody = d3.select("tbody");
var showallButton = d3.select("#showall-btn");
showallButton.on("click", function() {
    tableData.forEach((incident)=> {
        var row = tbody.append("tr");
        Object.entries(incident).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
});

// filter table by date:
var form = d3.select("#form");
var filterButton = d3.select("#filter-btn");
form.on("submit", searchIncident);
filterButton.on("click", searchIncident);

function searchIncident() {
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    tbody.html("")
    var filteredtableData = tableData.filter(incident => incident.datetime === inputValue);
    filteredtableData.forEach((incident)=> {
        var row = tbody.append("tr");
        Object.entries(incident).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

// clear:
var clearButton = d3.select("#clear-btn");
clearButton.on("click", function() {
    tbody.html("");
});

var date = ""


