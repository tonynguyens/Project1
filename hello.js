//Use this file to implement Part One of your project

var animal = {};

animal.username = 'HoneyBadger';

animal['tagline'] = 'I heard it was your Birdthday... Well, Honey Badger don\'t care, Honey Badger don\'t give a shit!';

var noises = [];
animal['noises'] = noises;

var counter = 0;
for (var key in animal) {
	if(key === 'username') {
		console.log('Hi my name is ' + animal[key]);
	} else if( key === 'tagline') {
		console.log('I like to say ' + animal[key]);
	}
}
console.log('getting better');

console.log('another day');

console.log('my feet is cold');
console.log('my feet is cold');
console.log('my feet is cold');
console.log('my feet is cold');