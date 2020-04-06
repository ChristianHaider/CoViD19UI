define(["amber/boot", "require", "amber/core/Kernel-Collections", "amber/core/Kernel-Methods", "amber/core/Kernel-Objects", "silk/Silk"], function($boot,requirejs){"use strict";
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("Covid19view");
$pkg.innerEval = function (expr) { return eval(expr); };
$pkg.imports = ["appTimestamp=app/timestamp", "silk/Silk"];
//>>excludeStart("imports", pragmas.excludeImports);
var appTimestamp;
$pkg.isReady = new Promise(function (resolve, reject) { requirejs(["app/timestamp", "silk/Silk"], function ($1) {appTimestamp=$1; resolve();}, reject); });
//>>excludeEnd("imports");
$pkg.transport = {"type":"amd","amdNamespace":"amber-covid19view"};

$core.addClass("Barchart", $globals.Object, ["country", "series", "aspects", "valuescale", "datescale"], "Covid19view");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Barchart.comment="A bar chart with decent date and value scale.\x0aDatapoints are shown as bars with a tooltip showing details";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "aspects",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "aspects\x0a\x09\x22<Array of: Symbol>\x0a\x09selectors of datapoint instances in the series.\x0a\x09When the list is empty, all aspects are shown\x22\x0a\x09\x0a\x09^aspects ifNil: [#()]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$self.aspects;
if(($receiver = $1) == null || $receiver.a$nil){
return [];
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"aspects",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "barForDatapoint:width:",
protocol: "svg",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDatapoint", "aWidth"],
source: "barForDatapoint: aDatapoint width: aWidth\x0a\x09\x22<g>\x22\x0a\x09\x0a\x09| barLeft bars barTopConfirmed barConfirmed barTopRecovered barRecovered barTopDeaths barDeaths g |\x0a\x09barLeft := (self xAt: aDatapoint date) - aWidth.\x0a\x09bars :=OrderedCollection new.\x0a\x09(self aspects isEmpty or: [\x0a\x09self aspects includes: #confirmed]) ifTrue: [\x0a\x09\x09| top |\x0a\x09\x09top := self yAt: (aDatapoint perform: #confirmed).\x0a\x09\x09bars add: (SVG RECT: {\x0a\x09\x09\x09'class' -> 'confirmed'.\x0a\x09\x09\x09'x' -> barLeft. 'y' -> top. \x0a\x09\x09\x09'width' -> aWidth. 'height' -> (self chartBottom - top)})].\x0a\x09self aspects isEmpty ifTrue: [\x0a\x09\x09| top |\x0a\x09\x09top := self yAt: (aDatapoint perform: #decided).\x0a\x09\x09bars add: (SVG RECT: {\x0a\x09\x09\x09'class' -> 'recovered'.\x0a\x09\x09\x09'x' -> barLeft. 'y' -> top. \x0a\x09\x09\x09'width' -> aWidth. 'height' -> (self chartBottom - top)})].\x0a\x09(self aspects includes: #recovered) ifTrue: [\x0a\x09\x09| top |\x0a\x09\x09top := self yAt: (aDatapoint perform: #recovered).\x0a\x09\x09bars add: (SVG RECT: {\x0a\x09\x09\x09'class' -> 'recovered'.\x0a\x09\x09\x09'x' -> barLeft. 'y' -> top. \x0a\x09\x09\x09'width' -> aWidth. 'height' -> (self chartBottom - top)})].\x0a\x09(self aspects isEmpty or: [\x0a\x09self aspects includes: #deaths]) ifTrue: [\x0a\x09\x09| top |\x0a\x09\x09top := self yAt: (aDatapoint perform: #deaths).\x0a\x09\x09bars add: (SVG RECT: {\x0a\x09\x09\x09'class' -> 'deaths'.\x0a\x09\x09\x09'x' -> barLeft. 'y' -> top. \x0a\x09\x09\x09'width' -> aWidth. 'height' -> (self chartBottom - top)})].\x0a\x09g := SVG G: {\x0a\x09\x09'class' -> 'Bar'.\x0a\x09\x09bars}.\x0a\x09g on: #mouseover bind: [:event | self mouseover: event datapoint: aDatapoint].\x0a\x09g on: #mouseout bind: [:event | self mouseout: event datapoint: aDatapoint].\x0a\x09^g",
referencedClasses: ["OrderedCollection", "SVG"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["-", "xAt:", "date", "new", "ifTrue:", "or:", "isEmpty", "aspects", "includes:", "yAt:", "perform:", "add:", "RECT:", "->", "chartBottom", "G:", "on:bind:", "mouseover:datapoint:", "mouseout:datapoint:"]
}, function ($methodClass){ return function (aDatapoint,aWidth){
var self=this,$self=this;
var barLeft,bars,barTopConfirmed,barConfirmed,barTopRecovered,barRecovered,barTopDeaths,barDeaths,g;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$4,$1,$5,$6,$9,$10,$11,$12,$15,$14,$13,$8,$7,$17,$16,$18,$19,$22,$23,$24,$25,$28,$27,$26,$21,$20,$30,$29,$31,$32,$35,$36,$37,$38,$41,$40,$39,$34,$33,$44,$43,$42,$45,$48,$49,$50,$51,$52,$47,$46;
barLeft=$recv($self._xAt_($recv(aDatapoint)._date())).__minus(aWidth);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=1;
//>>excludeEnd("ctx");
bars=$recv($globals.OrderedCollection)._new();
$3=$self._aspects();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["aspects"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._isEmpty();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["isEmpty"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$4=$self._aspects();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["aspects"]=2;
//>>excludeEnd("ctx");
return $recv($4)._includes_("confirmed");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["includes:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["or:"]=1;
//>>excludeEnd("ctx");
if($core.assert($1)){
var top;
$5=$recv(aDatapoint)._perform_("confirmed");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["perform:"]=1;
//>>excludeEnd("ctx");
top=$self._yAt_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yAt:"]=1;
//>>excludeEnd("ctx");
$6=bars;
$9="class".__minus_gt("confirmed");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=1;
//>>excludeEnd("ctx");
$10="x".__minus_gt(barLeft);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=2;
//>>excludeEnd("ctx");
$11="y".__minus_gt(top);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=3;
//>>excludeEnd("ctx");
$12="width".__minus_gt(aWidth);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=4;
//>>excludeEnd("ctx");
$15=$self._chartBottom();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["chartBottom"]=1;
//>>excludeEnd("ctx");
$14=$recv($15).__minus(top);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=2;
//>>excludeEnd("ctx");
$13="height".__minus_gt($14);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=5;
//>>excludeEnd("ctx");
$8=[$9,$10,$11,$12,$13];
$7=$recv($globals.SVG)._RECT_($8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["RECT:"]=1;
//>>excludeEnd("ctx");
$recv($6)._add_($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
}
$17=$self._aspects();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["aspects"]=3;
//>>excludeEnd("ctx");
$16=$recv($17)._isEmpty();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["isEmpty"]=2;
//>>excludeEnd("ctx");
if($core.assert($16)){
var top;
$18=$recv(aDatapoint)._perform_("decided");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["perform:"]=2;
//>>excludeEnd("ctx");
top=$self._yAt_($18);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yAt:"]=2;
//>>excludeEnd("ctx");
$19=bars;
$22="class".__minus_gt("recovered");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=6;
//>>excludeEnd("ctx");
$23="x".__minus_gt(barLeft);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=7;
//>>excludeEnd("ctx");
$24="y".__minus_gt(top);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=8;
//>>excludeEnd("ctx");
$25="width".__minus_gt(aWidth);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=9;
//>>excludeEnd("ctx");
$28=$self._chartBottom();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["chartBottom"]=2;
//>>excludeEnd("ctx");
$27=$recv($28).__minus(top);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=3;
//>>excludeEnd("ctx");
$26="height".__minus_gt($27);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=10;
//>>excludeEnd("ctx");
$21=[$22,$23,$24,$25,$26];
$20=$recv($globals.SVG)._RECT_($21);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["RECT:"]=2;
//>>excludeEnd("ctx");
$recv($19)._add_($20);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=2;
//>>excludeEnd("ctx");
}
$30=$self._aspects();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["aspects"]=4;
//>>excludeEnd("ctx");
$29=$recv($30)._includes_("recovered");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["includes:"]=2;
//>>excludeEnd("ctx");
if($core.assert($29)){
var top;
$31=$recv(aDatapoint)._perform_("recovered");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["perform:"]=3;
//>>excludeEnd("ctx");
top=$self._yAt_($31);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yAt:"]=3;
//>>excludeEnd("ctx");
$32=bars;
$35="class".__minus_gt("recovered");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=11;
//>>excludeEnd("ctx");
$36="x".__minus_gt(barLeft);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=12;
//>>excludeEnd("ctx");
$37="y".__minus_gt(top);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=13;
//>>excludeEnd("ctx");
$38="width".__minus_gt(aWidth);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=14;
//>>excludeEnd("ctx");
$41=$self._chartBottom();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["chartBottom"]=3;
//>>excludeEnd("ctx");
$40=$recv($41).__minus(top);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=4;
//>>excludeEnd("ctx");
$39="height".__minus_gt($40);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=15;
//>>excludeEnd("ctx");
$34=[$35,$36,$37,$38,$39];
$33=$recv($globals.SVG)._RECT_($34);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["RECT:"]=3;
//>>excludeEnd("ctx");
$recv($32)._add_($33);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=3;
//>>excludeEnd("ctx");
}
$44=$self._aspects();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["aspects"]=5;
//>>excludeEnd("ctx");
$43=$recv($44)._isEmpty();
$42=$recv($43)._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self._aspects())._includes_("deaths");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,5)});
//>>excludeEnd("ctx");
}));
if($core.assert($42)){
var top;
top=$self._yAt_($recv(aDatapoint)._perform_("deaths"));
$45=bars;
$48="class".__minus_gt("deaths");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=16;
//>>excludeEnd("ctx");
$49="x".__minus_gt(barLeft);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=17;
//>>excludeEnd("ctx");
$50="y".__minus_gt(top);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=18;
//>>excludeEnd("ctx");
$51="width".__minus_gt(aWidth);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=19;
//>>excludeEnd("ctx");
$52="height".__minus_gt($recv($self._chartBottom()).__minus(top));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=20;
//>>excludeEnd("ctx");
$47=[$48,$49,$50,$51,$52];
$46=$recv($globals.SVG)._RECT_($47);
$recv($45)._add_($46);
}
g=$recv($globals.SVG)._G_(["class".__minus_gt("Bar"),bars]);
$recv(g)._on_bind_("mouseover",(function(event){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._mouseover_datapoint_(event,aDatapoint);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,7)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:bind:"]=1;
//>>excludeEnd("ctx");
$recv(g)._on_bind_("mouseout",(function(event){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._mouseout_datapoint_(event,aDatapoint);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,8)});
//>>excludeEnd("ctx");
}));
return g;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"barForDatapoint:width:",{aDatapoint:aDatapoint,aWidth:aWidth,barLeft:barLeft,bars:bars,barTopConfirmed:barTopConfirmed,barConfirmed:barConfirmed,barTopRecovered:barTopRecovered,barRecovered:barRecovered,barTopDeaths:barTopDeaths,barDeaths:barDeaths,g:g})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "chartAreaIn:",
protocol: "svg",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSVG"],
source: "chartAreaIn: aSVG\x0a\x09\x22add the chart area\x22\x0a\x09\x0a\x09| chartArea barWidth |\x0a\x09chartArea := self graphicsArea.\x0a\x09barWidth := self chartWidth / self datapoints size.\x0a\x09self datapoints do: [:datapoint |\x0a\x09\x09chartArea << (self barForDatapoint: datapoint width: barWidth)].\x0a\x09aSVG << chartArea.\x0a\x09^chartArea",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["graphicsArea", "/", "chartWidth", "size", "datapoints", "do:", "<<", "barForDatapoint:width:"]
}, function ($methodClass){ return function (aSVG){
var self=this,$self=this;
var chartArea,barWidth;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2;
chartArea=$self._graphicsArea();
$1=$self._chartWidth();
$3=$self._datapoints();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["datapoints"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._size();
barWidth=$recv($1).__slash($2);
$recv($self._datapoints())._do_((function(datapoint){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(chartArea).__lt_lt($self._barForDatapoint_width_(datapoint,barWidth));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["<<"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({datapoint:datapoint},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(aSVG).__lt_lt(chartArea);
return chartArea;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"chartAreaIn:",{aSVG:aSVG,chartArea:chartArea,barWidth:barWidth})});
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
source: "chartLeft\x0a\x09\x22<Number>\x22\x0a\x09\x0a\x09^0",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return (0);

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
source: "chartTop\x0a\x09\x22<Number>\x22\x0a\x09\x0a\x09^3",
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
selector: "country",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "country\x0a\x09\x22<GeographicArea>\x22\x0a\x09\x0a\x09^country",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.country;

}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "datapoints",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "datapoints\x0a\x09\x22<Array of: Datapoint>\x22\x0a\x09\x0a\x09^self series series",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["series"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($self._series())._series();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["series"]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"datapoints",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "dateAxisIn:",
protocol: "svg",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSVG"],
source: "dateAxisIn: aSVG\x0a\x09| dateAxis x |\x0a\x09dateAxis := aSVG G: 'class' -> 'DateAxis'.\x0a\x09self series lastDateOfWeeks do: [:date |\x0a\x09\x09x := self xAt: date.\x0a\x09\x09dateAxis LINE: {\x0a\x09\x09\x09'class' -> 'Weekline'.\x0a\x09\x09\x09'x1' -> x. 'y1' -> self chartBottom.\x0a\x09\x09\x09'x2' -> x. 'y2' -> self chartTop}].\x0a\x09self series lastDateOfMonths do: [:date |\x0a\x09\x09x := self xAt: date.\x0a\x09\x09dateAxis LINE: {\x0a\x09\x09\x09'class' -> 'Monthline'.\x0a\x09\x09\x09'x1' -> x. 'y1' -> (self chartBottom + self datescaleHeight).\x0a\x09\x09\x09'x2' -> x. 'y2' -> self chartTop}.\x0a\x09\x09dateAxis TEXT: {\x0a\x09\x09\x09'class' -> 'MonthText'.\x0a\x09\x09\x09'x' -> (x + 10). 'y' -> (self chartBottom + 8).\x0a\x09\x09\x09self monthnameAt: date}].\x0a\x09dateAxis LINE: {\x0a\x09\x09'class' -> 'Baseline'.\x0a\x09\x09'x1' -> self chartLeft. 'y1' -> self chartBottom.\x0a\x09\x09'x2' -> self chartRight. 'y2' -> self chartBottom}.\x0a\x09^dateAxis",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["G:", "->", "do:", "lastDateOfWeeks", "series", "xAt:", "LINE:", "chartBottom", "chartTop", "lastDateOfMonths", "+", "datescaleHeight", "TEXT:", "monthnameAt:", "chartLeft", "chartRight"]
}, function ($methodClass){ return function (aSVG){
var self=this,$self=this;
var dateAxis,x;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2,$4,$6,$7,$9,$8,$10,$12,$11,$5,$13,$15,$16,$19,$18,$17,$20,$21,$14,$22,$24,$26,$25,$29,$28,$27,$23,$30,$32,$33,$35,$34,$36,$31;
$1="class".__minus_gt("DateAxis");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=1;
//>>excludeEnd("ctx");
dateAxis=$recv(aSVG)._G_($1);
$3=$self._series();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["series"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._lastDateOfWeeks();
$recv($2)._do_((function(date){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
x=$self._xAt_(date);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["xAt:"]=1;
//>>excludeEnd("ctx");
$4=dateAxis;
$6="class".__minus_gt("Weekline");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["->"]=2;
//>>excludeEnd("ctx");
$7="x1".__minus_gt(x);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["->"]=3;
//>>excludeEnd("ctx");
$9=$self._chartBottom();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["chartBottom"]=1;
//>>excludeEnd("ctx");
$8="y1".__minus_gt($9);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["->"]=4;
//>>excludeEnd("ctx");
$10="x2".__minus_gt(x);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["->"]=5;
//>>excludeEnd("ctx");
$12=$self._chartTop();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["chartTop"]=1;
//>>excludeEnd("ctx");
$11="y2".__minus_gt($12);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["->"]=6;
//>>excludeEnd("ctx");
$5=[$6,$7,$8,$10,$11];
return $recv($4)._LINE_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["LINE:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({date:date},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["do:"]=1;
//>>excludeEnd("ctx");
$recv($recv($self._series())._lastDateOfMonths())._do_((function(date){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
x=$self._xAt_(date);
$13=dateAxis;
$15="class".__minus_gt("Monthline");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["->"]=7;
//>>excludeEnd("ctx");
$16="x1".__minus_gt(x);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["->"]=8;
//>>excludeEnd("ctx");
$19=$self._chartBottom();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["chartBottom"]=2;
//>>excludeEnd("ctx");
$18=$recv($19).__plus($self._datescaleHeight());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["+"]=1;
//>>excludeEnd("ctx");
$17="y1".__minus_gt($18);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["->"]=9;
//>>excludeEnd("ctx");
$20="x2".__minus_gt(x);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["->"]=10;
//>>excludeEnd("ctx");
$21="y2".__minus_gt($self._chartTop());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["->"]=11;
//>>excludeEnd("ctx");
$14=[$15,$16,$17,$20,$21];
$recv($13)._LINE_($14);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["LINE:"]=2;
//>>excludeEnd("ctx");
$22=dateAxis;
$24="class".__minus_gt("MonthText");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["->"]=12;
//>>excludeEnd("ctx");
$26=$recv(x).__plus((10));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["+"]=2;
//>>excludeEnd("ctx");
$25="x".__minus_gt($26);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["->"]=13;
//>>excludeEnd("ctx");
$29=$self._chartBottom();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["chartBottom"]=3;
//>>excludeEnd("ctx");
$28=$recv($29).__plus((8));
$27="y".__minus_gt($28);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["->"]=14;
//>>excludeEnd("ctx");
$23=[$24,$25,$27,$self._monthnameAt_(date)];
return $recv($22)._TEXT_($23);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({date:date},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$30=dateAxis;
$32="class".__minus_gt("Baseline");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=15;
//>>excludeEnd("ctx");
$33="x1".__minus_gt($self._chartLeft());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=16;
//>>excludeEnd("ctx");
$35=$self._chartBottom();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["chartBottom"]=4;
//>>excludeEnd("ctx");
$34="y1".__minus_gt($35);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=17;
//>>excludeEnd("ctx");
$36="x2".__minus_gt($self._chartRight());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=18;
//>>excludeEnd("ctx");
$31=[$32,$33,$34,$36,"y2".__minus_gt($self._chartBottom())];
$recv($30)._LINE_($31);
return dateAxis;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dateAxisIn:",{aSVG:aSVG,dateAxis:dateAxis,x:x})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "datescale",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "datescale\x0a\x09\x22<Datescale>\x22\x0a\x09\x0a\x09^datescale ifNil: [\x0a\x09\x09datescale := Datescale from: self firstDate to: self lastDate]",
referencedClasses: ["Datescale"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "from:to:", "firstDate", "lastDate"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$self.datescale;
if(($receiver = $1) == null || $receiver.a$nil){
$self.datescale=$recv($globals.Datescale)._from_to_($self._firstDate(),$self._lastDate());
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
source: "datescaleHeight\x0a\x09\x22<Number>\x22\x0a\x09\x0a\x09^100 - self chartHeight",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["-", "chartHeight"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return (100).__minus($self._chartHeight());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"datescaleHeight",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "firstDate",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "firstDate\x0a\x09^self series firstDate",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["firstDate", "series"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._series())._firstDate();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"firstDate",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "fullBoxClassed:",
protocol: "svg",
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
var $2,$3,$4,$5,$1;
$2="class".__minus_gt(aClassString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=1;
//>>excludeEnd("ctx");
$3="x".__minus_gt((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=2;
//>>excludeEnd("ctx");
$4="y".__minus_gt((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=3;
//>>excludeEnd("ctx");
$5="width".__minus_gt("100%");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=4;
//>>excludeEnd("ctx");
$1=[$2,$3,$4,$5,"height".__minus_gt("100%")];
return $recv($globals.SVG)._RECT_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fullBoxClassed:",{aClassString:aClassString})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "graphicsArea",
protocol: "svg",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "graphicsArea\x0a\x09\x22<g>\x22\x0a\x09\x0a\x09^SVG G: {\x0a\x09\x09'class' -> 'GraphicsArea'.\x0a\x09\x09SVG RECT: {\x0a\x09\x09\x09'x' -> self chartLeft. 'y' -> self chartTop. \x0a\x09\x09\x09'width' -> self chartWidth. 'height' -> self chartHeight}}",
referencedClasses: ["SVG"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["G:", "->", "RECT:", "chartLeft", "chartTop", "chartWidth", "chartHeight"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$5,$6,$7,$4,$3,$1;
$2="class".__minus_gt("GraphicsArea");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=1;
//>>excludeEnd("ctx");
$5="x".__minus_gt($self._chartLeft());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=2;
//>>excludeEnd("ctx");
$6="y".__minus_gt($self._chartTop());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=3;
//>>excludeEnd("ctx");
$7="width".__minus_gt($self._chartWidth());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=4;
//>>excludeEnd("ctx");
$4=[$5,$6,$7,"height".__minus_gt($self._chartHeight())];
$3=$recv($globals.SVG)._RECT_($4);
$1=[$2,$3];
return $recv($globals.SVG)._G_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"graphicsArea",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "initializeCountry:series:aspects:",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCountry", "aDataseries", "someSymbols"],
source: "initializeCountry: aCountry series: aDataseries aspects: someSymbols\x0a\x09country := aCountry.\x0a\x09series := aDataseries.\x0a\x09aspects := someSymbols",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aCountry,aDataseries,someSymbols){
var self=this,$self=this;
$self.country=aCountry;
$self.series=aDataseries;
$self.aspects=someSymbols;
return self;

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
selector: "lastDate",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "lastDate\x0a\x09^self series lastDate",
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
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "legendClass:label:value:",
protocol: "svg",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClassString", "aString", "aNumber"],
source: "legendClass: aClassString label: aString value: aNumber\x0a\x09^{\x0a\x09\x09Silk SPAN: {'class' -> 'LegendBar'. SVG SVG: {'viewBox' -> '0 0 10 6'. self fullBoxClassed: aClassString}}.\x0a\x09\x09Silk SPAN: {'class' -> 'LegendValue'. aNumber separatedThousandsString}.\x0a\x09\x09Silk SPAN: {'class' -> 'LegendLabel'. aString}}",
referencedClasses: ["Silk", "SVG"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["SPAN:", "->", "SVG:", "fullBoxClassed:", "separatedThousandsString"]
}, function ($methodClass){ return function (aClassString,aString,aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$6,$5,$4,$2,$1,$9,$8,$7;
$3="class".__minus_gt("LegendBar");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=1;
//>>excludeEnd("ctx");
$6="viewBox".__minus_gt("0 0 10 6");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=2;
//>>excludeEnd("ctx");
$5=[$6,$self._fullBoxClassed_(aClassString)];
$4=$recv($globals.SVG)._SVG_($5);
$2=[$3,$4];
$1=$recv($globals.Silk)._SPAN_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["SPAN:"]=1;
//>>excludeEnd("ctx");
$9="class".__minus_gt("LegendValue");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=3;
//>>excludeEnd("ctx");
$8=[$9,$recv(aNumber)._separatedThousandsString()];
$7=$recv($globals.Silk)._SPAN_($8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["SPAN:"]=2;
//>>excludeEnd("ctx");
return [$1,$7,$recv($globals.Silk)._SPAN_(["class".__minus_gt("LegendLabel"),aString])];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"legendClass:label:value:",{aClassString:aClassString,aString:aString,aNumber:aNumber})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "linearValuescale",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "linearValuescale\x0a\x09\x22<LinearValuescale>\x22\x0a\x09\x0a\x09^LinearValuescale from: 0 to: self maxValue",
referencedClasses: ["LinearValuescale"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["from:to:", "maxValue"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.LinearValuescale)._from_to_((0),$self._maxValue());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"linearValuescale",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "logarithmicValuescale",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "logarithmicValuescale\x0a\x09\x22<LogarithmicValuescale>\x22\x0a\x09\x0a\x09^LogarithmicValuescale from: 1 to: self maxValue",
referencedClasses: ["LogarithmicValuescale"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["from:to:", "maxValue"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.LogarithmicValuescale)._from_to_((1),$self._maxValue());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"logarithmicValuescale",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "maxValue",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "maxValue\x0a\x09\x22<Integer>\x22\x0a\x09\x0a\x09^self datapoints inject: 0 into: [:max :datapoint | \x0a\x09\x09max max: (datapoint maxValueForAspects: self aspects)]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["inject:into:", "datapoints", "max:", "maxValueForAspects:", "aspects"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._datapoints())._inject_into_((0),(function(max,datapoint){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(max)._max_($recv(datapoint)._maxValueForAspects_($self._aspects()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({max:max,datapoint:datapoint},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"maxValue",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "monthnameAt:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDate"],
source: "monthnameAt: aDate\x0a\x09\x22<String>\x22\x0a\x09\x0a\x09| index |\x0a\x09index := aDate month + 1.\x0a\x09index > 12 ifTrue: [\x0a\x09\x09index := 1].\x0a\x09^#('January' 'February' 'March' 'April' 'May' 'June' 'July' 'August' 'September' 'October' 'November' 'December') at: index",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["+", "month", "ifTrue:", ">", "at:"]
}, function ($methodClass){ return function (aDate){
var self=this,$self=this;
var index;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
index=$recv($recv(aDate)._month()).__plus((1));
$1=$recv(index).__gt((12));
if($core.assert($1)){
index=(1);
index;
}
return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]._at_(index);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"monthnameAt:",{aDate:aDate,index:index})});
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
source: "mouseover: anEvent datapoint: aDatapoint\x0a\x09| tooltip |\x0a\x09tooltip := '#Tooltip' asSilk.\x0a\x09tooltip resetContents.\x0a\x09tooltip << {\x0a\x09\x09'style' -> (\x0a\x09\x09\x09'right: ', (window innerWidth - anEvent x) printString, 'px; ',\x0a\x09\x09\x09'top: ', anEvent y printString, 'px; ',\x0a\x09\x09\x09'visibility: visible;').\x0a\x09\x09Silk SPAN: {'class' -> 'LegendBar'}.\x0a\x09\x09Silk SPAN: {'class' -> 'LegendLabel'. aDatapoint date asLocaleDateString}.\x0a\x09\x09Silk SPAN: {'class' -> 'LegendValue'}.\x0a\x09\x09self tooltipClass: 'confirmed' label: 'confirmed' value: aDatapoint confirmed.\x0a\x09\x09self tooltipClass: 'recovered' label: 'recovered' value: aDatapoint recovered.\x0a\x09\x09self tooltipClass: 'deaths' label: 'deaths' value: aDatapoint deaths}",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["asSilk", "resetContents", "<<", "->", ",", "printString", "-", "innerWidth", "x", "y", "SPAN:", "asLocaleDateString", "date", "tooltipClass:label:value:", "confirmed", "recovered", "deaths"]
}, function ($methodClass){ return function (anEvent,aDatapoint){
var self=this,$self=this;
var tooltip;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$10,$9,$8,$7,$6,$5,$4,$3,$13,$12,$11,$16,$15,$14,$17,$18,$19,$2;
tooltip="#Tooltip"._asSilk();
$recv(tooltip)._resetContents();
$1=tooltip;
$10=$recv($recv($recv(window)._innerWidth()).__minus($recv(anEvent)._x()))._printString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printString"]=1;
//>>excludeEnd("ctx");
$9="right: ".__comma($10);
$8=$recv($9).__comma("px; ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=5;
//>>excludeEnd("ctx");
$7=$recv($8).__comma("top: ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=4;
//>>excludeEnd("ctx");
$6=$recv($7).__comma($recv($recv(anEvent)._y())._printString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
$5=$recv($6).__comma("px; ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$4=$recv($5).__comma("visibility: visible;");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$3="style".__minus_gt($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=1;
//>>excludeEnd("ctx");
$13="class".__minus_gt("LegendBar");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=2;
//>>excludeEnd("ctx");
$12=[$13];
$11=$recv($globals.Silk)._SPAN_($12);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["SPAN:"]=1;
//>>excludeEnd("ctx");
$16="class".__minus_gt("LegendLabel");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=3;
//>>excludeEnd("ctx");
$15=[$16,$recv($recv(aDatapoint)._date())._asLocaleDateString()];
$14=$recv($globals.Silk)._SPAN_($15);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["SPAN:"]=2;
//>>excludeEnd("ctx");
$17=$recv($globals.Silk)._SPAN_(["class".__minus_gt("LegendValue")]);
$18=$self._tooltipClass_label_value_("confirmed","confirmed",$recv(aDatapoint)._confirmed());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["tooltipClass:label:value:"]=1;
//>>excludeEnd("ctx");
$19=$self._tooltipClass_label_value_("recovered","recovered",$recv(aDatapoint)._recovered());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["tooltipClass:label:value:"]=2;
//>>excludeEnd("ctx");
$2=[$3,$11,$14,$17,$18,$19,$self._tooltipClass_label_value_("deaths","deaths",$recv(aDatapoint)._deaths())];
$recv($1).__lt_lt($2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"mouseover:datapoint:",{anEvent:anEvent,aDatapoint:aDatapoint,tooltip:tooltip})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "numberOfValues",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "numberOfValues\x0a\x09\x22<Integer>\x22\x0a\x09\x0a\x09^self series size",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["size", "series"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._series())._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"numberOfValues",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "recreate",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "recreate\x0a\x09self country recreateCharts",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["recreateCharts", "country"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._country())._recreateCharts();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"recreate",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

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
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "silk",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "silk\x0a\x09\x22Silk object corresponding to the receiver\x22\x0a\x09\x0a\x09^('#', self class name) asSilk.",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["asSilk", ",", "name", "class"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv("#".__comma($recv($self._class())._name()))._asSilk();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"silk",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "stringLogarithmic:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBoolean"],
source: "stringLogarithmic: aBoolean\x0a\x09^aBoolean\x0a\x09\x09ifTrue: ['logarithmic']\x0a\x09\x09ifFalse: ['linear']",
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
return "logarithmic";
} else {
return "linear";
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"stringLogarithmic:",{aBoolean:aBoolean})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "svg",
protocol: "svg",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "svg\x0a\x09\x22<svg>\x22\x0a\x09\x0a\x09| svg valueAxis dateAxis buttons lin log |\x0a\x09svg := SVG SVG: {\x0a\x09\x09'viewBox' -> '0 0 200 100'.\x0a\x09\x09SVG RECT: {'x' -> 0. 'y' -> 0. 'width' -> '100%'. 'height' -> '100%'}}.\x0a\x09self valueAxisIn: svg.\x0a\x09self dateAxisIn: svg.\x0a\x09self chartAreaIn: svg.\x0a\x09^svg",
referencedClasses: ["SVG"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["SVG:", "->", "RECT:", "valueAxisIn:", "dateAxisIn:", "chartAreaIn:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var svg,valueAxis,dateAxis,buttons,lin,log;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$5,$6,$7,$4,$3,$1;
$2="viewBox".__minus_gt("0 0 200 100");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=1;
//>>excludeEnd("ctx");
$5="x".__minus_gt((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=2;
//>>excludeEnd("ctx");
$6="y".__minus_gt((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=3;
//>>excludeEnd("ctx");
$7="width".__minus_gt("100%");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=4;
//>>excludeEnd("ctx");
$4=[$5,$6,$7,"height".__minus_gt("100%")];
$3=$recv($globals.SVG)._RECT_($4);
$1=[$2,$3];
svg=$recv($globals.SVG)._SVG_($1);
$self._valueAxisIn_(svg);
$self._dateAxisIn_(svg);
$self._chartAreaIn_(svg);
return svg;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"svg",{svg:svg,valueAxis:valueAxis,dateAxis:dateAxis,buttons:buttons,lin:lin,log:log})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "toggleValuescale",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "toggleValuescale\x0a\x09self class logarithmic: self class logarithmic not.\x0a\x09self recreate",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["logarithmic:", "class", "not", "logarithmic", "recreate"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=1;
//>>excludeEnd("ctx");
$recv($1)._logarithmic_($recv($recv($self._class())._logarithmic())._not());
$self._recreate();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toggleValuescale",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "tooltipClass:label:value:",
protocol: "svg",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClassString", "aString", "aNumber"],
source: "tooltipClass: aClassString label: aString value: aNumber\x0a\x09^{\x0a\x09\x09Silk SPAN: {'class' -> 'LegendBar'. SVG SVG: {'viewBox' -> '0 0 10 5'. self fullBoxClassed: aClassString}}.\x0a\x09\x09Silk SPAN: {'class' -> 'LegendLabel'. aString}.\x0a\x09\x09Silk SPAN: {'class' -> 'LegendValue'. aNumber separatedThousandsString}}",
referencedClasses: ["Silk", "SVG"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["SPAN:", "->", "SVG:", "fullBoxClassed:", "separatedThousandsString"]
}, function ($methodClass){ return function (aClassString,aString,aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$6,$5,$4,$2,$1,$9,$8,$7;
$3="class".__minus_gt("LegendBar");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=1;
//>>excludeEnd("ctx");
$6="viewBox".__minus_gt("0 0 10 5");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=2;
//>>excludeEnd("ctx");
$5=[$6,$self._fullBoxClassed_(aClassString)];
$4=$recv($globals.SVG)._SVG_($5);
$2=[$3,$4];
$1=$recv($globals.Silk)._SPAN_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["SPAN:"]=1;
//>>excludeEnd("ctx");
$9="class".__minus_gt("LegendLabel");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=3;
//>>excludeEnd("ctx");
$8=[$9,aString];
$7=$recv($globals.Silk)._SPAN_($8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["SPAN:"]=2;
//>>excludeEnd("ctx");
return [$1,$7,$recv($globals.Silk)._SPAN_(["class".__minus_gt("LegendValue"),$recv(aNumber)._separatedThousandsString()])];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tooltipClass:label:value:",{aClassString:aClassString,aString:aString,aNumber:aNumber})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "valueAxisIn:",
protocol: "svg",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSVG"],
source: "valueAxisIn: aSVG\x0a\x09^self valuescale ticks asArgumentsIn: [:majorTicks :minorTicks |\x0a\x09\x09| valueAxis |\x0a\x09\x09valueAxis := aSVG G: {\x0a\x09\x09\x09'class' -> 'ValueAxis'.\x0a\x09\x09\x09SVG RECT: {\x0a\x09\x09\x09\x09'x' -> self chartRight. 'y' -> self chartTop. \x0a\x09\x09\x09\x09'width' -> self valuescaleWidth. 'height' -> self chartHeight}}.\x0a\x09\x09minorTicks do: [:value |\x0a\x09\x09\x09| y |\x0a\x09\x09\x09y := self yAt: value.\x0a\x09\x09\x09valueAxis LINE: {\x0a\x09\x09\x09\x09'class' -> 'Minorline'.\x0a\x09\x09\x09\x09'x1' -> self chartLeft. 'y1' -> y.\x0a\x09\x09\x09\x09'x2' -> self chartRight. 'y2' -> y}].\x0a\x09\x09majorTicks do: [:value |\x0a\x09\x09\x09| y |\x0a\x09\x09\x09y := self yAt: value.\x0a\x09\x09\x09valueAxis LINE: {\x0a\x09\x09\x09\x09'class' -> 'Majorline'.\x0a\x09\x09\x09\x09'x1' -> self chartLeft. 'y1' -> y.\x0a\x09\x09\x09\x09'x2' -> self chartRight. 'y2' -> y}.\x0a\x09\x09\x09valueAxis TEXT: {\x0a\x09\x09\x09\x09'class' -> 'MajorText'.\x0a\x09\x09\x09\x09'text-anchor' -> 'end'.\x0a\x09\x09\x09\x09'x' -> (self chartRight + self valuescaleWidth - 2). 'y' -> (y + 2).\x0a\x09\x09\x09\x09value separatedThousandsString}].\x0a\x09\x09valueAxis]",
referencedClasses: ["SVG"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["asArgumentsIn:", "ticks", "valuescale", "G:", "->", "RECT:", "chartRight", "chartTop", "valuescaleWidth", "chartHeight", "do:", "yAt:", "LINE:", "chartLeft", "TEXT:", "-", "+", "separatedThousandsString"]
}, function ($methodClass){ return function (aSVG){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$6,$5,$7,$9,$8,$10,$4,$3,$1,$11,$13,$15,$14,$16,$18,$17,$19,$12,$20,$22,$23,$24,$26,$25,$27,$21,$28,$30,$31,$34,$33,$32,$29;
return $recv($recv($self._valuescale())._ticks())._asArgumentsIn_((function(majorTicks,minorTicks){
var valueAxis;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2="class".__minus_gt("ValueAxis");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["->"]=1;
//>>excludeEnd("ctx");
$6=$self._chartRight();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["chartRight"]=1;
//>>excludeEnd("ctx");
$5="x".__minus_gt($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["->"]=2;
//>>excludeEnd("ctx");
$7="y".__minus_gt($self._chartTop());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["->"]=3;
//>>excludeEnd("ctx");
$9=$self._valuescaleWidth();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["valuescaleWidth"]=1;
//>>excludeEnd("ctx");
$8="width".__minus_gt($9);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["->"]=4;
//>>excludeEnd("ctx");
$10="height".__minus_gt($self._chartHeight());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["->"]=5;
//>>excludeEnd("ctx");
$4=[$5,$7,$8,$10];
$3=$recv($globals.SVG)._RECT_($4);
$1=[$2,$3];
valueAxis=$recv(aSVG)._G_($1);
$recv(minorTicks)._do_((function(value){
var y;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
y=$self._yAt_(value);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["yAt:"]=1;
//>>excludeEnd("ctx");
$11=valueAxis;
$13="class".__minus_gt("Minorline");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["->"]=6;
//>>excludeEnd("ctx");
$15=$self._chartLeft();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["chartLeft"]=1;
//>>excludeEnd("ctx");
$14="x1".__minus_gt($15);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["->"]=7;
//>>excludeEnd("ctx");
$16="y1".__minus_gt(y);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["->"]=8;
//>>excludeEnd("ctx");
$18=$self._chartRight();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["chartRight"]=2;
//>>excludeEnd("ctx");
$17="x2".__minus_gt($18);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["->"]=9;
//>>excludeEnd("ctx");
$19="y2".__minus_gt(y);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["->"]=10;
//>>excludeEnd("ctx");
$12=[$13,$14,$16,$17,$19];
return $recv($11)._LINE_($12);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["LINE:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({value:value,y:y},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["do:"]=1;
//>>excludeEnd("ctx");
$recv(majorTicks)._do_((function(value){
var y;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
y=$self._yAt_(value);
$20=valueAxis;
$22="class".__minus_gt("Majorline");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["->"]=11;
//>>excludeEnd("ctx");
$23="x1".__minus_gt($self._chartLeft());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["->"]=12;
//>>excludeEnd("ctx");
$24="y1".__minus_gt(y);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["->"]=13;
//>>excludeEnd("ctx");
$26=$self._chartRight();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["chartRight"]=3;
//>>excludeEnd("ctx");
$25="x2".__minus_gt($26);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["->"]=14;
//>>excludeEnd("ctx");
$27="y2".__minus_gt(y);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["->"]=15;
//>>excludeEnd("ctx");
$21=[$22,$23,$24,$25,$27];
$recv($20)._LINE_($21);
$28=valueAxis;
$30="class".__minus_gt("MajorText");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["->"]=16;
//>>excludeEnd("ctx");
$31="text-anchor".__minus_gt("end");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["->"]=17;
//>>excludeEnd("ctx");
$34=$recv($self._chartRight()).__plus($self._valuescaleWidth());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["+"]=1;
//>>excludeEnd("ctx");
$33=$recv($34).__minus((2));
$32="x".__minus_gt($33);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["->"]=18;
//>>excludeEnd("ctx");
$29=[$30,$31,$32,"y".__minus_gt($recv(y).__plus((2))),$recv(value)._separatedThousandsString()];
return $recv($28)._TEXT_($29);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({value:value,y:y},$ctx2,3)});
//>>excludeEnd("ctx");
}));
return valueAxis;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({majorTicks:majorTicks,minorTicks:minorTicks,valueAxis:valueAxis},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"valueAxisIn:",{aSVG:aSVG})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "valuescale",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "valuescale\x0a\x09\x22<Valuescale>\x22\x0a\x09\x0a\x09^valuescale ifNil: [valuescale := self isLogarithmic \x0a\x09\x09ifTrue: [self logarithmicValuescale] \x0a\x09\x09ifFalse: [self linearValuescale]]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "ifTrue:ifFalse:", "isLogarithmic", "logarithmicValuescale", "linearValuescale"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$receiver;
$1=$self.valuescale;
if(($receiver = $1) == null || $receiver.a$nil){
$2=$self._isLogarithmic();
if($core.assert($2)){
$self.valuescale=$self._logarithmicValuescale();
} else {
$self.valuescale=$self._linearValuescale();
}
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
source: "valuescaleWidth\x0a\x09\x22<Number>\x22\x0a\x09\x0a\x09^200 - self chartWidth",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["-", "chartWidth"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return (200).__minus($self._chartWidth());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"valuescaleWidth",{})});
//>>excludeEnd("ctx");
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
source: "yAt: aDomainValue\x0a\x09\x22<Number>\x0a\x09y value in the svg coordinate system\x22\x0a\x09\x0a\x09| offset |\x0a\x09self isLogarithmic ifTrue: [\x0a\x09\x09aDomainValue isZero ifTrue: [\x0a\x09\x09\x09^self chartBottom].\x0a\x09\x09offset := 5.\x0a\x09\x09^(self chartBottom - offset) - ((self valuescale at: aDomainValue) * (self chartHeight - offset))].\x0a\x09^self chartBottom - ((self valuescale at: aDomainValue) * self chartHeight)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "isLogarithmic", "isZero", "chartBottom", "-", "*", "at:", "valuescale", "chartHeight"]
}, function ($methodClass){ return function (aDomainValue){
var self=this,$self=this;
var offset;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$6,$5,$9,$8,$11,$10,$7,$4;
$1=$self._isLogarithmic();
if($core.assert($1)){
$2=$recv(aDomainValue)._isZero();
if($core.assert($2)){
$3=$self._chartBottom();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["chartBottom"]=1;
//>>excludeEnd("ctx");
return $3;
}
offset=(5);
$6=$self._chartBottom();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["chartBottom"]=2;
//>>excludeEnd("ctx");
$5=$recv($6).__minus(offset);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=2;
//>>excludeEnd("ctx");
$9=$self._valuescale();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["valuescale"]=1;
//>>excludeEnd("ctx");
$8=$recv($9)._at_(aDomainValue);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
$11=$self._chartHeight();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["chartHeight"]=1;
//>>excludeEnd("ctx");
$10=$recv($11).__minus(offset);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=3;
//>>excludeEnd("ctx");
$7=$recv($8).__star($10);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=1;
//>>excludeEnd("ctx");
$4=$recv($5).__minus($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=1;
//>>excludeEnd("ctx");
return $4;
}
return $recv($self._chartBottom()).__minus($recv($recv($self._valuescale())._at_(aDomainValue)).__star($self._chartHeight()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"yAt:",{aDomainValue:aDomainValue,offset:offset})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);


$core.addMethod(
$core.method({
selector: "currentAspects",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "currentAspects\x0a\x09\x22<Array of: Symbol>\x0a\x09selectors of Datapoints to be shown\x22\x0a\x09\x0a\x09^#()",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return [];

}; }),
$globals.Barchart.a$cls);

$core.addMethod(
$core.method({
selector: "for:on:aspects:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCountry", "aDataseries", "someSymbols"],
source: "for: aCountry on: aDataseries aspects: someSymbols\x0a\x09| inst |\x0a\x09inst := self new.\x0a\x09inst initializeCountry: aCountry series: aDataseries aspects: someSymbols.\x0a\x09^inst",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "initializeCountry:series:aspects:"]
}, function ($methodClass){ return function (aCountry,aDataseries,someSymbols){
var self=this,$self=this;
var inst;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
inst=$self._new();
$recv(inst)._initializeCountry_series_aspects_(aCountry,aDataseries,someSymbols);
return inst;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"for:on:aspects:",{aCountry:aCountry,aDataseries:aDataseries,someSymbols:someSymbols,inst:inst})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart.a$cls);

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
var $3,$2,$1;
$3=$recv($self._name())._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asString"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__comma(".");
$1=$recv($2).__comma("logarithmic"._asString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
return $recv($1)._settingValueIfAbsent_(true);
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
var $3,$2,$1;
$3=$recv($self._name())._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asString"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__comma(".");
$1=$recv($2).__comma("logarithmic"._asString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($1)._settingValue_(aBoolean);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"logarithmic:",{aBoolean:aBoolean})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart.a$cls);


$core.addClass("Casechart", $globals.Barchart, ["logarithmic"], "Covid19view");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Casechart.comment="A chart for case data\x0a\x0aCase data only grow, therefore, a logarithmic scale is most appropriate";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "html",
protocol: "html",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "html\x0a\x09^{\x09Silk DIV: {\x0a\x09\x09\x09'class' -> 'ChartHeader'.\x0a\x09\x09\x09Silk SPAN: {\x0a\x09\x09\x09\x09'class' -> 'ChartButtons'.\x0a\x09\x09\x09\x09self legendButtonConfirmed.\x0a\x09\x09\x09\x09self legendButtonRecovered.\x0a\x09\x09\x09\x09self legendButtonDeaths}.\x0a\x09\x09\x09(Silk BUTTON: {\x0a\x09\x09\x09\x09'class' -> 'ScalingButton'.\x0a\x09\x09\x09\x09'type' -> 'button'.\x0a\x09\x09\x09\x09(self stringLogarithmic: self class logarithmic not)}) on: #click bind: [self toggleValuescale]}.\x0a\x09\x09self svg.\x0a\x09\x09Silk DIV: 'id' -> 'Tooltip'}",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["DIV:", "->", "SPAN:", "legendButtonConfirmed", "legendButtonRecovered", "legendButtonDeaths", "on:bind:", "BUTTON:", "stringLogarithmic:", "not", "logarithmic", "class", "toggleValuescale", "svg"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$6,$5,$4,$10,$11,$9,$8,$7,$2,$1;
$3="class".__minus_gt("ChartHeader");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=1;
//>>excludeEnd("ctx");
$6="class".__minus_gt("ChartButtons");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=2;
//>>excludeEnd("ctx");
$5=[$6,$self._legendButtonConfirmed(),$self._legendButtonRecovered(),$self._legendButtonDeaths()];
$4=$recv($globals.Silk)._SPAN_($5);
$10="class".__minus_gt("ScalingButton");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=3;
//>>excludeEnd("ctx");
$11="type".__minus_gt("button");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=4;
//>>excludeEnd("ctx");
$9=[$10,$11,$self._stringLogarithmic_($recv($recv($self._class())._logarithmic())._not())];
$8=$recv($globals.Silk)._BUTTON_($9);
$7=$recv($8)._on_bind_("click",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._toggleValuescale();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$2=[$3,$4,$7];
$1=$recv($globals.Silk)._DIV_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["DIV:"]=1;
//>>excludeEnd("ctx");
return [$1,$self._svg(),$recv($globals.Silk)._DIV_("id".__minus_gt("Tooltip"))];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"html",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Casechart);

$core.addMethod(
$core.method({
selector: "legendButtonConfirmed",
protocol: "html",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "legendButtonConfirmed\x0a\x09\x22<Silk BUTTON>\x22\x0a\x09\x0a\x09| selectedString button |\x0a\x09selectedString := ''.\x0a\x09(self aspects includes: #confirmed) ifTrue: [selectedString := ' selected'].\x0a\x09button := Silk BUTTON: {\x0a\x09\x09'class' -> ('LegendButton', selectedString).\x0a\x09\x09'type' -> 'button'. \x0a\x09\x09self legendClass: 'confirmed' label: 'confirmed' value: self series lastConfirmed}.\x0a\x09button on: #click bind: [self toggleConfirmed].\x0a\x09^button",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "includes:", "aspects", "BUTTON:", "->", ",", "legendClass:label:value:", "lastConfirmed", "series", "on:bind:", "toggleConfirmed"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var selectedString,button;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2;
selectedString="";
$1=$recv($self._aspects())._includes_("confirmed");
if($core.assert($1)){
selectedString=" selected";
selectedString;
}
$3="class".__minus_gt("LegendButton".__comma(selectedString));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=1;
//>>excludeEnd("ctx");
$2=[$3,"type".__minus_gt("button"),$self._legendClass_label_value_("confirmed","confirmed",$recv($self._series())._lastConfirmed())];
button=$recv($globals.Silk)._BUTTON_($2);
$recv(button)._on_bind_("click",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._toggleConfirmed();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return button;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"legendButtonConfirmed",{selectedString:selectedString,button:button})});
//>>excludeEnd("ctx");
}; }),
$globals.Casechart);

$core.addMethod(
$core.method({
selector: "legendButtonDeaths",
protocol: "html",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "legendButtonDeaths\x0a\x09\x22<Silk BUTTON>\x22\x0a\x09\x0a\x09| selectedString button |\x0a\x09selectedString := ''.\x0a\x09(self aspects includes: #deaths) ifTrue: [selectedString := ' selected'].\x0a\x09button := Silk BUTTON: {\x0a\x09\x09'class' -> ('LegendButton', selectedString).\x0a\x09\x09'type' -> 'button'. \x0a\x09\x09self legendClass: 'deaths' label: 'deaths' value: self series lastDeaths}.\x0a\x09button on: #click bind: [self toggleDeaths].\x0a\x09^button",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "includes:", "aspects", "BUTTON:", "->", ",", "legendClass:label:value:", "lastDeaths", "series", "on:bind:", "toggleDeaths"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var selectedString,button;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2;
selectedString="";
$1=$recv($self._aspects())._includes_("deaths");
if($core.assert($1)){
selectedString=" selected";
selectedString;
}
$3="class".__minus_gt("LegendButton".__comma(selectedString));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=1;
//>>excludeEnd("ctx");
$2=[$3,"type".__minus_gt("button"),$self._legendClass_label_value_("deaths","deaths",$recv($self._series())._lastDeaths())];
button=$recv($globals.Silk)._BUTTON_($2);
$recv(button)._on_bind_("click",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._toggleDeaths();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return button;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"legendButtonDeaths",{selectedString:selectedString,button:button})});
//>>excludeEnd("ctx");
}; }),
$globals.Casechart);

$core.addMethod(
$core.method({
selector: "legendButtonRecovered",
protocol: "html",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "legendButtonRecovered\x0a\x09\x22<Silk BUTTON>\x22\x0a\x09\x0a\x09| selectedString button |\x0a\x09selectedString := ''.\x0a\x09(self aspects includes: #recovered) ifTrue: [selectedString := ' selected'].\x0a\x09button := Silk BUTTON: {\x0a\x09\x09'class' -> ('LegendButton', selectedString).\x0a\x09\x09'type' -> 'button'. \x0a\x09\x09self legendClass: 'recovered' label: 'recovered' value: self series lastRecovered}.\x0a\x09button on: #click bind: [self toggleRecovered].\x0a\x09^button",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "includes:", "aspects", "BUTTON:", "->", ",", "legendClass:label:value:", "lastRecovered", "series", "on:bind:", "toggleRecovered"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var selectedString,button;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2;
selectedString="";
$1=$recv($self._aspects())._includes_("recovered");
if($core.assert($1)){
selectedString=" selected";
selectedString;
}
$3="class".__minus_gt("LegendButton".__comma(selectedString));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=1;
//>>excludeEnd("ctx");
$2=[$3,"type".__minus_gt("button"),$self._legendClass_label_value_("recovered","recovered",$recv($self._series())._lastRecovered())];
button=$recv($globals.Silk)._BUTTON_($2);
$recv(button)._on_bind_("click",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._toggleRecovered();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return button;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"legendButtonRecovered",{selectedString:selectedString,button:button})});
//>>excludeEnd("ctx");
}; }),
$globals.Casechart);

$core.addMethod(
$core.method({
selector: "toggleConfirmed",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "toggleConfirmed\x0a\x09self class showConfirmed: self class showConfirmed not.\x0a\x09self recreate",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["showConfirmed:", "class", "not", "showConfirmed", "recreate"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=1;
//>>excludeEnd("ctx");
$recv($1)._showConfirmed_($recv($recv($self._class())._showConfirmed())._not());
$self._recreate();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toggleConfirmed",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Casechart);

$core.addMethod(
$core.method({
selector: "toggleDeaths",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "toggleDeaths\x0a\x09self class showDeaths: self class showDeaths not.\x0a\x09self recreate",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["showDeaths:", "class", "not", "showDeaths", "recreate"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=1;
//>>excludeEnd("ctx");
$recv($1)._showDeaths_($recv($recv($self._class())._showDeaths())._not());
$self._recreate();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toggleDeaths",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Casechart);

$core.addMethod(
$core.method({
selector: "toggleRecovered",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "toggleRecovered\x0a\x09self class showRecovered: self class showRecovered not.\x0a\x09self recreate",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["showRecovered:", "class", "not", "showRecovered", "recreate"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=1;
//>>excludeEnd("ctx");
$recv($1)._showRecovered_($recv($recv($self._class())._showRecovered())._not());
$self._recreate();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toggleRecovered",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Casechart);


$core.addMethod(
$core.method({
selector: "currentAspects",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "currentAspects\x0a\x09| aspects |\x0a\x09aspects := OrderedCollection new.\x0a\x09self showConfirmed ifTrue: [aspects add: #confirmed].\x0a\x09self showRecovered ifTrue: [aspects add: #recovered].\x0a\x09self showDeaths ifTrue: [aspects add: #deaths].\x0a\x09^aspects",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "ifTrue:", "showConfirmed", "add:", "showRecovered", "showDeaths"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var aspects;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
aspects=$recv($globals.OrderedCollection)._new();
$1=$self._showConfirmed();
if($core.assert($1)){
$recv(aspects)._add_("confirmed");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
}
$2=$self._showRecovered();
if($core.assert($2)){
$recv(aspects)._add_("recovered");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=2;
//>>excludeEnd("ctx");
}
$3=$self._showDeaths();
if($core.assert($3)){
$recv(aspects)._add_("deaths");
}
return aspects;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"currentAspects",{aspects:aspects})});
//>>excludeEnd("ctx");
}; }),
$globals.Casechart.a$cls);

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
var $3,$2,$1;
$3=$recv($self._name())._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asString"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__comma(".");
$1=$recv($2).__comma("showConfirmed"._asString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
return $recv($1)._settingValueIfAbsent_(false);
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
var $3,$2,$1;
$3=$recv($self._name())._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asString"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__comma(".");
$1=$recv($2).__comma("showConfirmed"._asString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($1)._settingValue_(aBoolean);
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
var $3,$2,$1;
$3=$recv($self._name())._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asString"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__comma(".");
$1=$recv($2).__comma("showDeaths"._asString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
return $recv($1)._settingValueIfAbsent_(false);
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
var $3,$2,$1;
$3=$recv($self._name())._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asString"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__comma(".");
$1=$recv($2).__comma("showDeaths"._asString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($1)._settingValue_(aBoolean);
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
var $3,$2,$1;
$3=$recv($self._name())._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asString"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__comma(".");
$1=$recv($2).__comma("showRecovered"._asString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
return $recv($1)._settingValueIfAbsent_(false);
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
var $3,$2,$1;
$3=$recv($self._name())._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asString"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__comma(".");
$1=$recv($2).__comma("showRecovered"._asString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($1)._settingValue_(aBoolean);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"showRecovered:",{aBoolean:aBoolean})});
//>>excludeEnd("ctx");
}; }),
$globals.Casechart.a$cls);


$core.addClass("Changechart", $globals.Barchart, [], "Covid19view");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Changechart.comment="A chart for changes\x0a\x0achanges go up and down and should, therefore, be shown with a linear scale";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "html",
protocol: "html",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "html\x0a\x09^{\x09Silk DIV: {\x0a\x09\x09\x09'class' -> 'ChartHeader'.\x0a\x09\x09\x09'Change from the day before'.\x0a\x09\x09\x09\x22self legendButtonRelative\x22.\x0a\x09\x09\x09(Silk BUTTON: {\x0a\x09\x09\x09\x09'class' -> 'ScalingButton'.\x0a\x09\x09\x09\x09'type' -> 'button'.\x0a\x09\x09\x09\x09(self stringLogarithmic: self class logarithmic not)}) on: #click bind: [self toggleValuescale]}.\x0a\x09\x09self svg.\x0a\x09\x09Silk DIV: 'id' -> 'Tooltip'}",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["DIV:", "->", "on:bind:", "BUTTON:", "stringLogarithmic:", "not", "logarithmic", "class", "toggleValuescale", "svg"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$7,$8,$6,$5,$4,$2,$1;
$3="class".__minus_gt("ChartHeader");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=1;
//>>excludeEnd("ctx");
$7="class".__minus_gt("ScalingButton");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=2;
//>>excludeEnd("ctx");
$8="type".__minus_gt("button");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=3;
//>>excludeEnd("ctx");
$6=[$7,$8,$self._stringLogarithmic_($recv($recv($self._class())._logarithmic())._not())];
$5=$recv($globals.Silk)._BUTTON_($6);
$4=$recv($5)._on_bind_("click",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._toggleValuescale();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$2=[$3,"Change from the day before",$4];
$1=$recv($globals.Silk)._DIV_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["DIV:"]=1;
//>>excludeEnd("ctx");
return [$1,$self._svg(),$recv($globals.Silk)._DIV_("id".__minus_gt("Tooltip"))];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"html",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Changechart);

$core.addMethod(
$core.method({
selector: "legendButtonRelative",
protocol: "html",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "legendButtonRelative\x0a\x09\x22<Silk BUTTON>\x22\x0a\x09\x0a\x09| button |\x0a\x09button := Silk BUTTON: {\x0a\x09\x09'class' -> 'LegendButton'.\x0a\x09\x09'type' -> 'button'. \x0a\x09\x09'Relative'}.\x0a\x09button on: #click bind: [self toggleRelative].\x0a\x09^button",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["BUTTON:", "->", "on:bind:", "toggleRelative"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var button;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2="class".__minus_gt("LegendButton");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=1;
//>>excludeEnd("ctx");
$1=[$2,"type".__minus_gt("button"),"Relative"];
button=$recv($globals.Silk)._BUTTON_($1);
$recv(button)._on_bind_("click",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._toggleRelative();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return button;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"legendButtonRelative",{button:button})});
//>>excludeEnd("ctx");
}; }),
$globals.Changechart);

$core.addMethod(
$core.method({
selector: "toggleRelative",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "toggleRelative\x0a\x09| chart |\x0a\x09self class showRelative: self class showRelative not.\x0a\x09self recreate",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["showRelative:", "class", "not", "showRelative", "recreate"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var chart;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=1;
//>>excludeEnd("ctx");
$recv($1)._showRelative_($recv($recv($self._class())._showRelative())._not());
$self._recreate();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toggleRelative",{chart:chart})});
//>>excludeEnd("ctx");
}; }),
$globals.Changechart);


$core.addMethod(
$core.method({
selector: "currentAspects",
protocol: "settings",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "currentAspects\x0a\x09^Casechart currentAspects",
referencedClasses: ["Casechart"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["currentAspects"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Casechart)._currentAspects();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"currentAspects",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Changechart.a$cls);

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
var $3,$2,$1;
$3=$recv($self._name())._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asString"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__comma(".");
$1=$recv($2).__comma("showRelative"._asString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
return $recv($1)._settingValueIfAbsent_(false);
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
var $3,$2,$1;
$3=$recv($self._name())._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asString"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__comma(".");
$1=$recv($2).__comma("showRelative"._asString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($1)._settingValue_(aBoolean);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"showRelative:",{aBoolean:aBoolean})});
//>>excludeEnd("ctx");
}; }),
$globals.Changechart.a$cls);


$core.addClass("Casecount", $globals.Object, ["confirmed", "deaths"], "Covid19view");
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
var $1,$3,$2,$5,$4;
$1=$self._class();
$3=$self._confirmed();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["confirmed"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__plus($recv(aCasecount)._confirmed());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
$5=$self._deaths();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deaths"]=1;
//>>excludeEnd("ctx");
$4=$recv($5).__plus($recv(aCasecount)._deaths());
return $recv($1)._confirmed_deaths_($2,$4);
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
var $1,$3,$2,$5,$4;
$1=$self._class();
$3=$self._confirmed();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["confirmed"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__minus($recv(aCasecount)._confirmed());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=1;
//>>excludeEnd("ctx");
$5=$self._deaths();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deaths"]=1;
//>>excludeEnd("ctx");
$4=$recv($5).__minus($recv(aCasecount)._deaths());
return $recv($1)._confirmed_deaths_($2,$4);
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
var $1;
$1=$recv(aJson)._at_ifAbsent_("c",(function(){
return (0);

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:ifAbsent:"]=1;
//>>excludeEnd("ctx");
return $self._confirmed_deaths_($1,$recv(aJson)._at_ifAbsent_("d",(function(){
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


$core.addClass("CoViD19", $globals.Object, ["countries"], "Covid19view");
$core.addMethod(
$core.method({
selector: "augmentPage",
protocol: "html",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "augmentPage\x0a\x09Silk new \x0a\x09\x09reset;\x0a\x09\x09DIV: {'id' -> 'Contents'. self pageContent}.\x0a\x09self getData",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["reset", "new", "DIV:", "->", "pageContent", "getData"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.Silk)._new();
$recv($1)._reset();
$recv($1)._DIV_(["id".__minus_gt("Contents"),$self._pageContent()]);
$self._getData();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"augmentPage",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CoViD19);

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
var $1,$receiver;
$1=$self.countries;
if(($receiver = $1) == null || $receiver.a$nil){
return [];
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"countries",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CoViD19);

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
$globals.CoViD19);

$core.addMethod(
$core.method({
selector: "footer",
protocol: "html",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "footer\x0a\x09^Silk FOOTER: {\x0a\x09\x09Silk SPAN: {self class softwareVersionInfo}.\x0a\x09\x09Silk SPAN: {'id' -> 'ServerVersion'. self class serverVersionInfo}}",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["FOOTER:", "SPAN:", "softwareVersionInfo", "class", "->", "serverVersionInfo"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $5,$4,$3,$2,$1;
$5=$self._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=1;
//>>excludeEnd("ctx");
$4=$recv($5)._softwareVersionInfo();
$3=[$4];
$2=$recv($globals.Silk)._SPAN_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["SPAN:"]=1;
//>>excludeEnd("ctx");
$1=[$2,$recv($globals.Silk)._SPAN_(["id".__minus_gt("ServerVersion"),$recv($self._class())._serverVersionInfo()])];
return $recv($globals.Silk)._FOOTER_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"footer",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CoViD19);

$core.addMethod(
$core.method({
selector: "getData",
protocol: "action",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "getData\x0a\x09self withAllJsons: #('CoViD-19_JHU.json' 'CoViD-19_US_JHU.json' 'CoViD-19_RKI.json') do: [:jsons |\x0a\x09\x09jsons asArgumentsIn: [:jhuJson :jhuUSJson :rkiJson |\x0a\x09\x09\x09| us germany |\x0a\x09\x09\x09countries := Country allFromJHUJson: jhuJson.\x0a\x09\x09\x09germany := countries detect: [:country | country name = 'Germany'].\x0a\x09\x09\x09germany parts addAll: ((Country allFromRKIJson: rkiJson) sort: [:a :b | a > b]).\x0a\x09\x09\x09us := countries detect: [:country | country name = 'US'].\x0a\x09\x09\x09us parts addAll: (Country allFromUSJHUJson: jhuUSJson).\x0a\x09\x09\x09self showCountries.\x0a\x09\x09\x09self updateFooter]]",
referencedClasses: ["Country"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["withAllJsons:do:", "asArgumentsIn:", "allFromJHUJson:", "detect:", "=", "name", "addAll:", "parts", "sort:", "allFromRKIJson:", ">", "allFromUSJHUJson:", "showCountries", "updateFooter"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$self._withAllJsons_do_(["CoViD-19_JHU.json", "CoViD-19_US_JHU.json", "CoViD-19_RKI.json"],(function(jsons){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(jsons)._asArgumentsIn_((function(jhuJson,jhuUSJson,rkiJson){
var us,germany;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$self.countries=$recv($globals.Country)._allFromJHUJson_(jhuJson);
germany=$recv($self.countries)._detect_((function(country){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
$1=$recv(country)._name();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["name"]=1;
//>>excludeEnd("ctx");
return $recv($1).__eq("Germany");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["="]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({country:country},$ctx3,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["detect:"]=1;
//>>excludeEnd("ctx");
$2=$recv(germany)._parts();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["parts"]=1;
//>>excludeEnd("ctx");
$recv($2)._addAll_($recv($recv($globals.Country)._allFromRKIJson_(rkiJson))._sort_((function(a,b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv(a).__gt(b);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({a:a,b:b},$ctx3,4)});
//>>excludeEnd("ctx");
})));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["addAll:"]=1;
//>>excludeEnd("ctx");
us=$recv($self.countries)._detect_((function(country){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv($recv(country)._name()).__eq("US");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({country:country},$ctx3,5)});
//>>excludeEnd("ctx");
}));
$recv($recv(us)._parts())._addAll_($recv($globals.Country)._allFromUSJHUJson_(jhuUSJson));
$self._showCountries();
return $self._updateFooter();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({jhuJson:jhuJson,jhuUSJson:jhuUSJson,rkiJson:rkiJson,us:us,germany:germany},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({jsons:jsons},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"getData",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CoViD19);

$core.addMethod(
$core.method({
selector: "header",
protocol: "html",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "header\x0a\x09^Silk HEADER: {\x0a\x09\x09Silk H1: {\x0a\x09\x09\x09Silk DIV: 'CoViD-19 Charts'. \x0a\x09\x09\x09Silk DIV: {'class' -> 'Subtitle'. 'Do not trust the numbers!'}}.\x0a\x09\x09Silk SPAN: 'id' -> 'Versions'}",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["HEADER:", "H1:", "DIV:", "->", "SPAN:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $4,$7,$6,$5,$3,$2,$1;
$4=$recv($globals.Silk)._DIV_("CoViD-19 Charts");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["DIV:"]=1;
//>>excludeEnd("ctx");
$7="class".__minus_gt("Subtitle");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=1;
//>>excludeEnd("ctx");
$6=[$7,"Do not trust the numbers!"];
$5=$recv($globals.Silk)._DIV_($6);
$3=[$4,$5];
$2=$recv($globals.Silk)._H1_($3);
$1=[$2,$recv($globals.Silk)._SPAN_("id".__minus_gt("Versions"))];
return $recv($globals.Silk)._HEADER_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"header",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CoViD19);

$core.addMethod(
$core.method({
selector: "lastDate",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "lastDate\x0a\x09\x22<Date>\x0a\x09the most recent date in the data\x22\x0a\x09\x0a\x09^self countries inject: (Date d: 1 m: 1 y: 2020) into: [:latest :country | latest max: country lastDate]",
referencedClasses: ["Date"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["inject:into:", "countries", "d:m:y:", "max:", "lastDate"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._countries())._inject_into_($recv($globals.Date)._d_m_y_((1),(1),(2020)),(function(latest,country){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(latest)._max_($recv(country)._lastDate());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({latest:latest,country:country},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lastDate",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CoViD19);

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
var $2,$1;
$2=$self._countries();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["countries"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._isEmpty();
if($core.assert($1)){
return $recv($globals.Dictionary)._new();
}
return $recv($recv($self._countries())._first())._metadata();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"metadata",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CoViD19);

$core.addMethod(
$core.method({
selector: "pageContent",
protocol: "html",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "pageContent\x0a\x09^{\x09self header.\x0a\x09\x09Silk DIV: {\x0a\x09\x09\x09'id' -> 'CountryList'.\x0a\x09\x09\x09Silk DIV: {\x0a\x09\x09\x09\x09'Loading data... the World, US, Germany... hold on...'.\x0a\x09\x09\x09\x09'(can your browser make it?)'}}.\x0a\x09\x09Silk DIV: 'id' -> 'Graphics'.\x0a\x09\x09self footer}",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["header", "DIV:", "->", "footer"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$4,$5,$3,$2;
$1=$self._header();
$4="id".__minus_gt("CountryList");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=1;
//>>excludeEnd("ctx");
$5=$recv($globals.Silk)._DIV_(["Loading data... the World, US, Germany... hold on...","(can your browser make it?)"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["DIV:"]=2;
//>>excludeEnd("ctx");
$3=[$4,$5];
$2=$recv($globals.Silk)._DIV_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["DIV:"]=1;
//>>excludeEnd("ctx");
return [$1,$2,$recv($globals.Silk)._DIV_("id".__minus_gt("Graphics")),$self._footer()];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"pageContent",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CoViD19);

$core.addMethod(
$core.method({
selector: "resetContents",
protocol: "initialize / release",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "resetContents\x0a\x09| contents |\x0a\x09contents := '#Contents' asSilk.\x0a\x09contents resetContents.\x0a\x09contents << self pageContent.\x0a\x09self showCountries",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["asSilk", "resetContents", "<<", "pageContent", "showCountries"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var contents;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
contents="#Contents"._asSilk();
$recv(contents)._resetContents();
$recv(contents).__lt_lt($self._pageContent());
$self._showCountries();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"resetContents",{contents:contents})});
//>>excludeEnd("ctx");
}; }),
$globals.CoViD19);

$core.addMethod(
$core.method({
selector: "showCountries",
protocol: "action",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "showCountries\x0a\x09| list |\x0a\x09list := '#CountryList' asSilk.\x0a\x09list resetContents.\x0a\x09self countries do: [:country | country addToList: list].\x0a\x09self countries first selectWorld",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["asSilk", "resetContents", "do:", "countries", "addToList:", "selectWorld", "first"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var list;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
list="#CountryList"._asSilk();
$recv(list)._resetContents();
$1=$self._countries();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["countries"]=1;
//>>excludeEnd("ctx");
$recv($1)._do_((function(country){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(country)._addToList_(list);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({country:country},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv($recv($self._countries())._first())._selectWorld();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"showCountries",{list:list})});
//>>excludeEnd("ctx");
}; }),
$globals.CoViD19);

$core.addMethod(
$core.method({
selector: "updateFooter",
protocol: "html",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updateFooter\x0a\x09| element |\x0a\x09element := '#ServerVersion' asSilk.\x0a\x09element resetContents.\x0a\x09element << self class serverVersionInfo",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["asSilk", "resetContents", "<<", "serverVersionInfo", "class"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var element;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
element="#ServerVersion"._asSilk();
$recv(element)._resetContents();
$recv(element).__lt_lt($recv($self._class())._serverVersionInfo());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateFooter",{element:element})});
//>>excludeEnd("ctx");
}; }),
$globals.CoViD19);

$core.addMethod(
$core.method({
selector: "withAllJsons:do:",
protocol: "action",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["someFilenames", "aOneArgumentBlock"],
source: "withAllJsons: someFilenames do: aOneArgumentBlock\x0a\x09(Promise all: (someFilenames collect: [:file |\x0a\x09\x09Platform fetch: self dataHome, file])) then: [:responses |\x0a\x09\x09\x09(Promise all: (responses collect: #json)) then: [:jsons |\x0a\x09\x09\x09\x09aOneArgumentBlock value: jsons]]\x0a\x09\x09catch: [:ex | \x0a\x09\x09\x09(ErrorHandler current respondsTo: #debugError:) \x0a\x09\x09\x09\x09ifTrue: [ErrorHandler current debugError: ex] \x0a\x09\x09\x09\x09ifFalse:[ErrorHandler handleError: ex]]",
referencedClasses: ["Promise", "Platform", "ErrorHandler"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["then:catch:", "all:", "collect:", "fetch:", ",", "dataHome", "then:", "value:", "ifTrue:ifFalse:", "respondsTo:", "current", "debugError:", "handleError:"]
}, function ($methodClass){ return function (someFilenames,aOneArgumentBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$4,$3;
$2=$recv(someFilenames)._collect_((function(file){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($globals.Platform)._fetch_($recv($self._dataHome()).__comma(file));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({file:file},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collect:"]=1;
//>>excludeEnd("ctx");
$1=$recv($globals.Promise)._all_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["all:"]=1;
//>>excludeEnd("ctx");
$recv($1)._then_catch_((function(responses){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($globals.Promise)._all_($recv(responses)._collect_("json")))._then_((function(jsons){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(aOneArgumentBlock)._value_(jsons);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({jsons:jsons},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({responses:responses},$ctx1,2)});
//>>excludeEnd("ctx");
}),(function(ex){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$4=$recv($globals.ErrorHandler)._current();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["current"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._respondsTo_("debugError:");
if($core.assert($3)){
return $recv($recv($globals.ErrorHandler)._current())._debugError_(ex);
} else {
return $recv($globals.ErrorHandler)._handleError_(ex);
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1,4)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"withAllJsons:do:",{someFilenames:someFilenames,aOneArgumentBlock:aOneArgumentBlock})});
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
source: "current\x0a\x09\x22<CoViD19>\x0a\x09singleton\x22\x0a\x09\x0a\x09^current ifNil: [current := self new]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$self.current;
if(($receiver = $1) == null || $receiver.a$nil){
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
selector: "metadata",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "metadata\x0a\x09\x22<Dictionary>\x22\x0a\x09\x0a\x09^self current metadata",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["metadata", "current"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._current())._metadata();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"metadata",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CoViD19.a$cls);

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
$globals.CoViD19.a$cls);

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
var $1,$receiver;
$1=$recv($self._metadata())._at_ifAbsent_("softwareTimestamp",(function(){
return nil;

}));
if(($receiver = $1) == null || $receiver.a$nil){
$1;
} else {
var date;
date=$receiver;
return $recv($globals.Date)._fromString_(date);
}
return $recv($globals.Date)._now();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"serverModificationDate",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CoViD19.a$cls);

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
$globals.CoViD19.a$cls);

$core.addMethod(
$core.method({
selector: "serverNameAnchor",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "serverNameAnchor\x0a\x09^Silk A: {\x0a\x09\x09'href' -> 'https://github.com/ChristianHaider/CoViD19UI'.\x0a\x09\x09'target' -> '_blank'.\x0a\x09\x09'rel' -> 'noopener'.\x0a\x09\x09self serverName, ' ', self serverVersion}",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["A:", "->", ",", "serverName", "serverVersion"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$4,$5,$1;
$2="href".__minus_gt("https://github.com/ChristianHaider/CoViD19UI");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=1;
//>>excludeEnd("ctx");
$3="target".__minus_gt("_blank");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=2;
//>>excludeEnd("ctx");
$4="rel".__minus_gt("noopener");
$5=$recv($recv($self._serverName()).__comma(" ")).__comma($self._serverVersion());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$1=[$2,$3,$4,$5];
return $recv($globals.Silk)._A_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"serverNameAnchor",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CoViD19.a$cls);

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
$globals.CoViD19.a$cls);

$core.addMethod(
$core.method({
selector: "serverVersionInfo",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "serverVersionInfo\x0a\x09^{\x09Silk SPAN: {'class' -> 'VersionLabel'. 'Data collector:'}.\x0a\x09\x09Silk SPAN: {'class' -> 'VersionName'. self serverNameAnchor}.\x0a\x09\x09Silk SPAN: {'class' -> 'VersionDate'. self serverModificationDate asLocaleString}}",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["SPAN:", "->", "serverNameAnchor", "asLocaleString", "serverModificationDate"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1,$6,$5,$4;
$3="class".__minus_gt("VersionLabel");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=1;
//>>excludeEnd("ctx");
$2=[$3,"Data collector:"];
$1=$recv($globals.Silk)._SPAN_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["SPAN:"]=1;
//>>excludeEnd("ctx");
$6="class".__minus_gt("VersionName");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=2;
//>>excludeEnd("ctx");
$5=[$6,$self._serverNameAnchor()];
$4=$recv($globals.Silk)._SPAN_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["SPAN:"]=2;
//>>excludeEnd("ctx");
return [$1,$4,$recv($globals.Silk)._SPAN_(["class".__minus_gt("VersionDate"),$recv($self._serverModificationDate())._asLocaleString()])];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"serverVersionInfo",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CoViD19.a$cls);

$core.addMethod(
$core.method({
selector: "softwareNameAnchor",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "softwareNameAnchor\x0a\x09^Silk A: {\x0a\x09\x09'href' -> 'https://github.com/ChristianHaider/CoViD19UI'.\x0a\x09\x09'target' -> '_blank'.\x0a\x09\x09'rel' -> 'noopener'.\x0a\x09\x09'CoViD-19 Charts'}",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["A:", "->"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2="href".__minus_gt("https://github.com/ChristianHaider/CoViD19UI");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=1;
//>>excludeEnd("ctx");
$3="target".__minus_gt("_blank");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=2;
//>>excludeEnd("ctx");
$1=[$2,$3,"rel".__minus_gt("noopener"),"CoViD-19 Charts"];
return $recv($globals.Silk)._A_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"softwareNameAnchor",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CoViD19.a$cls);

$core.addMethod(
$core.method({
selector: "softwareVersionInfo",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "softwareVersionInfo\x0a\x09^{\x09Silk SPAN: {'class' -> 'VersionLabel'. 'Browser app:'}.\x0a\x09\x09Silk SPAN: {'class' -> 'VersionName'. self softwareNameAnchor}.\x0a\x09\x09Silk SPAN: {'class' -> 'VersionDate'. self programModificationDate asLocaleString}}",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["SPAN:", "->", "softwareNameAnchor", "asLocaleString", "programModificationDate"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1,$6,$5,$4;
$3="class".__minus_gt("VersionLabel");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=1;
//>>excludeEnd("ctx");
$2=[$3,"Browser app:"];
$1=$recv($globals.Silk)._SPAN_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["SPAN:"]=1;
//>>excludeEnd("ctx");
$6="class".__minus_gt("VersionName");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=2;
//>>excludeEnd("ctx");
$5=[$6,$self._softwareNameAnchor()];
$4=$recv($globals.Silk)._SPAN_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["SPAN:"]=2;
//>>excludeEnd("ctx");
return [$1,$4,$recv($globals.Silk)._SPAN_(["class".__minus_gt("VersionDate"),$recv($self._programModificationDate())._asLocaleString()])];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"softwareVersionInfo",{})});
//>>excludeEnd("ctx");
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


$core.addClass("Datapoint", $globals.Object, ["date", "confirmed", "deaths"], "Covid19view");
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
selector: "asSpans",
protocol: "html",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asSpans\x0a\x09\x22<Array of: <span>\x22\x0a\x09\x0a\x09^{Silk SPAN: {'class' -> 'Confirmed'. self confirmed}. \x0a\x09Silk SPAN: {'class' -> 'Deaths'. self deaths}}",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["SPAN:", "->", "confirmed", "deaths"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1;
$3="class".__minus_gt("Confirmed");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=1;
//>>excludeEnd("ctx");
$2=[$3,$self._confirmed()];
$1=$recv($globals.Silk)._SPAN_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["SPAN:"]=1;
//>>excludeEnd("ctx");
return [$1,$recv($globals.Silk)._SPAN_(["class".__minus_gt("Deaths"),$self._deaths()])];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asSpans",{})});
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
var $1;
$1=$recv(someAspects)._isEmpty();
if($core.assert($1)){
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
var $1;
$recv(aStream)._nextPutAll_($recv($self._class())._name());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._nextPut_("(");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPut:"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_($recv($self._date())._asDateString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_(" ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=3;
//>>excludeEnd("ctx");
$1=$recv($self._deaths())._printString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printString"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=4;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_("/");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=5;
//>>excludeEnd("ctx");
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


$core.addClass("ConfirmedAndDeathsDatapoint", $globals.Datapoint, [], "Covid19view");
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
var $2,$3,$1,$4,$5,$7,$6,$9,$8;
$2=$self._date();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["date"]=1;
//>>excludeEnd("ctx");
$3=$recv(aDatapoint)._date();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["date"]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__eq($3);
if(!$core.assert($1)){
$self._error_("the dates are not the same");
}
$4=$self._class();
$5=$self._date();
$7=$self._confirmed();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["confirmed"]=1;
//>>excludeEnd("ctx");
$6=$recv($7).__plus($recv(aDatapoint)._confirmed());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
$9=$self._deaths();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deaths"]=1;
//>>excludeEnd("ctx");
$8=$recv($9).__plus($recv(aDatapoint)._deaths());
return $recv($4)._date_confirmed_deaths_($5,$6,$8);
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
var $1,$2,$4,$3,$6,$5;
$1=$self._class();
$2=$self._date();
$4=$self._confirmed();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["confirmed"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__minus($recv(aDatapoint)._confirmed());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=1;
//>>excludeEnd("ctx");
$6=$self._deaths();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deaths"]=1;
//>>excludeEnd("ctx");
$5=$recv($6).__minus($recv(aDatapoint)._deaths());
return $recv($1)._date_confirmed_deaths_($2,$3,$5);
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
var $2,$3,$1;
$2="href".__minus_gt("https://github.com/CSSEGISandData/COVID-19");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=1;
//>>excludeEnd("ctx");
$3="target".__minus_gt("_blank");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=2;
//>>excludeEnd("ctx");
$1=[$2,$3,"rel".__minus_gt("noopener"),$self._dataProvider()];
return $recv($globals.Silk)._A_($1);
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
var $1,$2;
$1=$self._dateFromJson_($recv(aJson)._date());
$2=$recv(aJson)._at_ifAbsent_("c",(function(){
return (0);

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:ifAbsent:"]=1;
//>>excludeEnd("ctx");
return $self._date_confirmed_deaths_($1,$2,$recv(aJson)._at_ifAbsent_("d",(function(){
return (0);

})));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromJson:",{aJson:aJson})});
//>>excludeEnd("ctx");
}; }),
$globals.ConfirmedAndDeathsDatapoint.a$cls);


$core.addClass("JHUDatapoint", $globals.Datapoint, ["recovered"], "Covid19view");
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
var $2,$3,$1,$4,$5,$7,$6,$9,$8,$11,$10;
$2=$self._date();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["date"]=1;
//>>excludeEnd("ctx");
$3=$recv(aDatapoint)._date();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["date"]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__eq($3);
if(!$core.assert($1)){
$self._error_("the dates are not the same");
}
$4=$self._class();
$5=$self._date();
$7=$self._confirmed();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["confirmed"]=1;
//>>excludeEnd("ctx");
$6=$recv($7).__plus($recv(aDatapoint)._confirmed());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
$9=$self._deaths();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deaths"]=1;
//>>excludeEnd("ctx");
$8=$recv($9).__plus($recv(aDatapoint)._deaths());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=2;
//>>excludeEnd("ctx");
$11=$self._recovered();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["recovered"]=1;
//>>excludeEnd("ctx");
$10=$recv($11).__plus($recv(aDatapoint)._recovered());
return $recv($4)._date_confirmed_deaths_recovered_($5,$6,$8,$10);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"+",{aDatapoint:aDatapoint})});
//>>excludeEnd("ctx");
}; }),
$globals.JHUDatapoint);

$core.addMethod(
$core.method({
selector: "asSpans",
protocol: "html",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asSpans\x0a\x09\x22<Array of: <span>\x22\x0a\x09\x0a\x09^super asSpans, { \x0a\x09\x09Silk SPAN: {'class' -> 'Recovered'. self recovered}}",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: [",", "asSpans", "SPAN:", "->", "recovered"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._asSpans.call($self));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return $recv($1).__comma([$recv($globals.Silk)._SPAN_(["class".__minus_gt("Recovered"),$self._recovered()])]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asSpans",{})});
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
var $1;
$1=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._aspects.call($self));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return $recv($1).__comma(["recovered"]);
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
var $1,$2,$4,$3,$6,$5,$8,$7;
$1=$self._class();
$2=$self._date();
$4=$self._confirmed();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["confirmed"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__minus($recv(aDatapoint)._confirmed());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=1;
//>>excludeEnd("ctx");
$6=$self._deaths();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deaths"]=1;
//>>excludeEnd("ctx");
$5=$recv($6).__minus($recv(aDatapoint)._deaths());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=2;
//>>excludeEnd("ctx");
$8=$self._recovered();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["recovered"]=1;
//>>excludeEnd("ctx");
$7=$recv($8).__minus($recv(aDatapoint)._recovered());
return $recv($1)._date_confirmed_deaths_recovered_($2,$3,$5,$7);
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
var $2,$3,$1;
$2="href".__minus_gt("https://github.com/CSSEGISandData/COVID-19");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=1;
//>>excludeEnd("ctx");
$3="target".__minus_gt("_blank");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=2;
//>>excludeEnd("ctx");
$1=[$2,$3,"rel".__minus_gt("noopener"),$self._dataProvider()];
return $recv($globals.Silk)._A_($1);
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
var $1,$receiver;
$1=$self.recovered;
if(($receiver = $1) == null || $receiver.a$nil){
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
var $1,$2,$3;
$1=$self._dateFromJson_($recv(aJson)._date());
$2=$recv(aJson)._at_ifAbsent_("c",(function(){
return (0);

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:ifAbsent:"]=1;
//>>excludeEnd("ctx");
$3=$recv(aJson)._at_ifAbsent_("d",(function(){
return (0);

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:ifAbsent:"]=2;
//>>excludeEnd("ctx");
return $self._date_confirmed_deaths_recovered_($1,$2,$3,$recv(aJson)._at_ifAbsent_("r",(function(){
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


$core.addClass("RKIDatapoint", $globals.Datapoint, ["byAge"], "Covid19view");
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
var $2,$3,$1,$4,$5;
$2=$self._date();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["date"]=1;
//>>excludeEnd("ctx");
$3=$recv(aDatapoint)._date();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["date"]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__eq($3);
if(!$core.assert($1)){
$self._error_("the dates are not the same");
}
$4=$self._byAge();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["byAge"]=1;
//>>excludeEnd("ctx");
newByAge=$recv($4)._copy();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["copy"]=1;
//>>excludeEnd("ctx");
$recv($recv(aDatapoint)._byAge())._keysAndValuesDo_((function(age,sexDict){
var newSexDict;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$5=$recv(newByAge)._at_ifAbsent_(age,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($globals.Dictionary)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:ifAbsent:"]=1;
//>>excludeEnd("ctx");
newSexDict=$recv($5)._copy();
$recv(sexDict)._keysAndValuesDo_((function(sex,count){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(newSexDict)._at_put_(sex,$recv($recv(newSexDict)._at_ifAbsent_(sex,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv($globals.Casecount)._zero();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,5)});
//>>excludeEnd("ctx");
}))).__plus(count));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({sex:sex,count:count},$ctx2,4)});
//>>excludeEnd("ctx");
}));
return $recv(newByAge)._at_put_(age,newSexDict);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({age:age,sexDict:sexDict,newSexDict:newSexDict},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["keysAndValuesDo:"]=1;
//>>excludeEnd("ctx");
return $recv($self._class())._date_byAge_($self._date(),newByAge);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"+",{aDatapoint:aDatapoint,newByAge:newByAge})});
//>>excludeEnd("ctx");
}; }),
$globals.RKIDatapoint);

$core.addMethod(
$core.method({
selector: "asSpans",
protocol: "html",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asSpans\x0a\x09\x22<Array of: <span>\x22\x0a\x09\x0a\x09^super asSpans, { \x0a\x09\x09Silk SPAN: {'class' -> 'ByAge'. self byAge}}",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: [",", "asSpans", "SPAN:", "->", "byAge"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._asSpans.call($self));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return $recv($1).__comma([$recv($globals.Silk)._SPAN_(["class".__minus_gt("ByAge"),$self._byAge()])]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asSpans",{})});
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
var $2,$1;
$2=$recv($self._byAge())._values();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["values"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._inject_into_($recv($globals.Casecount)._zero(),(function(sum,sexDict){
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
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["inject:into:"]=1;
//>>excludeEnd("ctx");
return $1;
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
var $1,$2;
$1=$self._byAge();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["byAge"]=1;
//>>excludeEnd("ctx");
newByAge=$recv($1)._copy();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["copy"]=1;
//>>excludeEnd("ctx");
$recv($recv(aDatapoint)._byAge())._keysAndValuesDo_((function(age,sexDict){
var newSexDict;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv(newByAge)._at_ifAbsent_(age,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($globals.Dictionary)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:ifAbsent:"]=1;
//>>excludeEnd("ctx");
newSexDict=$recv($2)._copy();
$recv(sexDict)._keysAndValuesDo_((function(sex,count){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(newSexDict)._at_put_(sex,$recv($recv(newSexDict)._at_ifAbsent_(sex,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv($globals.Casecount)._zero();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,4)});
//>>excludeEnd("ctx");
}))).__minus(count));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({sex:sex,count:count},$ctx2,3)});
//>>excludeEnd("ctx");
}));
return $recv(newByAge)._at_put_(age,newSexDict);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({age:age,sexDict:sexDict,newSexDict:newSexDict},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["keysAndValuesDo:"]=1;
//>>excludeEnd("ctx");
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
var $1,$receiver;
$1=$self.confirmed;
if(($receiver = $1) == null || $receiver.a$nil){
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
var $2,$3,$1;
$2="href".__minus_gt("https://npgeo-corona-npgeo-de.hub.arcgis.com/datasets/dd4580c810204019a7b8eb3e0b329dd6_0/data");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=1;
//>>excludeEnd("ctx");
$3="target".__minus_gt("_blank");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=2;
//>>excludeEnd("ctx");
$1=[$2,$3,"rel".__minus_gt("noopener"),$self._dataProvider()];
return $recv($globals.Silk)._A_($1);
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
var $1,$receiver;
$1=$self.deaths;
if(($receiver = $1) == null || $receiver.a$nil){
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
newByAge=$recv($globals.Dictionary)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv($recv(aJson)._byAge())._keysAndValuesDo_((function(age,sexDict){
var dict;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
dict=$recv($globals.Dictionary)._new();
$recv(sexDict)._keysAndValuesDo_((function(sex,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(dict)._at_put_(sex,$recv($globals.Casecount)._fromJson_(value));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({sex:sex,value:value},$ctx2,2)});
//>>excludeEnd("ctx");
}));
return $recv(newByAge)._at_put_(age,dict);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({age:age,sexDict:sexDict,dict:dict},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["keysAndValuesDo:"]=1;
//>>excludeEnd("ctx");
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


$core.addClass("Dataseries", $globals.Object, ["series"], "Covid19view");
$core.addMethod(
$core.method({
selector: "+",
protocol: "arithmetic",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDataseries"],
source: "+ aDataseries\x0a\x09\x22<Dataseries>\x22\x0a\x0a\x09| wst |\x0a\x09wst := OrderedCollection new writeStream.\x0a\x09self\x0a\x09\x09with: aDataseries\x0a\x09\x09onlyInSelf: [:datapoint | wst nextPut: datapoint]\x0a\x09\x09onlyInArg: [:datapoint | wst nextPut: datapoint]\x0a\x09\x09inBoth: [:datapoint1 :datapoint2 | wst nextPut: datapoint1 + datapoint2].\x0a\x09^self class series: wst contents",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["writeStream", "new", "with:onlyInSelf:onlyInArg:inBoth:", "nextPut:", "+", "series:", "class", "contents"]
}, function ($methodClass){ return function (aDataseries){
var self=this,$self=this;
var wst;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
wst=$recv($recv($globals.OrderedCollection)._new())._writeStream();
$self._with_onlyInSelf_onlyInArg_inBoth_(aDataseries,(function(datapoint){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(wst)._nextPut_(datapoint);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPut:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({datapoint:datapoint},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(datapoint){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(wst)._nextPut_(datapoint);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPut:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({datapoint:datapoint},$ctx1,2)});
//>>excludeEnd("ctx");
}),(function(datapoint1,datapoint2){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(wst)._nextPut_($recv(datapoint1).__plus(datapoint2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({datapoint1:datapoint1,datapoint2:datapoint2},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return $recv($self._class())._series_($recv(wst)._contents());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"+",{aDataseries:aDataseries,wst:wst})});
//>>excludeEnd("ctx");
}; }),
$globals.Dataseries);

$core.addMethod(
$core.method({
selector: "changes",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "changes\x0a\x09\x22<Dataseries>\x22\x0a\x09\x0a\x09| wst rst last |\x0a\x09wst := OrderedCollection new writeStream.\x0a\x09rst := self series readStream.\x0a\x09last := nil.\x0a\x09[rst atEnd] whileFalse: [\x0a\x09\x09| datapoint | \x0a\x09\x09datapoint := rst next.\x0a\x09\x09last ifNotNil: [\x0a\x09\x09\x09wst nextPut: (datapoint changeFrom: last)].\x0a\x09\x09last := datapoint].\x0a\x09^self class series: wst contents",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["writeStream", "new", "readStream", "series", "whileFalse:", "atEnd", "next", "ifNotNil:", "nextPut:", "changeFrom:", "series:", "class", "contents"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var wst,rst,last;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
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
$1=last;
if(($receiver = $1) == null || $receiver.a$nil){
$1;
} else {
$recv(wst)._nextPut_($recv(datapoint)._changeFrom_(last));
}
last=datapoint;
return last;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({datapoint:datapoint},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return $recv($self._class())._series_($recv(wst)._contents());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"changes",{wst:wst,rst:rst,last:last})});
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
var $2,$1;
dates=$recv($globals.OrderedCollection)._new();
$recv($recv($self._series())._collect_("date"))._inject_into_(nil,(function(last,date){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv($recv(last)._notNil())._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$2=$recv(last)._month();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["month"]=1;
//>>excludeEnd("ctx");
return $recv($2).__tild_eq($recv(date)._month());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
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
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12;
$1=$self._series();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["series"]=1;
//>>excludeEnd("ctx");
rstSelf=$recv($1)._readStream();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["readStream"]=1;
//>>excludeEnd("ctx");
rstArg=$recv($recv(aSeries)._series())._readStream();
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv(rstSelf)._atEnd();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["atEnd"]=1;
//>>excludeEnd("ctx");
return $recv($2)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(rstArg)._atEnd();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["atEnd"]=2;
//>>excludeEnd("ctx");
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
$3=$recv(rstSelf)._atEnd();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["atEnd"]=3;
//>>excludeEnd("ctx");
if($core.assert($3)){
$4=$recv(rstArg)._next();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["next"]=1;
//>>excludeEnd("ctx");
return $recv(onlyInArgBlock)._value_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["value:"]=1;
//>>excludeEnd("ctx");
} else {
$5=$recv(rstArg)._atEnd();
if($core.assert($5)){
$6=$recv(rstSelf)._next();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["next"]=2;
//>>excludeEnd("ctx");
return $recv(onlyInSelfBlock)._value_($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["value:"]=2;
//>>excludeEnd("ctx");
} else {
var selfDate,argDate;
$7=$recv(rstSelf)._peek();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["peek"]=1;
//>>excludeEnd("ctx");
selfDate=$recv($7)._date();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["date"]=1;
//>>excludeEnd("ctx");
argDate=$recv($recv(rstArg)._peek())._date();
$8=$recv(selfDate).__eq(argDate);
if($core.assert($8)){
$9=$recv(rstSelf)._next();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["next"]=3;
//>>excludeEnd("ctx");
$10=$recv(rstArg)._next();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["next"]=4;
//>>excludeEnd("ctx");
return $recv(inBothBlock)._value_value_($9,$10);
} else {
$11=$recv(selfDate).__lt(argDate);
if($core.assert($11)){
$12=$recv(rstSelf)._next();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["next"]=5;
//>>excludeEnd("ctx");
return $recv(onlyInSelfBlock)._value_($12);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["value:"]=3;
//>>excludeEnd("ctx");
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


$core.addClass("GeographicArea", $globals.Object, ["name", "series", "properties"], "Covid19view");
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
var $1;
$1=$self._lastConfirmed();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lastConfirmed"]=1;
//>>excludeEnd("ctx");
return $recv($1).__lt($recv(aGeographicArea)._lastConfirmed());
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
var $1;
$1=$self._lastConfirmed();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lastConfirmed"]=1;
//>>excludeEnd("ctx");
return $recv($1).__lt_eq($recv(aGeographicArea)._lastConfirmed());
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
var $1;
$1=$self._lastConfirmed();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lastConfirmed"]=1;
//>>excludeEnd("ctx");
return $recv($1).__gt($recv(aGeographicArea)._lastConfirmed());
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
var $1;
$1=$self._lastConfirmed();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lastConfirmed"]=1;
//>>excludeEnd("ctx");
return $recv($1).__gt_eq($recv(aGeographicArea)._lastConfirmed());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,">=",{aGeographicArea:aGeographicArea})});
//>>excludeEnd("ctx");
}; }),
$globals.GeographicArea);

$core.addMethod(
$core.method({
selector: "addPartToList:",
protocol: "html",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anElement"],
source: "addPartToList: anElement\x0a\x09self addToList: anElement",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["addToList:"]
}, function ($methodClass){ return function (anElement){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._addToList_(anElement);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addPartToList:",{anElement:anElement})});
//>>excludeEnd("ctx");
}; }),
$globals.GeographicArea);

$core.addMethod(
$core.method({
selector: "addToList:",
protocol: "html",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anElement"],
source: "addToList: anElement\x0a\x09\x22add html elements to anElement\x22\x0a\x09\x0a\x09anElement << {self emptySpan. self emptySubspan. self asNameSpan. self asValueSpan}",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["<<", "emptySpan", "emptySubspan", "asNameSpan", "asValueSpan"]
}, function ($methodClass){ return function (anElement){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(anElement).__lt_lt([$self._emptySpan(),$self._emptySubspan(),$self._asNameSpan(),$self._asValueSpan()]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addToList:",{anElement:anElement})});
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
var $2,$1,$3,$5,$4;
span=$recv($globals.Silk)._SPAN_("class".__minus_gt("AreaInfo"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["SPAN:"]=1;
//>>excludeEnd("ctx");
$2=$self._population();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["population"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._isZero();
if(!$core.assert($1)){
$3=span;
$5=$recv($globals.Silk)._SPAN_("Population: ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["SPAN:"]=2;
//>>excludeEnd("ctx");
$4=[$5,$recv($globals.Silk)._SPAN_($recv($self._population())._separatedThousandsString())];
return $recv($3).__lt_lt($4);
}
return span;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"areaInfo",{span:span})});
//>>excludeEnd("ctx");
}; }),
$globals.GeographicArea);

$core.addMethod(
$core.method({
selector: "asNameSpan",
protocol: "html",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asNameSpan\x0a\x09\x22<span>\x0a\x09the name of the list item\x22\x0a\x09\x0a\x09| item |\x0a\x09item := Silk SPAN: {\x0a\x09\x09'class' -> 'ListItem'. \x0a\x09\x09(Silk SPAN: {'class' -> 'StateName'. self name})}.\x0a\x09item on: #click bind: [:event |\x0a\x09\x09('#CountryList' asSilk allAt: '.selected') do: [:selected |\x0a\x09\x09\x09selected attrAt: 'class' put: 'ListItem'].\x0a\x09\x09item attrAt: 'class' put: 'ListItem selected'. \x0a\x09\x09self showInfo].\x0a\x09^item",
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
var $2,$1;
$2="class".__minus_gt("ListItem");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=1;
//>>excludeEnd("ctx");
$1=[$2,$recv($globals.Silk)._SPAN_(["class".__minus_gt("StateName"),$self._name()])];
item=$recv($globals.Silk)._SPAN_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["SPAN:"]=1;
//>>excludeEnd("ctx");
$recv(item)._on_bind_("click",(function(event){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv($recv("#CountryList"._asSilk())._allAt_(".selected"))._do_((function(selected){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(selected)._attrAt_put_("class","ListItem");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["attrAt:put:"]=1;
//>>excludeEnd("ctx");
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
}, function($ctx1) {$ctx1.fill(self,"asNameSpan",{item:item})});
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
selector: "casechart",
protocol: "html",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "casechart\x0a\x09^Silk DIV: {\x0a\x09\x09'id' -> 'Casechart'.\x0a\x09\x09(Casechart for: self on: self series aspects: Casechart currentAspects) html}",
referencedClasses: ["Silk", "Casechart"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["DIV:", "->", "html", "for:on:aspects:", "series", "currentAspects"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Silk)._DIV_(["id".__minus_gt("Casechart"),$recv($recv($globals.Casechart)._for_on_aspects_(self,$self._series(),$recv($globals.Casechart)._currentAspects()))._html()]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"casechart",{})});
//>>excludeEnd("ctx");
}; }),
$globals.GeographicArea);

$core.addMethod(
$core.method({
selector: "changechart",
protocol: "html",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "changechart\x0a\x09^Silk DIV: {\x0a\x09\x09'id' -> 'Changechart'.\x0a\x09\x09(Changechart for: self on: self changes aspects: Changechart currentAspects) html}",
referencedClasses: ["Silk", "Changechart"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["DIV:", "->", "html", "for:on:aspects:", "changes", "currentAspects"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Silk)._DIV_(["id".__minus_gt("Changechart"),$recv($recv($globals.Changechart)._for_on_aspects_(self,$self._changes(),$recv($globals.Changechart)._currentAspects()))._html()]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"changechart",{})});
//>>excludeEnd("ctx");
}; }),
$globals.GeographicArea);

$core.addMethod(
$core.method({
selector: "changes",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "changes\x0a\x09\x22<Dataseries>\x22\x0a\x09\x0a\x09^self series changes",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["changes", "series"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._series())._changes();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"changes",{})});
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
var $3,$2,$1,$6,$5,$4;
$3="class".__minus_gt("VersionLabel");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=1;
//>>excludeEnd("ctx");
$2=[$3,"Data:"];
$1=$recv($globals.Silk)._SPAN_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["SPAN:"]=1;
//>>excludeEnd("ctx");
$6="class".__minus_gt("VersionName");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=2;
//>>excludeEnd("ctx");
$5=[$6,$recv($self._series())._dataProviderAnchor()];
$4=$recv($globals.Silk)._SPAN_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["SPAN:"]=2;
//>>excludeEnd("ctx");
return [$1,$4,$recv($globals.Silk)._SPAN_(["class".__minus_gt("VersionDate"),$self._dataDateString()])];
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
protocol: "actions",
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
var $1,$receiver;
$1=$recv($self._metadata())._at_("modificationDate");
if(($receiver = $1) == null || $receiver.a$nil){
$1;
} else {
var date;
date=$receiver;
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
var $1;
$1=$recv($self._class())._name();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["name"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._nextPut_("(");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPut:"]=1;
//>>excludeEnd("ctx");
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
var $1,$receiver;
$1=$self.properties;
if(($receiver = $1) == null || $receiver.a$nil){
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
source: "recreateCharts\x0a\x09| graphics |\x0a\x09graphics := '#Graphics' asSilk.\x0a\x09graphics resetContents.\x0a\x09graphics << {\x0a\x09\x09self graphicsHeader.\x0a\x09 \x09self casechart.\x0a\x09 \x09self changechart}",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["asSilk", "resetContents", "<<", "graphicsHeader", "casechart", "changechart"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var graphics;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
graphics="#Graphics"._asSilk();
$recv(graphics)._resetContents();
$recv(graphics).__lt_lt([$self._graphicsHeader(),$self._casechart(),$self._changechart()]);
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


$core.addClass("Country", $globals.GeographicArea, ["parts"], "Covid19view");
$core.addMethod(
$core.method({
selector: "addPartToList:",
protocol: "html",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anElement"],
source: "addPartToList: anElement\x0a\x09\x22add html elements to anElement\x22\x0a\x09\x0a\x09| plusAction minusAction plusButton |\x0a\x09self parts ifEmpty: [\x0a\x09\x09anElement << {self emptySpan. self emptySubspan. self asSubnameSpan. self asValueSpan}.\x0a\x09\x09^self].\x0a\x09plusAction := [:event |\x0a\x09\x09| button after next2 insert |\x0a\x09\x09button := Silk fromElement: event target.\x0a\x09\x09button resetContents.\x0a\x09\x09button off: #click unbind: plusAction.\x0a\x09\x09button << '–'.\x0a\x09\x09button on: #click bind: minusAction.\x0a\x09\x09after := button setToAfter.\x0a\x09\x09after next.\x0a\x09\x09next2 := after next.\x0a\x09\x09insert := next2 setToAfter.\x0a\x09\x09self parts do: [:part | part addPartToList: insert]].\x0a\x09minusAction := [:event |\x0a\x09\x09| button after next2 insert last |\x0a\x09\x09button := Silk fromElement: event target.\x0a\x09\x09button resetContents.\x0a\x09\x09button off: #click unbind: minusAction.\x0a\x09\x09button attrAt: 'class' put: 'subtreeButton'.\x0a\x09\x09button << '+'.\x0a\x09\x09button on: #click bind: plusAction.\x0a\x09\x09after := button setToAfter.\x0a\x09\x09after next.\x0a\x09\x09next2 := after next.\x0a\x09\x09insert := next2 setToAfter.\x0a\x09\x09self parts size * 4 timesRepeat: [last := after next].\x0a\x09\x09insert cutUpTo: last setToAfter].\x0a\x09plusButton := (Silk BUTTON: {'class' -> 'subtreeButton'. 'type' -> 'button'. '+'}) on: #click bind: plusAction.\x0a\x09anElement << {self emptySpan. plusButton. self asSubnameSpan. self asValueSpan}.",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifEmpty:", "parts", "<<", "emptySpan", "emptySubspan", "asSubnameSpan", "asValueSpan", "fromElement:", "target", "resetContents", "off:unbind:", "on:bind:", "setToAfter", "next", "do:", "addPartToList:", "attrAt:put:", "timesRepeat:", "*", "size", "cutUpTo:", "BUTTON:", "->"]
}, function ($methodClass){ return function (anElement){
var self=this,$self=this;
var plusAction,minusAction,plusButton;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$4,$5,$6,$2,$7,$8,$11,$10,$9;
var $early={};
try {
$1=$self._parts();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["parts"]=1;
//>>excludeEnd("ctx");
$recv($1)._ifEmpty_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$self._emptySpan();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["emptySpan"]=1;
//>>excludeEnd("ctx");
$4=$self._emptySubspan();
$5=$self._asSubnameSpan();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asSubnameSpan"]=1;
//>>excludeEnd("ctx");
$6=$self._asValueSpan();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asValueSpan"]=1;
//>>excludeEnd("ctx");
$2=[$3,$4,$5,$6];
$recv(anElement).__lt_lt($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["<<"]=1;
//>>excludeEnd("ctx");
throw $early=[self];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
plusAction=(function(event){
var button,after,next2,insert;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$7=$recv(event)._target();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["target"]=1;
//>>excludeEnd("ctx");
button=$recv($globals.Silk)._fromElement_($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["fromElement:"]=1;
//>>excludeEnd("ctx");
$recv(button)._resetContents();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["resetContents"]=1;
//>>excludeEnd("ctx");
$recv(button)._off_unbind_("click",plusAction);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["off:unbind:"]=1;
//>>excludeEnd("ctx");
$recv(button).__lt_lt("–");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["<<"]=2;
//>>excludeEnd("ctx");
$recv(button)._on_bind_("click",minusAction);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["on:bind:"]=1;
//>>excludeEnd("ctx");
after=$recv(button)._setToAfter();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["setToAfter"]=1;
//>>excludeEnd("ctx");
$recv(after)._next();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["next"]=1;
//>>excludeEnd("ctx");
next2=$recv(after)._next();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["next"]=2;
//>>excludeEnd("ctx");
insert=$recv(next2)._setToAfter();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["setToAfter"]=2;
//>>excludeEnd("ctx");
$8=$self._parts();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["parts"]=2;
//>>excludeEnd("ctx");
return $recv($8)._do_((function(part){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(part)._addPartToList_(insert);
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
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["<<"]=3;
//>>excludeEnd("ctx");
$recv(button)._on_bind_("click",plusAction);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["on:bind:"]=2;
//>>excludeEnd("ctx");
after=$recv(button)._setToAfter();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["setToAfter"]=3;
//>>excludeEnd("ctx");
$recv(after)._next();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["next"]=3;
//>>excludeEnd("ctx");
next2=$recv(after)._next();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["next"]=4;
//>>excludeEnd("ctx");
insert=$recv(next2)._setToAfter();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["setToAfter"]=4;
//>>excludeEnd("ctx");
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
$11="class".__minus_gt("subtreeButton");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=1;
//>>excludeEnd("ctx");
$10=[$11,"type".__minus_gt("button"),"+"];
$9=$recv($globals.Silk)._BUTTON_($10);
plusButton=$recv($9)._on_bind_("click",plusAction);
$recv(anElement).__lt_lt([$self._emptySpan(),plusButton,$self._asSubnameSpan(),$self._asValueSpan()]);
return self;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addPartToList:",{anElement:anElement,plusAction:plusAction,minusAction:minusAction,plusButton:plusButton})});
//>>excludeEnd("ctx");
}; }),
$globals.Country);

$core.addMethod(
$core.method({
selector: "addToList:",
protocol: "html",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anElement"],
source: "addToList: anElement\x0a\x09\x22add html elements to anElement\x22\x0a\x09\x0a\x09| plusButton minusButton plusAction minusAction |\x0a\x09self parts ifEmpty: [\x0a\x09\x09anElement << {self emptySpan. self emptySubspan. self asNameSpan. self asValueSpan}.\x0a\x09\x09^self].\x0a\x09plusButton := Silk BUTTON: {'class' -> 'treeButton'. 'type' -> 'button'. '+'}.\x0a\x09minusButton := Silk BUTTON: {'class' -> 'treeButton'. 'type' -> 'button'. '–'}.\x0a\x09plusAction := [:event |\x0a\x09\x09| button after next2 insert |\x0a\x09\x09button := Silk fromElement: event target.\x0a\x09\x09button resetContents.\x0a\x09\x09button off: #click unbind: plusAction.\x0a\x09\x09button << '–'.\x0a\x09\x09button on: #click bind: minusAction.\x0a\x09\x09after := button setToAfter.\x0a\x09\x09after next.\x0a\x09\x09after next.\x0a\x09\x09next2 := after next.\x0a\x09\x09insert := next2 setToAfter.\x0a\x09\x09self parts do: [:part | part addPartToList: insert]].\x0a\x09minusAction := [:event |\x0a\x09\x09| button after next2 insert last |\x0a\x09\x09button := Silk fromElement: event target.\x0a\x09\x09button resetContents.\x0a\x09\x09button off: #click unbind: minusAction.\x0a\x09\x09button << '+'.\x0a\x09\x09button on: #click bind: plusAction.\x0a\x09\x09after := button setToAfter.\x0a\x09\x09after next.\x0a\x09\x09after next.\x0a\x09\x09next2 := after next.\x0a\x09\x09insert := next2 setToAfter.\x0a\x09\x09self parts size * 4 timesRepeat: [\x0a\x09\x09\x09last := after next.\x0a\x09\x09\x09((last attrAt: 'class') = 'subtreeButton' and: [\x0a\x09\x09\x09last element innerText = '–']) ifTrue: [\x0a\x09\x09\x09\x09| after2 eol line |\x0a\x09\x09\x09\x09after2 := last setToAfter.\x0a\x09\x09\x09\x09after2 next.\x0a\x09\x09\x09\x09eol := after2 next setToAfter.\x0a\x09\x09\x09\x09line := {after2 next. after2 next. after2 next. after2 next}.\x0a\x09\x09\x09\x09[[:first :second :third :forth |\x0a\x09\x09\x09\x09\x09first isEmpty and: [\x0a\x09\x09\x09\x09\x09second isEmpty and: [\x0a\x09\x09\x09\x09\x09(third attrAt: 'class') = 'ListItem' and: [\x0a\x09\x09\x09\x09\x09(third at: '.StateName') notNil]]]\x0a\x09\x09\x09\x09] valueWithPossibleArguments: line] whileTrue: [\x0a\x09\x09\x09\x09\x09line := {after2 next. after2 next. after2 next. after2 next}].\x0a\x09\x09\x09\x09after2 back; back; back; back.\x0a\x09\x09\x09\x09eol cutUpTo: after2]].\x0a\x09\x09insert cutUpTo: last setToAfter].\x0a\x09plusButton on: #click bind: plusAction.\x0a\x09minusButton on: #click bind: minusAction.\x0a\x09anElement << {plusButton. self emptySubspan. self asNameSpan. self asValueSpan}",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifEmpty:", "parts", "<<", "emptySpan", "emptySubspan", "asNameSpan", "asValueSpan", "BUTTON:", "->", "fromElement:", "target", "resetContents", "off:unbind:", "on:bind:", "setToAfter", "next", "do:", "addPartToList:", "timesRepeat:", "*", "size", "ifTrue:", "and:", "=", "attrAt:", "innerText", "element", "whileTrue:", "valueWithPossibleArguments:", "isEmpty", "notNil", "at:", "back", "cutUpTo:"]
}, function ($methodClass){ return function (anElement){
var self=this,$self=this;
var plusButton,minusButton,plusAction,minusAction;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$4,$5,$6,$2,$8,$9,$7,$11,$10,$12,$13,$16,$15,$14,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26;
var $early={};
try {
$1=$self._parts();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["parts"]=1;
//>>excludeEnd("ctx");
$recv($1)._ifEmpty_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$self._emptySpan();
$4=$self._emptySubspan();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["emptySubspan"]=1;
//>>excludeEnd("ctx");
$5=$self._asNameSpan();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asNameSpan"]=1;
//>>excludeEnd("ctx");
$6=$self._asValueSpan();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asValueSpan"]=1;
//>>excludeEnd("ctx");
$2=[$3,$4,$5,$6];
$recv(anElement).__lt_lt($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["<<"]=1;
//>>excludeEnd("ctx");
throw $early=[self];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$8="class".__minus_gt("treeButton");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=1;
//>>excludeEnd("ctx");
$9="type".__minus_gt("button");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=2;
//>>excludeEnd("ctx");
$7=[$8,$9,"+"];
plusButton=$recv($globals.Silk)._BUTTON_($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["BUTTON:"]=1;
//>>excludeEnd("ctx");
$11="class".__minus_gt("treeButton");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=3;
//>>excludeEnd("ctx");
$10=[$11,"type".__minus_gt("button"),"–"];
minusButton=$recv($globals.Silk)._BUTTON_($10);
plusAction=(function(event){
var button,after,next2,insert;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$12=$recv(event)._target();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["target"]=1;
//>>excludeEnd("ctx");
button=$recv($globals.Silk)._fromElement_($12);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["fromElement:"]=1;
//>>excludeEnd("ctx");
$recv(button)._resetContents();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["resetContents"]=1;
//>>excludeEnd("ctx");
$recv(button)._off_unbind_("click",plusAction);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["off:unbind:"]=1;
//>>excludeEnd("ctx");
$recv(button).__lt_lt("–");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["<<"]=2;
//>>excludeEnd("ctx");
$recv(button)._on_bind_("click",minusAction);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["on:bind:"]=1;
//>>excludeEnd("ctx");
after=$recv(button)._setToAfter();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["setToAfter"]=1;
//>>excludeEnd("ctx");
$recv(after)._next();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["next"]=1;
//>>excludeEnd("ctx");
$recv(after)._next();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["next"]=2;
//>>excludeEnd("ctx");
next2=$recv(after)._next();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["next"]=3;
//>>excludeEnd("ctx");
insert=$recv(next2)._setToAfter();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["setToAfter"]=2;
//>>excludeEnd("ctx");
$13=$self._parts();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["parts"]=2;
//>>excludeEnd("ctx");
return $recv($13)._do_((function(part){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(part)._addPartToList_(insert);
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
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["<<"]=3;
//>>excludeEnd("ctx");
$recv(button)._on_bind_("click",plusAction);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["on:bind:"]=2;
//>>excludeEnd("ctx");
after=$recv(button)._setToAfter();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["setToAfter"]=3;
//>>excludeEnd("ctx");
$recv(after)._next();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["next"]=4;
//>>excludeEnd("ctx");
$recv(after)._next();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["next"]=5;
//>>excludeEnd("ctx");
next2=$recv(after)._next();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["next"]=6;
//>>excludeEnd("ctx");
insert=$recv(next2)._setToAfter();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["setToAfter"]=4;
//>>excludeEnd("ctx");
$recv($recv($recv($self._parts())._size()).__star((4)))._timesRepeat_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
last=$recv(after)._next();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["next"]=7;
//>>excludeEnd("ctx");
$16=$recv(last)._attrAt_("class");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["attrAt:"]=1;
//>>excludeEnd("ctx");
$15=$recv($16).__eq("subtreeButton");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["="]=1;
//>>excludeEnd("ctx");
$14=$recv($15)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv($recv($recv(last)._element())._innerText()).__eq("–");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["="]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,6)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["and:"]=1;
//>>excludeEnd("ctx");
if($core.assert($14)){
var after2,eol,line;
after2=$recv(last)._setToAfter();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["setToAfter"]=5;
//>>excludeEnd("ctx");
$recv(after2)._next();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["next"]=8;
//>>excludeEnd("ctx");
$17=$recv(after2)._next();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["next"]=9;
//>>excludeEnd("ctx");
eol=$recv($17)._setToAfter();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["setToAfter"]=6;
//>>excludeEnd("ctx");
$18=$recv(after2)._next();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["next"]=10;
//>>excludeEnd("ctx");
$19=$recv(after2)._next();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["next"]=11;
//>>excludeEnd("ctx");
$20=$recv(after2)._next();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["next"]=12;
//>>excludeEnd("ctx");
$21=$recv(after2)._next();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["next"]=13;
//>>excludeEnd("ctx");
line=[$18,$19,$20,$21];
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv((function(first,second,third,forth){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx5) {
//>>excludeEnd("ctx");
$22=$recv(first)._isEmpty();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx["isEmpty"]=1;
//>>excludeEnd("ctx");
return $recv($22)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx6) {
//>>excludeEnd("ctx");
return $recv($recv(second)._isEmpty())._and_((function(){
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
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx6.sendIdx["and:"]=3;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx6) {$ctx6.fillBlock({},$ctx5,10)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx["and:"]=2;
//>>excludeEnd("ctx");
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
$23=$recv(after2)._next();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["next"]=14;
//>>excludeEnd("ctx");
$24=$recv(after2)._next();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["next"]=15;
//>>excludeEnd("ctx");
$25=$recv(after2)._next();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["next"]=16;
//>>excludeEnd("ctx");
line=[$23,$24,$25,$recv(after2)._next()];
return line;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,13)});
//>>excludeEnd("ctx");
}));
$26=after2;
$recv($26)._back();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["back"]=1;
//>>excludeEnd("ctx");
$recv($26)._back();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["back"]=2;
//>>excludeEnd("ctx");
$recv($26)._back();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["back"]=3;
//>>excludeEnd("ctx");
$recv($26)._back();
return $recv(eol)._cutUpTo_(after2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["cutUpTo:"]=1;
//>>excludeEnd("ctx");
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
$recv(plusButton)._on_bind_("click",plusAction);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:bind:"]=3;
//>>excludeEnd("ctx");
$recv(minusButton)._on_bind_("click",minusAction);
$recv(anElement).__lt_lt([plusButton,$self._emptySubspan(),$self._asNameSpan(),$self._asValueSpan()]);
return self;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addToList:",{anElement:anElement,plusButton:plusButton,minusButton:minusButton,plusAction:plusAction,minusAction:minusAction})});
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
var $2,$5,$6,$4,$3,$1,$7;
$2="class".__minus_gt("ListItem");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=1;
//>>excludeEnd("ctx");
$5="class".__minus_gt("CountryName");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=2;
//>>excludeEnd("ctx");
$6=$self._name();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["name"]=1;
//>>excludeEnd("ctx");
$4=[$5,$6];
$3=$recv($globals.Silk)._SPAN_($4);
$1=[$2,$3];
item=$recv($globals.Silk)._SPAN_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["SPAN:"]=1;
//>>excludeEnd("ctx");
$7=$recv($self._name()).__eq("World");
if($core.assert($7)){
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
return $recv(selected)._attrAt_put_("class","ListItem");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["attrAt:put:"]=1;
//>>excludeEnd("ctx");
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
var $2,$1;
$2="class".__minus_gt("ListItem");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=1;
//>>excludeEnd("ctx");
$1=[$2,$recv($globals.Silk)._SPAN_(["class".__minus_gt("LandName"),$self._name()])];
item=$recv($globals.Silk)._SPAN_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["SPAN:"]=1;
//>>excludeEnd("ctx");
$recv(item)._on_bind_("click",(function(event){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv($recv("#CountryList"._asSilk())._allAt_(".selected"))._do_((function(selected){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(selected)._attrAt_put_("class","ListItem");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["attrAt:put:"]=1;
//>>excludeEnd("ctx");
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
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._metadata_.call($self,aDictionary));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["metadata:"]=1;
//>>excludeEnd("ctx");
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
var $1,$receiver;
$1=$self.parts;
if(($receiver = $1) == null || $receiver.a$nil){
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
var $1,$receiver;
$1=$self.series;
if(($receiver = $1) == null || $receiver.a$nil){
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
var $2,$1,$5,$4,$3;
$2=$self._parts();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["parts"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._first();
firstSeries=$recv($1)._series();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["series"]=1;
//>>excludeEnd("ctx");
$5=$self._parts();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["parts"]=2;
//>>excludeEnd("ctx");
$4=$recv($5)._size();
$3=$recv($4).__eq((1));
if($core.assert($3)){
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
var $1,$3,$2,$4,$5,$6,$8,$10,$9,$7;
$1=$recv(someSeries)._allButFirst();
$3=$recv(someSeries)._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["first"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._series();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["series"]=1;
//>>excludeEnd("ctx");
globalSeries=$recv($1)._inject_into_($2,(function(sum,series){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$4=$recv(series)._series();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["series"]=2;
//>>excludeEnd("ctx");
return $recv(sum).__plus($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({sum:sum,series:series},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$5=$self._name_series_("World",globalSeries);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["name:series:"]=1;
//>>excludeEnd("ctx");
countryList=$recv($globals.OrderedCollection)._with_($5);
$recv($recv(someSeries)._groupedBy_("country"))._keysAndValuesDo_((function(countryName,listOfSeries){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$6=countryList;
$8=$recv($recv(listOfSeries)._size()).__eq((1));
if($core.assert($8)){
$7=$self._name_series_(countryName,$recv($recv(listOfSeries)._first())._series());
} else {
$10=$recv(listOfSeries)._sort_((function(a,b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(a).__gt(b);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx[">"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({a:a,b:b},$ctx2,5)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["sort:"]=1;
//>>excludeEnd("ctx");
$9=$recv($globals.State)._allFromJHUSeries_($10);
$7=$self._name_parts_(countryName,$9);
}
return $recv($6)._add_($7);
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
var $1,$3,$2;
list=$recv($globals.OrderedCollection)._new();
$recv($recv(someSeries)._groupedBy_("bundesland"))._keysAndValuesDo_((function(name,listOfSeries){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=list;
$3=$recv($recv(listOfSeries)._size()).__eq((1));
if($core.assert($3)){
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
var $1,$3,$5,$4,$2;
list=$recv($globals.OrderedCollection)._new();
$recv($recv(someSeries)._groupedBy_("state"))._keysAndValuesDo_((function(name,listOfSeries){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=list;
$3=$recv($recv(listOfSeries)._size()).__eq((1));
if($core.assert($3)){
$2=$self._name_series_(name,$recv($recv(listOfSeries)._first())._series());
} else {
$5=$recv(listOfSeries)._sort_((function(a,b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(a).__gt(b);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx[">"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({a:a,b:b},$ctx2,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["sort:"]=1;
//>>excludeEnd("ctx");
$4=$recv($globals.State)._allFromUSJHUSeries_($5);
$2=$self._name_parts_(name,$4);
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


$core.addClass("State", $globals.GeographicArea, [], "Covid19view");

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
var $1,$2,$4,$3;
return $recv(someSeries)._collect_((function(series){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(series)._county();
$2=$recv(series)._series();
$4="uid".__minus_gt($recv(series)._uid());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["->"]=1;
//>>excludeEnd("ctx");
$3=$recv($globals.Dictionary)._with_with_($4,"population".__minus_gt($recv(series)._population()));
return $self._name_series_properties_($1,$2,$3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({series:series},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"allFromUSJHUSeries:",{someSeries:someSeries})});
//>>excludeEnd("ctx");
}; }),
$globals.State.a$cls);


$core.addClass("SVG", $globals.Silk, [], "Covid19view");

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


$core.addClass("Scale", $globals.Object, ["from", "to"], "Covid19view");
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
selector: "goodTopFor:",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMaxValue"],
source: "goodTopFor: aMaxValue\x0a\x09\x22<Number>\x0a\x09a good top value for the chart is the next tick above the maximal value\x22\x0a\x09\x0a\x09^aMaxValue",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aMaxValue){
var self=this,$self=this;
return aMaxValue;

}; }),
$globals.Scale);

$core.addMethod(
$core.method({
selector: "initializeFrom:to:",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStart", "anEnd"],
source: "initializeFrom: aStart to: anEnd\x0a\x09from := aStart.\x0a\x09to := self goodTopFor: anEnd",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["goodTopFor:"]
}, function ($methodClass){ return function (aStart,anEnd){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.from=aStart;
$self.to=$self._goodTopFor_(anEnd);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeFrom:to:",{aStart:aStart,anEnd:anEnd})});
//>>excludeEnd("ctx");
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


$core.addClass("Datescale", $globals.Scale, [], "Covid19view");


$core.addClass("Valuescale", $globals.Scale, ["logarithmic"], "Covid19view");
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



$core.addClass("LinearValuescale", $globals.Valuescale, [], "Covid19view");
$core.addMethod(
$core.method({
selector: "goodTopFor:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMaxValue"],
source: "goodTopFor: aMaxValue\x0a\x09| f normed |\x0a\x09f := 10 raisedTo: aMaxValue exponent.\x0a\x09normed := aMaxValue / f.\x0a\x09normed >= 3 ifTrue: [\x0a\x09\x09^normed ceiling * f].\x0a\x09normed >= 2 ifTrue: [\x0a\x09\x09^(normed * 2) ceiling * 0.5 * f].\x0a\x09normed >= 1 ifTrue: [\x0a\x09\x09^(normed * 5) ceiling * 0.2 * f].\x0a\x09self halt",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["raisedTo:", "exponent", "/", "ifTrue:", ">=", "*", "ceiling", "halt"]
}, function ($methodClass){ return function (aMaxValue){
var self=this,$self=this;
var f,normed;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2,$4,$8,$7,$6,$5,$9,$11,$10;
f=(10)._raisedTo_($recv(aMaxValue)._exponent());
normed=$recv(aMaxValue).__slash(f);
$1=$recv(normed).__gt_eq((3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">="]=1;
//>>excludeEnd("ctx");
if($core.assert($1)){
$3=$recv(normed)._ceiling();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["ceiling"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__star(f);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=1;
//>>excludeEnd("ctx");
return $2;
}
$4=$recv(normed).__gt_eq((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">="]=2;
//>>excludeEnd("ctx");
if($core.assert($4)){
$8=$recv(normed).__star((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=4;
//>>excludeEnd("ctx");
$7=$recv($8)._ceiling();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["ceiling"]=2;
//>>excludeEnd("ctx");
$6=$recv($7).__star((0.5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=3;
//>>excludeEnd("ctx");
$5=$recv($6).__star(f);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=2;
//>>excludeEnd("ctx");
return $5;
}
$9=$recv(normed).__gt_eq((1));
if($core.assert($9)){
$11=$recv($recv($recv(normed).__star((5)))._ceiling()).__star((0.2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=6;
//>>excludeEnd("ctx");
$10=$recv($11).__star(f);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=5;
//>>excludeEnd("ctx");
return $10;
}
$self._halt();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"goodTopFor:",{aMaxValue:aMaxValue,f:f,normed:normed})});
//>>excludeEnd("ctx");
}; }),
$globals.LinearValuescale);

$core.addMethod(
$core.method({
selector: "normTicks",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "normTicks\x0a\x09\x22<Array[2] of: (Array of: Number)>\x22\x0a\x09\x0a\x09| dict normed |\x0a\x09dict := Dictionary new\x0a\x09\x09at: 10 put: [#(#(2 4 6 8 10) #(1 3 5 7 9))];\x0a\x09\x09at: 9 put: [#(#(2 4 6 8) #(1 3 5 7 9))];\x0a\x09\x09at: 8 put: [#(#(2 4 6 8) #(1 3 5 7))];\x0a\x09\x09at: 7 put: [#(#(2 4 6) #(1 3 5 7))];\x0a\x09\x09at: 6 put: [#(#(2 4 6) #(1 3 5))];\x0a\x09\x09at: 5 put: [#(#(2 4) #(1 3 5))];\x0a\x09\x09at: 4 put: [:n | {{1. 2. 3. 4}. 0 to: n by: 0.5}];\x0a\x09\x09at: 3 put: [:n | {{1. 2. 3}. 0 to: n by: 0.5}];\x0a\x09\x09at: 2 put: [:n | {{1. 2}. 0 to: n by: 0.2}];\x0a\x09\x09at: 1 put: [:n | {{1}. 0 to: n by: 0.2}];\x0a\x09\x09yourself.\x0a\x09normed := self to / self tickFactor.\x0a\x09^(dict at: normed ceiling) cull: normed",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:put:", "new", "to:by:", "yourself", "/", "to", "tickFactor", "cull:", "at:", "ceiling"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var dict,normed;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$7;
$1=$recv($globals.Dictionary)._new();
$recv($1)._at_put_((10),(function(){
return [[(2), (4), (6), (8), (10)], [(1), (3), (5), (7), (9)]];

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv($1)._at_put_((9),(function(){
return [[(2), (4), (6), (8)], [(1), (3), (5), (7), (9)]];

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=2;
//>>excludeEnd("ctx");
$recv($1)._at_put_((8),(function(){
return [[(2), (4), (6), (8)], [(1), (3), (5), (7)]];

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=3;
//>>excludeEnd("ctx");
$recv($1)._at_put_((7),(function(){
return [[(2), (4), (6)], [(1), (3), (5), (7)]];

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=4;
//>>excludeEnd("ctx");
$recv($1)._at_put_((6),(function(){
return [[(2), (4), (6)], [(1), (3), (5)]];

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=5;
//>>excludeEnd("ctx");
$recv($1)._at_put_((5),(function(){
return [[(2), (4)], [(1), (3), (5)]];

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=6;
//>>excludeEnd("ctx");
$recv($1)._at_put_((4),(function(n){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=[(1),(2),(3),(4)];
$3=(0)._to_by_(n,(0.5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["to:by:"]=1;
//>>excludeEnd("ctx");
return [$2,$3];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({n:n},$ctx1,7)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=7;
//>>excludeEnd("ctx");
$recv($1)._at_put_((3),(function(n){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$4=[(1),(2),(3)];
$5=(0)._to_by_(n,(0.5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["to:by:"]=2;
//>>excludeEnd("ctx");
return [$4,$5];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({n:n},$ctx1,8)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=8;
//>>excludeEnd("ctx");
$recv($1)._at_put_((2),(function(n){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$6=[(1),(2)];
$7=(0)._to_by_(n,(0.2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["to:by:"]=3;
//>>excludeEnd("ctx");
return [$6,$7];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({n:n},$ctx1,9)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=9;
//>>excludeEnd("ctx");
$recv($1)._at_put_((1),(function(n){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return [[(1)],(0)._to_by_(n,(0.2))];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({n:n},$ctx1,10)});
//>>excludeEnd("ctx");
}));
dict=$recv($1)._yourself();
normed=$recv($self._to()).__slash($self._tickFactor());
return $recv($recv(dict)._at_($recv(normed)._ceiling()))._cull_(normed);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"normTicks",{dict:dict,normed:normed})});
//>>excludeEnd("ctx");
}; }),
$globals.LinearValuescale);

$core.addMethod(
$core.method({
selector: "tickFactor",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tickFactor\x0a\x09\x22<Number>\x0a\x09decimal factor to divide the max value so that the result is below 10.\x0a\x09Examples: \x0a\x09\x0947 tickFactor => 10\x0a\x09\x093577 tickFactor => 1000\x0a\x09\x095 tickFactor => 1 \x22\x0a\x09\x0a\x09^10 raisedTo: self to exponent",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["raisedTo:", "exponent", "to"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return (10)._raisedTo_($recv($self._to())._exponent());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tickFactor",{})});
//>>excludeEnd("ctx");
}; }),
$globals.LinearValuescale);

$core.addMethod(
$core.method({
selector: "ticks",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "ticks\x0a\x09| f |\x0a\x09f := self tickFactor.\x0a\x09^self normTicks collect: [:ticks |\x0a\x09\x09ticks collect: [:n | n * f]]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["tickFactor", "collect:", "normTicks", "*"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var f;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
f=$self._tickFactor();
$1=$recv($self._normTicks())._collect_((function(ticks){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(ticks)._collect_((function(n){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(n).__star(f);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({n:n},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({ticks:ticks},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collect:"]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ticks",{f:f})});
//>>excludeEnd("ctx");
}; }),
$globals.LinearValuescale);



$core.addClass("LogarithmicValuescale", $globals.Valuescale, [], "Covid19view");
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
selector: "goodTopFor:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMaxValue"],
source: "goodTopFor: aMaxValue\x0a\x09^10 raisedTo: aMaxValue exponent + 1",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["raisedTo:", "+", "exponent"]
}, function ($methodClass){ return function (aMaxValue){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return (10)._raisedTo_($recv($recv(aMaxValue)._exponent()).__plus((1)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"goodTopFor:",{aMaxValue:aMaxValue})});
//>>excludeEnd("ctx");
}; }),
$globals.LogarithmicValuescale);

$core.addMethod(
$core.method({
selector: "ticks",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "ticks\x0a\x09| exponent majors minors topFactor |\x0a\x09exponent := self to exponent.\x0a\x09majors := (0 to: exponent + 1) collect: [:exp | 10 raisedTo: exp].\x0a\x09minors := OrderedCollection new.\x0a\x09topFactor := (self to / (10 raisedTo: exponent)) floor.\x0a\x09minors addAll: ((3 to: topFactor by: 2) collect: [:i | (10 raisedTo: exponent) * i]).\x0a\x090 to: exponent - 1 do: [:exp | \x0a\x09\x09minors addAll: (#(3 5 7 9) collect: [:i | (10 raisedTo: exp) * i])].\x0a\x09^{majors. minors}",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["exponent", "to", "collect:", "to:", "+", "raisedTo:", "new", "floor", "/", "addAll:", "to:by:", "*", "to:do:", "-"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var exponent,majors,minors,topFactor;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$4,$2,$5,$7,$6;
$1=$self._to();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["to"]=1;
//>>excludeEnd("ctx");
exponent=$recv($1)._exponent();
majors=$recv((0)._to_($recv(exponent).__plus((1))))._collect_((function(exp){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (10)._raisedTo_(exp);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["raisedTo:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({exp:exp},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collect:"]=1;
//>>excludeEnd("ctx");
minors=$recv($globals.OrderedCollection)._new();
$3=$self._to();
$4=(10)._raisedTo_(exponent);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["raisedTo:"]=2;
//>>excludeEnd("ctx");
$2=$recv($3).__slash($4);
topFactor=$recv($2)._floor();
$5=minors;
$6=$recv((3)._to_by_(topFactor,(2)))._collect_((function(i){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$7=(10)._raisedTo_(exponent);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["raisedTo:"]=3;
//>>excludeEnd("ctx");
return $recv($7).__star(i);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["*"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({i:i},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collect:"]=2;
//>>excludeEnd("ctx");
$recv($5)._addAll_($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addAll:"]=1;
//>>excludeEnd("ctx");
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



$core.addClass("Series", $globals.Object, ["series"], "Covid19view");
$core.addMethod(
$core.method({
selector: "<",
protocol: "comparing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSeries"],
source: "< aSeries\x0a\x09^self lastConfirmed < aSeries lastConfirmed",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["<", "lastConfirmed"]
}, function ($methodClass){ return function (aSeries){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._lastConfirmed();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lastConfirmed"]=1;
//>>excludeEnd("ctx");
return $recv($1).__lt($recv(aSeries)._lastConfirmed());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"<",{aSeries:aSeries})});
//>>excludeEnd("ctx");
}; }),
$globals.Series);

$core.addMethod(
$core.method({
selector: "<=",
protocol: "comparing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSeries"],
source: "<= aSeries\x0a\x09^self lastConfirmed <= aSeries lastConfirmed",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["<=", "lastConfirmed"]
}, function ($methodClass){ return function (aSeries){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._lastConfirmed();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lastConfirmed"]=1;
//>>excludeEnd("ctx");
return $recv($1).__lt_eq($recv(aSeries)._lastConfirmed());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"<=",{aSeries:aSeries})});
//>>excludeEnd("ctx");
}; }),
$globals.Series);

$core.addMethod(
$core.method({
selector: ">",
protocol: "comparing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSeries"],
source: "> aSeries\x0a\x09^self lastConfirmed > aSeries lastConfirmed",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: [">", "lastConfirmed"]
}, function ($methodClass){ return function (aSeries){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._lastConfirmed();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lastConfirmed"]=1;
//>>excludeEnd("ctx");
return $recv($1).__gt($recv(aSeries)._lastConfirmed());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,">",{aSeries:aSeries})});
//>>excludeEnd("ctx");
}; }),
$globals.Series);

$core.addMethod(
$core.method({
selector: ">=",
protocol: "comparing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSeries"],
source: ">= aSeries\x0a\x09^self lastConfirmed >= aSeries lastConfirmed",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: [">=", "lastConfirmed"]
}, function ($methodClass){ return function (aSeries){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._lastConfirmed();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lastConfirmed"]=1;
//>>excludeEnd("ctx");
return $recv($1).__gt_eq($recv(aSeries)._lastConfirmed());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,">=",{aSeries:aSeries})});
//>>excludeEnd("ctx");
}; }),
$globals.Series);

$core.addMethod(
$core.method({
selector: "initializeSeries:",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDataseries"],
source: "initializeSeries: aDataseries\x0a\x09series := aDataseries",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aDataseries){
var self=this,$self=this;
$self.series=aDataseries;
return self;

}; }),
$globals.Series);

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
$globals.Series);

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
$globals.Series);

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
$globals.Series);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: "printing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["stream"],
source: "printOn: stream\x0a\x09stream\x0a\x09\x09nextPutAll: self class name asString;\x0a\x09\x09nextPut: $(;\x0a\x09\x09nextPutAll: self lastConfirmed printString;\x0a\x09\x09nextPut: $)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["nextPutAll:", "asString", "name", "class", "nextPut:", "printString", "lastConfirmed"]
}, function ($methodClass){ return function (stream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(stream)._nextPutAll_($recv($recv($self._class())._name())._asString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$recv(stream)._nextPut_("(");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPut:"]=1;
//>>excludeEnd("ctx");
$recv(stream)._nextPutAll_($recv($self._lastConfirmed())._printString());
$recv(stream)._nextPut_(")");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{stream:stream})});
//>>excludeEnd("ctx");
}; }),
$globals.Series);

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
$globals.Series);


$core.addMethod(
$core.method({
selector: "fromJson:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJson"],
source: "fromJson: aJson\x0a\x09^self subclassResponibility",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["subclassResponibility"]
}, function ($methodClass){ return function (aJson){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._subclassResponibility();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromJson:",{aJson:aJson})});
//>>excludeEnd("ctx");
}; }),
$globals.Series.a$cls);

$core.addMethod(
$core.method({
selector: "series:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDataseries"],
source: "series: aDataseries\x0a\x09| inst |\x0a\x09inst := self new.\x0a\x09inst initializeSeries: aDataseries.\x0a\x09^inst",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "initializeSeries:"]
}, function ($methodClass){ return function (aDataseries){
var self=this,$self=this;
var inst;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
inst=$self._new();
$recv(inst)._initializeSeries_(aDataseries);
return inst;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"series:",{aDataseries:aDataseries,inst:inst})});
//>>excludeEnd("ctx");
}; }),
$globals.Series.a$cls);


$core.addClass("JHUSeries", $globals.Series, ["country", "state"], "Covid19view");
$core.addMethod(
$core.method({
selector: "country",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "country\x0a\x09\x22<String>\x22\x0a\x09\x0a\x09^country",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.country;

}; }),
$globals.JHUSeries);

$core.addMethod(
$core.method({
selector: "initializeCountry:state:series:",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCountryString", "aStateString", "aDataseries"],
source: "initializeCountry: aCountryString state: aStateString series: aDataseries\x0a\x09self initializeSeries: aDataseries.\x0a\x09country := aCountryString.\x0a\x09state := aStateString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["initializeSeries:"]
}, function ($methodClass){ return function (aCountryString,aStateString,aDataseries){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._initializeSeries_(aDataseries);
$self.country=aCountryString;
$self.state=aStateString;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeCountry:state:series:",{aCountryString:aCountryString,aStateString:aStateString,aDataseries:aDataseries})});
//>>excludeEnd("ctx");
}; }),
$globals.JHUSeries);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: "printing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["stream"],
source: "printOn: stream\x0a\x09stream\x0a\x09\x09nextPutAll: self country;\x0a\x09\x09nextPut: $ ;\x0a\x09\x09nextPutAll: self state;\x0a\x09\x09nextPut: $(;\x0a\x09\x09nextPutAll: self lastConfirmed printString;\x0a\x09\x09nextPut: $)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["nextPutAll:", "country", "nextPut:", "state", "printString", "lastConfirmed"]
}, function ($methodClass){ return function (stream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(stream)._nextPutAll_($self._country());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$recv(stream)._nextPut_(" ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPut:"]=1;
//>>excludeEnd("ctx");
$recv(stream)._nextPutAll_($self._state());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
$recv(stream)._nextPut_("(");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPut:"]=2;
//>>excludeEnd("ctx");
$recv(stream)._nextPutAll_($recv($self._lastConfirmed())._printString());
$recv(stream)._nextPut_(")");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{stream:stream})});
//>>excludeEnd("ctx");
}; }),
$globals.JHUSeries);

$core.addMethod(
$core.method({
selector: "state",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "state\x0a\x09\x22<String>\x22\x0a\x09\x0a\x09^state",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.state;

}; }),
$globals.JHUSeries);


$core.addMethod(
$core.method({
selector: "country:state:series:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCountryString", "aStateString", "aDataseries"],
source: "country: aCountryString state: aStateString series: aDataseries\x0a\x09| inst |\x0a\x09inst := self new.\x0a\x09inst \x0a\x09\x09initializeCountry: aCountryString \x0a\x09\x09state: aStateString \x0a\x09\x09series: aDataseries.\x0a\x09^inst",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "initializeCountry:state:series:"]
}, function ($methodClass){ return function (aCountryString,aStateString,aDataseries){
var self=this,$self=this;
var inst;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
inst=$self._new();
$recv(inst)._initializeCountry_state_series_(aCountryString,aStateString,aDataseries);
return inst;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"country:state:series:",{aCountryString:aCountryString,aStateString:aStateString,aDataseries:aDataseries,inst:inst})});
//>>excludeEnd("ctx");
}; }),
$globals.JHUSeries.a$cls);

$core.addMethod(
$core.method({
selector: "fromJson:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJson"],
source: "fromJson: aJson\x0a\x09^self \x0a\x09\x09country: aJson country \x0a\x09\x09state: aJson state \x0a\x09\x09series: (Dataseries series: (aJson series collect: [:json | JHUDatapoint fromJson: json]))",
referencedClasses: ["Dataseries", "JHUDatapoint"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["country:state:series:", "country", "state", "series:", "collect:", "series", "fromJson:"]
}, function ($methodClass){ return function (aJson){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._country_state_series_($recv(aJson)._country(),$recv(aJson)._state(),$recv($globals.Dataseries)._series_($recv($recv(aJson)._series())._collect_((function(json){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($globals.JHUDatapoint)._fromJson_(json);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({json:json},$ctx1,1)});
//>>excludeEnd("ctx");
}))));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromJson:",{aJson:aJson})});
//>>excludeEnd("ctx");
}; }),
$globals.JHUSeries.a$cls);


$core.addClass("JHUUSSeries", $globals.Series, ["uid", "state", "county", "population"], "Covid19view");
$core.addMethod(
$core.method({
selector: "county",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "county\x0a\x09\x22<String>\x22\x0a\x09\x0a\x09^county",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.county;

}; }),
$globals.JHUUSSeries);

$core.addMethod(
$core.method({
selector: "initializeUid:state:county:population:series:",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aUidString", "aStateString", "aCountyString", "aPopulationInteger", "aDataseries"],
source: "initializeUid: aUidString state: aStateString county: aCountyString population: aPopulationInteger series: aDataseries\x0a\x09self initializeSeries: aDataseries.\x0a\x09uid := aUidString.\x0a\x09state := aStateString.\x0a\x09county := aCountyString.\x0a\x09population := aPopulationInteger",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["initializeSeries:"]
}, function ($methodClass){ return function (aUidString,aStateString,aCountyString,aPopulationInteger,aDataseries){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._initializeSeries_(aDataseries);
$self.uid=aUidString;
$self.state=aStateString;
$self.county=aCountyString;
$self.population=aPopulationInteger;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeUid:state:county:population:series:",{aUidString:aUidString,aStateString:aStateString,aCountyString:aCountyString,aPopulationInteger:aPopulationInteger,aDataseries:aDataseries})});
//>>excludeEnd("ctx");
}; }),
$globals.JHUUSSeries);

$core.addMethod(
$core.method({
selector: "population",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "population\x0a\x09\x22<Integer>\x22\x0a\x09\x0a\x09^population",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.population;

}; }),
$globals.JHUUSSeries);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: "printing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["stream"],
source: "printOn: stream\x0a\x09stream\x0a\x09\x09nextPutAll: self state;\x0a\x09\x09nextPut: $ ;\x0a\x09\x09nextPutAll: self county;\x0a\x09\x09nextPut: $(;\x0a\x09\x09nextPutAll: self lastConfirmed printString;\x0a\x09\x09nextPut: $)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["nextPutAll:", "state", "nextPut:", "county", "printString", "lastConfirmed"]
}, function ($methodClass){ return function (stream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(stream)._nextPutAll_($self._state());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$recv(stream)._nextPut_(" ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPut:"]=1;
//>>excludeEnd("ctx");
$recv(stream)._nextPutAll_($self._county());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
$recv(stream)._nextPut_("(");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPut:"]=2;
//>>excludeEnd("ctx");
$recv(stream)._nextPutAll_($recv($self._lastConfirmed())._printString());
$recv(stream)._nextPut_(")");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{stream:stream})});
//>>excludeEnd("ctx");
}; }),
$globals.JHUUSSeries);

$core.addMethod(
$core.method({
selector: "state",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "state\x0a\x09\x22<String>\x22\x0a\x09\x0a\x09^state",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.state;

}; }),
$globals.JHUUSSeries);

$core.addMethod(
$core.method({
selector: "uid",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "uid\x0a\x09\x22<String>\x22\x0a\x09\x0a\x09^uid",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.uid;

}; }),
$globals.JHUUSSeries);


$core.addMethod(
$core.method({
selector: "fromJson:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJson"],
source: "fromJson: aJson\x0a\x09^self \x0a\x09\x09uid: aJson uid\x0a\x09\x09state: aJson state \x0a\x09\x09county: aJson county \x0a\x09\x09population: aJson population\x0a\x09\x09series: (Dataseries series: (aJson series collect: [:json | ConfirmedAndDeathsDatapoint fromJson: json]))",
referencedClasses: ["Dataseries", "ConfirmedAndDeathsDatapoint"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["uid:state:county:population:series:", "uid", "state", "county", "population", "series:", "collect:", "series", "fromJson:"]
}, function ($methodClass){ return function (aJson){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._uid_state_county_population_series_($recv(aJson)._uid(),$recv(aJson)._state(),$recv(aJson)._county(),$recv(aJson)._population(),$recv($globals.Dataseries)._series_($recv($recv(aJson)._series())._collect_((function(json){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($globals.ConfirmedAndDeathsDatapoint)._fromJson_(json);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({json:json},$ctx1,1)});
//>>excludeEnd("ctx");
}))));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromJson:",{aJson:aJson})});
//>>excludeEnd("ctx");
}; }),
$globals.JHUUSSeries.a$cls);

$core.addMethod(
$core.method({
selector: "uid:state:county:population:series:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aUidString", "aStateString", "aCountyString", "aPopulationInteger", "aDataseries"],
source: "uid: aUidString state: aStateString county: aCountyString population: aPopulationInteger series: aDataseries\x0a\x09| inst |\x0a\x09inst := self new.\x0a\x09inst \x0a\x09\x09initializeUid: aUidString \x0a\x09\x09state: aStateString \x0a\x09\x09county: aCountyString \x0a\x09\x09population: aPopulationInteger \x0a\x09\x09series: aDataseries.\x0a\x09^inst",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "initializeUid:state:county:population:series:"]
}, function ($methodClass){ return function (aUidString,aStateString,aCountyString,aPopulationInteger,aDataseries){
var self=this,$self=this;
var inst;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
inst=$self._new();
$recv(inst)._initializeUid_state_county_population_series_(aUidString,aStateString,aCountyString,aPopulationInteger,aDataseries);
return inst;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"uid:state:county:population:series:",{aUidString:aUidString,aStateString:aStateString,aCountyString:aCountyString,aPopulationInteger:aPopulationInteger,aDataseries:aDataseries,inst:inst})});
//>>excludeEnd("ctx");
}; }),
$globals.JHUUSSeries.a$cls);


$core.addClass("RKISeries", $globals.Series, ["idBundesland", "bundesland", "idLandkreis", "landkreis"], "Covid19view");
$core.addMethod(
$core.method({
selector: "bundesland",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "bundesland\x0a\x09\x22<String>\x22\x0a\x09\x0a\x09^bundesland",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.bundesland;

}; }),
$globals.RKISeries);

$core.addMethod(
$core.method({
selector: "idBundesland",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "idBundesland\x0a\x09\x22<Integer>\x22\x0a\x09\x0a\x09^idBundesland",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.idBundesland;

}; }),
$globals.RKISeries);

$core.addMethod(
$core.method({
selector: "idLandkreis",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "idLandkreis\x0a\x09\x22<String>\x22\x0a\x09\x0a\x09^idLandkreis",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.idLandkreis;

}; }),
$globals.RKISeries);

$core.addMethod(
$core.method({
selector: "initializeIdBundesland:bundesland:idLandkreis:landkreis:series:",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIdBundeslandInteger", "aBundeslandString", "anIdLandkreisString", "aLandkreisString", "aDataseries"],
source: "initializeIdBundesland: anIdBundeslandInteger bundesland: aBundeslandString idLandkreis: anIdLandkreisString landkreis: aLandkreisString series: aDataseries\x0a\x09self initializeSeries: aDataseries.\x0a\x09idBundesland := anIdBundeslandInteger.\x0a\x09bundesland := aBundeslandString.\x0a\x09idLandkreis := anIdLandkreisString.\x0a\x09landkreis := aLandkreisString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["initializeSeries:"]
}, function ($methodClass){ return function (anIdBundeslandInteger,aBundeslandString,anIdLandkreisString,aLandkreisString,aDataseries){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._initializeSeries_(aDataseries);
$self.idBundesland=anIdBundeslandInteger;
$self.bundesland=aBundeslandString;
$self.idLandkreis=anIdLandkreisString;
$self.landkreis=aLandkreisString;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeIdBundesland:bundesland:idLandkreis:landkreis:series:",{anIdBundeslandInteger:anIdBundeslandInteger,aBundeslandString:aBundeslandString,anIdLandkreisString:anIdLandkreisString,aLandkreisString:aLandkreisString,aDataseries:aDataseries})});
//>>excludeEnd("ctx");
}; }),
$globals.RKISeries);

$core.addMethod(
$core.method({
selector: "landkreis",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "landkreis\x0a\x09\x22<String>\x22\x0a\x09\x0a\x09^landkreis",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.landkreis;

}; }),
$globals.RKISeries);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: "printing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["stream"],
source: "printOn: stream\x0a\x09stream\x0a\x09\x09nextPutAll: self bundesland;\x0a\x09\x09nextPut: $ ;\x0a\x09\x09nextPutAll: self landkreis;\x0a\x09\x09nextPut: $(;\x0a\x09\x09nextPutAll: self lastConfirmed printString;\x0a\x09\x09nextPut: $)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["nextPutAll:", "bundesland", "nextPut:", "landkreis", "printString", "lastConfirmed"]
}, function ($methodClass){ return function (stream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(stream)._nextPutAll_($self._bundesland());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$recv(stream)._nextPut_(" ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPut:"]=1;
//>>excludeEnd("ctx");
$recv(stream)._nextPutAll_($self._landkreis());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
$recv(stream)._nextPut_("(");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPut:"]=2;
//>>excludeEnd("ctx");
$recv(stream)._nextPutAll_($recv($self._lastConfirmed())._printString());
$recv(stream)._nextPut_(")");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{stream:stream})});
//>>excludeEnd("ctx");
}; }),
$globals.RKISeries);


$core.addMethod(
$core.method({
selector: "fromJson:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJson"],
source: "fromJson: aJson\x0a\x09^self \x0a\x09\x09idBundesland: aJson idBundesland\x0a\x09\x09bundesland: aJson bundesland\x0a\x09\x09idLandkreis: aJson idLandkreis\x0a\x09\x09landkreis: aJson landkreis\x0a\x09\x09series: (Dataseries series: (aJson series collect: [:json | RKIDatapoint fromJson: json]))",
referencedClasses: ["Dataseries", "RKIDatapoint"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["idBundesland:bundesland:idLandkreis:landkreis:series:", "idBundesland", "bundesland", "idLandkreis", "landkreis", "series:", "collect:", "series", "fromJson:"]
}, function ($methodClass){ return function (aJson){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._idBundesland_bundesland_idLandkreis_landkreis_series_($recv(aJson)._idBundesland(),$recv(aJson)._bundesland(),$recv(aJson)._idLandkreis(),$recv(aJson)._landkreis(),$recv($globals.Dataseries)._series_($recv($recv(aJson)._series())._collect_((function(json){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($globals.RKIDatapoint)._fromJson_(json);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({json:json},$ctx1,1)});
//>>excludeEnd("ctx");
}))));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromJson:",{aJson:aJson})});
//>>excludeEnd("ctx");
}; }),
$globals.RKISeries.a$cls);

$core.addMethod(
$core.method({
selector: "idBundesland:bundesland:idLandkreis:landkreis:series:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIdBundeslandInteger", "aBundeslandString", "anIdLandkreisString", "aLandkreisString", "aDataseries"],
source: "idBundesland: anIdBundeslandInteger bundesland: aBundeslandString idLandkreis: anIdLandkreisString landkreis: aLandkreisString series: aDataseries\x0a\x09| inst |\x0a\x09inst := self new.\x0a\x09inst \x0a\x09\x09initializeIdBundesland: anIdBundeslandInteger \x0a\x09\x09bundesland: aBundeslandString \x0a\x09\x09idLandkreis: anIdLandkreisString \x0a\x09\x09landkreis: aLandkreisString \x0a\x09\x09series: aDataseries.\x0a\x09^inst",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "initializeIdBundesland:bundesland:idLandkreis:landkreis:series:"]
}, function ($methodClass){ return function (anIdBundeslandInteger,aBundeslandString,anIdLandkreisString,aLandkreisString,aDataseries){
var self=this,$self=this;
var inst;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
inst=$self._new();
$recv(inst)._initializeIdBundesland_bundesland_idLandkreis_landkreis_series_(anIdBundeslandInteger,aBundeslandString,anIdLandkreisString,aLandkreisString,aDataseries);
return inst;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"idBundesland:bundesland:idLandkreis:landkreis:series:",{anIdBundeslandInteger:anIdBundeslandInteger,aBundeslandString:aBundeslandString,anIdLandkreisString:anIdLandkreisString,aLandkreisString:aLandkreisString,aDataseries:aDataseries,inst:inst})});
//>>excludeEnd("ctx");
}; }),
$globals.RKISeries.a$cls);

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
source: "exponent\x0a\x09\x22<Integer>\x0a\x09the power of 10 below the receiver\x22\x0a\x09\x0a\x09^self log floor",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["floor", "log"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._log())._floor();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exponent",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "separatedThousandsString",
protocol: "*Covid19view",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "separatedThousandsString\x0a\x09\x22<String>\x0a\x09String with thousands separator every third insertin point\x22\x0a\x09\x0a\x09<inlineJS: 'return self.toLocaleString()'>",
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
}, function($ctx1) {$ctx1.fill(self,"separatedThousandsString",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "asArgumentsIn:",
protocol: "*Covid19view",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "asArgumentsIn: aBlock\x0a\x09\x22Evaluate aBlock with the receiver's elements as parameters.\x0a\x09aBlock takes its arguments from the receiver.\x0a\x09'ok'\x0a\x09#(1 2 3) asArgumentsIn: [:a :b :c | a + b + c]\x0a\x09#(1 2 3) asArgumentsIn: [:a :b | a + b]\x0a\x09#(1 2 3) asArgumentsIn: [:a | a]\x0a\x09#(1 2 3) asArgumentsIn: [42]\x0a\x09'not ok'\x0a\x09#(1 2 3) asArgumentsIn: [:a :b :c :d | a + b + c + d]\x0a\x09\x22\x0a\x0a\x09^aBlock valueWithPossibleArguments: self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["valueWithPossibleArguments:"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(aBlock)._valueWithPossibleArguments_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asArgumentsIn:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.SequenceableCollection);

});
