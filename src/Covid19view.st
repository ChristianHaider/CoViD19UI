Smalltalk createPackage: 'Covid19view'!
(Smalltalk packageAt: 'Covid19view' ifAbsent: [ self error: 'Package not created: Covid19view' ]) imports: {'./Covid19Model'. 'mini-mvp/MiniMVP'. 'silk/Silk'}!
Object subclass: #CoViD19
	slots: {#model. #tree. #graphics. #version}
	package: 'Covid19view'!
!CoViD19 commentStamp!
The one page web application fro browsing CoViD-19 data!

!CoViD19 methodsFor: 'accessing'!

graphics
	"<Graphics>
	the graphics of a territory"
	
	^graphics ifNil: [
		graphics := Graphics on: self tree in: (Silk DIV: 'id' -> 'Graphics')]
!

model
	"the model with all data"
	
	^model ifNil: [model := CoViD19Application current]
!

tree
	"<Tree>
	the world tree"
	
	^tree ifNil: [
		| component |
		component := Tree on: self model world in: (Silk DIV: 'id' -> 'WorldTree').
		component announcer on: TerritorySelected send: #territorySelected to: self.
		component announcer on: DataReceived send: #dataReceived to: self.
		tree := component]
!

version
	"<Version>
	shows a version with title, name and date"
	
	^version ifNil: [
		version := SilkLeafPresenter shows: [self model] in: Silk SPAN do: [:application |
			{Silk SPAN: {'class' -> 'VersionLabel'. 'Data collector:'}.
			Silk SPAN: {'class' -> 'VersionName'. Silk SPAN: application serverName, ' ', application serverVersion}.
			Silk SPAN: {'class' -> 'VersionDate'. application serverModificationDate asLocaleString}}]]
! !

!CoViD19 methodsFor: 'events'!

dataReceived
	self version refresh
!

territorySelected
	self graphics refresh
! !

!CoViD19 methodsFor: 'presenting'!

asSilk
	^Silk DIV: {
		'id' -> 'Contents'. 
		self header.
		self tree frame.
		self graphics frame.
		self footer}
!

augmentPage
	Silk new << self asSilk.
	self tree refresh.
	self model getData
!

footer
	^Silk FOOTER: {
		self softwareVersionInfo.
		self version refresh frame}
!

header
	^Silk HEADER: {
		Silk H1: {
			Silk DIV: 'CoViD-19 Charts'. 
			Silk DIV: {'class' -> 'Subtitle'. 'Do not trust the numbers!!'}}}
!

softwareNameAnchor
	^Silk A: {'CoViD-19 Charts'.
		'href' -> 'https://github.com/ChristianHaider/CoViD19UI'.
		'target' -> '_blank'.
		'rel' -> 'noopener'}
!

softwareVersionInfo
	^Silk SPAN: {
		Silk SPAN: {'class' -> 'VersionLabel'. 'Browser app:'}.
		Silk SPAN: {'class' -> 'VersionName'. self softwareNameAnchor}.
		Silk SPAN: {'class' -> 'VersionDate'. self model programModificationDate asLocaleString}}
! !

CoViD19 class slots: {#current}!

!CoViD19 class methodsFor: 'accessing'!

current
	  ^current ifNil: [current := self new]
! !

!CoViD19 class methodsFor: 'starting'!

start
	  self current augmentPage
! !

Object subclass: #Component
	slots: {#frame. #model. #announcer}
	package: 'Covid19view'!
!Component commentStamp!
UI element presenting a model as Silk object

The `model` is a domain object with an announcer. A component subscribes to changes of the domain object. 

Two kind of changes are implemented by default: `#structureChanged` and `#appearanceChanged`.

A component has `parts` in which child components are held.

A component has a `frame` holding the Silk into which it is inserted with `#asSilk`. This allows for `#refresh`.!

!Component methodsFor: 'accessing'!

announcer
	"<Announcer>
	holds all subscriptions to changes of the receiver"
	
	^announcer ifNil: [announcer := Announcer new]
!

frame
	"<Silk>
	The HTML element into which the receiver inserted"
	
	^frame
!

frame: aSilk
	frame := aSilk
!

keyFor: anAspect
	"<String>
	String for a setting in the web storage"
	
	^self class name asString, '.Aspect.', anAspect asString
!

localAt: anAspect
	"<Object | nil>
	Global setting in the web local storage"
	
	^(self keyFor: anAspect) settingValue
!

localAt: anAspect ifAbsent: anAbsentBlock
	"<Object>
	Global setting in the web local storage"
	
	^(self keyFor: anAspect) settingValue ifNil: anAbsentBlock
!

localAt: anAspect put: anObject
	^(self keyFor: anAspect) settingValue: anObject
!

model
	"<Object>
	Object responding to #announcer"
	
	^model
!

sessionAt: aKey
	"<String | nil>
	the value at aKey in the web session storage"
	
	^sessionStorage getItem: aKey
!

sessionAt: aKey ifAbsent: anAbsentBlock
	"<String>
	the value at aKey in the web session storage"
	
	^(self sessionAt: aKey) ifNil: anAbsentBlock
!

sessionAt: aKey put: aString
	sessionStorage setItem: aKey to: aString
!

sessionKeys
	"<Array of: Symbol>"
	
	^(0 to: sessionStorage length - 1) collect: [:index | sessionStorage key: index]
! !

!Component methodsFor: 'actions'!

hide
	(self frame asDomNode at: 'style') at: #display put: 'none'
!

refresh
	self model ifNil: [
		self hide.
		^self].
	self show.
	self frame resetContents.
	self frame << self asSilk
!

show
	(self frame asDomNode at: 'style') removeProperty: 'display'
! !

!Component methodsFor: 'initialization'!

initializeFrame: aSilk model: aModel
	frame := aSilk.
	model := aModel
!

initializeModel: aModel
	model := aModel
! !

!Component methodsFor: 'presenting'!

asSilk
	"<Silk>
	Web element to be inserted into the #frame"
	
	^self subclassResponsibility
! !

!Component class methodsFor: 'instance creation'!

frame: aSilk model: aModel
	| inst |
	inst := self new.
	inst initializeFrame: aSilk model: aModel.
	^inst
!

on: aModel in: aSilk
	^self frame: aSilk model: aModel
! !

Component subclass: #Barchart
	slots: {#valuescale. #datescale}
	package: 'Covid19view'!
!Barchart commentStamp!
A bar chart with decent date and value scale.
Datapoints are shown as bars with a tooltip showing details

The model of the chart component is a Graphics object holding all parameters used!

!Barchart methodsFor: 'accessing'!

aspects
	"<Array of: Symbol>
	selectors of datapoint instances in the series.
	When the list is empty, all aspects are shown"
	
	^self model aspects
!

datapoints
	"<Array of: Datapoint>"
	
	^self dataset series
!

dataset
	"<Dataset>"
	
	^self subclassResponsibility
!

infoValueString: aNumber
	"<String>
	the number on a button"
	
	^aNumber separatedThousandsString
! !

!Barchart methodsFor: 'accessing datescale'!

datescale
	"<Datescale>"
	
	^datescale ifNil: [
		datescale := Datescale from: self firstDate to: self model lastDate]
!

days
	"<Integer>"
	
	^self datescale days
!

firstDate
	"<Date>"
	
	^Date fromMilliseconds: self dataset firstDate asMilliseconds - (24 * 60 * 60 * 1000)
!

lastDate
	"<Date>"
	
	^self datescale to
!

monthnameAt: anInteger
	"<String>"
	
	| index |
	index := anInteger.
	index > 12 ifTrue: [
		index := 1].
	^#('January' 'February' 'March' 'April' 'May' 'June' 'July' 'August' 'September' 'October' 'November' 'December') at: index
!

nextMonthnameAt: aDate
	"<String>"
	
	^self monthnameAt: aDate month + 1
! !

!Barchart methodsFor: 'accessing valuescale'!

linearValuescale
	"<LinearValuescale>"
	
	| min max |
	min := self minValue.
	max := self maxValue.
	(min isZero and: [
	max isZero]) ifTrue: [
		max := 10].
	^LinearValuescale from: min to: max
!

logarithmicValuescale
	"<LogarithmicValuescale>"
	
	self maxValue <= 1 ifTrue: [
		^self linearValuescale].
	^LogarithmicValuescale from: 1 to: self maxValue
!

maxValue
	"<Integer>"
	
	| datapoints |
	datapoints := self datapoints.
	^datapoints allButFirst inject: (datapoints first maxValueForAspects: self aspects) into: [:max :datapoint | 
		max max: (datapoint maxValueForAspects: self aspects)]
!

minValue
	"<Integer>"
	
	| datapoints |
	datapoints := self datapoints.
	^datapoints allButFirst inject: (datapoints first minValueForAspects: self aspects) into: [:min :datapoint | 
		min min: (datapoint minValueForAspects: self aspects)]
!

newValuescale
	"<Valuescale>"
	
	self isLogarithmic ifTrue: [
		^self logarithmicValuescale].
	^self linearValuescale
!

stringLogarithmic: aBoolean
	"<String>"
	
	^aBoolean
		ifTrue: ['lin']
		ifFalse: ['log']
!

valuescale
	"<Valuescale>"
	
	^valuescale ifNil: [valuescale := self newValuescale]
! !

!Barchart methodsFor: 'actions'!

refresh
	valuescale := nil.
	datescale := nil.
	super refresh
!

toggleValuescale
	self class logarithmic: self class logarithmic not.
	self refresh
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
		self tooltipClass: 'deaths' label: 'deaths' value: aDatapoint deaths.
		self tooltipClass: 'active' label: 'active' value: aDatapoint active}
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
	
	^3
!

chartRight
	"<Number>"
	
	^170
!

chartTop
	"<Number>"
	
	^4
!

chartWidth
	"<Number>"
	
	^self chartRight - self chartLeft
!

datescaleHeight
	"<Number>"
	
	^self viewHeight - self chartBottom
!

valuescaleWidth
	"<Number>"
	
	^self viewWidth - self chartRight
!

viewHeight
	"<Number>
	the height of the view(Box) in logical units"
	
	^100
!

viewWidth
	"<Number>
	the width of the view(Box) in logical units"
	
	^200
!

xAt: aDate
	"<Number>
	x value in the svg coordinate system"
	
	^self chartLeft + ((self datescale at: aDate) * self chartWidth)
!

yAt: aDomainValue
	"<Number>
	y value in the svg coordinate system"
	
	self valuescale isLogarithmic ifTrue: [
		| offset zeroOffset |
		offset := 5.
		zeroOffset := 0.
		self dataArePositive ifFalse: [
			zeroOffset := offset].
		aDomainValue negative ifTrue: [
			^self chartBottom].
		aDomainValue < 1 ifTrue: [
			^self chartBottom - zeroOffset].
		offset := offset + zeroOffset.
		^(self chartBottom - offset) - ((self valuescale at: aDomainValue) * (self chartHeight - offset))].
	^self chartBottom - ((self valuescale at: aDomainValue) * self chartHeight)
! !

!Barchart methodsFor: 'presenting'!

asSilk
	^{	Silk DIV: {
			'class' -> 'ChartHeader'.
			Silk SPAN: {
				'class' -> 'ChartLegend'.
				self legendFor: #confirmed.
				self legendFor: #recovered.
				self legendFor: #deaths.
				self legendFor: #active}}.
		self svg}
!

bar: anAspectSymbol forDatapoint: aDatapoint at: aBarLeft width: aWidth
	"<g>"
	
	| value zero top bottom |
	value := self yAt: (aDatapoint perform: anAspectSymbol).
	zero := self yAt: 0.
	top := value.
	bottom := zero.
	top > bottom ifTrue: [
		top := zero.
		bottom := value].
	^SVG RECT: {
		'class' -> anAspectSymbol asString.
		'x' -> aBarLeft. 'y' -> top. 
		'width' -> aWidth. 'height' -> (bottom - top)}
!

barForDatapoint: aDatapoint at: aBarLeft width: aWidth
	"<g>"
	
	| zero bars g |
	zero := self yAt: 0.
	bars :=OrderedCollection new.
	(self aspects isEmpty or: [
	self aspects includes: #confirmed]) ifTrue: [
		bars add: (self bar: #confirmed forDatapoint: aDatapoint at: aBarLeft width: aWidth)].
	self aspects isEmpty ifTrue: [
		bars add: (self bar: #decided forDatapoint: aDatapoint at: aBarLeft width: aWidth)].
	(self aspects includes: #recovered) ifTrue: [
		bars add: (self bar: #recovered forDatapoint: aDatapoint at: aBarLeft width: aWidth)].
	(self aspects includes: #active) ifTrue: [
		bars add: (self bar: #active forDatapoint: aDatapoint at: aBarLeft width: aWidth)].
	(self aspects isEmpty or: [
	self aspects includes: #deaths]) ifTrue: [
		bars add: (self bar: #deaths forDatapoint: aDatapoint at: aBarLeft width: aWidth)].
	g := SVG G: {
		'class' -> 'Bar'.
		bars}.
	g on: #mouseover bind: [:event | self mouseover: event datapoint: aDatapoint].
	g on: #mouseout bind: [:event | self mouseout: event datapoint: aDatapoint].
	^g
!

barForDatapoint: aDatapoint width: aWidth
	"<g>"
	
	^self 
		barForDatapoint: aDatapoint 
		at: ((self xAt: aDatapoint date) - aWidth) 
		width: aWidth
!

chartArea
	"the chart"
	
	| chartArea barWidth |
	chartArea := SVG G: {
		'class' -> 'GraphicsArea'.
		SVG RECT: {
			'x' -> self chartLeft. 'y' -> self chartTop. 
			'width' -> self chartWidth. 'height' -> self chartHeight}}.
	barWidth := self chartWidth / self days.
	self datapoints do: [:datapoint |
		chartArea << (self barForDatapoint: datapoint width: barWidth)].
	^chartArea
!

dateAxis
	| dateAxis lastOfMonths |
	dateAxis := SVG G: {
		'class' -> 'DateAxis'.
		'clip-path' -> 'url(#datescaleClip)'}.
	self dataset lastDateOfWeeks do: [:date |
		| x |
		x := self xAt: date.
		dateAxis LINE: {
			'class' -> 'Weekline'.
			'x1' -> x. 'y1' -> self chartBottom.
			'x2' -> x. 'y2' -> self chartTop}].
	lastOfMonths := self dataset lastDateOfMonths.
	lastOfMonths ifEmpty: [
		| x |
		x := self xAt: self firstDate.
		dateAxis TEXT: {
			'class' -> 'MonthText'.
			'x' -> (x + 10). 'y' -> (self chartBottom + 8).
			self monthnameAt: self firstDate month}].
	lastOfMonths do: [:date |
		| x |
		x := self xAt: date.
		dateAxis LINE: {
			'class' -> 'Monthline'.
			'x1' -> x. 'y1' -> (self chartBottom + self datescaleHeight).
			'x2' -> x. 'y2' -> self chartTop}.
		dateAxis TEXT: {
			'class' -> 'MonthText'.
			'x' -> (x + 10). 'y' -> (self chartBottom + 8).
			self nextMonthnameAt: date}].
	^dateAxis
!

legendFor: anAspectSymbol
	(self model hasAspect: anAspectSymbol) ifFalse: [
		^Silk SPAN].
	^Silk SPAN: {
		'class' -> ('LegendButton', (self model selectionClassFor: anAspectSymbol)).
		self legendFor: anAspectSymbol value: (self dataset lastValueOf: anAspectSymbol)}
!

legendFor: aString value: aNumber
	^{
		Silk SPAN: {'class' -> 'LegendBar'. SVG SVG: {'viewBox' -> '0 0 10 6'. self model fullBoxClassed: aString}}.
		Silk SPAN: {'class' -> 'LegendValue'. self infoValueString: aNumber}}
!

scalingButton
	^(SVG G: {
		'class' -> 'ScalingButton'.
		SVG RECT: {
			'class' -> 'ScalingRectangle'.
			'x' -> (self viewWidth - 15).
			'y' -> (self viewHeight - 6).
			'width' -> 15.
			'height' -> 6}.
		SVG TEXT: {
			'class' -> 'ScalingText'.
			'x' -> (self viewWidth - 11).
			'y' -> (self viewHeight - 1.7).
			self stringLogarithmic: self valuescale isLogarithmic not}}) 
		on: #click bind: [self toggleValuescale]
!

svg
	^SVG SVG: {
		'viewBox' -> {0. 0. self viewWidth. self viewHeight}.
		SVG DEFS: {
			(SVG newElementNamed: 'clipPath') <<  {
				'id' -> 'datescaleClip'.
				SVG RECT: {'x' -> self chartLeft. 'y' -> self chartTop. 'width' -> self chartWidth. 'height' -> self viewHeight}}}.
		SVG RECT: {'x' -> 0. 'y' -> 0. 'width' -> '100%'. 'height' -> '100%'}.
		self valueAxis.
		self dateAxis.
		self chartArea.
		self scalingButton}
!

tooltipClass: aClassString label: aString value: aNumber
	^{
		Silk SPAN: {'class' -> 'LegendBar'. SVG SVG: {'viewBox' -> '0 0 10 5'. self model fullBoxClassed: aClassString}}.
		Silk SPAN: {'class' -> 'LegendLabel'. aString}.
		Silk SPAN: {'class' -> 'LegendValue'. (self infoValueString: aNumber)}}
!

valueAxis
	^self valuescale ticks allIn: [:majorTicks :minorTicks |
		| valueAxis baseY |
		valueAxis := SVG G: {
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
		baseY := self yAt: 0.
		valueAxis LINE: {
			'class' -> 'Baseline'.
			'x1' -> self chartLeft. 'y1' -> baseY.
			'x2' -> self chartRight. 'y2' -> baseY}.
		valueAxis]
! !

!Barchart methodsFor: 'testing'!

dataArePositive
	"<Boolean>
	true, if there are no negative numbers in the data"
	
	^self dataset positive
!

isLogarithmic
	"<Boolean>"
	
	^self class logarithmic
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
	slots: {}
	package: 'Covid19view'!
!Casechart commentStamp!
A chart for case data

Case data only grow, therefore, a logarithmic scale is most appropriate!

!Casechart methodsFor: 'accessing'!

dataset
	^self model dataset
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
	slots: {#dataArePositive}
	package: 'Covid19view'!
!Changechart commentStamp!
A chart for changes

changes go up and down and should, therefore, be shown with a linear scale!

!Changechart methodsFor: 'accessing'!

dataArePositive
	"caching for speed - the logarithmic valuescale uses this heavily"
	
	^dataArePositive ifNil: [dataArePositive := super dataArePositive]
!

dataset
	^self model changeDataset
!

infoValueString: aNumber
	| prefix |
	aNumber isZero ifTrue: [
		^super infoValueString: aNumber].
	prefix := ''.
	aNumber negative ifFalse: [
		prefix := '+'].
	^prefix, (super infoValueString: aNumber)
! !

!Changechart methodsFor: 'actions'!

refresh
	dataArePositive := nil.
	super refresh
! !

!Changechart class methodsFor: 'settings'!

showRelative
	"<Boolean>"
	
	^self name asString, '.', #showRelative asString settingValueIfAbsent: false
!

showRelative: aBoolean
	self name asString, '.', #showRelative asString settingValue: aBoolean
! !

Component subclass: #Graphics
	slots: {#datasetId. #aspects. #dataset. #header. #casesChart. #changesChart}
	package: 'Covid19view'!
!Graphics commentStamp!
The details for the selected territory

The component has the tree as model and uses it's selection as model!

!Graphics methodsFor: 'accessing'!

allAspects
	"<Array of: Symbol>
	selectors of datapoint instances in the series which can be shown"
	
	^self dataset aspects
!

aspects
	"<Array of: Symbol>
	selectors of datapoint instances in the series to be shown.
	When the list is empty, all aspects are shown"
	
	^aspects ifNil: [aspects := self readAspects]
!

casesChart
	"<Component>"
	
	^casesChart ifNil: [
		casesChart := Casechart on: self in: (Silk DIV: 'id' -> 'Casechart')]
!

changeDataset
	"<Dataset>"
	
	^self dataset changeDataset
!

changesChart
	"<Component>"
	
	^changesChart ifNil: [
		changesChart := Changechart on: self in: (Silk DIV: 'id' -> 'Changechart')]
!

dataset
	"<Dataset>
	Dataset to be shown.
	Derrived from the model dataset"
	
	^dataset ifNil: [dataset := self modelDataset extendedTo: self lastDate]
!

datasetId
	"<String>
	the id of the selected datasource"
	
	^datasetId ifNil: [datasetId := self territory datasets first source]
!

datasetId: aString
	datasetId := aString.
	dataset := nil.
	self refresh
!

lastDate
	"<Date>"
	
	^CoViD19Application current lastDate
!

modelDataset
	"<Dataset>
	Dataset from the model with domain datapoints"
	
	^(self territory datasetAt: self datasetId) ifNil: [
		datasetId := nil.
		self modelDataset]
!

readAspects
	"<Array of: Symbol>"
	
	^self sessionKeys select: [:key | (self sessionAt: key) = 'true']
!

territory
	"<Territory | nil>"
	
	self model hasSelection ifFalse: [
		^nil].
	^self model selection model
! !

!Graphics methodsFor: 'actions'!

refresh
	dataset := nil.
	super refresh
!

toggleAspect: anAspect
	| setting |
	setting := (self sessionAt: anAspect ifAbsent: [false]) = 'true'.
	self sessionAt: anAspect put: setting not.
	self resetAspects.
	self refresh
! !

!Graphics methodsFor: 'initialization'!

resetAspects
	aspects := nil
! !

!Graphics methodsFor: 'presenting'!

asSilk
	self territory ifNil: [
		^#()].
	^{	self header refresh frame.
	 	Silk DIV: {
			'class' -> 'Charts'.
			self casesChart refresh frame.
			self changesChart refresh frame}.
		Silk DIV: 'id' -> 'Tooltip'}
!

aspectButtons
	"<Silk | (Array of: Silk)>"
	
	^self allAspects collect: [:aspect | self buttonFor: aspect]
!

buttonFor: anAspect
	"<Silk BUTTON>"
	
	| button |
	button := Silk BUTTON: {
		'class' -> ('AspectButton', (self selectionClassFor: anAspect)).
		'type' -> 'button'. 
		self legendFor: anAspect}.
	button on: #click bind: [self toggleAspect: anAspect].
	^button
!

datasetInfoOf: aDataset
	| datasource cssClass |
	datasource := CoViD19Application current sources at: aDataset source.
	cssClass := 'DatasetInfo'.
	self dataset = aDataset ifTrue: [
		cssClass := cssClass, ' selected'].
	^{	(Silk LI: {'class' -> cssClass.
			Silk SPAN: {'class' -> 'DatasetLabel'. datasource dataLabel}.
			Silk A: {datasource provider.
				'href' -> (datasource about at: #ProviderUrl).
				'target' -> '_blank'.
				'rel' -> 'noopener'}.
			Silk SPAN: {'class' -> 'DatasetDate'. aDataset dataDateString}}) on: #click bind: [self datasetId: aDataset source]
	}
!

datasets
	"<Array of: Silk>"
	
	^self territory datasets collect: [:aDataset |
		self datasetInfoOf: aDataset]
!

fullBoxClassed: aClassString
	^SVG RECT: {
		'class' -> aClassString.
		'x' -> 0. 'y' -> 0. 
		'width' -> '100%'. 'height' -> '100%'}
!

header
	"<Presenter>"
	
	^header ifNil: [
		header := SilkLeafPresenter shows: [self territory] in: Silk DIV do: [:aTerritory |
			{'class' -> 'GraphicsHeader'.
				Silk H2: {
					aTerritory name.
					self territoryInfoPopulation: aTerritory population}.
				Silk UL: {'class' -> 'Datasets'. self datasets}.
				Silk DIV: {'class' -> 'AspectButtons'. self aspectButtons}}]]
!

legendFor: aString
	^{
		Silk SPAN: {'class' -> 'LegendBar'. SVG SVG: {'viewBox' -> '0 0 10 6'. self fullBoxClassed: aString}}.
		Silk SPAN: {'class' -> 'LegendLabel'. aString}}
!

selectionClassFor: anAspect
	"<String>"
	
	(self isAspectSelected: anAspect) ifTrue: [
		^' selected'].
	^''
!

territoryInfoPopulation: aNumber
	"<Silk>"
	
	| cssClass |
	cssClass := 'TerritoryInfo'.
	aNumber isZero ifTrue: [
		cssClass := cssClass, ' empty'].
	^Silk DIV: {
		'class' -> cssClass.
		Silk SPAN: 'Population: '. 
		Silk SPAN: aNumber separatedThousandsString}
! !

!Graphics methodsFor: 'testing'!

hasAspect: anAspectSymbol
	"true, if the aspect is supported by the dataset"
	
	^self allAspects includes: anAspectSymbol
!

isAspectSelected: anAspectSymbol
	^self aspects includes: anAspectSymbol
! !

Component subclass: #Tree
	slots: {#root. #selection}
	package: 'Covid19view'!

!Tree methodsFor: 'accessing'!

root
	"<TreeItem>"
	
	^root ifNil: [
		| component |
		component := TreeItem on: self model in: (Silk LI: 'tabindex' -> 0) parent: self.
		component expanded: true.
		component frame on: #keydown bind: [:event | self keyPressed: event].
		root := component]
!

selection
	"<TreeItem | nil>"
	
	^selection
!

tree
	^self
! !

!Tree methodsFor: 'actions'!

scrollBy: aNumber
	| treeDiv |
	treeDiv := self frame asDomNode.
	treeDiv scrollTop: (treeDiv scrollTop + aNumber max: 0)
!

scrollToShow: aTreeItem
	| margin treeBounds itemBounds topSpace bottomSpace |
	margin := 12.
	treeBounds := self frame asDomNode getBoundingClientRect.
	itemBounds := (aTreeItem frame at: 'div') asDomNode getBoundingClientRect.
	topSpace := itemBounds top - treeBounds top - margin.
	topSpace negative ifTrue: [
		self scrollBy: topSpace.
		^self].
	bottomSpace := itemBounds bottom - treeBounds bottom + margin.
	bottomSpace > 0 ifTrue: [
		self scrollBy: bottomSpace]
!

select: aTreeItem
	| old |
	old := self selection.
	selection := aTreeItem.
	old ifNotNil: [old refresh].
	self selection ifNotNil: [
		self selection refresh].
	self scrollToShow: self selection.
	self root frame asDomNode focus.
	self announcer announce: TerritorySelected new
!

selectAfter: aChildTreeItem
!

selectBefore: aChildTreeItem
! !

!Tree methodsFor: 'events'!

arrowDown
	self hasSelection ifFalse: [
		^self].
	self selection selectNext
!

arrowLeft
	self hasSelection ifFalse: [
		^self].
	self selection collapseOrSelectParent
!

arrowRight
	self hasSelection ifFalse: [
		^self].
	self selection expand
!

arrowUp
	self hasSelection ifFalse: [
		^self].
	self selection selectPrevious
!

keyPressed: aKeyboardEvent
	aKeyboardEvent key = 'ArrowDown' ifTrue: [
		aKeyboardEvent preventDefault.
		^self arrowDown].
	aKeyboardEvent key = 'ArrowUp' ifTrue: [
		aKeyboardEvent preventDefault.
		^self arrowUp].
	aKeyboardEvent key = 'ArrowLeft' ifTrue: [
		^self arrowLeft].
	aKeyboardEvent key = 'ArrowRight' ifTrue: [
		^self arrowRight].
! !

!Tree methodsFor: 'presenting'!

asSilk
	self root refresh.
	^self frame UL: self root frame
! !

!Tree methodsFor: 'testing'!

hasSelection	
	^self selection notNil
! !

Component subclass: #TreeItem
	slots: {#parent. #parts. #expanded}
	package: 'Covid19view'!

!TreeItem methodsFor: 'accessing'!

expanded: aBoolean
	expanded := aBoolean
!

parent
	"<TreeItem | Tree>"
	
	^parent
!

parts
	"<Array of: TreeItem>"
	
	^parts ifNil: [
		parts := self model parts collect: [:part | 
			self class on: part in: Silk LI parent: self]]
!

tree
	"<Tree>"
	
	^self parent tree
! !

!TreeItem methodsFor: 'actions'!

collapse
	self isPartSelected ifTrue: [self select].
	expanded := false.
	self frame asDomNode removeAttribute: 'class'.
	self refresh
!

collapseOrSelectParent
	self isRoot ifTrue: [
		^self].
	self isExpanded ifTrue: [
		^self collapse].
	self parent select
!

expand
	self hasParts ifFalse: [
		^self].
	expanded := true.
	self frame << ('class' -> 'open').
	self refresh
!

select
	self tree select: self
!

selectAfter: aChildTreeItem
	| rst |
	rst := self parts readStream.
	[rst atEnd] whileFalse: [
		rst next = aChildTreeItem ifTrue: [
			rst atEnd ifTrue: [
				^self parent selectAfter: self].
			^rst next select]].
	self halt
!

selectBefore: aChildTreeItem
	| rst |
	rst := self parts reversed readStream.
	[rst atEnd] whileFalse: [
		rst next = aChildTreeItem ifTrue: [
			rst atEnd ifTrue: [
				^self select].
			^rst next selectLast]].
	self halt
!

selectLast
	self isExpanded ifTrue: [
		^self parts last selectLast].
	self select
!

selectNext
	self isExpanded ifTrue: [
		^self parts first select].
	self parent selectAfter: self
!

selectPrevious
	self parent selectBefore: self
! !

!TreeItem methodsFor: 'events'!

structureChanged
	self resetParts.
	self refresh.
	self tree hasSelection ifFalse: [
		self select].
	self tree announcer announce: DataReceived new
! !

!TreeItem methodsFor: 'initialization'!

initializeFrame: aSilk model: aModel parent: aTreeItemOrTree
	parent := aTreeItemOrTree.
	self initializeFrame: aSilk model: aModel.
	self model announcer on: StructureChanged send: #structureChanged to: self
!

resetParts
	parts := nil
! !

!TreeItem methodsFor: 'presenting'!

asSilk
	"<Array of: Silk> to be added to a <li> silk"
	
	| elements |
	elements := OrderedCollection with: (Silk DIV: {
		'class' -> 'Treeline'.
		self lineHead. 
		self itemSilk}).
	(self hasParts and: [
	self isExpanded]) ifTrue: [
		elements add: (self frame UL: (self parts collect: [:part | 
			part refresh. 
			part frame]))].
	^elements
!

itemSilk
	| css silk |
	css := 'Treeitem'.
	self isSelected ifTrue: [
		css := css, ' selected'].
	silk := Silk SPAN: {
		'class' -> css. 
		Silk SPAN: {
			'class' -> 'TerritoryName'. 
			self model name}.
		Silk SPAN: {
			'class' -> 'TerritoryValue'.
			self model lastConfirmed separatedThousandsString}}.
	silk on: #click bind: [self select].
	^silk
!

lineHead
	| cssClass |
	cssClass := 'opener'.
	self isLoading ifTrue: [
		^Silk DIV: 'class' -> 'loader'].
	(self hasParts not or: [
	self model name = 'World']) ifTrue: [
		^Silk BUTTON: {'class' -> (cssClass, ' noButton')}]. 
	self isExpanded ifFalse: [
		^(Silk BUTTON: {'class' -> cssClass}) on: #click bind: [self expand]].
	^(Silk BUTTON: {'class' -> (cssClass, ' open')}) on: #click bind: [self collapse]
! !

!TreeItem methodsFor: 'testing'!

hasParts
	"<Boolean>"
	
	^self model hasParts
!

isExpanded
	^expanded ifNil: [false]
!

isLoading
	^self model isLoading
!

isPartSelected
	self isExpanded ifFalse: [
		^self isSelected].
	^self parts anySatisfy: [:part |
		part isPartSelected]
!

isRoot
	^self parent class ~= self class
!

isSelected
	^self tree selection = self
! !

!TreeItem class methodsFor: 'instance creation'!

frame: aSilk model: aModel parent: aTreeItemOrTree
	| inst |
	inst := self new.
	inst initializeFrame: aSilk model: aModel parent: aTreeItemOrTree.
	^inst
!

on: aModel in: aSilk parent: aTreeItemOrTree
	^self frame: aSilk model: aModel parent: aTreeItemOrTree
! !

SystemAnnouncement subclass: #InteractionAnnouncement
	slots: {}
	package: 'Covid19view'!

InteractionAnnouncement subclass: #DataReceived
	slots: {}
	package: 'Covid19view'!

InteractionAnnouncement subclass: #TerritorySelected
	slots: {}
	package: 'Covid19view'!

Silk subclass: #SVG
	slots: {}
	package: 'Covid19view'!

!SVG class methodsFor: 'accessing'!

namespace
	^'http://www.w3.org/2000/svg'
! !

!SVG class methodsFor: 'instance creation'!

newElementNamed: aString
	^self newElement: aString xmlns: self namespace
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

!Datescale methodsFor: 'accessing'!

days
	"<Integer>"
	
	^(self range / Date new millisecondsInDay) rounded
! !

Scale subclass: #Valuescale
	slots: {}
	package: 'Covid19view'!

!Valuescale methodsFor: 'accessing'!

ticks
	"<Array with: (Array of: Number) with: (Array of: Number)>
	major ticks and minor ticks"
	
	^self subclassResponsibility
! !

!Valuescale methodsFor: 'testing'!

isLogarithmic
	"<Boolean>"
	
	^self subclassResponsibility
! !

Valuescale subclass: #LinearValuescale
	slots: {#ticks}
	package: 'Covid19view'!

!LinearValuescale methodsFor: 'accessing'!

ticks
	^ticks
! !

!LinearValuescale methodsFor: 'initialization'!

initializeFrom: aStart to: anEnd
	| f |
	f := 10 raisedTo: (aStart abs max: anEnd abs) exponent.
	(self ticksForNormedLow: aStart / f andHigh: anEnd / f) allIn: [:major :minor |
		ticks := {major collect: [:n | n * f]. minor collect: [:n | n * f]}.
		from := ((major first min: minor first) min: 0) * f.
		to := ((major last max: minor last) max: 0) * f]
!

ticksForNormedLow: aLowNumber andHigh: aHighNumber
	"<Array[2] of: (Array of: Number)>"
	
	| normedHigh positiveTicks normedLow |
	normedHigh := aLowNumber abs max: aHighNumber abs.
	positiveTicks := (self class tickBlocksAtValue at: normedHigh ceiling) cull: normedHigh.
	(aHighNumber abs >= aLowNumber abs and: [
	aLowNumber positive]) ifTrue: [
		^positiveTicks].
	aHighNumber abs < aLowNumber abs ifTrue: [
		^(self ticksForNormedLow: aHighNumber negated andHigh: aLowNumber negated) allIn: [:major :minor |
			{major reversed collect: #negated.
			minor reversed collect: #negated}]].
	normedLow := aLowNumber negated.
	^positiveTicks allIn: [:major :minor |
		| majorStream minorStream majorTicks minorTicks done |
		majorStream := major readStream.
		minorStream := minor readStream.
		majorTicks := OrderedCollection new.
		minorTicks := OrderedCollection new.
		done := false.
		[done] whileFalse: [
			| tick |
			(majorStream peek ifNil: [100]) < (minorStream peek ifNil: [100])
				ifTrue: [
					tick := majorStream next.
					majorTicks add: tick]
				ifFalse: [
					tick := minorStream next.
					minorTicks add: tick].
			(tick >= normedLow or: [
			(majorStream atEnd and: [
			minorStream atEnd])]) ifTrue: [
				done := true]].
		{(majorTicks reversed collect: #negated), {0}, major.
		(minorTicks reversed collect: #negated), minor}]
! !

!LinearValuescale methodsFor: 'testing'!

isLogarithmic
	^false
! !

!LinearValuescale class methodsFor: 'accessing'!

tickBlocksAtValue
	| dict |
	dict := Dictionary new.
	dict at: 10 put: [		#(	#(2 4 6 8 10) 	  #(1 3 5 7 9)	)].
	dict at: 9 put: [		#(	#(2 4 6 8) 		  	#(1 3 5 7 9)	)].
	dict at: 8 put: [		#(	#(2 4 6 8) 			#(1 3 5 7)		)].
	dict at: 7 put: [		#(	#(2 4 6) 			#(1 3 5 7)		)].
	dict at: 6 put: [		#(	#(2 4 6) 			#(1 3 5)		)].
	dict at: 5 put: [		#(	#(2 4) 				#(1 3 5)		)].
	dict at: 4 put: [:n | 	{	1 to: n + 0.5. 		0 to: (n + 0.5) by: 0.5		}].
	dict at: 3 put: [:n |	{	1 to: n + 0.5. 			0 to: (n + 0.5) by: 0.5		}].
	dict at: 2 put: [:n |	{	1 to: n + 0.2. 			0 to: (n + 0.2) by: 0.2		}].
	dict at: 1 put: [:n |	{	{1}. 				0 to: (n + 0.2) by: 0.2		}].
	^dict
! !

Valuescale subclass: #LogarithmicValuescale
	slots: {}
	package: 'Covid19view'!

!LogarithmicValuescale methodsFor: 'accessing'!

at: aDomainValue
	^(aDomainValue ln max: 0) / self range ln
!

range
	^self to
!

ticks
	| exponent majors minors topFactor |
	exponent := self to exponent.
	majors := (0 to: exponent) collect: [:exp | 10 raisedTo: exp].
	minors := OrderedCollection new.
	topFactor := (self to / (10 raisedTo: exponent)) floor.
	minors addAll: ((3 to: topFactor by: 2) collect: [:i | (10 raisedTo: exponent) * i]).
	0 to: exponent - 1 do: [:exp | 
		minors addAll: (#(3 5 7 9) collect: [:i | (10 raisedTo: exp) * i])].
	^{majors. minors}
! !

!LogarithmicValuescale methodsFor: 'initialization'!

initializeFrom: aStart to: anEnd
	from := 1.
	(10 raisedTo: anEnd exponent) = anEnd ifTrue: [
		to := 10 raisedTo: anEnd exponent.
		^self].
	to := 10 raisedTo: anEnd exponent + 1
! !

!LogarithmicValuescale methodsFor: 'testing'!

isLogarithmic
	^true
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
!

to: aDate
	"<Array of: Date>
	list of all dates between the receiver (including) and aDate (including).
	((Date d: 1 m: 1 y: 2020) to: (Date d: 1 m: 2 y: 2020)) size
	(Date d: 1 m: 1 y: 2020) to: (Date d: 1 m: 1 y: 2020)
	"
	
	| list |
	list := OrderedCollection with: self.
	[list last < aDate] whileTrue: [
		list add: list last nextDay].
	^list
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
	the power of 10 below the receiver.
	Wrong for 1.000 and 1.000.000"
	
	^(self log + 0.00000001) floor
!

separatedThousandsString
	"<String>
	localized String with thousands separator"
	
	<inlineJS: 'return self.toLocaleString()'>
! !

