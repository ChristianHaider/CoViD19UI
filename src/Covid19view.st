Smalltalk createPackage: 'Covid19view'!
(Smalltalk packageAt: 'Covid19view' ifAbsent: [ self error: 'Package not created: Covid19view' ]) imports: {'appTimestamp' -> 'app/timestamp'. 'silk/Silk'}!
Object subclass: #Barchart
	slots: {#series. #valuescale. #datescale}
	package: 'Covid19view'!
!Barchart commentStamp!
A bar chart with decent date and value scale.
Datapoints are shown as bars with a tooltip showing details!

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

linearValuescale
	"<LinearValuescale>"
	
	^LinearValuescale from: 0 to: self maxValue
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

valuescale
	"<Valuescale>"
	
	^valuescale ifNil: [valuescale := self linearValuescale]
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
		self legendClass: 'BarConfirmed' label: 'confirmed' value: aDatapoint confirmed.
		self legendClass: 'BarRecovered' label: 'recovered' value: aDatapoint recovered.
		self legendClass: 'BarDeaths' label: 'deaths' value: aDatapoint deaths}
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
		Silk SPAN: {'class' -> 'LegendBar'. SVG SVG: {'viewBox' -> '0 0 10 5'. self fullBoxClassed: aClassString}}.
		Silk SPAN: {'class' -> 'LegendLabel'. aString}.
		Silk SPAN: {'class' -> 'LegendValue'. aNumber separatedThousandsString}}
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

