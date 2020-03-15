Smalltalk createPackage: 'Covid19view'!
(Smalltalk packageAt: 'Covid19view' ifAbsent: [ self error: 'Package not created: Covid19view' ]) imports: {'d3' -> 'd3'. 'amber/web/Web'. 'amber/web/Web-JQuery'. 'silk/Silk'}!
Object subclass: #Barchart
	slots: {#series. #valuescale. #datescale}
	package: 'Covid19view'!

!Barchart methodsFor: 'accessing'!

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
	
	^0
!

chartWidth
	"<Number>"
	
	^self chartRight - self chartLeft
!

datapoints
	"<Array of: Datapoint>"
	
	^self series series
!

datescale
	"<Datescale>"
	
	^datescale ifNil: [
		datescale := Datescale from: self firstDate to: self lastDate]
!

datescaleHeight
	"<Number>"
	
	^100 - self chartHeight
!

firstDate
	^self series firstDate
!

lastDate
	^self series lastDate
!

maxValue
	"<Integer>"
	
	^self datapoints inject: 0 into: [:max :datapoint | max max: datapoint confirmed]
!

monthnameAt: aDate
	"<String>"
	
	^#('January' 'February' 'March' 'April' 'May' 'June' 'July' 'August' 'September' 'October' 'November' 'December') at: aDate month
!

numberOfValues
	"<Integer>"
	
	^self series size
!

numberStringFor: asInteger
	"<String>"
	
	| rst wst |
	rst := asInteger printString reversed readStream.
	wst := String new writeStream.
	[rst atEnd] whileFalse: [
		wst nextPutAll: (rst next: 3).
		rst atEnd ifFalse: [wst nextPut: $.]].
	^wst contents reversed
!

series
	"<Dataseries>"
	
	^series
!

svgNamespace
	^'http://www.w3.org/2000/svg'
!

valuescale
	"<Valuescale>"
	
	^valuescale ifNil: [
		valuescale := Valuescale from: 0 to: self maxValue]
!

valuescaleWidth
	"<Number>"
	
	^200 - self chartWidth
!

xAt: aDate
	"<Number>
	y value in the svg coordinate system"
	
	^self chartLeft + ((self datescale at: aDate) * self chartWidth)
!

yAt: aDomainValue
	"<Number>
	y value in the svg coordinate system"
	
	^self chartBottom - ((self valuescale at: aDomainValue) * self chartHeight)
! !

!Barchart methodsFor: 'html'!

chartAreaIn: aSVG
	"add the chart area"
	
	| chartArea barWidth |
	chartArea := aSVG G: 'class' -> 'ChartArea'.
	chartArea RECT: {
		'x' -> self chartLeft. 'y' -> self chartTop. 
		'width' -> self chartWidth. 'height' -> self chartHeight}.
	barWidth := self chartWidth / self datapoints size.
	self datapoints do: [:datapoint |
		| barLeft barTopConfirmed barHeightConfirmed barTopRecovered barHeightRecovered barTopDeaths barHeightDeaths |
		barLeft := (self xAt: datapoint date) - barWidth.
		barTopConfirmed := self yAt: datapoint confirmed.
		barHeightConfirmed := self chartBottom - barTopConfirmed.
		chartArea RECT: {
			'class' -> 'BarConfirmed'.
			'x' -> barLeft. 'y' -> barTopConfirmed. 
			'width' -> barWidth. 'height' -> barHeightConfirmed}.
		barTopRecovered := self yAt: datapoint decided.
		barHeightRecovered := self chartBottom - barTopRecovered.
		chartArea RECT: {
			'class' -> 'BarRecovered'.
			'x' -> barLeft. 'y' -> barTopRecovered. 
			'width' -> barWidth. 'height' -> barHeightRecovered}.
		barTopDeaths := self yAt: datapoint deaths.
		barHeightDeaths := self chartBottom - barTopDeaths.
		chartArea RECT: {
			'class' -> 'BarDeaths'.
			'x' -> barLeft. 'y' -> barTopDeaths. 
			'width' -> barWidth. 'height' -> barHeightDeaths}.
	].
	^chartArea
!

dateAxisIn: aSVG
	| dateAxis x |
	dateAxis := aSVG G: 'class' -> 'DateAxis'.
	self series firstDateOfWeeks allButFirst do: [:date |
		x := self xAt: date.
		dateAxis LINE: {
			'class' -> 'Weekline'.
			'x1' -> x. 'y1' -> self chartBottom.
			'x2' -> x. 'y2' -> self chartTop}].
	self series firstDateOfMonths allButFirst do: [:date |
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

svg
	"<svg>"
	
	| svg valueAxis dateAxis |
	svg := Silk newElement: 'svg' xmlns: self svgNamespace.
	svg << ('viewBox' -> '0 0 200 100').
	svg RECT: {'x' -> 0. 'y' -> 0. 'width' -> '100%'. 'height' -> '100%'. 'fill' -> '#eee'}.
	self valueAxisIn: svg.
	self dateAxisIn: svg.
	self chartAreaIn: svg.
	^svg
!

valueAxisIn: aSVG
	| valueAxis |
	valueAxis := aSVG G: 'class' -> 'ValueAxis'.
	valueAxis RECT: {
		'x' -> self chartRight. 'y' -> self chartTop. 
		'width' -> self valuescaleWidth. 'height' -> self chartHeight}.
	valueAxis TEXT: {
		'class' -> 'ValueText'.
		'text-anchor' -> 'end'.
		'x' -> (self chartRight + self valuescaleWidth - 2). 'y' -> (self chartTop + 6).
		self numberStringFor: self series lastConfirmed}.
	^valueAxis
! !

!Barchart methodsFor: 'initialization'!

initializeSeries: aDataseries
	series := aDataseries
! !

!Barchart class methodsFor: 'instance creation'!

on: aDataseries
	| inst |
	inst := self new.
	inst initializeSeries: aDataseries.
	^inst
! !

Object subclass: #CoViD19
	slots: {#countries}
	package: 'Covid19view'!

!CoViD19 methodsFor: 'accessing'!

countries
	^countries ifNil: [self getData]
! !

!CoViD19 methodsFor: 'action'!

getData
	self withSeriesDo: [:someSeries | 
		countries := Country allFromSeries: someSeries.
		self showCountries]
!

openHelios
	<inlineJS: 'require(''amber/helpers'').popupHelios()'>
!

showCountries
	| list |
	list := '#CountryList' asSilk.
	list resetContents.
	list << (self countries collect: #asListItem)
!

showD3
	| circle |
	circle := d3 selectAll: 'circle'.
	Smalltalk optOut: circle.
	circle style: 'fill' set: 'steelblue'.
	circle attr: 'r' set: 20
!

withSeriesDo: aOneArgumentBlock
	(Platform fetch: 'CoViD-19.json')
		then: [:response |
			response json
				then: [:json | aOneArgumentBlock value: (json collect: [:data | Series fromJson: data])]
				catch: [:ex |
					(ErrorHandler current respondsTo: #debugError:) 
						ifTrue: [ErrorHandler current debugError: ex] 
						ifFalse:[ErrorHandler handleError: ex]]]
		catch: [:ex | 
			(ErrorHandler current respondsTo: #debugError:) 
				ifTrue: [ErrorHandler current debugError: ex] 
				ifFalse:[ErrorHandler handleError: ex]]
! !

!CoViD19 methodsFor: 'backend'!

endpoint
	^'https://github.com/CSSEGISandData/COVID-19/raw/master/csse_covid_19_data/csse_covid_19_time_series/'
! !

!CoViD19 methodsFor: 'contents'!

addContentsTo: aDiv
	| buttons list |
	aDiv HEADER: {
		(Silk H1: 'CoViD-19 data analysis').
		(Silk DIV: (Silk A: {
			'href' -> 'https://github.com/CSSEGISandData/COVID-19'.
			'target' -> '_blank'.
			'rel' -> 'noopener'.
			'Data on GitHub'})).
	(Silk DIV: {'id' -> 'Buttons'.
		((Silk BUTTON: 'reset') on: #click bind: [self resetContents]).
		((Silk BUTTON: 'get data') on: #click bind: [self getData]).
		((Silk BUTTON: 'Helios') on: #click bind: [self openHelios])
	}).
	}.
	aDiv UL: 'id' -> 'CountryList'.
	aDiv DIV: 'id' -> 'Graphics'.
	aDiv FOOTER: 'Done in Amber Smalltalk by Christian Haider'
!

newSvg
	| svg rect |
	svg := Silk newElement: 'svg' xmlns: self svgNamespace.
	svg << {
		'width' -> '200px'. 'height' -> '100px'.  
		'viewBox' -> '0 0 200 100'}.
	svg RECT: {'x' -> 0. 'y' -> 0. 'width' -> '100%'. 'height' -> '100%'. 'fill' -> '#ccc'}.
	svg CIRCLE: {'cx' -> 60. 'cy' -> 25. 'r' -> 10}.
	svg CIRCLE: {'cx' -> 100. 'cy' -> 25. 'r' -> 10}.
	svg CIRCLE: {'cx' -> 140. 'cy' -> 25. 'r' -> 10}.
	^svg
! !

!CoViD19 methodsFor: 'starting'!

augmentPage
	Silk new 
		reset;
		DIV: self newContents
!

newContents
	"<DIV>"
	
	| contents |
	contents := Silk DIV: {'id' -> 'Contents'}.
	self addContentsTo: contents.
	^contents
!

resetContents
	| contents |
	contents := '#Contents' asSilk.
	contents resetContents.
	self addContentsTo: contents.
	self showCountries
! !

!CoViD19 class methodsFor: 'starting'!

start
  self new augmentPage
! !

Object subclass: #Datapoint
	slots: {#date. #confirmed. #deaths. #recovered}
	package: 'Covid19view'!

!Datapoint methodsFor: 'accessing'!

+ aDatapoint
	"<Datapoint>"
	
	self date = aDatapoint date ifFalse: [
		self error: 'the dates are not the same'].
	^self class 
		date: self date 
		confirmed: self confirmed + aDatapoint confirmed 
		deaths: self deaths + aDatapoint deaths 
		recovered: self recovered + aDatapoint recovered
!

confirmed
	"<Integer>"

	^confirmed
!

date
	"<Date>"
	
	^date
!

deaths
	"<Integer>"
	
	^deaths
!

decided
	"<Integer>"
	
	^self recovered + self deaths
!

recovered
	"<Integer>"
	
	^recovered
! !

!Datapoint methodsFor: 'html'!

asSpans
	"<Array of: <span>"
	
	^{Silk SPAN: {'class' -> 'Confirmed'. self confirmed}. 
	Silk SPAN: {'class' -> 'Deaths'. self deaths}. 
	Silk SPAN: {'class' -> 'Recovered'. self recovered}}
! !

!Datapoint methodsFor: 'initialization'!

initializeDate: aDate confirmed: aConfirmedInteger deaths: aDeathsInteger recovered: aRecoveredInteger
	date := aDate.
	confirmed := aConfirmedInteger.
	deaths := aDeathsInteger.
	recovered := aRecoveredInteger
! !

!Datapoint class methodsFor: 'instance creation'!

date: aDate confirmed: aConfirmedInteger deaths: aDeathsInteger recovered: aRecoveredInteger
	| inst |
	inst := self new.
	inst initializeDate: aDate confirmed: aConfirmedInteger deaths: aDeathsInteger recovered: aRecoveredInteger.
	^inst
!

dateFromJson: aJson
	| days year mst month |
	days := aJson day.
	year := aJson year.
	mst := #(31 29 31 30 31 30 31 31 30 31 30 31) readStream.
	month  := 0.
	[(days - mst peek) negative] whileFalse: [
		month := month + 1.
		days := days - mst next].
	^self dateYear: year month: month day: days
!

dateYear: aYearInteger month: aMonthInteger day: aDayInteger
	<inlineJS: 'return new Date(aYearInteger, aMonthInteger, aDayInteger)'>
!

fromJson: aJson
	^self 
		date: (self dateFromJson: aJson date)
		confirmed: aJson confirmed 
		deaths: aJson deaths 
		recovered: aJson recovered
! !

Object subclass: #Dataseries
	slots: {#series}
	package: 'Covid19view'!

!Dataseries methodsFor: 'accessing'!

firstDate
	"<Date>"
	
	^self series first date
!

firstDateOfMonths
	"<Array of: Date>"
	
	^self series inject: OrderedCollection new into: [:list :datapoint |
		list isEmpty
			ifTrue: [list add: datapoint date]
			ifFalse: [list last month = datapoint date month ifFalse: [
				list add: datapoint date]].
		list].
!

firstDateOfWeeks
	"<Array of: Date>"
	
	^self series inject: OrderedCollection new into: [:list :datapoint |
		list isEmpty
			ifTrue: [list add: datapoint date]
			ifFalse: [list last dayOfWeek > datapoint date dayOfWeek ifFalse: [
				list add: datapoint date]].
		list].
!

last
	"<Datapoint>"
	
	^self series last
!

lastConfirmed
	"<Integer>"
	
	^self series last confirmed
!

lastDate
	"<Date>"
	
	^self series last date
!

lastDeaths
	"<Integer>"
	
	^self series last deaths
!

lastRecovered
	"<Integer>"
	
	^self series last recovered
!

series
	"<Array of: Datapoints>"
	
	^series
! !

!Dataseries methodsFor: 'arithmetic'!

+ aDataseries
	"<Dataseries>"
	
	| newDatapoints |
	newDatapoints := OrderedCollection new.
	self series with: aDataseries series do: [:myDatapoint :otherDatapoint |
		newDatapoints add: myDatapoint + otherDatapoint].
	^self class series: newDatapoints
! !

!Dataseries methodsFor: 'initialization'!

initializeSeries: someDatapoints
	series := someDatapoints
! !

!Dataseries class methodsFor: 'instance creation'!

fromJson: someJson
	^self series: (someJson collect: [:json |
			Datapoint fromJson: json])
!

series: someDatapoints
	| inst |
	inst := self new.
	inst initializeSeries: someDatapoints.
	^inst
! !

Object subclass: #GeographicArea
	slots: {#name. #series}
	package: 'Covid19view'!

!GeographicArea methodsFor: 'accessing'!

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

name
	"<String>"
	
	^name
!

series
	"<Dataseries>"
	
	^series
! !

!GeographicArea methodsFor: 'html'!

asListItem
	"<LI>
	a <li> representing the receiver"
	
	^Silk LI: {
		Silk SPAN: 'class' -> 'treeSpan'.
		self asListItemSpan}
!

asListItemSpan
	"<span>
	the body of the list item"
	
	| span |
	span := Silk SPAN: {
		'class' -> 'ListItem'. 
		self name. 
		self series last asSpans}.
	span on: #click bind: [:event |
		('#CountryList' asSilk allAt: '.ListItemSelected') do: [:selected |
			selected attrAt: 'class' put: 'ListItem'].
		span attrAt: 'class' put: 'ListItemSelected'. 
		self showInfo].
	^span
!

showInfo
	"add nice info graphics"
	
	| graphics |
	graphics := '#Graphics' asSilk.
	graphics resetContents.
	graphics H2: self name.
	graphics << self svgBarchart
!

svgBarchart
	"<svg>"
	
	^(Barchart on: self series) svg
! !

!GeographicArea methodsFor: 'initialization'!

initializeName: aString series: aDataseries
	name := aString.
	series := aDataseries
! !

!GeographicArea class methodsFor: 'instance creation'!

allFromSeries: someSeries
	"<Array of: GeographicArea>"
	
	^self subclassResponsability
!

name: aString series: aDataseries
	| inst |
	inst := self new.
	inst initializeName: aString series: aDataseries.
	^inst
! !

GeographicArea subclass: #Country
	slots: {#parts}
	package: 'Covid19view'!

!Country methodsFor: 'accessing'!

parts
	"<Collection of: State>"
	
	^parts ifNil: [parts := OrderedCollection new]
!

series
	"<Dataseries>"
	
	^series ifNil: [series := self seriesFromParts]
!

seriesFromParts
	"<Dataseries>"
	
	| firstSeries |
	firstSeries := self parts first series.
	self parts size = 1 ifTrue: [
		^firstSeries].
	^self parts allButFirst inject: firstSeries into: [:sum :partSeries | sum + partSeries series]
! !

!Country methodsFor: 'html'!

asListItem
	| li plusButton minusButton button |
	self parts ifEmpty: [
		li := super asListItem.
		li << ('class' -> 'CountryName').
		^li].
	li := Silk LI: 'class' -> 'CountryName'.
	plusButton := Silk BUTTON: {'class' -> 'treeButton'. '+'}.
	minusButton := Silk BUTTON: {'class' -> 'treeButton'. '-'}.
	plusButton on: #click bind: [
		li resetContents.
		li << {minusButton. self asListItemSpan. self partsList}].
	minusButton on: #click bind: [
		li resetContents.
		li << {plusButton. self asListItemSpan}].
	li << {plusButton. self asListItemSpan}.
	^li
!

partsList
	"<ul> of: <li>"

	^Silk UL: (self parts collect: #asListItem)
! !

!Country methodsFor: 'initialization'!

initializeName: aString parts: someParts
	name := aString.
	parts := someParts
! !

!Country class methodsFor: 'instance creation'!

allFromSeries: someSeries
	"<Array of: Country>"
	
	| byCountry countryList sortblock |
	byCountry := Dictionary new.
	someSeries do: [:series |
		(byCountry at: series country ifAbsentPut: [OrderedCollection new]) add: series].
	countryList := OrderedCollection new.
	sortblock := [:a :b | a lastConfirmed > b lastConfirmed].
	byCountry keysAndValuesDo: [:countryName :listOfSeries |
		countryList add: (listOfSeries size = 1
			ifTrue: [self name: countryName series: listOfSeries first series]
			ifFalse: [self name: countryName parts: (State allFromSeries: (listOfSeries sorted: sortblock))])].
	^countryList sorted: sortblock
!

name: aString parts: someSeries
	| inst |
	inst := self new.
	inst initializeName: aString parts: someSeries.
	^inst
! !

GeographicArea subclass: #State
	slots: {}
	package: 'Covid19view'!

!State methodsFor: 'html'!

asListItem
	| li |
	li := super asListItem.
	li << ('class' -> 'StateName').
	^li
! !

!State class methodsFor: 'instance creation'!

allFromSeries: someSeries
	"<Array of: State>"
	
	^someSeries collect: [:rawSeries |
		self 
			name: rawSeries state
			series: rawSeries series]
! !

Object subclass: #Scale
	slots: {#from. #to}
	package: 'Covid19view'!

!Scale methodsFor: 'accessing'!

at: aDomainValue
	"<Number>
	fraction on the scale"
	
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

initializeFrom: aStart to: anEnd
	from := aStart.
	to := anEnd
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

Scale subclass: #Valuescale
	slots: {}
	package: 'Covid19view'!

Object subclass: #Series
	slots: {#country. #state. #latLong. #series}
	package: 'Covid19view'!

!Series methodsFor: 'accessing'!

country
	"<String>"
	
	^country
!

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

latLong
	"<Point>"
	
	^latLong
!

series
	"<Dataseries>"
	
	^series
!

state
	"<String>"
	
	^state
! !

!Series methodsFor: 'initialization'!

initializeCountry: aCountryString state: aStateString latLong: aLatLongPoint series: aDataseries
	country := aCountryString.
	state := aStateString.
	latLong := aLatLongPoint.
	series := aDataseries
! !

!Series methodsFor: 'printing'!

printOn: stream
	stream
		nextPutAll: self country;
		nextPut: $ ;
		nextPutAll: self state;
		nextPut: $(;
		nextPutAll: self lastConfirmed printString;
		nextPut: $)
! !

!Series class methodsFor: 'instance creation'!

country: aCountryString state: aStateString latLong: aLatLongPoint series: aDataseries
	| inst |
	inst := self new.
	inst 
		initializeCountry: aCountryString 
		state: aStateString 
		latLong: aLatLongPoint 
		series: aDataseries.
	^inst
!

fromJson: aJson
	^self 
		country: aJson country 
		state: aJson state 
		latLong: aJson latLong 
		series: (Dataseries fromJson: aJson series)
! !

!Date class methodsFor: '*Covid19view'!

d: dayInteger m: monthInteger y: yearInteger
	<inlineJS: 'return new Date(yearInteger, monthInteger - 1, dayInteger)'>
! !

!Silk methodsFor: '*Covid19view'!

doesNotUnderstand: aMessage
	"`aSilk DIV` creates a div element and inserts it.
	`aSilk DIV: anObject` creates a div element, inserts it
	and puts contents in it"
	(self class tryMakeDnuElement: aMessage in: self)
		ifNil: [ ^ super doesNotUnderstand: aMessage ]
		ifNotNil: [ :newElement | self << newElement. ^ newElement ]
!

namespace
	"<String>
	XML namespace for elements: html.
	The default for all virtual Silk tag messages"
	
	^self element namespaceURI
! !

!Silk class methodsFor: '*Covid19view'!

doesNotUnderstand: aMessage
	"`Silk DIV` creates a div element.
	`Silk DIV: anObject` creates a div element and puts contents in it"
	^ (self tryMakeDnuElement: aMessage in: self)
		ifNil: [ super doesNotUnderstand: aMessage ]
!

htmlNamespace
	"<String>
	XML namespace for HTML elements.
	The default for all virtual Silk tag messages"
	
	^'http://www.w3.org/1999/xhtml'
!

namespace
	"<String>
	XML namespace for elements: html.
	The default for all virtual Silk tag messages"
	
	^self htmlNamespace
!

newElement: aString in: aSilk
	"<Silk>
	creates a new element in the same xml namespace as aSilk.
	When aSilk is the class Silk, the default behavior applies (html namespace for new elements)"
	
	aSilk namespace = self htmlNamespace ifTrue: [
		^self newElement: aString].
	^self newElement: aString xmlns: aSilk namespace
!

tryMakeDnuElement: aMessage in: aSilk
	"`DIV` creates a div element.
	`DIV: anObject` creates a div element and puts contents in it.
	When aSilk is an instance and not the class Silk, 
	and the instance has an xml namespace other than the default #html,
	Then the namespace is used for the new element.
	You can do:
		svg := Silk newElement: 'svg' xmlns: 'http://www.w3.org/2000/svg'.
		svg CIRCLE: {'cx' -> 60. 'cy' -> 25. 'r' -> 10}.
	This creates a svg circle, not a html circle."
	
	| selector newElement useArg |
	selector := aMessage selector.
	selector asUppercase = selector
		ifFalse: [ ^ nil ].
	selector last = ':'
		ifTrue: [ useArg := true. selector := selector allButLast ]
		ifFalse: [ useArg := false ].
	(selector includes: ':')
		ifTrue: [ ^ nil ].
	newElement := self newElement: selector asLowercase in: aSilk.
	useArg ifTrue: [ newElement << aMessage arguments first ].
	^ newElement
! !

