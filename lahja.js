var firebaseRef = firebase.database();

function laheta(){
    var firebaseRef = firebase.database().ref();
    var lahja = document.getElementById("lahja").value;
    var ostaja = document.getElementById("ostaja").value;
    firebaseRef.child("lahjat").push().set({
        ostaja: ostaja,
        lahja: lahja,
    })
}

    
var rootRef = firebase.database().ref().child('lahjat');      
rootRef.on('child_added', snap =>     
{ var  lahja = snap.child("lahja").val();
    var ostaja = snap.child("ostaja").val();     
$("#lahjaketju").append("<p>" + ostaja + "<br>" + lahja + "</p>");    
});