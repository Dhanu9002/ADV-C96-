
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyD1gWSXfI_OIOlymAv5kZt2sk4-H-LHgPk",
      authDomain: "kwitter-8183c.firebaseapp.com",
      databaseURL: "https://kwitter-8183c-default-rtdb.firebaseio.com",
      projectId: "kwitter-8183c",
      storageBucket: "kwitter-8183c.appspot.com",
      messagingSenderId: "95556680253",
      appId: "1:95556680253:web:a8db4556bdf5808ad84854"
    };
  
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

     user_name = localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML = " Welcome "+ user_name +" !!!";

     function addRoom(){

      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding-room_name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";

     }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room_name : "+ Room_names);
      row = "<div class='room_name' id= "+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>" 
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout(){
      window.location="index.html";
}
