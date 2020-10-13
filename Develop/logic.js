// Create variables
var currentDate = $('#currentDay');
var saveBtn = $('#save-button');
let ta1 = $("#ta1");
let scheduleTime = $(".hour").text;
let nineAm = 9
$("#nine").text(nineAm + "AM");

let taContent = JSON.parse(localStorage.getItem("event"));
$("#ta1").text(taContent);

// Display the current date at the top of the page
currentDate.text(moment().format('MMMM Do, YYYY'));

// Create a variable for the current time
let currentTime = (moment().format('h'));

// Create a variable for past time
let pastTime = moment().hour(nineAm);


function compareTime(){
let time = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
    /*{
    number: 9},
    {
    number: 10}, 
    {
    number: 11},
    {
    number: 12}, 
    {
    number: 13}, 
        {
    number: 14}, 
    {
    number: 15},
    {
    number: 16},
    {
    number: 17},
    {
    number: 18}]*/

for(var i = 0; i < time.length ; i ++) {
    let variable = moment().hour(time[i]);

    if(moment(variable).isBefore()) {
        $("#ta1parent").addClass("past")        
        console.log(variable)

    } else if(moment(variable).isSame()) {
        $("#ta1parent").addClass("present")
        console.log(variable)


    } else if(moment(variable).isAfter()) {
        $("#ta1parent").addClass("future")
        console.log(variable)

    
    } else {
        return
    }
}}
compareTime();







// Function to color code the timeblocks based on what time of day it is
    // If in the past, color gray
    function beforeTime(){
        if(moment(pastTime).isBefore()) {
            $("#ta1parent").addClass("past")
        } else if (moment().hour() = currentTime)
        



// Function to save the events to local sotrage when save button is clicked
$("#save-button").on("click", function(event){
// Check to see if there is anything in local storage. 
// If there is, add to it. If there is not, set an empty array.
    /*const event = $('#event')
 let events;
 if(localStorage.getItem('events') === null) {
     events = [];
 } else {
     events = JSON.parse(localStorage.getItem('events'));
 }

 events.push(event.val().trim());

 localStorage.setItem("events", JSON.stringify(events));*/
 if(event.target.matches = $("#button")) {
     alert("hello");
 } else {
     alert("bye");
 }
 localStorage.setItem("event", JSON.stringify(ta1.val().trim()));
})




/*
function localStorage(){
$("#ta1").text(taContent);
console.log(taContent);
}*/

$("#save-button2").on("click", function(event) {
    if(event.target.matches = $("#button")) {
        alert("hello");
    } else {
        alert("bye");
    }
    let ta2 = $("#ta2");
    localStorage.setItem("event2", ta2.val().trim());
})}