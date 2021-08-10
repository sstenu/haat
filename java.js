var firebaseRef = firebase.database();

function laheta(){
    var firebaseRef = firebase.database().ref();
    var puhelin = document.getElementById("puhelin").value;
    var osallistuja = document.getElementById("nimi").value;
    var ruokavalio = document.getElementById("ruokavalio").value;
    firebaseRef.child("osallistujat").push().set({
        nimi: osallistuja,
        puhelin: puhelin,
        ruokavalio: ruokavalio
    })
}

    
var rootRef = firebase.database().ref().child('osallistujat');      
rootRef.on('child_added', snap =>     
{ var  puhelin = snap.child("puhelin").val();
    var nimi = snap.child("nimi").val();   
    var ruokavalio = snap.child("ruokavalio").val();     
$("#viestiketju").append("<p>" + nimi + "<br>" + puhelin + "<br>" + ruokavalio + "</p>");    
});
    