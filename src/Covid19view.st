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

!Barchart methodsFor: 'events'!

mouseout: anEvent datapoint: aDatapoint
	'#CasebarTooltip' asSilk << {'style' -> ('visibility: hidden;')}
!

mouseover: anEvent datapoint: aDatapoint
	| tooltip svg |
	tooltip := '#CasebarTooltip' asSilk.
	tooltip resetContents.
	tooltip << {
		'style' -> (
			'right: ', (window innerWidth - anEvent x) printString, 'px; ',
			'top: ', anEvent y printString, 'px; ',
			'visibility: visible;').
		Silk SPAN: {'class' -> 'LegendBar'}.
		Silk SPAN: {'class' -> 'LegendLabel'. aDatapoint date asLocaleDateString}.
		Silk SPAN: {'class' -> 'LegendValue'}.
		Silk SPAN: {
			'class' -> 'LegendBar'.
			SVG SVG: {
				'viewBox' -> '0 0 10 5'.
				SVG RECT: {
					'class' -> 'BarConfirmed'.
					'x' -> 0. 'y' -> 0. 
					'width' -> '100%'. 'height' -> '100%'}}}.
		Silk SPAN: {'class' -> 'LegendLabel'. 'confirmed'}.
		Silk SPAN: {'class' -> 'LegendValue'. aDatapoint confirmed separatedThousandsString}.
		Silk SPAN: {
			'class' -> 'LegendBar'.
			SVG SVG: {
				'viewBox' -> '0 0 10 5'.
				SVG RECT: {
					'class' -> 'BarRecovered'.
					'x' -> 0. 'y' -> 0. 
					'width' -> '100%'. 'height' -> '100%'}}}.
		Silk SPAN: {'class' -> 'LegendLabel'. 'recovered'}.
		Silk SPAN: {'class' -> 'LegendValue'. aDatapoint recovered separatedThousandsString}.
		Silk SPAN: {
			'class' -> 'LegendBar'.
			SVG SVG: {
				'viewBox' -> '0 0 10 5'.
				SVG RECT: {
					'class' -> 'BarDeaths'.
					'x' -> 0. 'y' -> 0. 
					'width' -> '100%'. 'height' -> '100%'}}}.
		Silk SPAN: {'class' -> 'LegendLabel'. 'deaths'}.
		Silk SPAN: {'class' -> 'LegendValue'. aDatapoint deaths separatedThousandsString}
	}
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

!Barchart methodsFor: 'initialization'!

initializeSeries: aDataseries
	series := aDataseries
! !

!Barchart methodsFor: 'svg'!

barForDatapoint: aDatapoint width: aWidth
	"<g>"
	
	| barLeft barTopConfirmed barConfirmed barTopRecovered barRecovered barTopDeaths barDeaths g |
	barLeft := (self xAt: aDatapoint date) - aWidth.
	barTopConfirmed := self yAt: aDatapoint confirmed.
	barConfirmed := SVG RECT: {
		'class' -> 'BarConfirmed'.
		'x' -> barLeft. 'y' -> barTopConfirmed. 
		'width' -> aWidth. 'height' -> (self chartBottom - barTopConfirmed)}.
	barTopRecovered := self yAt: aDatapoint decided.
	barRecovered := SVG RECT: {
		'class' -> 'BarRecovered'.
		'x' -> barLeft. 'y' -> barTopRecovered. 
		'width' -> aWidth. 'height' -> (self chartBottom - barTopRecovered)}.
	barTopDeaths := self yAt: aDatapoint deaths.
	barDeaths := SVG RECT: {
		'class' -> 'BarDeaths'.
		'x' -> barLeft. 'y' -> barTopDeaths. 
		'width' -> aWidth. 'height' -> (self chartBottom - barTopDeaths)}.
	g := SVG G: {
		'class' -> 'Bar'.
		barConfirmed.
		barRecovered.
		barDeaths}.
	g on: #mouseover bind: [:event | self mouseover: event datapoint: aDatapoint].
	g on: #mouseout bind: [:event | self mouseout: event datapoint: aDatapoint].
	^g
