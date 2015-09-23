var JepLoot = {
	'booRoll' : function(chance) {
		try {
			if (chance < 0 || chance > 1)
				throw "booRoll must operate on a value between 0 and 1";

			return Math.random() < chance;
		}

		catch(error) {
			console.log(error);
			return undefined;
		}
	},

	'numRoll' : function(min, max) {
		try {
			if (max <= min)
				throw "minimum value must be less than maximum value";

			return min + (Math.random() * (max - min));
		}

		catch (error) {
			console.log(error);
			return undefined;
		}
	},

	'intRoll' : function(min, max) {
		try {
			if (max <= min)
				throw "minimum value must be less than maximum value";

			return Math.floor( numRoll( Math.floor(min), Math.ceil(max) ) );
		}

		catch (error) {
			console.log(error);
			return undefined;
		}
	},

	'catRoll' : function(categories) {
		try {
			var seed_range = 0;
			var ranges = {};
			for (var key in categories) {
			    if (isNaN(categories.key))
			    	throw "at least one of the values passed is NaN";

			    seed_range += categories.key;
			    ranges.key = seed_range;
			}

			var random = Math.random() * seed_range;

			for (var key in ranges) {
				if (random < key)
					return key;
			}
		}

		catch(error) {
			console.log(error);
			return undefined;
		}
	}
}