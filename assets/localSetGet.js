function setNpkData(npkdata){
localStorage.setItem("npkString",jasonToSring(npkdata))
};
function getNpkData(){
return localStorage.getItem("npkSring");
};
function jsonToString(jason){
  return JSON.stringify(json);
};
function stringToJson(string) {
  return JSON.parse(string);
};

var  stringdata = getNpkData();
var jason = stringToJson(stringdata);
document.write(npkdata + "<br>");
document.write(jason);
//אני מצפה לקבל שורה של npkdata
//ובשורה אחריה אותו הדבר
