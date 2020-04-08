define(["amber/boot", "require", "amber/core/Kernel-Objects"], function($boot,requirejs){"use strict";
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("Covid19Model");
$pkg.innerEval = function (expr) { return eval(expr); };
$pkg.imports = ["appTimestamp=app/timestamp"];
//>>excludeStart("imports", pragmas.excludeImports);
var appTimestamp;
$pkg.isReady = new Promise(function (resolve, reject) { requirejs(["app/timestamp"], function ($1) {appTimestamp=$1; resolve();}, reject); });
//>>excludeEnd("imports");
$pkg.transport = {"type":"amd","amdNamespace":"amber-covid19view"};

$core.addClass("Casecount", $globals.Object, ["confirmed", "deaths"], "Covid19Model");
$core.addMethod(
$core.method({
selector: "+",
protocol: "arithmetic",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCasecount"],
source: "+ aCasecount\x0a\x09\x22<Casecount>\x22\x0a\x09\x0a\x09^self class \x0a\x09\x09confirmed: self confirmed + aCasecount confirmed\x0a\x09\x09deaths: self deaths + aCasecount deaths",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["confirmed:deaths:", "class", "+", "confirmed", "deaths"]
}, function ($methodClass){ return function (aCasecount){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._class())._confirmed_deaths_([$recv([$self._confirmed()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["confirmed"]=1
//>>excludeEnd("ctx");
][0]).__plus($recv(aCasecount)._confirmed())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["+"]=1
//>>excludeEnd("ctx");
][0],$recv([$self._deaths()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["deaths"]=1
//>>excludeEnd("ctx");
][0]).__plus($recv(aCasecount)._deaths()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"+",{aCasecount:aCasecount})});
//>>excludeEnd("ctx");
}; }),
$globals.Casecount);

$core.addMethod(
$core.method({
selector: "-",
protocol: "arithmetic",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCasecount"],
source: "- aCasecount\x0a\x09\x22<Casecount>\x22\x0a\x09\x0a\x09^self class \x0a\x09\x09confirmed: self confirmed - aCasecount confirmed\x0a\x09\x09deaths: self deaths - aCasecount deaths",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["confirmed:deaths:", "class", "-", "confirmed", "deaths"]
}, function ($methodClass){ return function (aCasecount){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._class())._confirmed_deaths_([$recv([$self._confirmed()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["confirmed"]=1
//>>excludeEnd("ctx");
][0]).__minus($recv(aCasecount)._confirmed())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["-"]=1
//>>excludeEnd("ctx");
][0],$recv([$self._deaths()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["deaths"]=1
//>>excludeEnd("ctx");
][0]).__minus($recv(aCasecount)._deaths()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"-",{aCasecount:aCasecount})});
//>>excludeEnd("ctx");
}; }),
$globals.Casecount);

$core.addMethod(
$core.method({
selector: "aspects",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "aspects\x0a\x09\x22<Array of: Symbol>\x22\x0a\x09\x0a\x09^#(#confirmed #deaths)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return ["confirmed", "deaths"];

}; }),
$globals.Casecount);

$core.addMethod(
$core.method({
selector: "confirmed",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "confirmed\x0a\x09\x22<Integer>\x22\x0a\x0a\x09^confirmed",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.confirmed;

}; }),
$globals.Casecount);

$core.addMethod(
$core.method({
selector: "deaths",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "deaths\x0a\x09\x22<Integer>\x22\x0a\x09\x0a\x09^deaths",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.deaths;

}; }),
$globals.Casecount);

$core.addMethod(
$core.method({
selector: "initializeConfirmed:deaths:",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aConfirmedInteger", "aDeathsInteger"],
source: "initializeConfirmed: aConfirmedInteger deaths: aDeathsInteger\x0a\x09confirmed := aConfirmedInteger.\x0a\x09deaths := aDeathsInteger",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aConfirmedInteger,aDeathsInteger){
var self=this,$self=this;
$self.confirmed=aConfirmedInteger;
$self.deaths=aDeathsInteger;
return self;

}; }),
$globals.Casecount);


$core.addMethod(
$core.method({
selector: "confirmed:deaths:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aConfirmedInteger", "aDeathsInteger"],
source: "confirmed: aConfirmedInteger deaths: aDeathsInteger\x0a\x09| inst |\x0a\x09inst := self new.\x0a\x09inst initializeConfirmed: aConfirmedInteger deaths: aDeathsInteger.\x0a\x09^inst",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "initializeConfirmed:deaths:"]
}, function ($methodClass){ return function (aConfirmedInteger,aDeathsInteger){
var self=this,$self=this;
var inst;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
inst=$self._new();
$recv(inst)._initializeConfirmed_deaths_(aConfirmedInteger,aDeathsInteger);
return inst;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"confirmed:deaths:",{aConfirmedInteger:aConfirmedInteger,aDeathsInteger:aDeathsInteger,inst:inst})});
//>>excludeEnd("ctx");
}; }),
$globals.Casecount.a$cls);

