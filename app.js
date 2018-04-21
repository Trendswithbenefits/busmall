'use strict';

// console.log('JS file is linked');

// JUSTIN WHITAKER

//Uncomment below line if needed
// var allTheThings = [];
var totalVotes = 0;
var mallPic1 = document.getElementById('image1');
var mallPic2 = document.getElementById('image2');
var mallPic3 = document.getElementById('image3');

// Array to store Things generated by constructor
BusMallThing.allTheThings = [];

function BusMallThing(name, url) {
  this.name = name;
  this.url = url;
  //How many times has this been viewed?
  this.viewTotal = 0;
  //How many times has this been voted for?
  this.voteTotal = 0;
  BusMallThing.allTheThings.push(this);
}

//Create all the items in the catalog

function thingsGen() {
  new BusMallThing('R2D2 Roller Bag', 'img/01_bag.jpg');
  new BusMallThing('Banana slicer', 'img/02_banana.jpg');
  new BusMallThing('Bathroom Buddy', 'img/03_bathroom.jpg');
  new BusMallThing('Rainy Day Sandals', 'img/04_boots.jpg');
  new BusMallThing('Breakfast Maker', 'img/05_breakfast.jpg');
  new BusMallThing('Meatball Bubblegum', 'img/06_bubblegum.jpg');
  new BusMallThing('Yoga Chair','img/07_chair.jpg');
  new BusMallThing('Cthulhu','img/08_cthulhu.jpg');
  new BusMallThing('Dog Duckifier','img/09_dog-duck.jpg');
  new BusMallThing('Canned Dragon Meat','img/10_dragon.jpg');
  new BusMallThing('U-pensils','img/11_pen.jpg');
  new BusMallThing('Dog-O-Sweep','img/12_pet-sweep.jpg');
  new BusMallThing('Pie Slicer','img/13_scissors.jpg');
  new BusMallThing('Sleeping Shark','img/14_shark.jpg');
  new BusMallThing('Kid-O-Sweep','img/15_sweep.jpg');
  new BusMallThing('Tauntaun Sack','img/16_tauntaun.jpg');
  new BusMallThing('Canned Unicorn Meat','img/17_unicorn-meat.jpg');
  new BusMallThing('USB Tentacle','img/18_usb-tentacle.jpg');
  new BusMallThing('Perpetual Watering Can','img/19_water-can.jpg');
  new BusMallThing('Low-Spill Wine Glass','img/20_wine-glass.jpg');
}
thingsGen();

// Keep track of previously displayed things
BusMallThing.lastDisplayed = [];


//respond to clicks
BusMallThing.handleclick = function (event) {

};

// List of results

BusMallThing.showResults = function() {

};

// Data for chart
BusMallThing.updateVotes = function() {

};

//Create chart with Chart.JS
BusMallThing.renderChart = function() {

};

// Select a random image to be displayed
BusMallThing.threeUniqueNums = threeUniqueNumsfunction () {
  var threeUnique = [];
  // Math.random to generate 3 numbers
  while(threeUnique.length < 3) {
    var randNum = Math.floor(Math.random() * BusMallThing.allTheThings.length);
    //Compare numbers to each other
    if(!BusMallThing.lastDisplayed.includes(randNum) && !threeUnique.includes(randNum)) {
      threeUnique.push(randNum);
    } else {
      console.log('Duplicate number!');
      //Compare to previously generated things
      //Account for array length of allTheThings

    }
  }
  BusMallThing.lastDisplayed = threeUnique;
  return threeUnique;

};


BusMallThing.randomThing = function() {
  var uniqueIndices = BusMallThing.threeUniqueNums();

  //Increment number of times displayed
  BusMallThing.allTheThings[uniqueIndices[0]].viewTotal++;
  BusMallThing.allTheThings[uniqueIndices[1]].viewTotal++;
  BusMallThing.allTheThings[uniqueIndices[2]].viewTotal++;

  //Display two unique images on the screen
  BusMallThing.image1.src = BusMallThing.allTheThings[uniqueIndices[0]].url;
  BusMallThing.image1.alt = BusMallThing.allTheThings[uniqueIndices[0]].name;

  BusMallThing.image2.src = BusMallThing.allTheThings[uniqueIndices[1]].url;
  BusMallThing.image2.alt = BusMallThing.allTheThings[uniqueIndices[1]].name;

  BusMallThing.image3.src = BusMallThing.allTheThings[uniqueIndices[2]].url;
  BusMallThing.image3.alt = BusMallThing.allTheThings[uniqueIndices[2]].name;
};

mallPic1.addEventListener('click', function(event) {
    totalVotes ++;
    // this.viewTotal ++;
  });
  
  mallPic2.addEventListener('click', function(event) {
    totalVotes ++;
  });
  