valueAxisIn: aSVG
	^self valuescale ticks asArgumentsIn: [:majorTicks :minorTicks |
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
	
	^false
! !

!Barchart class methodsFor: 'instance creation'!

on: aDataseries
	| inst |
	inst := self new.
	inst initializeSeries: aDataseries.
	^inst
! !

Barchart subclass: #Casechart
	slots: {#logarithmic}
	package: 'Covid19view'!
!Casechart commentStamp!
A chart for case data

Case data only grow, therefore, a logarithmic scale is most appropriate!

!Casechart methodsFor: 'accessing'!

logarithmicValuescale
	"<LogarithmicValuescale>"
	
	^LogarithmicValuescale from: 1 to: self maxValue
!

valuescale
	"<Valuescale>"
	
	^valuescale ifNil: [valuescale := self isLogarithmic 
		ifTrue: [self logarithmicValuescale] 
		ifFalse: [self linearValuescale]]
! !

!Casechart methodsFor: 'initialization'!

initializeSeries: aDataseries logarithmic: aBoolean
	self initializeSeries: aDataseries.
	logarithmic := aBoolean
! !

!Casechart methodsFor: 'testing'!

isLogarithmic
	"<Boolean>"
	
	^logarithmic
! !

!Casechart class methodsFor: 'instance creation'!

series: aDataseries logarithmic: aBoolean
	| inst |
	inst := self new.
	inst initializeSeries: aDataseries logarithmic: aBoolean.
	^inst
! !

Barchart subclass: #Changechart
	slots: {}
	package: 'Covid19view'!
!Changechart commentStamp!
A chart for changes

changes go up and down and should, therefore, be shown with a linear scale!

Object subclass: #CoViD19
	slots: {#countries. #properties}
	package: 'Covid19view'!

!CoViD19 methodsFor: 'accessing'!

caseScaleLogarithmic
	"<Boolean>
	the global default for the scale of the case chart.
	This allows to keep the scale type when clicking throu countries"
	
	^self propertyAt: #CaseScaleLogarithmic ifAbsent: [true]
!

caseScaleLogarithmic: aBoolean
	self propertyAt: #CaseScaleLogarithmic put: aBoolean
!

countries
	"<Array of: Country>"
	
	^countries ifNil: [#()]
!

lastDate
	"<Date>
	the most recent date in the data"
	
	^self countries inject: (Date d: 1 m: 1 y: 2020) into: [:latest :country | latest max: country lastDate]
! !

!CoViD19 methodsFor: 'accessing properties'!

properties
	"<Dictionary key: Symbol value: Object>"
	
	^properties ifNil: [properties := Dictionary new]
!

propertyAt: aSymbol
	"<Object | nil>"
	
	^self propertyAt: aSymbol ifAbsent: [nil]
!

propertyAt: aSymbol ifAbsent: aBlock
	"<Object>"
	
	^self properties at: aSymbol ifAbsent: aBlock
!

propertyAt: aSymbol ifAbsentPut: aBlock
	"<Object>"
	
	(self properties includesKey: aSymbol) ifTrue: [
		^self propertyAt: aSymbol].
	^self propertyAt: aSymbol put: aBlock value
!

propertyAt: aSymbol put: anObject
	"<Object>"
	
	^self properties at: aSymbol put: anObject
!

removeProperty: aSymbol
	"<Object | nil>"
	
	^self removeProperty: aSymbol ifAbsent: [nil]
!

removeProperty: aSymbol ifAbsent: aBlock
	"<Object>"
	
	^self properties removeKey: aSymbol ifAbsent: aBlock
! !

!CoViD19 methodsFor: 'action'!

addModificationTime: aDateOrNil to: someCountries
	| states modificationDate |
	modificationDate := aDateOrNil
		ifNotNil: [:date | Date fromString: date]
		ifNil: [someCountries first lastDate].
	someCountries do: [:country | country modificationDate: modificationDate]
!

getData
	self withSeriesDo: [:jsons |
		jsons asArgumentsIn: [:jhuJson :rkiJson |
			| germany states |
			countries := Country allFromJHUJson: jhuJson data.
			self addModificationTime: (jhuJson meta at: #modificationDate) to: countries.
			germany := countries detect: [:country | country name = 'Germany'].
			states := Country allFromRKIJson: rkiJson data.
			self addModificationTime: (rkiJson meta at: #modificationDate) to: states.
			germany addGermanStates: states.
			self showCountries]]
!

showCountries
	| list |
	list := '#CountryList' asSilk.
	list resetContents.
	self countries do: [:country | country addToList: list].
	self countries first selectWorld
!

withSeriesDo: aOneArgumentBlock
	(Promise all: {
		(Platform fetch: 'data/CoViD-19_JHU.json'). 
		(Platform fetch: 'data/CoViD-19_RKI.json')}) then: [:responses |
			(Promise all: (responses collect: #json)) then: [:jsons |
				aOneArgumentBlock value: jsons]]
		catch: [:ex | 
			(ErrorHandler current respondsTo: #debugError:) 
				ifTrue: [ErrorHandler current debugError: ex] 
				ifFalse:[ErrorHandler handleError: ex]]
! !

!CoViD19 methodsFor: 'html'!

addContentsTo: aDiv
	aDiv << {
		self header.
		Silk DIV: {
			'id' -> 'CountryList'.
			Silk DIV: {
				'id' -> 'CountryList'.
				'Loading data...'}}.
		Silk DIV: 'id' -> 'Graphics'}
!

augmentPage
	Silk new 
		reset;
		DIV: self newContents.
	self getData
!

header
	^Silk HEADER: {
		Silk H1: {
			Silk DIV: 'CoViD-19 Charts'. 
			Silk DIV: {'class' -> 'Subtitle'. 'Do not trust the numbers!!'}}.
		Silk SPAN: {
			'id' -> 'Versions'.
			self class softwareVersionInfo}}
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

CoViD19 class slots: {#current}!

!CoViD19 class methodsFor: 'accessing'!

current
	"<CoViD19>
	singleton"
	
	^current ifNil: [current := self new]
!

programModificationDate
	"<Date>
	creation timestamp of the 'the.js' file"
	"CoViD19 programModificationDate"
	
	^Date fromMilliseconds: appTimestamp
!

softwareNameAnchor
	^Silk A: {
		'href' -> 'https://github.com/ChristianHaider/CoViD19UI'.
		'target' -> '_blank'.
		'rel' -> 'noopener'.
		'CoViD-19 Charts'}
!

softwareVersionInfo
	^{	Silk SPAN: {'class' -> 'VersionLabel'. 'Software:'}.
		Silk SPAN: {'class' -> 'VersionName'. self softwareNameAnchor}.
		Silk SPAN: {'class' -> 'VersionDate'. self programModificationDate asLocaleString}}
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

dataProvider
	"<String>"
	
	^self subclassResponsibility
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

dataProvider
	"<String>"
	
	^'Johns Hopkins University'
!

dataProviderAnchor
	^Silk A: {
		'href' -> 'https://github.com/CSSEGISandData/COVID-19'.
		'target' -> '_blank'.
		'rel' -> 'noopener'.
		self dataProvider}
!

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
!

dataProvider
	^'Robert Koch Institut'
!

dataProviderAnchor
	^Silk A: {
		'href' -> 'https://npgeo-corona-npgeo-de.hub.arcgis.com/datasets/dd4580c810204019a7b8eb3e0b329dd6_0/data'.
		'target' -> '_blank'.
		'rel' -> 'noopener'.
		self dataProvider}
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

dataProvider
	^self series first dataProvider
!

dataProviderAnchor
	^self series first dataProviderAnchor
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

series: someDatapoints
	| inst |
	inst := self new.
	inst initializeSeries: someDatapoints.
	^inst
! !

Object subclass: #GeographicArea
	slots: {#name. #series. #properties}
	package: 'Covid19view'!

!GeographicArea methodsFor: 'accessing'!

changes
	"<Dataseries>"
	
	^self series changes
!

dataDateString
	^self modificationDate 
		ifNotNil: #asLocaleString
		ifNil: [self series lastDate asLocaleDateString]
!

dataVersionInfo
	^{	Silk SPAN: {'class' -> 'VersionLabel'. 'Data:'}.
		Silk SPAN: {'class' -> 'VersionName'. self series dataProviderAnchor}.
		Silk SPAN: {'class' -> 'VersionDate'. self dataDateString}}
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

modificationDate
	"<Date | nil>"
	
	^self properties at: #modificationDate ifAbsent: [nil]
!

modificationDate: aDate
	self properties at: #modificationDate put: aDate
!

name
	"<String>"
	
	^name
!

properties
	"<Dictionary>"
	
	^properties ifNil: [properties := Dictionary new]
!

series
	"<Dataseries>"
	
	^series
! !

!GeographicArea methodsFor: 'actions'!

addVersionInfo
	| versions |
	versions := '#Versions' asSilk.
	versions resetContents.
	versions << {
		CoViD19 softwareVersionInfo.
	 	self dataVersionInfo}
!

showInfo
	"add nice info graphics"
	
	| graphics |
	graphics := '#Graphics' asSilk.
	graphics resetContents.
	graphics << {
		Silk H2: self name.
	 	self casechart.
	 	self changechart}.
	self addVersionInfo
!

toggleValuescale
	| chart |
	CoViD19 current caseScaleLogarithmic: CoViD19 current caseScaleLogarithmic not.
	chart := '#Casechart' asSilk.
	chart resetContents.
	chart << (self newChartLogarithmic: CoViD19 current caseScaleLogarithmic)
! !

!GeographicArea methodsFor: 'comparing'!

< aGeographicArea
	^self lastConfirmed < aGeographicArea lastConfirmed
!

<= aGeographicArea
	^self lastConfirmed <= aGeographicArea lastConfirmed
!

> aGeographicArea
	^self lastConfirmed > aGeographicArea lastConfirmed
!

>= aGeographicArea
	^self lastConfirmed >= aGeographicArea lastConfirmed
! !

!GeographicArea methodsFor: 'copying'!

normalizedLike: aDataseries
	^self class
		name: self name
		series: (self series normalizedLike: aDataseries)
		properties: self properties
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

casechart
	^Silk DIV: {
		'id' -> 'Casechart'.
		self newChartLogarithmic: CoViD19 current caseScaleLogarithmic}
!

changechart
	^Silk DIV: {
		'id' -> 'Changechart'.
		Silk H3: {
			'Change'.
			Silk SPAN: {
				'class' -> 'subtitle'.
				'Differences from the day before'}}.
		(Changechart on: self changes) svg.
		Silk DIV: 'id' -> 'Tooltip'}
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
!

newButtonLogarithmic: aBoolean
	^(Silk BUTTON: {
		'class' -> (self stringLogarithmic: aBoolean).
		(self stringLogarithmic: aBoolean not)}) on: #click bind: [self toggleValuescale]
!

newChartLogarithmic: aBoolean
	| chart |
	chart := Casechart series: self series logarithmic: aBoolean.
	^{
		Silk H3: {
			'Cases'.
			Silk SPAN: {
				'class' -> 'HeaderLegend'.
				Silk SPAN: {
					'class' -> 'LegendConfirmed'.
					(chart legendClass: 'BarConfirmed' label: 'confirmed' value: self lastConfirmed)}.
				Silk SPAN: {
					'class' -> 'LegendRecovered'.
					(chart legendClass: 'BarRecovered' label: 'recovered' value: self lastRecovered)}.
				Silk SPAN: {
					'class' -> 'LegendDeaths'.
					(chart legendClass: 'BarDeaths' label: 'deaths' value: self lastDeaths)}}.
			self newButtonLogarithmic: aBoolean}.
		chart svg.
		Silk DIV: 'id' -> 'Tooltip'}
!

stringLogarithmic: aBoolean
	^aBoolean
		ifTrue: ['logarithmic']
		ifFalse: ['linear']
! !

!GeographicArea methodsFor: 'initialization'!

initializeName: aString series: aDataseries properties: aDictionary
	name := aString.
	series := aDataseries.
	properties := aDictionary
! !

!GeographicArea class methodsFor: 'instance creation'!

allFromJHUJson: aJson
	"<Array of: GeographicArea>"
	
	^self allFromJHUSeries: (aJson collect: [:countryJson | JHUSeries fromJson: countryJson])
!

allFromJHUSeries: someSeries
	"<Array of: GeographicArea>"
	
	^self subclassResponsability
!

allFromRKIJson: aJson
	"<Array of: GeographicArea>"
	
	^self allFromRKISeries: (aJson collect: [:countryJson | RKISeries fromJson: countryJson])
!

allFromRKISeries: someSeries
	"<Array of: GeographicArea>"
	
	^self subclassResponsability
!

name: aString series: aDataseries
	^self name: aString series: aDataseries properties: nil
!

name: aString series: aDataseries properties: aDictionary
	| inst |
	inst := self new.
	inst initializeName: aString series: aDataseries properties: aDictionary.
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
		normalized add: (land parts 
			ifEmpty: [
				land normalizedLike: self series] 
			ifNotEmpty: [
				land copyWithParts: (land parts collect: [:kreis | kreis normalizedLike: self series])])].
	self parts addAll: (normalized sort: [:a :b | a > b])
!

modificationDate: aDate
	super modificationDate: aDate.
	self parts do: [:part | part modificationDate: aDate]
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
	^self class 
		name: self name 
		series: nil
		properties: self properties 
		parts: someParts
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
	self name = 'World' ifTrue: [
		item << ('id' -> 'World')].
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
!

selectWorld
	"mark the World list item as selected and show the infos"
	
	'#World' asSilk attrAt: 'class' put: 'ListItem selected'. 
	self showInfo
! !

!Country methodsFor: 'initialization'!

initializeName: aString series: aDataseries properties: aDictionary parts: someParts
	name := aString.
	series := aDataseries.
	properties := aDictionary.
	parts := someParts
! !

!Country class methodsFor: 'instance creation'!

allFromJHUSeries: someJHUSeries
	"<Array of: Country>"
	
	| byCountry globalSeries countryList |
	byCountry := Dictionary new.
	globalSeries := nil.
	someJHUSeries do: [:series |
		(byCountry at: series country ifAbsentPut: [OrderedCollection new]) add: series.
		globalSeries := globalSeries ifNil: [series series] ifNotNil: [globalSeries + series series]].
	countryList := OrderedCollection with: (self name: 'World' series: globalSeries).
	byCountry keysAndValuesDo: [:countryName :listOfSeries |
		countryList add: (listOfSeries size = 1
			ifTrue: [self name: countryName series: listOfSeries first series]
			ifFalse: [self name: countryName parts: (State allFromJHUSeries: (listOfSeries sort: [:a :b | a > b]))])].
	^countryList sort: [:a :b | a > b]
!

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
			ifFalse: [self name: stateName parts: (State allFromRKISeries: (listOfSeries sort: [:a :b | a > b]))])].
	^stateList
!

name: aString parts: someSeries
	^self name: aString series: nil properties: nil parts: someSeries
!

name: aString series: aDataseries properties: aDictionary parts: someSeries
	| inst |
	inst := self new.
	inst initializeName: aString series: aDataseries properties: aDictionary parts: someSeries.
	^inst
! !

GeographicArea subclass: #State
	slots: {}
	package: 'Covid19view'!

!State class methodsFor: 'instance creation'!

allFromJHUSeries: someJHUSeries
	"<Array of: State>"
	
	^someJHUSeries collect: [:series |
		self 
			name: series state
			series: series series]
!

allFromRKISeries: someSeries
	"<Array of: State>"
	
	^someSeries collect: [:series |
		self 
			name: series landkreis
			series: series series]
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
		series: (Dataseries series: (aJson series collect: [:json | JHUDatapoint fromJson: json]))
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

max: aDate
	aDate > self ifTrue: [
		^aDate].
	^self
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

!SequenceableCollection methodsFor: '*Covid19view'!

asArgumentsIn: aBlock
	"Evaluate aBlock with the receiver's elements as parameters.
	aBlock takes its arguments from the receiver.
	'ok'
	#(1 2 3) asArgumentsIn: [:a :b :c | a + b + c]
	#(1 2 3) asArgumentsIn: [:a :b | a + b]
	#(1 2 3) asArgumentsIn: [:a | a]
	#(1 2 3) asArgumentsIn: [42]
	'not ok'
	#(1 2 3) asArgumentsIn: [:a :b :c :d | a + b + c + d]
	"

	^aBlock valueWithPossibleArguments: self
! !

