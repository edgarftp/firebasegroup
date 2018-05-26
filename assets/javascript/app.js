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

  database.ref("/user").on("child_added", function(snapshot) {
    var sv = snapshot.val();
    console.log(sv);

        var newDiv = $("<div>");
        newDiv.addClass("row col-12 col-lg-12");
        var namedb = $("<p>").text(sv.name);
        namedb.attr("class", "col-4 col-lg-4 d-inline");
        var roledb = $("<p>").text(sv.role);
        roledb.attr("class", "col-1 col-lg-1 d-inline");
        var convertDate = moment(sv.date).format("MMM Do YYYY");
        var datedb = $("<p>").text(convertDate);
        datedb.attr("class", "col-2 col-lg-2 d-inline");
        var months = moment().diff(moment(sv.date),"months");
        var monthsdb = $("<p>").text(months);
        monthsdb.attr("class", "col-1 col-lg-1 d-inline");
        var ratedb = $("<p>").text(sv.rate);
        ratedb.attr("class", "col-2 col-lg-2 d-inline");
        var amount = parseInt(months) * parseInt(sv.rate);
        var billed = $("<p>").text("$ " + amount);
        billed.attr("class", "col-2 col-lg-2 d-inline");
        newDiv.append(namedb);
        newDiv.append(roledb);
        newDiv.append(datedb);
        newDiv.append(monthsdb);
        newDiv.append(ratedb);
        newDiv.append(billed);
        console.log(newDiv);
        $("#employee-holder").append(newDiv);
        

        
})
 