$core.addMethod(
$core.method({
selector: "fromJson:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJson"],
source: "fromJson: aJson\x0a\x09^self \x0a\x09\x09confirmed: (aJson at: #c ifAbsent: [0])\x0a\x09\x09deaths: (aJson at: #d ifAbsent: [0])",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["confirmed:deaths:", "at:ifAbsent:"]
}, function ($methodClass){ return function (aJson){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._confirmed_deaths_([$recv(aJson)._at_ifAbsent_("c",(function(){
return (0);

}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:ifAbsent:"]=1
//>>excludeEnd("ctx");
][0],$recv(aJson)._at_ifAbsent_("d",(function(){
return (0);

})));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromJson:",{aJson:aJson})});
//>>excludeEnd("ctx");
}; }),
$globals.Casecount.a$cls);

$core.addMethod(
$core.method({
selector: "zero",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "zero\x0a\x09^self confirmed: 0 deaths: 0",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["confirmed:deaths:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._confirmed_deaths_((0),(0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"zero",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Casecount.a$cls);


$core.addClass("CoViD19Application", $globals.Object, ["countries"], "Covid19Model");
$core.addMethod(
$core.method({
selector: "countries",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "countries\x0a\x09\x22<Array of: Country>\x22\x0a\x09\x0a\x09^countries ifNil: [#()]",
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
$1=$self.countries;
if($1 == null || $1.a$nil){
return [];
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"countries",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CoViD19Application);

$core.addMethod(
$core.method({
selector: "countries:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["someCountries"],
source: "countries: someCountries\x0a\x09countries := someCountries",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (someCountries){
var self=this,$self=this;
$self.countries=someCountries;
return self;

}; }),
$globals.CoViD19Application);

$core.addMethod(
$core.method({
selector: "dataHome",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dataHome\x0a\x09\x22<String>\x0a\x09the directory with all data files\x22\x0a\x0a\x09^'https://covidcrt.uber.space/data/'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return "https://covidcrt.uber.space/data/";

}; }),
$globals.CoViD19Application);

$core.addMethod(
$core.method({
selector: "getData",
protocol: "data actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "getData\x0a\x09^(self withJson: 'CoViD-19_JHU.json') then: [:json |\x0a\x09\x09self countries: (Country allFromJHUJson: json)]",
referencedClasses: ["Country"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["then:", "withJson:", "countries:", "allFromJHUJson:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._withJson_("CoViD-19_JHU.json"))._then_((function(json){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._countries_($recv($globals.Country)._allFromJHUJson_(json));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({json:json},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"getData",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CoViD19Application);

$core.addMethod(
$core.method({
selector: "getGermanData",
protocol: "data actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "getGermanData\x0a\x09^(self withJson: 'CoViD-19_RKI.json') then: [:json |\x0a\x09\x09| germany |\x0a\x09\x09germany := self countries detect: [:country | country name = 'Germany'].\x0a\x09\x09germany parts addAll: ((Country allFromRKIJson: json) sort: [:a :b | a > b])]",
referencedClasses: ["Country"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["then:", "withJson:", "detect:", "countries", "=", "name", "addAll:", "parts", "sort:", "allFromRKIJson:", ">"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._withJson_("CoViD-19_RKI.json"))._then_((function(json){
var germany;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
germany=$recv($self._countries())._detect_((function(country){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv(country)._name()).__eq("Germany");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({country:country},$ctx2,2)});
//>>excludeEnd("ctx");
}));
return $recv($recv(germany)._parts())._addAll_($recv($recv($globals.Country)._allFromRKIJson_(json))._sort_((function(a,b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(a).__gt(b);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({a:a,b:b},$ctx2,3)});
//>>excludeEnd("ctx");
})));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({json:json,germany:germany},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"getGermanData",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CoViD19Application);

$core.addMethod(
$core.method({
selector: "getUSData",
protocol: "data actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "getUSData\x0a\x09^(self withJson: 'CoViD-19_US_JHU.json') then: [:json |\x0a\x09\x09| us |\x0a\x09\x09us := self countries detect: [:country | country name = 'US'].\x0a\x09\x09us parts addAll: (Country allFromUSJHUJson: json)]",
referencedClasses: ["Country"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["then:", "withJson:", "detect:", "countries", "=", "name", "addAll:", "parts", "allFromUSJHUJson:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._withJson_("CoViD-19_US_JHU.json"))._then_((function(json){
var us;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
us=$recv($self._countries())._detect_((function(country){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv(country)._name()).__eq("US");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({country:country},$ctx2,2)});
//>>excludeEnd("ctx");
}));
return $recv($recv(us)._parts())._addAll_($recv($globals.Country)._allFromUSJHUJson_(json));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({json:json,us:us},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"getUSData",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CoViD19Application);

$core.addMethod(
$core.method({
selector: "lastDate",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "lastDate\x0a\x09\x22<Date>\x0a\x09the most recent date in the data\x22\x0a\x09\x0a\x09^self world lastDate",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["lastDate", "world"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._world())._lastDate();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lastDate",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CoViD19Application);

$core.addMethod(
$core.method({
selector: "metadata",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "metadata\x0a\x09\x22<Dictionary>\x22\x0a\x09\x0a\x09self countries isEmpty ifTrue: [\x0a\x09\x09^Dictionary new].\x0a\x09^self countries first metadata",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "isEmpty", "countries", "new", "metadata", "first"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert($recv([$self._countries()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["countries"]=1
//>>excludeEnd("ctx");
][0])._isEmpty())){
return $recv($globals.Dictionary)._new();
}
return $recv($recv($self._countries())._first())._metadata();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"metadata",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CoViD19Application);

$core.addMethod(
$core.method({
selector: "programModificationDate",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "programModificationDate\x0a\x09\x22<Date>\x0a\x09creation timestamp of the 'the.js' file\x22\x0a\x09\x22CoViD19 programModificationDate\x22\x0a\x09\x0a\x09^Date fromMilliseconds: appTimestamp",
referencedClasses: ["Date"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["fromMilliseconds:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Date)._fromMilliseconds_(appTimestamp);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"programModificationDate",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CoViD19Application);

$core.addMethod(
$core.method({
selector: "serverModificationDate",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "serverModificationDate\x0a\x09\x22<Date>\x22\x0a\x09\x0a\x09(self metadata at: #softwareTimestamp ifAbsent: [nil]) ifNotNil: [:date | \x0a\x09\x09^Date fromString: date].\x0a\x09^Date now",
referencedClasses: ["Date"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNotNil:", "at:ifAbsent:", "metadata", "fromString:", "now"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($self._metadata())._at_ifAbsent_("softwareTimestamp",(function(){
return nil;

}));
if($1 == null || $1.a$nil){
$1;
} else {
var date;
date=$1;
return $recv($globals.Date)._fromString_(date);
}
return $recv($globals.Date)._now();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"serverModificationDate",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CoViD19Application);

$core.addMethod(
$core.method({
selector: "serverName",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "serverName\x0a\x09\x22<String>\x22\x0a\x09\x0a\x09^self metadata at: #softwareName ifAbsent: ['']",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:ifAbsent:", "metadata"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._metadata())._at_ifAbsent_("softwareName",(function(){
return "";

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"serverName",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CoViD19Application);

$core.addMethod(
$core.method({
selector: "serverVersion",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "serverVersion\x0a\x09\x22<String>\x22\x0a\x09\x0a\x09^self metadata at: #softwareVersion ifAbsent: ['']",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:ifAbsent:", "metadata"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._metadata())._at_ifAbsent_("softwareVersion",(function(){
return "";

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"serverVersion",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CoViD19Application);

$core.addMethod(
$core.method({
selector: "withJson:",
protocol: "data actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aFilename"],
source: "withJson: aFilename\x0a\x09^(Platform fetch: self dataHome, aFilename) then: #json",
referencedClasses: ["Platform"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["then:", "fetch:", ",", "dataHome"]
}, function ($methodClass){ return function (aFilename){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($globals.Platform)._fetch_($recv($self._dataHome()).__comma(aFilename)))._then_("json");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"withJson:",{aFilename:aFilename})});
//>>excludeEnd("ctx");
}; }),
$globals.CoViD19Application);

$core.addMethod(
$core.method({
selector: "world",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "world\x0a\x09\x22<Country>\x0a\x09the root of the country tree\x22\x0a\x09\x0a\x09^self countries first",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["first", "countries"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._countries())._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"world",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CoViD19Application);


$core.setSlots($globals.CoViD19Application.a$cls, ["current"]);
$core.addMethod(
$core.method({
selector: "current",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "current\x0a\x09\x22singleton\x22\x0a\x09\x0a\x09^current ifNil: [current := self new]",
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
$globals.CoViD19Application.a$cls);


$core.addClass("Datapoint", $globals.Object, ["date", "confirmed", "deaths"], "Covid19Model");
$core.addMethod(
$core.method({
selector: "+",
protocol: "arithmetic",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDatapoint"],
source: "+ aDatapoint\x0a\x09\x22<Datapoint>\x22\x0a\x09\x0a\x09^self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["subclassResponsibility"]
}, function ($methodClass){ return function (aDatapoint){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._subclassResponsibility();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"+",{aDatapoint:aDatapoint})});
//>>excludeEnd("ctx");
}; }),
$globals.Datapoint);

$core.addMethod(
$core.method({
selector: "asZero",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asZero\x0a\x09\x22<Datapoint>\x22\x0a\x09\x0a\x09^self class date: self date confirmed: 0 deaths: 0",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["date:confirmed:deaths:", "class", "date"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._class())._date_confirmed_deaths_($self._date(),(0),(0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asZero",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Datapoint);

$core.addMethod(
$core.method({
selector: "aspects",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "aspects\x0a\x09\x22<Array of: Symbol>\x22\x0a\x09\x0a\x09^#(#confirmed #deaths)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return ["confirmed", "deaths"];

}; }),
$globals.Datapoint);

$core.addMethod(
$core.method({
selector: "changeFrom:",
protocol: "arithmetic",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDatapoint"],
source: "changeFrom: aDatapoint\x0a\x09\x22<Datapoint>\x0a\x09new Datapoint with the change from aDatapoint\x22\x0a\x09\x0a\x09^self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["subclassResponsibility"]
}, function ($methodClass){ return function (aDatapoint){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._subclassResponsibility();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"changeFrom:",{aDatapoint:aDatapoint})});
//>>excludeEnd("ctx");
}; }),
$globals.Datapoint);

$core.addMethod(
$core.method({
selector: "confirmed",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "confirmed\x0a\x09\x22<Integer>\x22\x0a\x0a\x09^confirmed",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.confirmed;

}; }),
$globals.Datapoint);

$core.addMethod(
$core.method({
selector: "copyWithDate:",
protocol: "copying",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDate"],
source: "copyWithDate: aDate\x0a\x09\x22<Datapoint>\x22\x0a\x09\x0a\x09^self class date: aDate confirmed: self confirmed deaths: self deaths",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["date:confirmed:deaths:", "class", "confirmed", "deaths"]
}, function ($methodClass){ return function (aDate){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._class())._date_confirmed_deaths_(aDate,$self._confirmed(),$self._deaths());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"copyWithDate:",{aDate:aDate})});
//>>excludeEnd("ctx");
}; }),
$globals.Datapoint);

$core.addMethod(
$core.method({
selector: "dataProvider",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dataProvider\x0a\x09\x22<String>\x0a\x09name of the data provider\x22\x0a\x09\x0a\x09^self subclassResponsibility",
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
}, function($ctx1) {$ctx1.fill(self,"dataProvider",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Datapoint);

$core.addMethod(
$core.method({
selector: "dataProviderAnchor",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dataProviderAnchor\x0a\x09\x22<a>\x0a\x09link to the data provider\x22\x0a\x09\x0a\x09^self subclassResponsibility",
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
}, function($ctx1) {$ctx1.fill(self,"dataProviderAnchor",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Datapoint);

$core.addMethod(
$core.method({
selector: "date",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "date\x0a\x09\x22<Date>\x22\x0a\x09\x0a\x09^date",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.date;

}; }),
$globals.Datapoint);

$core.addMethod(
$core.method({
selector: "deaths",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "deaths\x0a\x09\x22<Integer>\x22\x0a\x09\x0a\x09^deaths",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.deaths;

}; }),
$globals.Datapoint);

$core.addMethod(
$core.method({
selector: "decided",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "decided\x0a\x09\x22<Integer>\x22\x0a\x09\x0a\x09^self recovered + self deaths",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["+", "recovered", "deaths"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._recovered()).__plus($self._deaths());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"decided",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Datapoint);

$core.addMethod(
$core.method({
selector: "initializeDate:confirmed:deaths:",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDate", "aConfirmedInteger", "aDeathsInteger"],
source: "initializeDate: aDate confirmed: aConfirmedInteger deaths: aDeathsInteger\x0a\x09date := aDate.\x0a\x09confirmed := aConfirmedInteger.\x0a\x09deaths := aDeathsInteger",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aDate,aConfirmedInteger,aDeathsInteger){
var self=this,$self=this;
$self.date=aDate;
$self.confirmed=aConfirmedInteger;
$self.deaths=aDeathsInteger;
return self;

}; }),
$globals.Datapoint);

$core.addMethod(
$core.method({
selector: "maxValue",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "maxValue\x0a\x09\x22<Integer>\x22\x0a\x09\x0a\x09^self aspects inject: 0 into: [:max :aspect | max max: (self perform:  aspect)]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["inject:into:", "aspects", "max:", "perform:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._aspects())._inject_into_((0),(function(max,aspect){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(max)._max_($self._perform_(aspect));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({max:max,aspect:aspect},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"maxValue",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Datapoint);

$core.addMethod(
$core.method({
selector: "maxValueForAspects:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["someAspects"],
source: "maxValueForAspects: someAspects\x0a\x09\x22<Integer>\x22\x0a\x09\x0a\x09someAspects isEmpty ifTrue: [\x0a\x09\x09^self maxValue].\x0a\x09^someAspects inject: 0 into: [:max :aspect | max max: (self perform:  aspect)]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "isEmpty", "maxValue", "inject:into:", "max:", "perform:"]
}, function ($methodClass){ return function (someAspects){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert($recv(someAspects)._isEmpty())){
return $self._maxValue();
}
return $recv(someAspects)._inject_into_((0),(function(max,aspect){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(max)._max_($self._perform_(aspect));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({max:max,aspect:aspect},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"maxValueForAspects:",{someAspects:someAspects})});
//>>excludeEnd("ctx");
}; }),
$globals.Datapoint);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: "printing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x0a\x09aStream \x0a\x09\x09nextPutAll: self class name;\x0a\x09\x09nextPut: $(;\x0a\x09\x09nextPutAll: self date asDateString;\x0a\x09\x09nextPutAll: ' ';\x0a\x09\x09nextPutAll: self deaths printString;\x0a\x09\x09nextPutAll: '/';\x0a\x09\x09nextPutAll: self confirmed printString;\x0a\x09\x09nextPut: $)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["nextPutAll:", "name", "class", "nextPut:", "asDateString", "date", "printString", "deaths", "confirmed"]
}, function ($methodClass){ return function (aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[$recv(aStream)._nextPutAll_($recv($self._class())._name())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["nextPutAll:"]=1
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._nextPut_("(")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["nextPut:"]=1
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._nextPutAll_($recv($self._date())._asDateString())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["nextPutAll:"]=2
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._nextPutAll_(" ")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["nextPutAll:"]=3
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._nextPutAll_([$recv($self._deaths())._printString()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["printString"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["nextPutAll:"]=4
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._nextPutAll_("/")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["nextPutAll:"]=5
//>>excludeEnd("ctx");
][0];
$recv(aStream)._nextPutAll_($recv($self._confirmed())._printString());
$recv(aStream)._nextPut_(")");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream})});
//>>excludeEnd("ctx");
}; }),
$globals.Datapoint);

$core.addMethod(
$core.method({
selector: "recovered",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "recovered\x0a\x09\x22<Integer>\x22\x0a\x09\x0a\x09^0",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return (0);

}; }),
$globals.Datapoint);


$core.addMethod(
$core.method({
selector: "date:confirmed:deaths:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDate", "aConfirmedInteger", "aDeathsInteger"],
source: "date: aDate confirmed: aConfirmedInteger deaths: aDeathsInteger\x0a\x09| inst |\x0a\x09inst := self new.\x0a\x09inst initializeDate: aDate confirmed: aConfirmedInteger deaths: aDeathsInteger.\x0a\x09^inst",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "initializeDate:confirmed:deaths:"]
}, function ($methodClass){ return function (aDate,aConfirmedInteger,aDeathsInteger){
var self=this,$self=this;
var inst;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
inst=$self._new();
$recv(inst)._initializeDate_confirmed_deaths_(aDate,aConfirmedInteger,aDeathsInteger);
return inst;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"date:confirmed:deaths:",{aDate:aDate,aConfirmedInteger:aConfirmedInteger,aDeathsInteger:aDeathsInteger,inst:inst})});
//>>excludeEnd("ctx");
}; }),
$globals.Datapoint.a$cls);

$core.addMethod(
$core.method({
selector: "dateFromJson:",
protocol: "reading",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJson"],
source: "dateFromJson: aJson\x0a\x09^Date d: aJson d m: aJson m y: aJson y",
referencedClasses: ["Date"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["d:m:y:", "d", "m", "y"]
}, function ($methodClass){ return function (aJson){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Date)._d_m_y_($recv(aJson)._d(),$recv(aJson)._m(),$recv(aJson)._y());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dateFromJson:",{aJson:aJson})});
//>>excludeEnd("ctx");
}; }),
$globals.Datapoint.a$cls);

$core.addMethod(
$core.method({
selector: "fromJson:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJson"],
source: "fromJson: aJson\x0a\x09^self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["subclassResponsibility"]
}, function ($methodClass){ return function (aJson){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._subclassResponsibility();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromJson:",{aJson:aJson})});
//>>excludeEnd("ctx");
}; }),
$globals.Datapoint.a$cls);

$core.addMethod(
$core.method({
selector: "zero",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "zero\x0a\x09^self \x0a\x09\x09date: (Date d: 1 m: 1 y: 2020) \x0a\x09\x09confirmed: 0 \x0a\x09\x09deaths: 0",
referencedClasses: ["Date"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["date:confirmed:deaths:", "d:m:y:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._date_confirmed_deaths_($recv($globals.Date)._d_m_y_((1),(1),(2020)),(0),(0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"zero",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Datapoint.a$cls);


$core.addClass("ConfirmedAndDeathsDatapoint", $globals.Datapoint, [], "Covid19Model");
$core.addMethod(
$core.method({
selector: "+",
protocol: "arithmetic",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDatapoint"],
source: "+ aDatapoint\x0a\x09\x22<JHUDatapoint>\x22\x0a\x09\x0a\x09self date = aDatapoint date ifFalse: [\x0a\x09\x09self error: 'the dates are not the same'].\x0a\x09^self class \x0a\x09\x09date: self date \x0a\x09\x09confirmed: self confirmed + aDatapoint confirmed \x0a\x09\x09deaths: self deaths + aDatapoint deaths",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifFalse:", "=", "date", "error:", "date:confirmed:deaths:", "class", "+", "confirmed", "deaths"]
}, function ($methodClass){ return function (aDatapoint){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if(!$core.assert($recv([$self._date()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["date"]=1
//>>excludeEnd("ctx");
][0]).__eq([$recv(aDatapoint)._date()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["date"]=2
//>>excludeEnd("ctx");
][0]))){
$self._error_("the dates are not the same");
}
return $recv($self._class())._date_confirmed_deaths_($self._date(),[$recv([$self._confirmed()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["confirmed"]=1
//>>excludeEnd("ctx");
][0]).__plus($recv(aDatapoint)._confirmed())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["+"]=1
//>>excludeEnd("ctx");
][0],$recv([$self._deaths()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["deaths"]=1
//>>excludeEnd("ctx");
][0]).__plus($recv(aDatapoint)._deaths()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"+",{aDatapoint:aDatapoint})});
//>>excludeEnd("ctx");
}; }),
$globals.ConfirmedAndDeathsDatapoint);

$core.addMethod(
$core.method({
selector: "changeFrom:",
protocol: "arithmetic",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDatapoint"],
source: "changeFrom: aDatapoint\x0a\x09^self class \x0a\x09\x09date: self date\x0a\x09\x09confirmed: self confirmed - aDatapoint confirmed\x0a\x09\x09deaths: self deaths - aDatapoint deaths",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["date:confirmed:deaths:", "class", "date", "-", "confirmed", "deaths"]
}, function ($methodClass){ return function (aDatapoint){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._class())._date_confirmed_deaths_($self._date(),[$recv([$self._confirmed()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["confirmed"]=1
//>>excludeEnd("ctx");
][0]).__minus($recv(aDatapoint)._confirmed())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["-"]=1
//>>excludeEnd("ctx");
][0],$recv([$self._deaths()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["deaths"]=1
//>>excludeEnd("ctx");
][0]).__minus($recv(aDatapoint)._deaths()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"changeFrom:",{aDatapoint:aDatapoint})});
//>>excludeEnd("ctx");
}; }),
$globals.ConfirmedAndDeathsDatapoint);

$core.addMethod(
$core.method({
selector: "dataProvider",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dataProvider\x0a\x09^'Johns Hopkins University'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return "Johns Hopkins University";

}; }),
$globals.ConfirmedAndDeathsDatapoint);

$core.addMethod(
$core.method({
selector: "dataProviderAnchor",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dataProviderAnchor\x0a\x09^Silk A: {\x0a\x09\x09'href' -> 'https://github.com/CSSEGISandData/COVID-19'.\x0a\x09\x09'target' -> '_blank'.\x0a\x09\x09'rel' -> 'noopener'.\x0a\x09\x09self dataProvider}",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["A:", "->", "dataProvider"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Silk)._A_([["href".__minus_gt("https://github.com/CSSEGISandData/COVID-19")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=1
//>>excludeEnd("ctx");
][0],["target".__minus_gt("_blank")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=2
//>>excludeEnd("ctx");
][0],"rel".__minus_gt("noopener"),$self._dataProvider()]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dataProviderAnchor",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ConfirmedAndDeathsDatapoint);


$core.addMethod(
$core.method({
selector: "fromJson:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJson"],
source: "fromJson: aJson\x0a\x09^self \x0a\x09\x09date: (self dateFromJson: aJson date)\x0a\x09\x09confirmed: (aJson at: #c ifAbsent: [0])\x0a\x09\x09deaths: (aJson at: #d ifAbsent: [0])",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["date:confirmed:deaths:", "dateFromJson:", "date", "at:ifAbsent:"]
}, function ($methodClass){ return function (aJson){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._date_confirmed_deaths_($self._dateFromJson_($recv(aJson)._date()),[$recv(aJson)._at_ifAbsent_("c",(function(){
return (0);

}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:ifAbsent:"]=1
//>>excludeEnd("ctx");
][0],$recv(aJson)._at_ifAbsent_("d",(function(){
return (0);

})));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromJson:",{aJson:aJson})});
//>>excludeEnd("ctx");
}; }),
$globals.ConfirmedAndDeathsDatapoint.a$cls);


$core.addClass("JHUDatapoint", $globals.Datapoint, ["recovered"], "Covid19Model");
$core.addMethod(
$core.method({
selector: "+",
protocol: "arithmetic",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDatapoint"],
source: "+ aDatapoint\x0a\x09\x22<JHUDatapoint>\x22\x0a\x09\x0a\x09self date = aDatapoint date ifFalse: [\x0a\x09\x09self error: 'the dates are not the same'].\x0a\x09^self class \x0a\x09\x09date: self date \x0a\x09\x09confirmed: self confirmed + aDatapoint confirmed \x0a\x09\x09deaths: self deaths + aDatapoint deaths \x0a\x09\x09recovered: self recovered + aDatapoint recovered",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifFalse:", "=", "date", "error:", "date:confirmed:deaths:recovered:", "class", "+", "confirmed", "deaths", "recovered"]
}, function ($methodClass){ return function (aDatapoint){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if(!$core.assert($recv([$self._date()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["date"]=1
//>>excludeEnd("ctx");
][0]).__eq([$recv(aDatapoint)._date()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["date"]=2
//>>excludeEnd("ctx");
][0]))){
$self._error_("the dates are not the same");
}
return $recv($self._class())._date_confirmed_deaths_recovered_($self._date(),[$recv([$self._confirmed()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["confirmed"]=1
//>>excludeEnd("ctx");
][0]).__plus($recv(aDatapoint)._confirmed())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["+"]=1
//>>excludeEnd("ctx");
][0],[$recv([$self._deaths()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["deaths"]=1
//>>excludeEnd("ctx");
][0]).__plus($recv(aDatapoint)._deaths())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["+"]=2
//>>excludeEnd("ctx");
][0],$recv([$self._recovered()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["recovered"]=1
//>>excludeEnd("ctx");
][0]).__plus($recv(aDatapoint)._recovered()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"+",{aDatapoint:aDatapoint})});
//>>excludeEnd("ctx");
}; }),
$globals.JHUDatapoint);

$core.addMethod(
$core.method({
selector: "asZero",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asZero\x0a\x09^self class date: self date confirmed: 0 deaths: 0 recovered: 0",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["date:confirmed:deaths:recovered:", "class", "date"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._class())._date_confirmed_deaths_recovered_($self._date(),(0),(0),(0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asZero",{})});
//>>excludeEnd("ctx");
}; }),
$globals.JHUDatapoint);

$core.addMethod(
$core.method({
selector: "aspects",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "aspects\x0a\x09^super aspects, #(#recovered)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: [",", "aspects"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv([(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._aspects.call($self))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.supercall = false
//>>excludeEnd("ctx");
][0]).__comma(["recovered"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"aspects",{})});
//>>excludeEnd("ctx");
}; }),
$globals.JHUDatapoint);

$core.addMethod(
$core.method({
selector: "changeFrom:",
protocol: "arithmetic",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDatapoint"],
source: "changeFrom: aDatapoint\x0a\x09^self class \x0a\x09\x09date: self date\x0a\x09\x09confirmed: self confirmed - aDatapoint confirmed\x0a\x09\x09deaths: self deaths - aDatapoint deaths\x0a\x09\x09recovered: self recovered - aDatapoint recovered",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["date:confirmed:deaths:recovered:", "class", "date", "-", "confirmed", "deaths", "recovered"]
}, function ($methodClass){ return function (aDatapoint){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._class())._date_confirmed_deaths_recovered_($self._date(),[$recv([$self._confirmed()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["confirmed"]=1
//>>excludeEnd("ctx");
][0]).__minus($recv(aDatapoint)._confirmed())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["-"]=1
//>>excludeEnd("ctx");
][0],[$recv([$self._deaths()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["deaths"]=1
//>>excludeEnd("ctx");
][0]).__minus($recv(aDatapoint)._deaths())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["-"]=2
//>>excludeEnd("ctx");
][0],$recv([$self._recovered()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["recovered"]=1
//>>excludeEnd("ctx");
][0]).__minus($recv(aDatapoint)._recovered()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"changeFrom:",{aDatapoint:aDatapoint})});
//>>excludeEnd("ctx");
}; }),
$globals.JHUDatapoint);

$core.addMethod(
$core.method({
selector: "copyWithDate:",
protocol: "copying",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDate"],
source: "copyWithDate: aDate\x0a\x09^self class \x0a\x09\x09date: aDate \x0a\x09\x09confirmed: self confirmed \x0a\x09\x09deaths: self deaths \x0a\x09\x09recovered: self recovered",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["date:confirmed:deaths:recovered:", "class", "confirmed", "deaths", "recovered"]
}, function ($methodClass){ return function (aDate){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._class())._date_confirmed_deaths_recovered_(aDate,$self._confirmed(),$self._deaths(),$self._recovered());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"copyWithDate:",{aDate:aDate})});
//>>excludeEnd("ctx");
}; }),
$globals.JHUDatapoint);

$core.addMethod(
$core.method({
selector: "dataProvider",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dataProvider\x0a\x09^'Johns Hopkins University'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return "Johns Hopkins University";

}; }),
$globals.JHUDatapoint);

$core.addMethod(
$core.method({
selector: "dataProviderAnchor",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dataProviderAnchor\x0a\x09^Silk A: {\x0a\x09\x09'href' -> 'https://github.com/CSSEGISandData/COVID-19'.\x0a\x09\x09'target' -> '_blank'.\x0a\x09\x09'rel' -> 'noopener'.\x0a\x09\x09self dataProvider}",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["A:", "->", "dataProvider"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Silk)._A_([["href".__minus_gt("https://github.com/CSSEGISandData/COVID-19")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=1
//>>excludeEnd("ctx");
][0],["target".__minus_gt("_blank")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=2
//>>excludeEnd("ctx");
][0],"rel".__minus_gt("noopener"),$self._dataProvider()]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dataProviderAnchor",{})});
//>>excludeEnd("ctx");
}; }),
$globals.JHUDatapoint);

$core.addMethod(
$core.method({
selector: "initializeDate:confirmed:deaths:recovered:",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDate", "aConfirmedInteger", "aDeathsInteger", "aRecoveredInteger"],
source: "initializeDate: aDate confirmed: aConfirmedInteger deaths: aDeathsInteger recovered: aRecoveredInteger\x0a\x09self initializeDate: aDate confirmed: aConfirmedInteger deaths: aDeathsInteger.\x0a\x09recovered := aRecoveredInteger",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["initializeDate:confirmed:deaths:"]
}, function ($methodClass){ return function (aDate,aConfirmedInteger,aDeathsInteger,aRecoveredInteger){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._initializeDate_confirmed_deaths_(aDate,aConfirmedInteger,aDeathsInteger);
$self.recovered=aRecoveredInteger;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeDate:confirmed:deaths:recovered:",{aDate:aDate,aConfirmedInteger:aConfirmedInteger,aDeathsInteger:aDeathsInteger,aRecoveredInteger:aRecoveredInteger})});
//>>excludeEnd("ctx");
}; }),
$globals.JHUDatapoint);

$core.addMethod(
$core.method({
selector: "recovered",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "recovered\x0a\x09\x22<Integer>\x22\x0a\x09\x0a\x09^recovered ifNil: [0]",
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
$1=$self.recovered;
if($1 == null || $1.a$nil){
return (0);
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"recovered",{})});
//>>excludeEnd("ctx");
}; }),
$globals.JHUDatapoint);


