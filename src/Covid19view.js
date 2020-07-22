define(["amber/boot", "require", "amber/core/Kernel-Announcements", "amber/core/Kernel-Collections", "amber/core/Kernel-Methods", "amber/core/Kernel-Objects", "silk/Silk"], function($boot,requirejs){"use strict";
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("Covid19view");
$pkg.imports = ["./Covid19Model", "mini-mvp/MiniMVP", "silk/Silk"];
//>>excludeStart("imports", pragmas.excludeImports);
$pkg.isReady = new Promise(function (resolve, reject) { requirejs(["./Covid19Model", "mini-mvp/MiniMVP", "silk/Silk"], function () {resolve();}, reject); });
//>>excludeEnd("imports");
$pkg.transport = {"type":"amd","amdNamespace":"amber-covid19view"};

$core.addClass("AspectGroup", $globals.Object, "Covid19view");
$core.setSlots($globals.AspectGroup, ["name", "aspects", "announcer"]);
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.AspectGroup.comment="Named group of aspects (key and value)\x0a\x0aThe group persists in the session storage";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "announcer",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "announcer\x0a\x09\x22<Announcer>\x0a\x09holds all subscriptions to changes of the receiver\x22\x0a\x09\x0a\x09^announcer ifNil: [announcer := Announcer new]",
referencedClasses: ["Announcer"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self.announcer;
if($1 == null || $1.a$nil){
$self.announcer=$recv($globals.Announcer)._new();
return $self.announcer;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"announcer",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AspectGroup);

$core.addMethod(
$core.method({
selector: "aspectAt:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSymbol"],
source: "aspectAt: aSymbol\x0a\x09\x22<Boolean>\x22\x0a\x09\x0a\x09^self aspects at: aSymbol ifAbsent: [false]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:ifAbsent:", "aspects"]
}, function ($methodClass){ return function (aSymbol){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._aspects())._at_ifAbsent_(aSymbol,(function(){
return false;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"aspectAt:",{aSymbol:aSymbol})});
//>>excludeEnd("ctx");
}; }),
$globals.AspectGroup);

$core.addMethod(
$core.method({
selector: "aspectAt:put:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSymbol", "aBoolean"],
source: "aspectAt: aSymbol put: aBoolean\x0a\x09self aspects at: aSymbol put: aBoolean.\x0a\x09self sessionAt: self name, '.', aSymbol put: aBoolean.\x0a\x09self announcer announce: AspectChanged new",
referencedClasses: ["AspectChanged"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:put:", "aspects", "sessionAt:put:", ",", "name", "announce:", "announcer", "new"]
}, function ($methodClass){ return function (aSymbol,aBoolean){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._aspects())._at_put_(aSymbol,aBoolean);
$self._sessionAt_put_([$recv($recv($self._name()).__comma(".")).__comma(aSymbol)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=1
//>>excludeEnd("ctx");
][0],aBoolean);
$recv($self._announcer())._announce_($recv($globals.AspectChanged)._new());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"aspectAt:put:",{aSymbol:aSymbol,aBoolean:aBoolean})});
//>>excludeEnd("ctx");
}; }),
$globals.AspectGroup);

$core.addMethod(
$core.method({
selector: "aspects",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "aspects\x0a\x09\x22<Dictionary key: Symbol value: Boolean>\x22\x0a\x09\x0a\x09^aspects ifNil: [aspects := Dictionary new]",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self.aspects;
if($1 == null || $1.a$nil){
$self.aspects=$recv($globals.Dictionary)._new();
return $self.aspects;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"aspects",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AspectGroup);

$core.addMethod(
$core.method({
selector: "buttonFor:",
protocol: "presenting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAspect"],
source: "buttonFor: anAspect\x0a\x09\x22<Silk BUTTON>\x22\x0a\x09\x0a\x09| button |\x0a\x09button := Silk BUTTON: {\x0a\x09\x09'class' -> ('AspectButton', (self selectionClassFor: anAspect)).\x0a\x09\x09'type' -> 'button'. \x0a\x09\x09self legendFor: anAspect}.\x0a\x09button on: #click bind: [self toggleAspect: anAspect].\x0a\x09^button",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["BUTTON:", "->", ",", "selectionClassFor:", "legendFor:", "on:bind:", "toggleAspect:"]
}, function ($methodClass){ return function (anAspect){
var self=this,$self=this;
var button;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
button=$recv($globals.Silk)._BUTTON_([["class".__minus_gt("AspectButton".__comma($self._selectionClassFor_(anAspect)))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=1
//>>excludeEnd("ctx");
][0],"type".__minus_gt("button"),$self._legendFor_(anAspect)]);
$recv(button)._on_bind_("click",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._toggleAspect_(anAspect);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return button;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"buttonFor:",{anAspect:anAspect,button:button})});
//>>excludeEnd("ctx");
}; }),
$globals.AspectGroup);

$core.addMethod(
$core.method({
selector: "buttons",
protocol: "presenting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "buttons\x0a\x09\x22<Array of: Silk BUTTON>\x22\x0a\x09\x0a\x09^self selectors collect: [:aspect | self buttonFor: aspect]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["collect:", "selectors", "buttonFor:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._selectors())._collect_((function(aspect){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._buttonFor_(aspect);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({aspect:aspect},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"buttons",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AspectGroup);

$core.addMethod(
$core.method({
selector: "filteredDatapoint:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDatapoint"],
source: "filteredDatapoint: aDatapoint\x0a\x09^aDatapoint",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aDatapoint){
var self=this,$self=this;
return aDatapoint;

}; }),
$globals.AspectGroup);

$core.addMethod(
$core.method({
selector: "filteredDataset:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDataset"],
source: "filteredDataset: aDataset\x0a\x09self nothingSelected ifTrue: [\x0a\x09\x09^aDataset].\x0a\x09^aDataset copyWithSeries: (aDataset series collect: [:datapoint |\x0a\x09\x09self filteredDatapoint: datapoint])",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "nothingSelected", "copyWithSeries:", "collect:", "series", "filteredDatapoint:"]
}, function ($methodClass){ return function (aDataset){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert($self._nothingSelected())){
return aDataset;
}
return $recv(aDataset)._copyWithSeries_($recv($recv(aDataset)._series())._collect_((function(datapoint){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._filteredDatapoint_(datapoint);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({datapoint:datapoint},$ctx1,2)});
//>>excludeEnd("ctx");
})));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"filteredDataset:",{aDataset:aDataset})});
//>>excludeEnd("ctx");
}; }),
$globals.AspectGroup);

$core.addMethod(
$core.method({
selector: "fullBoxClassed:",
protocol: "presenting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClassString"],
source: "fullBoxClassed: aClassString\x0a\x09^SVG RECT: {\x0a\x09\x09'class' -> aClassString.\x0a\x09\x09'x' -> 0. 'y' -> 0. \x0a\x09\x09'width' -> '100%'. 'height' -> '100%'}",
referencedClasses: ["SVG"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["RECT:", "->"]
}, function ($methodClass){ return function (aClassString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.SVG)._RECT_([["class".__minus_gt(aClassString)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=1
//>>excludeEnd("ctx");
][0],["x".__minus_gt((0))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=2
//>>excludeEnd("ctx");
][0],["y".__minus_gt((0))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=3
//>>excludeEnd("ctx");
][0],["width".__minus_gt("100%")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=4
//>>excludeEnd("ctx");
][0],"height".__minus_gt("100%")]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fullBoxClassed:",{aClassString:aClassString})});
//>>excludeEnd("ctx");
}; }),
$globals.AspectGroup);

$core.addMethod(
$core.method({
selector: "hasAspect:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAspect"],
source: "hasAspect: anAspect\x0a\x09^self aspects includesKey: anAspect",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["includesKey:", "aspects"]
}, function ($methodClass){ return function (anAspect){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._aspects())._includesKey_(anAspect);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hasAspect:",{anAspect:anAspect})});
//>>excludeEnd("ctx");
}; }),
$globals.AspectGroup);

$core.addMethod(
$core.method({
selector: "initializeName:aspects:",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "someSymbols"],
source: "initializeName: aString aspects: someSymbols\x0a\x09name := aString.\x0a\x09someSymbols do: [:aspect |\x0a\x09\x09self aspects at: aspect put: (self sessionAt: self name, '.', aspect ifAbsent: [false]) = 'true']",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["do:", "at:put:", "aspects", "=", "sessionAt:ifAbsent:", ",", "name"]
}, function ($methodClass){ return function (aString,someSymbols){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.name=aString;
$recv(someSymbols)._do_((function(aspect){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self._aspects())._at_put_(aspect,$recv($self._sessionAt_ifAbsent_([$recv($recv($self._name()).__comma(".")).__comma(aspect)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx[","]=1
//>>excludeEnd("ctx");
][0],(function(){
return false;

}))).__eq("true"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({aspect:aspect},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeName:aspects:",{aString:aString,someSymbols:someSymbols})});
//>>excludeEnd("ctx");
}; }),
$globals.AspectGroup);

$core.addMethod(
$core.method({
selector: "legendFor:",
protocol: "presenting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "legendFor: aString\x0a\x09| string |\x0a\x09string := aString.\x0a\x09string = 'unbekannt' ifTrue: [\x0a\x09\x09string := '?'].\x0a\x09string first = $A ifTrue: [\x0a\x09\x09string := string allButFirst].\x0a\x09string = 'M' ifTrue: [\x0a\x09\x09string := '♂'].\x0a\x09string = 'W' ifTrue: [\x0a\x09\x09string := '♀'].\x0a\x09^{\x0a\x09\x09Silk SPAN: {'class' -> 'LegendBar'. SVG SVG: {'viewBox' -> '0 0 10 6'. self fullBoxClassed: aString}}.\x0a\x09\x09Silk SPAN: {'class' -> 'LegendLabel'. string}}",
referencedClasses: ["Silk", "SVG"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "=", "first", "allButFirst", "SPAN:", "->", "SVG:", "fullBoxClassed:"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
var string;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
string=aString;
if($core.assert([$recv(string).__eq("unbekannt")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["="]=1
//>>excludeEnd("ctx");
][0])){
string="?";
string;
}
if($core.assert([$recv($recv(string)._first()).__eq("A")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["="]=2
//>>excludeEnd("ctx");
][0])){
string=$recv(string)._allButFirst();
string;
}
if($core.assert([$recv(string).__eq("M")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["="]=3
//>>excludeEnd("ctx");
][0])){
string="♂";
string;
}
if($core.assert($recv(string).__eq("W"))){
string="♀";
string;
}
return [[$recv($globals.Silk)._SPAN_([["class".__minus_gt("LegendBar")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=1
//>>excludeEnd("ctx");
][0],$recv($globals.SVG)._SVG_([["viewBox".__minus_gt("0 0 10 6")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=2
//>>excludeEnd("ctx");
][0],$self._fullBoxClassed_(aString)])])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["SPAN:"]=1
//>>excludeEnd("ctx");
][0],$recv($globals.Silk)._SPAN_(["class".__minus_gt("LegendLabel"),string])];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"legendFor:",{aString:aString,string:string})});
//>>excludeEnd("ctx");
}; }),
$globals.AspectGroup);

$core.addMethod(
$core.method({
selector: "legendSelectionClassFor:",
protocol: "presenting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAspect"],
source: "legendSelectionClassFor: anAspect\x0a\x09\x22<String>\x22\x0a\x09\x0a\x09((self aspectAt: anAspect) or: [\x0a\x09self nothingSelected]) ifTrue: [\x0a\x09\x09^' selected'].\x0a\x09^''",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "or:", "aspectAt:", "nothingSelected"]
}, function ($methodClass){ return function (anAspect){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
if($core.assert($self._aspectAt_(anAspect))){
$1=true;
} else {
$1=$self._nothingSelected();
}
if($core.assert($1)){
return " selected";
}
return "";
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"legendSelectionClassFor:",{anAspect:anAspect})});
//>>excludeEnd("ctx");
}; }),
$globals.AspectGroup);

$core.addMethod(
$core.method({
selector: "name",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "name\x0a\x09\x22<String>\x22\x0a\x09\x0a\x09^name",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.name;

}; }),
$globals.AspectGroup);

