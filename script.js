
const date        = $("#currentDay");
const now         = moment().format("dddd, MMMM Do");
const currentTime = moment().format("kk:mm:ss");
const button      = $('.saveBtn');
const myStorage   = localStorage;

// Displaying today's date on the top of the page
date.append(now);

// Timeblock object with time properties
timeBlocks = {
   
    nineAM: {
        time: "09:00:00",
        range: "09:59:59",
        textArea: $('#1'),
        id: 1
    },

    tenAM: {
        time: "10:00:00",
        range: "10:59:59",
        textArea: $('#2'),
        id: 2
    },
    elevenAM: {
        time: "11:00:00",
        range: "11:59:59",
        textArea: $('#3'),
        id: 3
    },
    twelvePM: {
        time: "12:00:00",
        range: "12:59:59",
        textArea: $('#4'),
        id: 4
    },
    onePM: {
        time: "13:00:00",
        range: "13:59:59",
        textArea: $('#5'),
        id: 5
    },
    twoPM: {
        time: "14:00:00",
        range: "14:59:59",
        textArea: $('#6'),
        id: 6
    },
    threePM: {
        time: "15:00:00",
        range: "15:59:59",
        textArea: $('#7'),
        id: 7
    },
    fourPM: {
        time: "16:00:00",
        range: "16:59:59",
        textArea: $('#8'),
        id: 8
    },
    fivePM: {
        time: "17:00:00",
        range: "17:59:59",
        textArea: $('#9'),
        id: 9
    }

};

for (let timeBlock in timeBlocks) {

    if (currentTime > timeBlocks[timeBlock].time && currentTime > timeBlocks['nineAM'].time) {
        timeBlocks[timeBlock].textArea[0].className = 'past';
    }
    if (currentTime >= timeBlocks[timeBlock].time && currentTime <= timeBlocks[timeBlock].range ) {
        timeBlocks[timeBlock].textArea[0].className = 'present';
    }
    // Checking if the timeblock id has a value in localStorage
    if (myStorage[timeBlocks[timeBlock].id]) {
        timeBlocks[timeBlock].textArea[0].value = myStorage[timeBlocks[timeBlock].id]
    }
    if (currentTime === "00:00:00") {
        myStorage.clear();
    }    
}

// Setting localStorage items
$(button).on('click', function (e) {
    localStorage.setItem(
        $(e.target).parents(".col-md-1").siblings("#textarea").children()[0].id, 
        $(e.target).parents(".col-md-1").siblings("#textarea").children()[0].value
        );
});