Smalltalk createPackage: 'Covid19Model'!
(Smalltalk packageAt: 'Covid19Model' ifAbsent: [ self error: 'Package not created: Covid19Model' ]) imports: {'appTimestamp' -> 'app/timestamp'}!
Object subclass: #CaseCount
	slots: {#confirmed. #deaths. #recovered}
	package: 'Covid19Model'!

!CaseCount methodsFor: 'accessing'!

confirmed
	"<Integer>"

	^confirmed
!

deaths
	"<Integer>"
	
	^deaths
!

recovered
	"<Integer>"
	
	^recovered
! !

!CaseCount methodsFor: 'arithmetic'!

+ aCaseCount
	"<CaseCount>"
	
	^self class 
		confirmed: self confirmed + aCaseCount confirmed
		deaths: self deaths + aCaseCount deaths
		recovered: self recovered + aCaseCount recovered
!

- aCaseCount
	"<CaseCount>"
	
	^self class 
		confirmed: self confirmed - aCaseCount confirmed
		deaths: self deaths - aCaseCount deaths
		recovered: self recovered - aCaseCount recovered
! !

!CaseCount methodsFor: 'initialization'!

initializeConfirmed: aConfirmedInteger deaths: aDeathsInteger recovered: aRecoveredInteger
	confirmed := aConfirmedInteger.
	deaths := aDeathsInteger.
	recovered := aRecoveredInteger
! !

!CaseCount class methodsFor: 'instance creation'!

confirmed: aConfirmedInteger deaths: aDeathsInteger recovered: aRecoveredInteger
	| inst |
	inst := self new.
	inst initializeConfirmed: aConfirmedInteger deaths: aDeathsInteger recovered: aRecoveredInteger.
	^inst
!

fromJson: aJson
	^self 
		confirmed: (aJson at: #c ifAbsent: [0])
		deaths: (aJson at: #d ifAbsent: [0])
		recovered: (aJson at: #r ifAbsent: [0])
!

zero
	^self confirmed: 0 deaths: 0 recovered: 0
! !

Object subclass: #CoViD19Application
	slots: {#world. #sources. #about}
	package: 'Covid19Model'!

!CoViD19Application methodsFor: 'accessing'!

about
	"<Dictionary>
	metadata about the receiver"
	
	^about ifNil: [about := Dictionary new]
!

initialSources
	^Dictionary
		with: 'JHU' -> (Datasource id: 'JHU' url: 'CoViD-19_JHU.json' dataClass: JHUDatapoint)
		with: 'JHUUS' -> (Datasource id: 'JHUUS' url: 'CoViD-19_US_JHU.json' dataClass: JHUUSDatapoint)
		with: 'RKI' -> (Datasource id: 'RKI' url: 'CoViD-19_RKI.json' dataClass: RKIDatapoint)
!

lastDate
	"<Date>
	the most recent date in the data"
	
	^self world lastDate
!

programModificationDate
	"<Date>
	creation timestamp of the 'the.js' file"
	"CoViD19 programModificationDate"
	
	^Date fromMilliseconds: appTimestamp
!

serverModificationDate
	"<Date>"
	
	^self about at: #DataserverTimestamp ifAbsent: [Date now]
!

serverName
	"<String>"
	
	^self about at: #DataserverName ifAbsent: ['(no data)']
!

serverVersion
	"<String>"
	
	^self about at: #DataserverVersion ifAbsent: ['']
!

sources
	"<Dictionary key: String value: Datasource>"
	
	^sources ifNil: [sources := self initialSources]
!

world
	"<Territory>"
	
	^world ifNil: [world := Territory name: 'World' about: nil parts: nil datasets: nil]
! !

!CoViD19Application methodsFor: 'data actions'!

getData	
	self world load: (self sources at: 'JHU') for: self doing: [:worldRoot | 
		(worldRoot partNamed: 'US') load: (self sources at: 'JHUUS') for: self doing: #resetPopulation.
		(worldRoot partNamed: 'Germany') load: (self sources at: 'RKI') for: self doing: [:root | ]]
!

pickMetadataFrom: aDictionary
	"take infos about the application itself from aDictionary.
	The data come from the first JHU data response"
	
	aDictionary at: #softwareName ifPresent: [:string | self about at: #DataserverName put: string].
	aDictionary at: #softwareVersion ifPresent: [:string | self about at: #DataserverVersion put: string].
	aDictionary at: #softwareTimestamp ifPresent: [:string | self about at: #DataserverTimestamp put: (Date fromString: string)].
	aDictionary at: #modificationDate ifPresent: [:string | self about at: #updated put: (Date fromString: string)]
! !

CoViD19Application class slots: {#current}!

!CoViD19Application class methodsFor: 'accessing'!

current
	"singleton"
	
	^current ifNil: [current := self new]
! !

SystemAnnouncement subclass: #ComponentAnnouncement
	slots: {}
	package: 'Covid19Model'!

ComponentAnnouncement subclass: #AppearanceChanged
	slots: {}
	package: 'Covid19Model'!

ComponentAnnouncement subclass: #StructureChanged
	slots: {}
	package: 'Covid19Model'!

Object subclass: #Datapoint
	slots: {#date. #confirmed. #deaths}
	package: 'Covid19Model'!

!Datapoint methodsFor: 'accessing'!

active
	"<Integer>"

	^self confirmed - self deaths
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

maxValue
	"<Integer>"
	
	^self primaryAspects allButFirst inject: (self perform: self primaryAspects first) into: [:max :aspect | 
		max max: (self perform:  aspect)]
!

maxValueForAspects: someAspects
	"<Integer>"
	
	someAspects isEmpty ifTrue: [
		^self maxValue].
	^someAspects allButFirst inject: (self perform: someAspects first) into: [:max :aspect | max max: (self perform:  aspect)]
!

minValue
	"<Integer>"
	
	^self primaryAspects allButFirst inject: (self perform: self primaryAspects first) into: [:min :aspect | 
		min min: (self perform: aspect)]
!

minValueForAspects: someAspects
	"<Integer>"
	
	someAspects isEmpty ifTrue: [
		^self minValue].
	^someAspects allButFirst inject: (self perform: someAspects first) into: [:min :aspect | min min: (self perform:  aspect)]
!

numbers
	"<Array of: Number>"
	
	^self primaryAspects collect: [:selector | self perform: selector]
!

primaryAspects
	"<Array of: Symbol>"
	
	^self subclassResponsibility
!

recovered
	"<Integer>"
	
	^0
!

secondaryAspects
	"<Array of: Symbol>"
	
	^#()
!

tertiaryAspects
	"<Array of: Symbol>"
	
	^#()
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
!

filteredBySecondaryAspects: anAspectGroup
	"<Datapoint>"
	
	^self
!

filteredByTerniaryAspects: anAspectGroup
	"<Datapoint>"
	
	^self
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

!Datapoint methodsFor: 'testing'!

positive
	^self numbers allSatisfy: #positive
! !

!Datapoint class methodsFor: 'accessing'!

dataLabel
	"<String>
	user facing string for selecting the receiver"
	
	^self subclassResponsibility
!

firstLevelSelector
	"<Symbol>
	selector in a json holding the name of the top level"
	
	^self subclassResponsibility
!

secondLevelSelector
	"<Symbol>
	selector in a json holding the name of the second level"
	
	^self subclassResponsibility
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
! !

!Datapoint class methodsFor: 'instances'!

example
	"<Datapoint>"
	
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

!Datapoint class methodsFor: 'services'!

datasetFrom: aSourceString json: aJson meta: aDictionary
	"<Dataset>"
	
	^Dataset 
		source: aSourceString
		meta: aDictionary
		series: (aJson series collect: [:json | self fromJson: json])
!

firstLevelTerritoryAboutFromJson: aJson
	^self territoryAboutFromJson: aJson
!

secondLevelTerritoryAboutFromJson: aJson
	^self territoryAboutFromJson: aJson
!

territoriesFrom: aSourceString json: aJson
	"<Array of: Territory>"
	
	| meta territories |
	meta := aJson meta.
	territories := OrderedCollection new.
	(aJson data groupedBy: self firstLevelSelector) keysAndValuesDo: [:name :jsons |
		territories add: (jsons size = 1 
			ifTrue: [
				self territory: name from: aSourceString json: jsons first meta: meta]
			ifFalse: [
				self 
					territory: name 
					parts: (jsons collect: [:json |
						self territory: (json at: self secondLevelSelector) from: aSourceString json: json meta: meta])
					fromJson: jsons first])].
	^territories
!

territory: aString from: aSourceString json: aJson meta: aDictionary
	"<Territory>"
	
	^Territory 
		name: aString 
		about: (self secondLevelTerritoryAboutFromJson: aJson)
		dataset: (self datasetFrom: aSourceString json: aJson meta: aDictionary)
!

territory: aString parts: someTerritories fromJson: aJson
	"<Territory>"
	
	^Territory 
		name: aString 
		about: (self firstLevelTerritoryAboutFromJson: aJson)
		parts: someTerritories
!

territoryAboutFromJson: aJson
	^Dictionary new
! !

Datapoint subclass: #JHUDatapoint
	slots: {#recovered}
	package: 'Covid19Model'!

!JHUDatapoint methodsFor: 'accessing'!

active
	^self confirmed - self recovered - self deaths
!

primaryAspects
	^#(#confirmed #recovered #deaths #active)
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

!JHUDatapoint class methodsFor: 'accessing'!

dataLabel
	^'World data'
!

firstLevelSelector
	^#country
!

secondLevelSelector
	^#state
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
! !

!JHUDatapoint class methodsFor: 'instances'!

example
	"JHUDatapoint example"
	
	^self 
		date: (Date d: 11 m: 4 y: 2020) 
		confirmed: 124908
		deaths: 2736
		recovered: 57400
!

zero
	^self 
		date: (Date d: 1 m: 1 y: 2020) 
		confirmed: 0 
		deaths: 0 
		recovered: 0
! !

Datapoint subclass: #JHUUSDatapoint
	slots: {}
	package: 'Covid19Model'!

!JHUUSDatapoint methodsFor: 'accessing'!

primaryAspects
	^#(#confirmed #deaths)
! !

!JHUUSDatapoint methodsFor: 'arithmetic'!

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

!JHUUSDatapoint class methodsFor: 'accessing'!

dataLabel
	^'US data'
!

firstLevelSelector
	^#state
!

secondLevelSelector
	^#county
! !

!JHUUSDatapoint class methodsFor: 'instance creation'!

fromJson: aJson
	^self 
		date: (self dateFromJson: aJson date)
		confirmed: (aJson at: #c ifAbsent: [0])
		deaths: (aJson at: #d ifAbsent: [0])
! !

!JHUUSDatapoint class methodsFor: 'instances'!

example
	"JHUUSDatapoint example"
	
	^self 
		date: (Date d: 11 m: 4 y: 2020) 
		confirmed: 181026
		deaths: 8627
! !

!JHUUSDatapoint class methodsFor: 'services'!

territoryAboutFromJson: aJson
	^#{#uid -> aJson uid. 
		#population -> aJson population}
! !

Datapoint subclass: #RKIDatapoint
	slots: {#byAge. #caseCount}
	package: 'Covid19Model'!
!RKIDatapoint commentStamp!
Datapoint for RKI data

A dictionary `byAge` holds the cases by age group in another dictionary keyed by sex.

`caseCount` is a cache for thew total numbers!

!RKIDatapoint methodsFor: 'accessing'!

active
	^self confirmed - self recovered - self deaths
!

byAge
	"<Dictionary key: String value: Integer>"
	
	^byAge
!

caseCount
	"<CaseCount>"
	
	^caseCount ifNil: [
		caseCount := self byAge values inject: CaseCount zero into: [:sum :sexDict |
			sexDict values  inject: sum into: [:all :count | 
				all + count]]]
!

confirmed
	^self caseCount confirmed
!

deaths
	^self caseCount deaths
!

primaryAspects
	^#(#confirmed #recovered #deaths #active)
!

recovered
	^self caseCount recovered
!

secondaryAspects
	^self byAge keys
!

tertiaryAspects
	^self byAge values inject: Set new into: [:set :ageDict |
		set addAll: ageDict keys.
		set]
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
			newSexDict at: sex put: (newSexDict at: sex ifAbsent: [CaseCount zero]) + count].
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
			newSexDict at: sex put: (newSexDict at: sex ifAbsent: [CaseCount zero]) - count].
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
!

filteredBySecondaryAspects: anAspectGroup
	| dict |
	dict := Dictionary new.
	anAspectGroup selectedAspects do: [:aspect |
		(self byAge includesKey: aspect) ifTrue: [
			dict at: aspect put: (self byAge at: aspect)]].
	^self class date: self date byAge: dict
!

filteredByTerniaryAspects: anAspectGroup
	| newAgeDict |
	newAgeDict := Dictionary new.
	self byAge keys do: [:age |
		| sexDict newSexDict |
		sexDict := self byAge at: age.
		newSexDict := Dictionary new.
		anAspectGroup selectedAspects do: [:aspect |
			(sexDict includesKey: aspect) ifTrue: [
				newSexDict at: aspect put: (sexDict at: aspect)]].
		newSexDict ifNotEmpty: [
			newAgeDict at: age put: newSexDict]].
	^self class date: self date byAge: newAgeDict
! !

!RKIDatapoint methodsFor: 'initialization'!

initializeDate: aDate byAge: aByAgeDictionary
	date := aDate.
	byAge := aByAgeDictionary
! !

!RKIDatapoint class methodsFor: 'accessing'!

dataLabel
	^'German data'
!

firstLevelSelector
	^#bundesland
!

secondLevelSelector
	^#landkreis
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
			dict at: sex put: (CaseCount fromJson: value)].
		newByAge at: age put: dict].
	^self date: (self dateFromJson: aJson date) byAge: newByAge
! !

!RKIDatapoint class methodsFor: 'instances'!

example
	"RKIDatapoint example"
	
	^self 
		date: (Date d: 11 m: 4 y: 2020) 
		byAge: Dictionary new
!

zero
	^self 
		date: (Date d: 1 m: 1 y: 2020) 
		byAge: Dictionary new
! !

!RKIDatapoint class methodsFor: 'services'!

firstLevelTerritoryAboutFromJson: aJson
	^#{#id -> aJson idBundesland}
!

secondLevelTerritoryAboutFromJson: aJson
	^#{#id -> aJson idLandkreis}
! !

Object subclass: #Dataset
	slots: {#source. #about. #series}
	package: 'Covid19Model'!
!Dataset commentStamp!
A dataset is a date series of datapoints for a territory from a provider at a certain time

The `series` is keyed by `date` representing a *day* (not a timestamp).
The datapoints in `series` are ordered from the frist date at the beginning and the last at the end of the collection.

The datapoints contain the current accumulated numbers.
Therefore the values are growing monotonously.

Adding two instances results in a new instance with both series added. For missing entries in one series, the previous value of that series is used (not zero!!).!

!Dataset methodsFor: 'accessing'!

about
	"<Dictionary>
	metadata about the receiver"
	
	^about ifNil: [Dictionary new]
!

dataDateString
	^(self about at: #updated ifAbsent: [nil])
		ifNotNil: #asLocaleString
		ifNil: [self lastDate asLocaleDateString]
!

firstDate
	"<Date>"
	
	^self series first date
!

last
	"<Datapoint>"
	
	^self series last
!

lastDate
	"<Date>"
	
	^self last date
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

lastValueOf: anAspect
	"<Integer>"
	
	self isEmpty ifTrue: [
		^0].
	^[self last perform: anAspect] on: MessageNotUnderstood do: [:ex | ex return: 0]
!

primaryAspects
	"<Array of: Symbol>
	selectors of datapoint instances in the series which may be shown"
	
	^self last primaryAspects
!

secondaryAspects
	"<Array of: Symbol>
	selectors of datapoint instances in the series which may be shown"
	
	^(self series inject: Set new into: [:set :datapoint | set addAll: datapoint secondaryAspects. set]) asArray sorted
!

series
	"<Array of: Datapoint>
	datapoints for one territory from one provider"
	
	^series ifNil: [#()]
!

source
	"<String>
	the id of the datasource from where I come"
	
	^source
!

tertiaryAspects
	"<Array of: Symbol>
	selectors of datapoint instances in the series which may be shown"
	
	^(self series inject: Set new into: [:set :datapoint | set addAll: datapoint tertiaryAspects. set]) asArray sorted
! !

!Dataset methodsFor: 'arithmetic'!

+ aDataset
	"<Dataset>"
	
	| newAbout |
	self isEmpty ifTrue: [
		^aDataset].
	aDataset isEmpty ifTrue: [
		^self].
	newAbout := self about copy.
	newAbout at: #updated
		ifPresent: [:updateTimestamp |
			aDataset about at: #updated ifPresent: [:newUpdateTimestamp |
				newAbout at: #updated put: (updateTimestamp max: newUpdateTimestamp)]]
		ifAbsent: [
			aDataset about at: #updated ifPresent: [:newUpdateTimestamp |
				newAbout at: #updated put: newUpdateTimestamp]].
	^self class source: self source about: newAbout series: (self plusSeries: aDataset)
!

plusSeries: aDataset
	"<Array of: Datapoint>"
	
	| wst lastSelf lastArg |
	wst := OrderedCollection new writeStream.
	lastSelf := nil.
	lastArg := nil.
	self
		with: aDataset
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
	^wst contents
!

with: aDataset onlyInSelf: onlyInSelfBlock onlyInArg: onlyInArgBlock inBoth: inBothBlock
	"iterates throu both collections of datapoints and processes them in date order"
	
	| rstSelf rstArg |
	rstSelf := self series readStream.
	rstArg := aDataset series readStream.
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

!Dataset methodsFor: 'copying'!

changeDataset
	"<Dataset>"
	
	| last |
	last := self series first.
	^self copyWithSeries: {last}, (self series collect: [:datapoint |
			[datapoint changeFrom: last] ensure: [
				last := datapoint]])
!

copyWithSeries: someDatapoints
	"<Dataset>"
	
	^self class source: self source about: self about series: someDatapoints
!

extendedTo: aDate
	"<Dataset>"
	
	| extension last |
	last := self last.
	extension := (self lastDate nextDay to: aDate) collect: [:date |
		last copyWithDate: date].
	^self copyWithSeries: self series, extension
!

filteredBySecondaryAspects: anAspectGroup
	"<Dataset>"
	
	anAspectGroup nothingSelected ifTrue: [
		^self].
	^self copyWithSeries: (self series collect: [:datapoint |
		datapoint filteredBySecondaryAspects: anAspectGroup])
!

filteredByTerniaryAspects: anAspectGroup
	"<Dataset>"
	
	anAspectGroup nothingSelected ifTrue: [
		^self].
	^self copyWithSeries: (self series collect: [:datapoint |
		datapoint filteredByTerniaryAspects: anAspectGroup])
! !

!Dataset methodsFor: 'initialization'!

initializeSource: aSourceString about: aDictionary series: someDatapoints
	source := aSourceString.
	about := aDictionary.
	series := someDatapoints
! !

!Dataset methodsFor: 'printing'!

printOn: aStream
	aStream 
		nextPutAll: self class name;
		nextPut: $[;
		nextPutAll: self source;
		nextPutAll: ', ';
		nextPutAll: self series size printString;
		nextPut: $]
! !

!Dataset methodsFor: 'testing'!

isEmpty
	^self series isEmpty
!

positive
	"<Boolean>
	true, if all data are positive"
	
	^self series allSatisfy: #positive
! !

!Dataset class methodsFor: 'instance creation'!

aboutFrom: aDictionary
	"<Dictionary>"
	
	| dict |
	dict := Dictionary new.
	dict at: #updated put: (Date fromString: (aDictionary at: #modificationDate)).
	^dict
!

source: aSourceString about: aDictionary series: someDatapoints
	| inst |
	inst := self new.
	inst initializeSource: aSourceString about: aDictionary series: someDatapoints.
	^inst
!

source: aSourceString meta: aDictionary series: someDatapoints
	^self source: aSourceString about: (self aboutFrom: aDictionary) series: someDatapoints
! !

!Dataset class methodsFor: 'instances'!

example
	"Dataset example"
	
	^self 
		source: 'JHU'
		about: #{} 
		series: ((OrderedCollection new)
			add: (JHUDatapoint date: (Date d: 1 m: 4 y: 2020) confirmed: 20 deaths: 3 recovered: 6);
			add: (JHUDatapoint date: (Date d: 2 m: 4 y: 2020) confirmed: 42 deaths: 4 recovered: 11);
			add: (JHUDatapoint date: (Date d: 3 m: 4 y: 2020) confirmed: 56 deaths: 6 recovered: 18);
			add: (JHUDatapoint date: (Date d: 4 m: 4 y: 2020) confirmed: 83 deaths: 8 recovered: 27);
			add: (JHUDatapoint date: (Date d: 5 m: 4 y: 2020) confirmed: 108 deaths: 8 recovered: 40);
			add: (JHUDatapoint date: (Date d: 6 m: 4 y: 2020) confirmed: 154 deaths: 9 recovered: 51);
			add: (JHUDatapoint date: (Date d: 7 m: 4 y: 2020) confirmed: 185 deaths: 9 recovered: 58);
			add: (JHUDatapoint date: (Date d: 8 m: 4 y: 2020) confirmed: 227 deaths: 14 recovered: 82);
			add: (JHUDatapoint date: (Date d: 9 m: 4 y: 2020) confirmed: 276 deaths: 21 recovered: 113);
			yourself)
!

examplePlus5Days
	"Dataset examplePlus5Days"
	
	^self 
		source: 'JHU'
		about: #{} 
		series: ((OrderedCollection new)
			add: (JHUDatapoint date: (Date d: 6 m: 4 y: 2020) confirmed: 20 deaths: 3 recovered: 6);
			add: (JHUDatapoint date: (Date d: 7 m: 4 y: 2020) confirmed: 42 deaths: 4 recovered: 11);
			add: (JHUDatapoint date: (Date d: 8 m: 4 y: 2020) confirmed: 56 deaths: 6 recovered: 18);
			add: (JHUDatapoint date: (Date d: 9 m: 4 y: 2020) confirmed: 83 deaths: 8 recovered: 27);
			add: (JHUDatapoint date: (Date d: 10 m: 4 y: 2020) confirmed: 108 deaths: 8 recovered: 40);
			add: (JHUDatapoint date: (Date d: 11 m: 4 y: 2020) confirmed: 154 deaths: 9 recovered: 51);
			add: (JHUDatapoint date: (Date d: 12 m: 4 y: 2020) confirmed: 185 deaths: 9 recovered: 58);
			add: (JHUDatapoint date: (Date d: 13 m: 4 y: 2020) confirmed: 227 deaths: 14 recovered: 82);
			add: (JHUDatapoint date: (Date d: 14 m: 4 y: 2020) confirmed: 276 deaths: 21 recovered: 113);
			yourself)
!

zero
	^self new
! !

!Dataset class methodsFor: 'services'!

totalOfAll: someDatasets
	"<Dataset>"
	
	^someDatasets inject: self zero into: [:sum :dataset | sum + dataset]
! !

Object subclass: #Datasource
	slots: {#id. #url. #dataClass. #about. #updated}
	package: 'Covid19Model'!

!Datasource methodsFor: 'accessing'!

about
	"<Dictionary>
	metadata about the receiver"
	
	^about ifNil: [about := Dictionary new]
!

dataClass
	"<Datapoint class>
	the specific data class for this source"

	^dataClass
!

dataHome
	"<String>
	the directory with all data files"

	^'https://covidcrt.uber.space/data/'
!

dataLabel
	"<String>
	user facing string for selecting a datasource"

	^self dataClass dataLabel
!

id
	"<String>
	short unique name of the receiver.
	Used as key for the #datasources dictionary of the application"
	
	^id
!

provider
	"<String>"
	
	^self about at: #ProviderName ifAbsent: ['(no provider)']
!

updated
	"<Date>
	timestamp of the last update of the receiver"
	
	^updated
!

url
	"<String>
	the json file"
	
	^url
! !

!Datasource methodsFor: 'actions'!

getJson
	"<Promise>"
	
	^((Platform fetch: self dataHome, self url) then: #json) then: [:json |
		self pickMetadataFrom: json meta.
		json]
!

pickMetadataFrom: aDictionary
	aDictionary at: #providerShortname ifPresent: [:string | self about at: #ProviderId put: string].
	aDictionary at: #providerName ifPresent: [:string | self about at: #ProviderName put: string].
	aDictionary at: #providerUrl ifPresent: [:string | self about at: #ProviderUrl put: string].
	aDictionary at: #url ifPresent: [:string | self about at: #DataUrl put: string].
	aDictionary at: #modificationDate ifPresent: [:string | self about at: #updated put: (Date fromString: string)]
!

rootTerritoryFromJson: aJson
	"<Territory>
	a synthetic territory with all top level territories from aJson as parts.
	Used to sort the parts and sum up the datasets"
	
	^Territory name: '' about: nil parts: (self dataClass territoriesFrom: self id json: aJson)
! !

!Datasource methodsFor: 'initialization'!

initializeId: anIdString url: anUrlString dataClass: aDatapointClass
	id := anIdString.
	url := anUrlString.
	dataClass := aDatapointClass.
	updated := Date now
! !

!Datasource methodsFor: 'printing'!

printOn: aStream
	aStream 
		nextPutAll: self class name;
		space;
		nextPutAll: self id;
		nextPut: $(;
		nextPutAll: self dataClass name asString;
		nextPutAll: ' ';
		nextPutAll: self url;
		nextPut: $)
! !

!Datasource class methodsFor: 'instance creation'!

id: anIdString url: anUrlString dataClass: aDatapointClass
	| inst |
	inst := self new.
	inst initializeId: anIdString url: anUrlString dataClass: aDatapointClass.
	^inst
! !

Object subclass: #Territory
	slots: {#name. #about. #datasets. #parts. #announcer. #loader}
	package: 'Covid19Model'!
!Territory commentStamp!
A country, state, county, even the world is modelled as territory with parts.
The world is the root of the hierarchy of territories with countries as parts. (Continents maybe next).

A territory has one or more `datasets` with provider information and a time series of datapoints. When a territory has `parts`, its datasets are the sum of the datasets of the parts.

More specific information about the territory is available as dictionary in `about`.!

!Territory methodsFor: 'accessing'!

about
	"<Dictionary>
	metadata about the receiver"
	
	^about ifNil: [about := Dictionary new]
!

announcer
	"<Announcer>
	holds all subscriptions to changes of the receiver"
	
	^announcer ifNil: [announcer := Announcer new]
!

datasetAt: aString
	"<Dataset | nil>"
	
	^self datasets detect: [:dataset | dataset source = aString] ifNone: [nil]
!

datasets
	"<SequenceableCollection of: Dataset>
	datasets from different providers"
	
	^datasets ifNil: [datasets := OrderedCollection new]
!

lastConfirmed
	"<Integer>"
	
	self datasets isEmpty ifTrue: [
		^0].
	^self datasets first lastValueOf: #confirmed
!

lastDate
	"<Date>"
	
	^self datasets allButFirst inject: self datasets first lastDate into: [:max :dataset | max max: dataset lastDate]
!

loader
	"<Promise | nil>
	primise to load data"
	
	^loader
!

name
	"<String>
	the name from data"
	
	^name
!

partNamed: aString
	"<Territory | nil>"
	
	^self parts detect: [:part | part name = aString] ifNone: [nil]
!

parts
	"<OrderedCollection of: Territory>
	direct children of the receiver"
	
	^parts ifNil: [parts := OrderedCollection new]
!

population
	"<Integer>"
	
	^self about at: #population ifAbsent: [
		self hasParts 
			ifTrue: [
				self about at: #population put: (self parts inject: 0 into: [:sum :territory | sum + territory population]).
				self about at: #population]
			ifFalse: [0]]
! !

!Territory methodsFor: 'actions'!

load: aDatasource for: anApplication doing: oneArgumentBlock
	loader := aDatasource getJson then: [:json |
		| root |
		anApplication pickMetadataFrom: json meta.
		root := aDatasource rootTerritoryFromJson: json.
		oneArgumentBlock value: root.
		parts := root parts.
		self datasets add: root datasets first.
		loader := nil.
		self announcer announce: StructureChanged new]
! !

!Territory methodsFor: 'comparing'!

< aTerritory
	^self lastConfirmed < aTerritory lastConfirmed
!

<= aTerritory
	^self lastConfirmed <= aTerritory lastConfirmed
!

> aTerritory
	^self lastConfirmed > aTerritory lastConfirmed
!

>= aTerritory
	^self lastConfirmed >= aTerritory lastConfirmed
! !

!Territory methodsFor: 'initialization'!

initializeName: aString about: aDictionary parts: someTerritories datasets: someDatasets
	name := aString.
	(aDictionary notNil and: [
	aDictionary notEmpty]) ifTrue: [about := aDictionary].
	(someTerritories notNil and: [
	someTerritories notEmpty]) ifTrue: [parts := someTerritories].
	(someDatasets notNil and: [
	someDatasets notEmpty]) ifTrue: [datasets := someDatasets]
!

resetPopulation
	self hasParts ifFalse: [
		^self].
	self about removeKey: #population ifAbsent: [].
	self parts do: #resetPopulation
! !

!Territory methodsFor: 'printing'!

printOn: aStream
	aStream 
		nextPutAll: self class name;
		nextPut: $(;
		nextPutAll: self name;
		nextPut: $)
! !

!Territory methodsFor: 'testing'!

hasParts
	^self parts notEmpty
!

isLoading
	^self loader notNil
! !

!Territory class methodsFor: 'instance creation'!

name: aString about: aDictionary dataset: aDataset
	^self 
		name: aString 
		about: aDictionary 
		parts: #()
		dataset: aDataset
!

name: aString about: aDictionary parts: someTerritories
	^self 
		name: aString 
		about: aDictionary 
		parts: someTerritories
		dataset: (Territory totalDatasetFromAll: someTerritories)
!

name: aString about: aDictionary parts: someTerritories dataset: aDataset
	^self 
		name: aString 
		about: aDictionary 
		parts: (someTerritories sort: [:a :b | a > b])
		datasets: {aDataset}
!

name: aString about: aDictionary parts: someTerritories datasets: someDatasets
	| inst |
	inst := self new.
	inst initializeName: aString about: aDictionary parts: someTerritories datasets: someDatasets.
	^inst
! !

!Territory class methodsFor: 'services'!

totalDatasetFromAll: someTerritories
	"<Dataset>
	total from the only dataset"
	
	^Dataset totalOfAll: (someTerritories collect: [:territory | territory datasets first])
! !

!AssociativeCollection methodsFor: '*Covid19Model'!

= anAssocitativeCollection
	^ self class = anAssocitativeCollection class and: [
	self size = anAssocitativeCollection size and: [
	self keys asSet = anAssocitativeCollection keys asSet and: [
	self keys allSatisfy: [:key | (self at: key) = (anAssocitativeCollection at: key)]]]]
! !

!DictionaryTest methodsFor: '*Covid19Model'!

testEqual
	self assert: (Dictionary with: 'a' -> 1 with: 'b' -> 2) equals: (Dictionary with: 'b' -> 2 with: 'a' -> 1)
! !

!HashedCollectionTest methodsFor: '*Covid19Model'!

testEqual
	self assert: #{'a' -> 1. 'b' -> 2} equals: #{'b' -> 2. 'a' -> 1}
! !

