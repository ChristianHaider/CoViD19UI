define(["amber/boot", "require", "amber/core/Kernel-Objects", "silk/Silk"], function($boot,requirejs){"use strict";
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("Covid19view");
$pkg.innerEval = function (expr) { return eval(expr); };
$pkg.imports = ["silk/Silk"];
//>>excludeStart("imports", pragmas.excludeImports);
$pkg.isReady = new Promise(function (resolve, reject) { requirejs(["silk/Silk"], function () {resolve();}, reject); });
//>>excludeEnd("imports");
$pkg.transport = {"type":"amd","amdNamespace":"amber-covid19view"};

$core.addClass("Barchart", $globals.Object, ["series", "valuescale", "datescale"], "Covid19view");
$core.addMethod(
$core.method({
selector: "chartAreaIn:",
protocol: "html",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSVG"],
source: "chartAreaIn: aSVG\x0a\x09\x22add the chart area\x22\x0a\x09\x0a\x09| chartArea barWidth |\x0a\x09chartArea := aSVG G: {\x0a\x09\x09'class' -> 'ChartArea'.\x0a\x09\x09SVG RECT: {\x0a\x09\x09\x09'x' -> self chartLeft. 'y' -> self chartTop. \x0a\x09\x09\x09'width' -> self chartWidth. 'height' -> self chartHeight}}.\x0a\x09barWidth := self chartWidth / self datapoints size.\x0a\x09self datapoints do: [:datapoint |\x0a\x09\x09| barLeft barTopConfirmed barHeightConfirmed barTopRecovered barHeightRecovered barTopDeaths barHeightDeaths |\x0a\x09\x09barLeft := (self xAt: datapoint date) - barWidth.\x0a\x09\x09barTopConfirmed := self yAt: datapoint confirmed.\x0a\x09\x09barHeightConfirmed := self chartBottom - barTopConfirmed.\x0a\x09\x09chartArea RECT: {\x0a\x09\x09\x09'class' -> 'BarConfirmed'.\x0a\x09\x09\x09'x' -> barLeft. 'y' -> barTopConfirmed. \x0a\x09\x09\x09'width' -> barWidth. 'height' -> barHeightConfirmed}.\x0a\x09\x09barTopRecovered := self yAt: datapoint decided.\x0a\x09\x09barHeightRecovered := self chartBottom - barTopRecovered.\x0a\x09\x09chartArea RECT: {\x0a\x09\x09\x09'class' -> 'BarRecovered'.\x0a\x09\x09\x09'x' -> barLeft. 'y' -> barTopRecovered. \x0a\x09\x09\x09'width' -> barWidth. 'height' -> barHeightRecovered}.\x0a\x09\x09barTopDeaths := self yAt: datapoint deaths.\x0a\x09\x09barHeightDeaths := self chartBottom - barTopDeaths.\x0a\x09\x09chartArea RECT: {\x0a\x09\x09\x09'class' -> 'BarDeaths'.\x0a\x09\x09\x09'x' -> barLeft. 'y' -> barTopDeaths. \x0a\x09\x09\x09'width' -> barWidth. 'height' -> barHeightDeaths}.\x0a\x09].\x0a\x09^chartArea",
referencedClasses: ["SVG"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["G:", "->", "RECT:", "chartLeft", "chartTop", "chartWidth", "chartHeight", "/", "size", "datapoints", "do:", "-", "xAt:", "date", "yAt:", "confirmed", "chartBottom", "decided", "deaths"]
}, function ($methodClass){ return function (aSVG){
var self=this,$self=this;
var chartArea,barWidth;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$5,$6,$8,$7,$9,$4,$3,$1,$10,$12,$11,$13,$14,$16,$17,$18,$19,$20,$15,$21,$22,$24,$25,$26,$27,$28,$23,$29,$31,$32,$33,$34,$30;
$2="class".__minus_gt("ChartArea");
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
$8=$self._chartWidth();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["chartWidth"]=1;
//>>excludeEnd("ctx");
$7="width".__minus_gt($8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=4;
//>>excludeEnd("ctx");
$9="height".__minus_gt($self._chartHeight());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=5;
//>>excludeEnd("ctx");
$4=[$5,$6,$7,$9];
$3=$recv($globals.SVG)._RECT_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["RECT:"]=1;
//>>excludeEnd("ctx");
$1=[$2,$3];
chartArea=$recv(aSVG)._G_($1);
$10=$self._chartWidth();
$12=$self._datapoints();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["datapoints"]=1;
//>>excludeEnd("ctx");
$11=$recv($12)._size();
barWidth=$recv($10).__slash($11);
$recv($self._datapoints())._do_((function(datapoint){
var barLeft,barTopConfirmed,barHeightConfirmed,barTopRecovered,barHeightRecovered,barTopDeaths,barHeightDeaths;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
barLeft=$recv($self._xAt_($recv(datapoint)._date())).__minus(barWidth);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["-"]=1;
//>>excludeEnd("ctx");
barTopConfirmed=$self._yAt_($recv(datapoint)._confirmed());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["yAt:"]=1;
//>>excludeEnd("ctx");
$13=$self._chartBottom();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["chartBottom"]=1;
//>>excludeEnd("ctx");
barHeightConfirmed=$recv($13).__minus(barTopConfirmed);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["-"]=2;
//>>excludeEnd("ctx");
$14=chartArea;
$16="class".__minus_gt("BarConfirmed");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["->"]=6;
//>>excludeEnd("ctx");
$17="x".__minus_gt(barLeft);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["->"]=7;
//>>excludeEnd("ctx");
$18="y".__minus_gt(barTopConfirmed);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["->"]=8;
//>>excludeEnd("ctx");
$19="width".__minus_gt(barWidth);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["->"]=9;
//>>excludeEnd("ctx");
$20="height".__minus_gt(barHeightConfirmed);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["->"]=10;
//>>excludeEnd("ctx");
$15=[$16,$17,$18,$19,$20];
$recv($14)._RECT_($15);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["RECT:"]=2;
//>>excludeEnd("ctx");
barTopRecovered=$self._yAt_($recv(datapoint)._decided());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["yAt:"]=2;
//>>excludeEnd("ctx");
$21=$self._chartBottom();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["chartBottom"]=2;
//>>excludeEnd("ctx");
barHeightRecovered=$recv($21).__minus(barTopRecovered);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["-"]=3;
//>>excludeEnd("ctx");
$22=chartArea;
$24="class".__minus_gt("BarRecovered");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["->"]=11;
//>>excludeEnd("ctx");
$25="x".__minus_gt(barLeft);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["->"]=12;
//>>excludeEnd("ctx");
$26="y".__minus_gt(barTopRecovered);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["->"]=13;
//>>excludeEnd("ctx");
$27="width".__minus_gt(barWidth);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["->"]=14;
//>>excludeEnd("ctx");
$28="height".__minus_gt(barHeightRecovered);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["->"]=15;
//>>excludeEnd("ctx");
$23=[$24,$25,$26,$27,$28];
$recv($22)._RECT_($23);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["RECT:"]=3;
//>>excludeEnd("ctx");
barTopDeaths=$self._yAt_($recv(datapoint)._deaths());
barHeightDeaths=$recv($self._chartBottom()).__minus(barTopDeaths);
$29=chartArea;
$31="class".__minus_gt("BarDeaths");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["->"]=16;
//>>excludeEnd("ctx");
$32="x".__minus_gt(barLeft);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["->"]=17;
//>>excludeEnd("ctx");
$33="y".__minus_gt(barTopDeaths);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["->"]=18;
//>>excludeEnd("ctx");
$34="width".__minus_gt(barWidth);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["->"]=19;
//>>excludeEnd("ctx");
$30=[$31,$32,$33,$34,"height".__minus_gt(barHeightDeaths)];
return $recv($29)._RECT_($30);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({datapoint:datapoint,barLeft:barLeft,barTopConfirmed:barTopConfirmed,barHeightConfirmed:barHeightConfirmed,barTopRecovered:barTopRecovered,barHeightRecovered:barHeightRecovered,barTopDeaths:barTopDeaths,barHeightDeaths:barHeightDeaths},$ctx1,1)});
//>>excludeEnd("ctx");
}));
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
source: "chartTop\x0a\x09\x22<Number>\x22\x0a\x09\x0a\x09^0",
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
protocol: "html",
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
selector: "linButtonIn:",
protocol: "html",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSVG"],
source: "linButtonIn: aSVG\x0a\x09| g |\x0a\x09g := aSVG G: 'class' -> 'LinearButton'.\x0a\x09g RECT: {\x0a\x09\x09'x' -> 170. 'y' -> 90. \x0a\x09\x09'width' -> 15. 'height' -> 10}.\x0a\x09g TEXT: {\x0a\x09\x09'class' -> 'ButtonText'.\x0a\x09\x09'x' -> 175. 'y' -> 97.\x0a\x09\x09'lin'}.\x0a\x09g on: #click bind: [self setLinearScale]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["G:", "->", "RECT:", "TEXT:", "on:bind:", "setLinearScale"]
}, function ($methodClass){ return function (aSVG){
var self=this,$self=this;
var g;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$4,$5,$6,$7,$3,$8,$10,$11,$9;
$1="class".__minus_gt("LinearButton");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=1;
//>>excludeEnd("ctx");
g=$recv(aSVG)._G_($1);
$2=g;
$4="x".__minus_gt((170));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=2;
//>>excludeEnd("ctx");
$5="y".__minus_gt((90));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=3;
//>>excludeEnd("ctx");
$6="width".__minus_gt((15));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=4;
//>>excludeEnd("ctx");
$7="height".__minus_gt((10));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=5;
//>>excludeEnd("ctx");
$3=[$4,$5,$6,$7];
$recv($2)._RECT_($3);
$8=g;
$10="class".__minus_gt("ButtonText");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=6;
//>>excludeEnd("ctx");
$11="x".__minus_gt((175));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=7;
//>>excludeEnd("ctx");
$9=[$10,$11,"y".__minus_gt((97)),"lin"];
$recv($8)._TEXT_($9);
$recv(g)._on_bind_("click",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._setLinearScale();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"linButtonIn:",{aSVG:aSVG,g:g})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "linLogButtonsIn:",
protocol: "html",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSVG"],
source: "linLogButtonsIn: aSVG\x0a\x09self linButtonIn: aSVG.\x0a\x09self logButtonIn: aSVG",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["linButtonIn:", "logButtonIn:"]
}, function ($methodClass){ return function (aSVG){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._linButtonIn_(aSVG);
$self._logButtonIn_(aSVG);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"linLogButtonsIn:",{aSVG:aSVG})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "logButtonIn:",
protocol: "html",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSVG"],
source: "logButtonIn: aSVG\x0a\x09| g |\x0a\x09g := aSVG G: 'class' -> 'LogarithmicButton'.\x0a\x09g RECT: {\x0a\x09\x09'x' -> 185. 'y' -> 90. \x0a\x09\x09'width' -> 15. 'height' -> 10}.\x0a\x09g TEXT: {\x0a\x09\x09'class' -> 'ButtonText'.\x0a\x09\x09'x' -> 188. 'y' -> 97.\x0a\x09\x09'log'}.\x0a\x09g on: #click bind: [self setLogarithmicScale]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["G:", "->", "RECT:", "TEXT:", "on:bind:", "setLogarithmicScale"]
}, function ($methodClass){ return function (aSVG){
var self=this,$self=this;
var g;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$4,$5,$6,$7,$3,$8,$10,$11,$9;
$1="class".__minus_gt("LogarithmicButton");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=1;
//>>excludeEnd("ctx");
g=$recv(aSVG)._G_($1);
$2=g;
$4="x".__minus_gt((185));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=2;
//>>excludeEnd("ctx");
$5="y".__minus_gt((90));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=3;
//>>excludeEnd("ctx");
$6="width".__minus_gt((15));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=4;
//>>excludeEnd("ctx");
$7="height".__minus_gt((10));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=5;
//>>excludeEnd("ctx");
$3=[$4,$5,$6,$7];
$recv($2)._RECT_($3);
$8=g;
$10="class".__minus_gt("ButtonText");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=6;
//>>excludeEnd("ctx");
$11="x".__minus_gt((188));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=7;
//>>excludeEnd("ctx");
$9=[$10,$11,"y".__minus_gt((97)),"log"];
$recv($8)._TEXT_($9);
$recv(g)._on_bind_("click",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._setLogarithmicScale();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"logButtonIn:",{aSVG:aSVG,g:g})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "maxValue",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "maxValue\x0a\x09\x22<Integer>\x22\x0a\x09\x0a\x09^self datapoints inject: 0 into: [:max :datapoint | max max: datapoint confirmed]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["inject:into:", "datapoints", "max:", "confirmed"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._datapoints())._inject_into_((0),(function(max,datapoint){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(max)._max_($recv(datapoint)._confirmed());
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
selector: "setLinearScale",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setLinearScale\x0a\x09self valuescale beLinear.\x0a\x09console log: 'linear'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["beLinear", "valuescale", "log:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._valuescale())._beLinear();
$recv(console)._log_("linear");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setLinearScale",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "setLogarithmicScale",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setLogarithmicScale\x0a\x09self valuescale beLogarithmic.\x0a\x09console log: 'logarithmic'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["beLogarithmic", "valuescale", "log:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._valuescale())._beLogarithmic();
$recv(console)._log_("logarithmic");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setLogarithmicScale",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "svg",
protocol: "html",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "svg\x0a\x09\x22<svg>\x22\x0a\x09\x0a\x09| svg valueAxis dateAxis buttons lin log |\x0a\x09svg := SVG SVG: {\x0a\x09\x09'viewBox' -> '0 0 200 100'.\x0a\x09\x09SVG RECT: {'x' -> 0. 'y' -> 0. 'width' -> '100%'. 'height' -> '100%'. 'fill' -> '#eee'}}.\x0a\x09self valueAxisIn: svg.\x0a\x09self dateAxisIn: svg.\x0a\x09self chartAreaIn: svg.\x0a\x09self linLogButtonsIn: svg.\x0a\x09^svg",
referencedClasses: ["SVG"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["SVG:", "->", "RECT:", "valueAxisIn:", "dateAxisIn:", "chartAreaIn:", "linLogButtonsIn:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var svg,valueAxis,dateAxis,buttons,lin,log;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$5,$6,$7,$8,$4,$3,$1;
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
$8="height".__minus_gt("100%");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=5;
//>>excludeEnd("ctx");
$4=[$5,$6,$7,$8,"fill".__minus_gt("#eee")];
$3=$recv($globals.SVG)._RECT_($4);
$1=[$2,$3];
svg=$recv($globals.SVG)._SVG_($1);
$self._valueAxisIn_(svg);
$self._dateAxisIn_(svg);
$self._chartAreaIn_(svg);
$self._linLogButtonsIn_(svg);
return svg;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"svg",{svg:svg,valueAxis:valueAxis,dateAxis:dateAxis,buttons:buttons,lin:lin,log:log})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "svgNamespace",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "svgNamespace\x0a\x09^'http://www.w3.org/2000/svg'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return "http://www.w3.org/2000/svg";

}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "valueAxisIn:",
protocol: "html",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSVG"],
source: "valueAxisIn: aSVG\x0a\x09| ticks majorTicks minorTicks valueAxis |\x0a\x09ticks := self valuescale ticks.\x0a\x09majorTicks := ticks first.\x0a\x09minorTicks := ticks last.\x0a\x09valueAxis := aSVG G: {\x0a\x09\x09'class' -> 'ValueAxis'.\x0a\x09\x09SVG RECT: {\x0a\x09\x09\x09'x' -> self chartRight. 'y' -> self chartTop. \x0a\x09\x09\x09'width' -> self valuescaleWidth. 'height' -> self chartHeight}}.\x0a\x09minorTicks do: [:value |\x0a\x09\x09| y |\x0a\x09\x09y := self yAt: value.\x0a\x09\x09valueAxis LINE: {\x0a\x09\x09\x09'class' -> 'Minorline'.\x0a\x09\x09\x09'x1' -> self chartLeft. 'y1' -> y.\x0a\x09\x09\x09'x2' -> self chartRight. 'y2' -> y}].\x0a\x09majorTicks do: [:value |\x0a\x09\x09| y |\x0a\x09\x09y := self yAt: value.\x0a\x09\x09valueAxis LINE: {\x0a\x09\x09\x09'class' -> 'Majorline'.\x0a\x09\x09\x09'x1' -> self chartLeft. 'y1' -> y.\x0a\x09\x09\x09'x2' -> self chartRight. 'y2' -> y}.\x0a\x09\x09y > 10 ifTrue: [\x0a\x09\x09\x09valueAxis TEXT: {\x0a\x09\x09\x09\x09'class' -> 'MajorText'.\x0a\x09\x09\x09\x09'text-anchor' -> 'end'.\x0a\x09\x09\x09\x09'x' -> (self chartRight + self valuescaleWidth - 2). 'y' -> (y + 2).\x0a\x09\x09\x09\x09value separatedThousandsString}]].\x0a\x09valueAxis TEXT: {\x0a\x09\x09'class' -> 'ValueText'.\x0a\x09\x09'text-anchor' -> 'end'.\x0a\x09\x09'x' -> (self chartRight + self valuescaleWidth - 2). 'y' -> (self chartTop + 6).\x0a\x09\x09self series lastConfirmed separatedThousandsString}.\x0a\x09^valueAxis",
referencedClasses: ["SVG"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ticks", "valuescale", "first", "last", "G:", "->", "RECT:", "chartRight", "chartTop", "valuescaleWidth", "chartHeight", "do:", "yAt:", "LINE:", "chartLeft", "ifTrue:", ">", "TEXT:", "-", "+", "separatedThousandsString", "lastConfirmed", "series"]
}, function ($methodClass){ return function (aSVG){
var self=this,$self=this;
var ticks,majorTicks,minorTicks,valueAxis;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$6,$5,$8,$7,$10,$9,$11,$4,$3,$1,$12,$14,$16,$15,$17,$19,$18,$20,$13,$21,$23,$24,$25,$27,$26,$28,$22,$29,$30,$32,$33,$37,$38,$36,$35,$34,$40,$39,$41,$31,$42,$44,$45,$48,$47,$46,$43;
ticks=$recv($self._valuescale())._ticks();
majorTicks=$recv(ticks)._first();
minorTicks=$recv(ticks)._last();
$2="class".__minus_gt("ValueAxis");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=1;
//>>excludeEnd("ctx");
$6=$self._chartRight();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["chartRight"]=1;
//>>excludeEnd("ctx");
$5="x".__minus_gt($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=2;
//>>excludeEnd("ctx");
$8=$self._chartTop();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["chartTop"]=1;
//>>excludeEnd("ctx");
$7="y".__minus_gt($8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=3;
//>>excludeEnd("ctx");
$10=$self._valuescaleWidth();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["valuescaleWidth"]=1;
//>>excludeEnd("ctx");
$9="width".__minus_gt($10);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=4;
//>>excludeEnd("ctx");
$11="height".__minus_gt($self._chartHeight());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=5;
//>>excludeEnd("ctx");
$4=[$5,$7,$9,$11];
$3=$recv($globals.SVG)._RECT_($4);
$1=[$2,$3];
valueAxis=$recv(aSVG)._G_($1);
$recv(minorTicks)._do_((function(value){
var y;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
y=$self._yAt_(value);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["yAt:"]=1;
//>>excludeEnd("ctx");
$12=valueAxis;
$14="class".__minus_gt("Minorline");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["->"]=6;
//>>excludeEnd("ctx");
$16=$self._chartLeft();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["chartLeft"]=1;
//>>excludeEnd("ctx");
$15="x1".__minus_gt($16);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["->"]=7;
//>>excludeEnd("ctx");
$17="y1".__minus_gt(y);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["->"]=8;
//>>excludeEnd("ctx");
$19=$self._chartRight();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["chartRight"]=2;
//>>excludeEnd("ctx");
$18="x2".__minus_gt($19);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["->"]=9;
//>>excludeEnd("ctx");
$20="y2".__minus_gt(y);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["->"]=10;
//>>excludeEnd("ctx");
$13=[$14,$15,$17,$18,$20];
return $recv($12)._LINE_($13);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["LINE:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({value:value,y:y},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["do:"]=1;
//>>excludeEnd("ctx");
$recv(majorTicks)._do_((function(value){
var y;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
y=$self._yAt_(value);
$21=valueAxis;
$23="class".__minus_gt("Majorline");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["->"]=11;
//>>excludeEnd("ctx");
$24="x1".__minus_gt($self._chartLeft());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["->"]=12;
//>>excludeEnd("ctx");
$25="y1".__minus_gt(y);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["->"]=13;
//>>excludeEnd("ctx");
$27=$self._chartRight();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["chartRight"]=3;
//>>excludeEnd("ctx");
$26="x2".__minus_gt($27);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["->"]=14;
//>>excludeEnd("ctx");
$28="y2".__minus_gt(y);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["->"]=15;
//>>excludeEnd("ctx");
$22=[$23,$24,$25,$26,$28];
$recv($21)._LINE_($22);
$29=$recv(y).__gt((10));
if($core.assert($29)){
$30=valueAxis;
$32="class".__minus_gt("MajorText");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["->"]=16;
//>>excludeEnd("ctx");
$33="text-anchor".__minus_gt("end");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["->"]=17;
//>>excludeEnd("ctx");
$37=$self._chartRight();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["chartRight"]=4;
//>>excludeEnd("ctx");
$38=$self._valuescaleWidth();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["valuescaleWidth"]=2;
//>>excludeEnd("ctx");
$36=$recv($37).__plus($38);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["+"]=1;
//>>excludeEnd("ctx");
$35=$recv($36).__minus((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["-"]=1;
//>>excludeEnd("ctx");
$34="x".__minus_gt($35);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["->"]=18;
//>>excludeEnd("ctx");
$40=$recv(y).__plus((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["+"]=2;
//>>excludeEnd("ctx");
$39="y".__minus_gt($40);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["->"]=19;
//>>excludeEnd("ctx");
$41=$recv(value)._separatedThousandsString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["separatedThousandsString"]=1;
//>>excludeEnd("ctx");
$31=[$32,$33,$34,$39,$41];
return $recv($30)._TEXT_($31);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["TEXT:"]=1;
//>>excludeEnd("ctx");
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({value:value,y:y},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$42=valueAxis;
$44="class".__minus_gt("ValueText");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=20;
//>>excludeEnd("ctx");
$45="text-anchor".__minus_gt("end");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=21;
//>>excludeEnd("ctx");
$48=$recv($self._chartRight()).__plus($self._valuescaleWidth());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=3;
//>>excludeEnd("ctx");
$47=$recv($48).__minus((2));
$46="x".__minus_gt($47);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=22;
//>>excludeEnd("ctx");
$43=[$44,$45,$46,"y".__minus_gt($recv($self._chartTop()).__plus((6))),$recv($recv($self._series())._lastConfirmed())._separatedThousandsString()];
$recv($42)._TEXT_($43);
return valueAxis;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"valueAxisIn:",{aSVG:aSVG,ticks:ticks,majorTicks:majorTicks,minorTicks:minorTicks,valueAxis:valueAxis})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);

$core.addMethod(
$core.method({
selector: "valuescale",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "valuescale\x0a\x09\x22<Valuescale>\x22\x0a\x09\x0a\x09^valuescale ifNil: [\x0a\x09\x09valuescale := Valuescale from: 0 to: self maxValue]",
referencedClasses: ["Valuescale"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "from:to:", "maxValue"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$self.valuescale;
if(($receiver = $1) == null || $receiver.a$nil){
$self.valuescale=$recv($globals.Valuescale)._from_to_((0),$self._maxValue());
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
source: "xAt: aDate\x0a\x09\x22<Number>\x0a\x09y value in the svg coordinate system\x22\x0a\x09\x0a\x09^self chartLeft + ((self datescale at: aDate) * self chartWidth)",
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
source: "yAt: aDomainValue\x0a\x09\x22<Number>\x0a\x09y value in the svg coordinate system\x22\x0a\x09\x0a\x09^self chartBottom - ((self valuescale at: aDomainValue) * self chartHeight)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["-", "chartBottom", "*", "at:", "valuescale", "chartHeight"]
}, function ($methodClass){ return function (aDomainValue){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._chartBottom()).__minus($recv($recv($self._valuescale())._at_(aDomainValue)).__star($self._chartHeight()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"yAt:",{aDomainValue:aDomainValue})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart);


$core.addMethod(
$core.method({
selector: "on:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDataseries"],
source: "on: aDataseries\x0a\x09| inst |\x0a\x09inst := self new.\x0a\x09inst initializeSeries: aDataseries.\x0a\x09^inst",
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
}, function($ctx1) {$ctx1.fill(self,"on:",{aDataseries:aDataseries,inst:inst})});
//>>excludeEnd("ctx");
}; }),
$globals.Barchart.a$cls);


$core.addClass("CoViD19", $globals.Object, ["countries"], "Covid19view");
$core.addMethod(
$core.method({
selector: "addContentsTo:",
protocol: "contents",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDiv"],
source: "addContentsTo: aDiv\x0a\x09| buttons list |\x0a\x09aDiv HEADER: {\x0a\x09\x09(Silk H1: 'CoViD-19 data analysis').\x0a\x09\x09(Silk DIV: (Silk A: {\x0a\x09\x09\x09'href' -> 'https://github.com/CSSEGISandData/COVID-19'.\x0a\x09\x09\x09'target' -> '_blank'.\x0a\x09\x09\x09'rel' -> 'noopener'.\x0a\x09\x09\x09'Data on GitHub'})).\x0a\x09(Silk DIV: {'id' -> 'Buttons'.\x0a\x09\x09((Silk BUTTON: 'reset') on: #click bind: [self resetContents]).\x0a\x09\x09((Silk BUTTON: 'get data') on: #click bind: [self getData]).\x0a\x09\x09((Silk BUTTON: 'Helios') on: #click bind: [self openHelios])\x0a\x09}).\x0a\x09}.\x0a\x09aDiv DIV: 'id' -> 'CountryList'.\x0a\x09aDiv DIV: 'id' -> 'Graphics'.\x0a\x09aDiv FOOTER: 'Done in Amber Smalltalk by Christian Haider'",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["HEADER:", "H1:", "DIV:", "A:", "->", "on:bind:", "BUTTON:", "resetContents", "getData", "openHelios", "FOOTER:"]
}, function ($methodClass){ return function (aDiv){
var self=this,$self=this;
var buttons,list;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$6,$7,$8,$5,$4,$3,$11,$13,$12,$15,$14,$10,$9,$1,$16;
$2=$recv($globals.Silk)._H1_("CoViD-19 data analysis");
$6="href".__minus_gt("https://github.com/CSSEGISandData/COVID-19");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=1;
//>>excludeEnd("ctx");
$7="target".__minus_gt("_blank");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=2;
//>>excludeEnd("ctx");
$8="rel".__minus_gt("noopener");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=3;
//>>excludeEnd("ctx");
$5=[$6,$7,$8,"Data on GitHub"];
$4=$recv($globals.Silk)._A_($5);
$3=$recv($globals.Silk)._DIV_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["DIV:"]=1;
//>>excludeEnd("ctx");
$11="id".__minus_gt("Buttons");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=4;
//>>excludeEnd("ctx");
$13=$recv($globals.Silk)._BUTTON_("reset");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["BUTTON:"]=1;
//>>excludeEnd("ctx");
$12=$recv($13)._on_bind_("click",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._resetContents();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:bind:"]=1;
//>>excludeEnd("ctx");
$15=$recv($globals.Silk)._BUTTON_("get data");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["BUTTON:"]=2;
//>>excludeEnd("ctx");
$14=$recv($15)._on_bind_("click",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._getData();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:bind:"]=2;
//>>excludeEnd("ctx");
$10=[$11,$12,$14,$recv($recv($globals.Silk)._BUTTON_("Helios"))._on_bind_("click",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._openHelios();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}))];
$9=$recv($globals.Silk)._DIV_($10);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["DIV:"]=2;
//>>excludeEnd("ctx");
$1=[$2,$3,$9];
$recv(aDiv)._HEADER_($1);
$16="id".__minus_gt("CountryList");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=5;
//>>excludeEnd("ctx");
$recv(aDiv)._DIV_($16);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["DIV:"]=3;
//>>excludeEnd("ctx");
$recv(aDiv)._DIV_("id".__minus_gt("Graphics"));
$recv(aDiv)._FOOTER_("Done in Amber Smalltalk by Christian Haider");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addContentsTo:",{aDiv:aDiv,buttons:buttons,list:list})});
//>>excludeEnd("ctx");
}; }),
$globals.CoViD19);

$core.addMethod(
$core.method({
selector: "augmentPage",
protocol: "starting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "augmentPage\x0a\x09Silk new \x0a\x09\x09reset;\x0a\x09\x09DIV: self newContents.\x0a\x09self getData",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["reset", "new", "DIV:", "newContents", "getData"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.Silk)._new();
$recv($1)._reset();
$recv($1)._DIV_($self._newContents());
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
source: "countries\x0a\x09^countries ifNil: [self getData]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "getData"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$self.countries;
if(($receiver = $1) == null || $receiver.a$nil){
return $self._getData();
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
selector: "getData",
protocol: "action",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "getData\x0a\x09self withSeriesDo: [:someSeries | \x0a\x09\x09countries := Country allFromSeries: someSeries.\x0a\x09\x09self showCountries]",
referencedClasses: ["Country"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["withSeriesDo:", "allFromSeries:", "showCountries"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._withSeriesDo_((function(someSeries){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$self.countries=$recv($globals.Country)._allFromSeries_(someSeries);
return $self._showCountries();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({someSeries:someSeries},$ctx1,1)});
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
selector: "newContents",
protocol: "starting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newContents\x0a\x09\x22<DIV>\x22\x0a\x09\x0a\x09| contents |\x0a\x09contents := Silk DIV: {'id' -> 'Contents'}.\x0a\x09self addContentsTo: contents.\x0a\x09^contents",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["DIV:", "->", "addContentsTo:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var contents;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
contents=$recv($globals.Silk)._DIV_(["id".__minus_gt("Contents")]);
$self._addContentsTo_(contents);
return contents;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newContents",{contents:contents})});
//>>excludeEnd("ctx");
}; }),
$globals.CoViD19);

$core.addMethod(
$core.method({
selector: "openHelios",
protocol: "action",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "openHelios\x0a\x09<inlineJS: 'require(''amber/helpers'').popupHelios()'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["require('amber/helpers').popupHelios()"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
require('amber/helpers').popupHelios();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"openHelios",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CoViD19);

$core.addMethod(
$core.method({
selector: "resetContents",
protocol: "starting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "resetContents\x0a\x09| contents |\x0a\x09contents := '#Contents' asSilk.\x0a\x09contents resetContents.\x0a\x09self addContentsTo: contents.\x0a\x09self showCountries",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["asSilk", "resetContents", "addContentsTo:", "showCountries"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var contents;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
contents="#Contents"._asSilk();
$recv(contents)._resetContents();
$self._addContentsTo_(contents);
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
source: "showCountries\x0a\x09| list |\x0a\x09list := '#CountryList' asSilk.\x0a\x09list resetContents.\x0a\x09self countries do: [:country | country addToList: list]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["asSilk", "resetContents", "do:", "countries", "addToList:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var list;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
list="#CountryList"._asSilk();
$recv(list)._resetContents();
$recv($self._countries())._do_((function(country){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(country)._addToList_(list);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({country:country},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"showCountries",{list:list})});
//>>excludeEnd("ctx");
}; }),
$globals.CoViD19);

$core.addMethod(
$core.method({
selector: "withSeriesDo:",
protocol: "action",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aOneArgumentBlock"],
source: "withSeriesDo: aOneArgumentBlock\x0a\x09(Platform fetch: 'CoViD-19.json')\x0a\x09\x09then: [:response |\x0a\x09\x09\x09response json\x0a\x09\x09\x09\x09then: [:json | aOneArgumentBlock value: (json collect: [:data | Series fromJson: data])]\x0a\x09\x09\x09\x09catch: [:ex |\x0a\x09\x09\x09\x09\x09(ErrorHandler current respondsTo: #debugError:) \x0a\x09\x09\x09\x09\x09\x09ifTrue: [ErrorHandler current debugError: ex] \x0a\x09\x09\x09\x09\x09\x09ifFalse:[ErrorHandler handleError: ex]]]\x0a\x09\x09catch: [:ex | \x0a\x09\x09\x09(ErrorHandler current respondsTo: #debugError:) \x0a\x09\x09\x09\x09ifTrue: [ErrorHandler current debugError: ex] \x0a\x09\x09\x09\x09ifFalse:[ErrorHandler handleError: ex]]",
referencedClasses: ["Platform", "Series", "ErrorHandler"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["then:catch:", "fetch:", "json", "value:", "collect:", "fromJson:", "ifTrue:ifFalse:", "respondsTo:", "current", "debugError:", "handleError:"]
}, function ($methodClass){ return function (aOneArgumentBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$3,$5,$4;
$recv($recv($globals.Platform)._fetch_("CoViD-19.json"))._then_catch_((function(response){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(response)._json())._then_catch_((function(json){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(aOneArgumentBlock)._value_($recv(json)._collect_((function(data){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv($globals.Series)._fromJson_(data);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({data:data},$ctx3,3)});
//>>excludeEnd("ctx");
})));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({json:json},$ctx2,2)});
//>>excludeEnd("ctx");
}),(function(ex){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$2=$recv($globals.ErrorHandler)._current();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["current"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._respondsTo_("debugError:");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["respondsTo:"]=1;
//>>excludeEnd("ctx");
if($core.assert($1)){
$3=$recv($globals.ErrorHandler)._current();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["current"]=2;
//>>excludeEnd("ctx");
return $recv($3)._debugError_(ex);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["debugError:"]=1;
//>>excludeEnd("ctx");
} else {
return $recv($globals.ErrorHandler)._handleError_(ex);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["handleError:"]=1;
//>>excludeEnd("ctx");
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({ex:ex},$ctx2,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({response:response},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(ex){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$5=$recv($globals.ErrorHandler)._current();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["current"]=3;
//>>excludeEnd("ctx");
$4=$recv($5)._respondsTo_("debugError:");
if($core.assert($4)){
return $recv($recv($globals.ErrorHandler)._current())._debugError_(ex);
} else {
return $recv($globals.ErrorHandler)._handleError_(ex);
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1,7)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["then:catch:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"withSeriesDo:",{aOneArgumentBlock:aOneArgumentBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.CoViD19);


$core.addMethod(
$core.method({
selector: "start",
protocol: "starting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a  self new augmentPage",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["augmentPage", "new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._new())._augmentPage();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CoViD19.a$cls);


$core.addClass("Datapoint", $globals.Object, ["date", "confirmed", "deaths", "recovered"], "Covid19view");
$core.addMethod(
$core.method({
selector: "+",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDatapoint"],
source: "+ aDatapoint\x0a\x09\x22<Datapoint>\x22\x0a\x09\x0a\x09self date = aDatapoint date ifFalse: [\x0a\x09\x09self error: 'the dates are not the same'].\x0a\x09^self class \x0a\x09\x09date: self date \x0a\x09\x09confirmed: self confirmed + aDatapoint confirmed \x0a\x09\x09deaths: self deaths + aDatapoint deaths \x0a\x09\x09recovered: self recovered + aDatapoint recovered",
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
$globals.Datapoint);

$core.addMethod(
$core.method({
selector: "asSpans",
protocol: "html",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asSpans\x0a\x09\x22<Array of: <span>\x22\x0a\x09\x0a\x09^{Silk SPAN: {'class' -> 'Confirmed'. self confirmed}. \x0a\x09Silk SPAN: {'class' -> 'Deaths'. self deaths}. \x0a\x09Silk SPAN: {'class' -> 'Recovered'. self recovered}}",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["SPAN:", "->", "confirmed", "deaths", "recovered"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1,$6,$5,$4;
$3="class".__minus_gt("Confirmed");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=1;
//>>excludeEnd("ctx");
$2=[$3,$self._confirmed()];
$1=$recv($globals.Silk)._SPAN_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["SPAN:"]=1;
//>>excludeEnd("ctx");
$6="class".__minus_gt("Deaths");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=2;
//>>excludeEnd("ctx");
$5=[$6,$self._deaths()];
$4=$recv($globals.Silk)._SPAN_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["SPAN:"]=2;
//>>excludeEnd("ctx");
return [$1,$4,$recv($globals.Silk)._SPAN_(["class".__minus_gt("Recovered"),$self._recovered()])];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asSpans",{})});
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
selector: "differenceTo:",
protocol: "calculating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDatapoint"],
source: "differenceTo: aDatapoint\x0a\x09^self class \x0a\x09\x09date: self date\x0a\x09\x09confirmed: self confirmed - aDatapoint confirmed\x0a\x09\x09deaths: self deaths - aDatapoint deaths\x0a\x09\x09recovered: self recovered - aDatapoint recovered",
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
}, function($ctx1) {$ctx1.fill(self,"differenceTo:",{aDatapoint:aDatapoint})});
//>>excludeEnd("ctx");
}; }),
$globals.Datapoint);

$core.addMethod(
$core.method({
selector: "initializeDate:confirmed:deaths:recovered:",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDate", "aConfirmedInteger", "aDeathsInteger", "aRecoveredInteger"],
source: "initializeDate: aDate confirmed: aConfirmedInteger deaths: aDeathsInteger recovered: aRecoveredInteger\x0a\x09date := aDate.\x0a\x09confirmed := aConfirmedInteger.\x0a\x09deaths := aDeathsInteger.\x0a\x09recovered := aRecoveredInteger",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aDate,aConfirmedInteger,aDeathsInteger,aRecoveredInteger){
var self=this,$self=this;
$self.date=aDate;
$self.confirmed=aConfirmedInteger;
$self.deaths=aDeathsInteger;
$self.recovered=aRecoveredInteger;
return self;

}; }),
$globals.Datapoint);

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
$globals.Datapoint);


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
$globals.Datapoint.a$cls);

$core.addMethod(
$core.method({
selector: "dateFromJson:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJson"],
source: "dateFromJson: aJson\x0a\x09| days year mst month |\x0a\x09days := aJson day.\x0a\x09year := aJson year.\x0a\x09mst := #(31 29 31 30 31 30 31 31 30 31 30 31) readStream.\x0a\x09month  := 0.\x0a\x09[(days - mst peek) negative] whileFalse: [\x0a\x09\x09month := month + 1.\x0a\x09\x09days := days - mst next].\x0a\x09^self dateYear: year month: month day: days",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["day", "year", "readStream", "whileFalse:", "negative", "-", "peek", "+", "next", "dateYear:month:day:"]
}, function ($methodClass){ return function (aJson){
var self=this,$self=this;
var days,year,mst,month;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
days=$recv(aJson)._day();
year=$recv(aJson)._year();
mst=[(31), (29), (31), (30), (31), (30), (31), (31), (30), (31), (30), (31)]._readStream();
month=(0);
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(days).__minus($recv(mst)._peek());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["-"]=1;
//>>excludeEnd("ctx");
return $recv($1)._negative();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._whileFalse_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
month=$recv(month).__plus((1));
days=$recv(days).__minus($recv(mst)._next());
return days;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return $self._dateYear_month_day_(year,month,days);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dateFromJson:",{aJson:aJson,days:days,year:year,mst:mst,month:month})});
//>>excludeEnd("ctx");
}; }),
$globals.Datapoint.a$cls);

$core.addMethod(
$core.method({
selector: "dateYear:month:day:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aYearInteger", "aMonthInteger", "aDayInteger"],
source: "dateYear: aYearInteger month: aMonthInteger day: aDayInteger\x0a\x09<inlineJS: 'return new Date(aYearInteger, aMonthInteger, aDayInteger)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return new Date(aYearInteger, aMonthInteger, aDayInteger)"]]],
messageSends: []
}, function ($methodClass){ return function (aYearInteger,aMonthInteger,aDayInteger){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return new Date(aYearInteger, aMonthInteger, aDayInteger);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dateYear:month:day:",{aYearInteger:aYearInteger,aMonthInteger:aMonthInteger,aDayInteger:aDayInteger})});
//>>excludeEnd("ctx");
}; }),
$globals.Datapoint.a$cls);

$core.addMethod(
$core.method({
selector: "fromJson:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJson"],
source: "fromJson: aJson\x0a\x09^self \x0a\x09\x09date: (self dateFromJson: aJson date)\x0a\x09\x09confirmed: aJson confirmed \x0a\x09\x09deaths: aJson deaths \x0a\x09\x09recovered: aJson recovered",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["date:confirmed:deaths:recovered:", "dateFromJson:", "date", "confirmed", "deaths", "recovered"]
}, function ($methodClass){ return function (aJson){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._date_confirmed_deaths_recovered_($self._dateFromJson_($recv(aJson)._date()),$recv(aJson)._confirmed(),$recv(aJson)._deaths(),$recv(aJson)._recovered());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromJson:",{aJson:aJson})});
//>>excludeEnd("ctx");
}; }),
$globals.Datapoint.a$cls);


$core.addClass("Dataseries", $globals.Object, ["series"], "Covid19view");
$core.addMethod(
$core.method({
selector: "+",
protocol: "arithmetic",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDataseries"],
source: "+ aDataseries\x0a\x09\x22<Dataseries>\x22\x0a\x09\x0a\x09| newDatapoints |\x0a\x09newDatapoints := OrderedCollection new.\x0a\x09self series with: aDataseries series do: [:myDatapoint :otherDatapoint |\x0a\x09\x09newDatapoints add: myDatapoint + otherDatapoint].\x0a\x09^self class series: newDatapoints",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "with:do:", "series", "add:", "+", "series:", "class"]
}, function ($methodClass){ return function (aDataseries){
var self=this,$self=this;
var newDatapoints;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
newDatapoints=$recv($globals.OrderedCollection)._new();
$1=$self._series();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["series"]=1;
//>>excludeEnd("ctx");
$recv($1)._with_do_($recv(aDataseries)._series(),(function(myDatapoint,otherDatapoint){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(newDatapoints)._add_($recv(myDatapoint).__plus(otherDatapoint));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({myDatapoint:myDatapoint,otherDatapoint:otherDatapoint},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $recv($self._class())._series_(newDatapoints);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"+",{aDataseries:aDataseries,newDatapoints:newDatapoints})});
//>>excludeEnd("ctx");
}; }),
$globals.Dataseries);

$core.addMethod(
$core.method({
selector: "changes",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "changes\x0a\x09\x22<Dataseries>\x22\x0a\x09\x0a\x09| wst rst last |\x0a\x09wst := OrderedCollection new writeStream.\x0a\x09rst := self series readStream.\x0a\x09last := nil.\x0a\x09[rst atEnd] whileFalse: [\x0a\x09\x09| datapoint | \x0a\x09\x09datapoint := rst next.\x0a\x09\x09last ifNotNil: [\x0a\x09\x09\x09wst nextPut: (datapoint differenceTo: last)].\x0a\x09\x09last := datapoint].\x0a\x09^self class series: wst contents",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["writeStream", "new", "readStream", "series", "whileFalse:", "atEnd", "next", "ifNotNil:", "nextPut:", "differenceTo:", "series:", "class", "contents"]
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
$recv(wst)._nextPut_($recv(datapoint)._differenceTo_(last));
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
selector: "fromJson:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["someJson"],
source: "fromJson: someJson\x0a\x09^self series: (someJson collect: [:json |\x0a\x09\x09\x09Datapoint fromJson: json])",
referencedClasses: ["Datapoint"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["series:", "collect:", "fromJson:"]
}, function ($methodClass){ return function (someJson){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._series_($recv(someJson)._collect_((function(json){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($globals.Datapoint)._fromJson_(json);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({json:json},$ctx1,1)});
//>>excludeEnd("ctx");
})));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromJson:",{someJson:someJson})});
//>>excludeEnd("ctx");
}; }),
$globals.Dataseries.a$cls);

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


$core.addClass("GeographicArea", $globals.Object, ["name", "series"], "Covid19view");
$core.addMethod(
$core.method({
selector: "addToList:",
protocol: "html",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anElement"],
source: "addToList: anElement\x0a\x09\x22add html elements to anElement\x22\x0a\x09\x0a\x09anElement << {self emptySpan. self asNameSpan. self asValueSpan}",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["<<", "emptySpan", "asNameSpan", "asValueSpan"]
}, function ($methodClass){ return function (anElement){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(anElement).__lt_lt([$self._emptySpan(),$self._asNameSpan(),$self._asValueSpan()]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addToList:",{anElement:anElement})});
//>>excludeEnd("ctx");
}; }),
$globals.GeographicArea);

$core.addMethod(
$core.method({
selector: "asNameSpan",
protocol: "html",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asNameSpan\x0a\x09\x22<span>\x0a\x09the name of the list item\x22\x0a\x09\x0a\x09| item |\x0a\x09item := Silk SPAN: {\x0a\x09\x09'class' -> 'ListItem'. \x0a\x09\x09(Silk SPAN: {'class' -> 'StateName'. self name})}.\x0a\x09item on: #click bind: [:event |\x0a\x09\x09('#CountryList' asSilk allAt: '.selected') do: [:selected |\x0a\x09\x09\x09console log: selected.\x0a\x09\x09\x09selected attrAt: 'class' put: 'ListItem'].\x0a\x09\x09item attrAt: 'class' put: 'ListItem selected'. \x0a\x09\x09self showInfo].\x0a\x09^item",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["SPAN:", "->", "name", "on:bind:", "do:", "allAt:", "asSilk", "log:", "attrAt:put:", "showInfo"]
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
$recv(console)._log_(selected);
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
selector: "initializeName:series:",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aDataseries"],
source: "initializeName: aString series: aDataseries\x0a\x09name := aString.\x0a\x09series := aDataseries",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aString,aDataseries){
var self=this,$self=this;
$self.name=aString;
$self.series=aDataseries;
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
selector: "showInfo",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "showInfo\x0a\x09\x22add nice info graphics\x22\x0a\x09\x0a\x09| graphics |\x0a\x09graphics := '#Graphics' asSilk.\x0a\x09graphics resetContents.\x0a\x09graphics H2: self name.\x0a\x09graphics DIV: {\x0a\x09\x09Silk H3: 'Absolute'.\x0a\x09\x09(Barchart on: self series) svg}.\x0a\x09graphics DIV: {\x0a\x09\x09Silk H3: 'Differences'.\x0a\x09\x09(Barchart on: self changes) svg}",
referencedClasses: ["Silk", "Barchart"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["asSilk", "resetContents", "H2:", "name", "DIV:", "H3:", "svg", "on:", "series", "changes"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var graphics;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$5,$4,$2;
graphics="#Graphics"._asSilk();
$recv(graphics)._resetContents();
$recv(graphics)._H2_($self._name());
$1=graphics;
$3=$recv($globals.Silk)._H3_("Absolute");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["H3:"]=1;
//>>excludeEnd("ctx");
$5=$recv($globals.Barchart)._on_($self._series());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:"]=1;
//>>excludeEnd("ctx");
$4=$recv($5)._svg();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["svg"]=1;
//>>excludeEnd("ctx");
$2=[$3,$4];
$recv($1)._DIV_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["DIV:"]=1;
//>>excludeEnd("ctx");
$recv(graphics)._DIV_([$recv($globals.Silk)._H3_("Differences"),$recv($recv($globals.Barchart)._on_($self._changes()))._svg()]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"showInfo",{graphics:graphics})});
//>>excludeEnd("ctx");
}; }),
$globals.GeographicArea);


$core.addMethod(
$core.method({
selector: "allFromSeries:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["someSeries"],
source: "allFromSeries: someSeries\x0a\x09\x22<Array of: GeographicArea>\x22\x0a\x09\x0a\x09^self subclassResponsability",
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
}, function($ctx1) {$ctx1.fill(self,"allFromSeries:",{someSeries:someSeries})});
//>>excludeEnd("ctx");
}; }),
$globals.GeographicArea.a$cls);

$core.addMethod(
$core.method({
selector: "name:series:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aDataseries"],
source: "name: aString series: aDataseries\x0a\x09| inst |\x0a\x09inst := self new.\x0a\x09inst initializeName: aString series: aDataseries.\x0a\x09^inst",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "initializeName:series:"]
}, function ($methodClass){ return function (aString,aDataseries){
var self=this,$self=this;
var inst;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
inst=$self._new();
$recv(inst)._initializeName_series_(aString,aDataseries);
return inst;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"name:series:",{aString:aString,aDataseries:aDataseries,inst:inst})});
//>>excludeEnd("ctx");
}; }),
$globals.GeographicArea.a$cls);


$core.addClass("Country", $globals.GeographicArea, ["parts"], "Covid19view");
$core.addMethod(
$core.method({
selector: "addToList:",
protocol: "html",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anElement"],
source: "addToList: anElement\x0a\x09\x22add html elements to anElement\x22\x0a\x09\x0a\x09| plusButton minusButton plusAction minusAction |\x0a\x09self parts ifEmpty: [\x0a\x09\x09anElement << {self emptySpan. self asNameSpan. self asValueSpan}.\x0a\x09\x09^self].\x0a\x09plusButton := Silk BUTTON: {'class' -> 'treeButton'. 'type' -> 'button'. '+'}.\x0a\x09minusButton := Silk BUTTON: {'class' -> 'treeButton'. 'type' -> 'button'. '-'}.\x0a\x09plusAction := [:event |\x0a\x09\x09| element after next2 insert |\x0a\x09\x09element := Silk fromElement: event target.\x0a\x09\x09element resetContents.\x0a\x09\x09element off: #click unbind: plusAction.\x0a\x09\x09element << '-'.\x0a\x09\x09element on: #click bind: minusAction.\x0a\x09\x09after := element setToAfter.\x0a\x09\x09after next.\x0a\x09\x09next2 := after next.\x0a\x09\x09insert := next2 setToAfter.\x0a\x09\x09self parts do: [:part | part addToList: insert]].\x0a\x09minusAction := [:event |\x0a\x09\x09| element after next2 insert last |\x0a\x09\x09element := Silk fromElement: event target.\x0a\x09\x09element resetContents.\x0a\x09\x09element off: #click unbind: minusAction.\x0a\x09\x09element << '+'.\x0a\x09\x09element on: #click bind: plusAction.\x0a\x09\x09after := element setToAfter.\x0a\x09\x09after next.\x0a\x09\x09next2 := after next.\x0a\x09\x09insert := next2 setToAfter.\x0a\x09\x09self parts size * 3 timesRepeat: [last := after next].\x0a\x09\x09insert cutUpTo: last setToAfter].\x0a\x09plusButton on: #click bind: plusAction.\x0a\x09minusButton on: #click bind: minusAction.\x0a\x09anElement << {plusButton. self asNameSpan. self asValueSpan}.",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifEmpty:", "parts", "<<", "emptySpan", "asNameSpan", "asValueSpan", "BUTTON:", "->", "fromElement:", "target", "resetContents", "off:unbind:", "on:bind:", "setToAfter", "next", "do:", "addToList:", "timesRepeat:", "*", "size", "cutUpTo:"]
}, function ($methodClass){ return function (anElement){
var self=this,$self=this;
var plusButton,minusButton,plusAction,minusAction;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$4,$5,$2,$7,$8,$6,$10,$9,$11,$12;
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
$4=$self._asNameSpan();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asNameSpan"]=1;
//>>excludeEnd("ctx");
$5=$self._asValueSpan();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asValueSpan"]=1;
//>>excludeEnd("ctx");
$2=[$3,$4,$5];
$recv(anElement).__lt_lt($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["<<"]=1;
//>>excludeEnd("ctx");
throw $early=[self];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$7="class".__minus_gt("treeButton");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=1;
//>>excludeEnd("ctx");
$8="type".__minus_gt("button");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=2;
//>>excludeEnd("ctx");
$6=[$7,$8,"+"];
plusButton=$recv($globals.Silk)._BUTTON_($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["BUTTON:"]=1;
//>>excludeEnd("ctx");
$10="class".__minus_gt("treeButton");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=3;
//>>excludeEnd("ctx");
$9=[$10,"type".__minus_gt("button"),"-"];
minusButton=$recv($globals.Silk)._BUTTON_($9);
plusAction=(function(event){
var element,after,next2,insert;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$11=$recv(event)._target();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["target"]=1;
//>>excludeEnd("ctx");
element=$recv($globals.Silk)._fromElement_($11);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["fromElement:"]=1;
//>>excludeEnd("ctx");
$recv(element)._resetContents();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["resetContents"]=1;
//>>excludeEnd("ctx");
$recv(element)._off_unbind_("click",plusAction);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["off:unbind:"]=1;
//>>excludeEnd("ctx");
$recv(element).__lt_lt("-");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["<<"]=2;
//>>excludeEnd("ctx");
$recv(element)._on_bind_("click",minusAction);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["on:bind:"]=1;
//>>excludeEnd("ctx");
after=$recv(element)._setToAfter();
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
$12=$self._parts();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["parts"]=2;
//>>excludeEnd("ctx");
return $recv($12)._do_((function(part){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(part)._addToList_(insert);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({part:part},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({event:event,element:element,after:after,next2:next2,insert:insert},$ctx1,2)});
//>>excludeEnd("ctx");
});
minusAction=(function(event){
var element,after,next2,insert,last;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
element=$recv($globals.Silk)._fromElement_($recv(event)._target());
$recv(element)._resetContents();
$recv(element)._off_unbind_("click",minusAction);
$recv(element).__lt_lt("+");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["<<"]=3;
//>>excludeEnd("ctx");
$recv(element)._on_bind_("click",plusAction);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["on:bind:"]=2;
//>>excludeEnd("ctx");
after=$recv(element)._setToAfter();
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
$recv($recv($recv($self._parts())._size()).__star((3)))._timesRepeat_((function(){
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
}, function($ctx2) {$ctx2.fillBlock({event:event,element:element,after:after,next2:next2,insert:insert,last:last},$ctx1,4)});
//>>excludeEnd("ctx");
});
$recv(plusButton)._on_bind_("click",plusAction);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:bind:"]=3;
//>>excludeEnd("ctx");
$recv(minusButton)._on_bind_("click",minusAction);
$recv(anElement).__lt_lt([plusButton,$self._asNameSpan(),$self._asValueSpan()]);
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
source: "asNameSpan\x0a\x09\x22<span>\x0a\x09the name of the list item\x22\x0a\x09\x0a\x09| item |\x0a\x09item := Silk SPAN: {\x0a\x09\x09'class' -> 'ListItem'. \x0a\x09\x09(Silk SPAN: {'class' -> 'CountryName'. self name})}.\x0a\x09item on: #click bind: [:event |\x0a\x09\x09('#CountryList' asSilk allAt: '.selected') do: [:selected |\x0a\x09\x09\x09console log: selected.\x0a\x09\x09\x09selected attrAt: 'class' put: 'ListItem'].\x0a\x09\x09item attrAt: 'class' put: 'ListItem selected'. \x0a\x09\x09self showInfo].\x0a\x09^item",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["SPAN:", "->", "name", "on:bind:", "do:", "allAt:", "asSilk", "log:", "attrAt:put:", "showInfo"]
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
$1=[$2,$recv($globals.Silk)._SPAN_(["class".__minus_gt("CountryName"),$self._name()])];
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
$recv(console)._log_(selected);
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
$globals.Country);

$core.addMethod(
$core.method({
selector: "initializeName:parts:",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "someParts"],
source: "initializeName: aString parts: someParts\x0a\x09name := aString.\x0a\x09parts := someParts",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aString,someParts){
var self=this,$self=this;
$self.name=aString;
$self.parts=someParts;
return self;

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
selector: "allFromSeries:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["someSeries"],
source: "allFromSeries: someSeries\x0a\x09\x22<Array of: Country>\x22\x0a\x09\x0a\x09| byCountry countryList sortblock |\x0a\x09byCountry := Dictionary new.\x0a\x09someSeries do: [:series |\x0a\x09\x09(byCountry at: series country ifAbsentPut: [OrderedCollection new]) add: series].\x0a\x09countryList := OrderedCollection new.\x0a\x09sortblock := [:a :b | a lastConfirmed > b lastConfirmed].\x0a\x09byCountry keysAndValuesDo: [:countryName :listOfSeries |\x0a\x09\x09countryList add: (listOfSeries size = 1\x0a\x09\x09\x09ifTrue: [self name: countryName series: listOfSeries first series]\x0a\x09\x09\x09ifFalse: [self name: countryName parts: (State allFromSeries: (listOfSeries sorted: sortblock))])].\x0a\x09^countryList sorted: sortblock",
referencedClasses: ["Dictionary", "OrderedCollection", "State"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "do:", "add:", "at:ifAbsentPut:", "country", ">", "lastConfirmed", "keysAndValuesDo:", "ifTrue:ifFalse:", "=", "size", "name:series:", "series", "first", "name:parts:", "allFromSeries:", "sorted:"]
}, function ($methodClass){ return function (someSeries){
var self=this,$self=this;
var byCountry,countryList,sortblock;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$4,$6,$5,$3;
byCountry=$recv($globals.Dictionary)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv(someSeries)._do_((function(series){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(byCountry)._at_ifAbsentPut_($recv(series)._country(),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($globals.OrderedCollection)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["new"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
})))._add_(series);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({series:series},$ctx1,1)});
//>>excludeEnd("ctx");
}));
countryList=$recv($globals.OrderedCollection)._new();
sortblock=(function(a,b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(a)._lastConfirmed();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["lastConfirmed"]=1;
//>>excludeEnd("ctx");
return $recv($1).__gt($recv(b)._lastConfirmed());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,3)});
//>>excludeEnd("ctx");
});
$recv(byCountry)._keysAndValuesDo_((function(countryName,listOfSeries){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=countryList;
$4=$recv($recv(listOfSeries)._size()).__eq((1));
if($core.assert($4)){
$3=$self._name_series_(countryName,$recv($recv(listOfSeries)._first())._series());
} else {
$6=$recv(listOfSeries)._sorted_(sortblock);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["sorted:"]=1;
//>>excludeEnd("ctx");
$5=$recv($globals.State)._allFromSeries_($6);
$3=$self._name_parts_(countryName,$5);
}
return $recv($2)._add_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({countryName:countryName,listOfSeries:listOfSeries},$ctx1,4)});
//>>excludeEnd("ctx");
}));
return $recv(countryList)._sorted_(sortblock);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"allFromSeries:",{someSeries:someSeries,byCountry:byCountry,countryList:countryList,sortblock:sortblock})});
//>>excludeEnd("ctx");
}; }),
$globals.Country.a$cls);

$core.addMethod(
$core.method({
selector: "name:parts:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "someSeries"],
source: "name: aString parts: someSeries\x0a\x09| inst |\x0a\x09inst := self new.\x0a\x09inst initializeName: aString parts: someSeries.\x0a\x09^inst",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "initializeName:parts:"]
}, function ($methodClass){ return function (aString,someSeries){
var self=this,$self=this;
var inst;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
inst=$self._new();
$recv(inst)._initializeName_parts_(aString,someSeries);
return inst;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"name:parts:",{aString:aString,someSeries:someSeries,inst:inst})});
//>>excludeEnd("ctx");
}; }),
$globals.Country.a$cls);


$core.addClass("State", $globals.GeographicArea, [], "Covid19view");

$core.addMethod(
$core.method({
selector: "allFromSeries:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["someSeries"],
source: "allFromSeries: someSeries\x0a\x09\x22<Array of: State>\x22\x0a\x09\x0a\x09^someSeries collect: [:rawSeries |\x0a\x09\x09self \x0a\x09\x09\x09name: rawSeries state\x0a\x09\x09\x09series: rawSeries series]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["collect:", "name:series:", "state", "series"]
}, function ($methodClass){ return function (someSeries){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(someSeries)._collect_((function(rawSeries){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._name_series_($recv(rawSeries)._state(),$recv(rawSeries)._series());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({rawSeries:rawSeries},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"allFromSeries:",{someSeries:someSeries})});
//>>excludeEnd("ctx");
}; }),
$globals.State.a$cls);


$core.addClass("SVG", $globals.Silk, [], "Covid19view");

$core.addMethod(
$core.method({
selector: "namespace",
protocol: "as yet unclassified",
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
source: "at: aDomainValue\x0a\x09\x22<Number>\x0a\x09fraction on the scale\x22\x0a\x09\x0a\x09^aDomainValue - self from / self range",
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


$core.addClass("Datescale", $globals.Scale, [], "Covid19view");


$core.addClass("Valuescale", $globals.Scale, ["logarithmic"], "Covid19view");
$core.addMethod(
$core.method({
selector: "at:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDomainValue"],
source: "at: aDomainValue\x0a\x09self logarithmic ifFalse: [\x0a\x09\x09^aDomainValue - self from / self range].\x0a\x09^aDomainValue - self from / self range",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifFalse:", "logarithmic", "/", "-", "from", "range"]
}, function ($methodClass){ return function (aDomainValue){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$4,$3,$5,$2;
$1=$self._logarithmic();
if(!$core.assert($1)){
$4=$self._from();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["from"]=1;
//>>excludeEnd("ctx");
$3=$recv(aDomainValue).__minus($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=1;
//>>excludeEnd("ctx");
$5=$self._range();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["range"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__slash($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["/"]=1;
//>>excludeEnd("ctx");
return $2;
}
return $recv($recv(aDomainValue).__minus($self._from())).__slash($self._range());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:",{aDomainValue:aDomainValue})});
//>>excludeEnd("ctx");
}; }),
$globals.Valuescale);

$core.addMethod(
$core.method({
selector: "beLinear",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "beLinear\x0a\x09logarithmic := false",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
$self.logarithmic=false;
return self;

}; }),
$globals.Valuescale);

$core.addMethod(
$core.method({
selector: "beLogarithmic",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "beLogarithmic\x0a\x09logarithmic := true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
$self.logarithmic=true;
return self;

}; }),
$globals.Valuescale);

$core.addMethod(
$core.method({
selector: "logarithmic",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "logarithmic\x0a\x09\x22<Boolean>\x22\x0a\x09\x0a\x09^logarithmic ifNil: [true]",
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
$1=$self.logarithmic;
if(($receiver = $1) == null || $receiver.a$nil){
return true;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"logarithmic",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Valuescale);

$core.addMethod(
$core.method({
selector: "normTicks",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "normTicks\x0a\x09\x22<Array[2] of: (Array of: Number)>\x22\x0a\x09\x0a\x09| f normed ticks |\x0a\x09f := self tickFactor.\x0a\x09normed := self normedTo.\x0a\x09ticks := 1 to: normed floor.\x0a\x09ticks size >= 8 ifTrue: [\x0a\x09\x09^#(#(2 4 6 8) #())].\x0a\x09ticks size >= 6 ifTrue: [\x0a\x09\x09^#(#(2 4 6) #())].\x0a\x09ticks size >= 4 ifTrue: [\x0a\x09\x09^#(#(2 4) #())].\x0a\x09ticks size = 1 ifTrue: [\x0a\x09\x09normed >= 1.5 ifTrue: [\x0a\x09\x09\x09^#(#(1) #(0.5 1.5))].\x0a\x09\x09^#(#(1) #(0.5))].\x0a\x09^Array with: ticks with: #()",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["tickFactor", "normedTo", "to:", "floor", "ifTrue:", ">=", "size", "=", "with:with:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var f,normed,ticks;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$4,$3,$6,$5,$7,$8;
f=$self._tickFactor();
normed=$self._normedTo();
ticks=(1)._to_($recv(normed)._floor());
$2=$recv(ticks)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__gt_eq((8));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">="]=1;
//>>excludeEnd("ctx");
if($core.assert($1)){
return [[(2), (4), (6), (8)], []];
}
$4=$recv(ticks)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=2;
//>>excludeEnd("ctx");
$3=$recv($4).__gt_eq((6));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">="]=2;
//>>excludeEnd("ctx");
if($core.assert($3)){
return [[(2), (4), (6)], []];
}
$6=$recv(ticks)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=3;
//>>excludeEnd("ctx");
$5=$recv($6).__gt_eq((4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">="]=3;
//>>excludeEnd("ctx");
if($core.assert($5)){
return [[(2), (4)], []];
}
$7=$recv($recv(ticks)._size()).__eq((1));
if($core.assert($7)){
$8=$recv(normed).__gt_eq((1.5));
if($core.assert($8)){
return [[(1)], [(0.5), (1.5)]];
}
return [[(1)], [(0.5)]];
}
return $recv($globals.Array)._with_with_(ticks,[]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"normTicks",{f:f,normed:normed,ticks:ticks})});
//>>excludeEnd("ctx");
}; }),
$globals.Valuescale);

$core.addMethod(
$core.method({
selector: "normedTo",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "normedTo\x0a\x09\x22<Number [1..9.x]>\x0a\x09the highest value as number between 1 and less than 10; i.e. a one digit number (can have decimals)\x22\x0a\x09\x0a\x09^self to / self tickFactor",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["/", "to", "tickFactor"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._to()).__slash($self._tickFactor());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"normedTo",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Valuescale);

$core.addMethod(
$core.method({
selector: "tickFactor",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tickFactor\x0a\x09\x22<Number>\x22\x0a\x09\x0a\x09^10 raisedTo: (self to log: 10) floor",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["raisedTo:", "floor", "log:", "to"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return (10)._raisedTo_($recv($recv($self._to())._log_((10)))._floor());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tickFactor",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Valuescale);

$core.addMethod(
$core.method({
selector: "ticks",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "ticks\x0a\x09\x22<Array[2] of: (Array of: Number)>\x22\x0a\x09\x0a\x09| f |\x0a\x09f := self tickFactor.\x0a\x09^self normTicks collect: [:ticks |\x0a\x09\x09ticks collect: [:n | n * f]]",
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
$globals.Valuescale);



$core.addClass("Series", $globals.Object, ["country", "state", "latLong", "series"], "Covid19view");
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
$globals.Series);

$core.addMethod(
$core.method({
selector: "initializeCountry:state:latLong:series:",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCountryString", "aStateString", "aLatLongPoint", "aDataseries"],
source: "initializeCountry: aCountryString state: aStateString latLong: aLatLongPoint series: aDataseries\x0a\x09country := aCountryString.\x0a\x09state := aStateString.\x0a\x09latLong := aLatLongPoint.\x0a\x09series := aDataseries",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aCountryString,aStateString,aLatLongPoint,aDataseries){
var self=this,$self=this;
$self.country=aCountryString;
$self.state=aStateString;
$self.latLong=aLatLongPoint;
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
selector: "latLong",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "latLong\x0a\x09\x22<Point>\x22\x0a\x09\x0a\x09^latLong",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.latLong;

}; }),
$globals.Series);

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
$globals.Series);


$core.addMethod(
$core.method({
selector: "country:state:latLong:series:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCountryString", "aStateString", "aLatLongPoint", "aDataseries"],
source: "country: aCountryString state: aStateString latLong: aLatLongPoint series: aDataseries\x0a\x09| inst |\x0a\x09inst := self new.\x0a\x09inst \x0a\x09\x09initializeCountry: aCountryString \x0a\x09\x09state: aStateString \x0a\x09\x09latLong: aLatLongPoint \x0a\x09\x09series: aDataseries.\x0a\x09^inst",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "initializeCountry:state:latLong:series:"]
}, function ($methodClass){ return function (aCountryString,aStateString,aLatLongPoint,aDataseries){
var self=this,$self=this;
var inst;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
inst=$self._new();
$recv(inst)._initializeCountry_state_latLong_series_(aCountryString,aStateString,aLatLongPoint,aDataseries);
return inst;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"country:state:latLong:series:",{aCountryString:aCountryString,aStateString:aStateString,aLatLongPoint:aLatLongPoint,aDataseries:aDataseries,inst:inst})});
//>>excludeEnd("ctx");
}; }),
$globals.Series.a$cls);

$core.addMethod(
$core.method({
selector: "fromJson:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJson"],
source: "fromJson: aJson\x0a\x09^self \x0a\x09\x09country: aJson country \x0a\x09\x09state: aJson state \x0a\x09\x09latLong: aJson latLong \x0a\x09\x09series: (Dataseries fromJson: aJson series)",
referencedClasses: ["Dataseries"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["country:state:latLong:series:", "country", "state", "latLong", "fromJson:", "series"]
}, function ($methodClass){ return function (aJson){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._country_state_latLong_series_($recv(aJson)._country(),$recv(aJson)._state(),$recv(aJson)._latLong(),$recv($globals.Dataseries)._fromJson_($recv(aJson)._series()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromJson:",{aJson:aJson})});
//>>excludeEnd("ctx");
}; }),
$globals.Series.a$cls);

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
selector: "separatedThousandsString",
protocol: "*Covid19view",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "separatedThousandsString\x0a\x09\x22<String>\x0a\x09String with thousands separator every third insertin point\x22\x0a\x09\x0a\x09| rst wst |\x0a\x09rst := self printString reversed readStream.\x0a\x09wst := String new writeStream.\x0a\x09[rst atEnd] whileFalse: [\x0a\x09\x09wst nextPutAll: (rst next: 3).\x0a\x09\x09rst atEnd ifFalse: [wst nextPut: $.]].\x0a\x09^wst contents reversed",
referencedClasses: ["String"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["readStream", "reversed", "printString", "writeStream", "new", "whileFalse:", "atEnd", "nextPutAll:", "next:", "ifFalse:", "nextPut:", "contents"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var rst,wst;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv($self._printString())._reversed();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["reversed"]=1;
//>>excludeEnd("ctx");
rst=$recv($1)._readStream();
wst=$recv($recv($globals.String)._new())._writeStream();
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(rst)._atEnd();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["atEnd"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._whileFalse_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(wst)._nextPutAll_($recv(rst)._next_((3)));
$2=$recv(rst)._atEnd();
if(!$core.assert($2)){
return $recv(wst)._nextPut_(".");
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return $recv($recv(wst)._contents())._reversed();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"separatedThousandsString",{rst:rst,wst:wst})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

});
