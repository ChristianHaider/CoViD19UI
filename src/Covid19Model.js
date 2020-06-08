define(["amber/boot", "require", "amber/core/Kernel-Announcements", "amber/core/Kernel-Collections", "amber/core/Kernel-Objects", "amber/core/Kernel-Tests"], function($boot,requirejs){"use strict";
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("Covid19Model");
$pkg.context = function () { return {appTimestamp:appTimestamp}; };
$pkg.imports = ["appTimestamp=app/timestamp"];
//>>excludeStart("imports", pragmas.excludeImports);
var appTimestamp;
$pkg.isReady = new Promise(function (resolve, reject) { requirejs(["app/timestamp"], function ($1) {appTimestamp=$1; resolve();}, reject); });
//>>excludeEnd("imports");
$pkg.transport = {"type":"amd","amdNamespace":"amber-covid19view"};

$core.addClass("CaseCount", $globals.Object, "Covid19Model");
$core.setSlots($globals.CaseCount, ["confirmed", "deaths", "recovered"]);
$core.addMethod(
$core.method({
selector: "+",
protocol: "arithmetic",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCaseCount"],
source: "+ aCaseCount\x0a\x09\x22<CaseCount>\x22\x0a\x09\x0a\x09^self class \x0a\x09\x09confirmed: self confirmed + aCaseCount confirmed\x0a\x09\x09deaths: self deaths + aCaseCount deaths\x0a\x09\x09recovered: self recovered + aCaseCount recovered",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["confirmed:deaths:recovered:", "class", "+", "confirmed", "deaths", "recovered"]
}, function ($methodClass){ return function (aCaseCount){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._class())._confirmed_deaths_recovered_([$recv([$self._confirmed()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["confirmed"]=1
//>>excludeEnd("ctx");
][0]).__plus($recv(aCaseCount)._confirmed())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["+"]=1
//>>excludeEnd("ctx");
][0],[$recv([$self._deaths()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["deaths"]=1
//>>excludeEnd("ctx");
][0]).__plus($recv(aCaseCount)._deaths())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["+"]=2
//>>excludeEnd("ctx");
][0],$recv([$self._recovered()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["recovered"]=1
//>>excludeEnd("ctx");
][0]).__plus($recv(aCaseCount)._recovered()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"+",{aCaseCount:aCaseCount})});
//>>excludeEnd("ctx");
}; }),
$globals.CaseCount);

$core.addMethod(
$core.method({
selector: "-",
protocol: "arithmetic",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCaseCount"],
source: "- aCaseCount\x0a\x09\x22<CaseCount>\x22\x0a\x09\x0a\x09^self class \x0a\x09\x09confirmed: self confirmed - aCaseCount confirmed\x0a\x09\x09deaths: self deaths - aCaseCount deaths\x0a\x09\x09recovered: self recovered - aCaseCount recovered",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["confirmed:deaths:recovered:", "class", "-", "confirmed", "deaths", "recovered"]
}, function ($methodClass){ return function (aCaseCount){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._class())._confirmed_deaths_recovered_([$recv([$self._confirmed()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["confirmed"]=1
//>>excludeEnd("ctx");
][0]).__minus($recv(aCaseCount)._confirmed())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["-"]=1
//>>excludeEnd("ctx");
][0],[$recv([$self._deaths()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["deaths"]=1
//>>excludeEnd("ctx");
][0]).__minus($recv(aCaseCount)._deaths())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["-"]=2
//>>excludeEnd("ctx");
][0],$recv([$self._recovered()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["recovered"]=1
//>>excludeEnd("ctx");
][0]).__minus($recv(aCaseCount)._recovered()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"-",{aCaseCount:aCaseCount})});
//>>excludeEnd("ctx");
}; }),
$globals.CaseCount);

$core.addMethod(
$core.method({
selector: "aspects",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "aspects\x0a\x09\x22<Array of: Symbol>\x22\x0a\x09\x0a\x09^#(#confirmed #deaths #recovered)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return ["confirmed", "deaths", "recovered"];

}; }),
$globals.CaseCount);

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
$globals.CaseCount);

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
$globals.CaseCount);

$core.addMethod(
$core.method({
selector: "initializeConfirmed:deaths:recovered:",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aConfirmedInteger", "aDeathsInteger", "aRecoveredInteger"],
source: "initializeConfirmed: aConfirmedInteger deaths: aDeathsInteger recovered: aRecoveredInteger\x0a\x09confirmed := aConfirmedInteger.\x0a\x09deaths := aDeathsInteger.\x0a\x09recovered := aRecoveredInteger",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aConfirmedInteger,aDeathsInteger,aRecoveredInteger){
var self=this,$self=this;
$self.confirmed=aConfirmedInteger;
$self.deaths=aDeathsInteger;
$self.recovered=aRecoveredInteger;
return self;

}; }),
$globals.CaseCount);

$core.addMethod(
$core.method({
selector: "recovered",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "recovered\x0a\x09\x22<Integer>\x22\x0a\x09\x0a\x09^recovered",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.recovered;

}; }),
$globals.CaseCount);


$core.addMethod(
$core.method({
selector: "confirmed:deaths:recovered:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aConfirmedInteger", "aDeathsInteger", "aRecoveredInteger"],
source: "confirmed: aConfirmedInteger deaths: aDeathsInteger recovered: aRecoveredInteger\x0a\x09| inst |\x0a\x09inst := self new.\x0a\x09inst initializeConfirmed: aConfirmedInteger deaths: aDeathsInteger recovered: aRecoveredInteger.\x0a\x09^inst",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "initializeConfirmed:deaths:recovered:"]
}, function ($methodClass){ return function (aConfirmedInteger,aDeathsInteger,aRecoveredInteger){
var self=this,$self=this;
var inst;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
inst=$self._new();
$recv(inst)._initializeConfirmed_deaths_recovered_(aConfirmedInteger,aDeathsInteger,aRecoveredInteger);
return inst;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"confirmed:deaths:recovered:",{aConfirmedInteger:aConfirmedInteger,aDeathsInteger:aDeathsInteger,aRecoveredInteger:aRecoveredInteger,inst:inst})});
//>>excludeEnd("ctx");
}; }),
$globals.CaseCount.a$cls);