$core.addMethod(
$core.method({
selector: "nothingSelected",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "nothingSelected\x0a\x09^(self aspects values anySatisfy: [:bool | bool]) not",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["not", "anySatisfy:", "values", "aspects"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($recv($self._aspects())._values())._anySatisfy_((function(bool){
return bool;

})))._not();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nothingSelected",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AspectGroup);

$core.addMethod(
$core.method({
selector: "selectedAspects",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selectedAspects\x0a\x09\x22<Array of: Symbol>\x22\x0a\x09\x0a\x09^self selectors select: [:key | self aspectAt: key]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["select:", "selectors", "aspectAt:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._selectors())._select_((function(key){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._aspectAt_(key);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({key:key},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectedAspects",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AspectGroup);

$core.addMethod(
$core.method({
selector: "selectionClassFor:",
protocol: "presenting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAspect"],
source: "selectionClassFor: anAspect\x0a\x09\x22<String>\x22\x0a\x09\x0a\x09(self aspectAt: anAspect) ifTrue: [\x0a\x09\x09^' selected'].\x0a\x09^''",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "aspectAt:"]
}, function ($methodClass){ return function (anAspect){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert($self._aspectAt_(anAspect))){
return " selected";
}
return "";
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectionClassFor:",{anAspect:anAspect})});
//>>excludeEnd("ctx");
}; }),
$globals.AspectGroup);

$core.addMethod(
$core.method({
selector: "selectors",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selectors\x0a\x09\x22<Array of: Symbol>\x22\x0a\x09\x0a\x09^self aspects keys",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["keys", "aspects"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._aspects())._keys();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectors",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AspectGroup);

$core.addMethod(
$core.method({
selector: "sessionAt:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey"],
source: "sessionAt: aKey\x0a\x09\x22<String | nil>\x0a\x09the value at aKey in the web session storage\x22\x0a\x09\x0a\x09^sessionStorage getItem: aKey",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["getItem:"]
}, function ($methodClass){ return function (aKey){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(sessionStorage)._getItem_(aKey);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sessionAt:",{aKey:aKey})});
//>>excludeEnd("ctx");
}; }),
$globals.AspectGroup);

$core.addMethod(
$core.method({
selector: "sessionAt:ifAbsent:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "anAbsentBlock"],
source: "sessionAt: aKey ifAbsent: anAbsentBlock\x0a\x09\x22<String>\x0a\x09the value at aKey in the web session storage\x22\x0a\x09\x0a\x09^(self sessionAt: aKey) ifNil: anAbsentBlock",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "sessionAt:"]
}, function ($methodClass){ return function (aKey,anAbsentBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._sessionAt_(aKey);
return $recv($1)._ifNil_(anAbsentBlock);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sessionAt:ifAbsent:",{aKey:aKey,anAbsentBlock:anAbsentBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.AspectGroup);

$core.addMethod(
$core.method({
selector: "sessionAt:put:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "aString"],
source: "sessionAt: aKey put: aString\x0a\x09sessionStorage setItem: aKey to: aString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["setItem:to:"]
}, function ($methodClass){ return function (aKey,aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(sessionStorage)._setItem_to_(aKey,aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sessionAt:put:",{aKey:aKey,aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.AspectGroup);

$core.addMethod(
$core.method({
selector: "sessionKeys",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sessionKeys\x0a\x09\x22<Array of: Symbol>\x22\x0a\x09\x0a\x09^(0 to: sessionStorage length - 1) collect: [:index | sessionStorage key: index]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["collect:", "to:", "-", "length", "key:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv((0)._to_($recv($recv(sessionStorage)._length()).__minus((1))))._collect_((function(index){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(sessionStorage)._key_(index);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({index:index},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sessionKeys",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AspectGroup);

$core.addMethod(
$core.method({
selector: "toggleAspect:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSymbol"],
source: "toggleAspect: aSymbol\x0a\x09self aspectAt: aSymbol put: (self aspectAt: aSymbol) not",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["aspectAt:put:", "not", "aspectAt:"]
}, function ($methodClass){ return function (aSymbol){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._aspectAt_put_(aSymbol,$recv($self._aspectAt_(aSymbol))._not());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toggleAspect:",{aSymbol:aSymbol})});
//>>excludeEnd("ctx");
}; }),
$globals.AspectGroup);


$core.addMethod(
$core.method({
selector: "name:aspects:",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "someSymbols"],
source: "name: aString aspects: someSymbols\x0a\x09| inst |\x0a\x09inst := self new.\x0a\x09inst initializeName: aString aspects: someSymbols.\x0a\x09^inst",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "initializeName:aspects:"]
}, function ($methodClass){ return function (aString,someSymbols){
var self=this,$self=this;
var inst;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
inst=$self._new();
$recv(inst)._initializeName_aspects_(aString,someSymbols);
return inst;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"name:aspects:",{aString:aString,someSymbols:someSymbols,inst:inst})});
//>>excludeEnd("ctx");
}; }),
$globals.AspectGroup.a$cls);


$core.addClass("CoViD19", $globals.Object, "Covid19view");
$core.setSlots($globals.CoViD19, ["model", "tree", "about", "graphics", "version"]);
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CoViD19.comment="The one page web application fro browsing CoViD-19 data";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "about",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "about\x0a\x09\x22<TerritoryInfo>\x0a\x09information about a territory\x22\x0a\x09\x0a\x09^about ifNil: [\x0a\x09\x09| component |\x0a\x09\x09component := TerritoryView on: self tree in: (Silk DIV: 'id' -> 'About').\x0a\x09\x09component announcer on: DatasetSelected send: #datasetSelected to: self.\x0a\x09\x09about := component]",
referencedClasses: ["TerritoryView", "Silk", "DatasetSelected"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "on:in:", "tree", "DIV:", "->", "on:send:to:", "announcer"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self.about;
if($1 == null || $1.a$nil){
var component;
component=$recv($globals.TerritoryView)._on_in_($self._tree(),$recv($globals.Silk)._DIV_("id".__minus_gt("About")));
$recv($recv(component)._announcer())._on_send_to_($globals.DatasetSelected,"datasetSelected",self);
$self.about=component;
return $self.about;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"about",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CoViD19);

$core.addMethod(
$core.method({
selector: "asSilk",
protocol: "presenting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asSilk\x0a\x09^Silk DIV: {\x0a\x09\x09'id' -> 'Contents'. \x0a\x09\x09self header.\x0a\x09\x09self about frame.\x0a\x09\x09self tree frame.\x0a\x09\x09self graphics frame.\x0a\x09\x09self footer}",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["DIV:", "->", "header", "frame", "about", "tree", "graphics", "footer"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Silk)._DIV_(["id".__minus_gt("Contents"),$self._header(),[$recv($self._about())._frame()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["frame"]=1
//>>excludeEnd("ctx");
][0],[$recv($self._tree())._frame()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["frame"]=2
//>>excludeEnd("ctx");
][0],$recv($self._graphics())._frame(),$self._footer()]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asSilk",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CoViD19);

$core.addMethod(
$core.method({
selector: "augmentPage",
protocol: "presenting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "augmentPage\x0a\x09Silk new << self asSilk.\x0a\x09self tree refresh.\x0a\x09self model getDataFor: self",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["<<", "new", "asSilk", "refresh", "tree", "getDataFor:", "model"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv($globals.Silk)._new()).__lt_lt($self._asSilk());
$recv($self._tree())._refresh();
$recv($self._model())._getDataFor_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"augmentPage",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CoViD19);

$core.addMethod(
$core.method({
selector: "dataReceived",
protocol: "events",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dataReceived\x0a\x09self version refresh",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["refresh", "version"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._version())._refresh();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dataReceived",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CoViD19);

$core.addMethod(
$core.method({
selector: "datasetSelected",
protocol: "events",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "datasetSelected\x0a\x09self about refresh.\x0a\x09self graphics refresh",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["refresh", "about", "graphics"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[$recv($self._about())._refresh()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["refresh"]=1
//>>excludeEnd("ctx");
][0];
$recv($self._graphics())._refresh();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"datasetSelected",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CoViD19);

$core.addMethod(
$core.method({
selector: "footer",
protocol: "presenting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "footer\x0a\x09^Silk FOOTER: {\x0a\x09\x09self softwareVersionInfo.\x0a\x09\x09self version refresh frame}",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["FOOTER:", "softwareVersionInfo", "frame", "refresh", "version"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Silk)._FOOTER_([$self._softwareVersionInfo(),$recv($recv($self._version())._refresh())._frame()]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"footer",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CoViD19);

$core.addMethod(
$core.method({
selector: "graphics",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "graphics\x0a\x09\x22<Graphics>\x0a\x09the graphics of a territory\x22\x0a\x09\x0a\x09^graphics ifNil: [\x0a\x09\x09| component |\x0a\x09\x09component := Graphics on: self tree in: (Silk DIV: 'id' -> 'Graphics').\x0a\x09\x09component territoryView: self about.\x0a\x09\x09graphics := component]",
referencedClasses: ["Graphics", "Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "on:in:", "tree", "DIV:", "->", "territoryView:", "about"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self.graphics;
if($1 == null || $1.a$nil){
var component;
component=$recv($globals.Graphics)._on_in_($self._tree(),$recv($globals.Silk)._DIV_("id".__minus_gt("Graphics")));
$recv(component)._territoryView_($self._about());
$self.graphics=component;
return $self.graphics;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"graphics",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CoViD19);

$core.addMethod(
$core.method({
selector: "header",
protocol: "presenting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "header\x0a\x09^Silk HEADER: {\x0a\x09\x09Silk H1: {\x0a\x09\x09\x09Silk DIV: 'CoViD-19 Charts'. \x0a\x09\x09\x09Silk DIV: {'class' -> 'Subtitle'. 'Do not trust the numbers!'}}}",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["HEADER:", "H1:", "DIV:", "->"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Silk)._HEADER_([$recv($globals.Silk)._H1_([[$recv($globals.Silk)._DIV_("CoViD-19 Charts")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["DIV:"]=1
//>>excludeEnd("ctx");
][0],$recv($globals.Silk)._DIV_(["class".__minus_gt("Subtitle"),"Do not trust the numbers!"])])]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"header",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CoViD19);

$core.addMethod(
$core.method({
selector: "model",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "model\x0a\x09\x22the model with all data\x22\x0a\x09\x0a\x09^model ifNil: [model := CoViD19Application current]",
referencedClasses: ["CoViD19Application"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "current"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self.model;
if($1 == null || $1.a$nil){
$self.model=$recv($globals.CoViD19Application)._current();
return $self.model;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"model",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CoViD19);

$core.addMethod(
$core.method({
selector: "refreshTree",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "refreshTree\x0a\x09self tree refresh.\x0a\x09self about refresh.\x0a\x09self graphics refresh",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["refresh", "tree", "about", "graphics"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[$recv($self._tree())._refresh()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["refresh"]=1
//>>excludeEnd("ctx");
][0];
[$recv($self._about())._refresh()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["refresh"]=2
//>>excludeEnd("ctx");
][0];
$recv($self._graphics())._refresh();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"refreshTree",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CoViD19);

$core.addMethod(
$core.method({
selector: "softwareNameAnchor",
protocol: "presenting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "softwareNameAnchor\x0a\x09^Silk A: {'CoViD-19 Charts'.\x0a\x09\x09'href' -> 'https://github.com/ChristianHaider/CoViD19UI'.\x0a\x09\x09'target' -> '_blank'.\x0a\x09\x09'rel' -> 'noopener'}",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["A:", "->"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Silk)._A_(["CoViD-19 Charts",["href".__minus_gt("https://github.com/ChristianHaider/CoViD19UI")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=1
//>>excludeEnd("ctx");
][0],["target".__minus_gt("_blank")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=2
//>>excludeEnd("ctx");
][0],"rel".__minus_gt("noopener")]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"softwareNameAnchor",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CoViD19);

$core.addMethod(
$core.method({
selector: "softwareVersionInfo",
protocol: "presenting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "softwareVersionInfo\x0a\x09^Silk SPAN: {\x0a\x09\x09Silk SPAN: {'class' -> 'VersionLabel'. 'Browser app:'}.\x0a\x09\x09Silk SPAN: {'class' -> 'VersionName'. self softwareNameAnchor}.\x0a\x09\x09Silk SPAN: {'class' -> 'VersionDate'. self model programModificationDate asLocaleString}}",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["SPAN:", "->", "softwareNameAnchor", "asLocaleString", "programModificationDate", "model"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return [$recv($globals.Silk)._SPAN_([[$recv($globals.Silk)._SPAN_([["class".__minus_gt("VersionLabel")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=1
//>>excludeEnd("ctx");
][0],"Browser app:"])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["SPAN:"]=2
//>>excludeEnd("ctx");
][0],[$recv($globals.Silk)._SPAN_([["class".__minus_gt("VersionName")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=2
//>>excludeEnd("ctx");
][0],$self._softwareNameAnchor()])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["SPAN:"]=3
//>>excludeEnd("ctx");
][0],$recv($globals.Silk)._SPAN_(["class".__minus_gt("VersionDate"),$recv($recv($self._model())._programModificationDate())._asLocaleString()])])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["SPAN:"]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"softwareVersionInfo",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CoViD19);

$core.addMethod(
$core.method({
selector: "territorySelected",
protocol: "events",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "territorySelected\x0a\x09self about refresh.\x0a\x09self graphics refresh",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["refresh", "about", "graphics"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[$recv($self._about())._refresh()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["refresh"]=1
//>>excludeEnd("ctx");
][0];
$recv($self._graphics())._refresh();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"territorySelected",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CoViD19);

$core.addMethod(
$core.method({
selector: "tree",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tree\x0a\x09\x22<Tree>\x0a\x09the world tree\x22\x0a\x09\x0a\x09^tree ifNil: [\x0a\x09\x09| component |\x0a\x09\x09component := Tree on: self model world in: (Silk DIV: 'id' -> 'WorldTree').\x0a\x09\x09component announcer on: TerritorySelected send: #territorySelected to: self.\x0a\x09\x09component announcer on: DataReceived send: #dataReceived to: self.\x0a\x09\x09tree := component]",
referencedClasses: ["Tree", "Silk", "TerritorySelected", "DataReceived"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "on:in:", "world", "model", "DIV:", "->", "on:send:to:", "announcer"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self.tree;
if($1 == null || $1.a$nil){
var component;
component=$recv($globals.Tree)._on_in_($recv($self._model())._world(),$recv($globals.Silk)._DIV_("id".__minus_gt("WorldTree")));
[$recv([$recv(component)._announcer()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["announcer"]=1
//>>excludeEnd("ctx");
][0])._on_send_to_($globals.TerritorySelected,"territorySelected",self)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["on:send:to:"]=1
//>>excludeEnd("ctx");
][0];
$recv($recv(component)._announcer())._on_send_to_($globals.DataReceived,"dataReceived",self);
$self.tree=component;
return $self.tree;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tree",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CoViD19);

$core.addMethod(
$core.method({
selector: "version",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "version\x0a\x09\x22<Version>\x0a\x09shows a version with title, name and date\x22\x0a\x09\x0a\x09^version ifNil: [\x0a\x09\x09version := SilkLeafPresenter shows: [self model] in: Silk SPAN do: [:application |\x0a\x09\x09\x09{Silk SPAN: {'class' -> 'VersionLabel'. 'Data collector:'}.\x0a\x09\x09\x09Silk SPAN: {'class' -> 'VersionName'. Silk SPAN: application serverName, ' ', application serverVersion}.\x0a\x09\x09\x09Silk SPAN: {'class' -> 'VersionDate'. application serverModificationDate asLocaleString}}]]",
referencedClasses: ["SilkLeafPresenter", "Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "shows:in:do:", "model", "SPAN", "SPAN:", "->", ",", "serverName", "serverVersion", "asLocaleString", "serverModificationDate"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self.version;
if($1 == null || $1.a$nil){
$self.version=$recv($globals.SilkLeafPresenter)._shows_in_do_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._model();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}),$recv($globals.Silk)._SPAN(),(function(application){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return [[$recv($globals.Silk)._SPAN_([["class".__minus_gt("VersionLabel")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["->"]=1
//>>excludeEnd("ctx");
][0],"Data collector:"])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["SPAN:"]=1
//>>excludeEnd("ctx");
][0],[$recv($globals.Silk)._SPAN_([["class".__minus_gt("VersionName")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["->"]=2
//>>excludeEnd("ctx");
][0],[$recv($globals.Silk)._SPAN_([$recv($recv($recv(application)._serverName()).__comma(" ")).__comma($recv(application)._serverVersion())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx[","]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["SPAN:"]=3
//>>excludeEnd("ctx");
][0]])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["SPAN:"]=2
//>>excludeEnd("ctx");
][0],$recv($globals.Silk)._SPAN_(["class".__minus_gt("VersionDate"),$recv($recv(application)._serverModificationDate())._asLocaleString()])];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({application:application},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return $self.version;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"version",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CoViD19);


$core.setSlots($globals.CoViD19.a$cls, ["current"]);
$core.addMethod(
$core.method({
selector: "current",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "current\x0a\x09  ^current ifNil: [current := self new]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self.current;
if($1 == null || $1.a$nil){
$self.current=$self._new();
return $self.current;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"current",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CoViD19.a$cls);

$core.addMethod(
$core.method({
selector: "heliosToDo",
protocol: "documentation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "heliosToDo\x0a\x09  ^#('show references to inst vars')",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return ["show references to inst vars"];

}; }),
$globals.CoViD19.a$cls);

$core.addMethod(
$core.method({
selector: "start",
protocol: "starting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x09  self current augmentPage",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["augmentPage", "current"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._current())._augmentPage();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CoViD19.a$cls);


$core.addClass("Component", $globals.Object, "Covid19view");
$core.setSlots($globals.Component, ["frame", "model", "announcer"]);
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Component.comment="UI element presenting a model as Silk object\x0a\x0aThe `model` is a domain object with an announcer. A component subscribes to changes of the domain object. \x0a\x0aTwo kind of changes are implemented by default: `#structureChanged` and `#appearanceChanged`.\x0a\x0aA component has `parts` in which child components are held.\x0a\x0aA component has a `frame` holding the Silk into which it is inserted with `#asSilk`. This allows for `#refresh`.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "announcer",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "announcer\x0a\x09\x22<Announcer>\x0a\x09holds all subscriptions to changes of the receiver\x22\x0a\x09\x0a\x09^announcer ifNil: [announcer := Announcer new]",
referencedClasses: ["Announcer"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self.announcer;
if($1 == null || $1.a$nil){
$self.announcer=$recv($globals.Announcer)._new();
return $self.announcer;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"announcer",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Component);

$core.addMethod(
$core.method({
selector: "asSilk",
protocol: "presenting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asSilk\x0a\x09\x22<Silk>\x0a\x09Web element to be inserted into the #frame\x22\x0a\x09\x0a\x09^self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["subclassResponsibility"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._subclassResponsibility();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asSilk",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Component);

$core.addMethod(
$core.method({
selector: "frame",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "frame\x0a\x09\x22<Silk>\x0a\x09The HTML element into which the receiver inserted\x22\x0a\x09\x0a\x09^frame",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.frame;

}; }),
$globals.Component);

$core.addMethod(
$core.method({
selector: "frame:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSilk"],
source: "frame: aSilk\x0a\x09frame := aSilk",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aSilk){
var self=this,$self=this;
$self.frame=aSilk;
return self;

}; }),
$globals.Component);

$core.addMethod(
$core.method({
selector: "initializeFrame:model:",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSilk", "aModel"],
source: "initializeFrame: aSilk model: aModel\x0a\x09frame := aSilk.\x0a\x09model := aModel",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aSilk,aModel){
var self=this,$self=this;
$self.frame=aSilk;
$self.model=aModel;
return self;

}; }),
$globals.Component);

$core.addMethod(
$core.method({
selector: "initializeModel:",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aModel"],
source: "initializeModel: aModel\x0a\x09model := aModel",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aModel){
var self=this,$self=this;
$self.model=aModel;
return self;

}; }),
$globals.Component);

$core.addMethod(
$core.method({
selector: "keyFor:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAspect"],
source: "keyFor: anAspect\x0a\x09\x22<String>\x0a\x09String for a setting in the web storage\x22\x0a\x09\x0a\x09^self class name asString, '.Aspect.', anAspect asString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: [",", "asString", "name", "class"]
}, function ($methodClass){ return function (anAspect){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return [$recv($recv([$recv($recv($self._class())._name())._asString()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["asString"]=1
//>>excludeEnd("ctx");
][0]).__comma(".Aspect.")).__comma($recv(anAspect)._asString())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"keyFor:",{anAspect:anAspect})});
//>>excludeEnd("ctx");
}; }),
$globals.Component);

$core.addMethod(
$core.method({
selector: "localAt:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAspect"],
source: "localAt: anAspect\x0a\x09\x22<Object | nil>\x0a\x09Global setting in the web local storage\x22\x0a\x09\x0a\x09^(self keyFor: anAspect) settingValue",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["settingValue", "keyFor:"]
}, function ($methodClass){ return function (anAspect){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._keyFor_(anAspect))._settingValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"localAt:",{anAspect:anAspect})});
//>>excludeEnd("ctx");
}; }),
$globals.Component);

$core.addMethod(
$core.method({
selector: "localAt:ifAbsent:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAspect", "anAbsentBlock"],
source: "localAt: anAspect ifAbsent: anAbsentBlock\x0a\x09\x22<Object>\x0a\x09Global setting in the web local storage\x22\x0a\x09\x0a\x09^(self keyFor: anAspect) settingValue ifNil: anAbsentBlock",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "settingValue", "keyFor:"]
}, function ($methodClass){ return function (anAspect,anAbsentBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($self._keyFor_(anAspect))._settingValue();
return $recv($1)._ifNil_(anAbsentBlock);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"localAt:ifAbsent:",{anAspect:anAspect,anAbsentBlock:anAbsentBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.Component);

$core.addMethod(
$core.method({
selector: "localAt:put:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAspect", "anObject"],
source: "localAt: anAspect put: anObject\x0a\x09^(self keyFor: anAspect) settingValue: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["settingValue:", "keyFor:"]
}, function ($methodClass){ return function (anAspect,anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._keyFor_(anAspect))._settingValue_(anObject);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"localAt:put:",{anAspect:anAspect,anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.Component);

$core.addMethod(
$core.method({
selector: "model",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "model\x0a\x09\x22<Object>\x0a\x09essential required domain object of the receiver. Never nil\x22\x0a\x09\x0a\x09^model",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.model;

}; }),
$globals.Component);

$core.addMethod(
$core.method({
selector: "refresh",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "refresh\x0a\x09self frame resetContents.\x0a\x09self frame << self asSilk",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["resetContents", "frame", "<<", "asSilk"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv([$self._frame()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["frame"]=1
//>>excludeEnd("ctx");
][0])._resetContents();
$recv($self._frame()).__lt_lt($self._asSilk());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"refresh",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Component);

$core.addMethod(
$core.method({
selector: "sessionAt:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey"],
source: "sessionAt: aKey\x0a\x09\x22<String | nil>\x0a\x09the value at aKey in the web session storage\x22\x0a\x09\x0a\x09^sessionStorage getItem: aKey",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["getItem:"]
}, function ($methodClass){ return function (aKey){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(sessionStorage)._getItem_(aKey);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sessionAt:",{aKey:aKey})});
//>>excludeEnd("ctx");
}; }),
$globals.Component);

$core.addMethod(
$core.method({
selector: "sessionAt:ifAbsent:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "anAbsentBlock"],
source: "sessionAt: aKey ifAbsent: anAbsentBlock\x0a\x09\x22<String>\x0a\x09the value at aKey in the web session storage\x22\x0a\x09\x0a\x09^(self sessionAt: aKey) ifNil: anAbsentBlock",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "sessionAt:"]
}, function ($methodClass){ return function (aKey,anAbsentBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._sessionAt_(aKey);
return $recv($1)._ifNil_(anAbsentBlock);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sessionAt:ifAbsent:",{aKey:aKey,anAbsentBlock:anAbsentBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.Component);

$core.addMethod(
$core.method({
selector: "sessionAt:put:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "aString"],
source: "sessionAt: aKey put: aString\x0a\x09sessionStorage setItem: aKey to: aString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["setItem:to:"]
}, function ($methodClass){ return function (aKey,aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(sessionStorage)._setItem_to_(aKey,aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sessionAt:put:",{aKey:aKey,aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.Component);

$core.addMethod(
$core.method({
selector: "sessionKeys",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sessionKeys\x0a\x09\x22<Array of: Symbol>\x22\x0a\x09\x0a\x09^(0 to: sessionStorage length - 1) collect: [:index | sessionStorage key: index]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["collect:", "to:", "-", "length", "key:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv((0)._to_($recv($recv(sessionStorage)._length()).__minus((1))))._collect_((function(index){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(sessionStorage)._key_(index);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({index:index},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sessionKeys",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Component);


$core.addMethod(
$core.method({
selector: "frame:model:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSilk", "aModel"],
source: "frame: aSilk model: aModel\x0a\x09| inst |\x0a\x09inst := self new.\x0a\x09inst initializeFrame: aSilk model: aModel.\x0a\x09^inst",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "initializeFrame:model:"]
}, function ($methodClass){ return function (aSilk,aModel){
var self=this,$self=this;
var inst;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
inst=$self._new();
$recv(inst)._initializeFrame_model_(aSilk,aModel);
return inst;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"frame:model:",{aSilk:aSilk,aModel:aModel,inst:inst})});
//>>excludeEnd("ctx");
}; }),
$globals.Component.a$cls);

$core.addMethod(
$core.method({
selector: "on:in:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aModel", "aSilk"],
source: "on: aModel in: aSilk\x0a\x09^self frame: aSilk model: aModel",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["frame:model:"]
}, function ($methodClass){ return function (aModel,aSilk){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._frame_model_(aSilk,aModel);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:in:",{aModel:aModel,aSilk:aSilk})});
//>>excludeEnd("ctx");
}; }),
$globals.Component.a$cls);


$core.addClass("Barchart", $globals.Component, "Covid19view");
$core.setSlots($globals.Barchart, ["dataset", "valuescale", "datescale"]);
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Barchart.comment="A bar chart with decent date and value scale.\x0aDatapoints are shown as bars with a tooltip showing details\x0a\x0aThe model of the chart component is a Graphics object holding all parameters used";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "asSilk",
protocol: "presenting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asSilk\x0a\x09^{\x09Silk DIV: {\x0a\x09\x09\x09'class' -> 'ChartHeader'.\x0a\x09\x09\x09(Silk SPAN: 'class' -> 'ChartLegend') << (self primaryAspects selectors collect: [:aspect | self legendFor: aspect])}.\x0a\x09\x09self svg}",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["DIV:", "->", "<<", "SPAN:", "collect:", "selectors", "primaryAspects", "legendFor:", "svg"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return [$recv($globals.Silk)._DIV_([["class".__minus_gt("ChartHeader")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=1
//>>excludeEnd("ctx");
][0],$recv($recv($globals.Silk)._SPAN_("class".__minus_gt("ChartLegend"))).__lt_lt($recv($recv($self._primaryAspects())._selectors())._collect_((function(aspect){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._legendFor_(aspect);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({aspect:aspect},$ctx1,1)});
//>>excludeEnd("ctx");
})))]),$self._svg()];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asSilk",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "aspects",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "aspects\x0a\x09\x22<Array of: Symbol>\x0a\x09selectors of datapoint instances in the series.\x0a\x09When the list is empty, all aspects are shown\x22\x0a\x09\x0a\x09^self primaryAspects selectedAspects",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["selectedAspects", "primaryAspects"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._primaryAspects())._selectedAspects();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"aspects",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "bar:forDatapoint:at:width:",
protocol: "presenting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAspectSymbol", "aDatapoint", "aBarLeft", "aWidth"],
source: "bar: anAspectSymbol forDatapoint: aDatapoint at: aBarLeft width: aWidth\x0a\x09\x22<g>\x22\x0a\x09\x0a\x09| value zero top bottom |\x0a\x09value := self yAt: (aDatapoint perform: anAspectSymbol).\x0a\x09zero := self yAt: 0.\x0a\x09top := value.\x0a\x09bottom := zero.\x0a\x09top > bottom ifTrue: [\x0a\x09\x09top := zero.\x0a\x09\x09bottom := value].\x0a\x09^SVG RECT: {\x0a\x09\x09'class' -> anAspectSymbol asString.\x0a\x09\x09'x' -> aBarLeft. 'y' -> top. \x0a\x09\x09'width' -> aWidth. 'height' -> (bottom - top)}",
referencedClasses: ["SVG"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["yAt:", "perform:", "ifTrue:", ">", "RECT:", "->", "asString", "-"]
}, function ($methodClass){ return function (anAspectSymbol,aDatapoint,aBarLeft,aWidth){
var self=this,$self=this;
var value,zero,top,bottom;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
value=[$self._yAt_($recv(aDatapoint)._perform_(anAspectSymbol))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["yAt:"]=1
//>>excludeEnd("ctx");
][0];
zero=$self._yAt_((0));
top=value;
bottom=zero;
if($core.assert($recv(top).__gt(bottom))){
top=zero;
bottom=value;
bottom;
}
return $recv($globals.SVG)._RECT_([["class".__minus_gt($recv(anAspectSymbol)._asString())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=1
//>>excludeEnd("ctx");
][0],["x".__minus_gt(aBarLeft)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=2
//>>excludeEnd("ctx");
][0],["y".__minus_gt(top)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=3
//>>excludeEnd("ctx");
][0],["width".__minus_gt(aWidth)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=4
//>>excludeEnd("ctx");
][0],"height".__minus_gt($recv(bottom).__minus(top))]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"bar:forDatapoint:at:width:",{anAspectSymbol:anAspectSymbol,aDatapoint:aDatapoint,aBarLeft:aBarLeft,aWidth:aWidth,value:value,zero:zero,top:top,bottom:bottom})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "barForDatapoint:at:width:",
protocol: "presenting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDatapoint", "aBarLeft", "aWidth"],
source: "barForDatapoint: aDatapoint at: aBarLeft width: aWidth\x0a\x09\x22<g>\x22\x0a\x09\x0a\x09| zero bars g |\x0a\x09zero := self yAt: 0.\x0a\x09bars :=OrderedCollection new.\x0a\x09(self aspects isEmpty or: [\x0a\x09self aspects includes: #confirmed]) ifTrue: [\x0a\x09\x09bars add: (self bar: #confirmed forDatapoint: aDatapoint at: aBarLeft width: aWidth)].\x0a\x09self aspects isEmpty ifTrue: [\x0a\x09\x09bars add: (self bar: #decided forDatapoint: aDatapoint at: aBarLeft width: aWidth)].\x0a\x09(self aspects includes: #recovered) ifTrue: [\x0a\x09\x09bars add: (self bar: #recovered forDatapoint: aDatapoint at: aBarLeft width: aWidth)].\x0a\x09(self aspects includes: #active) ifTrue: [\x0a\x09\x09bars add: (self bar: #active forDatapoint: aDatapoint at: aBarLeft width: aWidth)].\x0a\x09(self aspects isEmpty or: [\x0a\x09self aspects includes: #deaths]) ifTrue: [\x0a\x09\x09bars add: (self bar: #deaths forDatapoint: aDatapoint at: aBarLeft width: aWidth)].\x0a\x09g := SVG G: {\x0a\x09\x09'class' -> 'Bar'.\x0a\x09\x09bars}.\x0a\x09g on: #mouseover bind: [:event | self mouseover: event datapoint: aDatapoint].\x0a\x09g on: #mouseout bind: [:event | self mouseout: event datapoint: aDatapoint].\x0a\x09^g",
referencedClasses: ["OrderedCollection", "SVG"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["yAt:", "new", "ifTrue:", "or:", "isEmpty", "aspects", "includes:", "add:", "bar:forDatapoint:at:width:", "G:", "->", "on:bind:", "mouseover:datapoint:", "mouseout:datapoint:"]
}, function ($methodClass){ return function (aDatapoint,aBarLeft,aWidth){
var self=this,$self=this;
var zero,bars,g;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
zero=$self._yAt_((0));
bars=$recv($globals.OrderedCollection)._new();
if($core.assert([$recv([$self._aspects()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["aspects"]=1
//>>excludeEnd("ctx");
][0])._isEmpty()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["isEmpty"]=1
//>>excludeEnd("ctx");
][0])){
$1=true;
} else {
$1=[$recv([$self._aspects()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["aspects"]=2
//>>excludeEnd("ctx");
][0])._includes_("confirmed")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["includes:"]=1
//>>excludeEnd("ctx");
][0];
}
if($core.assert($1)){
[$recv(bars)._add_([$self._bar_forDatapoint_at_width_("confirmed",aDatapoint,aBarLeft,aWidth)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["bar:forDatapoint:at:width:"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=1
//>>excludeEnd("ctx");
][0];
}
if($core.assert([$recv([$self._aspects()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["aspects"]=3
//>>excludeEnd("ctx");
][0])._isEmpty()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["isEmpty"]=2
//>>excludeEnd("ctx");
][0])){
[$recv(bars)._add_([$self._bar_forDatapoint_at_width_("decided",aDatapoint,aBarLeft,aWidth)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["bar:forDatapoint:at:width:"]=2
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=2
//>>excludeEnd("ctx");
][0];
}
if($core.assert([$recv([$self._aspects()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["aspects"]=4
//>>excludeEnd("ctx");
][0])._includes_("recovered")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["includes:"]=2
//>>excludeEnd("ctx");
][0])){
[$recv(bars)._add_([$self._bar_forDatapoint_at_width_("recovered",aDatapoint,aBarLeft,aWidth)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["bar:forDatapoint:at:width:"]=3
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=3
//>>excludeEnd("ctx");
][0];
}
if($core.assert([$recv([$self._aspects()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["aspects"]=5
//>>excludeEnd("ctx");
][0])._includes_("active")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["includes:"]=3
//>>excludeEnd("ctx");
][0])){
[$recv(bars)._add_([$self._bar_forDatapoint_at_width_("active",aDatapoint,aBarLeft,aWidth)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["bar:forDatapoint:at:width:"]=4
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=4
//>>excludeEnd("ctx");
][0];
}
if($core.assert($recv([$self._aspects()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["aspects"]=6
//>>excludeEnd("ctx");
][0])._isEmpty())){
$2=true;
} else {
$2=$recv($self._aspects())._includes_("deaths");
}
if($core.assert($2)){
$recv(bars)._add_($self._bar_forDatapoint_at_width_("deaths",aDatapoint,aBarLeft,aWidth));
}
g=$recv($globals.SVG)._G_(["class".__minus_gt("Bar"),bars]);
[$recv(g)._on_bind_("mouseover",(function(event){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._mouseover_datapoint_(event,aDatapoint);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,8)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["on:bind:"]=1
//>>excludeEnd("ctx");
][0];
$recv(g)._on_bind_("mouseout",(function(event){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._mouseout_datapoint_(event,aDatapoint);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,9)});
//>>excludeEnd("ctx");
}));
return g;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"barForDatapoint:at:width:",{aDatapoint:aDatapoint,aBarLeft:aBarLeft,aWidth:aWidth,zero:zero,bars:bars,g:g})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "barForDatapoint:width:",
protocol: "presenting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDatapoint", "aWidth"],
source: "barForDatapoint: aDatapoint width: aWidth\x0a\x09\x22<g>\x22\x0a\x09\x0a\x09^self \x0a\x09\x09barForDatapoint: aDatapoint \x0a\x09\x09at: ((self xAt: aDatapoint date) - aWidth) \x0a\x09\x09width: aWidth",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["barForDatapoint:at:width:", "-", "xAt:", "date"]
}, function ($methodClass){ return function (aDatapoint,aWidth){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._barForDatapoint_at_width_(aDatapoint,$recv($self._xAt_($recv(aDatapoint)._date())).__minus(aWidth),aWidth);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"barForDatapoint:width:",{aDatapoint:aDatapoint,aWidth:aWidth})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "chartArea",
protocol: "presenting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "chartArea\x0a\x09\x22the chart\x22\x0a\x09\x0a\x09| chartArea barWidth |\x0a\x09chartArea := SVG G: {\x0a\x09\x09'class' -> 'GraphicsArea'.\x0a\x09\x09SVG RECT: {\x0a\x09\x09\x09'x' -> self chartLeft. 'y' -> self chartTop. \x0a\x09\x09\x09'width' -> self chartWidth. 'height' -> self chartHeight}}.\x0a\x09barWidth := self chartWidth / self days.\x0a\x09self datapoints do: [:datapoint |\x0a\x09\x09chartArea << (self barForDatapoint: datapoint width: barWidth)].\x0a\x09^chartArea",
referencedClasses: ["SVG"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["G:", "->", "RECT:", "chartLeft", "chartTop", "chartWidth", "chartHeight", "/", "days", "do:", "datapoints", "<<", "barForDatapoint:width:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var chartArea,barWidth;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
chartArea=$recv($globals.SVG)._G_([["class".__minus_gt("GraphicsArea")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=1
//>>excludeEnd("ctx");
][0],$recv($globals.SVG)._RECT_([["x".__minus_gt($self._chartLeft())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=2
//>>excludeEnd("ctx");
][0],["y".__minus_gt($self._chartTop())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=3
//>>excludeEnd("ctx");
][0],["width".__minus_gt([$self._chartWidth()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["chartWidth"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=4
//>>excludeEnd("ctx");
][0],"height".__minus_gt($self._chartHeight())])]);
barWidth=$recv($self._chartWidth()).__slash($self._days());
$recv($self._datapoints())._do_((function(datapoint){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(chartArea).__lt_lt($self._barForDatapoint_width_(datapoint,barWidth));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({datapoint:datapoint},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return chartArea;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"chartArea",{chartArea:chartArea,barWidth:barWidth})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "chartBottom",
protocol: "geometry",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "chartBottom\x0a\x09\x22<Number>\x22\x0a\x09\x0a\x09^90",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return (90);

}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "chartHeight",
protocol: "geometry",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "chartHeight\x0a\x09\x22<Number>\x22\x0a\x09\x0a\x09^self chartBottom - self chartTop",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["-", "chartBottom", "chartTop"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._chartBottom()).__minus($self._chartTop());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"chartHeight",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "chartLeft",
protocol: "geometry",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "chartLeft\x0a\x09\x22<Number>\x22\x0a\x09\x0a\x09^3",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return (3);

}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "chartRight",
protocol: "geometry",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "chartRight\x0a\x09\x22<Number>\x22\x0a\x09\x0a\x09^170",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return (170);

}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "chartTop",
protocol: "geometry",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "chartTop\x0a\x09\x22<Number>\x22\x0a\x09\x0a\x09^4",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return (4);

}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "chartWidth",
protocol: "geometry",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "chartWidth\x0a\x09\x22<Number>\x22\x0a\x09\x0a\x09^self chartRight - self chartLeft",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["-", "chartRight", "chartLeft"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._chartRight()).__minus($self._chartLeft());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"chartWidth",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "dataArePositive",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dataArePositive\x0a\x09\x22<Boolean>\x0a\x09true, if there are no negative numbers in the data\x22\x0a\x09\x0a\x09^self dataset positive",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["positive", "dataset"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._dataset())._positive();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dataArePositive",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "datapoints",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "datapoints\x0a\x09\x22<Array of: Datapoint>\x22\x0a\x09\x0a\x09^self dataset series",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["series", "dataset"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._dataset())._series();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"datapoints",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "dataset",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dataset\x0a\x09\x22<Dataset>\x22\x0a\x09\x0a\x09^dataset ifNil: [dataset := self newDataset]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "newDataset"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self.dataset;
if($1 == null || $1.a$nil){
$self.dataset=$self._newDataset();
return $self.dataset;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dataset",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "dateAxis",
protocol: "presenting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dateAxis\x0a\x09| dateAxis lastOfMonths |\x0a\x09dateAxis := SVG G: {\x0a\x09\x09'class' -> 'DateAxis'.\x0a\x09\x09'clip-path' -> 'url(#datescaleClip)'}.\x0a\x09self dataset lastDateOfWeeks do: [:date |\x0a\x09\x09| x |\x0a\x09\x09x := self xAt: date.\x0a\x09\x09dateAxis LINE: {\x0a\x09\x09\x09'class' -> 'Weekline'.\x0a\x09\x09\x09'x1' -> x. 'y1' -> self chartBottom.\x0a\x09\x09\x09'x2' -> x. 'y2' -> self chartTop}].\x0a\x09lastOfMonths := self dataset lastDateOfMonths.\x0a\x09lastOfMonths ifEmpty: [\x0a\x09\x09| x |\x0a\x09\x09x := self xAt: self firstDate.\x0a\x09\x09dateAxis TEXT: {\x0a\x09\x09\x09'class' -> 'MonthText'.\x0a\x09\x09\x09'x' -> (x + 10). 'y' -> (self chartBottom + 8).\x0a\x09\x09\x09self monthnameAt: self firstDate month}].\x0a\x09lastOfMonths do: [:date |\x0a\x09\x09| x |\x0a\x09\x09x := self xAt: date.\x0a\x09\x09dateAxis LINE: {\x0a\x09\x09\x09'class' -> 'Monthline'.\x0a\x09\x09\x09'x1' -> x. 'y1' -> (self chartBottom + self datescaleHeight).\x0a\x09\x09\x09'x2' -> x. 'y2' -> self chartTop}.\x0a\x09\x09dateAxis TEXT: {\x0a\x09\x09\x09'class' -> 'MonthText'.\x0a\x09\x09\x09'x' -> (x + 10). 'y' -> (self chartBottom + 8).\x0a\x09\x09\x09self nextMonthnameAt: date}].\x0a\x09^dateAxis",
referencedClasses: ["SVG"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["G:", "->", "do:", "lastDateOfWeeks", "dataset", "xAt:", "LINE:", "chartBottom", "chartTop", "lastDateOfMonths", "ifEmpty:", "firstDate", "TEXT:", "+", "monthnameAt:", "month", "datescaleHeight", "nextMonthnameAt:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var dateAxis,lastOfMonths;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
dateAxis=$recv($globals.SVG)._G_([["class".__minus_gt("DateAxis")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=1
//>>excludeEnd("ctx");
][0],["clip-path".__minus_gt("url(#datescaleClip)")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=2
//>>excludeEnd("ctx");
][0]]);
[$recv($recv([$self._dataset()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["dataset"]=1
//>>excludeEnd("ctx");
][0])._lastDateOfWeeks())._do_((function(date){
var x;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
x=[$self._xAt_(date)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["xAt:"]=1
//>>excludeEnd("ctx");
][0];
return [$recv(dateAxis)._LINE_([["class".__minus_gt("Weekline")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["->"]=3
//>>excludeEnd("ctx");
][0],["x1".__minus_gt(x)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["->"]=4
//>>excludeEnd("ctx");
][0],["y1".__minus_gt([$self._chartBottom()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["chartBottom"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["->"]=5
//>>excludeEnd("ctx");
][0],["x2".__minus_gt(x)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["->"]=6
//>>excludeEnd("ctx");
][0],["y2".__minus_gt([$self._chartTop()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["chartTop"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["->"]=7
//>>excludeEnd("ctx");
][0]])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["LINE:"]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({date:date,x:x},$ctx1,1)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["do:"]=1
//>>excludeEnd("ctx");
][0];
lastOfMonths=$recv($self._dataset())._lastDateOfMonths();
$recv(lastOfMonths)._ifEmpty_((function(){
var x;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
x=[$self._xAt_([$self._firstDate()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["firstDate"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["xAt:"]=2
//>>excludeEnd("ctx");
][0];
return [$recv(dateAxis)._TEXT_([["class".__minus_gt("MonthText")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["->"]=8
//>>excludeEnd("ctx");
][0],["x".__minus_gt([$recv(x).__plus((10))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["+"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["->"]=9
//>>excludeEnd("ctx");
][0],["y".__minus_gt([$recv([$self._chartBottom()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["chartBottom"]=2
//>>excludeEnd("ctx");
][0]).__plus((8))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["+"]=2
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["->"]=10
//>>excludeEnd("ctx");
][0],$self._monthnameAt_($recv($self._firstDate())._month())])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["TEXT:"]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$recv(lastOfMonths)._do_((function(date){
var x;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
x=$self._xAt_(date);
$recv(dateAxis)._LINE_([["class".__minus_gt("Monthline")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["->"]=11
//>>excludeEnd("ctx");
][0],["x1".__minus_gt(x)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["->"]=12
//>>excludeEnd("ctx");
][0],["y1".__minus_gt([$recv([$self._chartBottom()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["chartBottom"]=3
//>>excludeEnd("ctx");
][0]).__plus($self._datescaleHeight())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["+"]=3
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["->"]=13
//>>excludeEnd("ctx");
][0],["x2".__minus_gt(x)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["->"]=14
//>>excludeEnd("ctx");
][0],["y2".__minus_gt($self._chartTop())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["->"]=15
//>>excludeEnd("ctx");
][0]]);
return $recv(dateAxis)._TEXT_([["class".__minus_gt("MonthText")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["->"]=16
//>>excludeEnd("ctx");
][0],["x".__minus_gt([$recv(x).__plus((10))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["+"]=4
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["->"]=17
//>>excludeEnd("ctx");
][0],"y".__minus_gt($recv($self._chartBottom()).__plus((8))),$self._nextMonthnameAt_(date)]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({date:date,x:x},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return dateAxis;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dateAxis",{dateAxis:dateAxis,lastOfMonths:lastOfMonths})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "datescale",
protocol: "accessing datescale",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "datescale\x0a\x09\x22<Datescale>\x22\x0a\x09\x0a\x09^datescale ifNil: [\x0a\x09\x09datescale := Datescale from: self firstDate to: self model lastDate]",
referencedClasses: ["Datescale"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "from:to:", "firstDate", "lastDate", "model"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self.datescale;
if($1 == null || $1.a$nil){
$self.datescale=$recv($globals.Datescale)._from_to_($self._firstDate(),$recv($self._model())._lastDate());
return $self.datescale;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"datescale",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "datescaleHeight",
protocol: "geometry",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "datescaleHeight\x0a\x09\x22<Number>\x22\x0a\x09\x0a\x09^self viewHeight - self chartBottom",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["-", "viewHeight", "chartBottom"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._viewHeight()).__minus($self._chartBottom());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"datescaleHeight",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "days",
protocol: "accessing datescale",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "days\x0a\x09\x22<Integer>\x22\x0a\x09\x0a\x09^self datescale days",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["days", "datescale"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._datescale())._days();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"days",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "firstDate",
protocol: "accessing datescale",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "firstDate\x0a\x09\x22<Date>\x22\x0a\x09\x0a\x09^Date fromMilliseconds: self dataset firstDate asMilliseconds - (24 * 60 * 60 * 1000)",
referencedClasses: ["Date"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["fromMilliseconds:", "-", "asMilliseconds", "firstDate", "dataset", "*"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Date)._fromMilliseconds_($recv($recv($recv($self._dataset())._firstDate())._asMilliseconds()).__minus([$recv([$recv((24).__star((60))).__star((60))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["*"]=2
//>>excludeEnd("ctx");
][0]).__star((1000))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["*"]=1
//>>excludeEnd("ctx");
][0]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"firstDate",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "fullBoxClassed:",
protocol: "presenting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClassString"],
source: "fullBoxClassed: aClassString\x0a\x09^SVG RECT: {\x0a\x09\x09'class' -> aClassString.\x0a\x09\x09'x' -> 0. 'y' -> 0. \x0a\x09\x09'width' -> '100%'. 'height' -> '100%'}",
referencedClasses: ["SVG"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["RECT:", "->"]
}, function ($methodClass){ return function (aClassString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.SVG)._RECT_([["class".__minus_gt(aClassString)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=1
//>>excludeEnd("ctx");
][0],["x".__minus_gt((0))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=2
//>>excludeEnd("ctx");
][0],["y".__minus_gt((0))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=3
//>>excludeEnd("ctx");
][0],["width".__minus_gt("100%")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=4
//>>excludeEnd("ctx");
][0],"height".__minus_gt("100%")]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fullBoxClassed:",{aClassString:aClassString})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "infoValueString:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "infoValueString: aNumber\x0a\x09\x22<String>\x0a\x09the number on a button\x22\x0a\x09\x0a\x09^aNumber asLocalizedString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["asLocalizedString"]
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(aNumber)._asLocalizedString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"infoValueString:",{aNumber:aNumber})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "isLogarithmic",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isLogarithmic\x0a\x09\x22<Boolean>\x22\x0a\x09\x0a\x09^self class logarithmic",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["logarithmic", "class"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._class())._logarithmic();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isLogarithmic",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "lastConfirmed",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "lastConfirmed\x0a\x09\x22<Integer>\x22\x0a\x09\x0a\x09^self dataset lastValueOf: #confirmed",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["lastValueOf:", "dataset"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._dataset())._lastValueOf_("confirmed");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lastConfirmed",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "lastDate",
protocol: "accessing datescale",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "lastDate\x0a\x09\x22<Date>\x22\x0a\x09\x0a\x09^self datescale to",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["to", "datescale"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._datescale())._to();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lastDate",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "legendFor:",
protocol: "presenting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAspectSymbol"],
source: "legendFor: anAspectSymbol\x0a\x09(self primaryAspects hasAspect: anAspectSymbol) ifFalse: [\x0a\x09\x09^Silk SPAN].\x0a\x09^Silk SPAN: {\x0a\x09\x09'class' -> ('Legend', (self primaryAspects legendSelectionClassFor: anAspectSymbol)).\x0a\x09\x09self legendFor: anAspectSymbol value: (self dataset lastValueOf: anAspectSymbol)}",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifFalse:", "hasAspect:", "primaryAspects", "SPAN", "SPAN:", "->", ",", "legendSelectionClassFor:", "legendFor:value:", "lastValueOf:", "dataset"]
}, function ($methodClass){ return function (anAspectSymbol){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if(!$core.assert($recv([$self._primaryAspects()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["primaryAspects"]=1
//>>excludeEnd("ctx");
][0])._hasAspect_(anAspectSymbol))){
return $recv($globals.Silk)._SPAN();
}
return $recv($globals.Silk)._SPAN_(["class".__minus_gt("Legend".__comma($recv($self._primaryAspects())._legendSelectionClassFor_(anAspectSymbol))),$self._legendFor_value_(anAspectSymbol,$recv($self._dataset())._lastValueOf_(anAspectSymbol))]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"legendFor:",{anAspectSymbol:anAspectSymbol})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "legendFor:value:",
protocol: "presenting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aNumber"],
source: "legendFor: aString value: aNumber\x0a\x09^{\x0a\x09\x09Silk SPAN: {'class' -> 'LegendBar'. SVG SVG: {'viewBox' -> '0 0 10 6'. self fullBoxClassed: aString}}.\x0a\x09\x09Silk SPAN: {'class' -> 'LegendValue'. self infoValueString: aNumber}}",
referencedClasses: ["Silk", "SVG"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["SPAN:", "->", "SVG:", "fullBoxClassed:", "infoValueString:"]
}, function ($methodClass){ return function (aString,aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return [[$recv($globals.Silk)._SPAN_([["class".__minus_gt("LegendBar")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=1
//>>excludeEnd("ctx");
][0],$recv($globals.SVG)._SVG_([["viewBox".__minus_gt("0 0 10 6")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=2
//>>excludeEnd("ctx");
][0],$self._fullBoxClassed_(aString)])])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["SPAN:"]=1
//>>excludeEnd("ctx");
][0],$recv($globals.Silk)._SPAN_(["class".__minus_gt("LegendValue"),$self._infoValueString_(aNumber)])];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"legendFor:value:",{aString:aString,aNumber:aNumber})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "linearValuescale",
protocol: "accessing valuescale",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "linearValuescale\x0a\x09\x22<LinearValuescale>\x22\x0a\x09\x0a\x09| min max |\x0a\x09min := self minValue.\x0a\x09max := self maxValue.\x0a\x09(min isZero and: [\x0a\x09max isZero]) ifTrue: [\x0a\x09\x09max := 10].\x0a\x09^LinearValuescale from: min to: max",
referencedClasses: ["LinearValuescale"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["minValue", "maxValue", "ifTrue:", "and:", "isZero", "from:to:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var min,max;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
min=$self._minValue();
max=$self._maxValue();
if($core.assert([$recv(min)._isZero()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["isZero"]=1
//>>excludeEnd("ctx");
][0])){
$1=$recv(max)._isZero();
} else {
$1=false;
}
if($core.assert($1)){
max=(10);
max;
}
return $recv($globals.LinearValuescale)._from_to_(min,max);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"linearValuescale",{min:min,max:max})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "logarithmicValuescale",
protocol: "accessing valuescale",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "logarithmicValuescale\x0a\x09\x22<LogarithmicValuescale>\x22\x0a\x09\x0a\x09self maxValue <= 1 ifTrue: [\x0a\x09\x09^self linearValuescale].\x0a\x09^LogarithmicValuescale from: 1 to: self maxValue",
referencedClasses: ["LogarithmicValuescale"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "<=", "maxValue", "linearValuescale", "from:to:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert($recv([$self._maxValue()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["maxValue"]=1
//>>excludeEnd("ctx");
][0]).__lt_eq((1)))){
return $self._linearValuescale();
}
return $recv($globals.LogarithmicValuescale)._from_to_((1),$self._maxValue());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"logarithmicValuescale",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "maxValue",
protocol: "accessing valuescale",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "maxValue\x0a\x09\x22<Integer>\x22\x0a\x09\x0a\x09| datapoints |\x0a\x09datapoints := self datapoints.\x0a\x09^datapoints allButFirst inject: (datapoints first maxValueForAspects: self aspects) into: [:max :datapoint | \x0a\x09\x09max max: (datapoint maxValueForAspects: self aspects)]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["datapoints", "inject:into:", "allButFirst", "maxValueForAspects:", "first", "aspects", "max:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var datapoints;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
datapoints=$self._datapoints();
return $recv($recv(datapoints)._allButFirst())._inject_into_([$recv($recv(datapoints)._first())._maxValueForAspects_([$self._aspects()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["aspects"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["maxValueForAspects:"]=1
//>>excludeEnd("ctx");
][0],(function(max,datapoint){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(max)._max_($recv(datapoint)._maxValueForAspects_($self._aspects()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({max:max,datapoint:datapoint},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"maxValue",{datapoints:datapoints})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "minValue",
protocol: "accessing valuescale",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "minValue\x0a\x09\x22<Integer>\x22\x0a\x09\x0a\x09| datapoints |\x0a\x09datapoints := self datapoints.\x0a\x09^datapoints allButFirst inject: (datapoints first minValueForAspects: self aspects) into: [:min :datapoint | \x0a\x09\x09min min: (datapoint minValueForAspects: self aspects)]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["datapoints", "inject:into:", "allButFirst", "minValueForAspects:", "first", "aspects", "min:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var datapoints;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
datapoints=$self._datapoints();
return $recv($recv(datapoints)._allButFirst())._inject_into_([$recv($recv(datapoints)._first())._minValueForAspects_([$self._aspects()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["aspects"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["minValueForAspects:"]=1
//>>excludeEnd("ctx");
][0],(function(min,datapoint){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(min)._min_($recv(datapoint)._minValueForAspects_($self._aspects()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({min:min,datapoint:datapoint},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"minValue",{datapoints:datapoints})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "monthnameAt:",
protocol: "accessing datescale",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "monthnameAt: anInteger\x0a\x09\x22<String>\x22\x0a\x09\x0a\x09| index |\x0a\x09index := anInteger.\x0a\x09index > 12 ifTrue: [\x0a\x09\x09index := 1].\x0a\x09^#('January' 'February' 'March' 'April' 'May' 'June' 'July' 'August' 'September' 'October' 'November' 'December') at: index",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", ">", "at:"]
}, function ($methodClass){ return function (anInteger){
var self=this,$self=this;
var index;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
index=anInteger;
if($core.assert($recv(index).__gt((12)))){
index=(1);
index;
}
return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]._at_(index);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"monthnameAt:",{anInteger:anInteger,index:index})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "mouseout:datapoint:",
protocol: "events",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anEvent", "aDatapoint"],
source: "mouseout: anEvent datapoint: aDatapoint\x0a\x09'#Tooltip' asSilk << {'style' -> ('visibility: hidden;')}",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["<<", "asSilk", "->"]
}, function ($methodClass){ return function (anEvent,aDatapoint){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv("#Tooltip"._asSilk()).__lt_lt(["style".__minus_gt("visibility: hidden;")]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"mouseout:datapoint:",{anEvent:anEvent,aDatapoint:aDatapoint})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "mouseover:datapoint:",
protocol: "events",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anEvent", "aDatapoint"],
source: "mouseover: anEvent datapoint: aDatapoint\x0a\x09| tooltip |\x0a\x09tooltip := '#Tooltip' asSilk.\x0a\x09tooltip resetContents.\x0a\x09tooltip << {\x0a\x09\x09'style' -> (\x0a\x09\x09\x09'right: ', (window innerWidth - anEvent x) printString, 'px; ',\x0a\x09\x09\x09'top: ', anEvent y printString, 'px; ',\x0a\x09\x09\x09'visibility: visible;').\x0a\x09\x09Silk SPAN: {'class' -> 'LegendBar'}.\x0a\x09\x09Silk SPAN: {'class' -> 'LegendLabel'. aDatapoint date asLocaleDateString}.\x0a\x09\x09Silk SPAN: {'class' -> 'LegendValue'}.\x0a\x09\x09self tooltipClass: 'confirmed' label: 'confirmed' value: aDatapoint confirmed.\x0a\x09\x09self tooltipClass: 'recovered' label: 'recovered' value: aDatapoint recovered.\x0a\x09\x09self tooltipClass: 'deaths' label: 'deaths' value: aDatapoint deaths.\x0a\x09\x09self tooltipClass: 'active' label: 'active' value: aDatapoint active}",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["asSilk", "resetContents", "<<", "->", ",", "printString", "-", "innerWidth", "x", "y", "SPAN:", "asLocaleDateString", "date", "tooltipClass:label:value:", "confirmed", "recovered", "deaths", "active"]
}, function ($methodClass){ return function (anEvent,aDatapoint){
var self=this,$self=this;
var tooltip;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
tooltip="#Tooltip"._asSilk();
$recv(tooltip)._resetContents();
$recv(tooltip).__lt_lt([["style".__minus_gt([$recv([$recv([$recv([$recv([$recv("right: ".__comma([$recv($recv($recv(window)._innerWidth()).__minus($recv(anEvent)._x()))._printString()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["printString"]=1
//>>excludeEnd("ctx");
][0])).__comma("px; ")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=5
//>>excludeEnd("ctx");
][0]).__comma("top: ")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=4
//>>excludeEnd("ctx");
][0]).__comma($recv($recv(anEvent)._y())._printString())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=3
//>>excludeEnd("ctx");
][0]).__comma("px; ")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=2
//>>excludeEnd("ctx");
][0]).__comma("visibility: visible;")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=1
//>>excludeEnd("ctx");
][0],[$recv($globals.Silk)._SPAN_([["class".__minus_gt("LegendBar")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=2
//>>excludeEnd("ctx");
][0]])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["SPAN:"]=1
//>>excludeEnd("ctx");
][0],[$recv($globals.Silk)._SPAN_([["class".__minus_gt("LegendLabel")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=3
//>>excludeEnd("ctx");
][0],$recv($recv(aDatapoint)._date())._asLocaleDateString()])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["SPAN:"]=2
//>>excludeEnd("ctx");
][0],$recv($globals.Silk)._SPAN_(["class".__minus_gt("LegendValue")]),[$self._tooltipClass_label_value_("confirmed","confirmed",$recv(aDatapoint)._confirmed())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["tooltipClass:label:value:"]=1
//>>excludeEnd("ctx");
][0],[$self._tooltipClass_label_value_("recovered","recovered",$recv(aDatapoint)._recovered())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["tooltipClass:label:value:"]=2
//>>excludeEnd("ctx");
][0],[$self._tooltipClass_label_value_("deaths","deaths",$recv(aDatapoint)._deaths())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["tooltipClass:label:value:"]=3
//>>excludeEnd("ctx");
][0],$self._tooltipClass_label_value_("active","active",$recv(aDatapoint)._active())]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"mouseover:datapoint:",{anEvent:anEvent,aDatapoint:aDatapoint,tooltip:tooltip})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "newDataset",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newDataset\x0a\x09\x22<Dataset>\x22\x0a\x09\x0a\x09^self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["subclassResponsibility"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._subclassResponsibility();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newDataset",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "newValuescale",
protocol: "accessing valuescale",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newValuescale\x0a\x09\x22<Valuescale>\x22\x0a\x09\x0a\x09self isLogarithmic ifTrue: [\x0a\x09\x09^self logarithmicValuescale].\x0a\x09^self linearValuescale",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "isLogarithmic", "logarithmicValuescale", "linearValuescale"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert($self._isLogarithmic())){
return $self._logarithmicValuescale();
}
return $self._linearValuescale();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newValuescale",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "nextMonthnameAt:",
protocol: "accessing datescale",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDate"],
source: "nextMonthnameAt: aDate\x0a\x09\x22<String>\x22\x0a\x09\x0a\x09^self monthnameAt: aDate month + 1",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["monthnameAt:", "+", "month"]
}, function ($methodClass){ return function (aDate){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._monthnameAt_($recv($recv(aDate)._month()).__plus((1)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextMonthnameAt:",{aDate:aDate})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "primaryAspects",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "primaryAspects\x0a\x09\x22<AspectGroup>\x0a\x09group of all primary aspects of datapoint instances in the series\x22\x0a\x09\x0a\x09^self model primaryAspectGroup",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["primaryAspectGroup", "model"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._model())._primaryAspectGroup();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"primaryAspects",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "refresh",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "refresh\x0a\x09dataset := nil.\x0a\x09valuescale := nil.\x0a\x09datescale := nil.\x0a\x09super refresh",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["refresh"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.dataset=nil;
$self.valuescale=nil;
$self.datescale=nil;
[(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._refresh.call($self))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.supercall = false
//>>excludeEnd("ctx");
][0];
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"refresh",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "scalingButton",
protocol: "presenting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "scalingButton\x0a\x09^(SVG G: {\x0a\x09\x09'class' -> 'ScalingButton'.\x0a\x09\x09SVG RECT: {\x0a\x09\x09\x09'class' -> 'ScalingRectangle'.\x0a\x09\x09\x09'x' -> (self viewWidth - 15).\x0a\x09\x09\x09'y' -> (self viewHeight - 6).\x0a\x09\x09\x09'width' -> 15.\x0a\x09\x09\x09'height' -> 6}.\x0a\x09\x09SVG TEXT: {\x0a\x09\x09\x09'class' -> 'ScalingText'.\x0a\x09\x09\x09'x' -> (self viewWidth - 11).\x0a\x09\x09\x09'y' -> (self viewHeight - 1.7).\x0a\x09\x09\x09self stringLogarithmic: self valuescale isLogarithmic not}}) \x0a\x09\x09on: #click bind: [self toggleValuescale]",
referencedClasses: ["SVG"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["on:bind:", "G:", "->", "RECT:", "-", "viewWidth", "viewHeight", "TEXT:", "stringLogarithmic:", "not", "isLogarithmic", "valuescale", "toggleValuescale"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($globals.SVG)._G_([["class".__minus_gt("ScalingButton")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=1
//>>excludeEnd("ctx");
][0],$recv($globals.SVG)._RECT_([["class".__minus_gt("ScalingRectangle")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=2
//>>excludeEnd("ctx");
][0],["x".__minus_gt([$recv([$self._viewWidth()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["viewWidth"]=1
//>>excludeEnd("ctx");
][0]).__minus((15))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["-"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=3
//>>excludeEnd("ctx");
][0],["y".__minus_gt([$recv([$self._viewHeight()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["viewHeight"]=1
//>>excludeEnd("ctx");
][0]).__minus((6))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["-"]=2
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=4
//>>excludeEnd("ctx");
][0],["width".__minus_gt((15))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=5
//>>excludeEnd("ctx");
][0],["height".__minus_gt((6))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=6
//>>excludeEnd("ctx");
][0]]),$recv($globals.SVG)._TEXT_([["class".__minus_gt("ScalingText")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=7
//>>excludeEnd("ctx");
][0],["x".__minus_gt([$recv($self._viewWidth()).__minus((11))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["-"]=3
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=8
//>>excludeEnd("ctx");
][0],"y".__minus_gt($recv($self._viewHeight()).__minus((1.7))),$self._stringLogarithmic_($recv($recv($self._valuescale())._isLogarithmic())._not())])]))._on_bind_("click",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._toggleValuescale();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"scalingButton",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "stringLogarithmic:",
protocol: "accessing valuescale",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBoolean"],
source: "stringLogarithmic: aBoolean\x0a\x09\x22<String>\x22\x0a\x09\x0a\x09^aBoolean\x0a\x09\x09ifTrue: ['lin']\x0a\x09\x09ifFalse: ['log']",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:ifFalse:"]
}, function ($methodClass){ return function (aBoolean){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert(aBoolean)){
return "lin";
} else {
return "log";
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"stringLogarithmic:",{aBoolean:aBoolean})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "svg",
protocol: "presenting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "svg\x0a\x09^SVG SVG: {\x0a\x09\x09'viewBox' -> {0. 0. self viewWidth. self viewHeight}.\x0a\x09\x09SVG DEFS: {\x0a\x09\x09\x09(SVG newElementNamed: 'clipPath') <<  {\x0a\x09\x09\x09\x09'id' -> 'datescaleClip'.\x0a\x09\x09\x09\x09SVG RECT: {'x' -> self chartLeft. 'y' -> self chartTop. 'width' -> self chartWidth. 'height' -> self viewHeight}}}.\x0a\x09\x09SVG RECT: {'x' -> 0. 'y' -> 0. 'width' -> '100%'. 'height' -> '100%'}.\x0a\x09\x09self valueAxis.\x0a\x09\x09self dateAxis.\x0a\x09\x09self chartArea.\x0a\x09\x09self scalingButton}",
referencedClasses: ["SVG"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["SVG:", "->", "viewWidth", "viewHeight", "DEFS:", "<<", "newElementNamed:", "RECT:", "chartLeft", "chartTop", "chartWidth", "valueAxis", "dateAxis", "chartArea", "scalingButton"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.SVG)._SVG_([["viewBox".__minus_gt([(0),(0),$self._viewWidth(),[$self._viewHeight()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["viewHeight"]=1
//>>excludeEnd("ctx");
][0]])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=1
//>>excludeEnd("ctx");
][0],$recv($globals.SVG)._DEFS_([$recv($recv($globals.SVG)._newElementNamed_("clipPath")).__lt_lt([["id".__minus_gt("datescaleClip")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=2
//>>excludeEnd("ctx");
][0],[$recv($globals.SVG)._RECT_([["x".__minus_gt($self._chartLeft())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=3
//>>excludeEnd("ctx");
][0],["y".__minus_gt($self._chartTop())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=4
//>>excludeEnd("ctx");
][0],["width".__minus_gt($self._chartWidth())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=5
//>>excludeEnd("ctx");
][0],["height".__minus_gt($self._viewHeight())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=6
//>>excludeEnd("ctx");
][0]])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["RECT:"]=1
//>>excludeEnd("ctx");
][0]])]),$recv($globals.SVG)._RECT_([["x".__minus_gt((0))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=7
//>>excludeEnd("ctx");
][0],["y".__minus_gt((0))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=8
//>>excludeEnd("ctx");
][0],["width".__minus_gt("100%")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=9
//>>excludeEnd("ctx");
][0],"height".__minus_gt("100%")]),$self._valueAxis(),$self._dateAxis(),$self._chartArea(),$self._scalingButton()]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"svg",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "toggleValuescale",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "toggleValuescale\x0a\x09self class logarithmic: self class logarithmic not.\x0a\x09self refresh",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["logarithmic:", "class", "not", "logarithmic", "refresh"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv([$self._class()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["class"]=1
//>>excludeEnd("ctx");
][0])._logarithmic_($recv($recv($self._class())._logarithmic())._not());
$self._refresh();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toggleValuescale",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "tooltipClass:label:value:",
protocol: "presenting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClassString", "aString", "aNumber"],
source: "tooltipClass: aClassString label: aString value: aNumber\x0a\x09^{\x0a\x09\x09Silk SPAN: {'class' -> 'LegendBar'. SVG SVG: {'viewBox' -> '0 0 10 5'. self fullBoxClassed: aClassString}}.\x0a\x09\x09Silk SPAN: {'class' -> 'LegendLabel'. aString}.\x0a\x09\x09Silk SPAN: {'class' -> 'LegendValue'. (self infoValueString: aNumber)}}",
referencedClasses: ["Silk", "SVG"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["SPAN:", "->", "SVG:", "fullBoxClassed:", "infoValueString:"]
}, function ($methodClass){ return function (aClassString,aString,aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return [[$recv($globals.Silk)._SPAN_([["class".__minus_gt("LegendBar")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=1
//>>excludeEnd("ctx");
][0],$recv($globals.SVG)._SVG_([["viewBox".__minus_gt("0 0 10 5")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=2
//>>excludeEnd("ctx");
][0],$self._fullBoxClassed_(aClassString)])])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["SPAN:"]=1
//>>excludeEnd("ctx");
][0],[$recv($globals.Silk)._SPAN_([["class".__minus_gt("LegendLabel")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=3
//>>excludeEnd("ctx");
][0],aString])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["SPAN:"]=2
//>>excludeEnd("ctx");
][0],$recv($globals.Silk)._SPAN_(["class".__minus_gt("LegendValue"),$self._infoValueString_(aNumber)])];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tooltipClass:label:value:",{aClassString:aClassString,aString:aString,aNumber:aNumber})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "valueAxis",
protocol: "presenting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "valueAxis\x0a\x09^self valuescale ticks allIn: [:majorTicks :minorTicks |\x0a\x09\x09| valueAxis baseY |\x0a\x09\x09valueAxis := SVG G: {\x0a\x09\x09\x09'class' -> 'ValueAxis'.\x0a\x09\x09\x09SVG RECT: {\x0a\x09\x09\x09\x09'x' -> self chartRight. 'y' -> self chartTop. \x0a\x09\x09\x09\x09'width' -> self valuescaleWidth. 'height' -> self chartHeight}}.\x0a\x09\x09minorTicks do: [:value |\x0a\x09\x09\x09| y |\x0a\x09\x09\x09y := self yAt: value.\x0a\x09\x09\x09valueAxis LINE: {\x0a\x09\x09\x09\x09'class' -> 'Minorline'.\x0a\x09\x09\x09\x09'x1' -> self chartLeft. 'y1' -> y.\x0a\x09\x09\x09\x09'x2' -> self chartRight. 'y2' -> y}].\x0a\x09\x09majorTicks do: [:value |\x0a\x09\x09\x09| y |\x0a\x09\x09\x09y := self yAt: value.\x0a\x09\x09\x09valueAxis LINE: {\x0a\x09\x09\x09\x09'class' -> 'Majorline'.\x0a\x09\x09\x09\x09'x1' -> self chartLeft. 'y1' -> y.\x0a\x09\x09\x09\x09'x2' -> self chartRight. 'y2' -> y}.\x0a\x09\x09\x09valueAxis TEXT: {\x0a\x09\x09\x09\x09'class' -> 'MajorText'.\x0a\x09\x09\x09\x09'text-anchor' -> 'end'.\x0a\x09\x09\x09\x09'x' -> (self chartRight + self valuescaleWidth - 2). 'y' -> (y + 2).\x0a\x09\x09\x09\x09value asLocalizedString}].\x0a\x09\x09baseY := self yAt: 0.\x0a\x09\x09valueAxis LINE: {\x0a\x09\x09\x09'class' -> 'Baseline'.\x0a\x09\x09\x09'x1' -> self chartLeft. 'y1' -> baseY.\x0a\x09\x09\x09'x2' -> self chartRight. 'y2' -> baseY}.\x0a\x09\x09valueAxis]",
referencedClasses: ["SVG"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["allIn:", "ticks", "valuescale", "G:", "->", "RECT:", "chartRight", "chartTop", "valuescaleWidth", "chartHeight", "do:", "yAt:", "LINE:", "chartLeft", "TEXT:", "-", "+", "asLocalizedString"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($self._valuescale())._ticks())._allIn_((function(majorTicks,minorTicks){
var valueAxis,baseY;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
valueAxis=$recv($globals.SVG)._G_([["class".__minus_gt("ValueAxis")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["->"]=1
//>>excludeEnd("ctx");
][0],$recv($globals.SVG)._RECT_([["x".__minus_gt([$self._chartRight()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["chartRight"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["->"]=2
//>>excludeEnd("ctx");
][0],["y".__minus_gt($self._chartTop())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["->"]=3
//>>excludeEnd("ctx");
][0],["width".__minus_gt([$self._valuescaleWidth()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["valuescaleWidth"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["->"]=4
//>>excludeEnd("ctx");
][0],["height".__minus_gt($self._chartHeight())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["->"]=5
//>>excludeEnd("ctx");
][0]])]);
[$recv(minorTicks)._do_((function(value){
var y;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
y=[$self._yAt_(value)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["yAt:"]=1
//>>excludeEnd("ctx");
][0];
return [$recv(valueAxis)._LINE_([["class".__minus_gt("Minorline")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["->"]=6
//>>excludeEnd("ctx");
][0],["x1".__minus_gt([$self._chartLeft()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["chartLeft"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["->"]=7
//>>excludeEnd("ctx");
][0],["y1".__minus_gt(y)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["->"]=8
//>>excludeEnd("ctx");
][0],["x2".__minus_gt([$self._chartRight()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["chartRight"]=2
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["->"]=9
//>>excludeEnd("ctx");
][0],["y2".__minus_gt(y)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["->"]=10
//>>excludeEnd("ctx");
][0]])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["LINE:"]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({value:value,y:y},$ctx2,2)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["do:"]=1
//>>excludeEnd("ctx");
][0];
$recv(majorTicks)._do_((function(value){
var y;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
y=[$self._yAt_(value)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["yAt:"]=2
//>>excludeEnd("ctx");
][0];
[$recv(valueAxis)._LINE_([["class".__minus_gt("Majorline")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["->"]=11
//>>excludeEnd("ctx");
][0],["x1".__minus_gt([$self._chartLeft()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["chartLeft"]=2
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["->"]=12
//>>excludeEnd("ctx");
][0],["y1".__minus_gt(y)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["->"]=13
//>>excludeEnd("ctx");
][0],["x2".__minus_gt([$self._chartRight()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["chartRight"]=3
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["->"]=14
//>>excludeEnd("ctx");
][0],["y2".__minus_gt(y)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["->"]=15
//>>excludeEnd("ctx");
][0]])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["LINE:"]=2
//>>excludeEnd("ctx");
][0];
return $recv(valueAxis)._TEXT_([["class".__minus_gt("MajorText")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["->"]=16
//>>excludeEnd("ctx");
][0],["text-anchor".__minus_gt("end")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["->"]=17
//>>excludeEnd("ctx");
][0],["x".__minus_gt($recv([$recv([$self._chartRight()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["chartRight"]=4
//>>excludeEnd("ctx");
][0]).__plus($self._valuescaleWidth())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["+"]=1
//>>excludeEnd("ctx");
][0]).__minus((2)))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["->"]=18
//>>excludeEnd("ctx");
][0],["y".__minus_gt($recv(y).__plus((2)))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["->"]=19
//>>excludeEnd("ctx");
][0],$recv(value)._asLocalizedString()]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({value:value,y:y},$ctx2,3)});
//>>excludeEnd("ctx");
}));
baseY=$self._yAt_((0));
$recv(valueAxis)._LINE_([["class".__minus_gt("Baseline")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["->"]=20
//>>excludeEnd("ctx");
][0],["x1".__minus_gt($self._chartLeft())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["->"]=21
//>>excludeEnd("ctx");
][0],["y1".__minus_gt(baseY)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["->"]=22
//>>excludeEnd("ctx");
][0],["x2".__minus_gt($self._chartRight())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["->"]=23
//>>excludeEnd("ctx");
][0],"y2".__minus_gt(baseY)]);
return valueAxis;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({majorTicks:majorTicks,minorTicks:minorTicks,valueAxis:valueAxis,baseY:baseY},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"valueAxis",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "valuescale",
protocol: "accessing valuescale",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "valuescale\x0a\x09\x22<Valuescale>\x22\x0a\x09\x0a\x09^valuescale ifNil: [valuescale := self newValuescale]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "newValuescale"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self.valuescale;
if($1 == null || $1.a$nil){
$self.valuescale=$self._newValuescale();
return $self.valuescale;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"valuescale",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "valuescaleWidth",
protocol: "geometry",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "valuescaleWidth\x0a\x09\x22<Number>\x22\x0a\x09\x0a\x09^self viewWidth - self chartRight",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["-", "viewWidth", "chartRight"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._viewWidth()).__minus($self._chartRight());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"valuescaleWidth",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "viewHeight",
protocol: "geometry",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "viewHeight\x0a\x09\x22<Number>\x0a\x09the height of the view(Box) in logical units\x22\x0a\x09\x0a\x09^100",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return (100);

}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "viewWidth",
protocol: "geometry",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "viewWidth\x0a\x09\x22<Number>\x0a\x09the width of the view(Box) in logical units\x22\x0a\x09\x0a\x09^200",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return (200);

}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "xAt:",
protocol: "geometry",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDate"],
source: "xAt: aDate\x0a\x09\x22<Number>\x0a\x09x value in the svg coordinate system\x22\x0a\x09\x0a\x09^self chartLeft + ((self datescale at: aDate) * self chartWidth)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["+", "chartLeft", "*", "at:", "datescale", "chartWidth"]
}, function ($methodClass){ return function (aDate){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._chartLeft()).__plus($recv($recv($self._datescale())._at_(aDate)).__star($self._chartWidth()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"xAt:",{aDate:aDate})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "yAt:",
protocol: "geometry",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDomainValue"],
source: "yAt: aDomainValue\x0a\x09\x22<Number>\x0a\x09y value in the svg coordinate system\x22\x0a\x09\x0a\x09self valuescale isLogarithmic ifTrue: [\x0a\x09\x09| offset zeroOffset |\x0a\x09\x09offset := 5.\x0a\x09\x09zeroOffset := 0.\x0a\x09\x09self dataArePositive ifFalse: [\x0a\x09\x09\x09zeroOffset := offset].\x0a\x09\x09aDomainValue negative ifTrue: [\x0a\x09\x09\x09^self chartBottom].\x0a\x09\x09aDomainValue < 1 ifTrue: [\x0a\x09\x09\x09^self chartBottom - zeroOffset].\x0a\x09\x09offset := offset + zeroOffset.\x0a\x09\x09^(self chartBottom - offset) - ((self valuescale at: aDomainValue) * (self chartHeight - offset))].\x0a\x09^self chartBottom - ((self valuescale at: aDomainValue) * self chartHeight)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "isLogarithmic", "valuescale", "ifFalse:", "dataArePositive", "negative", "chartBottom", "<", "-", "+", "*", "at:", "chartHeight"]
}, function ($methodClass){ return function (aDomainValue){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert($recv([$self._valuescale()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["valuescale"]=1
//>>excludeEnd("ctx");
][0])._isLogarithmic())){
var offset,zeroOffset;
offset=(5);
zeroOffset=(0);
if(!$core.assert($self._dataArePositive())){
zeroOffset=offset;
zeroOffset;
}
if($core.assert($recv(aDomainValue)._negative())){
return [$self._chartBottom()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["chartBottom"]=1
//>>excludeEnd("ctx");
][0];
}
if($core.assert($recv(aDomainValue).__lt((1)))){
return [$recv([$self._chartBottom()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["chartBottom"]=2
//>>excludeEnd("ctx");
][0]).__minus(zeroOffset)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["-"]=1
//>>excludeEnd("ctx");
][0];
}
offset=$recv(offset).__plus(zeroOffset);
return [$recv([$recv([$self._chartBottom()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["chartBottom"]=3
//>>excludeEnd("ctx");
][0]).__minus(offset)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["-"]=3
//>>excludeEnd("ctx");
][0]).__minus([$recv([$recv([$self._valuescale()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["valuescale"]=2
//>>excludeEnd("ctx");
][0])._at_(aDomainValue)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:"]=1
//>>excludeEnd("ctx");
][0]).__star([$recv([$self._chartHeight()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["chartHeight"]=1
//>>excludeEnd("ctx");
][0]).__minus(offset)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["-"]=4
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["*"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["-"]=2
//>>excludeEnd("ctx");
][0];
}
return $recv($self._chartBottom()).__minus($recv($recv($self._valuescale())._at_(aDomainValue)).__star($self._chartHeight()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"yAt:",{aDomainValue:aDomainValue})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);


$core.addMethod(
$core.method({
selector: "logarithmic",
protocol: "settings",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "logarithmic\x0a\x09\x22<Boolean>\x0a\x09the global default for the scale of the case chart.\x0a\x09This allows to keep the scale type when clicking throu countries\x22\x0a\x09\x0a\x09^self name asString, '.', #logarithmic asString settingValueIfAbsent: true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["settingValueIfAbsent:", ",", "asString", "name"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv([$recv($recv([$recv($self._name())._asString()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["asString"]=1
//>>excludeEnd("ctx");
][0]).__comma(".")).__comma("logarithmic"._asString())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=1
//>>excludeEnd("ctx");
][0])._settingValueIfAbsent_(true);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"logarithmic",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart.a$cls);

$core.addMethod(
$core.method({
selector: "logarithmic:",
protocol: "settings",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBoolean"],
source: "logarithmic: aBoolean\x0a\x09self name asString, '.', #logarithmic asString settingValue: aBoolean",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["settingValue:", ",", "asString", "name"]
}, function ($methodClass){ return function (aBoolean){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv([$recv($recv([$recv($self._name())._asString()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["asString"]=1
//>>excludeEnd("ctx");
][0]).__comma(".")).__comma("logarithmic"._asString())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=1
//>>excludeEnd("ctx");
][0])._settingValue_(aBoolean);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"logarithmic:",{aBoolean:aBoolean})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart.a$cls);


$core.addClass("Casechart", $globals.Barchart, "Covid19view");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Casechart.comment="A chart for case data\x0a\x0aCase data only grow, therefore, a logarithmic scale is most appropriate";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "legendFor:",
protocol: "presenting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAspectSymbol"],
source: "legendFor: anAspectSymbol\x0a\x09| legend number |\x0a\x09(self primaryAspects hasAspect: anAspectSymbol) ifFalse: [\x0a\x09\x09^Silk SPAN].\x0a\x09number := self dataset lastValueOf: anAspectSymbol.\x0a\x09legend := self legendFor: anAspectSymbol value: number.\x0a\x09anAspectSymbol = #deaths ifTrue: [\x0a\x09\x09legend add: (Silk SPAN: ' (', (number / self lastConfirmed * 100 asLocalizedString: #{'maximumFractionDigits' -> 1}), '%)')].\x0a\x09^Silk SPAN: {\x0a\x09\x09'class' -> ('Legend', (self primaryAspects legendSelectionClassFor: anAspectSymbol)).\x0a\x09\x09legend}",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifFalse:", "hasAspect:", "primaryAspects", "SPAN", "lastValueOf:", "dataset", "legendFor:value:", "ifTrue:", "=", "add:", "SPAN:", ",", "asLocalizedString:", "*", "/", "lastConfirmed", "->", "legendSelectionClassFor:"]
}, function ($methodClass){ return function (anAspectSymbol){
var self=this,$self=this;
var legend,number;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if(!$core.assert($recv([$self._primaryAspects()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["primaryAspects"]=1
//>>excludeEnd("ctx");
][0])._hasAspect_(anAspectSymbol))){
return $recv($globals.Silk)._SPAN();
}
number=$recv($self._dataset())._lastValueOf_(anAspectSymbol);
legend=$self._legendFor_value_(anAspectSymbol,number);
if($core.assert($recv(anAspectSymbol).__eq("deaths"))){
$recv(legend)._add_([$recv($globals.Silk)._SPAN_([$recv([" (".__comma($recv($recv($recv(number).__slash($self._lastConfirmed())).__star((100)))._asLocalizedString_($globals.HashedCollection._newFromPairs_(["maximumFractionDigits",(1)])))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=2
//>>excludeEnd("ctx");
][0]).__comma("%)")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["SPAN:"]=1
//>>excludeEnd("ctx");
][0]);
}
return $recv($globals.Silk)._SPAN_(["class".__minus_gt("Legend".__comma($recv($self._primaryAspects())._legendSelectionClassFor_(anAspectSymbol))),legend]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"legendFor:",{anAspectSymbol:anAspectSymbol,legend:legend,number:number})});
//>>excludeEnd("ctx");
}; }),
$globals.Casechart);

$core.addMethod(
$core.method({
selector: "newDataset",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newDataset\x0a\x09^self model dataset",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["dataset", "model"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._model())._dataset();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newDataset",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Casechart);


$core.addMethod(
$core.method({
selector: "showConfirmed",
protocol: "settings",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "showConfirmed\x0a\x09\x22<Boolean>\x22\x0a\x0a\x09^self name asString, '.', #showConfirmed asString settingValueIfAbsent: false",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["settingValueIfAbsent:", ",", "asString", "name"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv([$recv($recv([$recv($self._name())._asString()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["asString"]=1
//>>excludeEnd("ctx");
][0]).__comma(".")).__comma("showConfirmed"._asString())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=1
//>>excludeEnd("ctx");
][0])._settingValueIfAbsent_(false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"showConfirmed",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Casechart.a$cls);

$core.addMethod(
$core.method({
selector: "showConfirmed:",
protocol: "settings",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBoolean"],
source: "showConfirmed: aBoolean\x0a\x09self name asString, '.', #showConfirmed asString settingValue: aBoolean",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["settingValue:", ",", "asString", "name"]
}, function ($methodClass){ return function (aBoolean){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv([$recv($recv([$recv($self._name())._asString()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["asString"]=1
//>>excludeEnd("ctx");
][0]).__comma(".")).__comma("showConfirmed"._asString())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=1
//>>excludeEnd("ctx");
][0])._settingValue_(aBoolean);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"showConfirmed:",{aBoolean:aBoolean})});
//>>excludeEnd("ctx");
}; }),
$globals.Casechart.a$cls);

$core.addMethod(
$core.method({
selector: "showDeaths",
protocol: "settings",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "showDeaths\x0a\x09\x22<Boolean>\x22\x0a\x09\x0a\x09^self name asString, '.', #showDeaths asString settingValueIfAbsent: false",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["settingValueIfAbsent:", ",", "asString", "name"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv([$recv($recv([$recv($self._name())._asString()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["asString"]=1
//>>excludeEnd("ctx");
][0]).__comma(".")).__comma("showDeaths"._asString())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=1
//>>excludeEnd("ctx");
][0])._settingValueIfAbsent_(false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"showDeaths",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Casechart.a$cls);

$core.addMethod(
$core.method({
selector: "showDeaths:",
protocol: "settings",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBoolean"],
source: "showDeaths: aBoolean\x0a\x09self name asString, '.', #showDeaths asString settingValue: aBoolean",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["settingValue:", ",", "asString", "name"]
}, function ($methodClass){ return function (aBoolean){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv([$recv($recv([$recv($self._name())._asString()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["asString"]=1
//>>excludeEnd("ctx");
][0]).__comma(".")).__comma("showDeaths"._asString())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=1
//>>excludeEnd("ctx");
][0])._settingValue_(aBoolean);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"showDeaths:",{aBoolean:aBoolean})});
//>>excludeEnd("ctx");
}; }),
$globals.Casechart.a$cls);

$core.addMethod(
$core.method({
selector: "showRecovered",
protocol: "settings",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "showRecovered\x0a\x09\x22<Boolean>\x22\x0a\x09\x0a\x09^self name asString, '.', #showRecovered asString settingValueIfAbsent: false",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["settingValueIfAbsent:", ",", "asString", "name"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv([$recv($recv([$recv($self._name())._asString()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["asString"]=1
//>>excludeEnd("ctx");
][0]).__comma(".")).__comma("showRecovered"._asString())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=1
//>>excludeEnd("ctx");
][0])._settingValueIfAbsent_(false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"showRecovered",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Casechart.a$cls);

$core.addMethod(
$core.method({
selector: "showRecovered:",
protocol: "settings",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBoolean"],
source: "showRecovered: aBoolean\x0a\x09self name asString, '.', #showRecovered asString settingValue: aBoolean",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["settingValue:", ",", "asString", "name"]
}, function ($methodClass){ return function (aBoolean){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv([$recv($recv([$recv($self._name())._asString()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["asString"]=1
//>>excludeEnd("ctx");
][0]).__comma(".")).__comma("showRecovered"._asString())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=1
//>>excludeEnd("ctx");
][0])._settingValue_(aBoolean);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"showRecovered:",{aBoolean:aBoolean})});
//>>excludeEnd("ctx");
}; }),
$globals.Casechart.a$cls);


$core.addClass("Changechart", $globals.Barchart, "Covid19view");
$core.setSlots($globals.Changechart, ["dataArePositive"]);
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Changechart.comment="A chart for changes\x0a\x0achanges go up and down and should, therefore, be shown with a linear scale";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "dataArePositive",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dataArePositive\x0a\x09\x22caching for speed - the logarithmic valuescale uses this heavily\x22\x0a\x09\x0a\x09^dataArePositive ifNil: [dataArePositive := super dataArePositive]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "dataArePositive"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self.dataArePositive;
if($1 == null || $1.a$nil){
$self.dataArePositive=[(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._dataArePositive.call($self))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.supercall = false
//>>excludeEnd("ctx");
][0];
return $self.dataArePositive;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dataArePositive",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Changechart);

$core.addMethod(
$core.method({
selector: "infoValueString:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "infoValueString: aNumber\x0a\x09| prefix |\x0a\x09aNumber isZero ifTrue: [\x0a\x09\x09^super infoValueString: aNumber].\x0a\x09prefix := ''.\x0a\x09aNumber negative ifFalse: [\x0a\x09\x09prefix := '+'].\x0a\x09^prefix, (super infoValueString: aNumber)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "isZero", "infoValueString:", "ifFalse:", "negative", ","]
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
var prefix;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert($recv(aNumber)._isZero())){
return [(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._infoValueString_.call($self,aNumber))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["infoValueString:"]=1,$ctx1.supercall = false
//>>excludeEnd("ctx");
][0];
}
prefix="";
if(!$core.assert($recv(aNumber)._negative())){
prefix="+";
prefix;
}
return $recv(prefix).__comma([(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._infoValueString_.call($self,aNumber))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.supercall = false
//>>excludeEnd("ctx");
][0]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"infoValueString:",{aNumber:aNumber,prefix:prefix})});
//>>excludeEnd("ctx");
}; }),
$globals.Changechart);

$core.addMethod(
$core.method({
selector: "newDataset",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newDataset\x0a\x09^self model changeDataset",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["changeDataset", "model"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._model())._changeDataset();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newDataset",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Changechart);

$core.addMethod(
$core.method({
selector: "refresh",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "refresh\x0a\x09dataArePositive := nil.\x0a\x09super refresh",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["refresh"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.dataArePositive=nil;
[(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._refresh.call($self))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.supercall = false
//>>excludeEnd("ctx");
][0];
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"refresh",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Changechart);


$core.addMethod(
$core.method({
selector: "showRelative",
protocol: "settings",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "showRelative\x0a\x09\x22<Boolean>\x22\x0a\x09\x0a\x09^self name asString, '.', #showRelative asString settingValueIfAbsent: false",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["settingValueIfAbsent:", ",", "asString", "name"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv([$recv($recv([$recv($self._name())._asString()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["asString"]=1
//>>excludeEnd("ctx");
][0]).__comma(".")).__comma("showRelative"._asString())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=1
//>>excludeEnd("ctx");
][0])._settingValueIfAbsent_(false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"showRelative",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Changechart.a$cls);

$core.addMethod(
$core.method({
selector: "showRelative:",
protocol: "settings",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBoolean"],
source: "showRelative: aBoolean\x0a\x09self name asString, '.', #showRelative asString settingValue: aBoolean",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["settingValue:", ",", "asString", "name"]
}, function ($methodClass){ return function (aBoolean){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv([$recv($recv([$recv($self._name())._asString()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["asString"]=1
//>>excludeEnd("ctx");
][0]).__comma(".")).__comma("showRelative"._asString())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=1
//>>excludeEnd("ctx");
][0])._settingValue_(aBoolean);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"showRelative:",{aBoolean:aBoolean})});
//>>excludeEnd("ctx");
}; }),
$globals.Changechart.a$cls);


$core.addClass("Graphics", $globals.Component, "Covid19view");
$core.setSlots($globals.Graphics, ["territoryView", "dataset", "primaryAspectGroup", "secondaryAspectGroup", "tertiaryAspectGroup", "casesChart", "changesChart"]);
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Graphics.comment="The details for the selected territory\x0a\x0aThe component has the tree as model and uses it's selection as model";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "ageAspectChanged",
protocol: "events",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "ageAspectChanged\x0a\x09self refresh",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["refresh"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._refresh();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ageAspectChanged",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Graphics);

$core.addMethod(
$core.method({
selector: "asSilk",
protocol: "presenting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asSilk\x0a\x09| chartsDiv primaryButtons extraButtons |\x0a\x09self territory ifNil: [\x0a\x09\x09^#()].\x0a\x09chartsDiv := Silk DIV: 'class' -> 'Charts'.\x0a\x09self datasets ifNotEmpty: [:ignore |\x0a\x09\x09chartsDiv << {\x0a\x09\x09\x09self casesChart refresh frame.\x0a\x09\x09\x09self changesChart refresh frame}].\x0a\x09primaryButtons := #().\x0a\x09extraButtons := #().\x0a\x09self datasets ifNotEmpty: [\x0a\x09\x09primaryButtons := self primaryAspectButtons.\x0a\x09\x09extraButtons := self extraAspectButtons].\x0a\x09^{\x0a\x09\x09Silk DIV: {'class' -> 'ChartColumn'.\x0a\x09\x09\x09primaryButtons.\x0a\x09 \x09\x09chartsDiv}.\x0a\x09\x09extraButtons.\x0a\x09\x09Silk DIV: 'id' -> 'Tooltip'}",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "territory", "DIV:", "->", "ifNotEmpty:", "datasets", "<<", "frame", "refresh", "casesChart", "changesChart", "primaryAspectButtons", "extraAspectButtons"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var chartsDiv,primaryButtons,extraButtons;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._territory();
if($1 == null || $1.a$nil){
return [];
} else {
$1;
}
chartsDiv=[$recv($globals.Silk)._DIV_(["class".__minus_gt("Charts")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["DIV:"]=1
//>>excludeEnd("ctx");
][0];
[$recv([$self._datasets()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["datasets"]=1
//>>excludeEnd("ctx");
][0])._ifNotEmpty_((function(ignore){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(chartsDiv).__lt_lt([[$recv([$recv($self._casesChart())._refresh()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["refresh"]=1
//>>excludeEnd("ctx");
][0])._frame()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["frame"]=1
//>>excludeEnd("ctx");
][0],$recv($recv($self._changesChart())._refresh())._frame()]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({ignore:ignore},$ctx1,2)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["ifNotEmpty:"]=1
//>>excludeEnd("ctx");
][0];
primaryButtons=[];
extraButtons=[];
$recv($self._datasets())._ifNotEmpty_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
primaryButtons=$self._primaryAspectButtons();
extraButtons=$self._extraAspectButtons();
return extraButtons;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return [[$recv($globals.Silk)._DIV_([["class".__minus_gt("ChartColumn")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=2
//>>excludeEnd("ctx");
][0],primaryButtons,chartsDiv])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["DIV:"]=2
//>>excludeEnd("ctx");
][0],extraButtons,$recv($globals.Silk)._DIV_("id".__minus_gt("Tooltip"))];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asSilk",{chartsDiv:chartsDiv,primaryButtons:primaryButtons,extraButtons:extraButtons})});
//>>excludeEnd("ctx");
}; }),
$globals.Graphics);

$core.addMethod(
$core.method({
selector: "aspectButtons",
protocol: "presenting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "aspectButtons\x0a\x09\x22<Array of: Silk>\x22\x0a\x0a\x09self datasets ifEmpty: [\x0a\x09\x09^#()].\x0a\x09^{\x0a\x09\x09self primaryAspectButtons.\x0a\x09\x09self extraAspectButtons\x0a\x09}",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifEmpty:", "datasets", "primaryAspectButtons", "extraAspectButtons"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $early={};
try {
$recv($self._datasets())._ifEmpty_((function(){
throw $early=[[]];

}));
return [$self._primaryAspectButtons(),$self._extraAspectButtons()];
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"aspectButtons",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Graphics);

$core.addMethod(
$core.method({
selector: "aspectChanged",
protocol: "events",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "aspectChanged\x0a\x09self refresh",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["refresh"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._refresh();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"aspectChanged",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Graphics);

$core.addMethod(
$core.method({
selector: "casesChart",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "casesChart\x0a\x09\x22<Component>\x22\x0a\x09\x0a\x09^casesChart ifNil: [\x0a\x09\x09casesChart := Casechart on: self in: (Silk DIV: 'id' -> 'Casechart')]",
referencedClasses: ["Casechart", "Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "on:in:", "DIV:", "->"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self.casesChart;
if($1 == null || $1.a$nil){
$self.casesChart=$recv($globals.Casechart)._on_in_(self,$recv($globals.Silk)._DIV_("id".__minus_gt("Casechart")));
return $self.casesChart;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"casesChart",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Graphics);

$core.addMethod(
$core.method({
selector: "changeDataset",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "changeDataset\x0a\x09\x22<Dataset>\x22\x0a\x09\x0a\x09^self dataset changeDataset",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["changeDataset", "dataset"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._dataset())._changeDataset();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"changeDataset",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Graphics);

$core.addMethod(
$core.method({
selector: "changesChart",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "changesChart\x0a\x09\x22<Component>\x22\x0a\x09\x0a\x09^changesChart ifNil: [\x0a\x09\x09changesChart := Changechart on: self in: (Silk DIV: 'id' -> 'Changechart')]",
referencedClasses: ["Changechart", "Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "on:in:", "DIV:", "->"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self.changesChart;
if($1 == null || $1.a$nil){
$self.changesChart=$recv($globals.Changechart)._on_in_(self,$recv($globals.Silk)._DIV_("id".__minus_gt("Changechart")));
return $self.changesChart;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"changesChart",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Graphics);

$core.addMethod(
$core.method({
selector: "dataset",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dataset\x0a\x09\x22<Dataset>\x0a\x09Dataset to be shown.\x0a\x09Derrived from the model dataset\x22\x0a\x09\x0a\x09^dataset ifNil: [dataset := self filteredDataset]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "filteredDataset"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self.dataset;
if($1 == null || $1.a$nil){
$self.dataset=$self._filteredDataset();
return $self.dataset;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dataset",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Graphics);

$core.addMethod(
$core.method({
selector: "datasets",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "datasets\x0a\x09\x22<Array of: Silk>\x22\x0a\x09\x0a\x09^self territoryView datasets",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["datasets", "territoryView"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._territoryView())._datasets();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"datasets",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Graphics);

$core.addMethod(
$core.method({
selector: "extendedDataset",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "extendedDataset\x0a\x09\x22<Dataset>\x0a\x09Derrived from the model dataset and extended with empty change data to match the global end date.\x0a\x09This is usefull when no data is reported for the last days\x22\x0a\x09\x0a\x09^self modelDataset extendedTo: self lastDate",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["extendedTo:", "modelDataset", "lastDate"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._modelDataset())._extendedTo_($self._lastDate());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"extendedDataset",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Graphics);

$core.addMethod(
$core.method({
selector: "extraAspectButtons",
protocol: "presenting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "extraAspectButtons\x0a\x09\x22<Array of: Silk>\x22\x0a\x0a\x09^Silk DIV: {'class' -> 'ExtraAspectButtons'.\x0a\x09\x09\x09Silk DIV: {'class' -> 'SecondaryAspectButtons'. self secondaryAspectGroup buttons}.\x0a\x09\x09\x09Silk DIV: {'class' -> 'TertiaryAspectButtons'. self tertiaryAspectGroup buttons}}",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["DIV:", "->", "buttons", "secondaryAspectGroup", "tertiaryAspectGroup"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return [$recv($globals.Silk)._DIV_([["class".__minus_gt("ExtraAspectButtons")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=1
//>>excludeEnd("ctx");
][0],[$recv($globals.Silk)._DIV_([["class".__minus_gt("SecondaryAspectButtons")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=2
//>>excludeEnd("ctx");
][0],[$recv($self._secondaryAspectGroup())._buttons()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["buttons"]=1
//>>excludeEnd("ctx");
][0]])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["DIV:"]=2
//>>excludeEnd("ctx");
][0],$recv($globals.Silk)._DIV_(["class".__minus_gt("TertiaryAspectButtons"),$recv($self._tertiaryAspectGroup())._buttons()])])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["DIV:"]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"extraAspectButtons",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Graphics);

$core.addMethod(
$core.method({
selector: "filteredDataset",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "filteredDataset\x0a\x09\x22<Dataset>\x0a\x09filtered by secondary and terniary aspects\x22\x0a\x09\x0a\x09^(self extendedDataset filteredBySecondaryAspects: self secondaryAspectGroup) filteredByTerniaryAspects: self tertiaryAspectGroup",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["filteredByTerniaryAspects:", "filteredBySecondaryAspects:", "extendedDataset", "secondaryAspectGroup", "tertiaryAspectGroup"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($self._extendedDataset())._filteredBySecondaryAspects_($self._secondaryAspectGroup()))._filteredByTerniaryAspects_($self._tertiaryAspectGroup());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"filteredDataset",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Graphics);

$core.addMethod(
$core.method({
selector: "lastDate",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "lastDate\x0a\x09\x22<Date>\x22\x0a\x09\x0a\x09^CoViD19Application current lastDate",
referencedClasses: ["CoViD19Application"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["lastDate", "current"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($globals.CoViD19Application)._current())._lastDate();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lastDate",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Graphics);

$core.addMethod(
$core.method({
selector: "modelDataset",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "modelDataset\x0a\x09\x22<Dataset>\x0a\x09Dataset from the model with domain datapoints\x22\x0a\x09\x0a\x09^self territoryView dataset",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["dataset", "territoryView"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._territoryView())._dataset();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"modelDataset",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Graphics);

$core.addMethod(
$core.method({
selector: "primaryAspectButtons",
protocol: "presenting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "primaryAspectButtons\x0a\x09\x22<Array of: Silk>\x22\x0a\x0a\x09^Silk DIV: {'class' -> 'AspectButtons'. self primaryAspectGroup buttons}.",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["DIV:", "->", "buttons", "primaryAspectGroup"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Silk)._DIV_(["class".__minus_gt("AspectButtons"),$recv($self._primaryAspectGroup())._buttons()]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"primaryAspectButtons",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Graphics);

$core.addMethod(
$core.method({
selector: "primaryAspectGroup",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "primaryAspectGroup\x0a\x09\x22<AspectGroup>\x22\x0a\x09\x0a\x09^primaryAspectGroup ifNil: [\x0a\x09\x09| group |\x0a\x09\x09group := AspectGroup name: 'Cases' aspects: self modelDataset primaryAspects.\x0a\x09\x09group aspectAt: #confirmed put: true.\x0a\x09\x09group aspectAt: #deaths put: true.\x0a\x09\x09group announcer on: AspectChanged send: #aspectChanged to: self.\x0a\x09\x09primaryAspectGroup := group]",
referencedClasses: ["AspectGroup", "AspectChanged"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "name:aspects:", "primaryAspects", "modelDataset", "aspectAt:put:", "on:send:to:", "announcer"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self.primaryAspectGroup;
if($1 == null || $1.a$nil){
var group;
group=$recv($globals.AspectGroup)._name_aspects_("Cases",$recv($self._modelDataset())._primaryAspects());
[$recv(group)._aspectAt_put_("confirmed",true)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["aspectAt:put:"]=1
//>>excludeEnd("ctx");
][0];
$recv(group)._aspectAt_put_("deaths",true);
$recv($recv(group)._announcer())._on_send_to_($globals.AspectChanged,"aspectChanged",self);
$self.primaryAspectGroup=group;
return $self.primaryAspectGroup;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"primaryAspectGroup",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Graphics);

$core.addMethod(
$core.method({
selector: "refresh",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "refresh\x0a\x09dataset := nil.\x0a\x09primaryAspectGroup := nil.\x0a\x09secondaryAspectGroup := nil.\x0a\x09tertiaryAspectGroup := nil.\x0a\x09super refresh",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["refresh"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.dataset=nil;
$self.primaryAspectGroup=nil;
$self.secondaryAspectGroup=nil;
$self.tertiaryAspectGroup=nil;
[(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._refresh.call($self))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.supercall = false
//>>excludeEnd("ctx");
][0];
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"refresh",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Graphics);

$core.addMethod(
$core.method({
selector: "secondaryAspectGroup",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "secondaryAspectGroup\x0a\x09\x22<AspectGroup>\x22\x0a\x09\x0a\x09^secondaryAspectGroup ifNil: [\x0a\x09\x09| group |\x0a\x09\x09group := AspectGroup name: 'Age' aspects: self modelDataset secondaryAspects.\x0a\x09\x09group announcer on: AspectChanged send: #ageAspectChanged to: self.\x0a\x09\x09secondaryAspectGroup := group]",
referencedClasses: ["AspectGroup", "AspectChanged"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "name:aspects:", "secondaryAspects", "modelDataset", "on:send:to:", "announcer"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self.secondaryAspectGroup;
if($1 == null || $1.a$nil){
var group;
group=$recv($globals.AspectGroup)._name_aspects_("Age",$recv($self._modelDataset())._secondaryAspects());
$recv($recv(group)._announcer())._on_send_to_($globals.AspectChanged,"ageAspectChanged",self);
$self.secondaryAspectGroup=group;
return $self.secondaryAspectGroup;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"secondaryAspectGroup",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Graphics);

$core.addMethod(
$core.method({
selector: "sexAspectChanged",
protocol: "events",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sexAspectChanged\x0a\x09self refresh",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["refresh"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._refresh();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sexAspectChanged",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Graphics);

$core.addMethod(
$core.method({
selector: "territory",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "territory\x0a\x09\x22<Territory | nil>\x22\x0a\x09\x0a\x09^self territoryView territory",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["territory", "territoryView"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._territoryView())._territory();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"territory",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Graphics);

$core.addMethod(
$core.method({
selector: "territoryView",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "territoryView\x0a\x09\x22<TerritoryView>\x0a\x09knows the selected dataset\x22\x0a\x09\x0a\x09^territoryView",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.territoryView;

}; }),
$globals.Graphics);

$core.addMethod(
$core.method({
selector: "territoryView:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTerritoryView"],
source: "territoryView: aTerritoryView\x0a\x09territoryView := aTerritoryView",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aTerritoryView){
var self=this,$self=this;
$self.territoryView=aTerritoryView;
return self;

}; }),
$globals.Graphics);

$core.addMethod(
$core.method({
selector: "tertiaryAspectGroup",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tertiaryAspectGroup\x0a\x09\x22<AspectGroup>\x22\x0a\x09\x0a\x09^tertiaryAspectGroup ifNil: [\x0a\x09\x09| group |\x0a\x09\x09group := AspectGroup name: 'Sex' aspects: self modelDataset tertiaryAspects.\x0a\x09\x09group announcer on: AspectChanged send: #sexAspectChanged to: self.\x0a\x09\x09tertiaryAspectGroup := group]",
referencedClasses: ["AspectGroup", "AspectChanged"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "name:aspects:", "tertiaryAspects", "modelDataset", "on:send:to:", "announcer"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self.tertiaryAspectGroup;
if($1 == null || $1.a$nil){
var group;
group=$recv($globals.AspectGroup)._name_aspects_("Sex",$recv($self._modelDataset())._tertiaryAspects());
$recv($recv(group)._announcer())._on_send_to_($globals.AspectChanged,"sexAspectChanged",self);
$self.tertiaryAspectGroup=group;
return $self.tertiaryAspectGroup;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tertiaryAspectGroup",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Graphics);



$core.addClass("TerritoryView", $globals.Component, "Covid19view");
$core.setSlots($globals.TerritoryView, ["dataset"]);
$core.addMethod(
$core.method({
selector: "asSilk",
protocol: "presenting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asSilk\x0a\x09self territory ifNil: [\x0a\x09\x09^#()].\x0a\x09^Silk DIV: {\x0a\x09\x09Silk DIV: {'class' -> 'TerritoryAbout'.\x0a\x09\x09\x09Silk IMG: {\x0a\x09\x09\x09\x09'class' -> 'Flag'.\x0a\x09\x09\x09\x09'src' -> self territory flagUrl.\x0a\x09\x09\x09\x09'alt' -> self territory flagAlt}.\x0a\x09\x09\x09self territory presentationName}.\x0a\x09\x09self territoryInfoPopulation: self territory population.\x0a\x09\x09Silk DIV: {'class' -> 'Datasets'. self datasets collect: [:aDataset | self datasetButtonFor: aDataset]}}",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "territory", "DIV:", "->", "IMG:", "flagUrl", "flagAlt", "presentationName", "territoryInfoPopulation:", "population", "collect:", "datasets", "datasetButtonFor:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=[$self._territory()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["territory"]=1
//>>excludeEnd("ctx");
][0];
if($1 == null || $1.a$nil){
return [];
} else {
$1;
}
return [$recv($globals.Silk)._DIV_([[$recv($globals.Silk)._DIV_([["class".__minus_gt("TerritoryAbout")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=1
//>>excludeEnd("ctx");
][0],$recv($globals.Silk)._IMG_([["class".__minus_gt("Flag")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=2
//>>excludeEnd("ctx");
][0],["src".__minus_gt($recv([$self._territory()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["territory"]=2
//>>excludeEnd("ctx");
][0])._flagUrl())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=3
//>>excludeEnd("ctx");
][0],["alt".__minus_gt($recv([$self._territory()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["territory"]=3
//>>excludeEnd("ctx");
][0])._flagAlt())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=4
//>>excludeEnd("ctx");
][0]]),$recv([$self._territory()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["territory"]=4
//>>excludeEnd("ctx");
][0])._presentationName()])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["DIV:"]=2
//>>excludeEnd("ctx");
][0],$self._territoryInfoPopulation_($recv($self._territory())._population()),$recv($globals.Silk)._DIV_(["class".__minus_gt("Datasets"),$recv($self._datasets())._collect_((function(aDataset){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._datasetButtonFor_(aDataset);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({aDataset:aDataset},$ctx1,2)});
//>>excludeEnd("ctx");
}))])])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["DIV:"]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asSilk",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TerritoryView);

$core.addMethod(
$core.method({
selector: "dataset",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dataset\x0a\x09\x22<Dataset>\x0a\x09selected Dataset to be shown\x22\x0a\x09\x0a\x09^dataset ifNil: [dataset := self datasets first]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "first", "datasets"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self.dataset;
if($1 == null || $1.a$nil){
$self.dataset=$recv($self._datasets())._first();
return $self.dataset;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dataset",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TerritoryView);

$core.addMethod(
$core.method({
selector: "dataset:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDataset"],
source: "dataset: aDataset\x0a\x09dataset := aDataset.\x0a\x09self announcer announce: DatasetSelected new",
referencedClasses: ["DatasetSelected"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["announce:", "announcer", "new"]
}, function ($methodClass){ return function (aDataset){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.dataset=aDataset;
$recv($self._announcer())._announce_($recv($globals.DatasetSelected)._new());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dataset:",{aDataset:aDataset})});
//>>excludeEnd("ctx");
}; }),
$globals.TerritoryView);

$core.addMethod(
$core.method({
selector: "datasetButtonFor:",
protocol: "presenting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDataset"],
source: "datasetButtonFor: aDataset\x0a\x09| datasource cssClass |\x0a\x09datasource := CoViD19Application current sources at: aDataset source.\x0a\x09cssClass := 'DatasetInfo'.\x0a\x09self dataset = aDataset ifTrue: [\x0a\x09\x09cssClass := cssClass, ' selected'].\x0a\x09^{\x09(Silk BUTTON: {\x0a\x09\x09\x09'class' -> cssClass.\x0a\x09\x09\x09'type' -> 'button'. \x0a\x09\x09\x09Silk SPAN: {'class' -> 'DatasetLabel'. datasource dataLabel}.\x0a\x09\x09\x09Silk A: {datasource provider.\x0a\x09\x09\x09\x09'href' -> (datasource about at: #ProviderUrl).\x0a\x09\x09\x09\x09'target' -> '_blank'.\x0a\x09\x09\x09\x09'rel' -> 'noopener'}.\x0a\x09\x09\x09Silk SPAN: {'class' -> 'DatasetDate'. aDataset dataDateString}}) on: #click bind: [self dataset: aDataset]\x0a\x09}",
referencedClasses: ["CoViD19Application", "Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:", "sources", "current", "source", "ifTrue:", "=", "dataset", ",", "on:bind:", "BUTTON:", "->", "SPAN:", "dataLabel", "A:", "provider", "about", "dataDateString", "dataset:"]
}, function ($methodClass){ return function (aDataset){
var self=this,$self=this;
var datasource,cssClass;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
datasource=[$recv($recv($recv($globals.CoViD19Application)._current())._sources())._at_($recv(aDataset)._source())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:"]=1
//>>excludeEnd("ctx");
][0];
cssClass="DatasetInfo";
if($core.assert($recv($self._dataset()).__eq(aDataset))){
cssClass=$recv(cssClass).__comma(" selected");
cssClass;
}
return [$recv($recv($globals.Silk)._BUTTON_([["class".__minus_gt(cssClass)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=1
//>>excludeEnd("ctx");
][0],["type".__minus_gt("button")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=2
//>>excludeEnd("ctx");
][0],[$recv($globals.Silk)._SPAN_([["class".__minus_gt("DatasetLabel")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=3
//>>excludeEnd("ctx");
][0],$recv(datasource)._dataLabel()])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["SPAN:"]=1
//>>excludeEnd("ctx");
][0],$recv($globals.Silk)._A_([$recv(datasource)._provider(),["href".__minus_gt($recv($recv(datasource)._about())._at_("ProviderUrl"))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=4
//>>excludeEnd("ctx");
][0],["target".__minus_gt("_blank")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=5
//>>excludeEnd("ctx");
][0],["rel".__minus_gt("noopener")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=6
//>>excludeEnd("ctx");
][0]]),$recv($globals.Silk)._SPAN_(["class".__minus_gt("DatasetDate"),$recv(aDataset)._dataDateString()])]))._on_bind_("click",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._dataset_(aDataset);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}))];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"datasetButtonFor:",{aDataset:aDataset,datasource:datasource,cssClass:cssClass})});
//>>excludeEnd("ctx");
}; }),
$globals.TerritoryView);

$core.addMethod(
$core.method({
selector: "datasets",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "datasets\x0a\x09\x22<Array of: Dataset>\x22\x0a\x09\x0a\x09^self territory datasets",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["datasets", "territory"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._territory())._datasets();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"datasets",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TerritoryView);

$core.addMethod(
$core.method({
selector: "refresh",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "refresh\x0a\x09| id |\x0a\x09id := dataset ifNotNil: [self dataset source].\x0a\x09dataset := self territory datasetAt: id.\x0a\x09super refresh",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNotNil:", "source", "dataset", "datasetAt:", "territory", "refresh"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var id;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self.dataset;
if($1 == null || $1.a$nil){
id=$1;
} else {
id=$recv($self._dataset())._source();
}
$self.dataset=$recv($self._territory())._datasetAt_(id);
[(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._refresh.call($self))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.supercall = false
//>>excludeEnd("ctx");
][0];
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"refresh",{id:id})});
//>>excludeEnd("ctx");
}; }),
$globals.TerritoryView);

$core.addMethod(
$core.method({
selector: "territory",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "territory\x0a\x09\x22<Territory | nil>\x22\x0a\x09\x0a\x09self model hasSelection ifFalse: [\x0a\x09\x09^nil].\x0a\x09^self model selection model",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifFalse:", "hasSelection", "model", "selection"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if(!$core.assert($recv([$self._model()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["model"]=1
//>>excludeEnd("ctx");
][0])._hasSelection())){
return nil;
}
return [$recv($recv($self._model())._selection())._model()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["model"]=2
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"territory",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TerritoryView);

$core.addMethod(
$core.method({
selector: "territoryInfoPopulation:",
protocol: "presenting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "territoryInfoPopulation: aNumber\x0a\x09\x22<Silk>\x22\x0a\x09\x0a\x09| cssClass |\x0a\x09cssClass := 'TerritoryInfo'.\x0a\x09aNumber isZero ifTrue: [\x0a\x09\x09cssClass := cssClass, ' empty'].\x0a\x09^Silk DIV: {\x0a\x09\x09'class' -> cssClass.\x0a\x09\x09Silk SPAN: 'Population: '. \x0a\x09\x09Silk SPAN: aNumber asLocalizedString}",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "isZero", ",", "DIV:", "->", "SPAN:", "asLocalizedString"]
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
var cssClass;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
cssClass="TerritoryInfo";
if($core.assert($recv(aNumber)._isZero())){
cssClass=$recv(cssClass).__comma(" empty");
cssClass;
}
return $recv($globals.Silk)._DIV_(["class".__minus_gt(cssClass),[$recv($globals.Silk)._SPAN_("Population: ")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["SPAN:"]=1
//>>excludeEnd("ctx");
][0],$recv($globals.Silk)._SPAN_($recv(aNumber)._asLocalizedString())]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"territoryInfoPopulation:",{aNumber:aNumber,cssClass:cssClass})});
//>>excludeEnd("ctx");
}; }),
$globals.TerritoryView);



$core.addClass("Tree", $globals.Component, "Covid19view");
$core.setSlots($globals.Tree, ["root", "selection"]);
$core.addMethod(
$core.method({
selector: "arrowDown",
protocol: "events",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "arrowDown\x0a\x09self hasSelection ifFalse: [\x0a\x09\x09^self].\x0a\x09self selection selectNext",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifFalse:", "hasSelection", "selectNext", "selection"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if(!$core.assert($self._hasSelection())){
return self;
}
$recv($self._selection())._selectNext();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"arrowDown",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Tree);

$core.addMethod(
$core.method({
selector: "arrowLeft",
protocol: "events",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "arrowLeft\x0a\x09self hasSelection ifFalse: [\x0a\x09\x09^self].\x0a\x09self selection collapseOrSelectParent",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifFalse:", "hasSelection", "collapseOrSelectParent", "selection"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if(!$core.assert($self._hasSelection())){
return self;
}
$recv($self._selection())._collapseOrSelectParent();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"arrowLeft",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Tree);

$core.addMethod(
$core.method({
selector: "arrowRight",
protocol: "events",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "arrowRight\x0a\x09self hasSelection ifFalse: [\x0a\x09\x09^self].\x0a\x09self selection expand",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifFalse:", "hasSelection", "expand", "selection"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if(!$core.assert($self._hasSelection())){
return self;
}
$recv($self._selection())._expand();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"arrowRight",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Tree);

$core.addMethod(
$core.method({
selector: "arrowUp",
protocol: "events",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "arrowUp\x0a\x09self hasSelection ifFalse: [\x0a\x09\x09^self].\x0a\x09self selection selectPrevious",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifFalse:", "hasSelection", "selectPrevious", "selection"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if(!$core.assert($self._hasSelection())){
return self;
}
$recv($self._selection())._selectPrevious();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"arrowUp",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Tree);

$core.addMethod(
$core.method({
selector: "asSilk",
protocol: "presenting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asSilk\x0a\x09self root refresh.\x0a\x09^self frame UL: self root frame",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["refresh", "root", "UL:", "frame"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv([$self._root()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["root"]=1
//>>excludeEnd("ctx");
][0])._refresh();
return $recv([$self._frame()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["frame"]=1
//>>excludeEnd("ctx");
][0])._UL_($recv($self._root())._frame());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asSilk",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Tree);

$core.addMethod(
$core.method({
selector: "hasSelection",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "hasSelection\x09\x0a\x09^self selection notNil",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["notNil", "selection"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._selection())._notNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hasSelection",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Tree);

$core.addMethod(
$core.method({
selector: "keyPressed:",
protocol: "events",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKeyboardEvent"],
source: "keyPressed: aKeyboardEvent\x0a\x09aKeyboardEvent key = 'ArrowDown' ifTrue: [\x0a\x09\x09aKeyboardEvent preventDefault.\x0a\x09\x09^self arrowDown].\x0a\x09aKeyboardEvent key = 'ArrowUp' ifTrue: [\x0a\x09\x09aKeyboardEvent preventDefault.\x0a\x09\x09^self arrowUp].\x0a\x09aKeyboardEvent key = 'ArrowLeft' ifTrue: [\x0a\x09\x09^self arrowLeft].\x0a\x09aKeyboardEvent key = 'ArrowRight' ifTrue: [\x0a\x09\x09^self arrowRight].",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "=", "key", "preventDefault", "arrowDown", "arrowUp", "arrowLeft", "arrowRight"]
}, function ($methodClass){ return function (aKeyboardEvent){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert([$recv([$recv(aKeyboardEvent)._key()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["key"]=1
//>>excludeEnd("ctx");
][0]).__eq("ArrowDown")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["="]=1
//>>excludeEnd("ctx");
][0])){
[$recv(aKeyboardEvent)._preventDefault()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["preventDefault"]=1
//>>excludeEnd("ctx");
][0];
return $self._arrowDown();
}
if($core.assert([$recv([$recv(aKeyboardEvent)._key()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["key"]=2
//>>excludeEnd("ctx");
][0]).__eq("ArrowUp")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["="]=2
//>>excludeEnd("ctx");
][0])){
$recv(aKeyboardEvent)._preventDefault();
return $self._arrowUp();
}
if($core.assert([$recv([$recv(aKeyboardEvent)._key()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["key"]=3
//>>excludeEnd("ctx");
][0]).__eq("ArrowLeft")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["="]=3
//>>excludeEnd("ctx");
][0])){
return $self._arrowLeft();
}
if($core.assert($recv($recv(aKeyboardEvent)._key()).__eq("ArrowRight"))){
return $self._arrowRight();
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"keyPressed:",{aKeyboardEvent:aKeyboardEvent})});
//>>excludeEnd("ctx");
}; }),
$globals.Tree);

$core.addMethod(
$core.method({
selector: "root",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "root\x0a\x09\x22<TreeItem>\x22\x0a\x09\x0a\x09^root ifNil: [\x0a\x09\x09| component |\x0a\x09\x09component := TreeItem on: self model in: (Silk LI: 'tabindex' -> 0) parent: self.\x0a\x09\x09component expanded: true.\x0a\x09\x09component frame on: #keydown bind: [:event | self keyPressed: event].\x0a\x09\x09root := component]",
referencedClasses: ["TreeItem", "Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "on:in:parent:", "model", "LI:", "->", "expanded:", "on:bind:", "frame", "keyPressed:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self.root;
if($1 == null || $1.a$nil){
var component;
component=$recv($globals.TreeItem)._on_in_parent_($self._model(),$recv($globals.Silk)._LI_("tabindex".__minus_gt((0))),self);
$recv(component)._expanded_(true);
$recv($recv(component)._frame())._on_bind_("keydown",(function(event){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._keyPressed_(event);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$self.root=component;
return $self.root;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"root",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Tree);

$core.addMethod(
$core.method({
selector: "scrollBy:",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "scrollBy: aNumber\x0a\x09| treeDiv |\x0a\x09treeDiv := self frame asDomNode.\x0a\x09treeDiv scrollTop: (treeDiv scrollTop + aNumber max: 0)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["asDomNode", "frame", "scrollTop:", "max:", "+", "scrollTop"]
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
var treeDiv;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
treeDiv=$recv($self._frame())._asDomNode();
$recv(treeDiv)._scrollTop_($recv($recv($recv(treeDiv)._scrollTop()).__plus(aNumber))._max_((0)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"scrollBy:",{aNumber:aNumber,treeDiv:treeDiv})});
//>>excludeEnd("ctx");
}; }),
$globals.Tree);

$core.addMethod(
$core.method({
selector: "scrollToShow:",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTreeItem"],
source: "scrollToShow: aTreeItem\x0a\x09| margin treeBounds itemBounds topSpace bottomSpace |\x0a\x09margin := 12.\x0a\x09treeBounds := self frame asDomNode getBoundingClientRect.\x0a\x09itemBounds := (aTreeItem frame at: 'div') asDomNode getBoundingClientRect.\x0a\x09topSpace := itemBounds top - treeBounds top - margin.\x0a\x09topSpace negative ifTrue: [\x0a\x09\x09self scrollBy: topSpace.\x0a\x09\x09^self].\x0a\x09bottomSpace := itemBounds bottom - treeBounds bottom + margin.\x0a\x09bottomSpace > 0 ifTrue: [\x0a\x09\x09self scrollBy: bottomSpace]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["getBoundingClientRect", "asDomNode", "frame", "at:", "-", "top", "ifTrue:", "negative", "scrollBy:", "+", "bottom", ">"]
}, function ($methodClass){ return function (aTreeItem){
var self=this,$self=this;
var margin,treeBounds,itemBounds,topSpace,bottomSpace;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
margin=(12);
treeBounds=[$recv([$recv([$self._frame()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["frame"]=1
//>>excludeEnd("ctx");
][0])._asDomNode()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["asDomNode"]=1
//>>excludeEnd("ctx");
][0])._getBoundingClientRect()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["getBoundingClientRect"]=1
//>>excludeEnd("ctx");
][0];
itemBounds=$recv($recv($recv($recv(aTreeItem)._frame())._at_("div"))._asDomNode())._getBoundingClientRect();
topSpace=[$recv([$recv([$recv(itemBounds)._top()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["top"]=1
//>>excludeEnd("ctx");
][0]).__minus($recv(treeBounds)._top())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["-"]=2
//>>excludeEnd("ctx");
][0]).__minus(margin)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["-"]=1
//>>excludeEnd("ctx");
][0];
if($core.assert($recv(topSpace)._negative())){
[$self._scrollBy_(topSpace)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["scrollBy:"]=1
//>>excludeEnd("ctx");
][0];
return self;
}
bottomSpace=$recv($recv([$recv(itemBounds)._bottom()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["bottom"]=1
//>>excludeEnd("ctx");
][0]).__minus($recv(treeBounds)._bottom())).__plus(margin);
if($core.assert($recv(bottomSpace).__gt((0)))){
$self._scrollBy_(bottomSpace);
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"scrollToShow:",{aTreeItem:aTreeItem,margin:margin,treeBounds:treeBounds,itemBounds:itemBounds,topSpace:topSpace,bottomSpace:bottomSpace})});
//>>excludeEnd("ctx");
}; }),
$globals.Tree);

$core.addMethod(
$core.method({
selector: "select:",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTreeItem"],
source: "select: aTreeItem\x0a\x09| old |\x0a\x09old := self selection.\x0a\x09selection := aTreeItem.\x0a\x09old ifNotNil: [old refresh].\x0a\x09self selection ifNotNil: [\x0a\x09\x09self selection refresh].\x0a\x09self scrollToShow: self selection.\x0a\x09self root frame asDomNode focus.\x0a\x09self announcer announce: TerritorySelected new",
referencedClasses: ["TerritorySelected"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["selection", "ifNotNil:", "refresh", "scrollToShow:", "focus", "asDomNode", "frame", "root", "announce:", "announcer", "new"]
}, function ($methodClass){ return function (aTreeItem){
var self=this,$self=this;
var old;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
old=[$self._selection()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["selection"]=1
//>>excludeEnd("ctx");
][0];
$self.selection=aTreeItem;
$1=old;
if($1 == null || $1.a$nil){
$1;
} else {
[$recv(old)._refresh()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["refresh"]=1
//>>excludeEnd("ctx");
][0];
}
$2=[$self._selection()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["selection"]=2
//>>excludeEnd("ctx");
][0];
if($2 == null || $2.a$nil){
$2;
} else {
$recv([$self._selection()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["selection"]=3
//>>excludeEnd("ctx");
][0])._refresh();
}
$self._scrollToShow_($self._selection());
$recv($recv($recv($self._root())._frame())._asDomNode())._focus();
$recv($self._announcer())._announce_($recv($globals.TerritorySelected)._new());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"select:",{aTreeItem:aTreeItem,old:old})});
//>>excludeEnd("ctx");
}; }),
$globals.Tree);

$core.addMethod(
$core.method({
selector: "selectAfter:",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aChildTreeItem"],
source: "selectAfter: aChildTreeItem",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aChildTreeItem){
var self=this,$self=this;
return self;

}; }),
$globals.Tree);

$core.addMethod(
$core.method({
selector: "selectBefore:",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aChildTreeItem"],
source: "selectBefore: aChildTreeItem",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aChildTreeItem){
var self=this,$self=this;
return self;

}; }),
$globals.Tree);

$core.addMethod(
$core.method({
selector: "selection",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selection\x0a\x09\x22<TreeItem | nil>\x22\x0a\x09\x0a\x09^selection",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.selection;

}; }),
$globals.Tree);

$core.addMethod(
$core.method({
selector: "tree",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tree\x0a\x09^self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return self;

}; }),
$globals.Tree);



$core.addClass("TreeItem", $globals.Component, "Covid19view");
$core.setSlots($globals.TreeItem, ["parent", "parts", "expanded"]);
$core.addMethod(
$core.method({
selector: "asSilk",
protocol: "presenting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asSilk\x0a\x09\x22<Array of: Silk> to be added to a <li> silk\x22\x0a\x09\x0a\x09| elements |\x0a\x09elements := OrderedCollection with: (Silk DIV: {\x0a\x09\x09'class' -> 'Treeline'.\x0a\x09\x09self lineHead. \x0a\x09\x09self itemSilk}).\x0a\x09(self hasParts and: [\x0a\x09self isExpanded]) ifTrue: [\x0a\x09\x09elements add: (self frame UL: (self parts collect: [:part | \x0a\x09\x09\x09part refresh. \x0a\x09\x09\x09part frame]))].\x0a\x09^elements",
referencedClasses: ["OrderedCollection", "Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["with:", "DIV:", "->", "lineHead", "itemSilk", "ifTrue:", "and:", "hasParts", "isExpanded", "add:", "UL:", "frame", "collect:", "parts", "refresh"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var elements;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
elements=$recv($globals.OrderedCollection)._with_($recv($globals.Silk)._DIV_(["class".__minus_gt("Treeline"),$self._lineHead(),$self._itemSilk()]));
if($core.assert($recv($self._hasParts())._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._isExpanded();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
})))){
$recv(elements)._add_($recv([$self._frame()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["frame"]=1
//>>excludeEnd("ctx");
][0])._UL_($recv($self._parts())._collect_((function(part){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(part)._refresh();
return $recv(part)._frame();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({part:part},$ctx1,3)});
//>>excludeEnd("ctx");
}))));
}
return elements;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asSilk",{elements:elements})});
//>>excludeEnd("ctx");
}; }),
$globals.TreeItem);

$core.addMethod(
$core.method({
selector: "collapse",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collapse\x0a\x09self isPartSelected ifTrue: [self select].\x0a\x09expanded := false.\x0a\x09self frame asDomNode removeAttribute: 'class'.\x0a\x09self refresh",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "isPartSelected", "select", "removeAttribute:", "asDomNode", "frame", "refresh"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert($self._isPartSelected())){
$self._select();
}
$self.expanded=false;
$recv($recv($self._frame())._asDomNode())._removeAttribute_("class");
$self._refresh();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collapse",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TreeItem);

$core.addMethod(
$core.method({
selector: "collapseOrSelectParent",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collapseOrSelectParent\x0a\x09self isRoot ifTrue: [\x0a\x09\x09^self].\x0a\x09self isExpanded ifTrue: [\x0a\x09\x09^self collapse].\x0a\x09self parent select",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "isRoot", "isExpanded", "collapse", "select", "parent"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert($self._isRoot())){
return self;
}
if($core.assert($self._isExpanded())){
return $self._collapse();
}
$recv($self._parent())._select();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collapseOrSelectParent",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TreeItem);

$core.addMethod(
$core.method({
selector: "expand",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "expand\x0a\x09self hasParts ifFalse: [\x0a\x09\x09^self].\x0a\x09expanded := true.\x0a\x09self frame << ('class' -> 'open').\x0a\x09self refresh",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifFalse:", "hasParts", "<<", "frame", "->", "refresh"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if(!$core.assert($self._hasParts())){
return self;
}
$self.expanded=true;
$recv($self._frame()).__lt_lt("class".__minus_gt("open"));
$self._refresh();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"expand",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TreeItem);

$core.addMethod(
$core.method({
selector: "expanded:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBoolean"],
source: "expanded: aBoolean\x0a\x09expanded := aBoolean",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aBoolean){
var self=this,$self=this;
$self.expanded=aBoolean;
return self;

}; }),
$globals.TreeItem);

$core.addMethod(
$core.method({
selector: "flag",
protocol: "presenting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "flag\x0a\x09self model hasFlag ifTrue: [\x0a\x09\x09^Silk IMG: {\x0a\x09\x09\x09'class' -> 'Flag'.\x0a\x09\x09\x09'src' -> self model flagUrl.\x0a\x09\x09\x09'alt' -> self model flagAlt}].\x0a\x09^SVG SVG: {'class' -> 'Flag'. 'viewBox' -> '0 0 5 3'}",
referencedClasses: ["Silk", "SVG"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "hasFlag", "model", "IMG:", "->", "flagUrl", "flagAlt", "SVG:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert($recv([$self._model()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["model"]=1
//>>excludeEnd("ctx");
][0])._hasFlag())){
return $recv($globals.Silk)._IMG_([["class".__minus_gt("Flag")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=1
//>>excludeEnd("ctx");
][0],["src".__minus_gt($recv([$self._model()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["model"]=2
//>>excludeEnd("ctx");
][0])._flagUrl())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=2
//>>excludeEnd("ctx");
][0],["alt".__minus_gt($recv($self._model())._flagAlt())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=3
//>>excludeEnd("ctx");
][0]]);
}
return $recv($globals.SVG)._SVG_([["class".__minus_gt("Flag")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=4
//>>excludeEnd("ctx");
][0],"viewBox".__minus_gt("0 0 5 3")]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"flag",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TreeItem);

$core.addMethod(
$core.method({
selector: "hasParts",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "hasParts\x0a\x09\x22<Boolean>\x22\x0a\x09\x0a\x09^self model hasParts",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["hasParts", "model"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._model())._hasParts();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hasParts",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TreeItem);

$core.addMethod(
$core.method({
selector: "initializeFrame:model:parent:",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSilk", "aModel", "aTreeItemOrTree"],
source: "initializeFrame: aSilk model: aModel parent: aTreeItemOrTree\x0a\x09parent := aTreeItemOrTree.\x0a\x09self initializeFrame: aSilk model: aModel.\x0a\x09self model announcer on: StructureChanged send: #structureChanged to: self",
referencedClasses: ["StructureChanged"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["initializeFrame:model:", "on:send:to:", "announcer", "model"]
}, function ($methodClass){ return function (aSilk,aModel,aTreeItemOrTree){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.parent=aTreeItemOrTree;
$self._initializeFrame_model_(aSilk,aModel);
$recv($recv($self._model())._announcer())._on_send_to_($globals.StructureChanged,"structureChanged",self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeFrame:model:parent:",{aSilk:aSilk,aModel:aModel,aTreeItemOrTree:aTreeItemOrTree})});
//>>excludeEnd("ctx");
}; }),
$globals.TreeItem);

$core.addMethod(
$core.method({
selector: "isExpanded",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isExpanded\x0a\x09^expanded ifNil: [false]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self.expanded;
if($1 == null || $1.a$nil){
return false;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isExpanded",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TreeItem);

$core.addMethod(
$core.method({
selector: "isLoading",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isLoading\x0a\x09^self model isLoading",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["isLoading", "model"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._model())._isLoading();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isLoading",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TreeItem);

$core.addMethod(
$core.method({
selector: "isPartSelected",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isPartSelected\x0a\x09self isExpanded ifFalse: [\x0a\x09\x09^self isSelected].\x0a\x09^self parts anySatisfy: [:part |\x0a\x09\x09part isPartSelected]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifFalse:", "isExpanded", "isSelected", "anySatisfy:", "parts", "isPartSelected"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if(!$core.assert($self._isExpanded())){
return $self._isSelected();
}
return $recv($self._parts())._anySatisfy_((function(part){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(part)._isPartSelected();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({part:part},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isPartSelected",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TreeItem);

$core.addMethod(
$core.method({
selector: "isRoot",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isRoot\x0a\x09^self parent class ~= self class",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["~=", "class", "parent"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv([$recv($self._parent())._class()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["class"]=1
//>>excludeEnd("ctx");
][0]).__tild_eq($self._class());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isRoot",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TreeItem);

$core.addMethod(
$core.method({
selector: "isSelected",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isSelected\x0a\x09^self tree selection = self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["=", "selection", "tree"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($self._tree())._selection()).__eq(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isSelected",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TreeItem);

$core.addMethod(
$core.method({
selector: "itemSilk",
protocol: "presenting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "itemSilk\x0a\x09| css flag silk |\x0a\x09css := 'Treeitem'.\x0a\x09self isSelected ifTrue: [\x0a\x09\x09css := css, ' selected'].\x0a\x09silk := Silk SPAN: {\x0a\x09\x09'class' -> css. \x0a\x09\x09Silk SPAN: {\x0a\x09\x09\x09'class' -> 'TerritoryName'. \x0a\x09\x09\x09self flag.\x0a\x09\x09\x09self model presentationName}.\x0a\x09\x09Silk SPAN: {\x0a\x09\x09\x09'class' -> 'TerritoryValue'.\x0a\x09\x09\x09self model lastConfirmed asLocalizedString}}.\x0a\x09silk on: #click bind: [self select].\x0a\x09^silk",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "isSelected", ",", "SPAN:", "->", "flag", "presentationName", "model", "asLocalizedString", "lastConfirmed", "on:bind:", "select"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var css,flag,silk;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
css="Treeitem";
if($core.assert($self._isSelected())){
css=$recv(css).__comma(" selected");
css;
}
silk=[$recv($globals.Silk)._SPAN_([["class".__minus_gt(css)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=1
//>>excludeEnd("ctx");
][0],[$recv($globals.Silk)._SPAN_([["class".__minus_gt("TerritoryName")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=2
//>>excludeEnd("ctx");
][0],$self._flag(),$recv([$self._model()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["model"]=1
//>>excludeEnd("ctx");
][0])._presentationName()])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["SPAN:"]=2
//>>excludeEnd("ctx");
][0],$recv($globals.Silk)._SPAN_(["class".__minus_gt("TerritoryValue"),$recv($recv($self._model())._lastConfirmed())._asLocalizedString()])])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["SPAN:"]=1
//>>excludeEnd("ctx");
][0];
$recv(silk)._on_bind_("click",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._select();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return silk;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"itemSilk",{css:css,flag:flag,silk:silk})});
//>>excludeEnd("ctx");
}; }),
$globals.TreeItem);

$core.addMethod(
$core.method({
selector: "lineHead",
protocol: "presenting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "lineHead\x0a\x09| cssClass |\x0a\x09cssClass := 'opener'.\x0a\x09self isLoading ifTrue: [\x0a\x09\x09^Silk DIV: 'class' -> 'loader'].\x0a\x09(self hasParts not or: [\x0a\x09self model name = 'World']) ifTrue: [\x0a\x09\x09^Silk BUTTON: {'class' -> (cssClass, ' noButton')}]. \x0a\x09self isExpanded ifFalse: [\x0a\x09\x09^(Silk BUTTON: {'class' -> cssClass}) on: #click bind: [self expand]].\x0a\x09^(Silk BUTTON: {'class' -> (cssClass, ' open')}) on: #click bind: [self collapse]",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "isLoading", "DIV:", "->", "or:", "not", "hasParts", "=", "name", "model", "BUTTON:", ",", "ifFalse:", "isExpanded", "on:bind:", "expand", "collapse"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var cssClass;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
cssClass="opener";
if($core.assert($self._isLoading())){
return $recv($globals.Silk)._DIV_(["class".__minus_gt("loader")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=1
//>>excludeEnd("ctx");
][0]);
}
if($core.assert($recv($self._hasParts())._not())){
$1=true;
} else {
$1=$recv($recv($self._model())._name()).__eq("World");
}
if($core.assert($1)){
return [$recv($globals.Silk)._BUTTON_([["class".__minus_gt([$recv(cssClass).__comma(" noButton")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=2
//>>excludeEnd("ctx");
][0]])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["BUTTON:"]=1
//>>excludeEnd("ctx");
][0];
}
if(!$core.assert($self._isExpanded())){
return [$recv([$recv($globals.Silk)._BUTTON_([["class".__minus_gt(cssClass)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=3
//>>excludeEnd("ctx");
][0]])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["BUTTON:"]=2
//>>excludeEnd("ctx");
][0])._on_bind_("click",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._expand();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,5)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["on:bind:"]=1
//>>excludeEnd("ctx");
][0];
}
return $recv($recv($globals.Silk)._BUTTON_(["class".__minus_gt($recv(cssClass).__comma(" open"))]))._on_bind_("click",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._collapse();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,6)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lineHead",{cssClass:cssClass})});
//>>excludeEnd("ctx");
}; }),
$globals.TreeItem);

$core.addMethod(
$core.method({
selector: "parent",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "parent\x0a\x09\x22<TreeItem | Tree>\x22\x0a\x09\x0a\x09^parent",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.parent;

}; }),
$globals.TreeItem);

$core.addMethod(
$core.method({
selector: "parts",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "parts\x0a\x09\x22<Array of: TreeItem>\x22\x0a\x09\x0a\x09^parts ifNil: [\x0a\x09\x09parts := self model parts collect: [:part | \x0a\x09\x09\x09self class on: part in: Silk LI parent: self]]",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "collect:", "parts", "model", "on:in:parent:", "class", "LI"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self.parts;
if($1 == null || $1.a$nil){
$self.parts=$recv($recv($self._model())._parts())._collect_((function(part){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self._class())._on_in_parent_(part,$recv($globals.Silk)._LI(),self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({part:part},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return $self.parts;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"parts",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TreeItem);

$core.addMethod(
$core.method({
selector: "resetParts",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "resetParts\x0a\x09parts := nil",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
$self.parts=nil;
return self;

}; }),
$globals.TreeItem);

$core.addMethod(
$core.method({
selector: "select",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "select\x0a\x09self tree select: self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["select:", "tree"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._tree())._select_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"select",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TreeItem);

$core.addMethod(
$core.method({
selector: "selectAfter:",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aChildTreeItem"],
source: "selectAfter: aChildTreeItem\x0a\x09| rst |\x0a\x09rst := self parts readStream.\x0a\x09[rst atEnd] whileFalse: [\x0a\x09\x09rst next = aChildTreeItem ifTrue: [\x0a\x09\x09\x09rst atEnd ifTrue: [\x0a\x09\x09\x09\x09^self parent selectAfter: self].\x0a\x09\x09\x09^rst next select]].\x0a\x09self halt",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["readStream", "parts", "whileFalse:", "atEnd", "ifTrue:", "=", "next", "selectAfter:", "parent", "select", "halt"]
}, function ($methodClass){ return function (aChildTreeItem){
var self=this,$self=this;
var rst;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $early={};
try {
rst=$recv($self._parts())._readStream();
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return [$recv(rst)._atEnd()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["atEnd"]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._whileFalse_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if($core.assert($recv([$recv(rst)._next()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["next"]=1
//>>excludeEnd("ctx");
][0]).__eq(aChildTreeItem))){
if($core.assert($recv(rst)._atEnd())){
throw $early=[$recv($self._parent())._selectAfter_(self)];
}
throw $early=[$recv($recv(rst)._next())._select()];
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$self._halt();
return self;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectAfter:",{aChildTreeItem:aChildTreeItem,rst:rst})});
//>>excludeEnd("ctx");
}; }),
$globals.TreeItem);

$core.addMethod(
$core.method({
selector: "selectBefore:",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aChildTreeItem"],
source: "selectBefore: aChildTreeItem\x0a\x09| rst |\x0a\x09rst := self parts reversed readStream.\x0a\x09[rst atEnd] whileFalse: [\x0a\x09\x09rst next = aChildTreeItem ifTrue: [\x0a\x09\x09\x09rst atEnd ifTrue: [\x0a\x09\x09\x09\x09^self select].\x0a\x09\x09\x09^rst next selectLast]].\x0a\x09self halt",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["readStream", "reversed", "parts", "whileFalse:", "atEnd", "ifTrue:", "=", "next", "select", "selectLast", "halt"]
}, function ($methodClass){ return function (aChildTreeItem){
var self=this,$self=this;
var rst;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $early={};
try {
rst=$recv($recv($self._parts())._reversed())._readStream();
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return [$recv(rst)._atEnd()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["atEnd"]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._whileFalse_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if($core.assert($recv([$recv(rst)._next()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["next"]=1
//>>excludeEnd("ctx");
][0]).__eq(aChildTreeItem))){
if($core.assert($recv(rst)._atEnd())){
throw $early=[$self._select()];
}
throw $early=[$recv($recv(rst)._next())._selectLast()];
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$self._halt();
return self;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectBefore:",{aChildTreeItem:aChildTreeItem,rst:rst})});
//>>excludeEnd("ctx");
}; }),
$globals.TreeItem);

$core.addMethod(
$core.method({
selector: "selectLast",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selectLast\x0a\x09self isExpanded ifTrue: [\x0a\x09\x09^self parts last selectLast].\x0a\x09self select",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "isExpanded", "selectLast", "last", "parts", "select"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert($self._isExpanded())){
return $recv($recv($self._parts())._last())._selectLast();
}
$self._select();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectLast",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TreeItem);

$core.addMethod(
$core.method({
selector: "selectNext",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selectNext\x0a\x09self isExpanded ifTrue: [\x0a\x09\x09^self parts first select].\x0a\x09self parent selectAfter: self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "isExpanded", "select", "first", "parts", "selectAfter:", "parent"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert($self._isExpanded())){
return $recv($recv($self._parts())._first())._select();
}
$recv($self._parent())._selectAfter_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectNext",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TreeItem);

$core.addMethod(
$core.method({
selector: "selectPrevious",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selectPrevious\x0a\x09self parent selectBefore: self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["selectBefore:", "parent"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._parent())._selectBefore_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectPrevious",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TreeItem);

$core.addMethod(
$core.method({
selector: "structureChanged",
protocol: "events",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "structureChanged\x0a\x09self resetParts.\x0a\x09self refresh.\x0a\x09self tree hasSelection ifFalse: [\x0a\x09\x09self select].\x0a\x09self tree announcer announce: DataReceived new",
referencedClasses: ["DataReceived"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["resetParts", "refresh", "ifFalse:", "hasSelection", "tree", "select", "announce:", "announcer", "new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._resetParts();
$self._refresh();
if(!$core.assert($recv([$self._tree()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["tree"]=1
//>>excludeEnd("ctx");
][0])._hasSelection())){
$self._select();
}
$recv($recv($self._tree())._announcer())._announce_($recv($globals.DataReceived)._new());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"structureChanged",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TreeItem);

$core.addMethod(
$core.method({
selector: "tree",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tree\x0a\x09\x22<Tree>\x22\x0a\x09\x0a\x09^self parent tree",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["tree", "parent"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._parent())._tree();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tree",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TreeItem);


$core.addMethod(
$core.method({
selector: "frame:model:parent:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSilk", "aModel", "aTreeItemOrTree"],
source: "frame: aSilk model: aModel parent: aTreeItemOrTree\x0a\x09| inst |\x0a\x09inst := self new.\x0a\x09inst initializeFrame: aSilk model: aModel parent: aTreeItemOrTree.\x0a\x09^inst",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "initializeFrame:model:parent:"]
}, function ($methodClass){ return function (aSilk,aModel,aTreeItemOrTree){
var self=this,$self=this;
var inst;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
inst=$self._new();
$recv(inst)._initializeFrame_model_parent_(aSilk,aModel,aTreeItemOrTree);
return inst;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"frame:model:parent:",{aSilk:aSilk,aModel:aModel,aTreeItemOrTree:aTreeItemOrTree,inst:inst})});
//>>excludeEnd("ctx");
}; }),
$globals.TreeItem.a$cls);

$core.addMethod(
$core.method({
selector: "on:in:parent:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aModel", "aSilk", "aTreeItemOrTree"],
source: "on: aModel in: aSilk parent: aTreeItemOrTree\x0a\x09^self frame: aSilk model: aModel parent: aTreeItemOrTree",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["frame:model:parent:"]
}, function ($methodClass){ return function (aModel,aSilk,aTreeItemOrTree){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._frame_model_parent_(aSilk,aModel,aTreeItemOrTree);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:in:parent:",{aModel:aModel,aSilk:aSilk,aTreeItemOrTree:aTreeItemOrTree})});
//>>excludeEnd("ctx");
}; }),
$globals.TreeItem.a$cls);


$core.addClass("InteractionAnnouncement", $globals.SystemAnnouncement, "Covid19view");


$core.addClass("AspectChanged", $globals.InteractionAnnouncement, "Covid19view");


$core.addClass("DataReceived", $globals.InteractionAnnouncement, "Covid19view");


$core.addClass("DatasetSelected", $globals.InteractionAnnouncement, "Covid19view");


$core.addClass("TerritorySelected", $globals.InteractionAnnouncement, "Covid19view");


$core.addClass("SVG", $globals.Silk, "Covid19view");

$core.addMethod(
$core.method({
selector: "namespace",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "namespace\x0a\x09^'http://www.w3.org/2000/svg'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return "http://www.w3.org/2000/svg";

}; }),
$globals.SVG.a$cls);

$core.addMethod(
$core.method({
selector: "newElementNamed:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "newElementNamed: aString\x0a\x09^self newElement: aString xmlns: self namespace",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["newElement:xmlns:", "namespace"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._newElement_xmlns_(aString,$self._namespace());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newElementNamed:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.SVG.a$cls);


$core.addClass("Scale", $globals.Object, "Covid19view");
$core.setSlots($globals.Scale, ["from", "to"]);
$core.addMethod(
$core.method({
selector: "at:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDomainValue"],
source: "at: aDomainValue\x0a\x09\x22<Number[0..1]>\x0a\x09Fraction of the range\x22\x0a\x09\x0a\x09^aDomainValue - self from / self range",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["/", "-", "from", "range"]
}, function ($methodClass){ return function (aDomainValue){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv(aDomainValue).__minus($self._from())).__slash($self._range());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:",{aDomainValue:aDomainValue})});
//>>excludeEnd("ctx");
}; }),
$globals.Scale);

$core.addMethod(
$core.method({
selector: "from",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "from\x0a\x09\x22<Number>\x0a\x09the lowest domain value of the scale\x22\x0a\x09\x0a\x09^from",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.from;

}; }),
$globals.Scale);

$core.addMethod(
$core.method({
selector: "initializeFrom:to:",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStart", "anEnd"],
source: "initializeFrom: aStart to: anEnd\x0a\x09from := aStart.\x0a\x09to := anEnd",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aStart,anEnd){
var self=this,$self=this;
$self.from=aStart;
$self.to=anEnd;
return self;

}; }),
$globals.Scale);

$core.addMethod(
$core.method({
selector: "range",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "range\x0a\x09\x22<Number>\x0a\x09the 'width' or 'height' of the scale\x22\x0a\x09\x0a\x09^self to - self from",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["-", "to", "from"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._to()).__minus($self._from());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"range",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Scale);

$core.addMethod(
$core.method({
selector: "to",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "to\x0a\x09\x22<Number>\x0a\x09the highest domain value of the scale\x22\x0a\x09\x0a\x09^to",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.to;

}; }),
$globals.Scale);


$core.addMethod(
$core.method({
selector: "from:to:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStart", "anEnd"],
source: "from: aStart to: anEnd\x0a\x09| inst |\x0a\x09inst := self new.\x0a\x09inst initializeFrom: aStart to: anEnd.\x0a\x09^inst",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "initializeFrom:to:"]
}, function ($methodClass){ return function (aStart,anEnd){
var self=this,$self=this;
var inst;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
inst=$self._new();
$recv(inst)._initializeFrom_to_(aStart,anEnd);
return inst;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"from:to:",{aStart:aStart,anEnd:anEnd,inst:inst})});
//>>excludeEnd("ctx");
}; }),
$globals.Scale.a$cls);


$core.addClass("Datescale", $globals.Scale, "Covid19view");
$core.addMethod(
$core.method({
selector: "days",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "days\x0a\x09\x22<Integer>\x22\x0a\x09\x0a\x09^(self range / Date new millisecondsInDay) rounded",
referencedClasses: ["Date"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["rounded", "/", "range", "millisecondsInDay", "new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($self._range()).__slash($recv($recv($globals.Date)._new())._millisecondsInDay()))._rounded();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"days",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Datescale);



$core.addClass("Valuescale", $globals.Scale, "Covid19view");
$core.addMethod(
$core.method({
selector: "isLogarithmic",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isLogarithmic\x0a\x09\x22<Boolean>\x22\x0a\x09\x0a\x09^self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["subclassResponsibility"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._subclassResponsibility();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isLogarithmic",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Valuescale);

$core.addMethod(
$core.method({
selector: "ticks",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "ticks\x0a\x09\x22<Array with: (Array of: Number) with: (Array of: Number)>\x0a\x09major ticks and minor ticks\x22\x0a\x09\x0a\x09^self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["subclassResponsibility"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._subclassResponsibility();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ticks",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Valuescale);



$core.addClass("LinearValuescale", $globals.Valuescale, "Covid19view");
$core.setSlots($globals.LinearValuescale, ["ticks"]);
$core.addMethod(
$core.method({
selector: "initializeFrom:to:",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStart", "anEnd"],
source: "initializeFrom: aStart to: anEnd\x0a\x09| f |\x0a\x09f := 10 raisedTo: (aStart abs max: anEnd abs) exponent.\x0a\x09(self ticksForNormedLow: aStart / f andHigh: anEnd / f) allIn: [:major :minor |\x0a\x09\x09ticks := {major collect: [:n | n * f]. minor collect: [:n | n * f]}.\x0a\x09\x09from := ((major first min: minor first) min: 0) * f.\x0a\x09\x09to := ((major last max: minor last) max: 0) * f]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["raisedTo:", "exponent", "max:", "abs", "allIn:", "ticksForNormedLow:andHigh:", "/", "collect:", "*", "min:", "first", "last"]
}, function ($methodClass){ return function (aStart,anEnd){
var self=this,$self=this;
var f;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
f=(10)._raisedTo_($recv([$recv([$recv(aStart)._abs()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["abs"]=1
//>>excludeEnd("ctx");
][0])._max_($recv(anEnd)._abs())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["max:"]=1
//>>excludeEnd("ctx");
][0])._exponent());
$recv($self._ticksForNormedLow_andHigh_([$recv(aStart).__slash(f)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=1
//>>excludeEnd("ctx");
][0],$recv(anEnd).__slash(f)))._allIn_((function(major,minor){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$self.ticks=[[$recv(major)._collect_((function(n){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return [$recv(n).__star(f)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["*"]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({n:n},$ctx2,2)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["collect:"]=1
//>>excludeEnd("ctx");
][0],$recv(minor)._collect_((function(n){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return [$recv(n).__star(f)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["*"]=2
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({n:n},$ctx2,3)});
//>>excludeEnd("ctx");
}))];
$self.from=[$recv([$recv($recv([$recv(major)._first()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["first"]=1
//>>excludeEnd("ctx");
][0])._min_($recv(minor)._first()))._min_((0))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["min:"]=1
//>>excludeEnd("ctx");
][0]).__star(f)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["*"]=3
//>>excludeEnd("ctx");
][0];
$self.to=$recv([$recv($recv([$recv(major)._last()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["last"]=1
//>>excludeEnd("ctx");
][0])._max_($recv(minor)._last()))._max_((0))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["max:"]=2
//>>excludeEnd("ctx");
][0]).__star(f);
return $self.to;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({major:major,minor:minor},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeFrom:to:",{aStart:aStart,anEnd:anEnd,f:f})});
//>>excludeEnd("ctx");
}; }),
$globals.LinearValuescale);

$core.addMethod(
$core.method({
selector: "isLogarithmic",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isLogarithmic\x0a\x09^false",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return false;

}; }),
$globals.LinearValuescale);

$core.addMethod(
$core.method({
selector: "ticks",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "ticks\x0a\x09^ticks",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.ticks;

}; }),
$globals.LinearValuescale);

$core.addMethod(
$core.method({
selector: "ticksForNormedLow:andHigh:",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aLowNumber", "aHighNumber"],
source: "ticksForNormedLow: aLowNumber andHigh: aHighNumber\x0a\x09\x22<Array[2] of: (Array of: Number)>\x22\x0a\x09\x0a\x09| normedHigh positiveTicks normedLow |\x0a\x09normedHigh := aLowNumber abs max: aHighNumber abs.\x0a\x09positiveTicks := (self class tickBlocksAtValue at: normedHigh ceiling) cull: normedHigh.\x0a\x09(aHighNumber abs >= aLowNumber abs and: [\x0a\x09aLowNumber positive]) ifTrue: [\x0a\x09\x09^positiveTicks].\x0a\x09aHighNumber abs < aLowNumber abs ifTrue: [\x0a\x09\x09^(self ticksForNormedLow: aHighNumber negated andHigh: aLowNumber negated) allIn: [:major :minor |\x0a\x09\x09\x09{major reversed collect: #negated.\x0a\x09\x09\x09minor reversed collect: #negated}]].\x0a\x09normedLow := aLowNumber negated.\x0a\x09^positiveTicks allIn: [:major :minor |\x0a\x09\x09| majorStream minorStream majorTicks minorTicks done |\x0a\x09\x09majorStream := major readStream.\x0a\x09\x09minorStream := minor readStream.\x0a\x09\x09majorTicks := OrderedCollection new.\x0a\x09\x09minorTicks := OrderedCollection new.\x0a\x09\x09done := false.\x0a\x09\x09[done] whileFalse: [\x0a\x09\x09\x09| tick |\x0a\x09\x09\x09(majorStream peek ifNil: [100]) < (minorStream peek ifNil: [100])\x0a\x09\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09\x09tick := majorStream next.\x0a\x09\x09\x09\x09\x09majorTicks add: tick]\x0a\x09\x09\x09\x09ifFalse: [\x0a\x09\x09\x09\x09\x09tick := minorStream next.\x0a\x09\x09\x09\x09\x09minorTicks add: tick].\x0a\x09\x09\x09(tick >= normedLow or: [\x0a\x09\x09\x09(majorStream atEnd and: [\x0a\x09\x09\x09minorStream atEnd])]) ifTrue: [\x0a\x09\x09\x09\x09done := true]].\x0a\x09\x09{(majorTicks reversed collect: #negated), {0}, major.\x0a\x09\x09(minorTicks reversed collect: #negated), minor}]",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["max:", "abs", "cull:", "at:", "tickBlocksAtValue", "class", "ceiling", "ifTrue:", "and:", ">=", "positive", "<", "allIn:", "ticksForNormedLow:andHigh:", "negated", "collect:", "reversed", "readStream", "new", "whileFalse:", "ifTrue:ifFalse:", "ifNil:", "peek", "next", "add:", "or:", "atEnd", ","]
}, function ($methodClass){ return function (aLowNumber,aHighNumber){
var self=this,$self=this;
var normedHigh,positiveTicks,normedLow;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6;
normedHigh=$recv([$recv(aLowNumber)._abs()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["abs"]=1
//>>excludeEnd("ctx");
][0])._max_([$recv(aHighNumber)._abs()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["abs"]=2
//>>excludeEnd("ctx");
][0]);
positiveTicks=$recv($recv($recv($self._class())._tickBlocksAtValue())._at_($recv(normedHigh)._ceiling()))._cull_(normedHigh);
if($core.assert([$recv([$recv(aHighNumber)._abs()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["abs"]=3
//>>excludeEnd("ctx");
][0]).__gt_eq([$recv(aLowNumber)._abs()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["abs"]=4
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[">="]=1
//>>excludeEnd("ctx");
][0])){
$1=$recv(aLowNumber)._positive();
} else {
$1=false;
}
if($core.assert($1)){
return positiveTicks;
}
if($core.assert([$recv([$recv(aHighNumber)._abs()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["abs"]=5
//>>excludeEnd("ctx");
][0]).__lt($recv(aLowNumber)._abs())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["<"]=1
//>>excludeEnd("ctx");
][0])){
return [$recv($self._ticksForNormedLow_andHigh_([$recv(aHighNumber)._negated()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["negated"]=1
//>>excludeEnd("ctx");
][0],[$recv(aLowNumber)._negated()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["negated"]=2
//>>excludeEnd("ctx");
][0]))._allIn_((function(major,minor){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return [[$recv([$recv(major)._reversed()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["reversed"]=1
//>>excludeEnd("ctx");
][0])._collect_("negated")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["collect:"]=1
//>>excludeEnd("ctx");
][0],[$recv([$recv(minor)._reversed()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["reversed"]=2
//>>excludeEnd("ctx");
][0])._collect_("negated")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["collect:"]=2
//>>excludeEnd("ctx");
][0]];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({major:major,minor:minor},$ctx1,4)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["allIn:"]=1
//>>excludeEnd("ctx");
][0];
}
normedLow=$recv(aLowNumber)._negated();
return $recv(positiveTicks)._allIn_((function(major,minor){
var majorStream,minorStream,majorTicks,minorTicks,done;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
majorStream=[$recv(major)._readStream()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["readStream"]=1
//>>excludeEnd("ctx");
][0];
minorStream=$recv(minor)._readStream();
majorTicks=[$recv($globals.OrderedCollection)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["new"]=1
//>>excludeEnd("ctx");
][0];
minorTicks=$recv($globals.OrderedCollection)._new();
done=false;
$recv((function(){
return done;

}))._whileFalse_((function(){
var tick;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$2=[$recv(majorStream)._peek()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["peek"]=1
//>>excludeEnd("ctx");
][0];
if($2 == null || $2.a$nil){
$3=(100);
} else {
$3=$2;
}
$4=$recv(minorStream)._peek();
if($4 == null || $4.a$nil){
$5=(100);
} else {
$5=$4;
}
if($core.assert($recv($3).__lt($5))){
tick=[$recv(majorStream)._next()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["next"]=1
//>>excludeEnd("ctx");
][0];
[$recv(majorTicks)._add_(tick)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["add:"]=1
//>>excludeEnd("ctx");
][0];
} else {
tick=$recv(minorStream)._next();
$recv(minorTicks)._add_(tick);
}
if($core.assert($recv(tick).__gt_eq(normedLow))){
$6=true;
} else {
if($core.assert([$recv(majorStream)._atEnd()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["atEnd"]=1
//>>excludeEnd("ctx");
][0])){
$6=$recv(minorStream)._atEnd();
} else {
$6=false;
}
}
if($core.assert($6)){
done=true;
return done;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({tick:tick},$ctx2,7)});
//>>excludeEnd("ctx");
}));
return [[$recv([$recv([$recv([$recv(majorTicks)._reversed()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["reversed"]=3
//>>excludeEnd("ctx");
][0])._collect_("negated")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["collect:"]=3
//>>excludeEnd("ctx");
][0]).__comma([(0)])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx[","]=2
//>>excludeEnd("ctx");
][0]).__comma(major)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx[","]=1
//>>excludeEnd("ctx");
][0],$recv($recv($recv(minorTicks)._reversed())._collect_("negated")).__comma(minor)];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({major:major,minor:minor,majorStream:majorStream,minorStream:minorStream,majorTicks:majorTicks,minorTicks:minorTicks,done:done},$ctx1,5)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ticksForNormedLow:andHigh:",{aLowNumber:aLowNumber,aHighNumber:aHighNumber,normedHigh:normedHigh,positiveTicks:positiveTicks,normedLow:normedLow})});
//>>excludeEnd("ctx");
}; }),
$globals.LinearValuescale);


$core.addMethod(
$core.method({
selector: "tickBlocksAtValue",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tickBlocksAtValue\x0a\x09| dict |\x0a\x09dict := Dictionary new.\x0a\x09dict at: 10 put: [\x09\x09#(\x09#(2 4 6 8 10) \x09  #(1 3 5 7 9)\x09)].\x0a\x09dict at: 9 put: [\x09\x09#(\x09#(2 4 6 8) \x09\x09  \x09#(1 3 5 7 9)\x09)].\x0a\x09dict at: 8 put: [\x09\x09#(\x09#(2 4 6 8) \x09\x09\x09#(1 3 5 7)\x09\x09)].\x0a\x09dict at: 7 put: [\x09\x09#(\x09#(2 4 6) \x09\x09\x09#(1 3 5 7)\x09\x09)].\x0a\x09dict at: 6 put: [\x09\x09#(\x09#(2 4 6) \x09\x09\x09#(1 3 5)\x09\x09)].\x0a\x09dict at: 5 put: [\x09\x09#(\x09#(2 4) \x09\x09\x09\x09#(1 3 5)\x09\x09)].\x0a\x09dict at: 4 put: [:n | \x09{\x091 to: n + 0.5. \x09\x090 to: (n + 0.5) by: 0.5\x09\x09}].\x0a\x09dict at: 3 put: [:n |\x09{\x091 to: n + 0.5. \x09\x09\x090 to: (n + 0.5) by: 0.5\x09\x09}].\x0a\x09dict at: 2 put: [:n |\x09{\x091 to: n + 0.2. \x09\x09\x090 to: (n + 0.2) by: 0.2\x09\x09}].\x0a\x09dict at: 1 put: [:n |\x09{\x09{1}. \x09\x09\x09\x090 to: (n + 0.2) by: 0.2\x09\x09}].\x0a\x09^dict",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "at:put:", "to:", "+", "to:by:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var dict;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
dict=$recv($globals.Dictionary)._new();
[$recv(dict)._at_put_((10),(function(){
return [[(2), (4), (6), (8), (10)], [(1), (3), (5), (7), (9)]];

}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:put:"]=1
//>>excludeEnd("ctx");
][0];
[$recv(dict)._at_put_((9),(function(){
return [[(2), (4), (6), (8)], [(1), (3), (5), (7), (9)]];

}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:put:"]=2
//>>excludeEnd("ctx");
][0];
[$recv(dict)._at_put_((8),(function(){
return [[(2), (4), (6), (8)], [(1), (3), (5), (7)]];

}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:put:"]=3
//>>excludeEnd("ctx");
][0];
[$recv(dict)._at_put_((7),(function(){
return [[(2), (4), (6)], [(1), (3), (5), (7)]];

}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:put:"]=4
//>>excludeEnd("ctx");
][0];
[$recv(dict)._at_put_((6),(function(){
return [[(2), (4), (6)], [(1), (3), (5)]];

}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:put:"]=5
//>>excludeEnd("ctx");
][0];
[$recv(dict)._at_put_((5),(function(){
return [[(2), (4)], [(1), (3), (5)]];

}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:put:"]=6
//>>excludeEnd("ctx");
][0];
[$recv(dict)._at_put_((4),(function(n){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return [[(1)._to_([$recv(n).__plus((0.5))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["+"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["to:"]=1
//>>excludeEnd("ctx");
][0],[(0)._to_by_([$recv(n).__plus((0.5))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["+"]=2
//>>excludeEnd("ctx");
][0],(0.5))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["to:by:"]=1
//>>excludeEnd("ctx");
][0]];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({n:n},$ctx1,7)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:put:"]=7
//>>excludeEnd("ctx");
][0];
[$recv(dict)._at_put_((3),(function(n){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return [[(1)._to_([$recv(n).__plus((0.5))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["+"]=3
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["to:"]=2
//>>excludeEnd("ctx");
][0],[(0)._to_by_([$recv(n).__plus((0.5))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["+"]=4
//>>excludeEnd("ctx");
][0],(0.5))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["to:by:"]=2
//>>excludeEnd("ctx");
][0]];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({n:n},$ctx1,8)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:put:"]=8
//>>excludeEnd("ctx");
][0];
[$recv(dict)._at_put_((2),(function(n){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return [(1)._to_([$recv(n).__plus((0.2))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["+"]=5
//>>excludeEnd("ctx");
][0]),[(0)._to_by_([$recv(n).__plus((0.2))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["+"]=6
//>>excludeEnd("ctx");
][0],(0.2))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["to:by:"]=3
//>>excludeEnd("ctx");
][0]];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({n:n},$ctx1,9)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:put:"]=9
//>>excludeEnd("ctx");
][0];
$recv(dict)._at_put_((1),(function(n){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return [[(1)],(0)._to_by_($recv(n).__plus((0.2)),(0.2))];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({n:n},$ctx1,10)});
//>>excludeEnd("ctx");
}));
return dict;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tickBlocksAtValue",{dict:dict})});
//>>excludeEnd("ctx");
}; }),
$globals.LinearValuescale.a$cls);


$core.addClass("LogarithmicValuescale", $globals.Valuescale, "Covid19view");
$core.addMethod(
$core.method({
selector: "at:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDomainValue"],
source: "at: aDomainValue\x0a\x09^(aDomainValue ln max: 0) / self range ln",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["/", "max:", "ln", "range"]
}, function ($methodClass){ return function (aDomainValue){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv(aDomainValue)._ln();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["ln"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._max_((0));
return $recv($1).__slash($recv($self._range())._ln());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:",{aDomainValue:aDomainValue})});
//>>excludeEnd("ctx");
}; }),
$globals.LogarithmicValuescale);

$core.addMethod(
$core.method({
selector: "initializeFrom:to:",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStart", "anEnd"],
source: "initializeFrom: aStart to: anEnd\x0a\x09from := 1.\x0a\x09(10 raisedTo: anEnd exponent) = anEnd ifTrue: [\x0a\x09\x09to := 10 raisedTo: anEnd exponent.\x0a\x09\x09^self].\x0a\x09to := 10 raisedTo: anEnd exponent + 1",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "=", "raisedTo:", "exponent", "+"]
}, function ($methodClass){ return function (aStart,anEnd){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.from=(1);
if($core.assert($recv([(10)._raisedTo_([$recv(anEnd)._exponent()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["exponent"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["raisedTo:"]=1
//>>excludeEnd("ctx");
][0]).__eq(anEnd))){
$self.to=[(10)._raisedTo_([$recv(anEnd)._exponent()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["exponent"]=2
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["raisedTo:"]=2
//>>excludeEnd("ctx");
][0];
return self;
}
$self.to=(10)._raisedTo_($recv($recv(anEnd)._exponent()).__plus((1)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeFrom:to:",{aStart:aStart,anEnd:anEnd})});
//>>excludeEnd("ctx");
}; }),
$globals.LogarithmicValuescale);

$core.addMethod(
$core.method({
selector: "isLogarithmic",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isLogarithmic\x0a\x09^true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return true;

}; }),
$globals.LogarithmicValuescale);

$core.addMethod(
$core.method({
selector: "range",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "range\x0a\x09^self to",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["to"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._to();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"range",{})});
//>>excludeEnd("ctx");
}; }),
$globals.LogarithmicValuescale);

$core.addMethod(
$core.method({
selector: "ticks",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "ticks\x0a\x09| exponent majors minors topFactor |\x0a\x09exponent := self to exponent.\x0a\x09majors := (0 to: exponent) collect: [:exp | 10 raisedTo: exp].\x0a\x09minors := OrderedCollection new.\x0a\x09topFactor := (self to / (10 raisedTo: exponent)) floor.\x0a\x09minors addAll: ((3 to: topFactor by: 2) collect: [:i | (10 raisedTo: exponent) * i]).\x0a\x090 to: exponent - 1 do: [:exp | \x0a\x09\x09minors addAll: (#(3 5 7 9) collect: [:i | (10 raisedTo: exp) * i])].\x0a\x09^{majors. minors}",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["exponent", "to", "collect:", "to:", "raisedTo:", "new", "floor", "/", "addAll:", "to:by:", "*", "to:do:", "-"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var exponent,majors,minors,topFactor;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
exponent=$recv([$self._to()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["to"]=1
//>>excludeEnd("ctx");
][0])._exponent();
majors=[$recv((0)._to_(exponent))._collect_((function(exp){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return [(10)._raisedTo_(exp)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["raisedTo:"]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({exp:exp},$ctx1,1)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["collect:"]=1
//>>excludeEnd("ctx");
][0];
minors=$recv($globals.OrderedCollection)._new();
topFactor=$recv($recv($self._to()).__slash([(10)._raisedTo_(exponent)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["raisedTo:"]=2
//>>excludeEnd("ctx");
][0]))._floor();
[$recv(minors)._addAll_([$recv((3)._to_by_(topFactor,(2)))._collect_((function(i){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return [$recv([(10)._raisedTo_(exponent)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["raisedTo:"]=3
//>>excludeEnd("ctx");
][0]).__star(i)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["*"]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({i:i},$ctx1,2)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["collect:"]=2
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["addAll:"]=1
//>>excludeEnd("ctx");
][0];
(0)._to_do_($recv(exponent).__minus((1)),(function(exp){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(minors)._addAll_([(3), (5), (7), (9)]._collect_((function(i){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv((10)._raisedTo_(exp)).__star(i);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({i:i},$ctx2,4)});
//>>excludeEnd("ctx");
})));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({exp:exp},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return [majors,minors];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ticks",{exponent:exponent,majors:majors,minors:minors,topFactor:topFactor})});
//>>excludeEnd("ctx");
}; }),
$globals.LogarithmicValuescale);


$core.addMethod(
$core.method({
selector: "groupedBy:",
protocol: "*Covid19view",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aValuable"],
source: "groupedBy: aValuable\x0a\x09| dict |\x0a\x09dict := Dictionary new.\x0a\x09self do: [:item | \x0a\x09\x09(dict at: (aValuable value: item) ifAbsentPut: [OrderedCollection new]) add: item].\x0a\x09^dict",
referencedClasses: ["Dictionary", "OrderedCollection"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "do:", "add:", "at:ifAbsentPut:", "value:"]
}, function ($methodClass){ return function (aValuable){
var self=this,$self=this;
var dict;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
dict=$recv($globals.Dictionary)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$self._do_((function(item){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(dict)._at_ifAbsentPut_($recv(aValuable)._value_(item),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($globals.OrderedCollection)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
})))._add_(item);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({item:item},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return dict;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"groupedBy:",{aValuable:aValuable,dict:dict})});
//>>excludeEnd("ctx");
}; }),
$globals.Array);

$core.addMethod(
$core.method({
selector: "cull:",
protocol: "*Covid19view",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "cull: anObject\x0a\x09^self cullWithArguments: {anObject}",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["cullWithArguments:"]
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._cullWithArguments_([anObject]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cull:",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "cull:cull:",
protocol: "*Covid19view",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "anotherObject"],
source: "cull: anObject cull: anotherObject\x0a\x09^self cullWithArguments: {anObject. anotherObject}",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["cullWithArguments:"]
}, function ($methodClass){ return function (anObject,anotherObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._cullWithArguments_([anObject,anotherObject]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cull:cull:",{anObject:anObject,anotherObject:anotherObject})});
//>>excludeEnd("ctx");
}; }),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "cull:cull:cull:",
protocol: "*Covid19view",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "anotherObject", "andAnotherObject"],
source: "cull: anObject cull: anotherObject cull: andAnotherObject\x0a\x09^self cullWithArguments: {anObject. anotherObject. andAnotherObject}",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["cullWithArguments:"]
}, function ($methodClass){ return function (anObject,anotherObject,andAnotherObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._cullWithArguments_([anObject,anotherObject,andAnotherObject]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cull:cull:cull:",{anObject:anObject,anotherObject:anotherObject,andAnotherObject:andAnotherObject})});
//>>excludeEnd("ctx");
}; }),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "cullWithArguments:",
protocol: "*Covid19view",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "cullWithArguments: aCollection\x0a\x09^self valueWithPossibleArguments: aCollection",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["valueWithPossibleArguments:"]
}, function ($methodClass){ return function (aCollection){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._valueWithPossibleArguments_(aCollection);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cullWithArguments:",{aCollection:aCollection})});
//>>excludeEnd("ctx");
}; }),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "asLocaleDateString",
protocol: "*Covid19view",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asLocaleDateString\x0a\x09<inlineJS: 'return self.toLocaleDateString()'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return self.toLocaleDateString()"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.toLocaleDateString();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asLocaleDateString",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Date);

$core.addMethod(
$core.method({
selector: "dayBefore",
protocol: "*Covid19view",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dayBefore\x0a\x09^self class fromMilliseconds: self asMilliseconds - self millisecondsInDay",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["fromMilliseconds:", "class", "-", "asMilliseconds", "millisecondsInDay"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._class())._fromMilliseconds_($recv($self._asMilliseconds()).__minus($self._millisecondsInDay()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dayBefore",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Date);

$core.addMethod(
$core.method({
selector: "max:",
protocol: "*Covid19view",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDate"],
source: "max: aDate\x0a\x09aDate > self ifTrue: [\x0a\x09\x09^aDate].\x0a\x09^self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", ">"]
}, function ($methodClass){ return function (aDate){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(aDate).__gt(self);
if($core.assert($1)){
return aDate;
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"max:",{aDate:aDate})});
//>>excludeEnd("ctx");
}; }),
$globals.Date);

$core.addMethod(
$core.method({
selector: "millisecondsInDay",
protocol: "*Covid19view",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "millisecondsInDay\x0a\x09^1000 * 60 * 60 * 24",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["*"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv((1000).__star((60))).__star((60));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__star((24));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"millisecondsInDay",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Date);

$core.addMethod(
$core.method({
selector: "nextDay",
protocol: "*Covid19view",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "nextDay\x0a\x09^self class fromMilliseconds: self asMilliseconds + self millisecondsInDay",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["fromMilliseconds:", "class", "+", "asMilliseconds", "millisecondsInDay"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._class())._fromMilliseconds_($recv($self._asMilliseconds()).__plus($self._millisecondsInDay()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextDay",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Date);

$core.addMethod(
$core.method({
selector: "to:",
protocol: "*Covid19view",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDate"],
source: "to: aDate\x0a\x09\x22<Array of: Date>\x0a\x09list of all dates between the receiver (including) and aDate (including).\x0a\x09((Date d: 1 m: 1 y: 2020) to: (Date d: 1 m: 2 y: 2020)) size\x0a\x09(Date d: 1 m: 1 y: 2020) to: (Date d: 1 m: 1 y: 2020)\x0a\x09(Date d: 1 m: 1 y: 2020) nextDay to: (Date d: 1 m: 1 y: 2020)\x0a\x09\x22\x0a\x09\x0a\x09| list |\x0a\x09self > aDate ifTrue: [\x0a\x09\x09^#()].\x0a\x09list := OrderedCollection with: self.\x0a\x09[list last < aDate] whileTrue: [\x0a\x09\x09list add: list last nextDay].\x0a\x09^list",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", ">", "with:", "whileTrue:", "<", "last", "add:", "nextDay"]
}, function ($methodClass){ return function (aDate){
var self=this,$self=this;
var list;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert($self.__gt(aDate))){
return [];
}
list=$recv($globals.OrderedCollection)._with_(self);
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv([$recv(list)._last()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["last"]=1
//>>excludeEnd("ctx");
][0]).__lt(aDate);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}))._whileTrue_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(list)._add_($recv($recv(list)._last())._nextDay());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return list;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"to:",{aDate:aDate,list:list})});
//>>excludeEnd("ctx");
}; }),
$globals.Date);

$core.addMethod(
$core.method({
selector: "d:m:y:",
protocol: "*Covid19view",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["dayInteger", "monthInteger", "yearInteger"],
source: "d: dayInteger m: monthInteger y: yearInteger\x0a\x09<inlineJS: 'return new Date(yearInteger, monthInteger - 1, dayInteger)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return new Date(yearInteger, monthInteger - 1, dayInteger)"]]],
messageSends: []
}, function ($methodClass){ return function (dayInteger,monthInteger,yearInteger){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return new Date(yearInteger, monthInteger - 1, dayInteger);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"d:m:y:",{dayInteger:dayInteger,monthInteger:monthInteger,yearInteger:yearInteger})});
//>>excludeEnd("ctx");
}; }),
$globals.Date.a$cls);

$core.addMethod(
$core.method({
selector: "d:m:y:h:m:s:",
protocol: "*Covid19view",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["dayInteger", "monthInteger", "yearInteger", "hourInteger", "minutesInteger", "secondsInteger"],
source: "d: dayInteger m: monthInteger y: yearInteger h: hourInteger m: minutesInteger s: secondsInteger\x0a\x09<inlineJS: 'return new Date(yearInteger, monthInteger - 1, dayInteger, hourInteger, minutesInteger, secondsInteger)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return new Date(yearInteger, monthInteger - 1, dayInteger, hourInteger, minutesInteger, secondsInteger)"]]],
messageSends: []
}, function ($methodClass){ return function (dayInteger,monthInteger,yearInteger,hourInteger,minutesInteger,secondsInteger){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return new Date(yearInteger, monthInteger - 1, dayInteger, hourInteger, minutesInteger, secondsInteger);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"d:m:y:h:m:s:",{dayInteger:dayInteger,monthInteger:monthInteger,yearInteger:yearInteger,hourInteger:hourInteger,minutesInteger:minutesInteger,secondsInteger:secondsInteger})});
//>>excludeEnd("ctx");
}; }),
$globals.Date.a$cls);

$core.addMethod(
$core.method({
selector: "asLocalizedString",
protocol: "*Covid19view",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asLocalizedString\x0a\x09\x22<String>\x0a\x09localized String with thousands separator\x22\x0a\x09\x0a\x09<inlineJS: 'return self.toLocaleString()'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return self.toLocaleString()"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.toLocaleString();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asLocalizedString",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "asLocalizedString:",
protocol: "*Covid19view",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anOptionsDictionary"],
source: "asLocalizedString: anOptionsDictionary\x0a\x09\x22<String>\x0a\x09localized String with thousands separator and options for the host language.\x0a\x09See https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString for details.\x0a\x091234.56789 asLocalizedString: #{'style' -> 'percent'. 'maximumFractionDigits' -> 1}\x0a\x09\x22\x0a\x09\x0a\x09<inlineJS: 'return self.toLocaleString(undefined, anOptionsDictionary)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return self.toLocaleString(undefined, anOptionsDictionary)"]]],
messageSends: []
}, function ($methodClass){ return function (anOptionsDictionary){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.toLocaleString(undefined, anOptionsDictionary);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asLocalizedString:",{anOptionsDictionary:anOptionsDictionary})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "exp",
protocol: "*Covid19view",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "exp\x0a\x09<inlineJS: 'return Math.exp(self);'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return Math.exp(self);"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return Math.exp(self);;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exp",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "exponent",
protocol: "*Covid19view",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "exponent\x0a\x09\x22<Integer>\x0a\x09the power of 10 below the receiver.\x0a\x09Wrong for 1.000 and 1.000.000\x22\x0a\x09\x0a\x09^(self log + 0.00000001) floor",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["floor", "+", "log"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($self._log()).__plus((1e-8)))._floor();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exponent",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

});
