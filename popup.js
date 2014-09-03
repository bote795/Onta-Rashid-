$(document).ready( function() {
  var d = new Date().getDay();
  var days =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
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


