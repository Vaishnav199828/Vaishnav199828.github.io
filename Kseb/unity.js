var db;
var dbCreated = false;

var scroll = new iScroll('wrapper', {
 vScrollbar : false,
 hScrollbar : false,
 hScroll : false
});
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {

var  totalval= document.getElementById("totalval").value;
var inideposit= document.getElementById("inideposit").value;
var aremainingval = document.getElementById("remainingval").value;
var totalam=document.getElementById("totalam").value;
 var amount= document.getElementById("amount").value;


 db = window.openDatabase("RegistrationDB", "1.0", "Registration", 200000);
 if (dbCreated)
  {
      // created
  }

  else{
    db.transaction(unitDB, transaction_error, unitDB_success);
  }
   
   function unitDB(tx) {
    tx.executeSql('DROP TABLE IF EXISTS Unity');
    var sql = "CREATE TABLE IF NOT EXISTS Unity (  "
     + " totalval INTEGER, " + "inideposit INTEGER, " 
      + "remainingval INTEGER  "+" totalam INTEGER "+"amount INTEGER)";

      
    tx.executeSql(sql);
 var  totalval= document.getElementById("totalval").value;
 var inideposit =  document.getElementById("inideposit").value;
 var remainingval = document.getElementById("remainingval").value;
 var totalam=document.getElementById("totalam").value;
 var amount= document.getElementById("amount").value;
 
 tx.executeSql("INSERT INTO Registration (totalval,inideposit,remainingval) VALUES ('"+ totalval +"','"+ inideposit +"' , "+ remainingval +",'"+ amount +"','"+ totalam +"' )");

}

function transaction_error(tx, error) {
 alert("Database Error: " + error);
}
  
function unitDB_success() {
 dbCreated = true;
 // where you want to move
  window.location="payment.html";
 
}
}


   

