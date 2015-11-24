	var moduleRandom = require('./random.js');
	var moduleConvert = require('./convert.js');
	var moduleCombine;

module.exports = {

accountBalance: function(){
	return 'Account Balance: \n';
},
combine: function(){
	moduleCombine = moduleConvert.convert(moduleRandom.random(100,1000000));

	return moduleCombine;
}


};


