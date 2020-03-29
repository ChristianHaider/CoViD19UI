define(["amber/boot", "require", "amber/core/SUnit"], function($boot,requirejs){"use strict";
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("Covid19view-Tests");
$pkg.innerEval = function (expr) { return eval(expr); };
$pkg.transport = {"type":"amd","amdNamespace":"amber-covid19view"};

$core.addClass("Covid19viewTest", $globals.TestCase, [], "Covid19view-Tests");


$core.addClass("ScaleTest", $globals.TestCase, [], "Covid19view-Tests");
$core.addMethod(
$core.method({
selector: "testExponent",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testExponent\x0a\x09self assert: 47 exponent = 1.\x0a\x09self assert: 3577 exponent = 3.\x0a\x09self assert: 1000 exponent = 2.\x0a\x09self assert: 999 exponent = 2.\x0a\x09self assert: 1001 exponent = 3.\x0a\x09self assert: 5 exponent = 0.\x0a\x09self assert: 1 exponent = 0.\x0a\x09self assert: 0.1 exponent = -1.\x0a\x09self assert: 0 exponent printString = '-Infinity'.\x0a\x09self assert: -2 exponent printString = 'NaN'.",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:", "=", "exponent", "printString"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$4,$3,$6,$5,$8,$7,$10,$9,$12,$11,$14,$13,$16,$15,$19,$18,$17;
$2=(47)._exponent();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["exponent"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__eq((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
$self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$4=(3577)._exponent();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["exponent"]=2;
//>>excludeEnd("ctx");
$3=$recv($4).__eq((3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=2;
//>>excludeEnd("ctx");
$self._assert_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
$6=(1000)._exponent();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["exponent"]=3;
//>>excludeEnd("ctx");
$5=$recv($6).__eq((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=3;
//>>excludeEnd("ctx");
$self._assert_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=3;
//>>excludeEnd("ctx");
$8=(999)._exponent();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["exponent"]=4;
//>>excludeEnd("ctx");
$7=$recv($8).__eq((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=4;
//>>excludeEnd("ctx");
$self._assert_($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=4;
//>>excludeEnd("ctx");
$10=(1001)._exponent();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["exponent"]=5;
//>>excludeEnd("ctx");
$9=$recv($10).__eq((3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=5;
//>>excludeEnd("ctx");
$self._assert_($9);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=5;
//>>excludeEnd("ctx");
$12=(5)._exponent();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["exponent"]=6;
//>>excludeEnd("ctx");
$11=$recv($12).__eq((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=6;
//>>excludeEnd("ctx");
$self._assert_($11);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=6;
//>>excludeEnd("ctx");
$14=(1)._exponent();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["exponent"]=7;
//>>excludeEnd("ctx");
$13=$recv($14).__eq((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=7;
//>>excludeEnd("ctx");
$self._assert_($13);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=7;
//>>excludeEnd("ctx");
$16=(0.1)._exponent();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["exponent"]=8;
//>>excludeEnd("ctx");
$15=$recv($16).__eq((-1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=8;
//>>excludeEnd("ctx");
$self._assert_($15);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=8;
//>>excludeEnd("ctx");
$19=(0)._exponent();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["exponent"]=9;
//>>excludeEnd("ctx");
$18=$recv($19)._printString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printString"]=1;
//>>excludeEnd("ctx");
$17=$recv($18).__eq("-Infinity");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=9;
//>>excludeEnd("ctx");
$self._assert_($17);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=9;
//>>excludeEnd("ctx");
$self._assert_($recv($recv((-2)._exponent())._printString()).__eq("NaN"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testExponent",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ScaleTest);


});
