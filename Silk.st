Smalltalk createPackage: 'Silk'!
Domite subclass: #Silk
	slots: {}
	package: 'Silk'!
!Silk commentStamp!
I am subclass of `Domite` with more convenient high-level API.

##Rendering

 - `aSilk << anObject` uses double-dispatch via `renderOnSilk:`.
This allows to create widgets
(no formal superclass, anything with `renderOnSilk:` is a widget),
as well as incorporating magic on certain types of objects:
   - blocks: `aSilk << aBlock` runs the block, passing aSilk as a parameter.
   - associations: `aSilk << (key -> value)` set attribute key to value.

Worthful to note is, rendering a collection has its magic
already built-in (via `putOn:`) -- if you `stream << aCollection`,
its items are `<<`'d in sequence.
So, de facto, arrays are deeply flattened when put on a stream via `<<`.

##Convenience

 - `aCssSelectorString asSilk` returns Silk wrapping an element at a selector.
 - `anObject inSilk` returns anObject rendered in a document fragment.

##Element creation

These messages use DNU to dynamically create
elements with any (letters-and-numbers) tag name,
Next samples show this on an example of `<div>`.

 - `Silk DIV` is shortcut for `Silk newElement: 'div'`.
 - `aSilk DIV` is shortcut for
`[ |tmp| tmp := Silk DIV. aSilk << tmp. tmp] value`.
IOW, it not just creates the element and returns it,
but also puts in on aSilk.
 - `aSilk DIV: anObject` is shortcut for
`aSilk DIV << anObject; yourself`.
IOW, it not just creates and inserts the element,
but puts a content into it.

##Conclusions

Taken all this together, one can do pretty neat constructs:

```
  aSilk P: { 'id'->'mission'. 'We are the champions.' }
```

adds `<p id="mission">We are the champions.</p>` into `aSilk`
and returns the Silk-wrapped `<p>` with insertion cursor at the end.!

!Silk methodsFor: 'accessing'!

namespace
	"<String>
	XML namespace for elements: html.
	The default for all virtual Silk tag messages"
	
	^self element namespaceURI
! !

!Silk methodsFor: 'error handling'!

doesNotUnderstand: aMessage
	"`aSilk DIV` creates a div element and inserts it.
	`aSilk DIV: anObject` creates a div element, inserts it
	and puts contents in it"
	(self class tryMakeDnuElement: aMessage in: self)
		ifNil: [ ^ super doesNotUnderstand: aMessage ]
		ifNotNil: [ :newElement | self << newElement. ^ newElement ]
! !

!Silk methodsFor: 'writing'!

nextPut: anObject
	"Double-dispatches anObject via renderOnSilk: message.
	If a message returns nil, this fallbacks to superclass.
	Otherwise, it is assumed renderOnSilk: did its job."

	(anObject renderOnSilk: self)
		ifNil: [ super nextPut: anObject ]
! !

!Silk class methodsFor: 'accessing'!

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
! !

!Silk class methodsFor: 'instance creation'!

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

!Silk class methodsFor: 'message handling'!

doesNotUnderstand: aMessage
	"`Silk DIV` creates a div element.
	`Silk DIV: anObject` creates a div element and puts contents in it"
	^ (self tryMakeDnuElement: aMessage in: self)
		ifNil: [ super doesNotUnderstand: aMessage ]
! !

!Association methodsFor: '*Silk'!

renderOnSilk: aSilk
	key attrPut: value on: aSilk
! !

!BlockClosure methodsFor: '*Silk'!

renderOnSilk: aSilk
	self value: aSilk
! !

!JSObjectProxy methodsFor: '*Silk'!

inSilk
	^ Silk newStream << self; yourself
!

renderOnSilk: aSilk
	^ nil
! !

!Object methodsFor: '*Silk'!

inSilk
	^ Silk newStream << self; yourself
!

renderOnSilk: aSilk
	^ nil
! !

!String methodsFor: '*Silk'!

asSilk
	^ Silk at: self asString
!

attrPut: anObject on: aSilk
	aSilk attrAt: self put: anObject
! !

