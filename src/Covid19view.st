Smalltalk createPackage: 'Covid19view'!
(Smalltalk packageAt: 'Covid19view' ifAbsent: [ self error: 'Package not created: Covid19view' ]) imports: {'amber/web/Web'. 'amber/web/Web-JQuery'. 'silk/Silk'}!
Object subclass: #Covid19view
	slots: {}
	package: 'Covid19view'!

!Covid19view methodsFor: 'action'!

getData
	(Platform fetch: 'CoViD-19.json') then: [:response | 
		response json then: [:json | 
			self showData: json]]
!

openHelios
	<inlineJS: 'require(''amber/helpers'').popupHelios()'>
!

showData: aJson
	| list |
	list := '#CountryList' asSilk.
	aJson do: [:country |
		list LI: country]
! !

!Covid19view methodsFor: 'backend'!

endpoint
	^'https://github.com/CSSEGISandData/COVID-19/raw/master/csse_covid_19_data/csse_covid_19_time_series/'
! !

!Covid19view methodsFor: 'starting'!

augmentPage
	| body dataButton heliosButton |
	dataButton := (Silk BUTTON: 'get data') on: #click bind: [ self getData ].
	heliosButton := (Silk BUTTON: 'Helios') on: #click bind: [ self openHelios ].
	body := Silk new.
	body reset.
	body << dataButton.
	body << heliosButton.
	body UL: {'id' -> 'CountryList'}
! !

!Covid19view class methodsFor: 'starting'!

start
	self new augmentPage
! !

Object subclass: #Datapoint
	slots: {#date. #confirmed. #deaths. #recovered}
	package: 'Covid19view'!

!Datapoint methodsFor: 'as yet unclassified'!

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

recovered
	"<Integer>"
	
	^recovered
! !

!Datapoint class methodsFor: 'starting'!

start
	self new augmentPage
! !

Object subclass: #Series
	slots: {#country. #state. #latLong. #series}
	package: 'Covid19view'!

!Series methodsFor: 'as yet unclassified'!

country
	"<String>"
	
	^country
!

latLong
	"<Point>"
	
	^latLong
!

series
	"<Array of: Datapoint>"
	
	^series
!

state
	"<String>"
	
	^state
! !

!Series class methodsFor: 'starting'!

start
	self new augmentPage
! !