$core.addMethod(
$core.method({
selector: "date:confirmed:deaths:recovered:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDate", "aConfirmedInteger", "aDeathsInteger", "aRecoveredInteger"],
source: "date: aDate confirmed: aConfirmedInteger deaths: aDeathsInteger recovered: aRecoveredInteger\x0a\x09| inst |\x0a\x09inst := self new.\x0a\x09inst initializeDate: aDate confirmed: aConfirmedInteger deaths: aDeathsInteger recovered: aRecoveredInteger.\x0a\x09^inst",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "initializeDate:confirmed:deaths:recovered:"]
}, function ($methodClass){ return function (aDate,aConfirmedInteger,aDeathsInteger,aRecoveredInteger){
var self=this,$self=this;
var inst;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
inst=$self._new();
$recv(inst)._initializeDate_confirmed_deaths_recovered_(aDate,aConfirmedInteger,aDeathsInteger,aRecoveredInteger);
return inst;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"date:confirmed:deaths:recovered:",{aDate:aDate,aConfirmedInteger:aConfirmedInteger,aDeathsInteger:aDeathsInteger,aRecoveredInteger:aRecoveredInteger,inst:inst})});
//>>excludeEnd("ctx");
}; }),
$globals.JHUDatapoint.a$cls);

$core.addMethod(
$core.method({
selector: "fromJson:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJson"],
source: "fromJson: aJson\x0a\x09^self \x0a\x09\x09date: (self dateFromJson: aJson date)\x0a\x09\x09confirmed: (aJson at: #c ifAbsent: [0])\x0a\x09\x09deaths: (aJson at: #d ifAbsent: [0])\x0a\x09\x09recovered: (aJson at: #r ifAbsent: [0])",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["date:confirmed:deaths:recovered:", "dateFromJson:", "date", "at:ifAbsent:"]
}, function ($methodClass){ return function (aJson){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._date_confirmed_deaths_recovered_($self._dateFromJson_($recv(aJson)._date()),[$recv(aJson)._at_ifAbsent_("c",(function(){
return (0);

}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:ifAbsent:"]=1
//>>excludeEnd("ctx");
][0],[$recv(aJson)._at_ifAbsent_("d",(function(){
return (0);

}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:ifAbsent:"]=2
//>>excludeEnd("ctx");
][0],$recv(aJson)._at_ifAbsent_("r",(function(){
return (0);

})));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromJson:",{aJson:aJson})});
//>>excludeEnd("ctx");
}; }),
$globals.JHUDatapoint.a$cls);

$core.addMethod(
$core.method({
selector: "zero",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "zero\x0a\x09^self \x0a\x09\x09date: (Date d: 1 m: 1 y: 2020) \x0a\x09\x09confirmed: 0 \x0a\x09\x09deaths: 0 \x0a\x09\x09recovered: 0",
referencedClasses: ["Date"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["date:confirmed:deaths:recovered:", "d:m:y:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._date_confirmed_deaths_recovered_($recv($globals.Date)._d_m_y_((1),(1),(2020)),(0),(0),(0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"zero",{})});
//>>excludeEnd("ctx");
}; }),
$globals.JHUDatapoint.a$cls);


$core.addClass("RKIDatapoint", $globals.Datapoint, ["byAge"], "Covid19Model");
$core.addMethod(
$core.method({
selector: "+",
protocol: "arithmetic",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDatapoint"],
source: "+ aDatapoint\x0a\x09\x22<RKIDatapoint>\x22\x0a\x09\x0a\x09| newByAge |\x0a\x09self date = aDatapoint date ifFalse: [\x0a\x09\x09self error: 'the dates are not the same'].\x0a\x09newByAge := self byAge copy.\x0a\x09aDatapoint byAge keysAndValuesDo: [:age :sexDict |\x0a\x09\x09| newSexDict |\x0a\x09\x09newSexDict := (newByAge at: age ifAbsent: [Dictionary new]) copy.\x0a\x09\x09sexDict keysAndValuesDo: [:sex :count |\x0a\x09\x09\x09newSexDict at: sex put: (newSexDict at: sex ifAbsent: [Casecount zero]) + count].\x0a\x09\x09newByAge at: age put: newSexDict].\x0a\x09^self class date: self date byAge: newByAge",
referencedClasses: ["Dictionary", "Casecount"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifFalse:", "=", "date", "error:", "copy", "byAge", "keysAndValuesDo:", "at:ifAbsent:", "new", "at:put:", "+", "zero", "date:byAge:", "class"]
}, function ($methodClass){ return function (aDatapoint){
var self=this,$self=this;
var newByAge;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if(!$core.assert($recv([$self._date()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["date"]=1
//>>excludeEnd("ctx");
][0]).__eq([$recv(aDatapoint)._date()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["date"]=2
//>>excludeEnd("ctx");
][0]))){
$self._error_("the dates are not the same");
}
newByAge=[$recv([$self._byAge()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["byAge"]=1
//>>excludeEnd("ctx");
][0])._copy()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["copy"]=1
//>>excludeEnd("ctx");
][0];
[$recv($recv(aDatapoint)._byAge())._keysAndValuesDo_((function(age,sexDict){
var newSexDict;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
newSexDict=$recv([$recv(newByAge)._at_ifAbsent_(age,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($globals.Dictionary)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["at:ifAbsent:"]=1
//>>excludeEnd("ctx");
][0])._copy();
$recv(sexDict)._keysAndValuesDo_((function(sex,count){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return [$recv(newSexDict)._at_put_(sex,$recv($recv(newSexDict)._at_ifAbsent_(sex,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv($globals.Casecount)._zero();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,5)});
//>>excludeEnd("ctx");
}))).__plus(count))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["at:put:"]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({sex:sex,count:count},$ctx2,4)});
//>>excludeEnd("ctx");
}));
return $recv(newByAge)._at_put_(age,newSexDict);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({age:age,sexDict:sexDict,newSexDict:newSexDict},$ctx1,2)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["keysAndValuesDo:"]=1
//>>excludeEnd("ctx");
][0];
return $recv($self._class())._date_byAge_($self._date(),newByAge);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"+",{aDatapoint:aDatapoint,newByAge:newByAge})});
//>>excludeEnd("ctx");
}; }),
$globals.RKIDatapoint);

$core.addMethod(
$core.method({
selector: "asZero",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asZero\x0a\x09^self class date: self date byAge: Dictionary new",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["date:byAge:", "class", "date", "new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._class())._date_byAge_($self._date(),$recv($globals.Dictionary)._new());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asZero",{})});
//>>excludeEnd("ctx");
}; }),
$globals.RKIDatapoint);

$core.addMethod(
$core.method({
selector: "byAge",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "byAge\x0a\x09\x22<Dictionary key: String value: Integer>\x22\x0a\x09\x0a\x09^byAge",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.byAge;

}; }),
$globals.RKIDatapoint);

$core.addMethod(
$core.method({
selector: "casecount",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "casecount\x0a\x09\x22<Casecount>\x22\x0a\x09\x0a\x09^self byAge values inject: Casecount zero into: [:sum :sexDict |\x0a\x09\x09sexDict values  inject: sum into: [:count :casecount |\x0a\x09\x09\x09count + casecount]]",
referencedClasses: ["Casecount"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["inject:into:", "values", "byAge", "zero", "+"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return [$recv([$recv($self._byAge())._values()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["values"]=1
//>>excludeEnd("ctx");
][0])._inject_into_($recv($globals.Casecount)._zero(),(function(sum,sexDict){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(sexDict)._values())._inject_into_(sum,(function(count,casecount){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(count).__plus(casecount);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({count:count,casecount:casecount},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({sum:sum,sexDict:sexDict},$ctx1,1)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["inject:into:"]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"casecount",{})});
//>>excludeEnd("ctx");
}; }),
$globals.RKIDatapoint);

$core.addMethod(
$core.method({
selector: "changeFrom:",
protocol: "arithmetic",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDatapoint"],
source: "changeFrom: aDatapoint\x0a\x09| newByAge |\x0a\x09newByAge := self byAge copy.\x0a\x09aDatapoint byAge keysAndValuesDo: [:age :sexDict |\x0a\x09\x09| newSexDict |\x0a\x09\x09newSexDict := (newByAge at: age ifAbsent: [Dictionary new]) copy.\x0a\x09\x09sexDict keysAndValuesDo: [:sex :count |\x0a\x09\x09\x09newSexDict at: sex put: (newSexDict at: sex ifAbsent: [Casecount zero]) - count].\x0a\x09\x09newByAge at: age put: newSexDict].\x0a\x09^self class date: self date byAge: newByAge",
referencedClasses: ["Dictionary", "Casecount"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["copy", "byAge", "keysAndValuesDo:", "at:ifAbsent:", "new", "at:put:", "-", "zero", "date:byAge:", "class", "date"]
}, function ($methodClass){ return function (aDatapoint){
var self=this,$self=this;
var newByAge;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
newByAge=[$recv([$self._byAge()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["byAge"]=1
//>>excludeEnd("ctx");
][0])._copy()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["copy"]=1
//>>excludeEnd("ctx");
][0];
[$recv($recv(aDatapoint)._byAge())._keysAndValuesDo_((function(age,sexDict){
var newSexDict;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
newSexDict=$recv([$recv(newByAge)._at_ifAbsent_(age,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($globals.Dictionary)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["at:ifAbsent:"]=1
//>>excludeEnd("ctx");
][0])._copy();
$recv(sexDict)._keysAndValuesDo_((function(sex,count){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return [$recv(newSexDict)._at_put_(sex,$recv($recv(newSexDict)._at_ifAbsent_(sex,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv($globals.Casecount)._zero();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,4)});
//>>excludeEnd("ctx");
}))).__minus(count))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["at:put:"]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({sex:sex,count:count},$ctx2,3)});
//>>excludeEnd("ctx");
}));
return $recv(newByAge)._at_put_(age,newSexDict);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({age:age,sexDict:sexDict,newSexDict:newSexDict},$ctx1,1)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["keysAndValuesDo:"]=1
//>>excludeEnd("ctx");
][0];
return $recv($self._class())._date_byAge_($self._date(),newByAge);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"changeFrom:",{aDatapoint:aDatapoint,newByAge:newByAge})});
//>>excludeEnd("ctx");
}; }),
$globals.RKIDatapoint);

$core.addMethod(
$core.method({
selector: "confirmed",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "confirmed\x0a\x09^confirmed ifNil: [confirmed := self casecount confirmed]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "confirmed", "casecount"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self.confirmed;
if($1 == null || $1.a$nil){
$self.confirmed=$recv($self._casecount())._confirmed();
return $self.confirmed;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"confirmed",{})});
//>>excludeEnd("ctx");
}; }),
$globals.RKIDatapoint);

$core.addMethod(
$core.method({
selector: "copyWithDate:",
protocol: "copying",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDate"],
source: "copyWithDate: aDate\x0a\x09^self class date: aDate byAge: self byAge ",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["date:byAge:", "class", "byAge"]
}, function ($methodClass){ return function (aDate){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._class())._date_byAge_(aDate,$self._byAge());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"copyWithDate:",{aDate:aDate})});
//>>excludeEnd("ctx");
}; }),
$globals.RKIDatapoint);

$core.addMethod(
$core.method({
selector: "dataProvider",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dataProvider\x0a\x09^'Robert Koch Institut'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return "Robert Koch Institut";

}; }),
$globals.RKIDatapoint);

$core.addMethod(
$core.method({
selector: "dataProviderAnchor",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dataProviderAnchor\x0a\x09^Silk A: {\x0a\x09\x09'href' -> 'https://npgeo-corona-npgeo-de.hub.arcgis.com/datasets/dd4580c810204019a7b8eb3e0b329dd6_0/data'.\x0a\x09\x09'target' -> '_blank'.\x0a\x09\x09'rel' -> 'noopener'.\x0a\x09\x09self dataProvider}",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["A:", "->", "dataProvider"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Silk)._A_([["href".__minus_gt("https://npgeo-corona-npgeo-de.hub.arcgis.com/datasets/dd4580c810204019a7b8eb3e0b329dd6_0/data")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=1
//>>excludeEnd("ctx");
][0],["target".__minus_gt("_blank")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=2
//>>excludeEnd("ctx");
][0],"rel".__minus_gt("noopener"),$self._dataProvider()]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dataProviderAnchor",{})});
//>>excludeEnd("ctx");
}; }),
$globals.RKIDatapoint);

$core.addMethod(
$core.method({
selector: "deaths",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "deaths\x0a\x09^deaths ifNil: [deaths := self casecount deaths]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "deaths", "casecount"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self.deaths;
if($1 == null || $1.a$nil){
$self.deaths=$recv($self._casecount())._deaths();
return $self.deaths;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"deaths",{})});
//>>excludeEnd("ctx");
}; }),
$globals.RKIDatapoint);

$core.addMethod(
$core.method({
selector: "female",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "female\x0a\x09\x22<Casecount>\x22\x0a\x09\x0a\x09^self byAge values inject: 0 into: [:sum :sexDict | sum + (sexDict at: 'W')]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["inject:into:", "values", "byAge", "+", "at:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($self._byAge())._values())._inject_into_((0),(function(sum,sexDict){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(sum).__plus($recv(sexDict)._at_("W"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({sum:sum,sexDict:sexDict},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"female",{})});
//>>excludeEnd("ctx");
}; }),
$globals.RKIDatapoint);

$core.addMethod(
$core.method({
selector: "initializeDate:byAge:",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDate", "aByAgeDictionary"],
source: "initializeDate: aDate byAge: aByAgeDictionary\x0a\x09date := aDate.\x0a\x09byAge := aByAgeDictionary",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aDate,aByAgeDictionary){
var self=this,$self=this;
$self.date=aDate;
$self.byAge=aByAgeDictionary;
return self;

}; }),
$globals.RKIDatapoint);

$core.addMethod(
$core.method({
selector: "male",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "male\x0a\x09\x22<Casecount>\x22\x0a\x09\x0a\x09^self byAge values inject: 0 into: [:sum :sexDict | sum + (sexDict at: 'M')]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["inject:into:", "values", "byAge", "+", "at:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($self._byAge())._values())._inject_into_((0),(function(sum,sexDict){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(sum).__plus($recv(sexDict)._at_("M"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({sum:sum,sexDict:sexDict},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"male",{})});
//>>excludeEnd("ctx");
}; }),
$globals.RKIDatapoint);


$core.addMethod(
$core.method({
selector: "date:byAge:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDate", "aByAgeDictionary"],
source: "date: aDate byAge: aByAgeDictionary\x0a\x09| inst |\x0a\x09inst := self new.\x0a\x09inst initializeDate: aDate byAge: aByAgeDictionary.\x0a\x09^inst",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "initializeDate:byAge:"]
}, function ($methodClass){ return function (aDate,aByAgeDictionary){
var self=this,$self=this;
var inst;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
inst=$self._new();
$recv(inst)._initializeDate_byAge_(aDate,aByAgeDictionary);
return inst;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"date:byAge:",{aDate:aDate,aByAgeDictionary:aByAgeDictionary,inst:inst})});
//>>excludeEnd("ctx");
}; }),
$globals.RKIDatapoint.a$cls);

