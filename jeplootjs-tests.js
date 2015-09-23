// Write your tests here!
// Here is an example.
Tinytest.add('jeplootjs - unit tests', function (test) {
  	test.equal(true, true);
  	console.log('JepLoot.booRoll(.5): ' + JepLoot.booRoll(.5));
  	console.log('JepLoot.booRoll(5, 17): ' + JepLoot.intRoll(5, 17));
 	console.log("JepLoot.catRoll({ 'first thing': 100, 'second thing': 200}): " + 
 		JepLoot.catRoll({
		  	'first thing': 100,
		  	'second thing': 200
	  	}));
});