$core.addMethod(
$core.method({
selector: "fromJson:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJson"],
source: "fromJson: aJson\x0a\x09^self \x0a\x09\x09confirmed: (aJson at: #c ifAbsent: [0])\x0a\x09\x09deaths: (aJson at: #d ifAbsent: [0])\x0a\x09\x09recovered: (aJson at: #r ifAbsent: [0])",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["confirmed:deaths:recovered:", "at:ifAbsent:"]
}, function ($methodClass){ return function (aJson){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._confirmed_deaths_recovered_([$recv(aJson)._at_ifAbsent_("c",(function(){
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
$globals.CaseCount.a$cls);

$core.addMethod(
$core.method({
selector: "zero",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "zero\x0a\x09^self confirmed: 0 deaths: 0 recovered: 0",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["confirmed:deaths:recovered:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._confirmed_deaths_recovered_((0),(0),(0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"zero",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CaseCount.a$cls);


$core.addClass("CoViD19Application", $globals.Object, "Covid19Model");
$core.setSlots($globals.CoViD19Application, ["world", "sources", "about"]);
$core.addMethod(
$core.method({
selector: "about",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "about\x0a\x09\x22<Dictionary>\x0a\x09metadata about the receiver\x22\x0a\x09\x0a\x09^about ifNil: [about := Dictionary new]",
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
$1=$self.about;
if($1 == null || $1.a$nil){
$self.about=$recv($globals.Dictionary)._new();
return $self.about;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"about",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CoViD19Application);

$core.addMethod(
$core.method({
selector: "getData",
protocol: "data actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "getData\x09\x0a\x09self world load: (self sources at: 'JHU') for: self doing: [:worldRoot | \x0a\x09\x09(worldRoot partNamed: 'US') load: (self sources at: 'JHUUS') for: self doing: #resetPopulation.\x0a\x09\x09(worldRoot partNamed: 'Germany') load: (self sources at: 'RKI') for: self doing: [:root | ]]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["load:for:doing:", "world", "at:", "sources", "partNamed:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[$recv($self._world())._load_for_doing_([$recv([$self._sources()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["sources"]=1
//>>excludeEnd("ctx");
][0])._at_("JHU")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:"]=1
//>>excludeEnd("ctx");
][0],self,(function(worldRoot){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
[$recv([$recv(worldRoot)._partNamed_("US")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["partNamed:"]=1
//>>excludeEnd("ctx");
][0])._load_for_doing_([$recv([$self._sources()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["sources"]=2
//>>excludeEnd("ctx");
][0])._at_("JHUUS")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["at:"]=2
//>>excludeEnd("ctx");
][0],self,"resetPopulation")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["load:for:doing:"]=2
//>>excludeEnd("ctx");
][0];
return $recv($recv(worldRoot)._partNamed_("Germany"))._load_for_doing_($recv($self._sources())._at_("RKI"),self,(function(root){

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({worldRoot:worldRoot},$ctx1,1)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["load:for:doing:"]=1
//>>excludeEnd("ctx");
][0];
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"getData",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CoViD19Application);

$core.addMethod(
$core.method({
selector: "initialSources",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialSources\x0a\x09^Dictionary\x0a\x09\x09with: 'JHU' -> (Datasource id: 'JHU' url: 'CoViD-19_JHU.json' dataClass: JHUDatapoint)\x0a\x09\x09with: 'JHUUS' -> (Datasource id: 'JHUUS' url: 'CoViD-19_US_JHU.json' dataClass: JHUUSDatapoint)\x0a\x09\x09with: 'RKI' -> (Datasource id: 'RKI' url: 'CoViD-19_RKI.json' dataClass: RKIDatapoint)",
referencedClasses: ["Dictionary", "Datasource", "JHUDatapoint", "JHUUSDatapoint", "RKIDatapoint"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["with:with:with:", "->", "id:url:dataClass:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Dictionary)._with_with_with_(["JHU".__minus_gt([$recv($globals.Datasource)._id_url_dataClass_("JHU","CoViD-19_JHU.json",$globals.JHUDatapoint)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["id:url:dataClass:"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=1
//>>excludeEnd("ctx");
][0],["JHUUS".__minus_gt([$recv($globals.Datasource)._id_url_dataClass_("JHUUS","CoViD-19_US_JHU.json",$globals.JHUUSDatapoint)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["id:url:dataClass:"]=2
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=2
//>>excludeEnd("ctx");
][0],"RKI".__minus_gt($recv($globals.Datasource)._id_url_dataClass_("RKI","CoViD-19_RKI.json",$globals.RKIDatapoint)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialSources",{})});
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
selector: "pickMetadataFrom:",
protocol: "data actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDictionary"],
source: "pickMetadataFrom: aDictionary\x0a\x09\x22take infos about the application itself from aDictionary.\x0a\x09The data come from the first JHU data response\x22\x0a\x09\x0a\x09aDictionary at: #softwareName ifPresent: [:string | self about at: #DataserverName put: string].\x0a\x09aDictionary at: #softwareVersion ifPresent: [:string | self about at: #DataserverVersion put: string].\x0a\x09aDictionary at: #softwareTimestamp ifPresent: [:string | self about at: #DataserverTimestamp put: (Date fromString: string)].\x0a\x09aDictionary at: #modificationDate ifPresent: [:string | self about at: #updated put: (Date fromString: string)]",
referencedClasses: ["Date"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:ifPresent:", "at:put:", "about", "fromString:"]
}, function ($methodClass){ return function (aDictionary){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[$recv(aDictionary)._at_ifPresent_("softwareName",(function(string){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return [$recv([$self._about()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["about"]=1
//>>excludeEnd("ctx");
][0])._at_put_("DataserverName",string)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["at:put:"]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({string:string},$ctx1,1)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:ifPresent:"]=1
//>>excludeEnd("ctx");
][0];
[$recv(aDictionary)._at_ifPresent_("softwareVersion",(function(string){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return [$recv([$self._about()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["about"]=2
//>>excludeEnd("ctx");
][0])._at_put_("DataserverVersion",string)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["at:put:"]=2
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({string:string},$ctx1,2)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:ifPresent:"]=2
//>>excludeEnd("ctx");
][0];
[$recv(aDictionary)._at_ifPresent_("softwareTimestamp",(function(string){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return [$recv([$self._about()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["about"]=3
//>>excludeEnd("ctx");
][0])._at_put_("DataserverTimestamp",[$recv($globals.Date)._fromString_(string)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["fromString:"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["at:put:"]=3
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({string:string},$ctx1,3)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:ifPresent:"]=3
//>>excludeEnd("ctx");
][0];
$recv(aDictionary)._at_ifPresent_("modificationDate",(function(string){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self._about())._at_put_("updated",$recv($globals.Date)._fromString_(string));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({string:string},$ctx1,4)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"pickMetadataFrom:",{aDictionary:aDictionary})});
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
source: "serverModificationDate\x0a\x09\x22<Date>\x22\x0a\x09\x0a\x09^self about at: #DataserverTimestamp ifAbsent: [Date now]",
referencedClasses: ["Date"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:ifAbsent:", "about", "now"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._about())._at_ifAbsent_("DataserverTimestamp",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($globals.Date)._now();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
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
source: "serverName\x0a\x09\x22<String>\x22\x0a\x09\x0a\x09^self about at: #DataserverName ifAbsent: ['(no data)']",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:ifAbsent:", "about"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._about())._at_ifAbsent_("DataserverName",(function(){
return "(no data)";

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
source: "serverVersion\x0a\x09\x22<String>\x22\x0a\x09\x0a\x09^self about at: #DataserverVersion ifAbsent: ['']",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:ifAbsent:", "about"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._about())._at_ifAbsent_("DataserverVersion",(function(){
return "";

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"serverVersion",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CoViD19Application);

$core.addMethod(
$core.method({
selector: "sources",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sources\x0a\x09\x22<Dictionary key: String value: Datasource>\x22\x0a\x09\x0a\x09^sources ifNil: [sources := self initialSources]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "initialSources"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self.sources;
if($1 == null || $1.a$nil){
$self.sources=$self._initialSources();
return $self.sources;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sources",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CoViD19Application);

$core.addMethod(
$core.method({
selector: "world",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "world\x0a\x09\x22<Territory>\x22\x0a\x09\x0a\x09^world ifNil: [world := Territory name: 'World' about: nil parts: nil datasets: nil]",
referencedClasses: ["Territory"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "name:about:parts:datasets:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self.world;
if($1 == null || $1.a$nil){
$self.world=$recv($globals.Territory)._name_about_parts_datasets_("World",nil,nil,nil);
return $self.world;
} else {
return $1;
}
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


$core.addClass("ComponentAnnouncement", $globals.SystemAnnouncement, "Covid19Model");


$core.addClass("AppearanceChanged", $globals.ComponentAnnouncement, "Covid19Model");


$core.addClass("StructureChanged", $globals.ComponentAnnouncement, "Covid19Model");


$core.addClass("Datapoint", $globals.Object, "Covid19Model");
$core.setSlots($globals.Datapoint, ["date", "confirmed", "deaths"]);
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
selector: "active",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "active\x0a\x09\x22<Integer>\x22\x0a\x0a\x09^self confirmed - self deaths",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["-", "confirmed", "deaths"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._confirmed()).__minus($self._deaths());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"active",{})});
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
source: "maxValue\x0a\x09\x22<Integer>\x22\x0a\x09\x0a\x09^self aspects allButFirst inject: (self perform: self aspects first) into: [:max :aspect | \x0a\x09\x09max max: (self perform:  aspect)]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["inject:into:", "allButFirst", "aspects", "perform:", "first", "max:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv([$self._aspects()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["aspects"]=1
//>>excludeEnd("ctx");
][0])._allButFirst())._inject_into_([$self._perform_($recv($self._aspects())._first())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["perform:"]=1
//>>excludeEnd("ctx");
][0],(function(max,aspect){
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
source: "maxValueForAspects: someAspects\x0a\x09\x22<Integer>\x22\x0a\x09\x0a\x09someAspects isEmpty ifTrue: [\x0a\x09\x09^self maxValue].\x0a\x09^someAspects allButFirst inject: (self perform: someAspects first) into: [:max :aspect | max max: (self perform:  aspect)]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "isEmpty", "maxValue", "inject:into:", "allButFirst", "perform:", "first", "max:"]
}, function ($methodClass){ return function (someAspects){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert($recv(someAspects)._isEmpty())){
return $self._maxValue();
}
return $recv($recv(someAspects)._allButFirst())._inject_into_([$self._perform_($recv(someAspects)._first())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["perform:"]=1
//>>excludeEnd("ctx");
][0],(function(max,aspect){
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
selector: "minValue",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "minValue\x0a\x09\x22<Integer>\x22\x0a\x09\x0a\x09^self aspects allButFirst inject: (self perform: self aspects first) into: [:min :aspect | \x0a\x09\x09min min: (self perform:  aspect)]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["inject:into:", "allButFirst", "aspects", "perform:", "first", "min:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv([$self._aspects()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["aspects"]=1
//>>excludeEnd("ctx");
][0])._allButFirst())._inject_into_([$self._perform_($recv($self._aspects())._first())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["perform:"]=1
//>>excludeEnd("ctx");
][0],(function(min,aspect){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(min)._min_($self._perform_(aspect));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({min:min,aspect:aspect},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"minValue",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Datapoint);

$core.addMethod(
$core.method({
selector: "minValueForAspects:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["someAspects"],
source: "minValueForAspects: someAspects\x0a\x09\x22<Integer>\x22\x0a\x09\x0a\x09someAspects isEmpty ifTrue: [\x0a\x09\x09^self minValue].\x0a\x09^someAspects allButFirst inject: (self perform: someAspects first) into: [:min :aspect | min min: (self perform:  aspect)]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "isEmpty", "minValue", "inject:into:", "allButFirst", "perform:", "first", "min:"]
}, function ($methodClass){ return function (someAspects){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert($recv(someAspects)._isEmpty())){
return $self._minValue();
}
return $recv($recv(someAspects)._allButFirst())._inject_into_([$self._perform_($recv(someAspects)._first())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["perform:"]=1
//>>excludeEnd("ctx");
][0],(function(min,aspect){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(min)._min_($self._perform_(aspect));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({min:min,aspect:aspect},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"minValueForAspects:",{someAspects:someAspects})});
//>>excludeEnd("ctx");
}; }),
$globals.Datapoint);

$core.addMethod(
$core.method({
selector: "numbers",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "numbers\x0a\x09\x22<Array of: Number>\x22\x0a\x09\x0a\x09^self aspects collect: [:selector | self perform: selector]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["collect:", "aspects", "perform:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._aspects())._collect_((function(selector){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._perform_(selector);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({selector:selector},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"numbers",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Datapoint);

$core.addMethod(
$core.method({
selector: "positive",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "positive\x0a\x09^self numbers allSatisfy: #positive",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["allSatisfy:", "numbers"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._numbers())._allSatisfy_("positive");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"positive",{})});
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
selector: "secondaryAspects",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "secondaryAspects\x0a\x09\x22<Array of: Symbol>\x22\x0a\x09\x0a\x09^#()",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return [];

}; }),
$globals.Datapoint);

$core.addMethod(
$core.method({
selector: "tertiaryAspects",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tertiaryAspects\x0a\x09\x22<Array of: Symbol>\x22\x0a\x09\x0a\x09^#()",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return [];

}; }),
$globals.Datapoint);


$core.addMethod(
$core.method({
selector: "dataLabel",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dataLabel\x0a\x09\x22<String>\x0a\x09user facing string for selecting the receiver\x22\x0a\x09\x0a\x09^self subclassResponsibility",
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
}, function($ctx1) {$ctx1.fill(self,"dataLabel",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Datapoint.a$cls);

$core.addMethod(
$core.method({
selector: "datasetFrom:json:meta:",
protocol: "services",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSourceString", "aJson", "aDictionary"],
source: "datasetFrom: aSourceString json: aJson meta: aDictionary\x0a\x09\x22<Dataset>\x22\x0a\x09\x0a\x09^Dataset \x0a\x09\x09source: aSourceString\x0a\x09\x09meta: aDictionary\x0a\x09\x09series: (aJson series collect: [:json | self fromJson: json])",
referencedClasses: ["Dataset"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["source:meta:series:", "collect:", "series", "fromJson:"]
}, function ($methodClass){ return function (aSourceString,aJson,aDictionary){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Dataset)._source_meta_series_(aSourceString,aDictionary,$recv($recv(aJson)._series())._collect_((function(json){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._fromJson_(json);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({json:json},$ctx1,1)});
//>>excludeEnd("ctx");
})));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"datasetFrom:json:meta:",{aSourceString:aSourceString,aJson:aJson,aDictionary:aDictionary})});
//>>excludeEnd("ctx");
}; }),
$globals.Datapoint.a$cls);

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
selector: "example",
protocol: "instances",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "example\x0a\x09\x22<Datapoint>\x22\x0a\x09\x0a\x09^self subclassResponsibility",
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
}, function($ctx1) {$ctx1.fill(self,"example",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Datapoint.a$cls);

$core.addMethod(
$core.method({
selector: "firstLevelSelector",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "firstLevelSelector\x0a\x09\x22<Symbol>\x0a\x09selector in a json holding the name of the top level\x22\x0a\x09\x0a\x09^self subclassResponsibility",
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
}, function($ctx1) {$ctx1.fill(self,"firstLevelSelector",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Datapoint.a$cls);

$core.addMethod(
$core.method({
selector: "firstLevelTerritoryAboutFromJson:",
protocol: "services",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJson"],
source: "firstLevelTerritoryAboutFromJson: aJson\x0a\x09^self territoryAboutFromJson: aJson",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["territoryAboutFromJson:"]
}, function ($methodClass){ return function (aJson){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._territoryAboutFromJson_(aJson);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"firstLevelTerritoryAboutFromJson:",{aJson:aJson})});
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
selector: "secondLevelSelector",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "secondLevelSelector\x0a\x09\x22<Symbol>\x0a\x09selector in a json holding the name of the second level\x22\x0a\x09\x0a\x09^self subclassResponsibility",
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
}, function($ctx1) {$ctx1.fill(self,"secondLevelSelector",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Datapoint.a$cls);

$core.addMethod(
$core.method({
selector: "secondLevelTerritoryAboutFromJson:",
protocol: "services",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJson"],
source: "secondLevelTerritoryAboutFromJson: aJson\x0a\x09^self territoryAboutFromJson: aJson",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["territoryAboutFromJson:"]
}, function ($methodClass){ return function (aJson){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._territoryAboutFromJson_(aJson);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"secondLevelTerritoryAboutFromJson:",{aJson:aJson})});
//>>excludeEnd("ctx");
}; }),
$globals.Datapoint.a$cls);

$core.addMethod(
$core.method({
selector: "territoriesFrom:json:",
protocol: "services",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSourceString", "aJson"],
source: "territoriesFrom: aSourceString json: aJson\x0a\x09\x22<Array of: Territory>\x22\x0a\x09\x0a\x09| meta territories |\x0a\x09meta := aJson meta.\x0a\x09territories := OrderedCollection new.\x0a\x09(aJson data groupedBy: self firstLevelSelector) keysAndValuesDo: [:name :jsons |\x0a\x09\x09territories add: (jsons size = 1 \x0a\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09self territory: name from: aSourceString json: jsons first meta: meta]\x0a\x09\x09\x09ifFalse: [\x0a\x09\x09\x09\x09self \x0a\x09\x09\x09\x09\x09territory: name \x0a\x09\x09\x09\x09\x09parts: (jsons collect: [:json |\x0a\x09\x09\x09\x09\x09\x09self territory: (json at: self secondLevelSelector) from: aSourceString json: json meta: meta])\x0a\x09\x09\x09\x09\x09fromJson: jsons first])].\x0a\x09^territories",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["meta", "new", "keysAndValuesDo:", "groupedBy:", "data", "firstLevelSelector", "add:", "ifTrue:ifFalse:", "=", "size", "territory:from:json:meta:", "first", "territory:parts:fromJson:", "collect:", "at:", "secondLevelSelector"]
}, function ($methodClass){ return function (aSourceString,aJson){
var self=this,$self=this;
var meta,territories;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
meta=$recv(aJson)._meta();
territories=$recv($globals.OrderedCollection)._new();
$recv($recv($recv(aJson)._data())._groupedBy_($self._firstLevelSelector()))._keysAndValuesDo_((function(name,jsons){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=territories;
if($core.assert($recv($recv(jsons)._size()).__eq((1)))){
$2=[$self._territory_from_json_meta_(name,aSourceString,[$recv(jsons)._first()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["first"]=1
//>>excludeEnd("ctx");
][0],meta)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["territory:from:json:meta:"]=1
//>>excludeEnd("ctx");
][0];
} else {
$2=$self._territory_parts_fromJson_(name,$recv(jsons)._collect_((function(json){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $self._territory_from_json_meta_($recv(json)._at_($self._secondLevelSelector()),aSourceString,json,meta);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({json:json},$ctx2,4)});
//>>excludeEnd("ctx");
})),$recv(jsons)._first());
}
return $recv($1)._add_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({name:name,jsons:jsons},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return territories;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"territoriesFrom:json:",{aSourceString:aSourceString,aJson:aJson,meta:meta,territories:territories})});
//>>excludeEnd("ctx");
}; }),
$globals.Datapoint.a$cls);

$core.addMethod(
$core.method({
selector: "territory:from:json:meta:",
protocol: "services",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aSourceString", "aJson", "aDictionary"],
source: "territory: aString from: aSourceString json: aJson meta: aDictionary\x0a\x09\x22<Territory>\x22\x0a\x09\x0a\x09^Territory \x0a\x09\x09name: aString \x0a\x09\x09about: (self secondLevelTerritoryAboutFromJson: aJson)\x0a\x09\x09dataset: (self datasetFrom: aSourceString json: aJson meta: aDictionary)",
referencedClasses: ["Territory"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["name:about:dataset:", "secondLevelTerritoryAboutFromJson:", "datasetFrom:json:meta:"]
}, function ($methodClass){ return function (aString,aSourceString,aJson,aDictionary){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Territory)._name_about_dataset_(aString,$self._secondLevelTerritoryAboutFromJson_(aJson),$self._datasetFrom_json_meta_(aSourceString,aJson,aDictionary));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"territory:from:json:meta:",{aString:aString,aSourceString:aSourceString,aJson:aJson,aDictionary:aDictionary})});
//>>excludeEnd("ctx");
}; }),
$globals.Datapoint.a$cls);

$core.addMethod(
$core.method({
selector: "territory:parts:fromJson:",
protocol: "services",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "someTerritories", "aJson"],
source: "territory: aString parts: someTerritories fromJson: aJson\x0a\x09\x22<Territory>\x22\x0a\x09\x0a\x09^Territory \x0a\x09\x09name: aString \x0a\x09\x09about: (self firstLevelTerritoryAboutFromJson: aJson)\x0a\x09\x09parts: someTerritories",
referencedClasses: ["Territory"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["name:about:parts:", "firstLevelTerritoryAboutFromJson:"]
}, function ($methodClass){ return function (aString,someTerritories,aJson){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Territory)._name_about_parts_(aString,$self._firstLevelTerritoryAboutFromJson_(aJson),someTerritories);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"territory:parts:fromJson:",{aString:aString,someTerritories:someTerritories,aJson:aJson})});
//>>excludeEnd("ctx");
}; }),
$globals.Datapoint.a$cls);

$core.addMethod(
$core.method({
selector: "territoryAboutFromJson:",
protocol: "services",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJson"],
source: "territoryAboutFromJson: aJson\x0a\x09^Dictionary new",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new"]
}, function ($methodClass){ return function (aJson){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Dictionary)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"territoryAboutFromJson:",{aJson:aJson})});
//>>excludeEnd("ctx");
}; }),
$globals.Datapoint.a$cls);

$core.addMethod(
$core.method({
selector: "zero",
protocol: "instances",
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


$core.addClass("JHUDatapoint", $globals.Datapoint, "Covid19Model");
$core.setSlots($globals.JHUDatapoint, ["recovered"]);
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
selector: "active",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "active\x0a\x09^self confirmed - self recovered - self deaths",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["-", "confirmed", "recovered", "deaths"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return [$recv($recv($self._confirmed()).__minus($self._recovered())).__minus($self._deaths())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["-"]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"active",{})});
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
source: "aspects\x0a\x09^#(#confirmed #recovered #deaths #active)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return ["confirmed", "recovered", "deaths", "active"];

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
selector: "dataLabel",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dataLabel\x0a\x09^'World data'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return "World data";

}; }),
$globals.JHUDatapoint.a$cls);

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
selector: "example",
protocol: "instances",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "example\x0a\x09\x22JHUDatapoint example\x22\x0a\x09\x0a\x09^self \x0a\x09\x09date: (Date d: 11 m: 4 y: 2020) \x0a\x09\x09confirmed: 124908\x0a\x09\x09deaths: 2736\x0a\x09\x09recovered: 57400",
referencedClasses: ["Date"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["date:confirmed:deaths:recovered:", "d:m:y:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._date_confirmed_deaths_recovered_($recv($globals.Date)._d_m_y_((11),(4),(2020)),(124908),(2736),(57400));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"example",{})});
//>>excludeEnd("ctx");
}; }),
$globals.JHUDatapoint.a$cls);

$core.addMethod(
$core.method({
selector: "firstLevelSelector",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "firstLevelSelector\x0a\x09^#country",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return "country";

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
selector: "secondLevelSelector",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "secondLevelSelector\x0a\x09^#state",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return "state";

}; }),
$globals.JHUDatapoint.a$cls);

$core.addMethod(
$core.method({
selector: "zero",
protocol: "instances",
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


$core.addClass("JHUUSDatapoint", $globals.Datapoint, "Covid19Model");
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
$globals.JHUUSDatapoint);

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
$globals.JHUUSDatapoint);


$core.addMethod(
$core.method({
selector: "dataLabel",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dataLabel\x0a\x09^'US data'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return "US data";

}; }),
$globals.JHUUSDatapoint.a$cls);

$core.addMethod(
$core.method({
selector: "example",
protocol: "instances",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "example\x0a\x09\x22JHUUSDatapoint example\x22\x0a\x09\x0a\x09^self \x0a\x09\x09date: (Date d: 11 m: 4 y: 2020) \x0a\x09\x09confirmed: 181026\x0a\x09\x09deaths: 8627",
referencedClasses: ["Date"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["date:confirmed:deaths:", "d:m:y:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._date_confirmed_deaths_($recv($globals.Date)._d_m_y_((11),(4),(2020)),(181026),(8627));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"example",{})});
//>>excludeEnd("ctx");
}; }),
$globals.JHUUSDatapoint.a$cls);

$core.addMethod(
$core.method({
selector: "firstLevelSelector",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "firstLevelSelector\x0a\x09^#state",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return "state";

}; }),
$globals.JHUUSDatapoint.a$cls);

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
$globals.JHUUSDatapoint.a$cls);

$core.addMethod(
$core.method({
selector: "secondLevelSelector",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "secondLevelSelector\x0a\x09^#county",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return "county";

}; }),
$globals.JHUUSDatapoint.a$cls);

$core.addMethod(
$core.method({
selector: "territoryAboutFromJson:",
protocol: "services",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJson"],
source: "territoryAboutFromJson: aJson\x0a\x09^#{#uid -> aJson uid. \x0a\x09\x09#population -> aJson population}",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["uid", "population"]
}, function ($methodClass){ return function (aJson){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $globals.HashedCollection._newFromPairs_(["uid",$recv(aJson)._uid(),"population",$recv(aJson)._population()]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"territoryAboutFromJson:",{aJson:aJson})});
//>>excludeEnd("ctx");
}; }),
$globals.JHUUSDatapoint.a$cls);


$core.addClass("RKIDatapoint", $globals.Datapoint, "Covid19Model");
$core.setSlots($globals.RKIDatapoint, ["byAge", "caseCount"]);
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.RKIDatapoint.comment="Datapoint for RKI data\x0a\x0aA dictionary `byAge` holds the cases by age group in another dictionary keyed by sex.\x0a\x0a`caseCount` is a cache for thew total numbers";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "+",
protocol: "arithmetic",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDatapoint"],
source: "+ aDatapoint\x0a\x09\x22<RKIDatapoint>\x22\x0a\x09\x0a\x09| newByAge |\x0a\x09self date = aDatapoint date ifFalse: [\x0a\x09\x09self error: 'the dates are not the same'].\x0a\x09newByAge := self byAge copy.\x0a\x09aDatapoint byAge keysAndValuesDo: [:age :sexDict |\x0a\x09\x09| newSexDict |\x0a\x09\x09newSexDict := (newByAge at: age ifAbsent: [Dictionary new]) copy.\x0a\x09\x09sexDict keysAndValuesDo: [:sex :count |\x0a\x09\x09\x09newSexDict at: sex put: (newSexDict at: sex ifAbsent: [CaseCount zero]) + count].\x0a\x09\x09newByAge at: age put: newSexDict].\x0a\x09^self class date: self date byAge: newByAge",
referencedClasses: ["Dictionary", "CaseCount"],
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
return $recv($globals.CaseCount)._zero();
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
selector: "active",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "active\x0a\x09^self confirmed - self recovered - self deaths",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["-", "confirmed", "recovered", "deaths"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return [$recv($recv($self._confirmed()).__minus($self._recovered())).__minus($self._deaths())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["-"]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"active",{})});
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
selector: "aspects",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "aspects\x0a\x09^#(#confirmed #recovered #deaths #active)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return ["confirmed", "recovered", "deaths", "active"];

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
selector: "caseCount",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "caseCount\x0a\x09\x22<CaseCount>\x22\x0a\x09\x0a\x09^caseCount ifNil: [\x0a\x09\x09caseCount := self byAge values inject: CaseCount zero into: [:sum :sexDict |\x0a\x09\x09\x09sexDict values  inject: sum into: [:all :count | \x0a\x09\x09\x09\x09all + count]]]",
referencedClasses: ["CaseCount"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "inject:into:", "values", "byAge", "zero", "+"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self.caseCount;
if($1 == null || $1.a$nil){
$self.caseCount=[$recv([$recv($self._byAge())._values()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["values"]=1
//>>excludeEnd("ctx");
][0])._inject_into_($recv($globals.CaseCount)._zero(),(function(sum,sexDict){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(sexDict)._values())._inject_into_(sum,(function(all,count){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(all).__plus(count);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({all:all,count:count},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({sum:sum,sexDict:sexDict},$ctx1,2)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["inject:into:"]=1
//>>excludeEnd("ctx");
][0];
return $self.caseCount;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"caseCount",{})});
//>>excludeEnd("ctx");
}; }),
$globals.RKIDatapoint);

$core.addMethod(
$core.method({
selector: "changeFrom:",
protocol: "arithmetic",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDatapoint"],
source: "changeFrom: aDatapoint\x0a\x09| newByAge |\x0a\x09newByAge := self byAge copy.\x0a\x09aDatapoint byAge keysAndValuesDo: [:age :sexDict |\x0a\x09\x09| newSexDict |\x0a\x09\x09newSexDict := (newByAge at: age ifAbsent: [Dictionary new]) copy.\x0a\x09\x09sexDict keysAndValuesDo: [:sex :count |\x0a\x09\x09\x09newSexDict at: sex put: (newSexDict at: sex ifAbsent: [CaseCount zero]) - count].\x0a\x09\x09newByAge at: age put: newSexDict].\x0a\x09^self class date: self date byAge: newByAge",
referencedClasses: ["Dictionary", "CaseCount"],
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
return $recv($globals.CaseCount)._zero();
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
source: "confirmed\x0a\x09^self caseCount confirmed",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["confirmed", "caseCount"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._caseCount())._confirmed();
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
selector: "deaths",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "deaths\x0a\x09^self caseCount deaths",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["deaths", "caseCount"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._caseCount())._deaths();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"deaths",{})});
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
selector: "recovered",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "recovered\x0a\x09^self caseCount recovered",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["recovered", "caseCount"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._caseCount())._recovered();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"recovered",{})});
//>>excludeEnd("ctx");
}; }),
$globals.RKIDatapoint);

$core.addMethod(
$core.method({
selector: "secondaryAspects",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "secondaryAspects\x0a\x09^self byAge keys sorted",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["sorted", "keys", "byAge"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($self._byAge())._keys())._sorted();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"secondaryAspects",{})});
//>>excludeEnd("ctx");
}; }),
$globals.RKIDatapoint);

$core.addMethod(
$core.method({
selector: "tertiaryAspects",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tertiaryAspects\x0a\x09^(self byAge values inject: Set new into: [:set :ageDict |\x0a\x09\x09set addAll: ageDict keys]) asArray sorted",
referencedClasses: ["Set"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["sorted", "asArray", "inject:into:", "values", "byAge", "new", "addAll:", "keys"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($recv($recv($self._byAge())._values())._inject_into_($recv($globals.Set)._new(),(function(set,ageDict){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(set)._addAll_($recv(ageDict)._keys());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({set:set,ageDict:ageDict},$ctx1,1)});
//>>excludeEnd("ctx");
})))._asArray())._sorted();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tertiaryAspects",{})});
//>>excludeEnd("ctx");
}; }),
$globals.RKIDatapoint);


$core.addMethod(
$core.method({
selector: "dataLabel",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dataLabel\x0a\x09^'German data'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return "German data";

}; }),
$globals.RKIDatapoint.a$cls);

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
selector: "example",
protocol: "instances",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "example\x0a\x09\x22RKIDatapoint example\x22\x0a\x09\x0a\x09^self \x0a\x09\x09date: (Date d: 11 m: 4 y: 2020) \x0a\x09\x09byAge: Dictionary new",
referencedClasses: ["Date", "Dictionary"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["date:byAge:", "d:m:y:", "new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._date_byAge_($recv($globals.Date)._d_m_y_((11),(4),(2020)),$recv($globals.Dictionary)._new());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"example",{})});
//>>excludeEnd("ctx");
}; }),
$globals.RKIDatapoint.a$cls);

$core.addMethod(
$core.method({
selector: "firstLevelSelector",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "firstLevelSelector\x0a\x09^#bundesland",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return "bundesland";

}; }),
$globals.RKIDatapoint.a$cls);

$core.addMethod(
$core.method({
selector: "firstLevelTerritoryAboutFromJson:",
protocol: "services",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJson"],
source: "firstLevelTerritoryAboutFromJson: aJson\x0a\x09^#{#id -> aJson idBundesland}",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["idBundesland"]
}, function ($methodClass){ return function (aJson){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $globals.HashedCollection._newFromPairs_(["id",$recv(aJson)._idBundesland()]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"firstLevelTerritoryAboutFromJson:",{aJson:aJson})});
//>>excludeEnd("ctx");
}; }),
$globals.RKIDatapoint.a$cls);

$core.addMethod(
$core.method({
selector: "fromJson:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJson"],
source: "fromJson: aJson\x0a\x09| newByAge |\x0a\x09newByAge := Dictionary new.\x0a\x09aJson byAge keysAndValuesDo: [:age :sexDict |\x0a\x09\x09| dict |\x0a\x09\x09dict := Dictionary new.\x0a\x09\x09sexDict keysAndValuesDo: [:sex :value |\x0a\x09\x09\x09dict at: sex put: (CaseCount fromJson: value)].\x0a\x09\x09newByAge at: age put: dict].\x0a\x09^self date: (self dateFromJson: aJson date) byAge: newByAge",
referencedClasses: ["Dictionary", "CaseCount"],
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
return [$recv(dict)._at_put_(sex,$recv($globals.CaseCount)._fromJson_(value))
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
selector: "secondLevelSelector",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "secondLevelSelector\x0a\x09^#landkreis",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return "landkreis";

}; }),
$globals.RKIDatapoint.a$cls);

$core.addMethod(
$core.method({
selector: "secondLevelTerritoryAboutFromJson:",
protocol: "services",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJson"],
source: "secondLevelTerritoryAboutFromJson: aJson\x0a\x09^#{#id -> aJson idLandkreis}",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["idLandkreis"]
}, function ($methodClass){ return function (aJson){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $globals.HashedCollection._newFromPairs_(["id",$recv(aJson)._idLandkreis()]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"secondLevelTerritoryAboutFromJson:",{aJson:aJson})});
//>>excludeEnd("ctx");
}; }),
$globals.RKIDatapoint.a$cls);

$core.addMethod(
$core.method({
selector: "zero",
protocol: "instances",
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


$core.addClass("Dataset", $globals.Object, "Covid19Model");
$core.setSlots($globals.Dataset, ["source", "about", "series"]);
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Dataset.comment="A dataset is a date series of datapoints for a territory from a provider at a certain time\x0a\x0aThe `series` is keyed by `date` representing a *day* (not a timestamp).\x0aThe datapoints in `series` are ordered from the frist date at the beginning and the last at the end of the collection.\x0a\x0aThe datapoints contain the current accumulated numbers.\x0aTherefore the values are growing monotonously.\x0a\x0aAdding two instances results in a new instance with both series added. For missing entries in one series, the previous value of that series is used (not zero!).";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "+",
protocol: "arithmetic",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDataset"],
source: "+ aDataset\x0a\x09\x22<Dataset>\x22\x0a\x09\x0a\x09| newAbout |\x0a\x09self isEmpty ifTrue: [\x0a\x09\x09^aDataset].\x0a\x09aDataset isEmpty ifTrue: [\x0a\x09\x09^self].\x0a\x09newAbout := self about copy.\x0a\x09newAbout at: #updated\x0a\x09\x09ifPresent: [:updateTimestamp |\x0a\x09\x09\x09aDataset about at: #updated ifPresent: [:newUpdateTimestamp |\x0a\x09\x09\x09\x09newAbout at: #updated put: (updateTimestamp max: newUpdateTimestamp)]]\x0a\x09\x09ifAbsent: [\x0a\x09\x09\x09aDataset about at: #updated ifPresent: [:newUpdateTimestamp |\x0a\x09\x09\x09\x09newAbout at: #updated put: newUpdateTimestamp]].\x0a\x09^self class source: self source about: newAbout series: (self plusSeries: aDataset)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "isEmpty", "copy", "about", "at:ifPresent:ifAbsent:", "at:ifPresent:", "at:put:", "max:", "source:about:series:", "class", "source", "plusSeries:"]
}, function ($methodClass){ return function (aDataset){
var self=this,$self=this;
var newAbout;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert([$self._isEmpty()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["isEmpty"]=1
//>>excludeEnd("ctx");
][0])){
return aDataset;
}
if($core.assert($recv(aDataset)._isEmpty())){
return self;
}
newAbout=$recv([$self._about()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["about"]=1
//>>excludeEnd("ctx");
][0])._copy();
$recv(newAbout)._at_ifPresent_ifAbsent_("updated",(function(updateTimestamp){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return [$recv([$recv(aDataset)._about()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["about"]=2
//>>excludeEnd("ctx");
][0])._at_ifPresent_("updated",(function(newUpdateTimestamp){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return [$recv(newAbout)._at_put_("updated",$recv(updateTimestamp)._max_(newUpdateTimestamp))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["at:put:"]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({newUpdateTimestamp:newUpdateTimestamp},$ctx2,4)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["at:ifPresent:"]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({updateTimestamp:updateTimestamp},$ctx1,3)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(aDataset)._about())._at_ifPresent_("updated",(function(newUpdateTimestamp){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(newAbout)._at_put_("updated",newUpdateTimestamp);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({newUpdateTimestamp:newUpdateTimestamp},$ctx2,6)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,5)});
//>>excludeEnd("ctx");
}));
return $recv($self._class())._source_about_series_($self._source(),newAbout,$self._plusSeries_(aDataset));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"+",{aDataset:aDataset,newAbout:newAbout})});
//>>excludeEnd("ctx");
}; }),
$globals.Dataset);

$core.addMethod(
$core.method({
selector: "about",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "about\x0a\x09\x22<Dictionary>\x0a\x09metadata about the receiver\x22\x0a\x09\x0a\x09^about ifNil: [Dictionary new]",
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
$1=$self.about;
if($1 == null || $1.a$nil){
return $recv($globals.Dictionary)._new();
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"about",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Dataset);

$core.addMethod(
$core.method({
selector: "allAspects",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "allAspects\x0a\x09\x22<Array of: Symbol>\x0a\x09selectors of datapoint instances in the series which may be shown\x22\x0a\x09\x0a\x09^self aspects, self secondaryAspects, self tertiaryAspects",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: [",", "aspects", "secondaryAspects", "tertiaryAspects"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return [$recv($recv($self._aspects()).__comma($self._secondaryAspects())).__comma($self._tertiaryAspects())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"allAspects",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Dataset);

$core.addMethod(
$core.method({
selector: "aspects",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "aspects\x0a\x09\x22<Array of: Symbol>\x0a\x09selectors of datapoint instances in the series which may be shown\x22\x0a\x09\x0a\x09^self last aspects",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["aspects", "last"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._last())._aspects();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"aspects",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Dataset);

$core.addMethod(
$core.method({
selector: "changeDataset",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "changeDataset\x0a\x09\x22<Dataset>\x22\x0a\x09\x0a\x09| wst rst last |\x0a\x09wst := OrderedCollection new writeStream.\x0a\x09rst := self series readStream.\x0a\x09last := nil.\x0a\x09[rst atEnd] whileFalse: [\x0a\x09\x09| datapoint | \x0a\x09\x09datapoint := rst next.\x0a\x09\x09wst nextPut: (last \x0a\x09\x09\x09ifNil: [datapoint]\x0a\x09\x09\x09ifNotNil: [datapoint changeFrom: last]).\x0a\x09\x09last := datapoint].\x0a\x09^self class source: self source about: self about series: wst contents",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["writeStream", "new", "readStream", "series", "whileFalse:", "atEnd", "next", "nextPut:", "ifNil:ifNotNil:", "changeFrom:", "source:about:series:", "class", "source", "about", "contents"]
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
return $recv($self._class())._source_about_series_($self._source(),$self._about(),$recv(wst)._contents());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"changeDataset",{wst:wst,rst:rst,last:last})});
//>>excludeEnd("ctx");
}; }),
$globals.Dataset);

$core.addMethod(
$core.method({
selector: "dataDateString",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dataDateString\x0a\x09^(self about at: #updated ifAbsent: [nil])\x0a\x09\x09ifNotNil: #asLocaleString\x0a\x09\x09ifNil: [self lastDate asLocaleDateString]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNotNil:ifNil:", "at:ifAbsent:", "about", "asLocaleDateString", "lastDate"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($self._about())._at_ifAbsent_("updated",(function(){
return nil;

}));
return $recv($1)._ifNotNil_ifNil_("asLocaleString",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self._lastDate())._asLocaleDateString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dataDateString",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Dataset);

$core.addMethod(
$core.method({
selector: "extendedTo:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDate"],
source: "extendedTo: aDate\x0a\x09\x22<Dataset>\x22\x0a\x09\x0a\x09| extension last |\x0a\x09last := self last.\x0a\x09extension := (self lastDate nextDay to: aDate) collect: [:date |\x0a\x09\x09last copyWithDate: date].\x0a\x09^self class source: self source about: self about series: self series, extension",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["last", "collect:", "to:", "nextDay", "lastDate", "copyWithDate:", "source:about:series:", "class", "source", "about", ",", "series"]
}, function ($methodClass){ return function (aDate){
var self=this,$self=this;
var extension,last;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
last=$self._last();
extension=$recv($recv($recv($self._lastDate())._nextDay())._to_(aDate))._collect_((function(date){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(last)._copyWithDate_(date);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({date:date},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $recv($self._class())._source_about_series_($self._source(),$self._about(),$recv($self._series()).__comma(extension));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"extendedTo:",{aDate:aDate,extension:extension,last:last})});
//>>excludeEnd("ctx");
}; }),
$globals.Dataset);

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
$globals.Dataset);

$core.addMethod(
$core.method({
selector: "hasAspect:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAspectSymbol"],
source: "hasAspect: anAspectSymbol\x0a\x09\x22true, if the aspect is supported by the dataset\x22\x0a\x09\x0a\x09^self allAspects includes: anAspectSymbol",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["includes:", "allAspects"]
}, function ($methodClass){ return function (anAspectSymbol){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._allAspects())._includes_(anAspectSymbol);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hasAspect:",{anAspectSymbol:anAspectSymbol})});
//>>excludeEnd("ctx");
}; }),
$globals.Dataset);

$core.addMethod(
$core.method({
selector: "initializeSource:about:series:",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSourceString", "aDictionary", "someDatapoints"],
source: "initializeSource: aSourceString about: aDictionary series: someDatapoints\x0a\x09source := aSourceString.\x0a\x09about := aDictionary.\x0a\x09series := someDatapoints",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aSourceString,aDictionary,someDatapoints){
var self=this,$self=this;
$self.source=aSourceString;
$self.about=aDictionary;
$self.series=someDatapoints;
return self;

}; }),
$globals.Dataset);

$core.addMethod(
$core.method({
selector: "isEmpty",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isEmpty\x0a\x09^self series isEmpty",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["isEmpty", "series"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._series())._isEmpty();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isEmpty",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Dataset);

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
$globals.Dataset);

$core.addMethod(
$core.method({
selector: "lastDate",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "lastDate\x0a\x09\x22<Date>\x22\x0a\x09\x0a\x09^self last date",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["date", "last"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._last())._date();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lastDate",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Dataset);

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
var $1;
dates=$recv($globals.OrderedCollection)._new();
$recv($recv($self._series())._collect_("date"))._inject_into_(nil,(function(last,date){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if($core.assert($recv(last)._notNil())){
$1=$recv([$recv(last)._month()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["month"]=1
//>>excludeEnd("ctx");
][0]).__tild_eq($recv(date)._month());
} else {
$1=false;
}
if($core.assert($1)){
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
$globals.Dataset);

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
$globals.Dataset);

$core.addMethod(
$core.method({
selector: "lastValueOf:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAspect"],
source: "lastValueOf: anAspect\x0a\x09\x22<Integer>\x22\x0a\x09\x0a\x09self isEmpty ifTrue: [\x0a\x09\x09^0].\x0a\x09^[self last perform: anAspect] on: MessageNotUnderstood do: [:ex | ex return: 0]",
referencedClasses: ["MessageNotUnderstood"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "isEmpty", "on:do:", "perform:", "last", "return:"]
}, function ($methodClass){ return function (anAspect){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert($self._isEmpty())){
return (0);
}
return $recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self._last())._perform_(anAspect);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}))._on_do_($globals.MessageNotUnderstood,(function(ex){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(ex)._return_((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lastValueOf:",{anAspect:anAspect})});
//>>excludeEnd("ctx");
}; }),
$globals.Dataset);

$core.addMethod(
$core.method({
selector: "plusSeries:",
protocol: "arithmetic",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDataset"],
source: "plusSeries: aDataset\x0a\x09\x22<Array of: Datapoint>\x22\x0a\x09\x0a\x09| wst lastSelf lastArg |\x0a\x09wst := OrderedCollection new writeStream.\x0a\x09lastSelf := nil.\x0a\x09lastArg := nil.\x0a\x09self\x0a\x09\x09with: aDataset\x0a\x09\x09onlyInSelf: [:datapoint | \x0a\x09\x09\x09| lastOther |\x0a\x09\x09\x09lastOther := lastArg ifNil: [datapoint asZero].\x0a\x09\x09\x09wst nextPut: datapoint + (lastOther copyWithDate: datapoint date). \x0a\x09\x09\x09lastSelf := datapoint]\x0a\x09\x09onlyInArg: [:datapoint | \x0a\x09\x09\x09| lastOther |\x0a\x09\x09\x09lastOther := lastSelf ifNil: [datapoint asZero].\x0a\x09\x09\x09wst nextPut: datapoint + (lastOther copyWithDate: datapoint date). \x0a\x09\x09\x09lastArg := datapoint]\x0a\x09\x09inBoth: [:datapoint1 :datapoint2 | \x0a\x09\x09\x09wst nextPut: datapoint1 + datapoint2.\x0a\x09\x09\x09lastSelf := datapoint1.\x0a\x09\x09\x09lastArg := datapoint2].\x0a\x09^wst contents",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["writeStream", "new", "with:onlyInSelf:onlyInArg:inBoth:", "ifNil:", "asZero", "nextPut:", "+", "copyWithDate:", "date", "contents"]
}, function ($methodClass){ return function (aDataset){
var self=this,$self=this;
var wst,lastSelf,lastArg;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
wst=$recv($recv($globals.OrderedCollection)._new())._writeStream();
lastSelf=nil;
lastArg=nil;
$self._with_onlyInSelf_onlyInArg_inBoth_(aDataset,(function(datapoint){
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
return $recv(wst)._contents();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"plusSeries:",{aDataset:aDataset,wst:wst,lastSelf:lastSelf,lastArg:lastArg})});
//>>excludeEnd("ctx");
}; }),
$globals.Dataset);

$core.addMethod(
$core.method({
selector: "positive",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "positive\x0a\x09\x22<Boolean>\x0a\x09true, if all data are positive\x22\x0a\x09\x0a\x09^self series allSatisfy: #positive",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["allSatisfy:", "series"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._series())._allSatisfy_("positive");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"positive",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Dataset);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: "printing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x0a\x09aStream \x0a\x09\x09nextPutAll: self class name;\x0a\x09\x09nextPut: $[;\x0a\x09\x09nextPutAll: self source;\x0a\x09\x09nextPutAll: ', ';\x0a\x09\x09nextPutAll: self series size printString;\x0a\x09\x09nextPut: $]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["nextPutAll:", "name", "class", "nextPut:", "source", "printString", "size", "series"]
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
[$recv(aStream)._nextPut_("[")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["nextPut:"]=1
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._nextPutAll_($self._source())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["nextPutAll:"]=2
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._nextPutAll_(", ")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["nextPutAll:"]=3
//>>excludeEnd("ctx");
][0];
$recv(aStream)._nextPutAll_($recv($recv($self._series())._size())._printString());
$recv(aStream)._nextPut_("]");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream})});
//>>excludeEnd("ctx");
}; }),
$globals.Dataset);

$core.addMethod(
$core.method({
selector: "secondaryAspects",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "secondaryAspects\x0a\x09\x22<Array of: Symbol>\x0a\x09selectors of datapoint instances in the series which may be shown\x22\x0a\x09\x0a\x09^self last secondaryAspects",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["secondaryAspects", "last"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._last())._secondaryAspects();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"secondaryAspects",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Dataset);

$core.addMethod(
$core.method({
selector: "series",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "series\x0a\x09\x22<Array of: Datapoint>\x0a\x09datapoints for one territory from one provider\x22\x0a\x09\x0a\x09^series ifNil: [#()]",
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
$1=$self.series;
if($1 == null || $1.a$nil){
return [];
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"series",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Dataset);

$core.addMethod(
$core.method({
selector: "source",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "source\x0a\x09\x22<String>\x0a\x09the id of the datasource from where I come\x22\x0a\x09\x0a\x09^source",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.source;

}; }),
$globals.Dataset);

$core.addMethod(
$core.method({
selector: "tertiaryAspects",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tertiaryAspects\x0a\x09\x22<Array of: Symbol>\x0a\x09selectors of datapoint instances in the series which may be shown\x22\x0a\x09\x0a\x09^self last tertiaryAspects",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["tertiaryAspects", "last"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._last())._tertiaryAspects();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tertiaryAspects",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Dataset);

$core.addMethod(
$core.method({
selector: "with:onlyInSelf:onlyInArg:inBoth:",
protocol: "arithmetic",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDataset", "onlyInSelfBlock", "onlyInArgBlock", "inBothBlock"],
source: "with: aDataset onlyInSelf: onlyInSelfBlock onlyInArg: onlyInArgBlock inBoth: inBothBlock\x0a\x09\x22iterates throu both collections of datapoints and processes them in date order\x22\x0a\x09\x0a\x09| rstSelf rstArg |\x0a\x09rstSelf := self series readStream.\x0a\x09rstArg := aDataset series readStream.\x0a\x09[\x0a\x09rstSelf atEnd and: [\x0a\x09rstArg atEnd]] whileFalse: [\x0a\x09\x09\x09rstSelf atEnd\x0a\x09\x09\x09\x09ifTrue: [onlyInArgBlock value: rstArg next]\x0a\x09\x09\x09\x09ifFalse: [\x0a\x09\x09\x09\x09rstArg atEnd\x0a\x09\x09\x09\x09\x09ifTrue: [onlyInSelfBlock value: rstSelf next]\x0a\x09\x09\x09\x09\x09ifFalse: [\x0a\x09\x09\x09\x09\x09| selfDate argDate |\x0a\x09\x09\x09\x09\x09selfDate := rstSelf peek date.\x0a\x09\x09\x09\x09\x09argDate := rstArg peek date.\x0a\x09\x09\x09\x09\x09selfDate = argDate\x0a\x09\x09\x09\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09\x09\x09inBothBlock value: rstSelf next value: rstArg next]\x0a\x09\x09\x09\x09\x09\x09ifFalse: [\x0a\x09\x09\x09\x09\x09\x09selfDate < argDate\x0a\x09\x09\x09\x09\x09\x09\x09ifTrue: [onlyInSelfBlock value: rstSelf next]\x0a\x09\x09\x09\x09\x09\x09\x09ifFalse: [onlyInArgBlock value: rstArg next]]]]]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["readStream", "series", "whileFalse:", "and:", "atEnd", "ifTrue:ifFalse:", "value:", "next", "date", "peek", "=", "value:value:", "<"]
}, function ($methodClass){ return function (aDataset,onlyInSelfBlock,onlyInArgBlock,inBothBlock){
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
rstArg=$recv($recv(aDataset)._series())._readStream();
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if($core.assert([$recv(rstSelf)._atEnd()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["atEnd"]=1
//>>excludeEnd("ctx");
][0])){
return [$recv(rstArg)._atEnd()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["atEnd"]=2
//>>excludeEnd("ctx");
][0];
} else {
return false;
}
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
}, function($ctx1) {$ctx1.fill(self,"with:onlyInSelf:onlyInArg:inBoth:",{aDataset:aDataset,onlyInSelfBlock:onlyInSelfBlock,onlyInArgBlock:onlyInArgBlock,inBothBlock:inBothBlock,rstSelf:rstSelf,rstArg:rstArg})});
//>>excludeEnd("ctx");
}; }),
$globals.Dataset);


$core.addMethod(
$core.method({
selector: "aboutFrom:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDictionary"],
source: "aboutFrom: aDictionary\x0a\x09\x22<Dictionary>\x22\x0a\x09\x0a\x09| dict |\x0a\x09dict := Dictionary new.\x0a\x09dict at: #updated put: (Date fromString: (aDictionary at: #modificationDate)).\x0a\x09^dict",
referencedClasses: ["Dictionary", "Date"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "at:put:", "fromString:", "at:"]
}, function ($methodClass){ return function (aDictionary){
var self=this,$self=this;
var dict;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
dict=$recv($globals.Dictionary)._new();
$recv(dict)._at_put_("updated",$recv($globals.Date)._fromString_($recv(aDictionary)._at_("modificationDate")));
return dict;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"aboutFrom:",{aDictionary:aDictionary,dict:dict})});
//>>excludeEnd("ctx");
}; }),
$globals.Dataset.a$cls);

$core.addMethod(
$core.method({
selector: "example",
protocol: "instances",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "example\x0a\x09\x22Dataset example\x22\x0a\x09\x0a\x09^self \x0a\x09\x09source: 'JHU'\x0a\x09\x09about: #{} \x0a\x09\x09series: ((OrderedCollection new)\x0a\x09\x09\x09add: (JHUDatapoint date: (Date d: 1 m: 4 y: 2020) confirmed: 20 deaths: 3 recovered: 6);\x0a\x09\x09\x09add: (JHUDatapoint date: (Date d: 2 m: 4 y: 2020) confirmed: 42 deaths: 4 recovered: 11);\x0a\x09\x09\x09add: (JHUDatapoint date: (Date d: 3 m: 4 y: 2020) confirmed: 56 deaths: 6 recovered: 18);\x0a\x09\x09\x09add: (JHUDatapoint date: (Date d: 4 m: 4 y: 2020) confirmed: 83 deaths: 8 recovered: 27);\x0a\x09\x09\x09add: (JHUDatapoint date: (Date d: 5 m: 4 y: 2020) confirmed: 108 deaths: 8 recovered: 40);\x0a\x09\x09\x09add: (JHUDatapoint date: (Date d: 6 m: 4 y: 2020) confirmed: 154 deaths: 9 recovered: 51);\x0a\x09\x09\x09add: (JHUDatapoint date: (Date d: 7 m: 4 y: 2020) confirmed: 185 deaths: 9 recovered: 58);\x0a\x09\x09\x09add: (JHUDatapoint date: (Date d: 8 m: 4 y: 2020) confirmed: 227 deaths: 14 recovered: 82);\x0a\x09\x09\x09add: (JHUDatapoint date: (Date d: 9 m: 4 y: 2020) confirmed: 276 deaths: 21 recovered: 113);\x0a\x09\x09\x09yourself)",
referencedClasses: ["OrderedCollection", "JHUDatapoint", "Date"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["source:about:series:", "add:", "new", "date:confirmed:deaths:recovered:", "d:m:y:", "yourself"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$globals.HashedCollection._newFromPairs_([]);
$2=$recv($globals.OrderedCollection)._new();
[$recv($2)._add_([$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((1),(4),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=1
//>>excludeEnd("ctx");
][0],(20),(3),(6))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["date:confirmed:deaths:recovered:"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=1
//>>excludeEnd("ctx");
][0];
[$recv($2)._add_([$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((2),(4),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=2
//>>excludeEnd("ctx");
][0],(42),(4),(11))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["date:confirmed:deaths:recovered:"]=2
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=2
//>>excludeEnd("ctx");
][0];
[$recv($2)._add_([$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((3),(4),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=3
//>>excludeEnd("ctx");
][0],(56),(6),(18))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["date:confirmed:deaths:recovered:"]=3
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=3
//>>excludeEnd("ctx");
][0];
[$recv($2)._add_([$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((4),(4),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=4
//>>excludeEnd("ctx");
][0],(83),(8),(27))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["date:confirmed:deaths:recovered:"]=4
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=4
//>>excludeEnd("ctx");
][0];
[$recv($2)._add_([$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((5),(4),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=5
//>>excludeEnd("ctx");
][0],(108),(8),(40))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["date:confirmed:deaths:recovered:"]=5
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=5
//>>excludeEnd("ctx");
][0];
[$recv($2)._add_([$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((6),(4),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=6
//>>excludeEnd("ctx");
][0],(154),(9),(51))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["date:confirmed:deaths:recovered:"]=6
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=6
//>>excludeEnd("ctx");
][0];
[$recv($2)._add_([$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((7),(4),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=7
//>>excludeEnd("ctx");
][0],(185),(9),(58))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["date:confirmed:deaths:recovered:"]=7
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=7
//>>excludeEnd("ctx");
][0];
[$recv($2)._add_([$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((8),(4),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=8
//>>excludeEnd("ctx");
][0],(227),(14),(82))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["date:confirmed:deaths:recovered:"]=8
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=8
//>>excludeEnd("ctx");
][0];
$recv($2)._add_($recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_($recv($globals.Date)._d_m_y_((9),(4),(2020)),(276),(21),(113)));
return $self._source_about_series_("JHU",$1,$recv($2)._yourself());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"example",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Dataset.a$cls);

$core.addMethod(
$core.method({
selector: "examplePlus5Days",
protocol: "instances",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "examplePlus5Days\x0a\x09\x22Dataset examplePlus5Days\x22\x0a\x09\x0a\x09^self \x0a\x09\x09source: 'JHU'\x0a\x09\x09about: #{} \x0a\x09\x09series: ((OrderedCollection new)\x0a\x09\x09\x09add: (JHUDatapoint date: (Date d: 6 m: 4 y: 2020) confirmed: 20 deaths: 3 recovered: 6);\x0a\x09\x09\x09add: (JHUDatapoint date: (Date d: 7 m: 4 y: 2020) confirmed: 42 deaths: 4 recovered: 11);\x0a\x09\x09\x09add: (JHUDatapoint date: (Date d: 8 m: 4 y: 2020) confirmed: 56 deaths: 6 recovered: 18);\x0a\x09\x09\x09add: (JHUDatapoint date: (Date d: 9 m: 4 y: 2020) confirmed: 83 deaths: 8 recovered: 27);\x0a\x09\x09\x09add: (JHUDatapoint date: (Date d: 10 m: 4 y: 2020) confirmed: 108 deaths: 8 recovered: 40);\x0a\x09\x09\x09add: (JHUDatapoint date: (Date d: 11 m: 4 y: 2020) confirmed: 154 deaths: 9 recovered: 51);\x0a\x09\x09\x09add: (JHUDatapoint date: (Date d: 12 m: 4 y: 2020) confirmed: 185 deaths: 9 recovered: 58);\x0a\x09\x09\x09add: (JHUDatapoint date: (Date d: 13 m: 4 y: 2020) confirmed: 227 deaths: 14 recovered: 82);\x0a\x09\x09\x09add: (JHUDatapoint date: (Date d: 14 m: 4 y: 2020) confirmed: 276 deaths: 21 recovered: 113);\x0a\x09\x09\x09yourself)",
referencedClasses: ["OrderedCollection", "JHUDatapoint", "Date"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["source:about:series:", "add:", "new", "date:confirmed:deaths:recovered:", "d:m:y:", "yourself"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$globals.HashedCollection._newFromPairs_([]);
$2=$recv($globals.OrderedCollection)._new();
[$recv($2)._add_([$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((6),(4),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=1
//>>excludeEnd("ctx");
][0],(20),(3),(6))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["date:confirmed:deaths:recovered:"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=1
//>>excludeEnd("ctx");
][0];
[$recv($2)._add_([$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((7),(4),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=2
//>>excludeEnd("ctx");
][0],(42),(4),(11))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["date:confirmed:deaths:recovered:"]=2
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=2
//>>excludeEnd("ctx");
][0];
[$recv($2)._add_([$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((8),(4),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=3
//>>excludeEnd("ctx");
][0],(56),(6),(18))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["date:confirmed:deaths:recovered:"]=3
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=3
//>>excludeEnd("ctx");
][0];
[$recv($2)._add_([$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((9),(4),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=4
//>>excludeEnd("ctx");
][0],(83),(8),(27))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["date:confirmed:deaths:recovered:"]=4
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=4
//>>excludeEnd("ctx");
][0];
[$recv($2)._add_([$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((10),(4),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=5
//>>excludeEnd("ctx");
][0],(108),(8),(40))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["date:confirmed:deaths:recovered:"]=5
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=5
//>>excludeEnd("ctx");
][0];
[$recv($2)._add_([$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((11),(4),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=6
//>>excludeEnd("ctx");
][0],(154),(9),(51))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["date:confirmed:deaths:recovered:"]=6
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=6
//>>excludeEnd("ctx");
][0];
[$recv($2)._add_([$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((12),(4),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=7
//>>excludeEnd("ctx");
][0],(185),(9),(58))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["date:confirmed:deaths:recovered:"]=7
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=7
//>>excludeEnd("ctx");
][0];
[$recv($2)._add_([$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((13),(4),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=8
//>>excludeEnd("ctx");
][0],(227),(14),(82))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["date:confirmed:deaths:recovered:"]=8
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=8
//>>excludeEnd("ctx");
][0];
$recv($2)._add_($recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_($recv($globals.Date)._d_m_y_((14),(4),(2020)),(276),(21),(113)));
return $self._source_about_series_("JHU",$1,$recv($2)._yourself());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"examplePlus5Days",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Dataset.a$cls);

$core.addMethod(
$core.method({
selector: "source:about:series:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSourceString", "aDictionary", "someDatapoints"],
source: "source: aSourceString about: aDictionary series: someDatapoints\x0a\x09| inst |\x0a\x09inst := self new.\x0a\x09inst initializeSource: aSourceString about: aDictionary series: someDatapoints.\x0a\x09^inst",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "initializeSource:about:series:"]
}, function ($methodClass){ return function (aSourceString,aDictionary,someDatapoints){
var self=this,$self=this;
var inst;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
inst=$self._new();
$recv(inst)._initializeSource_about_series_(aSourceString,aDictionary,someDatapoints);
return inst;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"source:about:series:",{aSourceString:aSourceString,aDictionary:aDictionary,someDatapoints:someDatapoints,inst:inst})});
//>>excludeEnd("ctx");
}; }),
$globals.Dataset.a$cls);

$core.addMethod(
$core.method({
selector: "source:meta:series:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSourceString", "aDictionary", "someDatapoints"],
source: "source: aSourceString meta: aDictionary series: someDatapoints\x0a\x09^self source: aSourceString about: (self aboutFrom: aDictionary) series: someDatapoints",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["source:about:series:", "aboutFrom:"]
}, function ($methodClass){ return function (aSourceString,aDictionary,someDatapoints){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._source_about_series_(aSourceString,$self._aboutFrom_(aDictionary),someDatapoints);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"source:meta:series:",{aSourceString:aSourceString,aDictionary:aDictionary,someDatapoints:someDatapoints})});
//>>excludeEnd("ctx");
}; }),
$globals.Dataset.a$cls);

$core.addMethod(
$core.method({
selector: "totalOfAll:",
protocol: "services",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["someDatasets"],
source: "totalOfAll: someDatasets\x0a\x09\x22<Dataset>\x22\x0a\x09\x0a\x09^someDatasets inject: self zero into: [:sum :dataset | sum + dataset]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["inject:into:", "zero", "+"]
}, function ($methodClass){ return function (someDatasets){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(someDatasets)._inject_into_($self._zero(),(function(sum,dataset){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(sum).__plus(dataset);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({sum:sum,dataset:dataset},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"totalOfAll:",{someDatasets:someDatasets})});
//>>excludeEnd("ctx");
}; }),
$globals.Dataset.a$cls);

$core.addMethod(
$core.method({
selector: "zero",
protocol: "instances",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "zero\x0a\x09^self new",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"zero",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Dataset.a$cls);


$core.addClass("Datasource", $globals.Object, "Covid19Model");
$core.setSlots($globals.Datasource, ["id", "url", "dataClass", "about", "updated"]);
$core.addMethod(
$core.method({
selector: "about",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "about\x0a\x09\x22<Dictionary>\x0a\x09metadata about the receiver\x22\x0a\x09\x0a\x09^about ifNil: [about := Dictionary new]",
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
$1=$self.about;
if($1 == null || $1.a$nil){
$self.about=$recv($globals.Dictionary)._new();
return $self.about;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"about",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Datasource);

$core.addMethod(
$core.method({
selector: "dataClass",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dataClass\x0a\x09\x22<Datapoint class>\x0a\x09the specific data class for this source\x22\x0a\x0a\x09^dataClass",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.dataClass;

}; }),
$globals.Datasource);

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
$globals.Datasource);

$core.addMethod(
$core.method({
selector: "dataLabel",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dataLabel\x0a\x09\x22<String>\x0a\x09user facing string for selecting a datasource\x22\x0a\x0a\x09^self dataClass dataLabel",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["dataLabel", "dataClass"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._dataClass())._dataLabel();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dataLabel",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Datasource);

$core.addMethod(
$core.method({
selector: "getJson",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "getJson\x0a\x09\x22<Promise>\x22\x0a\x09\x0a\x09^((Platform fetch: self dataHome, self url) then: #json) then: [:json |\x0a\x09\x09self pickMetadataFrom: json meta.\x0a\x09\x09json]",
referencedClasses: ["Platform"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["then:", "fetch:", ",", "dataHome", "url", "pickMetadataFrom:", "meta"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return [$recv($recv($recv($globals.Platform)._fetch_($recv($self._dataHome()).__comma($self._url())))._then_("json"))._then_((function(json){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$self._pickMetadataFrom_($recv(json)._meta());
return json;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({json:json},$ctx1,1)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["then:"]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"getJson",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Datasource);

$core.addMethod(
$core.method({
selector: "id",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "id\x0a\x09\x22<String>\x0a\x09short unique name of the receiver.\x0a\x09Used as key for the #datasources dictionary of the application\x22\x0a\x09\x0a\x09^id",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.id;

}; }),
$globals.Datasource);

$core.addMethod(
$core.method({
selector: "initializeId:url:dataClass:",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIdString", "anUrlString", "aDatapointClass"],
source: "initializeId: anIdString url: anUrlString dataClass: aDatapointClass\x0a\x09id := anIdString.\x0a\x09url := anUrlString.\x0a\x09dataClass := aDatapointClass.\x0a\x09updated := Date now",
referencedClasses: ["Date"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["now"]
}, function ($methodClass){ return function (anIdString,anUrlString,aDatapointClass){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.id=anIdString;
$self.url=anUrlString;
$self.dataClass=aDatapointClass;
$self.updated=$recv($globals.Date)._now();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeId:url:dataClass:",{anIdString:anIdString,anUrlString:anUrlString,aDatapointClass:aDatapointClass})});
//>>excludeEnd("ctx");
}; }),
$globals.Datasource);

$core.addMethod(
$core.method({
selector: "pickMetadataFrom:",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDictionary"],
source: "pickMetadataFrom: aDictionary\x0a\x09aDictionary at: #providerShortname ifPresent: [:string | self about at: #ProviderId put: string].\x0a\x09aDictionary at: #providerName ifPresent: [:string | self about at: #ProviderName put: string].\x0a\x09aDictionary at: #providerUrl ifPresent: [:string | self about at: #ProviderUrl put: string].\x0a\x09aDictionary at: #url ifPresent: [:string | self about at: #DataUrl put: string].\x0a\x09aDictionary at: #modificationDate ifPresent: [:string | self about at: #updated put: (Date fromString: string)]",
referencedClasses: ["Date"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:ifPresent:", "at:put:", "about", "fromString:"]
}, function ($methodClass){ return function (aDictionary){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[$recv(aDictionary)._at_ifPresent_("providerShortname",(function(string){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return [$recv([$self._about()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["about"]=1
//>>excludeEnd("ctx");
][0])._at_put_("ProviderId",string)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["at:put:"]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({string:string},$ctx1,1)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:ifPresent:"]=1
//>>excludeEnd("ctx");
][0];
[$recv(aDictionary)._at_ifPresent_("providerName",(function(string){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return [$recv([$self._about()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["about"]=2
//>>excludeEnd("ctx");
][0])._at_put_("ProviderName",string)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["at:put:"]=2
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({string:string},$ctx1,2)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:ifPresent:"]=2
//>>excludeEnd("ctx");
][0];
[$recv(aDictionary)._at_ifPresent_("providerUrl",(function(string){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return [$recv([$self._about()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["about"]=3
//>>excludeEnd("ctx");
][0])._at_put_("ProviderUrl",string)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["at:put:"]=3
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({string:string},$ctx1,3)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:ifPresent:"]=3
//>>excludeEnd("ctx");
][0];
[$recv(aDictionary)._at_ifPresent_("url",(function(string){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return [$recv([$self._about()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["about"]=4
//>>excludeEnd("ctx");
][0])._at_put_("DataUrl",string)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["at:put:"]=4
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({string:string},$ctx1,4)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:ifPresent:"]=4
//>>excludeEnd("ctx");
][0];
$recv(aDictionary)._at_ifPresent_("modificationDate",(function(string){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self._about())._at_put_("updated",$recv($globals.Date)._fromString_(string));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({string:string},$ctx1,5)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"pickMetadataFrom:",{aDictionary:aDictionary})});
//>>excludeEnd("ctx");
}; }),
$globals.Datasource);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: "printing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x0a\x09aStream \x0a\x09\x09nextPutAll: self class name;\x0a\x09\x09space;\x0a\x09\x09nextPutAll: self id;\x0a\x09\x09nextPut: $(;\x0a\x09\x09nextPutAll: self dataClass name asString;\x0a\x09\x09nextPutAll: ' ';\x0a\x09\x09nextPutAll: self url;\x0a\x09\x09nextPut: $)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["nextPutAll:", "name", "class", "space", "id", "nextPut:", "asString", "dataClass", "url"]
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
$recv(aStream)._space();
[$recv(aStream)._nextPutAll_($self._id())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["nextPutAll:"]=2
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._nextPut_("(")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["nextPut:"]=1
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._nextPutAll_($recv($recv($self._dataClass())._name())._asString())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["nextPutAll:"]=3
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._nextPutAll_(" ")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["nextPutAll:"]=4
//>>excludeEnd("ctx");
][0];
$recv(aStream)._nextPutAll_($self._url());
$recv(aStream)._nextPut_(")");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream})});
//>>excludeEnd("ctx");
}; }),
$globals.Datasource);

$core.addMethod(
$core.method({
selector: "provider",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "provider\x0a\x09\x22<String>\x22\x0a\x09\x0a\x09^self about at: #ProviderName ifAbsent: ['(no provider)']",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:ifAbsent:", "about"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._about())._at_ifAbsent_("ProviderName",(function(){
return "(no provider)";

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"provider",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Datasource);

$core.addMethod(
$core.method({
selector: "rootTerritoryFromJson:",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJson"],
source: "rootTerritoryFromJson: aJson\x0a\x09\x22<Territory>\x0a\x09a synthetic territory with all top level territories from aJson as parts.\x0a\x09Used to sort the parts and sum up the datasets\x22\x0a\x09\x0a\x09^Territory name: '' about: nil parts: (self dataClass territoriesFrom: self id json: aJson)",
referencedClasses: ["Territory"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["name:about:parts:", "territoriesFrom:json:", "dataClass", "id"]
}, function ($methodClass){ return function (aJson){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Territory)._name_about_parts_("",nil,$recv($self._dataClass())._territoriesFrom_json_($self._id(),aJson));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rootTerritoryFromJson:",{aJson:aJson})});
//>>excludeEnd("ctx");
}; }),
$globals.Datasource);

$core.addMethod(
$core.method({
selector: "updated",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updated\x0a\x09\x22<Date>\x0a\x09timestamp of the last update of the receiver\x22\x0a\x09\x0a\x09^updated",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.updated;

}; }),
$globals.Datasource);

$core.addMethod(
$core.method({
selector: "url",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "url\x0a\x09\x22<String>\x0a\x09the json file\x22\x0a\x09\x0a\x09^url",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.url;

}; }),
$globals.Datasource);


$core.addMethod(
$core.method({
selector: "id:url:dataClass:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIdString", "anUrlString", "aDatapointClass"],
source: "id: anIdString url: anUrlString dataClass: aDatapointClass\x0a\x09| inst |\x0a\x09inst := self new.\x0a\x09inst initializeId: anIdString url: anUrlString dataClass: aDatapointClass.\x0a\x09^inst",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "initializeId:url:dataClass:"]
}, function ($methodClass){ return function (anIdString,anUrlString,aDatapointClass){
var self=this,$self=this;
var inst;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
inst=$self._new();
$recv(inst)._initializeId_url_dataClass_(anIdString,anUrlString,aDatapointClass);
return inst;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"id:url:dataClass:",{anIdString:anIdString,anUrlString:anUrlString,aDatapointClass:aDatapointClass,inst:inst})});
//>>excludeEnd("ctx");
}; }),
$globals.Datasource.a$cls);


$core.addClass("Territory", $globals.Object, "Covid19Model");
$core.setSlots($globals.Territory, ["name", "about", "datasets", "parts", "announcer", "loader"]);
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Territory.comment="A country, state, county, even the world is modelled as territory with parts.\x0aThe world is the root of the hierarchy of territories with countries as parts. (Continents maybe next).\x0a\x0aA territory has one or more `datasets` with provider information and a time series of datapoints. When a territory has `parts`, its datasets are the sum of the datasets of the parts.\x0a\x0aMore specific information about the territory is available as dictionary in `about`.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "<",
protocol: "comparing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTerritory"],
source: "< aTerritory\x0a\x09^self lastConfirmed < aTerritory lastConfirmed",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["<", "lastConfirmed"]
}, function ($methodClass){ return function (aTerritory){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv([$self._lastConfirmed()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["lastConfirmed"]=1
//>>excludeEnd("ctx");
][0]).__lt($recv(aTerritory)._lastConfirmed());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"<",{aTerritory:aTerritory})});
//>>excludeEnd("ctx");
}; }),
$globals.Territory);

$core.addMethod(
$core.method({
selector: "<=",
protocol: "comparing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTerritory"],
source: "<= aTerritory\x0a\x09^self lastConfirmed <= aTerritory lastConfirmed",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["<=", "lastConfirmed"]
}, function ($methodClass){ return function (aTerritory){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv([$self._lastConfirmed()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["lastConfirmed"]=1
//>>excludeEnd("ctx");
][0]).__lt_eq($recv(aTerritory)._lastConfirmed());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"<=",{aTerritory:aTerritory})});
//>>excludeEnd("ctx");
}; }),
$globals.Territory);

$core.addMethod(
$core.method({
selector: ">",
protocol: "comparing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTerritory"],
source: "> aTerritory\x0a\x09^self lastConfirmed > aTerritory lastConfirmed",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: [">", "lastConfirmed"]
}, function ($methodClass){ return function (aTerritory){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv([$self._lastConfirmed()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["lastConfirmed"]=1
//>>excludeEnd("ctx");
][0]).__gt($recv(aTerritory)._lastConfirmed());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,">",{aTerritory:aTerritory})});
//>>excludeEnd("ctx");
}; }),
$globals.Territory);

$core.addMethod(
$core.method({
selector: ">=",
protocol: "comparing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTerritory"],
source: ">= aTerritory\x0a\x09^self lastConfirmed >= aTerritory lastConfirmed",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: [">=", "lastConfirmed"]
}, function ($methodClass){ return function (aTerritory){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv([$self._lastConfirmed()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["lastConfirmed"]=1
//>>excludeEnd("ctx");
][0]).__gt_eq($recv(aTerritory)._lastConfirmed());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,">=",{aTerritory:aTerritory})});
//>>excludeEnd("ctx");
}; }),
$globals.Territory);

$core.addMethod(
$core.method({
selector: "about",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "about\x0a\x09\x22<Dictionary>\x0a\x09metadata about the receiver\x22\x0a\x09\x0a\x09^about ifNil: [about := Dictionary new]",
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
$1=$self.about;
if($1 == null || $1.a$nil){
$self.about=$recv($globals.Dictionary)._new();
return $self.about;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"about",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Territory);

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
$globals.Territory);

$core.addMethod(
$core.method({
selector: "datasetAt:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "datasetAt: aString\x0a\x09\x22<Dataset | nil>\x22\x0a\x09\x0a\x09^self datasets detect: [:dataset | dataset source = aString] ifNone: [nil]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["detect:ifNone:", "datasets", "=", "source"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._datasets())._detect_ifNone_((function(dataset){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(dataset)._source()).__eq(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({dataset:dataset},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
return nil;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"datasetAt:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.Territory);

$core.addMethod(
$core.method({
selector: "datasets",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "datasets\x0a\x09\x22<SequenceableCollection of: Dataset>\x0a\x09datasets from different providers\x22\x0a\x09\x0a\x09^datasets ifNil: [datasets := OrderedCollection new]",
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
$1=$self.datasets;
if($1 == null || $1.a$nil){
$self.datasets=$recv($globals.OrderedCollection)._new();
return $self.datasets;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"datasets",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Territory);

$core.addMethod(
$core.method({
selector: "hasParts",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "hasParts\x0a\x09^self parts notEmpty",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["notEmpty", "parts"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._parts())._notEmpty();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hasParts",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Territory);

$core.addMethod(
$core.method({
selector: "initializeName:about:parts:datasets:",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aDictionary", "someTerritories", "someDatasets"],
source: "initializeName: aString about: aDictionary parts: someTerritories datasets: someDatasets\x0a\x09name := aString.\x0a\x09(aDictionary notNil and: [\x0a\x09aDictionary notEmpty]) ifTrue: [about := aDictionary].\x0a\x09(someTerritories notNil and: [\x0a\x09someTerritories notEmpty]) ifTrue: [parts := someTerritories].\x0a\x09(someDatasets notNil and: [\x0a\x09someDatasets notEmpty]) ifTrue: [datasets := someDatasets]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "and:", "notNil", "notEmpty"]
}, function ($methodClass){ return function (aString,aDictionary,someTerritories,someDatasets){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
$self.name=aString;
if($core.assert([$recv(aDictionary)._notNil()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["notNil"]=1
//>>excludeEnd("ctx");
][0])){
$1=[$recv(aDictionary)._notEmpty()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["notEmpty"]=1
//>>excludeEnd("ctx");
][0];
} else {
$1=false;
}
if($core.assert($1)){
$self.about=aDictionary;
$self.about;
}
if($core.assert([$recv(someTerritories)._notNil()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["notNil"]=2
//>>excludeEnd("ctx");
][0])){
$2=[$recv(someTerritories)._notEmpty()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["notEmpty"]=2
//>>excludeEnd("ctx");
][0];
} else {
$2=false;
}
if($core.assert($2)){
$self.parts=someTerritories;
$self.parts;
}
if($core.assert($recv(someDatasets)._notNil())){
$3=$recv(someDatasets)._notEmpty();
} else {
$3=false;
}
if($core.assert($3)){
$self.datasets=someDatasets;
$self.datasets;
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeName:about:parts:datasets:",{aString:aString,aDictionary:aDictionary,someTerritories:someTerritories,someDatasets:someDatasets})});
//>>excludeEnd("ctx");
}; }),
$globals.Territory);

$core.addMethod(
$core.method({
selector: "isLoading",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isLoading\x0a\x09^self loader notNil",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["notNil", "loader"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._loader())._notNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isLoading",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Territory);

$core.addMethod(
$core.method({
selector: "lastConfirmed",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "lastConfirmed\x0a\x09\x22<Integer>\x22\x0a\x09\x0a\x09self datasets isEmpty ifTrue: [\x0a\x09\x09^0].\x0a\x09^self datasets first lastValueOf: #confirmed",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "isEmpty", "datasets", "lastValueOf:", "first"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert($recv([$self._datasets()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["datasets"]=1
//>>excludeEnd("ctx");
][0])._isEmpty())){
return (0);
}
return $recv($recv($self._datasets())._first())._lastValueOf_("confirmed");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lastConfirmed",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Territory);

$core.addMethod(
$core.method({
selector: "lastDate",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "lastDate\x0a\x09\x22<Date>\x22\x0a\x09\x0a\x09^self datasets allButFirst inject: self datasets first lastDate into: [:max :dataset | max max: dataset lastDate]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["inject:into:", "allButFirst", "datasets", "lastDate", "first", "max:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv([$self._datasets()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["datasets"]=1
//>>excludeEnd("ctx");
][0])._allButFirst())._inject_into_([$recv($recv($self._datasets())._first())._lastDate()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["lastDate"]=1
//>>excludeEnd("ctx");
][0],(function(max,dataset){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(max)._max_($recv(dataset)._lastDate());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({max:max,dataset:dataset},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lastDate",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Territory);

$core.addMethod(
$core.method({
selector: "load:for:doing:",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDatasource", "anApplication", "oneArgumentBlock"],
source: "load: aDatasource for: anApplication doing: oneArgumentBlock\x0a\x09loader := aDatasource getJson then: [:json |\x0a\x09\x09| root |\x0a\x09\x09anApplication pickMetadataFrom: json meta.\x0a\x09\x09root := aDatasource rootTerritoryFromJson: json.\x0a\x09\x09oneArgumentBlock value: root.\x0a\x09\x09parts := root parts.\x0a\x09\x09self datasets add: root datasets first.\x0a\x09\x09loader := nil.\x0a\x09\x09self announcer announce: StructureChanged new]",
referencedClasses: ["StructureChanged"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["then:", "getJson", "pickMetadataFrom:", "meta", "rootTerritoryFromJson:", "value:", "parts", "add:", "datasets", "first", "announce:", "announcer", "new"]
}, function ($methodClass){ return function (aDatasource,anApplication,oneArgumentBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.loader=$recv($recv(aDatasource)._getJson())._then_((function(json){
var root;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(anApplication)._pickMetadataFrom_($recv(json)._meta());
root=$recv(aDatasource)._rootTerritoryFromJson_(json);
$recv(oneArgumentBlock)._value_(root);
$self.parts=$recv(root)._parts();
$recv([$self._datasets()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["datasets"]=1
//>>excludeEnd("ctx");
][0])._add_($recv($recv(root)._datasets())._first());
$self.loader=nil;
return $recv($self._announcer())._announce_($recv($globals.StructureChanged)._new());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({json:json,root:root},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"load:for:doing:",{aDatasource:aDatasource,anApplication:anApplication,oneArgumentBlock:oneArgumentBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.Territory);

$core.addMethod(
$core.method({
selector: "loader",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "loader\x0a\x09\x22<Promise | nil>\x0a\x09primise to load data\x22\x0a\x09\x0a\x09^loader",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.loader;

}; }),
$globals.Territory);

$core.addMethod(
$core.method({
selector: "name",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "name\x0a\x09\x22<String>\x0a\x09the name from data\x22\x0a\x09\x0a\x09^name",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.name;

}; }),
$globals.Territory);

$core.addMethod(
$core.method({
selector: "partNamed:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "partNamed: aString\x0a\x09\x22<Territory | nil>\x22\x0a\x09\x0a\x09^self parts detect: [:part | part name = aString] ifNone: [nil]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["detect:ifNone:", "parts", "=", "name"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._parts())._detect_ifNone_((function(part){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(part)._name()).__eq(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({part:part},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
return nil;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"partNamed:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.Territory);

$core.addMethod(
$core.method({
selector: "parts",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "parts\x0a\x09\x22<OrderedCollection of: Territory>\x0a\x09direct children of the receiver\x22\x0a\x09\x0a\x09^parts ifNil: [parts := OrderedCollection new]",
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
$globals.Territory);

$core.addMethod(
$core.method({
selector: "population",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "population\x0a\x09\x22<Integer>\x22\x0a\x09\x0a\x09^self about at: #population ifAbsent: [\x0a\x09\x09self hasParts \x0a\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09self about at: #population put: (self parts inject: 0 into: [:sum :territory | sum + territory population]).\x0a\x09\x09\x09\x09self about at: #population]\x0a\x09\x09\x09ifFalse: [0]]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:ifAbsent:", "about", "ifTrue:ifFalse:", "hasParts", "at:put:", "inject:into:", "parts", "+", "population", "at:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv([$self._about()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["about"]=1
//>>excludeEnd("ctx");
][0])._at_ifAbsent_("population",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if($core.assert($self._hasParts())){
$recv([$self._about()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["about"]=2
//>>excludeEnd("ctx");
][0])._at_put_("population",$recv($self._parts())._inject_into_((0),(function(sum,territory){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(sum).__plus($recv(territory)._population());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({sum:sum,territory:territory},$ctx2,3)});
//>>excludeEnd("ctx");
})));
return $recv($self._about())._at_("population");
} else {
return (0);
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"population",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Territory);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: "printing",
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
$globals.Territory);

$core.addMethod(
$core.method({
selector: "resetPopulation",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "resetPopulation\x0a\x09self hasParts ifFalse: [\x0a\x09\x09^self].\x0a\x09self about removeKey: #population ifAbsent: [].\x0a\x09self parts do: #resetPopulation",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifFalse:", "hasParts", "removeKey:ifAbsent:", "about", "do:", "parts"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if(!$core.assert($self._hasParts())){
return self;
}
$recv($self._about())._removeKey_ifAbsent_("population",(function(){

}));
$recv($self._parts())._do_("resetPopulation");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"resetPopulation",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Territory);


$core.addMethod(
$core.method({
selector: "name:about:dataset:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aDictionary", "aDataset"],
source: "name: aString about: aDictionary dataset: aDataset\x0a\x09^self \x0a\x09\x09name: aString \x0a\x09\x09about: aDictionary \x0a\x09\x09parts: #()\x0a\x09\x09dataset: aDataset",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["name:about:parts:dataset:"]
}, function ($methodClass){ return function (aString,aDictionary,aDataset){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._name_about_parts_dataset_(aString,aDictionary,[],aDataset);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"name:about:dataset:",{aString:aString,aDictionary:aDictionary,aDataset:aDataset})});
//>>excludeEnd("ctx");
}; }),
$globals.Territory.a$cls);

$core.addMethod(
$core.method({
selector: "name:about:parts:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aDictionary", "someTerritories"],
source: "name: aString about: aDictionary parts: someTerritories\x0a\x09^self \x0a\x09\x09name: aString \x0a\x09\x09about: aDictionary \x0a\x09\x09parts: someTerritories\x0a\x09\x09dataset: (Territory totalDatasetFromAll: someTerritories)",
referencedClasses: ["Territory"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["name:about:parts:dataset:", "totalDatasetFromAll:"]
}, function ($methodClass){ return function (aString,aDictionary,someTerritories){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._name_about_parts_dataset_(aString,aDictionary,someTerritories,$recv($globals.Territory)._totalDatasetFromAll_(someTerritories));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"name:about:parts:",{aString:aString,aDictionary:aDictionary,someTerritories:someTerritories})});
//>>excludeEnd("ctx");
}; }),
$globals.Territory.a$cls);

$core.addMethod(
$core.method({
selector: "name:about:parts:dataset:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aDictionary", "someTerritories", "aDataset"],
source: "name: aString about: aDictionary parts: someTerritories dataset: aDataset\x0a\x09^self \x0a\x09\x09name: aString \x0a\x09\x09about: aDictionary \x0a\x09\x09parts: (someTerritories sort: [:a :b | a > b])\x0a\x09\x09datasets: {aDataset}",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["name:about:parts:datasets:", "sort:", ">"]
}, function ($methodClass){ return function (aString,aDictionary,someTerritories,aDataset){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._name_about_parts_datasets_(aString,aDictionary,$recv(someTerritories)._sort_((function(a,b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(a).__gt(b);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,1)});
//>>excludeEnd("ctx");
})),[aDataset]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"name:about:parts:dataset:",{aString:aString,aDictionary:aDictionary,someTerritories:someTerritories,aDataset:aDataset})});
//>>excludeEnd("ctx");
}; }),
$globals.Territory.a$cls);

$core.addMethod(
$core.method({
selector: "name:about:parts:datasets:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aDictionary", "someTerritories", "someDatasets"],
source: "name: aString about: aDictionary parts: someTerritories datasets: someDatasets\x0a\x09| inst |\x0a\x09inst := self new.\x0a\x09inst initializeName: aString about: aDictionary parts: someTerritories datasets: someDatasets.\x0a\x09^inst",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "initializeName:about:parts:datasets:"]
}, function ($methodClass){ return function (aString,aDictionary,someTerritories,someDatasets){
var self=this,$self=this;
var inst;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
inst=$self._new();
$recv(inst)._initializeName_about_parts_datasets_(aString,aDictionary,someTerritories,someDatasets);
return inst;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"name:about:parts:datasets:",{aString:aString,aDictionary:aDictionary,someTerritories:someTerritories,someDatasets:someDatasets,inst:inst})});
//>>excludeEnd("ctx");
}; }),
$globals.Territory.a$cls);

$core.addMethod(
$core.method({
selector: "totalDatasetFromAll:",
protocol: "services",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["someTerritories"],
source: "totalDatasetFromAll: someTerritories\x0a\x09\x22<Dataset>\x0a\x09total from the only dataset\x22\x0a\x09\x0a\x09^Dataset totalOfAll: (someTerritories collect: [:territory | territory datasets first])",
referencedClasses: ["Dataset"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["totalOfAll:", "collect:", "first", "datasets"]
}, function ($methodClass){ return function (someTerritories){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Dataset)._totalOfAll_($recv(someTerritories)._collect_((function(territory){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(territory)._datasets())._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({territory:territory},$ctx1,1)});
//>>excludeEnd("ctx");
})));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"totalDatasetFromAll:",{someTerritories:someTerritories})});
//>>excludeEnd("ctx");
}; }),
$globals.Territory.a$cls);

$core.addMethod(
$core.method({
selector: "=",
protocol: "*Covid19Model",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAssocitativeCollection"],
source: "= anAssocitativeCollection\x0a\x09^ self class = anAssocitativeCollection class and: [\x0a\x09self size = anAssocitativeCollection size and: [\x0a\x09self keys asSet = anAssocitativeCollection keys asSet and: [\x0a\x09self keys allSatisfy: [:key | (self at: key) = (anAssocitativeCollection at: key)]]]]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["and:", "=", "class", "size", "asSet", "keys", "allSatisfy:", "at:"]
}, function ($methodClass){ return function (anAssocitativeCollection){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return [$recv([$recv([$self._class()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["class"]=1
//>>excludeEnd("ctx");
][0]).__eq($recv(anAssocitativeCollection)._class())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["="]=1
//>>excludeEnd("ctx");
][0])._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return [$recv([$recv([$self._size()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["size"]=1
//>>excludeEnd("ctx");
][0]).__eq($recv(anAssocitativeCollection)._size())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["="]=2
//>>excludeEnd("ctx");
][0])._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv([$recv([$recv([$self._keys()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["keys"]=1
//>>excludeEnd("ctx");
][0])._asSet()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["asSet"]=1
//>>excludeEnd("ctx");
][0]).__eq($recv([$recv(anAssocitativeCollection)._keys()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["keys"]=2
//>>excludeEnd("ctx");
][0])._asSet())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["="]=3
//>>excludeEnd("ctx");
][0])._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv($self._keys())._allSatisfy_((function(key){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx5) {
//>>excludeEnd("ctx");
return $recv([$self._at_(key)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx5.sendIdx["at:"]=1
//>>excludeEnd("ctx");
][0]).__eq($recv(anAssocitativeCollection)._at_(key));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx5) {$ctx5.fillBlock({key:key},$ctx4,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["and:"]=2
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["and:"]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"=",{anAssocitativeCollection:anAssocitativeCollection})});
//>>excludeEnd("ctx");
}; }),
$globals.AssociativeCollection);

$core.addMethod(
$core.method({
selector: "testEqual",
protocol: "*Covid19Model",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testEqual\x0a\x09self assert: (Dictionary with: 'a' -> 1 with: 'b' -> 2) equals: (Dictionary with: 'b' -> 2 with: 'a' -> 1)",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "with:with:", "->"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._assert_equals_([$recv($globals.Dictionary)._with_with_(["a".__minus_gt((1))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=1
//>>excludeEnd("ctx");
][0],["b".__minus_gt((2))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=2
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["with:with:"]=1
//>>excludeEnd("ctx");
][0],$recv($globals.Dictionary)._with_with_(["b".__minus_gt((2))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=3
//>>excludeEnd("ctx");
][0],"a".__minus_gt((1))));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testEqual",{})});
//>>excludeEnd("ctx");
}; }),
$globals.DictionaryTest);

$core.addMethod(
$core.method({
selector: "testEqual",
protocol: "*Covid19Model",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testEqual\x0a\x09self assert: #{'a' -> 1. 'b' -> 2} equals: #{'b' -> 2. 'a' -> 1}",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._assert_equals_($globals.HashedCollection._newFromPairs_(["a",(1),"b",(2)]),$globals.HashedCollection._newFromPairs_(["b",(2),"a",(1)]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testEqual",{})});
//>>excludeEnd("ctx");
}; }),
$globals.HashedCollectionTest);

});