$core.addMethod(
$core.method({
selector: "fromJson:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJson"],
source: "fromJson: aJson\x0a\x09| newByAge |\x0a\x09newByAge := Dictionary new.\x0a\x09aJson byAge keysAndValuesDo: [:age :sexDict |\x0a\x09\x09| dict |\x0a\x09\x09dict := Dictionary new.\x0a\x09\x09sexDict keysAndValuesDo: [:sex :value |\x0a\x09\x09\x09dict at: sex put: (Casecount fromJson: value)].\x0a\x09\x09newByAge at: age put: dict].\x0a\x09^self date: (self dateFromJson: aJson date) byAge: newByAge",
referencedClasses: ["Dictionary", "Casecount"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "keysAndValuesDo:", "byAge", "at:put:", "fromJson:", "date:byAge:", "dateFromJson:", "date"]
}, function ($methodClass){ return function (aJson){
var self=this,$self=this;
var newByAge;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
newByAge=[$recv($globals.Dictionary)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=1
//>>excludeEnd("ctx");
][0];
[$recv($recv(aJson)._byAge())._keysAndValuesDo_((function(age,sexDict){
var dict;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
dict=$recv($globals.Dictionary)._new();
$recv(sexDict)._keysAndValuesDo_((function(sex,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return [$recv(dict)._at_put_(sex,$recv($globals.Casecount)._fromJson_(value))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["at:put:"]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({sex:sex,value:value},$ctx2,2)});
//>>excludeEnd("ctx");
}));
return $recv(newByAge)._at_put_(age,dict);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({age:age,sexDict:sexDict,dict:dict},$ctx1,1)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["keysAndValuesDo:"]=1
//>>excludeEnd("ctx");
][0];
return $self._date_byAge_($self._dateFromJson_($recv(aJson)._date()),newByAge);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromJson:",{aJson:aJson,newByAge:newByAge})});
//>>excludeEnd("ctx");
}; }),
$globals.RKIDatapoint.a$cls);

$core.addMethod(
$core.method({
selector: "zero",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "zero\x0a\x09^self \x0a\x09\x09date: (Date d: 1 m: 1 y: 2020) \x0a\x09\x09byAge: Dictionary new",
referencedClasses: ["Date", "Dictionary"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["date:byAge:", "d:m:y:", "new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._date_byAge_($recv($globals.Date)._d_m_y_((1),(1),(2020)),$recv($globals.Dictionary)._new());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"zero",{})});
//>>excludeEnd("ctx");
}; }),
$globals.RKIDatapoint.a$cls);


$core.addClass("Dataseries", $globals.Object, ["series"], "Covid19Model");
$core.addMethod(
$core.method({
selector: "+",
protocol: "arithmetic",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDataseries"],
source: "+ aDataseries\x0a\x09\x22<Dataseries>\x22\x0a\x0a\x09| wst lastSelf lastArg |\x0a\x09wst := OrderedCollection new writeStream.\x0a\x09lastSelf := nil.\x0a\x09lastArg := nil.\x0a\x09self\x0a\x09\x09with: aDataseries\x0a\x09\x09onlyInSelf: [:datapoint | \x0a\x09\x09\x09| lastOther |\x0a\x09\x09\x09lastOther := lastArg ifNil: [datapoint asZero].\x0a\x09\x09\x09wst nextPut: datapoint + (lastOther copyWithDate: datapoint date). \x0a\x09\x09\x09lastSelf := datapoint]\x0a\x09\x09onlyInArg: [:datapoint | \x0a\x09\x09\x09| lastOther |\x0a\x09\x09\x09lastOther := lastSelf ifNil: [datapoint asZero].\x0a\x09\x09\x09wst nextPut: datapoint + (lastOther copyWithDate: datapoint date). \x0a\x09\x09\x09lastArg := datapoint]\x0a\x09\x09inBoth: [:datapoint1 :datapoint2 | \x0a\x09\x09\x09wst nextPut: datapoint1 + datapoint2.\x0a\x09\x09\x09lastSelf := datapoint1.\x0a\x09\x09\x09lastArg := datapoint2].\x0a\x09^self class series: wst contents",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["writeStream", "new", "with:onlyInSelf:onlyInArg:inBoth:", "ifNil:", "asZero", "nextPut:", "+", "copyWithDate:", "date", "series:", "class", "contents"]
}, function ($methodClass){ return function (aDataseries){
var self=this,$self=this;
var wst,lastSelf,lastArg;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
wst=$recv($recv($globals.OrderedCollection)._new())._writeStream();
lastSelf=nil;
lastArg=nil;
$self._with_onlyInSelf_onlyInArg_inBoth_(aDataseries,(function(datapoint){
var lastOther;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=lastArg;
if($1 == null || $1.a$nil){
lastOther=[$recv(datapoint)._asZero()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["asZero"]=1
//>>excludeEnd("ctx");
][0];
} else {
lastOther=$1;
}
[$recv(wst)._nextPut_([$recv(datapoint).__plus([$recv(lastOther)._copyWithDate_([$recv(datapoint)._date()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["date"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["copyWithDate:"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["+"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["nextPut:"]=1
//>>excludeEnd("ctx");
][0];
lastSelf=datapoint;
return lastSelf;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({datapoint:datapoint,lastOther:lastOther},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(datapoint){
var lastOther;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=lastSelf;
if($2 == null || $2.a$nil){
lastOther=$recv(datapoint)._asZero();
} else {
lastOther=$2;
}
[$recv(wst)._nextPut_([$recv(datapoint).__plus($recv(lastOther)._copyWithDate_($recv(datapoint)._date()))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["+"]=2
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["nextPut:"]=2
//>>excludeEnd("ctx");
][0];
lastArg=datapoint;
return lastArg;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({datapoint:datapoint,lastOther:lastOther},$ctx1,3)});
//>>excludeEnd("ctx");
}),(function(datapoint1,datapoint2){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(wst)._nextPut_($recv(datapoint1).__plus(datapoint2));
lastSelf=datapoint1;
lastArg=datapoint2;
return lastArg;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({datapoint1:datapoint1,datapoint2:datapoint2},$ctx1,5)});
//>>excludeEnd("ctx");
}));
return $recv($self._class())._series_($recv(wst)._contents());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"+",{aDataseries:aDataseries,wst:wst,lastSelf:lastSelf,lastArg:lastArg})});
//>>excludeEnd("ctx");
}; }),
$globals.Dataseries);

$core.addMethod(
$core.method({
selector: "caseSeries",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "caseSeries\x0a\x09\x22<Dataseries>\x22\x0a\x09\x0a\x09^self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return self;

}; }),
$globals.Dataseries);

$core.addMethod(
$core.method({
selector: "changeSeries",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "changeSeries\x0a\x09\x22<Dataseries>\x22\x0a\x09\x0a\x09| wst rst last |\x0a\x09wst := OrderedCollection new writeStream.\x0a\x09rst := self series readStream.\x0a\x09last := nil.\x0a\x09[rst atEnd] whileFalse: [\x0a\x09\x09| datapoint | \x0a\x09\x09datapoint := rst next.\x0a\x09\x09wst nextPut: (last \x0a\x09\x09\x09ifNil: [datapoint]\x0a\x09\x09\x09ifNotNil: [datapoint changeFrom: last]).\x0a\x09\x09last := datapoint].\x0a\x09^self class series: wst contents",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["writeStream", "new", "readStream", "series", "whileFalse:", "atEnd", "next", "nextPut:", "ifNil:ifNotNil:", "changeFrom:", "series:", "class", "contents"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var wst,rst,last;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
wst=$recv($recv($globals.OrderedCollection)._new())._writeStream();
rst=$recv($self._series())._readStream();
last=nil;
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(rst)._atEnd();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._whileFalse_((function(){
var datapoint;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
datapoint=$recv(rst)._next();
$1=wst;
$2=last;
if($2 == null || $2.a$nil){
$3=datapoint;
} else {
$3=$recv(datapoint)._changeFrom_(last);
}
$recv($1)._nextPut_($3);
last=datapoint;
return last;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({datapoint:datapoint},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return $recv($self._class())._series_($recv(wst)._contents());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"changeSeries",{wst:wst,rst:rst,last:last})});
//>>excludeEnd("ctx");
}; }),
$globals.Dataseries);

$core.addMethod(
$core.method({
selector: "dataProvider",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dataProvider\x0a\x09^self series first dataProvider",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["dataProvider", "first", "series"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($self._series())._first())._dataProvider();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dataProvider",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Dataseries);

$core.addMethod(
$core.method({
selector: "dataProviderAnchor",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dataProviderAnchor\x0a\x09^self series first dataProviderAnchor",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["dataProviderAnchor", "first", "series"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($self._series())._first())._dataProviderAnchor();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dataProviderAnchor",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Dataseries);

$core.addMethod(
$core.method({
selector: "firstDate",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "firstDate\x0a\x09\x22<Date>\x22\x0a\x09\x0a\x09^self series first date",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["date", "first", "series"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($self._series())._first())._date();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"firstDate",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Dataseries);

$core.addMethod(
$core.method({
selector: "initializeSeries:",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["someDatapoints"],
source: "initializeSeries: someDatapoints\x0a\x09series := someDatapoints",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (someDatapoints){
var self=this,$self=this;
$self.series=someDatapoints;
return self;

}; }),
$globals.Dataseries);

$core.addMethod(
$core.method({
selector: "last",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "last\x0a\x09\x22<Datapoint>\x22\x0a\x09\x0a\x09^self series last",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["last", "series"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._series())._last();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"last",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Dataseries);

$core.addMethod(
$core.method({
selector: "lastConfirmed",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "lastConfirmed\x0a\x09\x22<Integer>\x22\x0a\x09\x0a\x09^self series last confirmed",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["confirmed", "last", "series"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($self._series())._last())._confirmed();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lastConfirmed",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Dataseries);

$core.addMethod(
$core.method({
selector: "lastDate",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "lastDate\x0a\x09\x22<Date>\x22\x0a\x09\x0a\x09^self series last date",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["date", "last", "series"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($self._series())._last())._date();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lastDate",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Dataseries);

$core.addMethod(
$core.method({
selector: "lastDateOfMonths",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "lastDateOfMonths\x0a\x09\x22<Array of: Date>\x22\x0a\x09\x0a\x09| dates |\x0a\x09dates := OrderedCollection new.\x0a\x09(self series collect: #date) inject: nil into: [:last :date |\x0a\x09\x09(last notNil and: [\x0a\x09\x09last month ~= date month]) ifTrue: [\x0a\x09\x09\x09dates add: last].\x0a\x09\x09date].\x0a\x09^dates",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "inject:into:", "collect:", "series", "ifTrue:", "and:", "notNil", "~=", "month", "add:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var dates;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
dates=$recv($globals.OrderedCollection)._new();
$recv($recv($self._series())._collect_("date"))._inject_into_(nil,(function(last,date){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if($core.assert($recv($recv(last)._notNil())._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv([$recv(last)._month()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["month"]=1
//>>excludeEnd("ctx");
][0]).__tild_eq($recv(date)._month());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
})))){
$recv(dates)._add_(last);
}
return date;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({last:last,date:date},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return dates;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lastDateOfMonths",{dates:dates})});
//>>excludeEnd("ctx");
}; }),
$globals.Dataseries);

$core.addMethod(
$core.method({
selector: "lastDateOfWeeks",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "lastDateOfWeeks\x0a\x09\x22<Array of: Date>\x22\x0a\x09\x0a\x09^(self series collect: #date) select: [:date | date dayOfWeek = 7]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["select:", "collect:", "series", "=", "dayOfWeek"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($self._series())._collect_("date"))._select_((function(date){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(date)._dayOfWeek()).__eq((7));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({date:date},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lastDateOfWeeks",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Dataseries);

$core.addMethod(
$core.method({
selector: "lastDeaths",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "lastDeaths\x0a\x09\x22<Integer>\x22\x0a\x09\x0a\x09^self series last deaths",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["deaths", "last", "series"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($self._series())._last())._deaths();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lastDeaths",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Dataseries);

$core.addMethod(
$core.method({
selector: "lastRecovered",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "lastRecovered\x0a\x09\x22<Integer>\x22\x0a\x09\x0a\x09^self series last recovered",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["recovered", "last", "series"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($self._series())._last())._recovered();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lastRecovered",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Dataseries);

$core.addMethod(
$core.method({
selector: "series",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "series\x0a\x09\x22<Array of: Datapoints>\x22\x0a\x09\x0a\x09^series",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.series;

}; }),
$globals.Dataseries);

$core.addMethod(
$core.method({
selector: "with:onlyInSelf:onlyInArg:inBoth:",
protocol: "arithmetic",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSeries", "onlyInSelfBlock", "onlyInArgBlock", "inBothBlock"],
source: "with: aSeries onlyInSelf: onlyInSelfBlock onlyInArg: onlyInArgBlock inBoth: inBothBlock\x0a\x09\x22iterates throu both collections of datapoints and processes them in date order\x22\x0a\x09\x0a\x09| rstSelf rstArg |\x0a\x09rstSelf := self series readStream.\x0a\x09rstArg := aSeries series readStream.\x0a\x09[\x0a\x09rstSelf atEnd and: [\x0a\x09rstArg atEnd]] whileFalse: [\x0a\x09\x09\x09rstSelf atEnd\x0a\x09\x09\x09\x09ifTrue: [onlyInArgBlock value: rstArg next]\x0a\x09\x09\x09\x09ifFalse: [\x0a\x09\x09\x09\x09rstArg atEnd\x0a\x09\x09\x09\x09\x09ifTrue: [onlyInSelfBlock value: rstSelf next]\x0a\x09\x09\x09\x09\x09ifFalse: [\x0a\x09\x09\x09\x09\x09| selfDate argDate |\x0a\x09\x09\x09\x09\x09selfDate := rstSelf peek date.\x0a\x09\x09\x09\x09\x09argDate := rstArg peek date.\x0a\x09\x09\x09\x09\x09selfDate = argDate\x0a\x09\x09\x09\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09\x09\x09inBothBlock value: rstSelf next value: rstArg next]\x0a\x09\x09\x09\x09\x09\x09ifFalse: [\x0a\x09\x09\x09\x09\x09\x09selfDate < argDate\x0a\x09\x09\x09\x09\x09\x09\x09ifTrue: [onlyInSelfBlock value: rstSelf next]\x0a\x09\x09\x09\x09\x09\x09\x09ifFalse: [onlyInArgBlock value: rstArg next]]]]]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["readStream", "series", "whileFalse:", "and:", "atEnd", "ifTrue:ifFalse:", "value:", "next", "date", "peek", "=", "value:value:", "<"]
}, function ($methodClass){ return function (aSeries,onlyInSelfBlock,onlyInArgBlock,inBothBlock){
var self=this,$self=this;
var rstSelf,rstArg;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
rstSelf=[$recv([$self._series()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["series"]=1
//>>excludeEnd("ctx");
][0])._readStream()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["readStream"]=1
//>>excludeEnd("ctx");
][0];
rstArg=$recv($recv(aSeries)._series())._readStream();
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv([$recv(rstSelf)._atEnd()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["atEnd"]=1
//>>excludeEnd("ctx");
][0])._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return [$recv(rstArg)._atEnd()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["atEnd"]=2
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._whileFalse_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if($core.assert([$recv(rstSelf)._atEnd()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["atEnd"]=3
//>>excludeEnd("ctx");
][0])){
return [$recv(onlyInArgBlock)._value_([$recv(rstArg)._next()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["next"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["value:"]=1
//>>excludeEnd("ctx");
][0];
} else {
if($core.assert($recv(rstArg)._atEnd())){
return [$recv(onlyInSelfBlock)._value_([$recv(rstSelf)._next()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["next"]=2
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["value:"]=2
//>>excludeEnd("ctx");
][0];
} else {
var selfDate,argDate;
selfDate=[$recv([$recv(rstSelf)._peek()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["peek"]=1
//>>excludeEnd("ctx");
][0])._date()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["date"]=1
//>>excludeEnd("ctx");
][0];
argDate=$recv($recv(rstArg)._peek())._date();
if($core.assert($recv(selfDate).__eq(argDate))){
return $recv(inBothBlock)._value_value_([$recv(rstSelf)._next()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["next"]=3
//>>excludeEnd("ctx");
][0],[$recv(rstArg)._next()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["next"]=4
//>>excludeEnd("ctx");
][0]);
} else {
if($core.assert($recv(selfDate).__lt(argDate))){
return [$recv(onlyInSelfBlock)._value_([$recv(rstSelf)._next()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["next"]=5
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["value:"]=3
//>>excludeEnd("ctx");
][0];
} else {
return $recv(onlyInArgBlock)._value_($recv(rstArg)._next());
}
}
}
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"with:onlyInSelf:onlyInArg:inBoth:",{aSeries:aSeries,onlyInSelfBlock:onlyInSelfBlock,onlyInArgBlock:onlyInArgBlock,inBothBlock:inBothBlock,rstSelf:rstSelf,rstArg:rstArg})});
//>>excludeEnd("ctx");
}; }),
$globals.Dataseries);


$core.addMethod(
$core.method({
selector: "series:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["someDatapoints"],
source: "series: someDatapoints\x0a\x09| inst |\x0a\x09inst := self new.\x0a\x09inst initializeSeries: someDatapoints.\x0a\x09^inst",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "initializeSeries:"]
}, function ($methodClass){ return function (someDatapoints){
var self=this,$self=this;
var inst;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
inst=$self._new();
$recv(inst)._initializeSeries_(someDatapoints);
return inst;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"series:",{someDatapoints:someDatapoints,inst:inst})});
//>>excludeEnd("ctx");
}; }),
$globals.Dataseries.a$cls);


$core.addClass("Dataset", $globals.Object, ["area", "provider", "metadata", "dataseries"], "Covid19Model");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Dataset.comment="A dataset is a time series for an area (country or such) from a provider at a certain time\x0a\x0aAn area can have multiple datasets from differt providers.";
//>>excludeEnd("ide");

$core.addMethod(
$core.method({
selector: "area:provider:metadata:dataseries:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anArea", "aProvider", "aDictionary", "aDataseries"],
source: "area: anArea provider: aProvider metadata: aDictionary dataseries: aDataseries",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (anArea,aProvider,aDictionary,aDataseries){
var self=this,$self=this;
return self;

}; }),
$globals.Dataset.a$cls);


$core.addClass("GeographicArea", $globals.Object, ["name", "series", "properties"], "Covid19Model");
$core.addMethod(
$core.method({
selector: "<",
protocol: "comparing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aGeographicArea"],
source: "< aGeographicArea\x0a\x09^self lastConfirmed < aGeographicArea lastConfirmed",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["<", "lastConfirmed"]
}, function ($methodClass){ return function (aGeographicArea){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv([$self._lastConfirmed()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["lastConfirmed"]=1
//>>excludeEnd("ctx");
][0]).__lt($recv(aGeographicArea)._lastConfirmed());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"<",{aGeographicArea:aGeographicArea})});
//>>excludeEnd("ctx");
}; }),
$globals.GeographicArea);

$core.addMethod(
$core.method({
selector: "<=",
protocol: "comparing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aGeographicArea"],
source: "<= aGeographicArea\x0a\x09^self lastConfirmed <= aGeographicArea lastConfirmed",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["<=", "lastConfirmed"]
}, function ($methodClass){ return function (aGeographicArea){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv([$self._lastConfirmed()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["lastConfirmed"]=1
//>>excludeEnd("ctx");
][0]).__lt_eq($recv(aGeographicArea)._lastConfirmed());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"<=",{aGeographicArea:aGeographicArea})});
//>>excludeEnd("ctx");
}; }),
$globals.GeographicArea);

$core.addMethod(
$core.method({
selector: ">",
protocol: "comparing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aGeographicArea"],
source: "> aGeographicArea\x0a\x09^self lastConfirmed > aGeographicArea lastConfirmed",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: [">", "lastConfirmed"]
}, function ($methodClass){ return function (aGeographicArea){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv([$self._lastConfirmed()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["lastConfirmed"]=1
//>>excludeEnd("ctx");
][0]).__gt($recv(aGeographicArea)._lastConfirmed());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,">",{aGeographicArea:aGeographicArea})});
//>>excludeEnd("ctx");
}; }),
$globals.GeographicArea);

$core.addMethod(
$core.method({
selector: ">=",
protocol: "comparing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aGeographicArea"],
source: ">= aGeographicArea\x0a\x09^self lastConfirmed >= aGeographicArea lastConfirmed",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: [">=", "lastConfirmed"]
}, function ($methodClass){ return function (aGeographicArea){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv([$self._lastConfirmed()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["lastConfirmed"]=1
//>>excludeEnd("ctx");
][0]).__gt_eq($recv(aGeographicArea)._lastConfirmed());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,">=",{aGeographicArea:aGeographicArea})});
//>>excludeEnd("ctx");
}; }),
$globals.GeographicArea);

$core.addMethod(
$core.method({
selector: "addVersionInfo",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "addVersionInfo\x0a\x09| versions |\x0a\x09versions := '#Versions' asSilk.\x0a\x09versions resetContents.\x0a\x09versions << self dataVersionInfo",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["asSilk", "resetContents", "<<", "dataVersionInfo"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var versions;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
versions="#Versions"._asSilk();
$recv(versions)._resetContents();
$recv(versions).__lt_lt($self._dataVersionInfo());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addVersionInfo",{versions:versions})});
//>>excludeEnd("ctx");
}; }),
$globals.GeographicArea);

$core.addMethod(
$core.method({
selector: "areaInfo",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "areaInfo\x0a\x09| span |\x0a\x09span := Silk SPAN: 'class' -> 'AreaInfo'.\x0a\x09self population isZero ifFalse: [\x0a\x09\x09^span << {Silk SPAN: 'Population: '. Silk SPAN: self population separatedThousandsString}].\x0a\x09^span",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["SPAN:", "->", "ifFalse:", "isZero", "population", "<<", "separatedThousandsString"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var span;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
span=[$recv($globals.Silk)._SPAN_("class".__minus_gt("AreaInfo"))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["SPAN:"]=1
//>>excludeEnd("ctx");
][0];
if(!$core.assert($recv([$self._population()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["population"]=1
//>>excludeEnd("ctx");
][0])._isZero())){
return $recv(span).__lt_lt([[$recv($globals.Silk)._SPAN_("Population: ")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["SPAN:"]=2
//>>excludeEnd("ctx");
][0],$recv($globals.Silk)._SPAN_($recv($self._population())._separatedThousandsString())]);
}
return span;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"areaInfo",{span:span})});
//>>excludeEnd("ctx");
}; }),
$globals.GeographicArea);

$core.addMethod(
$core.method({
selector: "asListItem",
protocol: "html",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asListItem\x0a\x09\x22add html elements to anElement\x22\x0a\x09\x0a\x09^{self emptySpan. self emptySubspan. self asNameSpan. self asValueSpan}",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["emptySpan", "emptySubspan", "asNameSpan", "asValueSpan"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return [$self._emptySpan(),$self._emptySubspan(),$self._asNameSpan(),$self._asValueSpan()];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asListItem",{})});
//>>excludeEnd("ctx");
}; }),
$globals.GeographicArea);

$core.addMethod(
$core.method({
selector: "asNameSpan",
protocol: "html",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asNameSpan\x0a\x09\x22<span>\x0a\x09the name of the list item\x22\x0a\x09\x0a\x09| item |\x0a\x09item := Silk SPAN: {\x0a\x09\x09'class' -> 'ListItem'. \x0a\x09\x09(Silk SPAN: {'class' -> 'StateName'. self name})}.\x0a\x09item on: #click bind: [\x0a\x09\x09('#CountryList' asSilk allAt: '.selected') do: [:selected |\x0a\x09\x09\x09selected attrAt: 'class' put: 'ListItem'].\x0a\x09\x09item attrAt: 'class' put: 'ListItem selected'. \x0a\x09\x09self showInfo].\x0a\x09^item",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["SPAN:", "->", "name", "on:bind:", "do:", "allAt:", "asSilk", "attrAt:put:", "showInfo"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var item;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
item=[$recv($globals.Silk)._SPAN_([["class".__minus_gt("ListItem")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=1
//>>excludeEnd("ctx");
][0],$recv($globals.Silk)._SPAN_(["class".__minus_gt("StateName"),$self._name()])])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["SPAN:"]=1
//>>excludeEnd("ctx");
][0];
$recv(item)._on_bind_("click",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv($recv("#CountryList"._asSilk())._allAt_(".selected"))._do_((function(selected){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return [$recv(selected)._attrAt_put_("class","ListItem")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["attrAt:put:"]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({selected:selected},$ctx2,2)});
//>>excludeEnd("ctx");
}));
$recv(item)._attrAt_put_("class","ListItem selected");
return $self._showInfo();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return item;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asNameSpan",{item:item})});
//>>excludeEnd("ctx");
}; }),
$globals.GeographicArea);

$core.addMethod(
$core.method({
selector: "asPartListItem",
protocol: "html",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asPartListItem\x0a\x09^self asListItem",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["asListItem"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._asListItem();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asPartListItem",{})});
//>>excludeEnd("ctx");
}; }),
$globals.GeographicArea);

$core.addMethod(
$core.method({
selector: "asValueSpan",
protocol: "html",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asValueSpan\x0a\x09\x22<span>\x0a\x09the value of the list item\x22\x0a\x09\x0a\x09^Silk SPAN: {\x0a\x09\x09'class' -> 'ListValue'. \x0a\x09\x09self lastConfirmed separatedThousandsString}",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["SPAN:", "->", "separatedThousandsString", "lastConfirmed"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Silk)._SPAN_(["class".__minus_gt("ListValue"),$recv($self._lastConfirmed())._separatedThousandsString()]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asValueSpan",{})});
//>>excludeEnd("ctx");
}; }),
$globals.GeographicArea);

