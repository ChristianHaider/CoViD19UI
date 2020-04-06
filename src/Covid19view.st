Smalltalk createPackage: 'Covid19view'!
(Smalltalk packageAt: 'Covid19view' ifAbsent: [ self error: 'Package not created: Covid19view' ]) imports: {'appTimestamp' -> 'app/timestamp'. 'silk/Silk'}!
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
		self svg.
		Silk DIV: 'id' -> 'Tooltip'}
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
		self svg.
		Silk DIV: 'id' -> 'Tooltip'}
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

Object subclass: #Casecount
	slots: {#confirmed. #deaths}
	package: 'Covid19view'!

!Casecount methodsFor: 'accessing'!

aspects
	"<Array of: Symbol>"
	
	^#(#confirmed #deaths)
!

confirmed
	"<Integer>"

	^confirmed
!

deaths
	"<Integer>"
	
	^deaths
! !

!Casecount methodsFor: 'arithmetic'!

+ aCasecount
	"<Casecount>"
	
	^self class 
		confirmed: self confirmed + aCasecount confirmed
		deaths: self deaths + aCasecount deaths
!

- aCasecount
	"<Casecount>"
	
	^self class 
		confirmed: self confirmed - aCasecount confirmed
		deaths: self deaths - aCasecount deaths
! !

!Casecount methodsFor: 'initialization'!

initializeConfirmed: aConfirmedInteger deaths: aDeathsInteger
	confirmed := aConfirmedInteger.
	deaths := aDeathsInteger
! !

!Casecount class methodsFor: 'instance creation'!

confirmed: aConfirmedInteger deaths: aDeathsInteger
	| inst |
	inst := self new.
	inst initializeConfirmed: aConfirmedInteger deaths: aDeathsInteger.
	^inst
!

fromJson: aJson
	^self 
		confirmed: (aJson at: #c ifAbsent: [0])
		deaths: (aJson at: #d ifAbsent: [0])
!

zero
	^self confirmed: 0 deaths: 0
! !

Object subclass: #CoViD19
	slots: {#countries}
	package: 'Covid19view'!

!CoViD19 methodsFor: 'accessing'!

countries
	"<Array of: Country>"
	
	^countries ifNil: [#()]
!

dataHome
	"<String>
	the directory with all data files"

	^'https://covidcrt.uber.space/data/'
!

lastDate
	"<Date>
	the most recent date in the data"
	
	^self countries inject: (Date d: 1 m: 1 y: 2020) into: [:latest :country | latest max: country lastDate]
!

metadata
	"<Dictionary>"
	
	self countries isEmpty ifTrue: [
		^Dictionary new].
	^self countries first metadata
! !

!CoViD19 methodsFor: 'action'!

getData
	self withAllJsons: #('CoViD-19_JHU.json' 'CoViD-19_US_JHU.json' 'CoViD-19_RKI.json') do: [:jsons |
		jsons asArgumentsIn: [:jhuJson :jhuUSJson :rkiJson |
			| us germany |
			countries := Country allFromJHUJson: jhuJson.
			germany := countries detect: [:country | country name = 'Germany'].
			germany parts addAll: ((Country allFromRKIJson: rkiJson) sort: [:a :b | a > b]).
			us := countries detect: [:country | country name = 'US'].
			us parts addAll: (Country allFromUSJHUJson: jhuUSJson).
			self showCountries.
			self updateFooter]]
!

showCountries
	| list |
	list := '#CountryList' asSilk.
	list resetContents.
	self countries do: [:country | country addToList: list].
	self countries first selectWorld
!

withAllJsons: someFilenames do: aOneArgumentBlock
	(Promise all: (someFilenames collect: [:file |
		Platform fetch: self dataHome, file])) then: [:responses |
			(Promise all: (responses collect: #json)) then: [:jsons |
				aOneArgumentBlock value: jsons]]
		catch: [:ex | 
			(ErrorHandler current respondsTo: #debugError:) 
				ifTrue: [ErrorHandler current debugError: ex] 
				ifFalse:[ErrorHandler handleError: ex]]
! !

!CoViD19 methodsFor: 'html'!

augmentPage
	Silk new 
		reset;
		DIV: {'id' -> 'Contents'. self pageContent}.
	self getData
!

footer
	^Silk FOOTER: {
		Silk SPAN: {self class softwareVersionInfo}.
		Silk SPAN: {'id' -> 'ServerVersion'. self class serverVersionInfo}}
!

header
	^Silk HEADER: {
		Silk H1: {
			Silk DIV: 'CoViD-19 Charts'. 
			Silk DIV: {'class' -> 'Subtitle'. 'Do not trust the numbers!!'}}.
		Silk SPAN: 'id' -> 'Versions'}
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

updateFooter
	| element |
	element := '#ServerVersion' asSilk.
	element resetContents.
	element << self class serverVersionInfo
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

!CoViD19 class methodsFor: 'accessing'!

current
	"<CoViD19>
	singleton"
	
	^current ifNil: [current := self new]
!

metadata
	"<Dictionary>"
	
	^self current metadata
!

programModificationDate
	"<Date>
	creation timestamp of the 'the.js' file"
	"CoViD19 programModificationDate"
	
	^Date fromMilliseconds: appTimestamp
!

serverModificationDate
	"<Date>"
	
	(self metadata at: #softwareTimestamp ifAbsent: [nil]) ifNotNil: [:date | 
		^Date fromString: date].
	^Date now
!

serverName
	"<String>"
	
	^self metadata at: #softwareName ifAbsent: ['']
!

serverNameAnchor
	^Silk A: {
		'href' -> 'https://github.com/ChristianHaider/CoViD19UI'.
		'target' -> '_blank'.
		'rel' -> 'noopener'.
		self serverName, ' ', self serverVersion}
!

serverVersion
	"<String>"
	
	^self metadata at: #softwareVersion ifAbsent: ['']
!

serverVersionInfo
	^{	Silk SPAN: {'class' -> 'VersionLabel'. 'Data collector:'}.
		Silk SPAN: {'class' -> 'VersionName'. self serverNameAnchor}.
		Silk SPAN: {'class' -> 'VersionDate'. self serverModificationDate asLocaleString}}
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
		Silk SPAN: {'class' -> 'VersionDate'. self programModificationDate asLocaleString}}
! !

!CoViD19 class methodsFor: 'starting'!

start
	  self current augmentPage
! !

Object subclass: #Datapoint
	slots: {#date. #confirmed. #deaths}
	package: 'Covid19view'!

!Datapoint methodsFor: 'accessing'!

aspects
	"<Array of: Symbol>"
	
	^#(#confirmed #deaths)
!

confirmed
	"<Integer>"

	^confirmed
!

dataProvider
	"<String>
	name of the data provider"
	
	^self subclassResponsibility
!

dataProviderAnchor
	"<a>
	link to the data provider"
	
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

maxValue
	"<Integer>"
	
	^self aspects inject: 0 into: [:max :aspect | max max: (self perform:  aspect)]
!

maxValueForAspects: someAspects
	"<Integer>"
	
	someAspects isEmpty ifTrue: [
		^self maxValue].
	^someAspects inject: 0 into: [:max :aspect | max max: (self perform:  aspect)]
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

changeFrom: aDatapoint
	"<Datapoint>
	new Datapoint with the change from aDatapoint"
	
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

!Datapoint methodsFor: 'printing'!

printOn: aStream
	aStream 
		nextPutAll: self class name;
		nextPut: $(;
		nextPutAll: self date asDateString;
		nextPutAll: ' ';
		nextPutAll: self deaths printString;
		nextPutAll: '/';
		nextPutAll: self confirmed printString;
		nextPut: $)
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

zero
	^self 
		date: (Date d: 1 m: 1 y: 2020) 
		confirmed: 0 
		deaths: 0
! !

!Datapoint class methodsFor: 'reading'!

dateFromJson: aJson
	^Date d: aJson d m: aJson m y: aJson y
! !

Datapoint subclass: #ConfirmedAndDeathsDatapoint
	slots: {}
	package: 'Covid19view'!

!ConfirmedAndDeathsDatapoint methodsFor: 'accessing'!

dataProvider
	^'Johns Hopkins University'
!

dataProviderAnchor
	^Silk A: {
		'href' -> 'https://github.com/CSSEGISandData/COVID-19'.
		'target' -> '_blank'.
		'rel' -> 'noopener'.
		self dataProvider}
! !

!ConfirmedAndDeathsDatapoint methodsFor: 'arithmetic'!

+ aDatapoint
	"<JHUDatapoint>"
	
	self date = aDatapoint date ifFalse: [
		self error: 'the dates are not the same'].
	^self class 
		date: self date 
		confirmed: self confirmed + aDatapoint confirmed 
		deaths: self deaths + aDatapoint deaths
!

changeFrom: aDatapoint
	^self class 
		date: self date
		confirmed: self confirmed - aDatapoint confirmed
		deaths: self deaths - aDatapoint deaths
! !

!ConfirmedAndDeathsDatapoint class methodsFor: 'instance creation'!

fromJson: aJson
	^self 
		date: (self dateFromJson: aJson date)
		confirmed: (aJson at: #c ifAbsent: [0])
		deaths: (aJson at: #d ifAbsent: [0])
! !

Datapoint subclass: #JHUDatapoint
	slots: {#recovered}
	package: 'Covid19view'!

!JHUDatapoint methodsFor: 'accessing'!

aspects
	^super aspects, #(#recovered)
!

dataProvider
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
	
	^recovered ifNil: [0]
! !

!JHUDatapoint methodsFor: 'arithmetic'!

+ aDatapoint
	"<JHUDatapoint>"
	
	self date = aDatapoint date ifFalse: [
		self error: 'the dates are not the same'].
	^self class 
		date: self date 
		confirmed: self confirmed + aDatapoint confirmed 
		deaths: self deaths + aDatapoint deaths 
		recovered: self recovered + aDatapoint recovered
!

changeFrom: aDatapoint
	^self class 
		date: self date
		confirmed: self confirmed - aDatapoint confirmed
		deaths: self deaths - aDatapoint deaths
		recovered: self recovered - aDatapoint recovered
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
		confirmed: (aJson at: #c ifAbsent: [0])
		deaths: (aJson at: #d ifAbsent: [0])
		recovered: (aJson at: #r ifAbsent: [0])
!

zero
	^self 
		date: (Date d: 1 m: 1 y: 2020) 
		confirmed: 0 
		deaths: 0 
		recovered: 0
! !

Datapoint subclass: #RKIDatapoint
	slots: {#byAge}
	package: 'Covid19view'!

!RKIDatapoint methodsFor: 'accessing'!

byAge
	"<Dictionary key: String value: Integer>"
	
	^byAge
!

casecount
	"<Casecount>"
	
	^self byAge values inject: Casecount zero into: [:sum :sexDict |
		sexDict values  inject: sum into: [:count :casecount |
			count + casecount]]
!

confirmed
	^confirmed ifNil: [confirmed := self casecount confirmed]
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
!

deaths
	^deaths ifNil: [deaths := self casecount deaths]
!

female
	"<Casecount>"
	
	^self byAge values inject: 0 into: [:sum :sexDict | sum + (sexDict at: 'W')]
!

male
	"<Casecount>"
	
	^self byAge values inject: 0 into: [:sum :sexDict | sum + (sexDict at: 'M')]
! !

!RKIDatapoint methodsFor: 'arithmetic'!

+ aDatapoint
	"<RKIDatapoint>"
	
	| newByAge |
	self date = aDatapoint date ifFalse: [
		self error: 'the dates are not the same'].
	newByAge := self byAge copy.
	aDatapoint byAge keysAndValuesDo: [:age :sexDict |
		| newSexDict |
		newSexDict := (newByAge at: age ifAbsent: [Dictionary new]) copy.
		sexDict keysAndValuesDo: [:sex :count |
			newSexDict at: sex put: (newSexDict at: sex ifAbsent: [Casecount zero]) + count].
		newByAge at: age put: newSexDict].
	^self class date: self date byAge: newByAge
!

changeFrom: aDatapoint
	| newByAge |
	newByAge := self byAge copy.
	aDatapoint byAge keysAndValuesDo: [:age :sexDict |
		| newSexDict |
		newSexDict := (newByAge at: age ifAbsent: [Dictionary new]) copy.
		sexDict keysAndValuesDo: [:sex :count |
			newSexDict at: sex put: (newSexDict at: sex ifAbsent: [Casecount zero]) - count].
		newByAge at: age put: newSexDict].
	^self class date: self date byAge: newByAge
! !

!RKIDatapoint methodsFor: 'copying'!

copyWithDate: aDate
	^self class date: aDate byAge: self byAge
! !

!RKIDatapoint methodsFor: 'html'!

asSpans
	"<Array of: <span>"
	
	^super asSpans, { 
		Silk SPAN: {'class' -> 'ByAge'. self byAge}}
! !

!RKIDatapoint methodsFor: 'initialization'!

initializeDate: aDate byAge: aByAgeDictionary
	date := aDate.
	byAge := aByAgeDictionary
! !

!RKIDatapoint class methodsFor: 'instance creation'!

date: aDate byAge: aByAgeDictionary
	| inst |
	inst := self new.
	inst initializeDate: aDate byAge: aByAgeDictionary.
	^inst
!

fromJson: aJson
	| newByAge |
	newByAge := Dictionary new.
	aJson byAge keysAndValuesDo: [:age :sexDict |
		| dict |
		dict := Dictionary new.
		sexDict keysAndValuesDo: [:sex :value |
			dict at: sex put: (Casecount fromJson: value)].
		newByAge at: age put: dict].
	^self date: (self dateFromJson: aJson date) byAge: newByAge
!

zero
	^self 
		date: (Date d: 1 m: 1 y: 2020) 
		byAge: Dictionary new
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
			wst nextPut: (datapoint changeFrom: last)].
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

	| wst |
	wst := OrderedCollection new writeStream.
	self
		with: aDataseries
		onlyInSelf: [:datapoint | wst nextPut: datapoint]
		onlyInArg: [:datapoint | wst nextPut: datapoint]
		inBoth: [:datapoint1 :datapoint2 | wst nextPut: datapoint1 + datapoint2].
	^self class series: wst contents
!

with: aSeries onlyInSelf: onlyInSelfBlock onlyInArg: onlyInArgBlock inBoth: inBothBlock
	"iterates throu both collections of datapoints and processes them in date order"
	
	| rstSelf rstArg |
	rstSelf := self series readStream.
	rstArg := aSeries series readStream.
	[
	rstSelf atEnd and: [
	rstArg atEnd]] whileFalse: [
			rstSelf atEnd
				ifTrue: [onlyInArgBlock value: rstArg next]
				ifFalse: [
				rstArg atEnd
					ifTrue: [onlyInSelfBlock value: rstSelf next]
					ifFalse: [
					| selfDate argDate |
					selfDate := rstSelf peek date.
					argDate := rstArg peek date.
					selfDate = argDate
						ifTrue: [
						inBothBlock value: rstSelf next value: rstArg next]
						ifFalse: [
						selfDate < argDate
							ifTrue: [onlyInSelfBlock value: rstSelf next]
							ifFalse: [onlyInArgBlock value: rstArg next]]]]]
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

metadata
	"<Dictionary>"
	
	^self properties at: #metadata ifAbsent: [Dictionary new]
!

metadata: aDictionary
	self properties at: #metadata put: aDictionary
!

modificationDate
	"<Date>"

	(self metadata at: #modificationDate) ifNotNil: [:date | 
		^Date fromString: date].
	^Date now
!

name
	"<String>"
	
	^name
!

population
	"<Integer>"
	
	^self properties at: #population ifAbsent: [0]
!

population: anInteger
	self properties at: #population put: anInteger
!

properties
	"<Dictionary>"
	
	^properties ifNil: [properties := Dictionary new]
!

series
	"<Dataseries>"
	
	^series
!

seriesDeaths
	"<Dataseries>"
	
	^self series
! !

!GeographicArea methodsFor: 'actions'!

addVersionInfo
	| versions |
	versions := '#Versions' asSilk.
	versions resetContents.
	versions << self dataVersionInfo
!

areaInfo
	| span |
	span := Silk SPAN: 'class' -> 'AreaInfo'.
	self population isZero ifFalse: [
		^span << {Silk SPAN: 'Population: '. Silk SPAN: self population separatedThousandsString}].
	^span
!

graphicsHeader
	^Silk DIV << {
		'class' -> 'GraphicsHeader'.
		Silk H2: self name.
		self areaInfo}
!

recreateCharts
	| graphics |
	graphics := '#Graphics' asSilk.
	graphics resetContents.
	graphics << {
		self graphicsHeader.
	 	self casechart.
	 	self changechart}
!

showInfo
	"add nice info graphics"
	
	self recreateCharts.
	self addVersionInfo
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
!

printOn: aStream
	aStream 
		nextPutAll: self class name;
		nextPut: $(;
		nextPutAll: self name;
		nextPut: $)
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
		(Casechart for: self on: self series aspects: Casechart currentAspects) html}
!

changechart
	^Silk DIV: {
		'id' -> 'Changechart'.
		(Changechart for: self on: self changes aspects: Changechart currentAspects) html}
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

initializeName: aString series: aDataseries properties: aDictionary
	name := aString.
	series := aDataseries.
	properties := aDictionary
! !

!GeographicArea class methodsFor: 'instance creation'!

allFromJHUJson: aJson
	"<Array of: GeographicArea>"

	| countries |
	countries := self allFromJHUSeries: (aJson data collect: [:countryJson | JHUSeries fromJson: countryJson]).
	countries do: [:country | country metadata: aJson meta].
	^countries
!

allFromJHUSeries: someSeries
	"<Array of: GeographicArea>"
	
	^self subclassResponsability
!

allFromRKIJson: aJson
	"<Array of: GeographicArea>"
	
	| countries |
	countries := self allFromRKISeries: (aJson data collect: [:countryJson | RKISeries fromJson: countryJson]).
	countries do: [:country | country metadata: aJson meta].
	^countries
!

allFromRKISeries: someSeries
	"<Array of: GeographicArea>"
	
	^self subclassResponsability
!

allFromUSJHUJson: aJson
	"<Array of: GeographicArea>"

	| countries |
	countries := self allFromUSJHUSeries: (aJson data collect: [:countryJson | JHUUSSeries fromJson: countryJson]).
	countries do: [:country | country metadata: aJson meta].
	^countries
!

allFromUSJHUSeries: someSeries
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

metadata: aDictionary
	super metadata: aDictionary.
	self parts do: [:part | part metadata: aDictionary]
!

parts
	"<Collection of: State>"
	
	^parts ifNil: [parts := OrderedCollection new]
!

population
	"<Integer | nil>"
	
	^self properties at: #population ifAbsentPut: [
		self parts inject: 0 into: [:sum :area | sum + area population]]
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

allFromJHUSeries: someSeries
	"<Array of: Country>"
	
	| globalSeries countryList |
	globalSeries := someSeries allButFirst inject: someSeries first series into: [:sum :series | sum + series series].
	countryList := OrderedCollection with: (self name: 'World' series: globalSeries).
	(someSeries groupedBy: #country) keysAndValuesDo: [:countryName :listOfSeries |
		countryList add: (listOfSeries size = 1
			ifTrue: [self name: countryName series: listOfSeries first series]
			ifFalse: [self name: countryName parts: (State allFromJHUSeries: (listOfSeries sort: [:a :b | a > b]))])].
	^countryList sort: [:a :b | a > b]
!

allFromRKISeries: someSeries
	"<Array of: Country>"
	
	|  list |
	list := OrderedCollection new.
	(someSeries groupedBy: #bundesland) keysAndValuesDo: [:name :listOfSeries |
		list add: (listOfSeries size = 1
			ifTrue: [self name: name series: listOfSeries first series]
			ifFalse: [self name: name parts: (State allFromRKISeries: (listOfSeries sort: [:a :b | a > b]))])].
	^list
!

allFromUSJHUSeries: someSeries
	"<Array of: Country>"
	
	| list |
	list := OrderedCollection new.
	(someSeries groupedBy: #state) keysAndValuesDo: [:name :listOfSeries |
		list add: (listOfSeries size = 1
			ifTrue: [self name: name series: listOfSeries first series]
			ifFalse: [self name: name parts: (State allFromUSJHUSeries: (listOfSeries sort: [:a :b | a > b]))])].
	^list sort: [:a :b | a > b]
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

allFromJHUSeries: someSeries
	"<Array of: State>"
	
	^someSeries collect: [:series |
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
!

allFromUSJHUSeries: someSeries
	"<Array of: State>"
	
	^someSeries collect: [:series |
		self 
			name: series county
			series: series series
			properties: (Dictionary
				with: #uid -> series uid 
				with: #population -> series population)]
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

