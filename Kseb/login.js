var db;
var dbCreated = false;

var scroll = new iScroll('wrapper', {
 vScrollbar : false,
 hScrollbar : false,
 hScroll : false
});
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady(){
 db = window.openDatabase("RegistrationDB", "1.0", "Registration", 200000);
 if (dbCreated)
  {
      // created
  }
 
 else{
 db.transaction(getregistdata, transaction_error, getlogin_success);
 }
}

function getregistdata(tx){
 
  var sql = "select username, password from Registration";
  tx.executeSql(sql, [], getlogin_success);
}

function transaction_error(_tx, error) {
 alert("Database Error: " + error);
}

function getlogin_success(_tx, results){
   var len = results.rows.length;
   for (var i=0; i< len; i++) {  
    var consumer = results.rows.item(i);
    var username=document. getElementById("username").value;
    var password=document. getElementById("psw").value;
    var uname=consumer.username;
    var pasw=consumer.password;
    alert(username);
    alert(password);
    if(username==uname && password==pasw){
     alert("Login Success");
     window.location="unit.html";
     break;
    }
    else{
        var status=1;
     }
   }
   
   if(status==1)
    {
       alert("login failed");
    }
}


 
function transaction_error(_tx, error) {
  alert("Database Error: " + error);
 }
   
