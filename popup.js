$(document).ready( function() {
var d = 0;
var days =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var query = 'select * from html where url ="http://tibia.wikia.com/wiki/Rashid" and xpath="//table//td//p"';

var yqlAPI = 'https://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent(query) + ' &format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=?';

$.getJSON(yqlAPI, function(r){
    //console.log(r.query.results.p[5].content);
    var string = r.query.results.p[5].content;
    var regex = /today is ([a-zA-z]{0,9})/ig;
  var result = regex.exec(string);
  console.log(result[1]);
  for (var i = 0; i < days.length; i++)
 {
   if(days[i] == result[1])
     {
       d=i;
       break;
     }
 }
//0=Sun, 1=Mon, ..., 6=Sat
var NPC_Rashid_loc = ["Carlin", "Svargrond","Liberty Bay","Port Hope", "Ankrahmun", "Darashia", "Edron"]
var tomorrow = d+1;
var yesterday = d-1;
if (tomorrow === 7 )
    tomorrow =0;
if (yesterday === -1)
   yesterday =0;
$("#Week").text(days[d]);
$("#Yesterday").text("Yesterday: "+NPC_Rashid_loc[yesterday]);
$("#Today").text(NPC_Rashid_loc[d]);
$("#Tomorrow").text("Tommorrow:  "+NPC_Rashid_loc[tomorrow])
    
});

});


