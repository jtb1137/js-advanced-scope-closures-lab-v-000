function produceDrivingRange(blockRange) {
	return function(startBlock,endBlock) {
		const distance = parseInt(endBlock) - parseInt(startBlock)
		const difference = blockRange - distance
		if(difference > 0) {
			return `within range by ${Math.abs(difference)}`
		} else {
			return `${Math.abs(difference)} blocks out of range`
		}
	}
}

function produceTipCalculator(tip){
	return function(fare) {
		return tip * fare
	}
}