!

chartAreaIn: aSVG
	"add the chart area"
	
	| chartArea barWidth |
	chartArea := self graphicsArea.
	barWidth := self chartWidth / self datapoints size.
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

graphicsArea
	"<g>"
	
	^SVG G: {
		'class' -> 'GraphicsArea'.
		SVG RECT: {
			'x' -> self chartLeft. 'y' -> self chartTop. 
			'width' -> self chartWidth. 'height' -> self chartHeight}}
!

lastValueText
	^SVG TEXT: {
		'class' -> 'ValueText'.
		'text-anchor' -> 'end'.
		SVG TITLE: 'The last value of the data series'.
		'x' -> (self chartRight + self valuescaleWidth - 2). 'y' -> (self chartTop + 6).
		self series lastConfirmed separatedThousandsString}
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
	valueAxis << self lastValueText.
	^valueAxis
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
	
	^countries ifNil: [#()]
!

lastDate
	"<Date>
	the most recent date in the data"
	
	^self countries inject: (Date d: 1 m: 1 y: 2020) into: [:latest :country | latest max: country lastDate]
! !

!CoViD19 methodsFor: 'action'!

getData
	self withSeriesDo: [:jsons | 
		| seriesJHU seriesRKI germany states |
		seriesJHU := (jsons first value collect: [:data | JHUSeries fromJson: data]).
		countries := Country allFromSeries: seriesJHU.
		germany := countries detect: [:country | country name = 'Germany'].
		seriesRKI := (jsons last value collect: [:data | RKISeries fromJson: data]).
		states := Country allFromRKISeries: seriesRKI.
		germany addGermanStates: states.
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
	(Promise all: {
		(Platform fetch: 'CoViD-19.json'). 
		(Platform fetch: 'RKI_COVID19.json')}) then: [:responses |
			(Promise all: (responses collect: #json)) then: [:jsons |
				aOneArgumentBlock value: jsons]]
		catch: [:ex | 
			(ErrorHandler current respondsTo: #debugError:) 
				ifTrue: [ErrorHandler current debugError: ex] 
				ifFalse:[ErrorHandler handleError: ex]]
! !

!CoViD19 methodsFor: 'html'!

addContentsTo: aDiv
	self isDevelopment ifTrue: [
		aDiv << self buttonsForDevelopment].
	aDiv << {
		self header.
		Silk DIV: {
			'id' -> 'CountryList'.
			Silk DIV: {
				'id' -> 'CountryList'.
				'Loading data... Your browser will smoke... After that it will be fine...'}}.
		Silk DIV: 'id' -> 'Graphics'.
		self footer.
		"self casebarTooltip."
		self changebarTooltip}
!

augmentPage
	Silk new 
		reset;
		DIV: self newContents.
	self getData
!

buttonsForDevelopment
	"<Silk>"
	
	^Silk SPAN: {
		'id' -> 'Buttons'.
		(Silk BUTTON: 'reset') on: #click bind: [self resetContents].
		(Silk BUTTON: 'get data') on: #click bind: [self getData].
		(Silk BUTTON: 'Helios') on: #click bind: [self openHelios]}
!

casebarTooltip
	^Silk DIV: 'id' -> 'CasebarTooltip'
!

changebarTooltip
	^Silk DIV: 'id' -> 'ChangebarTooltip'
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
			self lastDate asLocaleDateString}}
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

!CoViD19 methodsFor: 'testing'!

isDevelopment
	^(window location host tokenize: ':') first = '127.0.0.1'
! !

!CoViD19 class methodsFor: 'starting'!

start
  self new augmentPage
! !

Object subclass: #Datapoint
	slots: {#date. #confirmed. #deaths}
	package: 'Covid19view'!

!Datapoint methodsFor: 'accessing'!

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
	
	^0
! !

!Datapoint methodsFor: 'arithmetic'!

+ aDatapoint
	"<Datapoint>"
	
	^self subclassResponsibility
!

addToDictionary: aDictionary from: anotherDictionary
	"<Dictionary>"
	
	| dict |
	dict := Dictionary new.
	aDictionary keysAndValuesDo: [:string :number |
		dict at: string put: number].
	anotherDictionary keysAndValuesDo: [:string :number |
		dict at: string put: (dict at: string ifAbsent: [0]) + number].
	^dict
!

dictionary: aDictionary minus: anotherDictionary
	"<Dictionary>"
	
	| dict |
	dict := Dictionary new.
	aDictionary keysAndValuesDo: [:string :number |
		dict at: string put: number].
	anotherDictionary keysAndValuesDo: [:string :number |
		dict at: string put: (dict at: string ifAbsent: [0]) - number].
	^dict
!

differenceTo: aDatapoint
	"<Datapoint>"
	
	^self subclassResponsibility
! !

!Datapoint methodsFor: 'copying'!

copyWithDate: aDate
	"<Datapoint>"
	
	^self class date: aDate confirmed: self confirmed deaths: self deaths
! !

!Datapoint methodsFor: 'html'!

asSpans
	"<Array of: <span>"
	
	^{Silk SPAN: {'class' -> 'Confirmed'. self confirmed}. 
	Silk SPAN: {'class' -> 'Deaths'. self deaths}}
! !

!Datapoint methodsFor: 'initialization'!

initializeDate: aDate confirmed: aConfirmedInteger deaths: aDeathsInteger
	date := aDate.
	confirmed := aConfirmedInteger.
	deaths := aDeathsInteger
! !

!Datapoint class methodsFor: 'instance creation'!

date: aDate confirmed: aConfirmedInteger deaths: aDeathsInteger
	| inst |
	inst := self new.
	inst initializeDate: aDate confirmed: aConfirmedInteger deaths: aDeathsInteger.
	^inst
!

fromJson: aJson
	^self subclassResponsibility
!

newZero
	^self 
		date: (Date d: 1 m: 1 y: 2020) 
		confirmed: 0 
		deaths: 0
! !

!Datapoint class methodsFor: 'reading'!

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
! !

Datapoint subclass: #JHUDatapoint
	slots: {#recovered}
	package: 'Covid19view'!

!JHUDatapoint methodsFor: 'accessing'!

recovered
	"<Integer>"
	
	^recovered
! !

!JHUDatapoint methodsFor: 'arithmetic'!

+ aJHUDatapoint
	"<JHUDatapoint>"
	
	self date = aJHUDatapoint date ifFalse: [
		self error: 'the dates are not the same'].
	^self class 
		date: self date 
		confirmed: self confirmed + aJHUDatapoint confirmed 
		deaths: self deaths + aJHUDatapoint deaths 
		recovered: self recovered + aJHUDatapoint recovered
!

differenceTo: aJHUDatapoint
	^self class 
		date: self date
		confirmed: self confirmed - aJHUDatapoint confirmed
		deaths: self deaths - aJHUDatapoint deaths
		recovered: self recovered - aJHUDatapoint recovered
! !

!JHUDatapoint methodsFor: 'copying'!

copyWithDate: aDate
	^self class 
		date: aDate 
		confirmed: self confirmed 
		deaths: self deaths 
		recovered: self recovered
! !

!JHUDatapoint methodsFor: 'html'!

asSpans
	"<Array of: <span>"
	
	^super asSpans, { 
		Silk SPAN: {'class' -> 'Recovered'. self recovered}}
! !

!JHUDatapoint methodsFor: 'initialization'!

initializeDate: aDate confirmed: aConfirmedInteger deaths: aDeathsInteger recovered: aRecoveredInteger
	self initializeDate: aDate confirmed: aConfirmedInteger deaths: aDeathsInteger.
	recovered := aRecoveredInteger
! !

!JHUDatapoint class methodsFor: 'instance creation'!

date: aDate confirmed: aConfirmedInteger deaths: aDeathsInteger recovered: aRecoveredInteger
	| inst |
	inst := self new.
	inst initializeDate: aDate confirmed: aConfirmedInteger deaths: aDeathsInteger recovered: aRecoveredInteger.
	^inst
!

fromJson: aJson
	^self 
		date: (self dateFromJson: aJson date)
		confirmed: aJson confirmed 
		deaths: aJson deaths 
		recovered: aJson recovered
!

newZero
	^self 
		date: (Date d: 1 m: 1 y: 2020) 
		confirmed: 0 
		deaths: 0 
		recovered: 0
! !

Datapoint subclass: #RKIDatapoint
	slots: {#byAge. #bySex}
	package: 'Covid19view'!

!RKIDatapoint methodsFor: 'accessing'!

byAge
	"<Dictionary key: String value: Integer>"
	
	^byAge
!

bySex
	"<Dictionary key: String value: Integer>"
	
	^bySex
! !

!RKIDatapoint methodsFor: 'arithmetic'!

+ aRKIDatapoint
	"<RKIDatapoint>"
	
	self date = aRKIDatapoint date ifFalse: [
		self error: 'the dates are not the same'].
	^self class 
		date: self date 
		confirmed: self confirmed + aRKIDatapoint confirmed 
		deaths: self deaths + aRKIDatapoint deaths 
		byAge: (self addToDictionary: self byAge from: aRKIDatapoint byAge)
		bySex: (self addToDictionary: self bySex from: aRKIDatapoint bySex)
!

differenceTo: aRKIDatapoint
	^self class 
		date: self date
		confirmed: self confirmed - aRKIDatapoint confirmed
		deaths: self deaths - aRKIDatapoint deaths
		byAge: (self dictionary: self byAge minus: aRKIDatapoint byAge)
		bySex: (self dictionary: self bySex minus: aRKIDatapoint bySex)
! !

!RKIDatapoint methodsFor: 'copying'!

copyWithDate: aDate
	^self class 
		date: aDate 
		confirmed: self confirmed 
		deaths: self deaths 
		byAge: self byAge 
		bySex: self bySex
! !

!RKIDatapoint methodsFor: 'html'!

asSpans
	"<Array of: <span>"
	
	^super asSpans, { 
		Silk SPAN: {'class' -> 'ByAge'. self byAge}.
		Silk SPAN: {'class' -> 'BySex'. self bySex}}
! !

!RKIDatapoint methodsFor: 'initialization'!

initializeDate: aDate confirmed: aConfirmedInteger deaths: aDeathsInteger byAge: aByAgeDictionary bySex: aBySexDictionary
	self initializeDate: aDate confirmed: aConfirmedInteger deaths: aDeathsInteger.
	byAge := aByAgeDictionary.
	bySex := aBySexDictionary
! !

!RKIDatapoint class methodsFor: 'instance creation'!

date: aDate confirmed: aConfirmedInteger deaths: aDeathsInteger byAge: aByAgeDictionary bySex: aBySexDictionary
	| inst |
	inst := self new.
	inst 
		initializeDate: aDate 
		confirmed: aConfirmedInteger 
		deaths: aDeathsInteger 
		byAge: aByAgeDictionary 
		bySex: aBySexDictionary.
	^inst
!

fromJson: aJson
	^self 
		date: (self dateFromJson: aJson date)
		confirmed: aJson confirmed 
		deaths: aJson deaths 
		byAge: aJson byAge
		bySex: aJson bySex
!

newZero
	^self 
		date: (Date d: 1 m: 1 y: 2020) 
		confirmed: 0 
		deaths: 0
		byAge: Dictionary new
		bySex: Dictionary new
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

!Dataseries methodsFor: 'copying'!

normalizedLike: aDataseries
	"<Dataseries>"
	"create a dataseries with the same dates as aDataseries to match the JHU ones"
	
	| wst refRst rst lastPoint |
	wst := Array new writeStream.
	refRst := aDataseries series readStream.
	rst := self series readStream.
	lastPoint := rst peek class newZero.
	[refRst atEnd] whileFalse: [
		| refDatapoint |
		refDatapoint := refRst next.
		lastPoint := (rst atEnd not and: [rst peek date = refDatapoint date])
			ifTrue: [rst next]
			ifFalse: [lastPoint copyWithDate: refDatapoint date].
		wst nextPut: lastPoint].
	^self class series: wst contents
! !

!Dataseries methodsFor: 'initialization'!

initializeSeries: someDatapoints
	series := someDatapoints
! !

!Dataseries class methodsFor: 'instance creation'!

fromJHUJson: someJson
	^self series: (someJson collect: [:json |
			JHUDatapoint fromJson: json])
!

fromRKIJson: someJson
	^self series: (someJson collect: [:json |
			RKIDatapoint fromJson: json])
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
		(Barchart on: self series) svg.
		Silk DIV: 'id' -> 'CasebarTooltip'}.
	graphics DIV: {
		Silk H3: 'Change'.
		(Barchart on: self changes) svg}
! !

!GeographicArea methodsFor: 'copying'!

normalizedLike: aDataseries
	^self class
		name: self name
		series: (self series normalizedLike: aDataseries)
! !

!GeographicArea methodsFor: 'html'!

addPartToList: anElement
	self addToList: anElement
!

addToList: anElement
	"add html elements to anElement"
	
	anElement << {self emptySpan. self emptySubspan. self asNameSpan. self asValueSpan}
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
!

emptySubspan
	"<span>
	in place of a +/- button"
	
	^Silk SPAN: 'class' -> 'subtreeSpan'
! !

!GeographicArea methodsFor: 'initialization'!

initializeName: aString series: aDataseries
	name := aString.
	series := aDataseries
! !

!GeographicArea class methodsFor: 'instance creation'!

allFromRKISeries: someSeries
	"<Array of: GeographicArea>"
	
	^self subclassResponsability
!

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

addGermanStates: someCountries
	"the Dataseries of someCountries have to be normalized to the JHU period"
	
	| normalized |
	normalized := OrderedCollection new.
	someCountries do: [:land |
		land parts ifNotEmpty: [
			normalized add: (land copyWithParts: (land parts collect: [:kreis | kreis normalizedLike: self series]))]].
	self parts addAll: (normalized sorted: [:a :b | a lastConfirmed > b lastConfirmed])
!

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

!Country methodsFor: 'copying'!

copyWithParts: someParts
	^self class name: self name parts: someParts
! !

!Country methodsFor: 'html'!

addPartToList: anElement
	"add html elements to anElement"
	
	| plusAction minusAction plusButton |
	self parts ifEmpty: [
		anElement << {self emptySpan. self emptySubspan. self asSubnameSpan. self asValueSpan}.
		^self].
	plusAction := [:event |
		| button after next2 insert |
		button := Silk fromElement: event target.
		button resetContents.
		button off: #click unbind: plusAction.
		button << '–'.
		button on: #click bind: minusAction.
		after := button setToAfter.
		after next.
		next2 := after next.
		insert := next2 setToAfter.
		self parts do: [:part | part addPartToList: insert]].
	minusAction := [:event |
		| button after next2 insert last |
		button := Silk fromElement: event target.
		button resetContents.
		button off: #click unbind: minusAction.
		button attrAt: 'class' put: 'subtreeButton'.
		button << '+'.
		button on: #click bind: plusAction.
		after := button setToAfter.
		after next.
		next2 := after next.
		insert := next2 setToAfter.
		self parts size * 4 timesRepeat: [last := after next].
		insert cutUpTo: last setToAfter].
	plusButton := (Silk BUTTON: {'class' -> 'subtreeButton'. 'type' -> 'button'. '+'}) on: #click bind: plusAction.
	anElement << {self emptySpan. plusButton. self asSubnameSpan. self asValueSpan}.
!

addToList: anElement
	"add html elements to anElement"
	
	| plusButton minusButton plusAction minusAction |
	self parts ifEmpty: [
		anElement << {self emptySpan. self emptySubspan. self asNameSpan. self asValueSpan}.
		^self].
	plusButton := Silk BUTTON: {'class' -> 'treeButton'. 'type' -> 'button'. '+'}.
	minusButton := Silk BUTTON: {'class' -> 'treeButton'. 'type' -> 'button'. '–'}.
	plusAction := [:event |
		| button after next2 insert |
		button := Silk fromElement: event target.
		button resetContents.
		button off: #click unbind: plusAction.
		button << '–'.
		button on: #click bind: minusAction.
		after := button setToAfter.
		after next.
		after next.
		next2 := after next.
		insert := next2 setToAfter.
		self parts do: [:part | part addPartToList: insert]].
	minusAction := [:event |
		| button after next2 insert last |
		button := Silk fromElement: event target.
		button resetContents.
		button off: #click unbind: minusAction.
		button << '+'.
		button on: #click bind: plusAction.
		after := button setToAfter.
		after next.
		after next.
		next2 := after next.
		insert := next2 setToAfter.
		self parts size * 4 timesRepeat: [
			last := after next.
			((last attrAt: 'class') = 'subtreeButton' and: [
			last element innerText = '–']) ifTrue: [
				| after2 eol line |
				after2 := last setToAfter.
				after2 next.
				eol := after2 next setToAfter.
				line := {after2 next. after2 next. after2 next. after2 next}.
				[[:first :second :third :forth |
					first isEmpty and: [
					second isEmpty and: [
					(third attrAt: 'class') = 'ListItem' and: [
					(third at: '.StateName') notNil]]]
				] valueWithPossibleArguments: line] whileTrue: [
					line := {after2 next. after2 next. after2 next. after2 next}].
				after2 back; back; back; back.
				eol cutUpTo: after2]].
		insert cutUpTo: last setToAfter].
	plusButton on: #click bind: plusAction.
	minusButton on: #click bind: minusAction.
	anElement << {plusButton. self emptySubspan. self asNameSpan. self asValueSpan}
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
			selected attrAt: 'class' put: 'ListItem'].
		item attrAt: 'class' put: 'ListItem selected'. 
		self showInfo].
	^item
!

asSubnameSpan
	"<span>
	the name of the list item when on the second level"
	
	| item |
	item := Silk SPAN: {
		'class' -> 'ListItem'. 
		(Silk SPAN: {'class' -> 'LandName'. self name})}.
	item on: #click bind: [:event |
		('#CountryList' asSilk allAt: '.selected') do: [:selected |
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

allFromRKISeries: someSeries
	"<Array of: Country>"
	
	| byState stateList |
	byState := Dictionary new.
	someSeries do: [:series |
		(byState at: series bundesland ifAbsentPut: [OrderedCollection new]) add: series].
	stateList := OrderedCollection new.
	byState keysAndValuesDo: [:stateName :listOfSeries |
		stateList add: (listOfSeries size = 1
			ifTrue: [self name: stateName series: listOfSeries first series]
			ifFalse: [self name: stateName parts: (State allFromRKISeries: (listOfSeries sorted: [:a :b | a lastConfirmed > b lastConfirmed]))])].
	^stateList
!

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

allFromRKISeries: someSeries
	"<Array of: State>"
	
	^someSeries collect: [:rawSeries |
		self 
			name: rawSeries landkreis
			series: rawSeries series]
!

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

!SVG class methodsFor: 'accessing'!

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
	slots: {#country. #state. #latLong}
	package: 'Covid19view'!

!JHUSeries methodsFor: 'accessing'!

country
	"<String>"
	
	^country
!

latLong
	"<Point>"
	
	^latLong
!

state
	"<String>"
	
	^state
! !

!JHUSeries methodsFor: 'initialization'!

initializeCountry: aCountryString state: aStateString latLong: aLatLongPoint series: aDataseries
	self initializeSeries: aDataseries.
	country := aCountryString.
	state := aStateString.
	latLong := aLatLongPoint
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
		series: (Dataseries fromJHUJson: aJson series)
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
		series: (Dataseries fromRKIJson: aJson series)
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
	
	<inlineJS: 'return self.toLocaleString()'>
! !

