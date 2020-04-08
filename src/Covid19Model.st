Smalltalk createPackage: 'Covid19Model'!
(Smalltalk packageAt: 'Covid19Model' ifAbsent: [ self error: 'Package not created: Covid19Model' ]) imports: {'appTimestamp' -> 'app/timestamp'}!
Object subclass: #Casecount
	slots: {#confirmed. #deaths}
	package: 'Covid19Model'!

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

Object subclass: #CoViD19Application
	slots: {#countries}
	package: 'Covid19Model'!

!CoViD19Application methodsFor: 'accessing'!

countries
	"<Array of: Country>"
	
	^countries ifNil: [#()]
!

countries: someCountries
	countries := someCountries
!

dataHome
	"<String>
	the directory with all data files"

	^'https://covidcrt.uber.space/data/'
!

lastDate
	"<Date>
	the most recent date in the data"
	
	^self world lastDate
!

metadata
	"<Dictionary>"
	
	self countries isEmpty ifTrue: [
		^Dictionary new].
	^self countries first metadata
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

serverVersion
	"<String>"
	
	^self metadata at: #softwareVersion ifAbsent: ['']
!

world
	"<Country>
	the root of the country tree"
	
	^self countries first
! !

!CoViD19Application methodsFor: 'data actions'!

getData
	^(self withJson: 'CoViD-19_JHU.json') then: [:json |
		self countries: (Country allFromJHUJson: json)]
!

getGermanData
	^(self withJson: 'CoViD-19_RKI.json') then: [:json |
		| germany |
		germany := self countries detect: [:country | country name = 'Germany'].
		germany parts addAll: ((Country allFromRKIJson: json) sort: [:a :b | a > b])]
!

getUSData
	^(self withJson: 'CoViD-19_US_JHU.json') then: [:json |
		| us |
		us := self countries detect: [:country | country name = 'US'].
		us parts addAll: (Country allFromUSJHUJson: json)]
!

handleError: anExeption
	(ErrorHandler current respondsTo: #debugError:) ifTrue: [
		^ErrorHandler current debugError: anExeption].
	ErrorHandler handleError: anExeption
!

withJson: aFilename
	^(Platform fetch: self dataHome, aFilename) then: #json
!

withJson: aFilename do: aOneArgumentBlock
	(Platform fetch: self dataHome, aFilename)
		then: [:response |
			response json then: [:json | aOneArgumentBlock value: json]]
		catch: [:exception | 
			self handleError: exception]
! !

CoViD19Application class slots: {#current}!

!CoViD19Application class methodsFor: 'accessing'!

current
	"singleton"
	
	^current ifNil: [current := self new]
! !

Object subclass: #Datapoint
	slots: {#date. #confirmed. #deaths}
	package: 'Covid19Model'!

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

!Datapoint methodsFor: 'converting'!

asZero
	"<Datapoint>"
	
	^self class date: self date confirmed: 0 deaths: 0
! !

!Datapoint methodsFor: 'copying'!

copyWithDate: aDate
	"<Datapoint>"
	
	^self class date: aDate confirmed: self confirmed deaths: self deaths
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
	package: 'Covid19Model'!

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
	package: 'Covid19Model'!

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

!JHUDatapoint methodsFor: 'converting'!

asZero
	^self class date: self date confirmed: 0 deaths: 0 recovered: 0
! !

!JHUDatapoint methodsFor: 'copying'!

copyWithDate: aDate
	^self class 
		date: aDate 
		confirmed: self confirmed 
		deaths: self deaths 
		recovered: self recovered
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
	package: 'Covid19Model'!

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

!RKIDatapoint methodsFor: 'converting'!

asZero
	^self class date: self date byAge: Dictionary new
! !

!RKIDatapoint methodsFor: 'copying'!

copyWithDate: aDate
	^self class date: aDate byAge: self byAge
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
	package: 'Covid19Model'!

!Dataseries methodsFor: 'accessing'!

caseSeries
	"<Dataseries>"
	
	^self
!

changeSeries
	"<Dataseries>"
	
	| wst rst last |
	wst := OrderedCollection new writeStream.
	rst := self series readStream.
	last := nil.
	[rst atEnd] whileFalse: [
		| datapoint | 
		datapoint := rst next.
		wst nextPut: (last 
			ifNil: [datapoint]
			ifNotNil: [datapoint changeFrom: last]).
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

	| wst lastSelf lastArg |
	wst := OrderedCollection new writeStream.
	lastSelf := nil.
	lastArg := nil.
	self
		with: aDataseries
		onlyInSelf: [:datapoint | 
			| lastOther |
			lastOther := lastArg ifNil: [datapoint asZero].
			wst nextPut: datapoint + (lastOther copyWithDate: datapoint date). 
			lastSelf := datapoint]
		onlyInArg: [:datapoint | 
			| lastOther |
			lastOther := lastSelf ifNil: [datapoint asZero].
			wst nextPut: datapoint + (lastOther copyWithDate: datapoint date). 
			lastArg := datapoint]
		inBoth: [:datapoint1 :datapoint2 | 
			wst nextPut: datapoint1 + datapoint2.
			lastSelf := datapoint1.
			lastArg := datapoint2].
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

Object subclass: #Dataset
	slots: {#area. #provider. #metadata. #dataseries}
	package: 'Covid19Model'!
!Dataset commentStamp!
A dataset is a time series for an area (country or such) from a provider at a certain time

An area can have multiple datasets from differt providers.!

!Dataset class methodsFor: 'instance creation'!

area: anArea provider: aProvider metadata: aDictionary dataseries: aDataseries
! !

Object subclass: #GeographicArea
	slots: {#name. #series. #properties}
	package: 'Covid19Model'!

!GeographicArea methodsFor: 'accessing'!

caseSeries
	"<Dataseries>"
	
	^self series caseSeries
!

changeSeries
	"<Dataseries>"
	
	^self series changeSeries
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

recreateCharts
	| graphics |
	graphics := '#Graphics' asSilk.
	graphics resetContents.
	graphics << {
		self graphicsHeader.
	 	self casechart.
	 	self changechart.
		Silk DIV: 'id' -> 'Tooltip'}
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

asListItem
	"add html elements to anElement"
	
	^{self emptySpan. self emptySubspan. self asNameSpan. self asValueSpan}
!

asNameSpan
	"<span>
	the name of the list item"
	
	| item |
	item := Silk SPAN: {
		'class' -> 'ListItem'. 
		(Silk SPAN: {'class' -> 'StateName'. self name})}.
	item on: #click bind: [
		('#CountryList' asSilk allAt: '.selected') do: [:selected |
			selected attrAt: 'class' put: 'ListItem'].
		item attrAt: 'class' put: 'ListItem selected'. 
		self showInfo].
	^item
!

asPartListItem
	^self asListItem
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
		(Casechart for: self on: self caseSeries aspects: Casechart currentAspects) html}
!

changechart
	^Silk DIV: {
		'id' -> 'Changechart'.
		(Changechart for: self on: self changeSeries aspects: Changechart currentAspects) html}
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

graphicsHeader
	^Silk DIV << {
		'class' -> 'GraphicsHeader'.
		Silk H2: self name.
		self areaInfo}
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
	package: 'Covid19Model'!

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

asListItem
	"add html elements to anElement"
	
	| plusButton minusButton plusAction minusAction |
	self parts ifEmpty: [
		^super asListItem].
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
		self parts do: [:part | insert << part asPartListItem]].
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
	^{plusButton. self emptySubspan. self asNameSpan. self asValueSpan}
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

asPartListItem
	"list element which is part of another"
	
	| plusAction minusAction plusButton |
	self parts ifEmpty: [
		^{self emptySpan. self emptySubspan. self asSubnameSpan. self asValueSpan}].
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
		self parts do: [:part | insert << part asPartListItem]].
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
	^{self emptySpan. plusButton. self asSubnameSpan. self asValueSpan}.
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
	package: 'Covid19Model'!

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

