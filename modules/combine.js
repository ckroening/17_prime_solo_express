var moduleRandom = require('./random.js');
var moduleConvert = require('./convert.js');
var moduleCombine;

module.exports = {
	accountBalance: function(){
		var balance = moduleConvert.convert(moduleRandom.random(100,1000000));
		return 'Account Balance:' + balance + '\n';
	}
};


