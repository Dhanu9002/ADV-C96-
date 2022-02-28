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
     room_name = localStorage.getItem("room_name");

     function send(){

      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
     }