$core.addMethod(
$core.method({
selector: "caseSeries",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "caseSeries\x0a\x09\x22<Dataseries>\x22\x0a\x09\x0a\x09^self series caseSeries",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["caseSeries", "series"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._series())._caseSeries();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"caseSeries",{})});
//>>excludeEnd("ctx");
}; }),
$globals.GeographicArea);

$core.addMethod(
$core.method({
selector: "casechart",
protocol: "html",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "casechart\x0a\x09^Silk DIV: {\x0a\x09\x09'id' -> 'Casechart'.\x0a\x09\x09(Casechart for: self on: self caseSeries aspects: Casechart currentAspects) html}",
referencedClasses: ["Silk", "Casechart"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["DIV:", "->", "html", "for:on:aspects:", "caseSeries", "currentAspects"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Silk)._DIV_(["id".__minus_gt("Casechart"),$recv($recv($globals.Casechart)._for_on_aspects_(self,$self._caseSeries(),$recv($globals.Casechart)._currentAspects()))._html()]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"casechart",{})});
//>>excludeEnd("ctx");
}; }),
$globals.GeographicArea);

$core.addMethod(
$core.method({
selector: "changeSeries",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "changeSeries\x0a\x09\x22<Dataseries>\x22\x0a\x09\x0a\x09^self series changeSeries",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["changeSeries", "series"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._series())._changeSeries();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"changeSeries",{})});
//>>excludeEnd("ctx");
}; }),
$globals.GeographicArea);

$core.addMethod(
$core.method({
selector: "changechart",
protocol: "html",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "changechart\x0a\x09^Silk DIV: {\x0a\x09\x09'id' -> 'Changechart'.\x0a\x09\x09(Changechart for: self on: self changeSeries aspects: Changechart currentAspects) html}",
referencedClasses: ["Silk", "Changechart"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["DIV:", "->", "html", "for:on:aspects:", "changeSeries", "currentAspects"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Silk)._DIV_(["id".__minus_gt("Changechart"),$recv($recv($globals.Changechart)._for_on_aspects_(self,$self._changeSeries(),$recv($globals.Changechart)._currentAspects()))._html()]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"changechart",{})});
//>>excludeEnd("ctx");
}; }),
$globals.GeographicArea);

$core.addMethod(
$core.method({
selector: "dataDateString",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dataDateString\x0a\x09^self modificationDate \x0a\x09\x09ifNotNil: #asLocaleString\x0a\x09\x09ifNil: [self series lastDate asLocaleDateString]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNotNil:ifNil:", "modificationDate", "asLocaleDateString", "lastDate", "series"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._modificationDate();
return $recv($1)._ifNotNil_ifNil_("asLocaleString",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($self._series())._lastDate())._asLocaleDateString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dataDateString",{})});
//>>excludeEnd("ctx");
}; }),
$globals.GeographicArea);

$core.addMethod(
$core.method({
selector: "dataVersionInfo",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dataVersionInfo\x0a\x09^{\x09Silk SPAN: {'class' -> 'VersionLabel'. 'Data:'}.\x0a\x09\x09Silk SPAN: {'class' -> 'VersionName'. self series dataProviderAnchor}.\x0a\x09\x09Silk SPAN: {'class' -> 'VersionDate'. self dataDateString}}",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["SPAN:", "->", "dataProviderAnchor", "series", "dataDateString"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return [[$recv($globals.Silk)._SPAN_([["class".__minus_gt("VersionLabel")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=1
//>>excludeEnd("ctx");
][0],"Data:"])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["SPAN:"]=1
//>>excludeEnd("ctx");
][0],[$recv($globals.Silk)._SPAN_([["class".__minus_gt("VersionName")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=2
//>>excludeEnd("ctx");
][0],$recv($self._series())._dataProviderAnchor()])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["SPAN:"]=2
//>>excludeEnd("ctx");
][0],$recv($globals.Silk)._SPAN_(["class".__minus_gt("VersionDate"),$self._dataDateString()])];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dataVersionInfo",{})});
//>>excludeEnd("ctx");
}; }),
$globals.GeographicArea);

$core.addMethod(
$core.method({
selector: "emptySpan",
protocol: "html",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "emptySpan\x0a\x09\x22<span>\x0a\x09in place of a +/- button\x22\x0a\x09\x0a\x09^Silk SPAN: 'class' -> 'treeSpan'",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["SPAN:", "->"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Silk)._SPAN_("class".__minus_gt("treeSpan"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"emptySpan",{})});
//>>excludeEnd("ctx");
}; }),
$globals.GeographicArea);

$core.addMethod(
$core.method({
selector: "emptySubspan",
protocol: "html",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "emptySubspan\x0a\x09\x22<span>\x0a\x09in place of a +/- button\x22\x0a\x09\x0a\x09^Silk SPAN: 'class' -> 'subtreeSpan'",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["SPAN:", "->"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Silk)._SPAN_("class".__minus_gt("subtreeSpan"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"emptySubspan",{})});
//>>excludeEnd("ctx");
}; }),
$globals.GeographicArea);

$core.addMethod(
$core.method({
selector: "graphicsHeader",
protocol: "html",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "graphicsHeader\x0a\x09^Silk DIV << {\x0a\x09\x09'class' -> 'GraphicsHeader'.\x0a\x09\x09Silk H2: self name.\x0a\x09\x09self areaInfo}",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["<<", "DIV", "->", "H2:", "name", "areaInfo"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($globals.Silk)._DIV()).__lt_lt(["class".__minus_gt("GraphicsHeader"),$recv($globals.Silk)._H2_($self._name()),$self._areaInfo()]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"graphicsHeader",{})});
//>>excludeEnd("ctx");
}; }),
$globals.GeographicArea);

$core.addMethod(
$core.method({
selector: "initializeName:series:properties:",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aDataseries", "aDictionary"],
source: "initializeName: aString series: aDataseries properties: aDictionary\x0a\x09name := aString.\x0a\x09series := aDataseries.\x0a\x09properties := aDictionary",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aString,aDataseries,aDictionary){
var self=this,$self=this;
$self.name=aString;
$self.series=aDataseries;
$self.properties=aDictionary;
return self;

}; }),
$globals.GeographicArea);

$core.addMethod(
$core.method({
selector: "lastConfirmed",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "lastConfirmed\x0a\x09\x22<Integer>\x22\x0a\x09\x0a\x09^self series lastConfirmed",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["lastConfirmed", "series"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._series())._lastConfirmed();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lastConfirmed",{})});
//>>excludeEnd("ctx");
}; }),
$globals.GeographicArea);

$core.addMethod(
$core.method({
selector: "lastDate",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "lastDate\x0a\x09\x22<Date>\x22\x0a\x09\x0a\x09^self series lastDate",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["lastDate", "series"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._series())._lastDate();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lastDate",{})});
//>>excludeEnd("ctx");
}; }),
$globals.GeographicArea);

