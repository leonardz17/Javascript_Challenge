// from data.js
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");

var form = d3.select("form");

// Complete the event handler function for the form
function runEnter() {
    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(date => date.datetime === inputValue);
    console.log(filteredData);

    var tbody = d3.select("tbody");

    filteredData.forEach(function(tabledata) {
        var tr = tbody.append("tr");

        tr.append("td").text(tabledata.datetime);
        tr.append("td").text(tabledata.city);
        tr.append("td").text(tabledata.state);
        tr.append("td").text(tabledata.country);
        tr.append("td").text(tabledata.shape);
        tr.append("td").text(tabledata.durationMinutes);
        tr.append("td").text(tabledata.comments);
    });
    
};


button.on("click", runEnter);
form.on("submit",runEnter);