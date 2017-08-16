var path = require('path')
var Sassaby = require('sassaby')

var file = path.resolve(__dirname, '../sass-flexbox.scss')
var sassaby = new Sassaby(file)

describe('flex-direction', function() {

	it('should output reverses', function() {
		sassaby.includedMixin('flex-direction').calledWithArgs('row-reverse')
			.declares('-webkit-box-direction', 'reverse')
		sassaby.includedMixin('flex-direction').calledWithArgs('row-reverse')
			.declares('-moz-box-direction', 'reverse')

		sassaby.includedMixin('flex-direction').calledWithArgs('column-reverse')
			.declares('-webkit-box-direction', 'reverse')
		sassaby.includedMixin('flex-direction').calledWithArgs('column-reverse')
			.declares('-moz-box-direction', 'reverse')
	})

})