$core.addMethod(
$core.method({
selector: "lastDeaths",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "lastDeaths\x0a\x09\x22<Integer>\x22\x0a\x09\x0a\x09^self series lastDeaths",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["lastDeaths", "series"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._series())._lastDeaths();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lastDeaths",{})});
//>>excludeEnd("ctx");
}; }),
$globals.GeographicArea);

$core.addMethod(
$core.method({
selector: "lastRecovered",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "lastRecovered\x0a\x09\x22<Integer>\x22\x0a\x09\x0a\x09^self series lastRecovered",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["lastRecovered", "series"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._series())._lastRecovered();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lastRecovered",{})});
//>>excludeEnd("ctx");
}; }),
$globals.GeographicArea);

$core.addMethod(
$core.method({
selector: "metadata",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "metadata\x0a\x09\x22<Dictionary>\x22\x0a\x09\x0a\x09^self properties at: #metadata ifAbsent: [Dictionary new]",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:ifAbsent:", "properties", "new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._properties())._at_ifAbsent_("metadata",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($globals.Dictionary)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"metadata",{})});
//>>excludeEnd("ctx");
}; }),
$globals.GeographicArea);

$core.addMethod(
$core.method({
selector: "metadata:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDictionary"],
source: "metadata: aDictionary\x0a\x09self properties at: #metadata put: aDictionary",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:put:", "properties"]
}, function ($methodClass){ return function (aDictionary){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._properties())._at_put_("metadata",aDictionary);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"metadata:",{aDictionary:aDictionary})});
//>>excludeEnd("ctx");
}; }),
$globals.GeographicArea);

$core.addMethod(
$core.method({
selector: "modificationDate",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "modificationDate\x0a\x09\x22<Date>\x22\x0a\x0a\x09(self metadata at: #modificationDate) ifNotNil: [:date | \x0a\x09\x09^Date fromString: date].\x0a\x09^Date now",
referencedClasses: ["Date"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNotNil:", "at:", "metadata", "fromString:", "now"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($self._metadata())._at_("modificationDate");
if($1 == null || $1.a$nil){
$1;
} else {
var date;
date=$1;
return $recv($globals.Date)._fromString_(date);
}
return $recv($globals.Date)._now();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"modificationDate",{})});
//>>excludeEnd("ctx");
}; }),
$globals.GeographicArea);

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
$globals.GeographicArea);

$core.addMethod(
$core.method({
selector: "population",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "population\x0a\x09\x22<Integer>\x22\x0a\x09\x0a\x09^self properties at: #population ifAbsent: [0]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:ifAbsent:", "properties"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._properties())._at_ifAbsent_("population",(function(){
return (0);

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"population",{})});
//>>excludeEnd("ctx");
}; }),
$globals.GeographicArea);

$core.addMethod(
$core.method({
selector: "population:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "population: anInteger\x0a\x09self properties at: #population put: anInteger",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:put:", "properties"]
}, function ($methodClass){ return function (anInteger){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._properties())._at_put_("population",anInteger);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"population:",{anInteger:anInteger})});
//>>excludeEnd("ctx");
}; }),
$globals.GeographicArea);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: "comparing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x0a\x09aStream \x0a\x09\x09nextPutAll: self class name;\x0a\x09\x09nextPut: $(;\x0a\x09\x09nextPutAll: self name;\x0a\x09\x09nextPut: $)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["nextPutAll:", "name", "class", "nextPut:"]
}, function ($methodClass){ return function (aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[$recv(aStream)._nextPutAll_([$recv($self._class())._name()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["name"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["nextPutAll:"]=1
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._nextPut_("(")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["nextPut:"]=1
//>>excludeEnd("ctx");
][0];
$recv(aStream)._nextPutAll_($self._name());
$recv(aStream)._nextPut_(")");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream})});
//>>excludeEnd("ctx");
}; }),
$globals.GeographicArea);

$core.addMethod(
$core.method({
selector: "properties",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "properties\x0a\x09\x22<Dictionary>\x22\x0a\x09\x0a\x09^properties ifNil: [properties := Dictionary new]",
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
$1=$self.properties;
if($1 == null || $1.a$nil){
$self.properties=$recv($globals.Dictionary)._new();
return $self.properties;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"properties",{})});
//>>excludeEnd("ctx");
}; }),
$globals.GeographicArea);

$core.addMethod(
$core.method({
selector: "recreateCharts",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "recreateCharts\x0a\x09| graphics |\x0a\x09graphics := '#Graphics' asSilk.\x0a\x09graphics resetContents.\x0a\x09graphics << {\x0a\x09\x09self graphicsHeader.\x0a\x09 \x09self casechart.\x0a\x09 \x09self changechart.\x0a\x09\x09Silk DIV: 'id' -> 'Tooltip'}",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["asSilk", "resetContents", "<<", "graphicsHeader", "casechart", "changechart", "DIV:", "->"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var graphics;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
graphics="#Graphics"._asSilk();
$recv(graphics)._resetContents();
$recv(graphics).__lt_lt([$self._graphicsHeader(),$self._casechart(),$self._changechart(),$recv($globals.Silk)._DIV_("id".__minus_gt("Tooltip"))]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"recreateCharts",{graphics:graphics})});
//>>excludeEnd("ctx");
}; }),
$globals.GeographicArea);

$core.addMethod(
$core.method({
selector: "series",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "series\x0a\x09\x22<Dataseries>\x22\x0a\x09\x0a\x09^series",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.series;

}; }),
$globals.GeographicArea);

$core.addMethod(
$core.method({
selector: "seriesDeaths",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "seriesDeaths\x0a\x09\x22<Dataseries>\x22\x0a\x09\x0a\x09^self series",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["series"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._series();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"seriesDeaths",{})});
//>>excludeEnd("ctx");
}; }),
$globals.GeographicArea);

$core.addMethod(
$core.method({
selector: "showInfo",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "showInfo\x0a\x09\x22add nice info graphics\x22\x0a\x09\x0a\x09self recreateCharts.\x0a\x09self addVersionInfo",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["recreateCharts", "addVersionInfo"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._recreateCharts();
$self._addVersionInfo();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"showInfo",{})});
//>>excludeEnd("ctx");
}; }),
$globals.GeographicArea);


$core.addMethod(
$core.method({
selector: "allFromJHUJson:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJson"],
source: "allFromJHUJson: aJson\x0a\x09\x22<Array of: GeographicArea>\x22\x0a\x0a\x09| countries |\x0a\x09countries := self allFromJHUSeries: (aJson data collect: [:countryJson | JHUSeries fromJson: countryJson]).\x0a\x09countries do: [:country | country metadata: aJson meta].\x0a\x09^countries",
referencedClasses: ["JHUSeries"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["allFromJHUSeries:", "collect:", "data", "fromJson:", "do:", "metadata:", "meta"]
}, function ($methodClass){ return function (aJson){
var self=this,$self=this;
var countries;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
countries=$self._allFromJHUSeries_($recv($recv(aJson)._data())._collect_((function(countryJson){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($globals.JHUSeries)._fromJson_(countryJson);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({countryJson:countryJson},$ctx1,1)});
//>>excludeEnd("ctx");
})));
$recv(countries)._do_((function(country){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(country)._metadata_($recv(aJson)._meta());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({country:country},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return countries;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"allFromJHUJson:",{aJson:aJson,countries:countries})});
//>>excludeEnd("ctx");
}; }),
$globals.GeographicArea.a$cls);

$core.addMethod(
$core.method({
selector: "allFromJHUSeries:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["someSeries"],
source: "allFromJHUSeries: someSeries\x0a\x09\x22<Array of: GeographicArea>\x22\x0a\x09\x0a\x09^self subclassResponsability",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["subclassResponsability"]
}, function ($methodClass){ return function (someSeries){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._subclassResponsability();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"allFromJHUSeries:",{someSeries:someSeries})});
//>>excludeEnd("ctx");
}; }),
$globals.GeographicArea.a$cls);

$core.addMethod(
$core.method({
selector: "allFromRKIJson:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJson"],
source: "allFromRKIJson: aJson\x0a\x09\x22<Array of: GeographicArea>\x22\x0a\x09\x0a\x09| countries |\x0a\x09countries := self allFromRKISeries: (aJson data collect: [:countryJson | RKISeries fromJson: countryJson]).\x0a\x09countries do: [:country | country metadata: aJson meta].\x0a\x09^countries",
referencedClasses: ["RKISeries"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["allFromRKISeries:", "collect:", "data", "fromJson:", "do:", "metadata:", "meta"]
}, function ($methodClass){ return function (aJson){
var self=this,$self=this;
var countries;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
countries=$self._allFromRKISeries_($recv($recv(aJson)._data())._collect_((function(countryJson){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($globals.RKISeries)._fromJson_(countryJson);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({countryJson:countryJson},$ctx1,1)});
//>>excludeEnd("ctx");
})));
$recv(countries)._do_((function(country){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(country)._metadata_($recv(aJson)._meta());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({country:country},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return countries;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"allFromRKIJson:",{aJson:aJson,countries:countries})});
//>>excludeEnd("ctx");
}; }),
$globals.GeographicArea.a$cls);

$core.addMethod(
$core.method({
selector: "allFromRKISeries:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["someSeries"],
source: "allFromRKISeries: someSeries\x0a\x09\x22<Array of: GeographicArea>\x22\x0a\x09\x0a\x09^self subclassResponsability",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["subclassResponsability"]
}, function ($methodClass){ return function (someSeries){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._subclassResponsability();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"allFromRKISeries:",{someSeries:someSeries})});
//>>excludeEnd("ctx");
}; }),
$globals.GeographicArea.a$cls);

$core.addMethod(
$core.method({
selector: "allFromUSJHUJson:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJson"],
source: "allFromUSJHUJson: aJson\x0a\x09\x22<Array of: GeographicArea>\x22\x0a\x0a\x09| countries |\x0a\x09countries := self allFromUSJHUSeries: (aJson data collect: [:countryJson | JHUUSSeries fromJson: countryJson]).\x0a\x09countries do: [:country | country metadata: aJson meta].\x0a\x09^countries",
referencedClasses: ["JHUUSSeries"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["allFromUSJHUSeries:", "collect:", "data", "fromJson:", "do:", "metadata:", "meta"]
}, function ($methodClass){ return function (aJson){
var self=this,$self=this;
var countries;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
countries=$self._allFromUSJHUSeries_($recv($recv(aJson)._data())._collect_((function(countryJson){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($globals.JHUUSSeries)._fromJson_(countryJson);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({countryJson:countryJson},$ctx1,1)});
//>>excludeEnd("ctx");
})));
$recv(countries)._do_((function(country){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(country)._metadata_($recv(aJson)._meta());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({country:country},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return countries;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"allFromUSJHUJson:",{aJson:aJson,countries:countries})});
//>>excludeEnd("ctx");
}; }),
$globals.GeographicArea.a$cls);

$core.addMethod(
$core.method({
selector: "allFromUSJHUSeries:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["someSeries"],
source: "allFromUSJHUSeries: someSeries\x0a\x09\x22<Array of: GeographicArea>\x22\x0a\x09\x0a\x09^self subclassResponsability",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["subclassResponsability"]
}, function ($methodClass){ return function (someSeries){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._subclassResponsability();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"allFromUSJHUSeries:",{someSeries:someSeries})});
//>>excludeEnd("ctx");
}; }),
$globals.GeographicArea.a$cls);

$core.addMethod(
$core.method({
selector: "name:series:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aDataseries"],
source: "name: aString series: aDataseries\x0a\x09^self name: aString series: aDataseries properties: nil",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["name:series:properties:"]
}, function ($methodClass){ return function (aString,aDataseries){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._name_series_properties_(aString,aDataseries,nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"name:series:",{aString:aString,aDataseries:aDataseries})});
//>>excludeEnd("ctx");
}; }),
$globals.GeographicArea.a$cls);

$core.addMethod(
$core.method({
selector: "name:series:properties:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aDataseries", "aDictionary"],
source: "name: aString series: aDataseries properties: aDictionary\x0a\x09| inst |\x0a\x09inst := self new.\x0a\x09inst initializeName: aString series: aDataseries properties: aDictionary.\x0a\x09^inst",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "initializeName:series:properties:"]
}, function ($methodClass){ return function (aString,aDataseries,aDictionary){
var self=this,$self=this;
var inst;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
inst=$self._new();
$recv(inst)._initializeName_series_properties_(aString,aDataseries,aDictionary);
return inst;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"name:series:properties:",{aString:aString,aDataseries:aDataseries,aDictionary:aDictionary,inst:inst})});
//>>excludeEnd("ctx");
}; }),
$globals.GeographicArea.a$cls);


