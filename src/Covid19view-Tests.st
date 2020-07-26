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
!

testMovingAverage
	| series |
	series := ((OrderedCollection new)
			add: (JHUDatapoint date: (Date d: 1 m: 4 y: 2020) confirmed: 20 deaths: 3 recovered: 6);
			add: (JHUDatapoint date: (Date d: 2 m: 4 y: 2020) confirmed: 42 deaths: 4 recovered: 11);
			add: (JHUDatapoint date: (Date d: 3 m: 4 y: 2020) confirmed: 56 deaths: 6 recovered: 18);
			add: (JHUDatapoint date: (Date d: 4 m: 4 y: 2020) confirmed: 83 deaths: 8 recovered: 27);
			add: (JHUDatapoint date: (Date d: 5 m: 4 y: 2020) confirmed: 108 deaths: 8 recovered: 40);
			add: (JHUDatapoint date: (Date d: 6 m: 4 y: 2020) confirmed: 154 deaths: 9 recovered: 51);
			add: (JHUDatapoint date: (Date d: 7 m: 4 y: 2020) confirmed: 185 deaths: 9 recovered: 58);
			add: (JHUDatapoint date: (Date d: 8 m: 4 y: 2020) confirmed: 227 deaths: 14 recovered: 82);
			add: (JHUDatapoint date: (Date d: 9 m: 4 y: 2020) confirmed: 276 deaths: 21 recovered: 113);
			yourself).
	self assert: (Averager average: 7 of: #()) equals:  #().
	self assert: (Averager average: 7 of: (series first: 1)) equals:  (Array with: (JHUDatapoint date: (Date d: 1 m: 4 y: 2020) confirmed: 20 / 7 deaths: 3 / 7 recovered: 6 / 7)).
	self assert: (Averager average: 7 of: (series first: 2)) equals:  (Array 
		with: (JHUDatapoint date: (Date d: 1 m: 4 y: 2020) confirmed: 20 / 7 deaths: 3 / 7 recovered: 6 / 7)
		with: (JHUDatapoint date: (Date d: 2 m: 4 y: 2020) confirmed: 62 / 7 deaths: 7 / 7 recovered: 17 / 7)).
	self assert: (Averager average: 7 of: (series first: 3)) equals:  (Array 
		with: (JHUDatapoint date: (Date d: 1 m: 4 y: 2020) confirmed: 20 / 7 deaths: 3 / 7 recovered: 6 / 7)
		with: (JHUDatapoint date: (Date d: 2 m: 4 y: 2020) confirmed: 62 / 7 deaths: 7 / 7 recovered: 17 / 7)
		with: (JHUDatapoint date: (Date d: 3 m: 4 y: 2020) confirmed: 118 / 7 deaths: 13 / 7 recovered: 35 / 7)).
	self assert: (Averager average: 7 of: (series first: 4)) equals:  (Array new
		add: (JHUDatapoint date: (Date d: 1 m: 4 y: 2020) confirmed: 20 / 7 deaths: 3 / 7 recovered: 6 / 7);
		add: (JHUDatapoint date: (Date d: 2 m: 4 y: 2020) confirmed: 62 / 7 deaths: 7 / 7 recovered: 17 / 7);
		add: (JHUDatapoint date: (Date d: 3 m: 4 y: 2020) confirmed: 118 / 7 deaths: 13 / 7 recovered: 35 / 7);
		add: (JHUDatapoint date: (Date d: 4 m: 4 y: 2020) confirmed: 201 / 7 deaths: 21 / 7 recovered: 62 / 7);
		yourself).
	self assert: (Averager average: 7 of: (series first: 5)) equals:  (Array new
		add: (JHUDatapoint date: (Date d: 1 m: 4 y: 2020) confirmed: 20 / 7 deaths: 3 / 7 recovered: 6 / 7);
		add: (JHUDatapoint date: (Date d: 2 m: 4 y: 2020) confirmed: 62 / 7 deaths: 7 / 7 recovered: 17 / 7);
		add: (JHUDatapoint date: (Date d: 3 m: 4 y: 2020) confirmed: 118 / 7 deaths: 13 / 7 recovered: 35 / 7);
		add: (JHUDatapoint date: (Date d: 4 m: 4 y: 2020) confirmed: 201 / 7 deaths: 21 / 7 recovered: 62 / 7);
		add: (JHUDatapoint date: (Date d: 5 m: 4 y: 2020) confirmed: 309 / 7 deaths: 29 / 7 recovered: 102 / 7);
		yourself).
	self assert: (Averager average: 7 of: (series first: 6)) equals:  (Array new
		add: (JHUDatapoint date: (Date d: 1 m: 4 y: 2020) confirmed: 20 / 7 deaths: 3 / 7 recovered: 6 / 7);
		add: (JHUDatapoint date: (Date d: 2 m: 4 y: 2020) confirmed: 62 / 7 deaths: 7 / 7 recovered: 17 / 7);
		add: (JHUDatapoint date: (Date d: 3 m: 4 y: 2020) confirmed: 118 / 7 deaths: 13 / 7 recovered: 35 / 7);
		add: (JHUDatapoint date: (Date d: 4 m: 4 y: 2020) confirmed: 201 / 7 deaths: 21 / 7 recovered: 62 / 7);
		add: (JHUDatapoint date: (Date d: 5 m: 4 y: 2020) confirmed: 309 / 7 deaths: 29 / 7 recovered: 102 / 7);
		add: (JHUDatapoint date: (Date d: 6 m: 4 y: 2020) confirmed: 463 / 7 deaths: 38 / 7 recovered: 153 / 7);
		yourself).
	self assert: (Averager average: 7 of: (series first: 7)) equals:  (Array new
		add: (JHUDatapoint date: (Date d: 1 m: 4 y: 2020) confirmed: 20 / 7 deaths: 3 / 7 recovered: 6 / 7);
		add: (JHUDatapoint date: (Date d: 2 m: 4 y: 2020) confirmed: 62 / 7 deaths: 7 / 7 recovered: 17 / 7);
		add: (JHUDatapoint date: (Date d: 3 m: 4 y: 2020) confirmed: 118 / 7 deaths: 13 / 7 recovered: 35 / 7);
		add: (JHUDatapoint date: (Date d: 4 m: 4 y: 2020) confirmed: 201 / 7 deaths: 21 / 7 recovered: 62 / 7);
		add: (JHUDatapoint date: (Date d: 5 m: 4 y: 2020) confirmed: 309 / 7 deaths: 29 / 7 recovered: 102 / 7);
		add: (JHUDatapoint date: (Date d: 6 m: 4 y: 2020) confirmed: 463 / 7 deaths: 38 / 7 recovered: 153 / 7);
		add: (JHUDatapoint date: (Date d: 7 m: 4 y: 2020) confirmed: 648 / 7 deaths: 47 / 7 recovered: 211 / 7);
		yourself).
	self assert: (Averager average: 7 of: (series first: 8)) equals:  (Array new
		add: (JHUDatapoint date: (Date d: 1 m: 4 y: 2020) confirmed: 20 / 7 deaths: 3 / 7 recovered: 6 / 7);
		add: (JHUDatapoint date: (Date d: 2 m: 4 y: 2020) confirmed: 62 / 7 deaths: 7 / 7 recovered: 17 / 7);
		add: (JHUDatapoint date: (Date d: 3 m: 4 y: 2020) confirmed: 118 / 7 deaths: 13 / 7 recovered: 35 / 7);
		add: (JHUDatapoint date: (Date d: 4 m: 4 y: 2020) confirmed: 201 / 7 deaths: 21 / 7 recovered: 62 / 7);
		add: (JHUDatapoint date: (Date d: 5 m: 4 y: 2020) confirmed: 309 / 7 deaths: 29 / 7 recovered: 102 / 7);
		add: (JHUDatapoint date: (Date d: 6 m: 4 y: 2020) confirmed: 463 / 7 deaths: 38 / 7 recovered: 153 / 7);
		add: (JHUDatapoint date: (Date d: 7 m: 4 y: 2020) confirmed: 648 / 7 deaths: 47 / 7 recovered: 211 / 7);
		add: (JHUDatapoint date: (Date d: 8 m: 4 y: 2020) confirmed: 855 / 7 deaths: 58 / 7 recovered: 287 / 7);
		yourself).
	self assert: (Averager average: 7 of: series) equals:  (Array new
		add: (JHUDatapoint date: (Date d: 1 m: 4 y: 2020) confirmed: 20 / 7 deaths: 3 / 7 recovered: 6 / 7);
		add: (JHUDatapoint date: (Date d: 2 m: 4 y: 2020) confirmed: 62 / 7 deaths: 7 / 7 recovered: 17 / 7);
		add: (JHUDatapoint date: (Date d: 3 m: 4 y: 2020) confirmed: 118 / 7 deaths: 13 / 7 recovered: 35 / 7);
		add: (JHUDatapoint date: (Date d: 4 m: 4 y: 2020) confirmed: 201 / 7 deaths: 21 / 7 recovered: 62 / 7);
		add: (JHUDatapoint date: (Date d: 5 m: 4 y: 2020) confirmed: 309 / 7 deaths: 29 / 7 recovered: 102 / 7);
		add: (JHUDatapoint date: (Date d: 6 m: 4 y: 2020) confirmed: 463 / 7 deaths: 38 / 7 recovered: 153 / 7);
		add: (JHUDatapoint date: (Date d: 7 m: 4 y: 2020) confirmed: 648 / 7 deaths: 47 / 7 recovered: 211 / 7);
		add: (JHUDatapoint date: (Date d: 8 m: 4 y: 2020) confirmed: 855 / 7 deaths: 58 / 7 recovered: 287 / 7);
		add: (JHUDatapoint date: (Date d: 9 m: 4 y: 2020) confirmed: 1089 / 7 deaths: 75 / 7 recovered: 389 / 7);
		yourself).
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

