Smalltalk createPackage: 'Covid19view-Tests'!
TestCase subclass: #Covid19viewTest
	slots: {}
	package: 'Covid19view-Tests'!

TestCase subclass: #ScaleTest
	slots: {}
	package: 'Covid19view-Tests'!

!ScaleTest methodsFor: 'testing'!

testExponent
	self assert: 47 exponent = 1.
	self assert: 3577 exponent = 3.
	self assert: 1000 exponent = 2.
	self assert: 999 exponent = 2.
	self assert: 1001 exponent = 3.
	self assert: 5 exponent = 0.
	self assert: 1 exponent = 0.
	self assert: 0.1 exponent = -1.
	self assert: 0 exponent printString = '-Infinity'.
	self assert: -2 exponent printString = 'NaN'.
! !

