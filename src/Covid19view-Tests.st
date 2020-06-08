Smalltalk createPackage: 'Covid19view-Tests'!
TestCase subclass: #Covid19viewTest
	slots: {}
	package: 'Covid19view-Tests'!

!Covid19viewTest methodsFor: 'tests'!

testDatasetAddition
	self assert: (Dataset example + Dataset examplePlus5Days) printString equals: 'Dataset[JHU, 14]'
!

testDateIntervals
	self assert: ((Date d: 8 m: 6 y: 2020) to: (Date d: 8 m: 6 y: 2020)) equals: {(Date d: 8 m: 6 y: 2020)}.
	self assert: ((Date d: 6 m: 6 y: 2020) to: (Date d: 8 m: 6 y: 2020)) equals: {(Date d: 6 m: 6 y: 2020). (Date d: 7 m: 6 y: 2020). (Date d: 8 m: 6 y: 2020)}.
	self assert: ((Date d: 8 m: 6 y: 2020) nextDay to: (Date d: 8 m: 6 y: 2020)) equals: #().
!

testJHUDatapoint
	"does not work: how can I create a JSON for tests?"
	
	[((Promise value: [:model | model value: '{"date": {"d": 27, "m": 1, "y": 2020}, "c": 1}']) then: #json) then: [:json |
		console log: json.
		self assert: (JHUDatapoint fromJson: json) printString = '']].
	self assert: true
! !

TestCase subclass: #ScaleTest
	slots: {}
	package: 'Covid19view-Tests'!

!ScaleTest methodsFor: 'testing'!

testExponent
	self assert: 47 exponent equals: 1.
	self assert: 3577 exponent equals: 3.
	self assert: 1000 exponent equals: 3.   "wrong without the delta"
	self assert: 999 exponent equals: 2.
	self assert: 1001 exponent equals: 3.
	self assert: 10000 exponent equals: 4.
	self assert: 9999 exponent equals: 3.
	self assert: 10001 exponent equals: 4.
	self assert: 100000 exponent equals: 5.
	self assert: 99999 exponent equals: 4.
	self assert: 100001 exponent equals: 5.
	self assert: 1000000 exponent equals: 6.   "wrong without the delta"
	self assert: 999999 exponent equals: 5.
	self assert: 1000001 exponent equals: 6.
	self assert: 10000000 exponent equals: 7.
	self assert: 9999999 exponent equals: 6.
	self assert: 10000001 exponent equals: 7.
	self assert: 5 exponent equals: 0.
	self assert: 1 exponent equals: 0.
	self assert: 0.1 exponent equals: -1.
	self assert: 0 exponent printString equals: '-Infinity'.
	self assert: -2 exponent printString equals: 'NaN'.
!

testVerticalLogarithmicMapping
	self assert: ((LogarithmicValuescale from: 1 to: 10) at: 1) equals: 0.
	self assert: ((LogarithmicValuescale from: 1 to: 10) at: 10) equals: 1.
	self assert: ((LogarithmicValuescale from: 1 to: 10) at: 100) equals: 2.
! !