$core.addClass("Country", $globals.GeographicArea, ["parts"], "Covid19Model");
$core.addMethod(
$core.method({
selector: "asListItem",
protocol: "html",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asListItem\x0a\x09\x22add html elements to anElement\x22\x0a\x09\x0a\x09| plusButton minusButton plusAction minusAction |\x0a\x09self parts ifEmpty: [\x0a\x09\x09^super asListItem].\x0a\x09plusButton := Silk BUTTON: {'class' -> 'treeButton'. 'type' -> 'button'. '+'}.\x0a\x09minusButton := Silk BUTTON: {'class' -> 'treeButton'. 'type' -> 'button'. '–'}.\x0a\x09plusAction := [:event |\x0a\x09\x09| button after next2 insert |\x0a\x09\x09button := Silk fromElement: event target.\x0a\x09\x09button resetContents.\x0a\x09\x09button off: #click unbind: plusAction.\x0a\x09\x09button << '–'.\x0a\x09\x09button on: #click bind: minusAction.\x0a\x09\x09after := button setToAfter.\x0a\x09\x09after next.\x0a\x09\x09after next.\x0a\x09\x09next2 := after next.\x0a\x09\x09insert := next2 setToAfter.\x0a\x09\x09self parts do: [:part | insert << part asPartListItem]].\x0a\x09minusAction := [:event |\x0a\x09\x09| button after next2 insert last |\x0a\x09\x09button := Silk fromElement: event target.\x0a\x09\x09button resetContents.\x0a\x09\x09button off: #click unbind: minusAction.\x0a\x09\x09button << '+'.\x0a\x09\x09button on: #click bind: plusAction.\x0a\x09\x09after := button setToAfter.\x0a\x09\x09after next.\x0a\x09\x09after next.\x0a\x09\x09next2 := after next.\x0a\x09\x09insert := next2 setToAfter.\x0a\x09\x09self parts size * 4 timesRepeat: [\x0a\x09\x09\x09last := after next.\x0a\x09\x09\x09((last attrAt: 'class') = 'subtreeButton' and: [\x0a\x09\x09\x09last element innerText = '–']) ifTrue: [\x0a\x09\x09\x09\x09| after2 eol line |\x0a\x09\x09\x09\x09after2 := last setToAfter.\x0a\x09\x09\x09\x09after2 next.\x0a\x09\x09\x09\x09eol := after2 next setToAfter.\x0a\x09\x09\x09\x09line := {after2 next. after2 next. after2 next. after2 next}.\x0a\x09\x09\x09\x09[[:first :second :third :forth |\x0a\x09\x09\x09\x09\x09first isEmpty and: [\x0a\x09\x09\x09\x09\x09second isEmpty and: [\x0a\x09\x09\x09\x09\x09(third attrAt: 'class') = 'ListItem' and: [\x0a\x09\x09\x09\x09\x09(third at: '.StateName') notNil]]]\x0a\x09\x09\x09\x09] valueWithPossibleArguments: line] whileTrue: [\x0a\x09\x09\x09\x09\x09line := {after2 next. after2 next. after2 next. after2 next}].\x0a\x09\x09\x09\x09after2 back; back; back; back.\x0a\x09\x09\x09\x09eol cutUpTo: after2]].\x0a\x09\x09insert cutUpTo: last setToAfter].\x0a\x09plusButton on: #click bind: plusAction.\x0a\x09minusButton on: #click bind: minusAction.\x0a\x09^{plusButton. self emptySubspan. self asNameSpan. self asValueSpan}",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifEmpty:", "parts", "asListItem", "BUTTON:", "->", "fromElement:", "target", "resetContents", "off:unbind:", "<<", "on:bind:", "setToAfter", "next", "do:", "asPartListItem", "timesRepeat:", "*", "size", "ifTrue:", "and:", "=", "attrAt:", "innerText", "element", "whileTrue:", "valueWithPossibleArguments:", "isEmpty", "notNil", "at:", "back", "cutUpTo:", "emptySubspan", "asNameSpan", "asValueSpan"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var plusButton,minusButton,plusAction,minusAction;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
var $early={};
try {
$recv([$self._parts()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["parts"]=1
//>>excludeEnd("ctx");
][0])._ifEmpty_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
throw $early=[[(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._asListItem.call($self))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.supercall = false
//>>excludeEnd("ctx");
][0]];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
plusButton=[$recv($globals.Silk)._BUTTON_([["class".__minus_gt("treeButton")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=1
//>>excludeEnd("ctx");
][0],["type".__minus_gt("button")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=2
//>>excludeEnd("ctx");
][0],"+"])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["BUTTON:"]=1
//>>excludeEnd("ctx");
][0];
minusButton=$recv($globals.Silk)._BUTTON_([["class".__minus_gt("treeButton")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=3
//>>excludeEnd("ctx");
][0],"type".__minus_gt("button"),"–"]);
plusAction=(function(event){
var button,after,next2,insert;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
button=[$recv($globals.Silk)._fromElement_([$recv(event)._target()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["target"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["fromElement:"]=1
//>>excludeEnd("ctx");
][0];
[$recv(button)._resetContents()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["resetContents"]=1
//>>excludeEnd("ctx");
][0];
[$recv(button)._off_unbind_("click",plusAction)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["off:unbind:"]=1
//>>excludeEnd("ctx");
][0];
[$recv(button).__lt_lt("–")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["<<"]=1
//>>excludeEnd("ctx");
][0];
[$recv(button)._on_bind_("click",minusAction)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["on:bind:"]=1
//>>excludeEnd("ctx");
][0];
after=[$recv(button)._setToAfter()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["setToAfter"]=1
//>>excludeEnd("ctx");
][0];
[$recv(after)._next()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["next"]=1
//>>excludeEnd("ctx");
][0];
[$recv(after)._next()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["next"]=2
//>>excludeEnd("ctx");
][0];
next2=[$recv(after)._next()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["next"]=3
//>>excludeEnd("ctx");
][0];
insert=[$recv(next2)._setToAfter()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["setToAfter"]=2
//>>excludeEnd("ctx");
][0];
return $recv([$self._parts()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["parts"]=2
//>>excludeEnd("ctx");
][0])._do_((function(part){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return [$recv(insert).__lt_lt($recv(part)._asPartListItem())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["<<"]=2
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({part:part},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({event:event,button:button,after:after,next2:next2,insert:insert},$ctx1,2)});
//>>excludeEnd("ctx");
});
minusAction=(function(event){
var button,after,next2,insert,last;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
button=$recv($globals.Silk)._fromElement_($recv(event)._target());
$recv(button)._resetContents();
$recv(button)._off_unbind_("click",minusAction);
$recv(button).__lt_lt("+");
[$recv(button)._on_bind_("click",plusAction)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["on:bind:"]=2
//>>excludeEnd("ctx");
][0];
after=[$recv(button)._setToAfter()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["setToAfter"]=3
//>>excludeEnd("ctx");
][0];
[$recv(after)._next()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["next"]=4
//>>excludeEnd("ctx");
][0];
[$recv(after)._next()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["next"]=5
//>>excludeEnd("ctx");
][0];
next2=[$recv(after)._next()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["next"]=6
//>>excludeEnd("ctx");
][0];
insert=[$recv(next2)._setToAfter()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["setToAfter"]=4
//>>excludeEnd("ctx");
][0];
$recv($recv($recv($self._parts())._size()).__star((4)))._timesRepeat_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
last=[$recv(after)._next()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["next"]=7
//>>excludeEnd("ctx");
][0];
if($core.assert([$recv([$recv([$recv(last)._attrAt_("class")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["attrAt:"]=1
//>>excludeEnd("ctx");
][0]).__eq("subtreeButton")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["="]=1
//>>excludeEnd("ctx");
][0])._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return [$recv($recv($recv(last)._element())._innerText()).__eq("–")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx4.sendIdx["="]=2
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,6)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["and:"]=1
//>>excludeEnd("ctx");
][0])){
var after2,eol,line;
after2=[$recv(last)._setToAfter()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["setToAfter"]=5
//>>excludeEnd("ctx");
][0];
[$recv(after2)._next()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["next"]=8
//>>excludeEnd("ctx");
][0];
eol=[$recv([$recv(after2)._next()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["next"]=9
//>>excludeEnd("ctx");
][0])._setToAfter()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["setToAfter"]=6
//>>excludeEnd("ctx");
][0];
line=[[$recv(after2)._next()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["next"]=10
//>>excludeEnd("ctx");
][0],[$recv(after2)._next()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["next"]=11
//>>excludeEnd("ctx");
][0],[$recv(after2)._next()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["next"]=12
//>>excludeEnd("ctx");
][0],[$recv(after2)._next()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["next"]=13
//>>excludeEnd("ctx");
][0]];
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv((function(first,second,third,forth){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx5) {
//>>excludeEnd("ctx");
return [$recv([$recv(first)._isEmpty()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx5.sendIdx["isEmpty"]=1
//>>excludeEnd("ctx");
][0])._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx6) {
//>>excludeEnd("ctx");
return [$recv($recv(second)._isEmpty())._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx7) {
//>>excludeEnd("ctx");
return $recv($recv($recv(third)._attrAt_("class")).__eq("ListItem"))._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx8) {
//>>excludeEnd("ctx");
return $recv($recv(third)._at_(".StateName"))._notNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx8) {$ctx8.fillBlock({},$ctx7,12)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx7) {$ctx7.fillBlock({},$ctx6,11)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx6.sendIdx["and:"]=3
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx6) {$ctx6.fillBlock({},$ctx5,10)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx5.sendIdx["and:"]=2
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx5) {$ctx5.fillBlock({first:first,second:second,third:third,forth:forth},$ctx4,9)});
//>>excludeEnd("ctx");
}))._valueWithPossibleArguments_(line);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,8)});
//>>excludeEnd("ctx");
}))._whileTrue_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
line=[[$recv(after2)._next()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx4.sendIdx["next"]=14
//>>excludeEnd("ctx");
][0],[$recv(after2)._next()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx4.sendIdx["next"]=15
//>>excludeEnd("ctx");
][0],[$recv(after2)._next()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx4.sendIdx["next"]=16
//>>excludeEnd("ctx");
][0],$recv(after2)._next()];
return line;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,13)});
//>>excludeEnd("ctx");
}));
$1=after2;
[$recv($1)._back()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["back"]=1
//>>excludeEnd("ctx");
][0];
[$recv($1)._back()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["back"]=2
//>>excludeEnd("ctx");
][0];
[$recv($1)._back()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["back"]=3
//>>excludeEnd("ctx");
][0];
$recv($1)._back();
return [$recv(eol)._cutUpTo_(after2)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["cutUpTo:"]=1
//>>excludeEnd("ctx");
][0];
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,5)});
//>>excludeEnd("ctx");
}));
return $recv(insert)._cutUpTo_($recv(last)._setToAfter());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({event:event,button:button,after:after,next2:next2,insert:insert,last:last},$ctx1,4)});
//>>excludeEnd("ctx");
});
[$recv(plusButton)._on_bind_("click",plusAction)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["on:bind:"]=3
//>>excludeEnd("ctx");
][0];
$recv(minusButton)._on_bind_("click",minusAction);
return [plusButton,$self._emptySubspan(),$self._asNameSpan(),$self._asValueSpan()];
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asListItem",{plusButton:plusButton,minusButton:minusButton,plusAction:plusAction,minusAction:minusAction})});
//>>excludeEnd("ctx");
}; }),
$globals.Country);

$core.addMethod(
$core.method({
selector: "asNameSpan",
protocol: "html",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asNameSpan\x0a\x09\x22<span>\x0a\x09the name of the list item\x22\x0a\x09\x0a\x09| item |\x0a\x09item := Silk SPAN: {\x0a\x09\x09'class' -> 'ListItem'. \x0a\x09\x09(Silk SPAN: {'class' -> 'CountryName'. self name})}.\x0a\x09self name = 'World' ifTrue: [\x0a\x09\x09item << ('id' -> 'World')].\x0a\x09item on: #click bind: [:event |\x0a\x09\x09('#CountryList' asSilk allAt: '.selected') do: [:selected |\x0a\x09\x09\x09selected attrAt: 'class' put: 'ListItem'].\x0a\x09\x09item attrAt: 'class' put: 'ListItem selected'. \x0a\x09\x09self showInfo].\x0a\x09^item",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["SPAN:", "->", "name", "ifTrue:", "=", "<<", "on:bind:", "do:", "allAt:", "asSilk", "attrAt:put:", "showInfo"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var item;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
item=[$recv($globals.Silk)._SPAN_([["class".__minus_gt("ListItem")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=1
//>>excludeEnd("ctx");
][0],$recv($globals.Silk)._SPAN_([["class".__minus_gt("CountryName")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=2
//>>excludeEnd("ctx");
][0],[$self._name()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["name"]=1
//>>excludeEnd("ctx");
][0]])])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["SPAN:"]=1
//>>excludeEnd("ctx");
][0];
if($core.assert($recv($self._name()).__eq("World"))){
$recv(item).__lt_lt("id".__minus_gt("World"));
}
$recv(item)._on_bind_("click",(function(event){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv($recv("#CountryList"._asSilk())._allAt_(".selected"))._do_((function(selected){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return [$recv(selected)._attrAt_put_("class","ListItem")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["attrAt:put:"]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({selected:selected},$ctx2,3)});
//>>excludeEnd("ctx");
}));
$recv(item)._attrAt_put_("class","ListItem selected");
return $self._showInfo();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return item;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asNameSpan",{item:item})});
//>>excludeEnd("ctx");
}; }),
$globals.Country);

$core.addMethod(
$core.method({
selector: "asPartListItem",
protocol: "html",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asPartListItem\x0a\x09\x22list element which is part of another\x22\x0a\x09\x0a\x09| plusAction minusAction plusButton |\x0a\x09self parts ifEmpty: [\x0a\x09\x09^{self emptySpan. self emptySubspan. self asSubnameSpan. self asValueSpan}].\x0a\x09plusAction := [:event |\x0a\x09\x09| button after next2 insert |\x0a\x09\x09button := Silk fromElement: event target.\x0a\x09\x09button resetContents.\x0a\x09\x09button off: #click unbind: plusAction.\x0a\x09\x09button << '–'.\x0a\x09\x09button on: #click bind: minusAction.\x0a\x09\x09after := button setToAfter.\x0a\x09\x09after next.\x0a\x09\x09next2 := after next.\x0a\x09\x09insert := next2 setToAfter.\x0a\x09\x09self parts do: [:part | insert << part asPartListItem]].\x0a\x09minusAction := [:event |\x0a\x09\x09| button after next2 insert last |\x0a\x09\x09button := Silk fromElement: event target.\x0a\x09\x09button resetContents.\x0a\x09\x09button off: #click unbind: minusAction.\x0a\x09\x09button attrAt: 'class' put: 'subtreeButton'.\x0a\x09\x09button << '+'.\x0a\x09\x09button on: #click bind: plusAction.\x0a\x09\x09after := button setToAfter.\x0a\x09\x09after next.\x0a\x09\x09next2 := after next.\x0a\x09\x09insert := next2 setToAfter.\x0a\x09\x09self parts size * 4 timesRepeat: [last := after next].\x0a\x09\x09insert cutUpTo: last setToAfter].\x0a\x09plusButton := (Silk BUTTON: {'class' -> 'subtreeButton'. 'type' -> 'button'. '+'}) on: #click bind: plusAction.\x0a\x09^{self emptySpan. plusButton. self asSubnameSpan. self asValueSpan}.",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifEmpty:", "parts", "emptySpan", "emptySubspan", "asSubnameSpan", "asValueSpan", "fromElement:", "target", "resetContents", "off:unbind:", "<<", "on:bind:", "setToAfter", "next", "do:", "asPartListItem", "attrAt:put:", "timesRepeat:", "*", "size", "cutUpTo:", "BUTTON:", "->"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var plusAction,minusAction,plusButton;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $early={};
try {
$recv([$self._parts()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["parts"]=1
//>>excludeEnd("ctx");
][0])._ifEmpty_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
throw $early=[[[$self._emptySpan()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["emptySpan"]=1
//>>excludeEnd("ctx");
][0],$self._emptySubspan(),[$self._asSubnameSpan()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["asSubnameSpan"]=1
//>>excludeEnd("ctx");
][0],[$self._asValueSpan()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["asValueSpan"]=1
//>>excludeEnd("ctx");
][0]]];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
plusAction=(function(event){
var button,after,next2,insert;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
button=[$recv($globals.Silk)._fromElement_([$recv(event)._target()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["target"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["fromElement:"]=1
//>>excludeEnd("ctx");
][0];
[$recv(button)._resetContents()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["resetContents"]=1
//>>excludeEnd("ctx");
][0];
[$recv(button)._off_unbind_("click",plusAction)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["off:unbind:"]=1
//>>excludeEnd("ctx");
][0];
[$recv(button).__lt_lt("–")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["<<"]=1
//>>excludeEnd("ctx");
][0];
[$recv(button)._on_bind_("click",minusAction)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["on:bind:"]=1
//>>excludeEnd("ctx");
][0];
after=[$recv(button)._setToAfter()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["setToAfter"]=1
//>>excludeEnd("ctx");
][0];
[$recv(after)._next()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["next"]=1
//>>excludeEnd("ctx");
][0];
next2=[$recv(after)._next()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["next"]=2
//>>excludeEnd("ctx");
][0];
insert=[$recv(next2)._setToAfter()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["setToAfter"]=2
//>>excludeEnd("ctx");
][0];
return $recv([$self._parts()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["parts"]=2
//>>excludeEnd("ctx");
][0])._do_((function(part){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return [$recv(insert).__lt_lt($recv(part)._asPartListItem())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["<<"]=2
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({part:part},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({event:event,button:button,after:after,next2:next2,insert:insert},$ctx1,2)});
//>>excludeEnd("ctx");
});
minusAction=(function(event){
var button,after,next2,insert,last;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
button=$recv($globals.Silk)._fromElement_($recv(event)._target());
$recv(button)._resetContents();
$recv(button)._off_unbind_("click",minusAction);
$recv(button)._attrAt_put_("class","subtreeButton");
$recv(button).__lt_lt("+");
[$recv(button)._on_bind_("click",plusAction)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["on:bind:"]=2
//>>excludeEnd("ctx");
][0];
after=[$recv(button)._setToAfter()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["setToAfter"]=3
//>>excludeEnd("ctx");
][0];
[$recv(after)._next()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["next"]=3
//>>excludeEnd("ctx");
][0];
next2=[$recv(after)._next()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["next"]=4
//>>excludeEnd("ctx");
][0];
insert=[$recv(next2)._setToAfter()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["setToAfter"]=4
//>>excludeEnd("ctx");
][0];
$recv($recv($recv($self._parts())._size()).__star((4)))._timesRepeat_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
last=$recv(after)._next();
return last;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,5)});
//>>excludeEnd("ctx");
}));
return $recv(insert)._cutUpTo_($recv(last)._setToAfter());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({event:event,button:button,after:after,next2:next2,insert:insert,last:last},$ctx1,4)});
//>>excludeEnd("ctx");
});
plusButton=$recv($recv($globals.Silk)._BUTTON_([["class".__minus_gt("subtreeButton")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=1
//>>excludeEnd("ctx");
][0],"type".__minus_gt("button"),"+"]))._on_bind_("click",plusAction);
return [$self._emptySpan(),plusButton,$self._asSubnameSpan(),$self._asValueSpan()];
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asPartListItem",{plusAction:plusAction,minusAction:minusAction,plusButton:plusButton})});
//>>excludeEnd("ctx");
}; }),
$globals.Country);

