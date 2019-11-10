// from data.js
var tableData = data;

var tbody = d3.select("tbody");

var button = d3.select("#filter-btn");

button.on("click", function() {

    var dateInput = d3.select("#datetime");
    var dateInputValue = dateInput.property("value");

    console.log(dateInputValue);
    console.log(tableData);

    tableData.forEach((aliens) => {
        var row = tbody.append("tr");
        Object.entries(aliens).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });

    var filteredTableData = tableData.filter(tableData => tableData.datetime === dateInputValue);

    console.log(filteredTableData);

    filteredTableData.forEach((aliens) => {
        var row = tbody.append("tr");
        Object.entries(aliens).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    })
})
});