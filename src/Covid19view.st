Smalltalk createPackage: 'Covid19view'!
(Smalltalk packageAt: 'Covid19view' ifAbsent: [ self error: 'Package not created: Covid19view' ]) imports: {'./Covid19Model'. 'silk/Silk'}!
Object subclass: #Barchart
	slots: {#country. #series. #aspects. #valuescale. #datescale}
	package: 'Covid19view'!
!Barchart commentStamp!
A bar chart with decent date and value scale.
Datapoints are shown as bars with a tooltip showing details!

!Barchart methodsFor: 'accessing'!

aspects
	"<Array of: Symbol>
	selectors of datapoint instances in the series.
	When the list is empty, all aspects are shown"
	
	^aspects ifNil: [#()]
!

country
	"<GeographicArea>"
	
	^country
!

datapoints
	"<Array of: Datapoint>"
	
	^self series series
!

datescale
	"<Datescale>"
	
	^datescale ifNil: [
		datescale := Datescale from: self firstDate to: CoViD19Application current lastDate]
!

days
	"<Integer>"
	
	^self datescale days
!

firstDate
	^Date fromMilliseconds: self series firstDate asMilliseconds - (24 * 60 * 60 * 1000)
!

lastDate
	^self datescale to
!

linearValuescale
	"<LinearValuescale>"
	
	^LinearValuescale from: 0 to: self maxValue
!

logarithmicValuescale
	"<LogarithmicValuescale>"
	
	^LogarithmicValuescale from: 1 to: self maxValue
!

maxValue
	"<Integer>"
	
	^self datapoints inject: 0 into: [:max :datapoint | 
		max max: (datapoint maxValueForAspects: self aspects)]
!

monthnameAt: aDate
	"<String>"
	
	| index |
	index := aDate month + 1.
	index > 12 ifTrue: [
		index := 1].
	^#('January' 'February' 'March' 'April' 'May' 'June' 'July' 'August' 'September' 'October' 'November' 'December') at: index
!

numberOfValues
	"<Integer>"
	
	^self series size
!

series
	"<Dataseries>"
	
	^series
!

silk
	"Silk object corresponding to the receiver"
	
	^('#', self class name) asSilk.
!

stringLogarithmic: aBoolean
	^aBoolean
		ifTrue: ['logarithmic']
		ifFalse: ['linear']
!

valuescale
	"<Valuescale>"
	
	^valuescale ifNil: [valuescale := self isLogarithmic 
		ifTrue: [self logarithmicValuescale] 
		ifFalse: [self linearValuescale]]
! !

!Barchart methodsFor: 'actions'!

recreate
	self country recreateCharts
!

toggleValuescale
	self class logarithmic: self class logarithmic not.
	self recreate
! !

!Barchart methodsFor: 'events'!

mouseout: anEvent datapoint: aDatapoint
	'#Tooltip' asSilk << {'style' -> ('visibility: hidden;')}
!

mouseover: anEvent datapoint: aDatapoint
	| tooltip |
	tooltip := '#Tooltip' asSilk.
	tooltip resetContents.
	tooltip << {
		'style' -> (
			'right: ', (window innerWidth - anEvent x) printString, 'px; ',
			'top: ', anEvent y printString, 'px; ',
			'visibility: visible;').
		Silk SPAN: {'class' -> 'LegendBar'}.
		Silk SPAN: {'class' -> 'LegendLabel'. aDatapoint date asLocaleDateString}.
		Silk SPAN: {'class' -> 'LegendValue'}.
		self tooltipClass: 'confirmed' label: 'confirmed' value: aDatapoint confirmed.
		self tooltipClass: 'recovered' label: 'recovered' value: aDatapoint recovered.
		self tooltipClass: 'deaths' label: 'deaths' value: aDatapoint deaths}
! !

!Barchart methodsFor: 'geometry'!

chartBottom
	"<Number>"
	
	^90
!

chartHeight
	"<Number>"
	
	^self chartBottom - self chartTop
!

chartLeft
	"<Number>"
	
	^0
!

chartRight
	"<Number>"
	
	^170
!

chartTop
	"<Number>"
	
	^3
!

chartWidth
	"<Number>"
	
	^self chartRight - self chartLeft
!

datescaleHeight
	"<Number>"
	
	^100 - self chartHeight
!

valuescaleWidth
	"<Number>"
	
	^200 - self chartWidth
!

xAt: aDate
	"<Number>
	x value in the svg coordinate system"
	
	^self chartLeft + ((self datescale at: aDate) * self chartWidth)
!

yAt: aDomainValue
	"<Number>
	y value in the svg coordinate system"
	
	| offset |
	self isLogarithmic ifTrue: [
		aDomainValue isZero ifTrue: [
			^self chartBottom].
		offset := 5.
		^(self chartBottom - offset) - ((self valuescale at: aDomainValue) * (self chartHeight - offset))].
	^self chartBottom - ((self valuescale at: aDomainValue) * self chartHeight)
! !

!Barchart methodsFor: 'initialization'!

initializeCountry: aCountry series: aDataseries aspects: someSymbols
	country := aCountry.
	series := aDataseries.
	aspects := someSymbols
! !

!Barchart methodsFor: 'svg'!

barForDatapoint: aDatapoint width: aWidth
	"<g>"
	
	| barLeft bars barTopConfirmed barConfirmed barTopRecovered barRecovered barTopDeaths barDeaths g |
	barLeft := (self xAt: aDatapoint date) - aWidth.
	bars :=OrderedCollection new.
	(self aspects isEmpty or: [
	self aspects includes: #confirmed]) ifTrue: [
		| top |
		top := self yAt: (aDatapoint perform: #confirmed).
		bars add: (SVG RECT: {
			'class' -> 'confirmed'.
			'x' -> barLeft. 'y' -> top. 
			'width' -> aWidth. 'height' -> (self chartBottom - top)})].
	self aspects isEmpty ifTrue: [
		| top |
		top := self yAt: (aDatapoint perform: #decided).
		bars add: (SVG RECT: {
			'class' -> 'recovered'.
			'x' -> barLeft. 'y' -> top. 
			'width' -> aWidth. 'height' -> (self chartBottom - top)})].
	(self aspects includes: #recovered) ifTrue: [
		| top |
		top := self yAt: (aDatapoint perform: #recovered).
		bars add: (SVG RECT: {
			'class' -> 'recovered'.
			'x' -> barLeft. 'y' -> top. 
			'width' -> aWidth. 'height' -> (self chartBottom - top)})].
	(self aspects isEmpty or: [
	self aspects includes: #deaths]) ifTrue: [
		| top |
		top := self yAt: (aDatapoint perform: #deaths).
		bars add: (SVG RECT: {
			'class' -> 'deaths'.
			'x' -> barLeft. 'y' -> top. 
			'width' -> aWidth. 'height' -> (self chartBottom - top)})].
	g := SVG G: {
		'class' -> 'Bar'.
		bars}.
	g on: #mouseover bind: [:event | self mouseover: event datapoint: aDatapoint].
	g on: #mouseout bind: [:event | self mouseout: event datapoint: aDatapoint].
	^g
!

chartAreaIn: aSVG
	"add the chart area"
	
	| chartArea barWidth |
	chartArea := self graphicsArea.
	barWidth := self chartWidth / self days.
	self datapoints do: [:datapoint |
		chartArea << (self barForDatapoint: datapoint width: barWidth)].
	aSVG << chartArea.
	^chartArea
!

dateAxisIn: aSVG
	| dateAxis x |
	dateAxis := aSVG G: 'class' -> 'DateAxis'.
	self series lastDateOfWeeks do: [:date |
		x := self xAt: date.
		dateAxis LINE: {
			'class' -> 'Weekline'.
			'x1' -> x. 'y1' -> self chartBottom.
			'x2' -> x. 'y2' -> self chartTop}].
	self series lastDateOfMonths do: [:date |
		x := self xAt: date.
		dateAxis LINE: {
			'class' -> 'Monthline'.
			'x1' -> x. 'y1' -> (self chartBottom + self datescaleHeight).
			'x2' -> x. 'y2' -> self chartTop}.
		dateAxis TEXT: {
			'class' -> 'MonthText'.
			'x' -> (x + 10). 'y' -> (self chartBottom + 8).
			self monthnameAt: date}].
	dateAxis LINE: {
		'class' -> 'Baseline'.
		'x1' -> self chartLeft. 'y1' -> self chartBottom.
		'x2' -> self chartRight. 'y2' -> self chartBottom}.
	^dateAxis
!

fullBoxClassed: aClassString
	^SVG RECT: {
		'class' -> aClassString.
		'x' -> 0. 'y' -> 0. 
		'width' -> '100%'. 'height' -> '100%'}
!

graphicsArea
	"<g>"
	
	^SVG G: {
		'class' -> 'GraphicsArea'.
		SVG RECT: {
			'x' -> self chartLeft. 'y' -> self chartTop. 
			'width' -> self chartWidth. 'height' -> self chartHeight}}
!

legendClass: aClassString label: aString value: aNumber
	^{
		Silk SPAN: {'class' -> 'LegendBar'. SVG SVG: {'viewBox' -> '0 0 10 6'. self fullBoxClassed: aClassString}}.
		Silk SPAN: {'class' -> 'LegendValue'. aNumber separatedThousandsString}.
		Silk SPAN: {'class' -> 'LegendLabel'. aString}}
!

svg
	"<svg>"
	
	| svg valueAxis dateAxis buttons lin log |
	svg := SVG SVG: {
		'viewBox' -> '0 0 200 100'.
		SVG RECT: {'x' -> 0. 'y' -> 0. 'width' -> '100%'. 'height' -> '100%'}}.
	self valueAxisIn: svg.
	self dateAxisIn: svg.
	self chartAreaIn: svg.
	^svg
!

tooltipClass: aClassString label: aString value: aNumber
	^{
		Silk SPAN: {'class' -> 'LegendBar'. SVG SVG: {'viewBox' -> '0 0 10 5'. self fullBoxClassed: aClassString}}.
		Silk SPAN: {'class' -> 'LegendLabel'. aString}.
		Silk SPAN: {'class' -> 'LegendValue'. aNumber separatedThousandsString}}
!

valueAxisIn: aSVG
	^self valuescale ticks allIn: [:majorTicks :minorTicks |
		| valueAxis |
		valueAxis := aSVG G: {
			'class' -> 'ValueAxis'.
			SVG RECT: {
				'x' -> self chartRight. 'y' -> self chartTop. 
				'width' -> self valuescaleWidth. 'height' -> self chartHeight}}.
		minorTicks do: [:value |
			| y |
			y := self yAt: value.
			valueAxis LINE: {
				'class' -> 'Minorline'.
				'x1' -> self chartLeft. 'y1' -> y.
				'x2' -> self chartRight. 'y2' -> y}].
		majorTicks do: [:value |
			| y |
			y := self yAt: value.
			valueAxis LINE: {
				'class' -> 'Majorline'.
				'x1' -> self chartLeft. 'y1' -> y.
				'x2' -> self chartRight. 'y2' -> y}.
			valueAxis TEXT: {
				'class' -> 'MajorText'.
				'text-anchor' -> 'end'.
				'x' -> (self chartRight + self valuescaleWidth - 2). 'y' -> (y + 2).
				value separatedThousandsString}].
		valueAxis]
! !

!Barchart methodsFor: 'testing'!

isLogarithmic
	"<Boolean>"
	
	^self class logarithmic
! !

!Barchart class methodsFor: 'instance creation'!

currentAspects
	"<Array of: Symbol>
	selectors of Datapoints to be shown"
	
	^#()
!

for: aCountry on: aDataseries aspects: someSymbols
	| inst |
	inst := self new.
	inst initializeCountry: aCountry series: aDataseries aspects: someSymbols.
	^inst
! !

!Barchart class methodsFor: 'settings'!

logarithmic
	"<Boolean>
	the global default for the scale of the case chart.
	This allows to keep the scale type when clicking throu countries"
	
	^self name asString, '.', #logarithmic asString settingValueIfAbsent: true
!

logarithmic: aBoolean
	self name asString, '.', #logarithmic asString settingValue: aBoolean
! !

Barchart subclass: #Casechart
	slots: {#logarithmic}
	package: 'Covid19view'!
!Casechart commentStamp!
A chart for case data

Case data only grow, therefore, a logarithmic scale is most appropriate!

!Casechart methodsFor: 'actions'!

toggleConfirmed
	self class showConfirmed: self class showConfirmed not.
	self recreate
!

toggleDeaths
	self class showDeaths: self class showDeaths not.
	self recreate
!

toggleRecovered
	self class showRecovered: self class showRecovered not.
	self recreate
! !

!Casechart methodsFor: 'html'!

html
	^{	Silk DIV: {
			'class' -> 'ChartHeader'.
			Silk SPAN: {
				'class' -> 'ChartButtons'.
				self legendButtonConfirmed.
				self legendButtonRecovered.
				self legendButtonDeaths}.
			(Silk BUTTON: {
				'class' -> 'ScalingButton'.
				'type' -> 'button'.
				(self stringLogarithmic: self class logarithmic not)}) on: #click bind: [self toggleValuescale]}.
		self svg}
!

legendButtonConfirmed
	"<Silk BUTTON>"
	
	| selectedString button |
	selectedString := ''.
	(self aspects includes: #confirmed) ifTrue: [selectedString := ' selected'].
	button := Silk BUTTON: {
		'class' -> ('LegendButton', selectedString).
		'type' -> 'button'. 
		self legendClass: 'confirmed' label: 'confirmed' value: self series lastConfirmed}.
	button on: #click bind: [self toggleConfirmed].
	^button
!

legendButtonDeaths
	"<Silk BUTTON>"
	
	| selectedString button |
	selectedString := ''.
	(self aspects includes: #deaths) ifTrue: [selectedString := ' selected'].
	button := Silk BUTTON: {
		'class' -> ('LegendButton', selectedString).
		'type' -> 'button'. 
		self legendClass: 'deaths' label: 'deaths' value: self series lastDeaths}.
	button on: #click bind: [self toggleDeaths].
	^button
!

legendButtonRecovered
	"<Silk BUTTON>"
	
	| selectedString button |
	selectedString := ''.
	(self aspects includes: #recovered) ifTrue: [selectedString := ' selected'].
	button := Silk BUTTON: {
		'class' -> ('LegendButton', selectedString).
		'type' -> 'button'. 
		self legendClass: 'recovered' label: 'recovered' value: self series lastRecovered}.
	button on: #click bind: [self toggleRecovered].
	^button
! !

!Casechart class methodsFor: 'accessing'!

currentAspects
	| aspects |
	aspects := OrderedCollection new.
	self showConfirmed ifTrue: [aspects add: #confirmed].
	self showRecovered ifTrue: [aspects add: #recovered].
	self showDeaths ifTrue: [aspects add: #deaths].
	^aspects
! !

!Casechart class methodsFor: 'settings'!

showConfirmed
	"<Boolean>"

	^self name asString, '.', #showConfirmed asString settingValueIfAbsent: false
!

showConfirmed: aBoolean
	self name asString, '.', #showConfirmed asString settingValue: aBoolean
!

showDeaths
	"<Boolean>"
	
	^self name asString, '.', #showDeaths asString settingValueIfAbsent: false
!

showDeaths: aBoolean
	self name asString, '.', #showDeaths asString settingValue: aBoolean
!

showRecovered
	"<Boolean>"
	
	^self name asString, '.', #showRecovered asString settingValueIfAbsent: false
!

showRecovered: aBoolean
	self name asString, '.', #showRecovered asString settingValue: aBoolean
! !

Barchart subclass: #Changechart
	slots: {}
	package: 'Covid19view'!
!Changechart commentStamp!
A chart for changes

changes go up and down and should, therefore, be shown with a linear scale!

!Changechart methodsFor: 'actions'!

toggleRelative
	| chart |
	self class showRelative: self class showRelative not.
	self recreate
! !

!Changechart methodsFor: 'html'!

html
	^{	Silk DIV: {
			'class' -> 'ChartHeader'.
			'Change from the day before'.
			"self legendButtonRelative".
			(Silk BUTTON: {
				'class' -> 'ScalingButton'.
				'type' -> 'button'.
				(self stringLogarithmic: self class logarithmic not)}) on: #click bind: [self toggleValuescale]}.
		self svg}
!

legendButtonRelative
	"<Silk BUTTON>"
	
	| button |
	button := Silk BUTTON: {
		'class' -> 'LegendButton'.
		'type' -> 'button'. 
		'Relative'}.
	button on: #click bind: [self toggleRelative].
	^button
! !

!Changechart class methodsFor: 'settings'!

currentAspects
	^Casechart currentAspects
!

showRelative
	"<Boolean>"
	
	^self name asString, '.', #showRelative asString settingValueIfAbsent: false
!

showRelative: aBoolean
	self name asString, '.', #showRelative asString settingValue: aBoolean
! !

Object subclass: #CoViD19
	slots: {#model}
	package: 'Covid19view'!

!CoViD19 methodsFor: 'actions'!

showCountries
	| list |
	list := '#CountryList' asSilk.
	list resetContents.
	list << (self model countries collect: #asListItem).
	self model countries first selectWorld
!

updateCountries
	self showCountries.
	self updateFooter
! !

!CoViD19 methodsFor: 'error handling'!

handleError: anExeption
	(ErrorHandler current respondsTo: #debugError:) ifTrue: [
		^ErrorHandler current debugError: anExeption].
	ErrorHandler handleError: anExeption
! !

!CoViD19 methodsFor: 'html'!

augmentPage
	Silk new 
		reset;
		DIV: {'id' -> 'Contents'. self pageContent}.
	self model getData then: [
		self updateCountries.
		self model getUSData then: [self updateCountries].
		self model getGermanData then: [self updateCountries]]
	catch: [:ex | self handleError: ex]
!

footer
	^Silk FOOTER: {
		Silk SPAN: {self softwareVersionInfo}.
		Silk SPAN: {'id' -> 'ServerVersion'. self serverVersionInfo}}
!

header
	^Silk HEADER: {
		Silk H1: {
			Silk DIV: 'CoViD-19 Charts'. 
			Silk DIV: {'class' -> 'Subtitle'. 'Do not trust the numbers!!'}}.
		Silk SPAN: 'id' -> 'Versions'}
!

model
	"the model with all data"
	
	^model ifNil: [model := CoViD19Application current]
!

pageContent
	^{	self header.
		Silk DIV: {
			'id' -> 'CountryList'.
			Silk DIV: {
				'Loading data... the World, US, Germany... hold on...'.
				'(can your browser make it?)'}}.
		Silk DIV: 'id' -> 'Graphics'.
		self footer}
!

serverNameAnchor
	^Silk SPAN: self model serverName, ' ', self model serverVersion
!

serverVersionInfo
	^{	Silk SPAN: {'class' -> 'VersionLabel'. 'Data collector:'}.
		Silk SPAN: {'class' -> 'VersionName'. self serverNameAnchor}.
		Silk SPAN: {'class' -> 'VersionDate'. self model serverModificationDate asLocaleString}}
!

softwareNameAnchor
	^Silk A: {
		'href' -> 'https://github.com/ChristianHaider/CoViD19UI'.
		'target' -> '_blank'.
		'rel' -> 'noopener'.
		'CoViD-19 Charts'}
!

softwareVersionInfo
	^{	Silk SPAN: {'class' -> 'VersionLabel'. 'Browser app:'}.
		Silk SPAN: {'class' -> 'VersionName'. self softwareNameAnchor}.
		Silk SPAN: {'class' -> 'VersionDate'. self model programModificationDate asLocaleString}}
!

updateFooter
	| element |
	element := '#ServerVersion' asSilk.
	element resetContents.
	element << self serverVersionInfo
! !

!CoViD19 methodsFor: 'initialize / release'!

resetContents
	| contents |
	contents := '#Contents' asSilk.
	contents resetContents.
	contents << self pageContent.
	self showCountries
! !

CoViD19 class slots: {#current}!

!CoViD19 class methodsFor: 'starting'!

start
	  self new augmentPage
! !

Silk subclass: #SVG
	slots: {}
	package: 'Covid19view'!

!SVG class methodsFor: 'accessing'!

namespace
	^'http://www.w3.org/2000/svg'
! !

Object subclass: #Scale
	slots: {#from. #to}
	package: 'Covid19view'!

!Scale methodsFor: 'accessing'!

at: aDomainValue
	"<Number[0..1]>
	Fraction of the range"
	
	^aDomainValue - self from / self range
!

from
	"<Number>
	the lowest domain value of the scale"
	
	^from
!

range
	"<Number>
	the 'width' or 'height' of the scale"
	
	^self to - self from
!

to
	"<Number>
	the highest domain value of the scale"
	
	^to
! !

!Scale methodsFor: 'initialization'!

goodTopFor: aMaxValue
	"<Number>
	a good top value for the chart is the next tick above the maximal value"
	
	^aMaxValue
!

initializeFrom: aStart to: anEnd
	from := aStart.
	to := self goodTopFor: anEnd
! !

!Scale class methodsFor: 'instance creation'!

from: aStart to: anEnd
	| inst |
	inst := self new.
	inst initializeFrom: aStart to: anEnd.
	^inst
! !

Scale subclass: #Datescale
	slots: {}
	package: 'Covid19view'!

!Datescale methodsFor: 'accessing'!

days
	"<Integer>"
	
	^(self range / Date new millisecondsInDay) rounded
! !

Scale subclass: #Valuescale
	slots: {#logarithmic}
	package: 'Covid19view'!

!Valuescale methodsFor: 'accessing'!

ticks
	"<Array with: (Array of: Number) with: (Array of: Number)>
	major ticks and minor ticks"
	
	^self subclassResponsibility
! !

Valuescale subclass: #LinearValuescale
	slots: {}
	package: 'Covid19view'!

!LinearValuescale methodsFor: 'accessing'!

goodTopFor: aMaxValue
	| f normed |
	f := 10 raisedTo: aMaxValue exponent.
	normed := aMaxValue / f.
	normed >= 3 ifTrue: [
		^normed ceiling * f].
	normed >= 2 ifTrue: [
		^(normed * 2) ceiling * 0.5 * f].
	normed >= 1 ifTrue: [
		^(normed * 5) ceiling * 0.2 * f].
	self halt
!

normTicks
	"<Array[2] of: (Array of: Number)>"
	
	| dict normed |
	dict := Dictionary new
		at: 10 put: [#(#(2 4 6 8 10) #(1 3 5 7 9))];
		at: 9 put: [#(#(2 4 6 8) #(1 3 5 7 9))];
		at: 8 put: [#(#(2 4 6 8) #(1 3 5 7))];
		at: 7 put: [#(#(2 4 6) #(1 3 5 7))];
		at: 6 put: [#(#(2 4 6) #(1 3 5))];
		at: 5 put: [#(#(2 4) #(1 3 5))];
		at: 4 put: [:n | {{1. 2. 3. 4}. 0 to: n by: 0.5}];
		at: 3 put: [:n | {{1. 2. 3}. 0 to: n by: 0.5}];
		at: 2 put: [:n | {{1. 2}. 0 to: n by: 0.2}];
		at: 1 put: [:n | {{1}. 0 to: n by: 0.2}];
		yourself.
	normed := self to / self tickFactor.
	^(dict at: normed ceiling) cull: normed
!

tickFactor
	"<Number>
	decimal factor to divide the max value so that the result is below 10.
	Examples: 
		47 tickFactor => 10
		3577 tickFactor => 1000
		5 tickFactor => 1 "
	
	^10 raisedTo: self to exponent
!

ticks
	| f |
	f := self tickFactor.
	^self normTicks collect: [:ticks |
		ticks collect: [:n | n * f]]
! !

Valuescale subclass: #LogarithmicValuescale
	slots: {}
	package: 'Covid19view'!

!LogarithmicValuescale methodsFor: 'accessing'!

at: aDomainValue
	^(aDomainValue ln max: 0) / self range ln
!

goodTopFor: aMaxValue
	^10 raisedTo: aMaxValue exponent + 1
!

ticks
	| exponent majors minors topFactor |
	exponent := self to exponent.
	majors := (0 to: exponent + 1) collect: [:exp | 10 raisedTo: exp].
	minors := OrderedCollection new.
	topFactor := (self to / (10 raisedTo: exponent)) floor.
	minors addAll: ((3 to: topFactor by: 2) collect: [:i | (10 raisedTo: exponent) * i]).
	0 to: exponent - 1 do: [:exp | 
		minors addAll: (#(3 5 7 9) collect: [:i | (10 raisedTo: exp) * i])].
	^{majors. minors}
! !

Object subclass: #Series
	slots: {#series}
	package: 'Covid19view'!

!Series methodsFor: 'accessing'!

lastConfirmed
	"<Integer>"
	
	^self series lastConfirmed
!

lastDeaths
	"<Integer>"
	
	^self series lastDeaths
!

lastRecovered
	"<Integer>"
	
	^self series lastRecovered
!

series
	"<Dataseries>"
	
	^series
! !

!Series methodsFor: 'comparing'!

< aSeries
	^self lastConfirmed < aSeries lastConfirmed
!

<= aSeries
	^self lastConfirmed <= aSeries lastConfirmed
!

> aSeries
	^self lastConfirmed > aSeries lastConfirmed
!

>= aSeries
	^self lastConfirmed >= aSeries lastConfirmed
! !

!Series methodsFor: 'initialization'!

initializeSeries: aDataseries
	series := aDataseries
! !

!Series methodsFor: 'printing'!

printOn: stream
	stream
		nextPutAll: self class name asString;
		nextPut: $(;
		nextPutAll: self lastConfirmed printString;
		nextPut: $)
! !

!Series class methodsFor: 'instance creation'!

fromJson: aJson
	^self subclassResponibility
!

series: aDataseries
	| inst |
	inst := self new.
	inst initializeSeries: aDataseries.
	^inst
! !

Series subclass: #JHUSeries
	slots: {#country. #state}
	package: 'Covid19view'!

!JHUSeries methodsFor: 'accessing'!

country
	"<String>"
	
	^country
!

state
	"<String>"
	
	^state
! !

!JHUSeries methodsFor: 'initialization'!

initializeCountry: aCountryString state: aStateString series: aDataseries
	self initializeSeries: aDataseries.
	country := aCountryString.
	state := aStateString
! !

!JHUSeries methodsFor: 'printing'!

printOn: stream
	stream
		nextPutAll: self country;
		nextPut: $ ;
		nextPutAll: self state;
		nextPut: $(;
		nextPutAll: self lastConfirmed printString;
		nextPut: $)
! !

!JHUSeries class methodsFor: 'instance creation'!

country: aCountryString state: aStateString series: aDataseries
	| inst |
	inst := self new.
	inst 
		initializeCountry: aCountryString 
		state: aStateString 
		series: aDataseries.
	^inst
!

fromJson: aJson
	^self 
		country: aJson country 
		state: aJson state 
		series: (Dataseries series: (aJson series collect: [:json | JHUDatapoint fromJson: json]))
! !

Series subclass: #JHUUSSeries
	slots: {#uid. #state. #county. #population}
	package: 'Covid19view'!

!JHUUSSeries methodsFor: 'accessing'!

county
	"<String>"
	
	^county
!

population
	"<Integer>"
	
	^population
!

state
	"<String>"
	
	^state
!

uid
	"<String>"
	
	^uid
! !

!JHUUSSeries methodsFor: 'initialization'!

initializeUid: aUidString state: aStateString county: aCountyString population: aPopulationInteger series: aDataseries
	self initializeSeries: aDataseries.
	uid := aUidString.
	state := aStateString.
	county := aCountyString.
	population := aPopulationInteger
! !

!JHUUSSeries methodsFor: 'printing'!

printOn: stream
	stream
		nextPutAll: self state;
		nextPut: $ ;
		nextPutAll: self county;
		nextPut: $(;
		nextPutAll: self lastConfirmed printString;
		nextPut: $)
! !

!JHUUSSeries class methodsFor: 'instance creation'!

fromJson: aJson
	^self 
		uid: aJson uid
		state: aJson state 
		county: aJson county 
		population: aJson population
		series: (Dataseries series: (aJson series collect: [:json | ConfirmedAndDeathsDatapoint fromJson: json]))
!

uid: aUidString state: aStateString county: aCountyString population: aPopulationInteger series: aDataseries
	| inst |
	inst := self new.
	inst 
		initializeUid: aUidString 
		state: aStateString 
		county: aCountyString 
		population: aPopulationInteger 
		series: aDataseries.
	^inst
! !

Series subclass: #RKISeries
	slots: {#idBundesland. #bundesland. #idLandkreis. #landkreis}
	package: 'Covid19view'!

!RKISeries methodsFor: 'accessing'!

bundesland
	"<String>"
	
	^bundesland
!

idBundesland
	"<Integer>"
	
	^idBundesland
!

idLandkreis
	"<String>"
	
	^idLandkreis
!

landkreis
	"<String>"
	
	^landkreis
! !

!RKISeries methodsFor: 'initialization'!

initializeIdBundesland: anIdBundeslandInteger bundesland: aBundeslandString idLandkreis: anIdLandkreisString landkreis: aLandkreisString series: aDataseries
	self initializeSeries: aDataseries.
	idBundesland := anIdBundeslandInteger.
	bundesland := aBundeslandString.
	idLandkreis := anIdLandkreisString.
	landkreis := aLandkreisString
! !

!RKISeries methodsFor: 'printing'!

printOn: stream
	stream
		nextPutAll: self bundesland;
		nextPut: $ ;
		nextPutAll: self landkreis;
		nextPut: $(;
		nextPutAll: self lastConfirmed printString;
		nextPut: $)
! !

!RKISeries class methodsFor: 'instance creation'!

fromJson: aJson
	^self 
		idBundesland: aJson idBundesland
		bundesland: aJson bundesland
		idLandkreis: aJson idLandkreis
		landkreis: aJson landkreis
		series: (Dataseries series: (aJson series collect: [:json | RKIDatapoint fromJson: json]))
!

idBundesland: anIdBundeslandInteger bundesland: aBundeslandString idLandkreis: anIdLandkreisString landkreis: aLandkreisString series: aDataseries
	| inst |
	inst := self new.
	inst 
		initializeIdBundesland: anIdBundeslandInteger 
		bundesland: aBundeslandString 
		idLandkreis: anIdLandkreisString 
		landkreis: aLandkreisString 
		series: aDataseries.
	^inst
! !

!Array methodsFor: '*Covid19view'!

groupedBy: aValuable
	| dict |
	dict := Dictionary new.
	self do: [:item | 
		(dict at: (aValuable value: item) ifAbsentPut: [OrderedCollection new]) add: item].
	^dict
! !

!BlockClosure methodsFor: '*Covid19view'!

cull: anObject
	^self cullWithArguments: {anObject}
!

cull: anObject cull: anotherObject
	^self cullWithArguments: {anObject. anotherObject}
!

cull: anObject cull: anotherObject cull: andAnotherObject
	^self cullWithArguments: {anObject. anotherObject. andAnotherObject}
!

cullWithArguments: aCollection
	^self valueWithPossibleArguments: aCollection
! !

!Date methodsFor: '*Covid19view'!

asLocaleDateString
	<inlineJS: 'return self.toLocaleDateString()'>
!

dayBefore
	^self class fromMilliseconds: self asMilliseconds - self millisecondsInDay
!

max: aDate
	aDate > self ifTrue: [
		^aDate].
	^self
!

millisecondsInDay
	^1000 * 60 * 60 * 24
!

nextDay
	^self class fromMilliseconds: self asMilliseconds + self millisecondsInDay
! !

!Date class methodsFor: '*Covid19view'!

d: dayInteger m: monthInteger y: yearInteger
	<inlineJS: 'return new Date(yearInteger, monthInteger - 1, dayInteger)'>
!

d: dayInteger m: monthInteger y: yearInteger h: hourInteger m: minutesInteger s: secondsInteger
	<inlineJS: 'return new Date(yearInteger, monthInteger - 1, dayInteger, hourInteger, minutesInteger, secondsInteger)'>
! !

!Number methodsFor: '*Covid19view'!

exp
	<inlineJS: 'return Math.exp(self);'>
!

exponent
	"<Integer>
	the power of 10 below the receiver"
	
	^self log floor
!

separatedThousandsString
	"<String>
	String with thousands separator every third insertin point"
	
	<inlineJS: 'return self.toLocaleString()'>
! !

