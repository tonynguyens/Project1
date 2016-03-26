//Use this file to implement Part One of your project
/*
var animal = {};

animal.username = 'HoneyBadger';

animal['tagline'] = 'I heard it was your Birdthday... Well, Honey Badger Don\'t care, Honey Badger don\'t give a shit!';

var noises = [];
animal['noises'] = noises;

var counter = 0;
for(var key in animal) {
	if(key === 'username') {
		console.log('Hi my name is ' + animal[key]);
	} else if( key === 'tagline') {
		console.log('I like to say ' + animal[key]);
	}
}


var noiseArray = ['growl'];
noiseArray.unshift('rawr');
noiseArray.push('screech');
noiseArray[3] = 'lawrrrl';

animal.noises =  noiseArray;


var animals = [];
animals.push(animal);

var quackers = { username: 'DaffyDuck', tagline: 'Yippeee!', noises: ['quack', 'honk', 'sneeze', 'growl'] }
animals.unshift(quackers);

var pen = {
	username: 'Penguiny',
	tagline: 'I\'m cold as ice baby',
	noises: ['lalala', 'happyfeet']
};

var dog = {
	username: 'Tankie',
	tagline: 'I sniff butts',
	noises: ['woof wooof', 'grrrrrrr']
};

animals.push(pen, dog);
*/

// var animal = {};

// animal.username = 'DogMaster';

// animal['tagline'] = 'Woof your heart out';

// var noises = [];

// animal['noises'] = noises;

// var counter = 0;
// for(var key in animal) {
//     counter++;
//     if(key === 'username') {
//         console.log('Hi my name is ' + animal[key]) 
//     } else if(key === 'tagline') {
//         console.log('I like to say ' + animal[key])
//     }
    
// }


// var noiseArray = ['wrrrooof']

// noiseArray.unshift('broof');
// noiseArray.push('zrooof');

// noiseArray[3] = 'zlllooof';

// animal['noises'] = noiseArray;


// var animals = [];

// animals.push(animal);

// var quackers = { username: 'DaffyDuck', tagline: 'Yippeee!', noises: ['quack', 'honk', 'sneeze', 'growl'] }

// animals.push(quackers);

// var pen = {
//     username: 'Penguin',
//     tagline: 'ice ice baby',
//     noises: 'eeaaak'
// };


// var badger = {
//     username: 'Honey Badger',
//     tagline: 'Doesnt give a fuck',
//     noises: 'brrrrreeesssh'
// };

// animals.push(pen, badger)

//#1 and #2

function AnimalTestUser(username) {
    var arg = arguments.length;
    var otherArgs = [];
    if(arg > 1) {
        for(var i = 1; i < arg; i++) {
            otherArgs.push(arguments[i]);
        }
    }
    return {username, otherArgs};
}


var testSheep = AnimalTestUser('CottonBall', {'loves dancing': true}, [1,2,3] );
//console.log(testSheep);


//#3, #4 and #5
function AnimalCreator(username, species, tagline, noises) {
    return {
        username,
        species,
        tagline,
        noises,
        friends: []
    };
}
var sheep = AnimalCreator('Cloud', 'sheep', 'You can count on me!', ['baahhh', 'arrgg', 'chewchewchew']);

var honey = AnimalCreator('Hdawg', 'badger', 'I don\'t give a shit', ['spppok', 'doook', 'yaaaao'])

var dog = AnimalCreator('Tank', 'dogggie', 'I sniff butts', ['woof', 'rawr', 'awwhoooo'])

var arr = [];
arr.push(honey, dog);

var arr1 = [sheep, dog];
var arr2 = [sheep, honey];


function addfriend(animal, friend) {
    for(var i = 0; i < friend.length; i++) {
        animal.friends.push(friend[i].username);
    }
}
addfriend(sheep, arr);
addfriend(honey, arr1);
addfriend(dog, arr2);

//console.log(sheep);

//#6
myFarm = [];
myFarm.push(sheep,honey,dog);
console.log(myFarm);


//#7
// myFarm.matches = [];    // to manually add an array to the object
// console.log(myFarm);

function addMatchesArray(farm) {
    for(var i = 0; i < farm.length; i++) {
        farm[i].matches = [];
    }
    return farm;
}
addMatchesArray(myFarm);
//console.log(myFarm);


//#8

function givesMatches(farm) {
    for(var i = 0; i < farm.length; i++) {
        farm[i].matches.push(farm[i].friends[0]);
    }
    return farm;
    
}
givesMatches(myFarm);

console.log(myFarm);























