$core.addMethod(
$core.method({
selector: "asSubnameSpan",
protocol: "html",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asSubnameSpan\x0a\x09\x22<span>\x0a\x09the name of the list item when on the second level\x22\x0a\x09\x0a\x09| item |\x0a\x09item := Silk SPAN: {\x0a\x09\x09'class' -> 'ListItem'. \x0a\x09\x09(Silk SPAN: {'class' -> 'LandName'. self name})}.\x0a\x09item on: #click bind: [:event |\x0a\x09\x09('#CountryList' asSilk allAt: '.selected') do: [:selected |\x0a\x09\x09\x09selected attrAt: 'class' put: 'ListItem'].\x0a\x09\x09item attrAt: 'class' put: 'ListItem selected'. \x0a\x09\x09self showInfo].\x0a\x09^item",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["SPAN:", "->", "name", "on:bind:", "do:", "allAt:", "asSilk", "attrAt:put:", "showInfo"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var item;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
item=[$recv($globals.Silk)._SPAN_([["class".__minus_gt("ListItem")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=1
//>>excludeEnd("ctx");
][0],$recv($globals.Silk)._SPAN_(["class".__minus_gt("LandName"),$self._name()])])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["SPAN:"]=1
//>>excludeEnd("ctx");
][0];
$recv(item)._on_bind_("click",(function(event){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv($recv("#CountryList"._asSilk())._allAt_(".selected"))._do_((function(selected){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return [$recv(selected)._attrAt_put_("class","ListItem")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["attrAt:put:"]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({selected:selected},$ctx2,2)});
//>>excludeEnd("ctx");
}));
$recv(item)._attrAt_put_("class","ListItem selected");
return $self._showInfo();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return item;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asSubnameSpan",{item:item})});
//>>excludeEnd("ctx");
}; }),
$globals.Country);

$core.addMethod(
$core.method({
selector: "copyWithParts:",
protocol: "copying",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["someParts"],
source: "copyWithParts: someParts\x0a\x09^self class \x0a\x09\x09name: self name \x0a\x09\x09series: nil\x0a\x09\x09properties: self properties \x0a\x09\x09parts: someParts",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["name:series:properties:parts:", "class", "name", "properties"]
}, function ($methodClass){ return function (someParts){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._class())._name_series_properties_parts_($self._name(),nil,$self._properties(),someParts);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"copyWithParts:",{someParts:someParts})});
//>>excludeEnd("ctx");
}; }),
$globals.Country);

$core.addMethod(
$core.method({
selector: "initializeName:series:properties:parts:",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aDataseries", "aDictionary", "someParts"],
source: "initializeName: aString series: aDataseries properties: aDictionary parts: someParts\x0a\x09name := aString.\x0a\x09series := aDataseries.\x0a\x09properties := aDictionary.\x0a\x09parts := someParts",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aString,aDataseries,aDictionary,someParts){
var self=this,$self=this;
$self.name=aString;
$self.series=aDataseries;
$self.properties=aDictionary;
$self.parts=someParts;
return self;

}; }),
$globals.Country);

$core.addMethod(
$core.method({
selector: "metadata:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDictionary"],
source: "metadata: aDictionary\x0a\x09super metadata: aDictionary.\x0a\x09self parts do: [:part | part metadata: aDictionary]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["metadata:", "do:", "parts"]
}, function ($methodClass){ return function (aDictionary){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._metadata_.call($self,aDictionary))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["metadata:"]=1,$ctx1.supercall = false
//>>excludeEnd("ctx");
][0];
$recv($self._parts())._do_((function(part){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(part)._metadata_(aDictionary);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({part:part},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"metadata:",{aDictionary:aDictionary})});
//>>excludeEnd("ctx");
}; }),
$globals.Country);

$core.addMethod(
$core.method({
selector: "parts",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "parts\x0a\x09\x22<Collection of: State>\x22\x0a\x09\x0a\x09^parts ifNil: [parts := OrderedCollection new]",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self.parts;
if($1 == null || $1.a$nil){
$self.parts=$recv($globals.OrderedCollection)._new();
return $self.parts;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"parts",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Country);

$core.addMethod(
$core.method({
selector: "population",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "population\x0a\x09\x22<Integer | nil>\x22\x0a\x09\x0a\x09^self properties at: #population ifAbsentPut: [\x0a\x09\x09self parts inject: 0 into: [:sum :area | sum + area population]]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:ifAbsentPut:", "properties", "inject:into:", "parts", "+", "population"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._properties())._at_ifAbsentPut_("population",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self._parts())._inject_into_((0),(function(sum,area){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(sum).__plus($recv(area)._population());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({sum:sum,area:area},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"population",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Country);

$core.addMethod(
$core.method({
selector: "selectWorld",
protocol: "html",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selectWorld\x0a\x09\x22mark the World list item as selected and show the infos\x22\x0a\x09\x0a\x09'#World' asSilk attrAt: 'class' put: 'ListItem selected'. \x0a\x09self showInfo",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["attrAt:put:", "asSilk", "showInfo"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv("#World"._asSilk())._attrAt_put_("class","ListItem selected");
$self._showInfo();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectWorld",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Country);

$core.addMethod(
$core.method({
selector: "series",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "series\x0a\x09\x22<Dataseries>\x22\x0a\x09\x0a\x09^series ifNil: [series := self seriesFromParts]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "seriesFromParts"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self.series;
if($1 == null || $1.a$nil){
$self.series=$self._seriesFromParts();
return $self.series;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"series",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Country);

$core.addMethod(
$core.method({
selector: "seriesFromParts",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "seriesFromParts\x0a\x09\x22<Dataseries>\x22\x0a\x09\x0a\x09| firstSeries |\x0a\x09firstSeries := self parts first series.\x0a\x09self parts size = 1 ifTrue: [\x0a\x09\x09^firstSeries].\x0a\x09^self parts allButFirst inject: firstSeries into: [:sum :partSeries | sum + partSeries series]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["series", "first", "parts", "ifTrue:", "=", "size", "inject:into:", "allButFirst", "+"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var firstSeries;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
firstSeries=[$recv($recv([$self._parts()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["parts"]=1
//>>excludeEnd("ctx");
][0])._first())._series()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["series"]=1
//>>excludeEnd("ctx");
][0];
if($core.assert($recv($recv([$self._parts()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["parts"]=2
//>>excludeEnd("ctx");
][0])._size()).__eq((1)))){
return firstSeries;
}
return $recv($recv($self._parts())._allButFirst())._inject_into_(firstSeries,(function(sum,partSeries){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(sum).__plus($recv(partSeries)._series());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({sum:sum,partSeries:partSeries},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"seriesFromParts",{firstSeries:firstSeries})});
//>>excludeEnd("ctx");
}; }),
$globals.Country);


$core.addMethod(
$core.method({
selector: "allFromJHUSeries:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["someSeries"],
source: "allFromJHUSeries: someSeries\x0a\x09\x22<Array of: Country>\x22\x0a\x09\x0a\x09| globalSeries countryList |\x0a\x09globalSeries := someSeries allButFirst inject: someSeries first series into: [:sum :series | sum + series series].\x0a\x09countryList := OrderedCollection with: (self name: 'World' series: globalSeries).\x0a\x09(someSeries groupedBy: #country) keysAndValuesDo: [:countryName :listOfSeries |\x0a\x09\x09countryList add: (listOfSeries size = 1\x0a\x09\x09\x09ifTrue: [self name: countryName series: listOfSeries first series]\x0a\x09\x09\x09ifFalse: [self name: countryName parts: (State allFromJHUSeries: (listOfSeries sort: [:a :b | a > b]))])].\x0a\x09^countryList sort: [:a :b | a > b]",
referencedClasses: ["OrderedCollection", "State"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["inject:into:", "allButFirst", "series", "first", "+", "with:", "name:series:", "keysAndValuesDo:", "groupedBy:", "add:", "ifTrue:ifFalse:", "=", "size", "name:parts:", "allFromJHUSeries:", "sort:", ">"]
}, function ($methodClass){ return function (someSeries){
var self=this,$self=this;
var globalSeries,countryList;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
globalSeries=$recv($recv(someSeries)._allButFirst())._inject_into_([$recv([$recv(someSeries)._first()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["first"]=1
//>>excludeEnd("ctx");
][0])._series()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["series"]=1
//>>excludeEnd("ctx");
][0],(function(sum,series){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(sum).__plus([$recv(series)._series()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["series"]=2
//>>excludeEnd("ctx");
][0]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({sum:sum,series:series},$ctx1,1)});
//>>excludeEnd("ctx");
}));
countryList=$recv($globals.OrderedCollection)._with_([$self._name_series_("World",globalSeries)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["name:series:"]=1
//>>excludeEnd("ctx");
][0]);
$recv($recv(someSeries)._groupedBy_("country"))._keysAndValuesDo_((function(countryName,listOfSeries){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=countryList;
if($core.assert($recv($recv(listOfSeries)._size()).__eq((1)))){
$2=$self._name_series_(countryName,$recv($recv(listOfSeries)._first())._series());
} else {
$2=$self._name_parts_(countryName,$recv($globals.State)._allFromJHUSeries_([$recv(listOfSeries)._sort_((function(a,b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return [$recv(a).__gt(b)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx[">"]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({a:a,b:b},$ctx2,5)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["sort:"]=1
//>>excludeEnd("ctx");
][0]));
}
return $recv($1)._add_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({countryName:countryName,listOfSeries:listOfSeries},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return $recv(countryList)._sort_((function(a,b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(a).__gt(b);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,6)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"allFromJHUSeries:",{someSeries:someSeries,globalSeries:globalSeries,countryList:countryList})});
//>>excludeEnd("ctx");
}; }),
$globals.Country.a$cls);

$core.addMethod(
$core.method({
selector: "allFromRKISeries:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["someSeries"],
source: "allFromRKISeries: someSeries\x0a\x09\x22<Array of: Country>\x22\x0a\x09\x0a\x09|  list |\x0a\x09list := OrderedCollection new.\x0a\x09(someSeries groupedBy: #bundesland) keysAndValuesDo: [:name :listOfSeries |\x0a\x09\x09list add: (listOfSeries size = 1\x0a\x09\x09\x09ifTrue: [self name: name series: listOfSeries first series]\x0a\x09\x09\x09ifFalse: [self name: name parts: (State allFromRKISeries: (listOfSeries sort: [:a :b | a > b]))])].\x0a\x09^list",
referencedClasses: ["OrderedCollection", "State"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "keysAndValuesDo:", "groupedBy:", "add:", "ifTrue:ifFalse:", "=", "size", "name:series:", "series", "first", "name:parts:", "allFromRKISeries:", "sort:", ">"]
}, function ($methodClass){ return function (someSeries){
var self=this,$self=this;
var list;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
list=$recv($globals.OrderedCollection)._new();
$recv($recv(someSeries)._groupedBy_("bundesland"))._keysAndValuesDo_((function(name,listOfSeries){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=list;
if($core.assert($recv($recv(listOfSeries)._size()).__eq((1)))){
$2=$self._name_series_(name,$recv($recv(listOfSeries)._first())._series());
} else {
$2=$self._name_parts_(name,$recv($globals.State)._allFromRKISeries_($recv(listOfSeries)._sort_((function(a,b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(a).__gt(b);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({a:a,b:b},$ctx2,4)});
//>>excludeEnd("ctx");
}))));
}
return $recv($1)._add_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({name:name,listOfSeries:listOfSeries},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return list;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"allFromRKISeries:",{someSeries:someSeries,list:list})});
//>>excludeEnd("ctx");
}; }),
$globals.Country.a$cls);

$core.addMethod(
$core.method({
selector: "allFromUSJHUSeries:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["someSeries"],
source: "allFromUSJHUSeries: someSeries\x0a\x09\x22<Array of: Country>\x22\x0a\x09\x0a\x09| list |\x0a\x09list := OrderedCollection new.\x0a\x09(someSeries groupedBy: #state) keysAndValuesDo: [:name :listOfSeries |\x0a\x09\x09list add: (listOfSeries size = 1\x0a\x09\x09\x09ifTrue: [self name: name series: listOfSeries first series]\x0a\x09\x09\x09ifFalse: [self name: name parts: (State allFromUSJHUSeries: (listOfSeries sort: [:a :b | a > b]))])].\x0a\x09^list sort: [:a :b | a > b]",
referencedClasses: ["OrderedCollection", "State"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "keysAndValuesDo:", "groupedBy:", "add:", "ifTrue:ifFalse:", "=", "size", "name:series:", "series", "first", "name:parts:", "allFromUSJHUSeries:", "sort:", ">"]
}, function ($methodClass){ return function (someSeries){
var self=this,$self=this;
var list;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
list=$recv($globals.OrderedCollection)._new();
$recv($recv(someSeries)._groupedBy_("state"))._keysAndValuesDo_((function(name,listOfSeries){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=list;
if($core.assert($recv($recv(listOfSeries)._size()).__eq((1)))){
$2=$self._name_series_(name,$recv($recv(listOfSeries)._first())._series());
} else {
$2=$self._name_parts_(name,$recv($globals.State)._allFromUSJHUSeries_([$recv(listOfSeries)._sort_((function(a,b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return [$recv(a).__gt(b)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx[">"]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({a:a,b:b},$ctx2,4)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["sort:"]=1
//>>excludeEnd("ctx");
][0]));
}
return $recv($1)._add_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({name:name,listOfSeries:listOfSeries},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $recv(list)._sort_((function(a,b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(a).__gt(b);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,5)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"allFromUSJHUSeries:",{someSeries:someSeries,list:list})});
//>>excludeEnd("ctx");
}; }),
$globals.Country.a$cls);

$core.addMethod(
$core.method({
selector: "name:parts:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "someSeries"],
source: "name: aString parts: someSeries\x0a\x09^self name: aString series: nil properties: nil parts: someSeries",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["name:series:properties:parts:"]
}, function ($methodClass){ return function (aString,someSeries){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._name_series_properties_parts_(aString,nil,nil,someSeries);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"name:parts:",{aString:aString,someSeries:someSeries})});
//>>excludeEnd("ctx");
}; }),
$globals.Country.a$cls);

$core.addMethod(
$core.method({
selector: "name:series:properties:parts:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aDataseries", "aDictionary", "someSeries"],
source: "name: aString series: aDataseries properties: aDictionary parts: someSeries\x0a\x09| inst |\x0a\x09inst := self new.\x0a\x09inst initializeName: aString series: aDataseries properties: aDictionary parts: someSeries.\x0a\x09^inst",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "initializeName:series:properties:parts:"]
}, function ($methodClass){ return function (aString,aDataseries,aDictionary,someSeries){
var self=this,$self=this;
var inst;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
inst=$self._new();
$recv(inst)._initializeName_series_properties_parts_(aString,aDataseries,aDictionary,someSeries);
return inst;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"name:series:properties:parts:",{aString:aString,aDataseries:aDataseries,aDictionary:aDictionary,someSeries:someSeries,inst:inst})});
//>>excludeEnd("ctx");
}; }),
$globals.Country.a$cls);


$core.addClass("State", $globals.GeographicArea, [], "Covid19Model");

$core.addMethod(
$core.method({
selector: "allFromJHUSeries:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["someSeries"],
source: "allFromJHUSeries: someSeries\x0a\x09\x22<Array of: State>\x22\x0a\x09\x0a\x09^someSeries collect: [:series |\x0a\x09\x09self \x0a\x09\x09\x09name: series state\x0a\x09\x09\x09series: series series]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["collect:", "name:series:", "state", "series"]
}, function ($methodClass){ return function (someSeries){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(someSeries)._collect_((function(series){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._name_series_($recv(series)._state(),$recv(series)._series());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({series:series},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"allFromJHUSeries:",{someSeries:someSeries})});
//>>excludeEnd("ctx");
}; }),
$globals.State.a$cls);

$core.addMethod(
$core.method({
selector: "allFromRKISeries:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["someSeries"],
source: "allFromRKISeries: someSeries\x0a\x09\x22<Array of: State>\x22\x0a\x09\x0a\x09^someSeries collect: [:series |\x0a\x09\x09self \x0a\x09\x09\x09name: series landkreis\x0a\x09\x09\x09series: series series]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["collect:", "name:series:", "landkreis", "series"]
}, function ($methodClass){ return function (someSeries){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(someSeries)._collect_((function(series){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._name_series_($recv(series)._landkreis(),$recv(series)._series());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({series:series},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"allFromRKISeries:",{someSeries:someSeries})});
//>>excludeEnd("ctx");
}; }),
$globals.State.a$cls);

$core.addMethod(
$core.method({
selector: "allFromUSJHUSeries:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["someSeries"],
source: "allFromUSJHUSeries: someSeries\x0a\x09\x22<Array of: State>\x22\x0a\x09\x0a\x09^someSeries collect: [:series |\x0a\x09\x09self \x0a\x09\x09\x09name: series county\x0a\x09\x09\x09series: series series\x0a\x09\x09\x09properties: (Dictionary\x0a\x09\x09\x09\x09with: #uid -> series uid \x0a\x09\x09\x09\x09with: #population -> series population)]",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["collect:", "name:series:properties:", "county", "series", "with:with:", "->", "uid", "population"]
}, function ($methodClass){ return function (someSeries){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(someSeries)._collect_((function(series){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._name_series_properties_($recv(series)._county(),$recv(series)._series(),$recv($globals.Dictionary)._with_with_(["uid".__minus_gt($recv(series)._uid())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["->"]=1
//>>excludeEnd("ctx");
][0],"population".__minus_gt($recv(series)._population())));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({series:series},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"allFromUSJHUSeries:",{someSeries:someSeries})});
//>>excludeEnd("ctx");
}; }),
$globals.State.a$cls);

});
