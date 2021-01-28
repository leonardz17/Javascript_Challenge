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
    var inputElement1 = d3.select("#cityname");
    var inputValue1 = inputElement1.property("value");
    var inputElement2 = d3.select("#statename");
    var inputValue2 = inputElement2.property("value");
    var inputElement3 = d3.select("#countryname");
    var inputValue3 = inputElement3.property("value");
    var inputElement4 = d3.select("#shapename");
    var inputValue4 = inputElement4.property("value");

    var filteredData = tableData.filter(data => 
        data.datetime === inputValue && 
        data.city === inputValue1 && 
        data.state === inputValue2 && 
        data.country === inputValue3 && 
        data.shape ===inputValue4);
    console.log(filteredData);

    var tbody = d3.select("tbody");

    tbody.html("");

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
form.on("submit", runEnter);