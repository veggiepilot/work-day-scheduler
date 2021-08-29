// Display date
var date = $("#currentDay");
var now  = moment().format("dddd, MMMM Mo");

date.append(now);

// Create timbelocks for different work hours
    // Each time block is color coded
// Enter event in timeblock
// Save scheduled event in local storage
// Data persists when page is refreshed