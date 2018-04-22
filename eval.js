'use strict';
console.log( 'Javascript file is linked!' );

var prod1Button = document.getElementById( 'prod-1-button' );
var prod2Button = document.getElementById( 'prod-2-button' );
var prod3Button = document.getElementById( 'prod-3-button' );

var prod1Image = document.getElementById( 'prod1-image' );
var prod2Image = document.getElementById( 'prod2-image' );
var prod3Image = document.getElementById( 'prod3-image' );

var totalVotes = 0;

function MallProduct( name, url ) {
  this.name = name;
  this.url = url;
  this.votes = 0;
  this.appeared = 0;
}

var allProducts = [
  new MallProduct( 'Bag', 'images/bag.jpg' ),
  new MallProduct( 'Banana', 'images/banana.jpg' ),
  new MallProduct( 'Bathroom', 'images/bathroom.jpg' ),
  new MallProduct( 'Boots', 'images/boots.jpg' ),
  new MallProduct( 'Breakfast', 'images/breakfast.jpg' ),
  new MallProduct( 'Bubblegum', 'images/bubblegum.jpg' ),
  new MallProduct( 'Chair', 'images/chair.jpg' ),
  new MallProduct( 'Cthulhu', 'images/cthulhu.jpg' ),
  new MallProduct( 'Dog-Duck', 'images/dog-duck.jpg' ),
  new MallProduct( 'Dragon', 'images/dragon.jpg' ),
  new MallProduct( 'Pen', 'images/pen.jpg' ),
  new MallProduct( 'Pet-Sweep', 'images/pet-sweep.jpg' ),
  new MallProduct( 'Scissors', 'images/scissors.jpg' ),
  new MallProduct( 'Shark', 'images/shark.jpg' ),
  new MallProduct( 'Sweep', 'images/sweep.jpg' ),
  new MallProduct( 'Tauntaun', 'images/tauntaun.jpg' ),
  new MallProduct( 'Unicorn', 'images/unicorn.jpg' ),
  new MallProduct( 'USB', 'images/usb.jpg' ),
  new MallProduct( 'Water-Can', 'images/water-can.jpg' ),
  new MallProduct( 'Wine-Glass', 'images/wine-glass.jpg' ),
];

var ulElement = document.getElementById( 'display-results' );

function createList() {
  for ( var i in allProducts ) {
    var liElement = document.createElement( 'li' );
    liElement.textContent = allProducts[ i ].name + ' ( ' + allProducts[ i ].votes + ' ) ';
    ulElement.appendChild( liElement );
  }
}

var prod1, prod2, prod3;
var lastThree = [];

function pickNewProduct() {
  while ( prod1 === prod2 || prod1 === prod3 || prod2 === prod3 || lastThree.includes( prod1 ) || lastThree.includes( prod2 ) || lastThree.includes( prod3 ) ) {
    prod1 = allProducts[ Math.floor( Math.random() * allProducts.length ) ];
    prod2 = allProducts[ Math.floor( Math.random() * allProducts.length ) ];
    prod3 = allProducts[ Math.floor( Math.random() * allProducts.length ) ];
  }
  prod1Image.src = prod1.url;
  prod2Image.src = prod2.url;
  prod3Image.src = prod3.url;
  lastThree = [];
  lastThree.push( prod1, prod2, prod3 );
}

/* eslint-disable */

function handleClick( event ) {
  prod1.appeared++;
  prod2.appeared++;
  prod3.appeared++;
  totalVotes++;
  switch ( event.target.id ) {
    case 'prod-1-button':
      prod1.votes++;
      break;
    case 'prod-2-button':
      prod2.votes++;
      break;
    case 'prod-3-button':
      prod3.votes++;
      break;
  }
  pickNewProduct();
  checkVoteCount();
}

/* eslint-enable */

prod1Button.addEventListener( 'click', handleClick );
prod2Button.addEventListener( 'click', handleClick );
prod3Button.addEventListener( 'click', handleClick );

var checkVoteCount = function () {
  if ( totalVotes === 25 ) {
    prod1Button.removeEventListener( 'click', handleClick );
    prod2Button.removeEventListener( 'click', handleClick );
    prod3Button.removeEventListener( 'click', handleClick );
    createList();
    renderChart();
  }
};

pickNewProduct();