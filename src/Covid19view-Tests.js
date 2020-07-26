define(["amber/boot", "require", "amber/core/SUnit"], function($boot,requirejs){"use strict";
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("Covid19view-Tests");
$pkg.transport = {"type":"amd","amdNamespace":"amber-covid19view"};

$core.addClass("Covid19viewTest", $globals.TestCase, "Covid19view-Tests");
$core.addMethod(
$core.method({
selector: "testDatasetAddition",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testDatasetAddition\x0a\x09self assert: (Dataset example + Dataset examplePlus5Days) printString equals: 'Dataset[JHU, 14]'",
referencedClasses: ["Dataset"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "printString", "+", "example", "examplePlus5Days"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._assert_equals_($recv($recv($recv($globals.Dataset)._example()).__plus($recv($globals.Dataset)._examplePlus5Days()))._printString(),"Dataset[JHU, 14]");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testDatasetAddition",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Covid19viewTest);

$core.addMethod(
$core.method({
selector: "testDateIntervals",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testDateIntervals\x0a\x09self assert: ((Date d: 8 m: 6 y: 2020) to: (Date d: 8 m: 6 y: 2020)) equals: {(Date d: 8 m: 6 y: 2020)}.\x0a\x09self assert: ((Date d: 6 m: 6 y: 2020) to: (Date d: 8 m: 6 y: 2020)) equals: {(Date d: 6 m: 6 y: 2020). (Date d: 7 m: 6 y: 2020). (Date d: 8 m: 6 y: 2020)}.\x0a\x09self assert: ((Date d: 8 m: 6 y: 2020) nextDay to: (Date d: 8 m: 6 y: 2020)) equals: #().",
referencedClasses: ["Date"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "to:", "d:m:y:", "nextDay"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[$self._assert_equals_([$recv([$recv($globals.Date)._d_m_y_((8),(6),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=1
//>>excludeEnd("ctx");
][0])._to_([$recv($globals.Date)._d_m_y_((8),(6),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=2
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["to:"]=1
//>>excludeEnd("ctx");
][0],[[$recv($globals.Date)._d_m_y_((8),(6),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=3
//>>excludeEnd("ctx");
][0]])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:equals:"]=1
//>>excludeEnd("ctx");
][0];
[$self._assert_equals_([$recv([$recv($globals.Date)._d_m_y_((6),(6),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=4
//>>excludeEnd("ctx");
][0])._to_([$recv($globals.Date)._d_m_y_((8),(6),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=5
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["to:"]=2
//>>excludeEnd("ctx");
][0],[[$recv($globals.Date)._d_m_y_((6),(6),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=6
//>>excludeEnd("ctx");
][0],[$recv($globals.Date)._d_m_y_((7),(6),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=7
//>>excludeEnd("ctx");
][0],[$recv($globals.Date)._d_m_y_((8),(6),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=8
//>>excludeEnd("ctx");
][0]])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:equals:"]=2
//>>excludeEnd("ctx");
][0];
$self._assert_equals_($recv($recv([$recv($globals.Date)._d_m_y_((8),(6),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=9
//>>excludeEnd("ctx");
][0])._nextDay())._to_($recv($globals.Date)._d_m_y_((8),(6),(2020))),[]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testDateIntervals",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Covid19viewTest);

$core.addMethod(
$core.method({
selector: "testJHUDatapoint",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testJHUDatapoint\x0a\x09\x22does not work: how can I create a JSON for tests?\x22\x0a\x09\x0a\x09[((Promise value: [:model | model value: '{\x22date\x22: {\x22d\x22: 27, \x22m\x22: 1, \x22y\x22: 2020}, \x22c\x22: 1}']) then: #json) then: [:json |\x0a\x09\x09console log: json.\x0a\x09\x09self assert: (JHUDatapoint fromJson: json) printString = '']].\x0a\x09self assert: true",
referencedClasses: ["Promise", "JHUDatapoint"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["then:", "value:", "log:", "assert:", "=", "printString", "fromJson:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return [$recv($recv([$recv($globals.Promise)._value_((function(model){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(model)._value_("{\x22date\x22: {\x22d\x22: 27, \x22m\x22: 1, \x22y\x22: 2020}, \x22c\x22: 1}");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({model:model},$ctx2,2)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["value:"]=1
//>>excludeEnd("ctx");
][0])._then_("json"))._then_((function(json){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$recv(console)._log_(json);
return [$self._assert_($recv($recv($recv($globals.JHUDatapoint)._fromJson_(json))._printString()).__eq(""))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["assert:"]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({json:json},$ctx2,3)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["then:"]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
});
$self._assert_(true);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testJHUDatapoint",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Covid19viewTest);

$core.addMethod(
$core.method({
selector: "testMovingAverage",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testMovingAverage\x0a\x09| series |\x0a\x09series := ((OrderedCollection new)\x0a\x09\x09\x09add: (JHUDatapoint date: (Date d: 1 m: 4 y: 2020) confirmed: 20 deaths: 3 recovered: 6);\x0a\x09\x09\x09add: (JHUDatapoint date: (Date d: 2 m: 4 y: 2020) confirmed: 42 deaths: 4 recovered: 11);\x0a\x09\x09\x09add: (JHUDatapoint date: (Date d: 3 m: 4 y: 2020) confirmed: 56 deaths: 6 recovered: 18);\x0a\x09\x09\x09add: (JHUDatapoint date: (Date d: 4 m: 4 y: 2020) confirmed: 83 deaths: 8 recovered: 27);\x0a\x09\x09\x09add: (JHUDatapoint date: (Date d: 5 m: 4 y: 2020) confirmed: 108 deaths: 8 recovered: 40);\x0a\x09\x09\x09add: (JHUDatapoint date: (Date d: 6 m: 4 y: 2020) confirmed: 154 deaths: 9 recovered: 51);\x0a\x09\x09\x09add: (JHUDatapoint date: (Date d: 7 m: 4 y: 2020) confirmed: 185 deaths: 9 recovered: 58);\x0a\x09\x09\x09add: (JHUDatapoint date: (Date d: 8 m: 4 y: 2020) confirmed: 227 deaths: 14 recovered: 82);\x0a\x09\x09\x09add: (JHUDatapoint date: (Date d: 9 m: 4 y: 2020) confirmed: 276 deaths: 21 recovered: 113);\x0a\x09\x09\x09yourself).\x0a\x09self assert: (Averager average: 7 of: #()) equals:  #().\x0a\x09self assert: (Averager average: 7 of: (series first: 1)) equals:  (Array with: (JHUDatapoint date: (Date d: 1 m: 4 y: 2020) confirmed: 20 / 7 deaths: 3 / 7 recovered: 6 / 7)).\x0a\x09self assert: (Averager average: 7 of: (series first: 2)) equals:  (Array \x0a\x09\x09with: (JHUDatapoint date: (Date d: 1 m: 4 y: 2020) confirmed: 20 / 7 deaths: 3 / 7 recovered: 6 / 7)\x0a\x09\x09with: (JHUDatapoint date: (Date d: 2 m: 4 y: 2020) confirmed: 62 / 7 deaths: 7 / 7 recovered: 17 / 7)).\x0a\x09self assert: (Averager average: 7 of: (series first: 3)) equals:  (Array \x0a\x09\x09with: (JHUDatapoint date: (Date d: 1 m: 4 y: 2020) confirmed: 20 / 7 deaths: 3 / 7 recovered: 6 / 7)\x0a\x09\x09with: (JHUDatapoint date: (Date d: 2 m: 4 y: 2020) confirmed: 62 / 7 deaths: 7 / 7 recovered: 17 / 7)\x0a\x09\x09with: (JHUDatapoint date: (Date d: 3 m: 4 y: 2020) confirmed: 118 / 7 deaths: 13 / 7 recovered: 35 / 7)).\x0a\x09self assert: (Averager average: 7 of: (series first: 4)) equals:  (Array new\x0a\x09\x09add: (JHUDatapoint date: (Date d: 1 m: 4 y: 2020) confirmed: 20 / 7 deaths: 3 / 7 recovered: 6 / 7);\x0a\x09\x09add: (JHUDatapoint date: (Date d: 2 m: 4 y: 2020) confirmed: 62 / 7 deaths: 7 / 7 recovered: 17 / 7);\x0a\x09\x09add: (JHUDatapoint date: (Date d: 3 m: 4 y: 2020) confirmed: 118 / 7 deaths: 13 / 7 recovered: 35 / 7);\x0a\x09\x09add: (JHUDatapoint date: (Date d: 4 m: 4 y: 2020) confirmed: 201 / 7 deaths: 21 / 7 recovered: 62 / 7);\x0a\x09\x09yourself).\x0a\x09self assert: (Averager average: 7 of: (series first: 5)) equals:  (Array new\x0a\x09\x09add: (JHUDatapoint date: (Date d: 1 m: 4 y: 2020) confirmed: 20 / 7 deaths: 3 / 7 recovered: 6 / 7);\x0a\x09\x09add: (JHUDatapoint date: (Date d: 2 m: 4 y: 2020) confirmed: 62 / 7 deaths: 7 / 7 recovered: 17 / 7);\x0a\x09\x09add: (JHUDatapoint date: (Date d: 3 m: 4 y: 2020) confirmed: 118 / 7 deaths: 13 / 7 recovered: 35 / 7);\x0a\x09\x09add: (JHUDatapoint date: (Date d: 4 m: 4 y: 2020) confirmed: 201 / 7 deaths: 21 / 7 recovered: 62 / 7);\x0a\x09\x09add: (JHUDatapoint date: (Date d: 5 m: 4 y: 2020) confirmed: 309 / 7 deaths: 29 / 7 recovered: 102 / 7);\x0a\x09\x09yourself).\x0a\x09self assert: (Averager average: 7 of: (series first: 6)) equals:  (Array new\x0a\x09\x09add: (JHUDatapoint date: (Date d: 1 m: 4 y: 2020) confirmed: 20 / 7 deaths: 3 / 7 recovered: 6 / 7);\x0a\x09\x09add: (JHUDatapoint date: (Date d: 2 m: 4 y: 2020) confirmed: 62 / 7 deaths: 7 / 7 recovered: 17 / 7);\x0a\x09\x09add: (JHUDatapoint date: (Date d: 3 m: 4 y: 2020) confirmed: 118 / 7 deaths: 13 / 7 recovered: 35 / 7);\x0a\x09\x09add: (JHUDatapoint date: (Date d: 4 m: 4 y: 2020) confirmed: 201 / 7 deaths: 21 / 7 recovered: 62 / 7);\x0a\x09\x09add: (JHUDatapoint date: (Date d: 5 m: 4 y: 2020) confirmed: 309 / 7 deaths: 29 / 7 recovered: 102 / 7);\x0a\x09\x09add: (JHUDatapoint date: (Date d: 6 m: 4 y: 2020) confirmed: 463 / 7 deaths: 38 / 7 recovered: 153 / 7);\x0a\x09\x09yourself).\x0a\x09self assert: (Averager average: 7 of: (series first: 7)) equals:  (Array new\x0a\x09\x09add: (JHUDatapoint date: (Date d: 1 m: 4 y: 2020) confirmed: 20 / 7 deaths: 3 / 7 recovered: 6 / 7);\x0a\x09\x09add: (JHUDatapoint date: (Date d: 2 m: 4 y: 2020) confirmed: 62 / 7 deaths: 7 / 7 recovered: 17 / 7);\x0a\x09\x09add: (JHUDatapoint date: (Date d: 3 m: 4 y: 2020) confirmed: 118 / 7 deaths: 13 / 7 recovered: 35 / 7);\x0a\x09\x09add: (JHUDatapoint date: (Date d: 4 m: 4 y: 2020) confirmed: 201 / 7 deaths: 21 / 7 recovered: 62 / 7);\x0a\x09\x09add: (JHUDatapoint date: (Date d: 5 m: 4 y: 2020) confirmed: 309 / 7 deaths: 29 / 7 recovered: 102 / 7);\x0a\x09\x09add: (JHUDatapoint date: (Date d: 6 m: 4 y: 2020) confirmed: 463 / 7 deaths: 38 / 7 recovered: 153 / 7);\x0a\x09\x09add: (JHUDatapoint date: (Date d: 7 m: 4 y: 2020) confirmed: 648 / 7 deaths: 47 / 7 recovered: 211 / 7);\x0a\x09\x09yourself).\x0a\x09self assert: (Averager average: 7 of: (series first: 8)) equals:  (Array new\x0a\x09\x09add: (JHUDatapoint date: (Date d: 1 m: 4 y: 2020) confirmed: 20 / 7 deaths: 3 / 7 recovered: 6 / 7);\x0a\x09\x09add: (JHUDatapoint date: (Date d: 2 m: 4 y: 2020) confirmed: 62 / 7 deaths: 7 / 7 recovered: 17 / 7);\x0a\x09\x09add: (JHUDatapoint date: (Date d: 3 m: 4 y: 2020) confirmed: 118 / 7 deaths: 13 / 7 recovered: 35 / 7);\x0a\x09\x09add: (JHUDatapoint date: (Date d: 4 m: 4 y: 2020) confirmed: 201 / 7 deaths: 21 / 7 recovered: 62 / 7);\x0a\x09\x09add: (JHUDatapoint date: (Date d: 5 m: 4 y: 2020) confirmed: 309 / 7 deaths: 29 / 7 recovered: 102 / 7);\x0a\x09\x09add: (JHUDatapoint date: (Date d: 6 m: 4 y: 2020) confirmed: 463 / 7 deaths: 38 / 7 recovered: 153 / 7);\x0a\x09\x09add: (JHUDatapoint date: (Date d: 7 m: 4 y: 2020) confirmed: 648 / 7 deaths: 47 / 7 recovered: 211 / 7);\x0a\x09\x09add: (JHUDatapoint date: (Date d: 8 m: 4 y: 2020) confirmed: 855 / 7 deaths: 58 / 7 recovered: 287 / 7);\x0a\x09\x09yourself).\x0a\x09self assert: (Averager average: 7 of: series) equals:  (Array new\x0a\x09\x09add: (JHUDatapoint date: (Date d: 1 m: 4 y: 2020) confirmed: 20 / 7 deaths: 3 / 7 recovered: 6 / 7);\x0a\x09\x09add: (JHUDatapoint date: (Date d: 2 m: 4 y: 2020) confirmed: 62 / 7 deaths: 7 / 7 recovered: 17 / 7);\x0a\x09\x09add: (JHUDatapoint date: (Date d: 3 m: 4 y: 2020) confirmed: 118 / 7 deaths: 13 / 7 recovered: 35 / 7);\x0a\x09\x09add: (JHUDatapoint date: (Date d: 4 m: 4 y: 2020) confirmed: 201 / 7 deaths: 21 / 7 recovered: 62 / 7);\x0a\x09\x09add: (JHUDatapoint date: (Date d: 5 m: 4 y: 2020) confirmed: 309 / 7 deaths: 29 / 7 recovered: 102 / 7);\x0a\x09\x09add: (JHUDatapoint date: (Date d: 6 m: 4 y: 2020) confirmed: 463 / 7 deaths: 38 / 7 recovered: 153 / 7);\x0a\x09\x09add: (JHUDatapoint date: (Date d: 7 m: 4 y: 2020) confirmed: 648 / 7 deaths: 47 / 7 recovered: 211 / 7);\x0a\x09\x09add: (JHUDatapoint date: (Date d: 8 m: 4 y: 2020) confirmed: 855 / 7 deaths: 58 / 7 recovered: 287 / 7);\x0a\x09\x09add: (JHUDatapoint date: (Date d: 9 m: 4 y: 2020) confirmed: 1089 / 7 deaths: 75 / 7 recovered: 389 / 7);\x0a\x09\x09yourself).",
referencedClasses: ["OrderedCollection", "JHUDatapoint", "Date", "Averager", "Array"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["add:", "new", "date:confirmed:deaths:recovered:", "d:m:y:", "yourself", "assert:equals:", "average:of:", "first:", "with:", "/", "with:with:", "with:with:with:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var series;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13;
$1=[$recv($globals.OrderedCollection)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=1
//>>excludeEnd("ctx");
][0];
[$recv($1)._add_([$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((1),(4),(2020))
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
[$recv($1)._add_([$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((2),(4),(2020))
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
[$recv($1)._add_([$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((3),(4),(2020))
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
[$recv($1)._add_([$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((4),(4),(2020))
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
[$recv($1)._add_([$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((5),(4),(2020))
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
[$recv($1)._add_([$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((6),(4),(2020))
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
[$recv($1)._add_([$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((7),(4),(2020))
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
[$recv($1)._add_([$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((8),(4),(2020))
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
[$recv($1)._add_([$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((9),(4),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=9
//>>excludeEnd("ctx");
][0],(276),(21),(113))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["date:confirmed:deaths:recovered:"]=9
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=9
//>>excludeEnd("ctx");
][0];
series=[$recv($1)._yourself()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["yourself"]=1
//>>excludeEnd("ctx");
][0];
[$self._assert_equals_([$recv($globals.Averager)._average_of_((7),[])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["average:of:"]=1
//>>excludeEnd("ctx");
][0],[])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:equals:"]=1
//>>excludeEnd("ctx");
][0];
[$self._assert_equals_([$recv($globals.Averager)._average_of_((7),[$recv(series)._first_((1))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["first:"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["average:of:"]=2
//>>excludeEnd("ctx");
][0],$recv($globals.Array)._with_([$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((1),(4),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=10
//>>excludeEnd("ctx");
][0],[(20).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=1
//>>excludeEnd("ctx");
][0],[(3).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=2
//>>excludeEnd("ctx");
][0],[(6).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=3
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["date:confirmed:deaths:recovered:"]=10
//>>excludeEnd("ctx");
][0]))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:equals:"]=2
//>>excludeEnd("ctx");
][0];
[$self._assert_equals_([$recv($globals.Averager)._average_of_((7),[$recv(series)._first_((2))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["first:"]=2
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["average:of:"]=3
//>>excludeEnd("ctx");
][0],$recv($globals.Array)._with_with_([$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((1),(4),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=11
//>>excludeEnd("ctx");
][0],[(20).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=4
//>>excludeEnd("ctx");
][0],[(3).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=5
//>>excludeEnd("ctx");
][0],[(6).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=6
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["date:confirmed:deaths:recovered:"]=11
//>>excludeEnd("ctx");
][0],[$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((2),(4),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=12
//>>excludeEnd("ctx");
][0],[(62).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=7
//>>excludeEnd("ctx");
][0],[(7).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=8
//>>excludeEnd("ctx");
][0],[(17).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=9
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["date:confirmed:deaths:recovered:"]=12
//>>excludeEnd("ctx");
][0]))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:equals:"]=3
//>>excludeEnd("ctx");
][0];
[$self._assert_equals_([$recv($globals.Averager)._average_of_((7),[$recv(series)._first_((3))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["first:"]=3
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["average:of:"]=4
//>>excludeEnd("ctx");
][0],$recv($globals.Array)._with_with_with_([$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((1),(4),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=13
//>>excludeEnd("ctx");
][0],[(20).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=10
//>>excludeEnd("ctx");
][0],[(3).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=11
//>>excludeEnd("ctx");
][0],[(6).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=12
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["date:confirmed:deaths:recovered:"]=13
//>>excludeEnd("ctx");
][0],[$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((2),(4),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=14
//>>excludeEnd("ctx");
][0],[(62).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=13
//>>excludeEnd("ctx");
][0],[(7).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=14
//>>excludeEnd("ctx");
][0],[(17).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=15
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["date:confirmed:deaths:recovered:"]=14
//>>excludeEnd("ctx");
][0],[$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((3),(4),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=15
//>>excludeEnd("ctx");
][0],[(118).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=16
//>>excludeEnd("ctx");
][0],[(13).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=17
//>>excludeEnd("ctx");
][0],[(35).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=18
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["date:confirmed:deaths:recovered:"]=15
//>>excludeEnd("ctx");
][0]))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:equals:"]=4
//>>excludeEnd("ctx");
][0];
$2=[$recv($globals.Averager)._average_of_((7),[$recv(series)._first_((4))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["first:"]=4
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["average:of:"]=5
//>>excludeEnd("ctx");
][0];
$3=[$recv($globals.Array)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=2
//>>excludeEnd("ctx");
][0];
[$recv($3)._add_([$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((1),(4),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=16
//>>excludeEnd("ctx");
][0],[(20).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=19
//>>excludeEnd("ctx");
][0],[(3).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=20
//>>excludeEnd("ctx");
][0],[(6).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=21
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["date:confirmed:deaths:recovered:"]=16
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=10
//>>excludeEnd("ctx");
][0];
[$recv($3)._add_([$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((2),(4),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=17
//>>excludeEnd("ctx");
][0],[(62).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=22
//>>excludeEnd("ctx");
][0],[(7).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=23
//>>excludeEnd("ctx");
][0],[(17).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=24
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["date:confirmed:deaths:recovered:"]=17
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=11
//>>excludeEnd("ctx");
][0];
[$recv($3)._add_([$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((3),(4),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=18
//>>excludeEnd("ctx");
][0],[(118).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=25
//>>excludeEnd("ctx");
][0],[(13).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=26
//>>excludeEnd("ctx");
][0],[(35).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=27
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["date:confirmed:deaths:recovered:"]=18
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=12
//>>excludeEnd("ctx");
][0];
[$recv($3)._add_([$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((4),(4),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=19
//>>excludeEnd("ctx");
][0],[(201).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=28
//>>excludeEnd("ctx");
][0],[(21).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=29
//>>excludeEnd("ctx");
][0],[(62).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=30
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["date:confirmed:deaths:recovered:"]=19
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=13
//>>excludeEnd("ctx");
][0];
[$self._assert_equals_($2,[$recv($3)._yourself()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["yourself"]=2
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:equals:"]=5
//>>excludeEnd("ctx");
][0];
$4=[$recv($globals.Averager)._average_of_((7),[$recv(series)._first_((5))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["first:"]=5
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["average:of:"]=6
//>>excludeEnd("ctx");
][0];
$5=[$recv($globals.Array)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=3
//>>excludeEnd("ctx");
][0];
[$recv($5)._add_([$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((1),(4),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=20
//>>excludeEnd("ctx");
][0],[(20).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=31
//>>excludeEnd("ctx");
][0],[(3).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=32
//>>excludeEnd("ctx");
][0],[(6).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=33
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["date:confirmed:deaths:recovered:"]=20
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=14
//>>excludeEnd("ctx");
][0];
[$recv($5)._add_([$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((2),(4),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=21
//>>excludeEnd("ctx");
][0],[(62).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=34
//>>excludeEnd("ctx");
][0],[(7).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=35
//>>excludeEnd("ctx");
][0],[(17).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=36
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["date:confirmed:deaths:recovered:"]=21
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=15
//>>excludeEnd("ctx");
][0];
[$recv($5)._add_([$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((3),(4),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=22
//>>excludeEnd("ctx");
][0],[(118).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=37
//>>excludeEnd("ctx");
][0],[(13).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=38
//>>excludeEnd("ctx");
][0],[(35).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=39
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["date:confirmed:deaths:recovered:"]=22
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=16
//>>excludeEnd("ctx");
][0];
[$recv($5)._add_([$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((4),(4),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=23
//>>excludeEnd("ctx");
][0],[(201).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=40
//>>excludeEnd("ctx");
][0],[(21).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=41
//>>excludeEnd("ctx");
][0],[(62).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=42
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["date:confirmed:deaths:recovered:"]=23
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=17
//>>excludeEnd("ctx");
][0];
[$recv($5)._add_([$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((5),(4),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=24
//>>excludeEnd("ctx");
][0],[(309).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=43
//>>excludeEnd("ctx");
][0],[(29).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=44
//>>excludeEnd("ctx");
][0],[(102).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=45
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["date:confirmed:deaths:recovered:"]=24
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=18
//>>excludeEnd("ctx");
][0];
[$self._assert_equals_($4,[$recv($5)._yourself()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["yourself"]=3
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:equals:"]=6
//>>excludeEnd("ctx");
][0];
$6=[$recv($globals.Averager)._average_of_((7),[$recv(series)._first_((6))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["first:"]=6
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["average:of:"]=7
//>>excludeEnd("ctx");
][0];
$7=[$recv($globals.Array)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=4
//>>excludeEnd("ctx");
][0];
[$recv($7)._add_([$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((1),(4),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=25
//>>excludeEnd("ctx");
][0],[(20).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=46
//>>excludeEnd("ctx");
][0],[(3).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=47
//>>excludeEnd("ctx");
][0],[(6).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=48
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["date:confirmed:deaths:recovered:"]=25
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=19
//>>excludeEnd("ctx");
][0];
[$recv($7)._add_([$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((2),(4),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=26
//>>excludeEnd("ctx");
][0],[(62).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=49
//>>excludeEnd("ctx");
][0],[(7).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=50
//>>excludeEnd("ctx");
][0],[(17).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=51
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["date:confirmed:deaths:recovered:"]=26
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=20
//>>excludeEnd("ctx");
][0];
[$recv($7)._add_([$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((3),(4),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=27
//>>excludeEnd("ctx");
][0],[(118).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=52
//>>excludeEnd("ctx");
][0],[(13).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=53
//>>excludeEnd("ctx");
][0],[(35).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=54
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["date:confirmed:deaths:recovered:"]=27
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=21
//>>excludeEnd("ctx");
][0];
[$recv($7)._add_([$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((4),(4),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=28
//>>excludeEnd("ctx");
][0],[(201).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=55
//>>excludeEnd("ctx");
][0],[(21).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=56
//>>excludeEnd("ctx");
][0],[(62).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=57
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["date:confirmed:deaths:recovered:"]=28
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=22
//>>excludeEnd("ctx");
][0];
[$recv($7)._add_([$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((5),(4),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=29
//>>excludeEnd("ctx");
][0],[(309).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=58
//>>excludeEnd("ctx");
][0],[(29).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=59
//>>excludeEnd("ctx");
][0],[(102).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=60
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["date:confirmed:deaths:recovered:"]=29
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=23
//>>excludeEnd("ctx");
][0];
[$recv($7)._add_([$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((6),(4),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=30
//>>excludeEnd("ctx");
][0],[(463).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=61
//>>excludeEnd("ctx");
][0],[(38).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=62
//>>excludeEnd("ctx");
][0],[(153).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=63
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["date:confirmed:deaths:recovered:"]=30
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=24
//>>excludeEnd("ctx");
][0];
[$self._assert_equals_($6,[$recv($7)._yourself()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["yourself"]=4
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:equals:"]=7
//>>excludeEnd("ctx");
][0];
$8=[$recv($globals.Averager)._average_of_((7),[$recv(series)._first_((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["first:"]=7
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["average:of:"]=8
//>>excludeEnd("ctx");
][0];
$9=[$recv($globals.Array)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=5
//>>excludeEnd("ctx");
][0];
[$recv($9)._add_([$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((1),(4),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=31
//>>excludeEnd("ctx");
][0],[(20).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=64
//>>excludeEnd("ctx");
][0],[(3).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=65
//>>excludeEnd("ctx");
][0],[(6).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=66
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["date:confirmed:deaths:recovered:"]=31
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=25
//>>excludeEnd("ctx");
][0];
[$recv($9)._add_([$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((2),(4),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=32
//>>excludeEnd("ctx");
][0],[(62).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=67
//>>excludeEnd("ctx");
][0],[(7).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=68
//>>excludeEnd("ctx");
][0],[(17).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=69
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["date:confirmed:deaths:recovered:"]=32
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=26
//>>excludeEnd("ctx");
][0];
[$recv($9)._add_([$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((3),(4),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=33
//>>excludeEnd("ctx");
][0],[(118).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=70
//>>excludeEnd("ctx");
][0],[(13).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=71
//>>excludeEnd("ctx");
][0],[(35).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=72
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["date:confirmed:deaths:recovered:"]=33
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=27
//>>excludeEnd("ctx");
][0];
[$recv($9)._add_([$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((4),(4),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=34
//>>excludeEnd("ctx");
][0],[(201).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=73
//>>excludeEnd("ctx");
][0],[(21).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=74
//>>excludeEnd("ctx");
][0],[(62).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=75
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["date:confirmed:deaths:recovered:"]=34
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=28
//>>excludeEnd("ctx");
][0];
[$recv($9)._add_([$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((5),(4),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=35
//>>excludeEnd("ctx");
][0],[(309).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=76
//>>excludeEnd("ctx");
][0],[(29).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=77
//>>excludeEnd("ctx");
][0],[(102).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=78
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["date:confirmed:deaths:recovered:"]=35
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=29
//>>excludeEnd("ctx");
][0];
[$recv($9)._add_([$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((6),(4),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=36
//>>excludeEnd("ctx");
][0],[(463).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=79
//>>excludeEnd("ctx");
][0],[(38).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=80
//>>excludeEnd("ctx");
][0],[(153).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=81
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["date:confirmed:deaths:recovered:"]=36
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=30
//>>excludeEnd("ctx");
][0];
[$recv($9)._add_([$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((7),(4),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=37
//>>excludeEnd("ctx");
][0],[(648).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=82
//>>excludeEnd("ctx");
][0],[(47).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=83
//>>excludeEnd("ctx");
][0],[(211).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=84
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["date:confirmed:deaths:recovered:"]=37
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=31
//>>excludeEnd("ctx");
][0];
[$self._assert_equals_($8,[$recv($9)._yourself()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["yourself"]=5
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:equals:"]=8
//>>excludeEnd("ctx");
][0];
$10=[$recv($globals.Averager)._average_of_((7),$recv(series)._first_((8)))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["average:of:"]=9
//>>excludeEnd("ctx");
][0];
$11=[$recv($globals.Array)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=6
//>>excludeEnd("ctx");
][0];
[$recv($11)._add_([$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((1),(4),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=38
//>>excludeEnd("ctx");
][0],[(20).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=85
//>>excludeEnd("ctx");
][0],[(3).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=86
//>>excludeEnd("ctx");
][0],[(6).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=87
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["date:confirmed:deaths:recovered:"]=38
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=32
//>>excludeEnd("ctx");
][0];
[$recv($11)._add_([$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((2),(4),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=39
//>>excludeEnd("ctx");
][0],[(62).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=88
//>>excludeEnd("ctx");
][0],[(7).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=89
//>>excludeEnd("ctx");
][0],[(17).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=90
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["date:confirmed:deaths:recovered:"]=39
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=33
//>>excludeEnd("ctx");
][0];
[$recv($11)._add_([$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((3),(4),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=40
//>>excludeEnd("ctx");
][0],[(118).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=91
//>>excludeEnd("ctx");
][0],[(13).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=92
//>>excludeEnd("ctx");
][0],[(35).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=93
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["date:confirmed:deaths:recovered:"]=40
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=34
//>>excludeEnd("ctx");
][0];
[$recv($11)._add_([$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((4),(4),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=41
//>>excludeEnd("ctx");
][0],[(201).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=94
//>>excludeEnd("ctx");
][0],[(21).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=95
//>>excludeEnd("ctx");
][0],[(62).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=96
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["date:confirmed:deaths:recovered:"]=41
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=35
//>>excludeEnd("ctx");
][0];
[$recv($11)._add_([$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((5),(4),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=42
//>>excludeEnd("ctx");
][0],[(309).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=97
//>>excludeEnd("ctx");
][0],[(29).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=98
//>>excludeEnd("ctx");
][0],[(102).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=99
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["date:confirmed:deaths:recovered:"]=42
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=36
//>>excludeEnd("ctx");
][0];
[$recv($11)._add_([$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((6),(4),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=43
//>>excludeEnd("ctx");
][0],[(463).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=100
//>>excludeEnd("ctx");
][0],[(38).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=101
//>>excludeEnd("ctx");
][0],[(153).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=102
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["date:confirmed:deaths:recovered:"]=43
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=37
//>>excludeEnd("ctx");
][0];
[$recv($11)._add_([$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((7),(4),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=44
//>>excludeEnd("ctx");
][0],[(648).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=103
//>>excludeEnd("ctx");
][0],[(47).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=104
//>>excludeEnd("ctx");
][0],[(211).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=105
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["date:confirmed:deaths:recovered:"]=44
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=38
//>>excludeEnd("ctx");
][0];
[$recv($11)._add_([$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((8),(4),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=45
//>>excludeEnd("ctx");
][0],[(855).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=106
//>>excludeEnd("ctx");
][0],[(58).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=107
//>>excludeEnd("ctx");
][0],[(287).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=108
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["date:confirmed:deaths:recovered:"]=45
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=39
//>>excludeEnd("ctx");
][0];
[$self._assert_equals_($10,[$recv($11)._yourself()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["yourself"]=6
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:equals:"]=9
//>>excludeEnd("ctx");
][0];
$12=$recv($globals.Averager)._average_of_((7),series);
$13=$recv($globals.Array)._new();
[$recv($13)._add_([$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((1),(4),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=46
//>>excludeEnd("ctx");
][0],[(20).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=109
//>>excludeEnd("ctx");
][0],[(3).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=110
//>>excludeEnd("ctx");
][0],[(6).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=111
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["date:confirmed:deaths:recovered:"]=46
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=40
//>>excludeEnd("ctx");
][0];
[$recv($13)._add_([$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((2),(4),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=47
//>>excludeEnd("ctx");
][0],[(62).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=112
//>>excludeEnd("ctx");
][0],[(7).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=113
//>>excludeEnd("ctx");
][0],[(17).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=114
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["date:confirmed:deaths:recovered:"]=47
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=41
//>>excludeEnd("ctx");
][0];
[$recv($13)._add_([$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((3),(4),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=48
//>>excludeEnd("ctx");
][0],[(118).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=115
//>>excludeEnd("ctx");
][0],[(13).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=116
//>>excludeEnd("ctx");
][0],[(35).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=117
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["date:confirmed:deaths:recovered:"]=48
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=42
//>>excludeEnd("ctx");
][0];
[$recv($13)._add_([$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((4),(4),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=49
//>>excludeEnd("ctx");
][0],[(201).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=118
//>>excludeEnd("ctx");
][0],[(21).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=119
//>>excludeEnd("ctx");
][0],[(62).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=120
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["date:confirmed:deaths:recovered:"]=49
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=43
//>>excludeEnd("ctx");
][0];
[$recv($13)._add_([$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((5),(4),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=50
//>>excludeEnd("ctx");
][0],[(309).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=121
//>>excludeEnd("ctx");
][0],[(29).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=122
//>>excludeEnd("ctx");
][0],[(102).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=123
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["date:confirmed:deaths:recovered:"]=50
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=44
//>>excludeEnd("ctx");
][0];
[$recv($13)._add_([$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((6),(4),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=51
//>>excludeEnd("ctx");
][0],[(463).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=124
//>>excludeEnd("ctx");
][0],[(38).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=125
//>>excludeEnd("ctx");
][0],[(153).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=126
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["date:confirmed:deaths:recovered:"]=51
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=45
//>>excludeEnd("ctx");
][0];
[$recv($13)._add_([$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((7),(4),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=52
//>>excludeEnd("ctx");
][0],[(648).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=127
//>>excludeEnd("ctx");
][0],[(47).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=128
//>>excludeEnd("ctx");
][0],[(211).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=129
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["date:confirmed:deaths:recovered:"]=52
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=46
//>>excludeEnd("ctx");
][0];
[$recv($13)._add_([$recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_([$recv($globals.Date)._d_m_y_((8),(4),(2020))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["d:m:y:"]=53
//>>excludeEnd("ctx");
][0],[(855).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=130
//>>excludeEnd("ctx");
][0],[(58).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=131
//>>excludeEnd("ctx");
][0],[(287).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=132
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["date:confirmed:deaths:recovered:"]=53
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=47
//>>excludeEnd("ctx");
][0];
$recv($13)._add_($recv($globals.JHUDatapoint)._date_confirmed_deaths_recovered_($recv($globals.Date)._d_m_y_((9),(4),(2020)),[(1089).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=133
//>>excludeEnd("ctx");
][0],[(75).__slash((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=134
//>>excludeEnd("ctx");
][0],(389).__slash((7))));
$self._assert_equals_($12,$recv($13)._yourself());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testMovingAverage",{series:series})});
//>>excludeEnd("ctx");
}; }),
$globals.Covid19viewTest);



$core.addClass("ScaleTest", $globals.TestCase, "Covid19view-Tests");
$core.addMethod(
$core.method({
selector: "testExponent",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testExponent\x0a\x09self assert: 47 exponent equals: 1.\x0a\x09self assert: 3577 exponent equals: 3.\x0a\x09self assert: 1000 exponent equals: 3.   \x22wrong without the delta\x22\x0a\x09self assert: 999 exponent equals: 2.\x0a\x09self assert: 1001 exponent equals: 3.\x0a\x09self assert: 10000 exponent equals: 4.\x0a\x09self assert: 9999 exponent equals: 3.\x0a\x09self assert: 10001 exponent equals: 4.\x0a\x09self assert: 100000 exponent equals: 5.\x0a\x09self assert: 99999 exponent equals: 4.\x0a\x09self assert: 100001 exponent equals: 5.\x0a\x09self assert: 1000000 exponent equals: 6.   \x22wrong without the delta\x22\x0a\x09self assert: 999999 exponent equals: 5.\x0a\x09self assert: 1000001 exponent equals: 6.\x0a\x09self assert: 10000000 exponent equals: 7.\x0a\x09self assert: 9999999 exponent equals: 6.\x0a\x09self assert: 10000001 exponent equals: 7.\x0a\x09self assert: 5 exponent equals: 0.\x0a\x09self assert: 1 exponent equals: 0.\x0a\x09self assert: 0.1 exponent equals: -1.\x0a\x09self assert: 0 exponent printString equals: '-Infinity'.\x0a\x09self assert: -2 exponent printString equals: 'NaN'.",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "exponent", "printString"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[$self._assert_equals_([(47)._exponent()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["exponent"]=1
//>>excludeEnd("ctx");
][0],(1))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:equals:"]=1
//>>excludeEnd("ctx");
][0];
[$self._assert_equals_([(3577)._exponent()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["exponent"]=2
//>>excludeEnd("ctx");
][0],(3))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:equals:"]=2
//>>excludeEnd("ctx");
][0];
[$self._assert_equals_([(1000)._exponent()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["exponent"]=3
//>>excludeEnd("ctx");
][0],(3))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:equals:"]=3
//>>excludeEnd("ctx");
][0];
[$self._assert_equals_([(999)._exponent()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["exponent"]=4
//>>excludeEnd("ctx");
][0],(2))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:equals:"]=4
//>>excludeEnd("ctx");
][0];
[$self._assert_equals_([(1001)._exponent()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["exponent"]=5
//>>excludeEnd("ctx");
][0],(3))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:equals:"]=5
//>>excludeEnd("ctx");
][0];
[$self._assert_equals_([(10000)._exponent()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["exponent"]=6
//>>excludeEnd("ctx");
][0],(4))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:equals:"]=6
//>>excludeEnd("ctx");
][0];
[$self._assert_equals_([(9999)._exponent()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["exponent"]=7
//>>excludeEnd("ctx");
][0],(3))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:equals:"]=7
//>>excludeEnd("ctx");
][0];
[$self._assert_equals_([(10001)._exponent()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["exponent"]=8
//>>excludeEnd("ctx");
][0],(4))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:equals:"]=8
//>>excludeEnd("ctx");
][0];
[$self._assert_equals_([(100000)._exponent()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["exponent"]=9
//>>excludeEnd("ctx");
][0],(5))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:equals:"]=9
//>>excludeEnd("ctx");
][0];
[$self._assert_equals_([(99999)._exponent()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["exponent"]=10
//>>excludeEnd("ctx");
][0],(4))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:equals:"]=10
//>>excludeEnd("ctx");
][0];
[$self._assert_equals_([(100001)._exponent()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["exponent"]=11
//>>excludeEnd("ctx");
][0],(5))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:equals:"]=11
//>>excludeEnd("ctx");
][0];
[$self._assert_equals_([(1000000)._exponent()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["exponent"]=12
//>>excludeEnd("ctx");
][0],(6))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:equals:"]=12
//>>excludeEnd("ctx");
][0];
[$self._assert_equals_([(999999)._exponent()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["exponent"]=13
//>>excludeEnd("ctx");
][0],(5))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:equals:"]=13
//>>excludeEnd("ctx");
][0];
[$self._assert_equals_([(1000001)._exponent()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["exponent"]=14
//>>excludeEnd("ctx");
][0],(6))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:equals:"]=14
//>>excludeEnd("ctx");
][0];
[$self._assert_equals_([(10000000)._exponent()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["exponent"]=15
//>>excludeEnd("ctx");
][0],(7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:equals:"]=15
//>>excludeEnd("ctx");
][0];
[$self._assert_equals_([(9999999)._exponent()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["exponent"]=16
//>>excludeEnd("ctx");
][0],(6))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:equals:"]=16
//>>excludeEnd("ctx");
][0];
[$self._assert_equals_([(10000001)._exponent()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["exponent"]=17
//>>excludeEnd("ctx");
][0],(7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:equals:"]=17
//>>excludeEnd("ctx");
][0];
[$self._assert_equals_([(5)._exponent()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["exponent"]=18
//>>excludeEnd("ctx");
][0],(0))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:equals:"]=18
//>>excludeEnd("ctx");
][0];
[$self._assert_equals_([(1)._exponent()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["exponent"]=19
//>>excludeEnd("ctx");
][0],(0))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:equals:"]=19
//>>excludeEnd("ctx");
][0];
[$self._assert_equals_([(0.1)._exponent()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["exponent"]=20
//>>excludeEnd("ctx");
][0],(-1))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:equals:"]=20
//>>excludeEnd("ctx");
][0];
[$self._assert_equals_([$recv([(0)._exponent()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["exponent"]=21
//>>excludeEnd("ctx");
][0])._printString()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["printString"]=1
//>>excludeEnd("ctx");
][0],"-Infinity")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:equals:"]=21
//>>excludeEnd("ctx");
][0];
$self._assert_equals_($recv((-2)._exponent())._printString(),"NaN");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testExponent",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ScaleTest);

$core.addMethod(
$core.method({
selector: "testVerticalLogarithmicMapping",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testVerticalLogarithmicMapping\x0a\x09self assert: ((LogarithmicValuescale from: 1 to: 10) at: 1) equals: 0.\x0a\x09self assert: ((LogarithmicValuescale from: 1 to: 10) at: 10) equals: 1.\x0a\x09self assert: ((LogarithmicValuescale from: 1 to: 10) at: 100) equals: 2.",
referencedClasses: ["LogarithmicValuescale"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "at:", "from:to:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[$self._assert_equals_([$recv([$recv($globals.LogarithmicValuescale)._from_to_((1),(10))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["from:to:"]=1
//>>excludeEnd("ctx");
][0])._at_((1))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:"]=1
//>>excludeEnd("ctx");
][0],(0))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:equals:"]=1
//>>excludeEnd("ctx");
][0];
[$self._assert_equals_([$recv([$recv($globals.LogarithmicValuescale)._from_to_((1),(10))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["from:to:"]=2
//>>excludeEnd("ctx");
][0])._at_((10))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:"]=2
//>>excludeEnd("ctx");
][0],(1))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:equals:"]=2
//>>excludeEnd("ctx");
][0];
$self._assert_equals_($recv($recv($globals.LogarithmicValuescale)._from_to_((1),(10)))._at_((100)),(2));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testVerticalLogarithmicMapping",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ScaleTest);


});
