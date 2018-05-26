var config = {
    apiKey: "AIzaSyC-J_NZwN8XaYmHG9obKeSM8Ct8kr8UCb4",
    authDomain: "fir-70a0d.firebaseapp.com",
    databaseURL: "https://fir-70a0d.firebaseio.com",
    projectId: "fir-70a0d",
    storageBucket: "",
    messagingSenderId: "955749658359"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  $("#submit-btn").on("click", function() {
    event.preventDefault();

    var name = $("#name-input").val().trim();
    var role = $("#role-input").val().trim();
    var date = $("#date-input").val().trim();
    var rate = $("#rate-input").val().trim();

    database.ref("/user").push({
        name: name,
        role: role,
        date: date,
        rate: rate,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
      });

    
  })