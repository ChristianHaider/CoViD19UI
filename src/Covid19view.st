Smalltalk createPackage: 'Covid19view'!
(Smalltalk packageAt: 'Covid19view' ifAbsent: [ self error: 'Package not created: Covid19view' ]) imports: {'amber/web/Web'. 'amber/web/Web-JQuery'. 'silk/Silk'}!
Object subclass: #Covid19view
	slots: {}
	package: 'Covid19view'!

!Covid19view methodsFor: 'action'!

getData
	(Platform fetch: 'CoViD-19.json') then: [:response | 
		response json then: [:json | 
			| all |
			console log: json.
			all := json collect: [:data |
				Series 
					country: data country
					state: data state
					latLong: data latLong
					series: (data series collect: [:d |
						Datapoint 
							date: d date 
							confirmed: d confirmed 
							deaths: d deaths 
							recovered: d recovered])].
			self showData: all]]
!

openHelios
	<inlineJS: 'require(''amber/helpers'').popupHelios()'>
!

showData: aJson
	| list |
	list := '#CountryList' asSilk.
	list resetContents.
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

recovered
	"<Integer>"
	
	^recovered
! !

!Datapoint methodsFor: 'as yet unclassified'!

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
! !

Object subclass: #Series
	slots: {#country. #state. #latLong. #series}
	package: 'Covid19view'!

!Series methodsFor: 'accessing'!

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

!Series methodsFor: 'as yet unclassified'!

printOn: stream
	stream nextPutAll: self country, ' ', self state
! !

!Series methodsFor: 'initialization'!

initializeCountry: aCountryString state: aStateString latLong: aLatLongPoint series: someDatapoints
	country := aCountryString.
	state := aStateString.
	latLong := aLatLongPoint.
	series := someDatapoints
! !

!Series class methodsFor: 'instance creation'!

country: aCountryString state: aStateString latLong: aLatLongPoint series: someDatapoints
	| inst |
	inst := self new.
	inst initializeCountry: aCountryString state: aStateString latLong: aLatLongPoint series: someDatapoints.
	^inst
! !

