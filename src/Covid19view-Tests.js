define(["amber/boot", "require", "amber/core/SUnit"], function($boot,requirejs){"use strict";
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("Covid19view-Tests");
$pkg.innerEval = function (expr) { return eval(expr); };
$pkg.transport = {"type":"amd","amdNamespace":"amber-covid19view"};

$core.addClass("Covid19viewTest", $globals.TestCase, [], "Covid19view-Tests");
$core.addMethod(
$core.method({
selector: "testDatasetAddition",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testDatasetAddition\x0a\x09self assert: (Dataset example + Dataset examplePlus5Days) printString = 'Dataset[14]'",
referencedClasses: ["Dataset"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:", "=", "printString", "+", "example", "examplePlus5Days"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._assert_($recv($recv($recv($recv($globals.Dataset)._example()).__plus($recv($globals.Dataset)._examplePlus5Days()))._printString()).__eq("Dataset[14]"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testDatasetAddition",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Covid19viewTest);

$core.addMethod(
$core.method({
selector: "testJHUDatapoint",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testJHUDatapoint\x0a\x09\x22does not work: how can I create a JSON for tests?\x22\x0a\x09\x0a\x09((Promise value: [:model | model value: '{\x22date\x22: {\x22d\x22: 27, \x22m\x22: 1, \x22y\x22: 2020}, \x22c\x22: 1}']) then: #json) then: [:json |\x0a\x09\x09console log: json.\x0a\x09\x09self assert: (JHUDatapoint fromJson: json) printString = '']",
referencedClasses: ["Promise", "JHUDatapoint"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["then:", "value:", "log:", "assert:", "=", "printString", "fromJson:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[$recv($recv([$recv($globals.Promise)._value_((function(model){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(model)._value_("{\x22date\x22: {\x22d\x22: 27, \x22m\x22: 1, \x22y\x22: 2020}, \x22c\x22: 1}");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({model:model},$ctx1,1)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["value:"]=1
//>>excludeEnd("ctx");
][0])._then_("json"))._then_((function(json){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(console)._log_(json);
return $self._assert_($recv($recv($recv($globals.JHUDatapoint)._fromJson_(json))._printString()).__eq(""));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({json:json},$ctx1,2)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["then:"]=1
//>>excludeEnd("ctx");
][0];
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testJHUDatapoint",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Covid19viewTest);



$core.addClass("ScaleTest", $globals.TestCase, [], "Covid19view-Tests");
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
