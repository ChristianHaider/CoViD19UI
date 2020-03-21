Smalltalk createPackage: 'Covid19view'!
(Smalltalk packageAt: 'Covid19view' ifAbsent: [ self error: 'Package not created: Covid19view' ]) imports: {'silk/Silk'}!
Object subclass: #Barchart
	slots: {#series. #valuescale. #datescale}
	package: 'Covid19view'!

!Barchart methodsFor: 'accessing'!

datapoints
	"<Array of: Datapoint>"
	
	^self series series
!

datescale
	"<Datescale>"
	
	^datescale ifNil: [
		datescale := Datescale from: self firstDate to: self lastDate]
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

svgNamespace
	^'http://www.w3.org/2000/svg'
!

valuescale
	"<Valuescale>"
	
	^valuescale ifNil: [
		valuescale := Valuescale from: 0 to: self maxValue]
! !

!Barchart methodsFor: 'actions'!

setLinearScale
	self valuescale beLinear.
	console log: 'linear'
!

setLogarithmicScale
	self valuescale beLogarithmic.
	console log: 'logarithmic'
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
	
	^0
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
	chartArea := aSVG G: {
		'class' -> 'ChartArea'.
		SVG RECT: {
			'x' -> self chartLeft. 'y' -> self chartTop. 
			'width' -> self chartWidth. 'height' -> self chartHeight}}.
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

linButtonIn: aSVG
	| g |
	g := aSVG G: 'class' -> 'LinearButton'.
	g RECT: {
		'x' -> 170. 'y' -> 90. 
		'width' -> 15. 'height' -> 10}.
	g TEXT: {
		'class' -> 'ButtonText'.
		'x' -> 175. 'y' -> 97.
		'lin'}.
	g on: #click bind: [self setLinearScale]
!

linLogButtonsIn: aSVG
	self linButtonIn: aSVG.
	self logButtonIn: aSVG
!

logButtonIn: aSVG
	| g |
	g := aSVG G: 'class' -> 'LogarithmicButton'.
	g RECT: {
		'x' -> 185. 'y' -> 90. 
		'width' -> 15. 'height' -> 10}.
	g TEXT: {
		'class' -> 'ButtonText'.
		'x' -> 188. 'y' -> 97.
		'log'}.
	g on: #click bind: [self setLogarithmicScale]
!

svg
	"<svg>"
	
	| svg valueAxis dateAxis buttons lin log |
	svg := SVG SVG: {
		'viewBox' -> '0 0 200 100'.
		SVG RECT: {'x' -> 0. 'y' -> 0. 'width' -> '100%'. 'height' -> '100%'. 'fill' -> '#eee'}}.
	self valueAxisIn: svg.
	self dateAxisIn: svg.
	self chartAreaIn: svg.
	"self linLogButtonsIn: svg."
	^svg
!

valueAxisIn: aSVG
	| ticks majorTicks minorTicks valueAxis |
	ticks := self valuescale ticks.
	majorTicks := ticks first.
	minorTicks := ticks last.
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
		y > 10 ifTrue: [
			valueAxis TEXT: {
				'class' -> 'MajorText'.
				'text-anchor' -> 'end'.
				'x' -> (self chartRight + self valuescaleWidth - 2). 'y' -> (y + 2).
				value separatedThousandsString}]].
	valueAxis TEXT: {
		'class' -> 'ValueText'.
		'text-anchor' -> 'end'.
		'x' -> (self chartRight + self valuescaleWidth - 2). 'y' -> (self chartTop + 6).
		self series lastConfirmed separatedThousandsString}.
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
	"<Array of: Country>"
	
	^countries ifNil: [
		self getData.
		#()]
!

lastDate
	"<Date>
	the most recent date in the data"
	
	^self countries inject: (Date d: 1 m: 1 y: 2020) into: [:latest :country | latest max: country lastDate]
! !

!CoViD19 methodsFor: 'action'!

getData
	self withSeriesDo: [:someSeries | 
		countries := Country allFromSeries: someSeries.
		self showDate.
		self showCountries]
!

openHelios
	<inlineJS: 'require(''amber/helpers'').popupHelios()'>
!

showCountries
	| list |
	list := '#CountryList' asSilk.
	list resetContents.
	self countries do: [:country | country addToList: list]
!

showDate
	| element |
	element := '#Date' asSilk.
	element resetContents.
	element << self lastDate asLocaleDateString
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

!CoViD19 methodsFor: 'html'!

addContentsTo: aDiv
	aDiv << self header.
	aDiv DIV: 'id' -> 'CountryList'.
	aDiv DIV: 'id' -> 'Graphics'.
	aDiv << self footer
!

augmentPage
	Silk new 
		reset;
		DIV: self newContents.
	self getData
!

buttonsForDevelopment
	"<Silk>"
	
	^Silk DIV: {
		'id' -> 'Buttons'.
		(Silk BUTTON: 'reset') on: #click bind: [self resetContents].
		(Silk BUTTON: 'get data') on: #click bind: [self getData].
		(Silk BUTTON: 'Helios') on: #click bind: [self openHelios]}
!

footer
	"<Silk>"
	
	^Silk FOOTER: {
		'Done in Amber Smalltalk by Christian Haider'.
		Silk SPAN: (Silk A: {
			'href' -> 'https://github.com/CSSEGISandData/COVID-19'.
			'target' -> '_blank'.
			'rel' -> 'noopener'.
			'Data'}).
		Silk SPAN: (Silk A: {
			'href' -> 'https://github.com/ChristianHaider/CoViD19UI'.
			'target' -> '_blank'.
			'rel' -> 'noopener'.
			'Source'})}
!

header
	^Silk HEADER: {
		Silk H1: 'CoViD-19 Charts'.
		Silk SPAN: {
			'id' -> 'Date'.
			self lastDate asLocaleDateString}.
		self buttonsForDevelopment}
!

newContents
	"<DIV>"
	
	| contents |
	contents := Silk DIV: {'id' -> 'Contents'}.
	self addContentsTo: contents.
	^contents
! !

!CoViD19 methodsFor: 'initialize / release'!

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

!Datapoint methodsFor: 'calculating'!

differenceTo: aDatapoint
	^self class 
		date: self date
		confirmed: self confirmed - aDatapoint confirmed
		deaths: self deaths - aDatapoint deaths
		recovered: self recovered - aDatapoint recovered
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

changes
	"<Dataseries>"
	
	| wst rst last |
	wst := OrderedCollection new writeStream.
	rst := self series readStream.
	last := nil.
	[rst atEnd] whileFalse: [
		| datapoint | 
		datapoint := rst next.
		last ifNotNil: [
			wst nextPut: (datapoint differenceTo: last)].
		last := datapoint].
	^self class series: wst contents
!

firstDate
	"<Date>"
	
	^self series first date
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

lastDateOfMonths
	"<Array of: Date>"
	
	| dates |
	dates := OrderedCollection new.
	(self series collect: #date) inject: nil into: [:last :date |
		(last notNil and: [
		last month ~= date month]) ifTrue: [
			dates add: last].
		date].
	^dates
!

lastDateOfWeeks
	"<Array of: Date>"
	
	^(self series collect: #date) select: [:date | date dayOfWeek = 7]
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

changes
	"<Dataseries>"
	
	^self series changes
!

lastConfirmed
	"<Integer>"
	
	^self series lastConfirmed
!

lastDate
	"<Date>"
	
	^self series lastDate
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

!GeographicArea methodsFor: 'actions'!

showInfo
	"add nice info graphics"
	
	| graphics |
	graphics := '#Graphics' asSilk.
	graphics resetContents.
	graphics H2: self name.
	graphics DIV: {
		Silk H3: 'Cases'.
		(Barchart on: self series) svg}.
	graphics DIV: {
		Silk H3: 'Change'.
		(Barchart on: self changes) svg}
! !

!GeographicArea methodsFor: 'html'!

addToList: anElement
	"add html elements to anElement"
	
	anElement << {self emptySpan. self asNameSpan. self asValueSpan}
!

asNameSpan
	"<span>
	the name of the list item"
	
	| item |
	item := Silk SPAN: {
		'class' -> 'ListItem'. 
		(Silk SPAN: {'class' -> 'StateName'. self name})}.
	item on: #click bind: [:event |
		('#CountryList' asSilk allAt: '.selected') do: [:selected |
			console log: selected.
			selected attrAt: 'class' put: 'ListItem'].
		item attrAt: 'class' put: 'ListItem selected'. 
		self showInfo].
	^item
!

asValueSpan
	"<span>
	the value of the list item"
	
	^Silk SPAN: {
		'class' -> 'ListValue'. 
		self lastConfirmed separatedThousandsString}
!

emptySpan
	"<span>
	in place of a +/- button"
	
	^Silk SPAN: 'class' -> 'treeSpan'
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

addToList: anElement
	"add html elements to anElement"
	
	| plusButton minusButton plusAction minusAction |
	self parts ifEmpty: [
		anElement << {self emptySpan. self asNameSpan. self asValueSpan}.
		^self].
	plusButton := Silk BUTTON: {'class' -> 'treeButton'. 'type' -> 'button'. '+'}.
	minusButton := Silk BUTTON: {'class' -> 'treeButton'. 'type' -> 'button'. '-'}.
	plusAction := [:event |
		| element after next2 insert |
		element := Silk fromElement: event target.
		element resetContents.
		element off: #click unbind: plusAction.
		element << '-'.
		element on: #click bind: minusAction.
		after := element setToAfter.
		after next.
		next2 := after next.
		insert := next2 setToAfter.
		self parts do: [:part | part addToList: insert]].
	minusAction := [:event |
		| element after next2 insert last |
		element := Silk fromElement: event target.
		element resetContents.
		element off: #click unbind: minusAction.
		element << '+'.
		element on: #click bind: plusAction.
		after := element setToAfter.
		after next.
		next2 := after next.
		insert := next2 setToAfter.
		self parts size * 3 timesRepeat: [last := after next].
		insert cutUpTo: last setToAfter].
	plusButton on: #click bind: plusAction.
	minusButton on: #click bind: minusAction.
	anElement << {plusButton. self asNameSpan. self asValueSpan}.
!

asNameSpan
	"<span>
	the name of the list item"
	
	| item |
	item := Silk SPAN: {
		'class' -> 'ListItem'. 
		(Silk SPAN: {'class' -> 'CountryName'. self name})}.
	item on: #click bind: [:event |
		('#CountryList' asSilk allAt: '.selected') do: [:selected |
			console log: selected.
			selected attrAt: 'class' put: 'ListItem'].
		item attrAt: 'class' put: 'ListItem selected'. 
		self showInfo].
	^item
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

!State class methodsFor: 'instance creation'!

allFromSeries: someSeries
	"<Array of: State>"
	
	^someSeries collect: [:rawSeries |
		self 
			name: rawSeries state
			series: rawSeries series]
! !

Silk subclass: #SVG
	slots: {}
	package: 'Covid19view'!

!SVG class methodsFor: 'as yet unclassified'!

namespace
	^'http://www.w3.org/2000/svg'
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
	slots: {#logarithmic}
	package: 'Covid19view'!

!Valuescale methodsFor: 'accessing'!

at: aDomainValue
	self logarithmic ifFalse: [
		^aDomainValue - self from / self range].
	^aDomainValue - self from / self range
!

normTicks
	"<Array[2] of: (Array of: Number)>"
	
	| f normed ticks |
	f := self tickFactor.
	normed := self normedTo.
	ticks := 1 to: normed floor.
	ticks size >= 8 ifTrue: [
		^#(#(2 4 6 8) #())].
	ticks size >= 6 ifTrue: [
		^#(#(2 4 6) #())].
	ticks size >= 4 ifTrue: [
		^#(#(2 4) #())].
	ticks size = 1 ifTrue: [
		normed >= 1.5 ifTrue: [
			^#(#(1) #(0.5 1.5))].
		^#(#(1) #(0.5))].
	^Array with: ticks with: #()
!

normedTo
	"<Number [1..9.x]>
	the highest value as number between 1 and less than 10; i.e. a one digit number (can have decimals)"
	
	^self to / self tickFactor
!

tickFactor
	"<Number>"
	
	^10 raisedTo: (self to log: 10) floor
!

ticks
	"<Array[2] of: (Array of: Number)>"
	
	| f |
	f := self tickFactor.
	^self normTicks collect: [:ticks |
		ticks collect: [:n | n * f]]
! !

!Valuescale methodsFor: 'actions'!

beLinear
	logarithmic := false
!

beLogarithmic
	logarithmic := true
! !

!Valuescale methodsFor: 'testing'!

logarithmic
	"<Boolean>"
	
	^logarithmic ifNil: [true]
! !

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

!Date methodsFor: '*Covid19view'!

asLocaleDateString
	<inlineJS: 'return self.toLocaleDateString()'>
!

max: aDate
	aDate > self ifTrue: [
		^aDate].
	^self
! !

!Date class methodsFor: '*Covid19view'!

d: dayInteger m: monthInteger y: yearInteger
	<inlineJS: 'return new Date(yearInteger, monthInteger - 1, dayInteger)'>
! !

!Number methodsFor: '*Covid19view'!

separatedThousandsString
	"<String>
	String with thousands separator every third insertin point"
	
	| rst wst |
	rst := self printString reversed readStream.
	wst := String new writeStream.
	[rst atEnd] whileFalse: [
		wst nextPutAll: (rst next: 3).
		rst atEnd ifFalse: [wst nextPut: $.]].
	^wst contents reversed
! !

