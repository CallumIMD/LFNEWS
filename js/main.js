// On Load Application Calls several functions
$(document).ready(function () {
  // Function Calls Guardian API to generate dynamic content for articles
  var categoryValue = "Home";
  // Function receives a category value to determine what content to load from the API
  categorySearch(categoryValue);

  // Function Calls OpenWeather API to generate dynamic content for weather
  weather();

  // Function checks if user has previously accept Cookies Policy
  visitCheck();

  // Function checks if aa timer has been set to clear dynamic content from the local storage
  storageTime();

  // Function hides the preloader once content on application is visible
  $(".loader").fadeOut();
});

// ROUTING //

// Main Menu
$(".nav-link").on("click", function () {
  // Alters view on screen to top 0 and left 0
  window.scrollTo(0, 0);
  // Variable to collect route value
  categoryValue = $(this).data("option");
  if (categoryValue == undefined) {
  } else {
    // Clears any current dynamic content via class selection
    $("." + categoryValue).html();
    // Calls function to generate content related to route category
    categorySearch(categoryValue);
  }
  // Removes the active class from previous selected routes so that route can change
  $(".nav-link").removeClass("active");
});

// Drop Down Sub Menu
$(".dropdown-item").on("click", function () {
  // Alters view on screen to top 0 and left 0
  window.scrollTo(0, 0);
  // Variable to collect route value
  categoryValue = $(this).data("option");
  // Clears any current dynamic content via class selection
  $("." + categoryValue).html();
  // Calls function to generate content related to route category
  categorySearch(categoryValue);
  // Removes the active class from previous selected routes so that route can change
  $(".dropdown-item").removeClass("active");
});

// Footer Menu
$(".submenu").on("click", function () {
  // Alters view on screen to top 0 and left 0
  window.scrollTo(0, 0);
  // Variable to collect route value
  categoryValue = $(this).data("option");
  if (categoryValue == undefined) {
  } else {
    // Clears any current dynamic content via class selection
    $("." + categoryValue).html();
    // Calls function to generate content related to route category
    categorySearch(categoryValue);
  }
  // Removes the active class from previous selected routes so that route can change
  $(".nav-link").removeClass("active");
  $(".submenu").removeClass("active");
  $('[data-option="Search"]').removeClass("active");
});

// query search nav bar search
$("#searchForm").on("click", function () {
  // Clears the message if exists on search tag
  $("#none").empty();
  // Variable collect the search value to be used in API query call
  categoryValue = $("#query").val();
  if (categoryValue == "") {
    // If variable is empty a message displays to the user
    $("#none").text("No search values entered");
    return false;
  } else {
    // Alters view on screen to top 0 and left 0
    window.scrollTo(0, 0);
    // Clears the search results
    $(".Search").html();
    // Passes search value to categorySearch function which performs API call
    categorySearch(categoryValue);
    // Clears the search input field value so that user can research content
    $("#query").val("");
  }
  // Removes the active class from previous selected routes so that route can change
  $(".nav-link").removeClass("active");
  $(".dropdown-item").removeClass("active");
  $(".submenu").removeClass("active");
  $('[data-option="Search"]').removeClass("active");
});

// DYNAMIC CONTENT FOR GRID

// Method Receives 1 parameter which is the categoryValue
function categorySearch(categoryValue) {
  // Variable receives the parameter value
  var interchangeable = categoryValue;
  // If statement is performed to check the value of categoryValue
  if (interchangeable == undefined) {
  } else if (
    interchangeable != "Boxing" &&
    interchangeable != "Golf" &&
    interchangeable != "Football" &&
    interchangeable != "Tennis" &&
    interchangeable != "Rugby" &&
    interchangeable != "Racing" &&
    interchangeable != "Politics" &&
    interchangeable != "Home" &&
    interchangeable != "Latest"
  ) {
    interchangeable = "Search";
  } else {
  }
  // This generates the dynamic content to be appended to the select category
  $("." + interchangeable).html(
    '<br /><div class="container"><div class="card-deck"><div class="card"><img class="card-img-top card1" src="img/card.jpg" alt="Card image cap"/>' +
      '<div class="card-body"><h5 class="card-title cardt1">Card title</h5><p class="card-text"><button type="button" class="btn article" data-name="0" data-toggle="modal"  data-target="#largeModal"><u>Read More</u></button></p></div></div>' +
      '<div class="card"><img class="card-img-top card2" src="img/card.jpg" alt="Card image cap"/>' +
      '<div class="card-body"><h5 class="card-title cardt2">Card title</h5><p class="card-text"><button type="button" data-name="1" class="btn article" data-toggle="modal"  data-target="#largeModal"><u>Read More</u></button></p></div></div>' +
      '<div class="card"><img class="card-img-top card3"src="img/card.jpg"alt="Card image cap"/>' +
      '<div class="card-body"><h5 class="card-title cardt3">Card title</h5><p class="card-text"><button type="button" data-name="2" class="btn article" data-toggle="modal"  data-target="#largeModal"><u>Read More</u></button></p></div></div>' +
      '<div class="card"><img class="card-img-top card4"src="img/card.jpg"alt="Card image cap"/>' +
      '<div class="card-body"><h5 class="card-title cardt4">Card title</h5><p class="card-text"><button type="button" data-name="3" class="btn article" data-toggle="modal"   data-target="#largeModal"><u>Read More</u></button></p></div></div></div><br /><div class="card-deck">' +
      '<div class="card"><img class="card-img-top card5" src="img/card.jpg" alt="Card image cap" />' +
      '<div class="card-body"><h5 class="card-title cardt5">Card title</h5><p class="card-text"><button type="button" data-name="4" class="btn article" data-toggle="modal"  data-target="#largeModal"><u>Read More</u></button></p></div></div>' +
      '<div class="card"><img class="card-img-top card6" src="img/card.jpg" alt="Card image cap" />' +
      '<div class="card-body"> <h5 class="card-title cardt6">Card title</h5> <p class="card-text"> <button type="button" data-name="5" class="btn article" data-toggle="modal"  data-target="#largeModal"><u>Read More</u></button></p></div></div>' +
      '<div class="card"><img class="card-img-top card7" src="img/card.jpg" alt="Card image cap"/>' +
      '<div class="card-body"><h5 class="card-title cardt7">Card title</h5> <p class="card-text"> <button type="button" data-name="6" class="btn article" data-toggle="modal"  data-target="#largeModal"><u>Read More</u></button> </p> </div></div>' +
      '<div class="card"><img class="card-img-top card8" src="img/card.jpg" alt="Card image cap"/>' +
      '<div class="card-body"><h5 class="card-title cardt8">Card title</h5><p class="card-text"><button type="button" data-name="7" class="btn article" data-toggle="modal"  data-target="#largeModal"><u>Read More</u></button></p></div></div></div><br /><div class="card-deck">' +
      '<div class="card"><img  class="card-img-top card9" src="img/card.jpg" alt="Card image cap"/>' +
      '<div class="card-body"><h5 class="card-title cardt9">Card title</h5><p class="card-text"><button type="button" data-name="8" class="btn article" data-toggle="modal"  data-target="#largeModal"><u>Read More</u></button></p></div></div>' +
      '<div class="card"><img class="card-img-top card10" src="img/card.jpg" alt="Card image cap"/>' +
      '<div class="card-body"><h5 class="card-title cardt10">Card title</h5><p class="card-text"><button type="button" data-name="9" class="btn article" data-toggle="modal"  data-target="#largeModal"><u>Read More</u></button></p></div></div>' +
      '<div class="card"><img class="card-img-top card11" src="img/card.jpg"  alt="Card image cap"/>' +
      '<div class="card-body"> <h5 class="card-title cardt11">Card title</h5><p class="card-text"><button type="button" data-name="10" class="btn article" data-toggle="modal"  data-target="#largeModal"><u>Read More</u></button></p></div></div>' +
      '<div class="card"><img class="card-img-top card12"  src="img/card.jpg" alt="Card image cap"/>' +
      '<div class="card-body"> <h5 class="card-title cardt12">Card title</h5> <p class="card-text"> <button type="button" data-name="11" class="btn article" data-toggle="modal"  data-target="#largeModal"><u>Read More</u></button></p></div></div></div></div>'
  );
  // If statement checks the categoryValue and performs alternate API calls pending on the value
  if (categoryValue == undefined) {
  } else if (categoryValue == "Home" || categoryValue == "Latest") {
    // Variable to store the query with applied categoryValue
    var queryURL =
      "https://content.guardianapis.com/search?order-by=newest&show-elements=image&show-fields=thumbnail%2Cbody&page=1&page-size=12&api-key=6b3ef386-503a-493b-b4e5-3487f18762cb";
    // Method is called which passes two parameters to trigger the API call whether online or offline
    querySearch(queryURL, categoryValue);
  } else if (interchangeable == "Search") {
    // Variable to store the query with applied categoryValue
    var queryURL =
      "https://content.guardianapis.com/search?order-by=relevance&show-elements=image&show-fields=thumbnail%2Cbody&page=1&page-size=12&api-key=6b3ef386-503a-493b-b4e5-3487f18762cb&q=" +
      categoryValue;
    // Method is called which passes two parameters to trigger the API call whether online or offline
    querySearch(queryURL, categoryValue);
  } else {
    // Variable to store the query with applied categoryValue
    var queryURL =
      "https://content.guardianapis.com/search?order-by=relevance&show-elements=image&show-fields=thumbnail%2Cbody&page=1&page-size=12&api-key=6b3ef386-503a-493b-b4e5-3487f18762cb&q=" +
      categoryValue;
    // Method is called which passes two parameters to trigger the API call whether online or offline
    querySearch(queryURL, categoryValue);
  }
}

// Setting/Getting storage variable to save dynamic data
if (window.localStorage.getItem("lfnews")) {
  convertedData = window.localStorage.getItem("lfnews");
  sessionData = JSON.parse(convertedData);
} else {
  // if no data is saved a global array is created
  window.sessionData = [];
}

// GUARDIAN SEARCH API

// Method receives two parameters one being the queryURL and the matching category value
function querySearch(queryURL, categoryValue) {
  // If statement checks if the application has a connection
  if (navigator.onLine) {
    // Showing & Hiding contents pending on the connection of the application
    $(".noResult").hide();
    $(".Results").show();
    $("#weatherVis").show();
    // Variables set for initiating position in for loop
    n = 1;
    c = 1;
    // Query call to Guardian API
    $.ajax({
      url: queryURL,
      dataType: "jsonp",
      type: "GET",
      cache: true,
      success: function (data) {
        // If successful any previous error message is hidden
        $("#none").empty();
        if (data.response.total == 0) {
          // Showing & Hiding contents pending on the success of query call
          $("#none").text("No matching results found.");
          $(".noResult").show();
          $(".Results").hide();
        } else {
          // banner content from guardian api generated via use of for loop
          for (i = 0; i < 3; i++) {
            $(".i" + n).attr("src", data.response.results[i].fields.thumbnail);
            $(".i" + n).attr("alt", data.response.results[i].webTitle);
            $(".t" + n).text(data.response.results[i].webTitle);
            n++;
          }
          // grid content generated via use of for loop
          for (i = 0; i < 12; i++) {
            $(".card" + c).attr(
              "src",
              data.response.results[i].fields.thumbnail
            );
            $(".card" + c).attr("alt", data.response.results[i].webTitle);
            $(".cardt" + c).text(data.response.results[i].webTitle);
            c++;
          }
          // Grid read more function generated via selection of current item
          $(document).on("click", ".article", function () {
            var i = $(this).data("name");
            $("#myModalLabel").text(data.response.results[i].webTitle);
            $(".modelimg").attr(
              "src",
              data.response.results[i].fields.thumbnail
            );
            $(".modelimg").attr("alt", data.response.results[i].webTitle);
            $(".modelcontent").html(data.response.results[i].fields.body);
          });
          // Storage time method applied saving the dynamic content to local storage to be loaded in offline mode
          storageTime();
          // If statement that emptys local storage if trying to save more content and 4.5mb limit has been exceeded
          if (
            unescape(encodeURIComponent(JSON.stringify(localStorage))).length >
            4500000
          ) {
            // Clears current data in sessionData array
            sessionData = [];
            // Setting a unique identifier in the array to be used in offline mode to identify correct content
            data.response.category = categoryValue;
            // Using push method to add data to sessionData array
            sessionData.push(data);
            // Stringify data as local storage can only store strings
            lfdata = JSON.stringify(sessionData);
            // saving data to local storage
            window.localStorage.setItem("lfnews", lfdata);
          } else {
            // Setting a unique identifier in the array to be used in offline mode to identify correct content
            data.response.category = categoryValue;
            // Using push method to add data to sessionData array
            sessionData.push(data);
            // Stringify data as local storage can only store strings
            lfdata = JSON.stringify(sessionData);
            // saving data to local storage
            window.localStorage.setItem("lfnews", lfdata);
          }
        }
      },
      error: function () {
        // Showing & Hiding contents pending on the success of the query call
        $(".noResult").show();
        $(".Results").hide();
      },
    });
  } else {
    // Showing & Hiding contents if application is offline
    $("#weatherVis").hide();
    // Getting items from local storage by selecting key lfnews and using parse method to return to object state and saving to variable
    lfnews = JSON.parse(window.localStorage.getItem("lfnews"));
    // Array to store unqiue categories to identify content data sets in local storage
    storedCategories = [];
    // For loop retrieves all unqiue categories and assigns them to array in order and use of uppercase to remove issue of exact comparisons
    for (i = 0; i < lfnews.length; i++) {
      // Using the push method to add items to array
      storedCategories.push(lfnews[i].response.category.toUpperCase());
    }
    // If statement checks if the selected category or search value exists in array
    if (storedCategories.includes(categoryValue.toUpperCase())) {
      // Showing & Hiding contents pending location of matching identifier
      $(".noResult").hide();
      $(".Results").show();
      // Variable stores the last position of category Value in array to be used to identify the latest content in local storage to be applied to grid content
      arrPos = storedCategories.lastIndexOf(categoryValue.toUpperCase());
      n = 1;
      c = 1;
      // banner content from local storage applied with for loop
      for (i = 0; i < 3; i++) {
        // $(".i" + n).attr(
        //   "src",
        //   lfnews[arrPos].response.results[i].fields.thumbnail
        // );
        $(".i" + n).attr("alt", lfnews[arrPos].response.results[i].webTitle);
        $(".t" + n).text(lfnews[arrPos].response.results[i].webTitle);
        n++;
      }
      // grid content applied with for loop
      for (i = 0; i < 12; i++) {
        // $(".card" + c).attr("src", "../img/card.jpg");
        $(".card" + c).attr("alt", lfnews[arrPos].response.results[i].webTitle);
        $(".cardt" + c).text(lfnews[arrPos].response.results[i].webTitle);
        c++;
      }
      // Grid read more function
      $(document).on("click", ".article", function () {
        var i = $(this).data("name");
        $("#myModalLabel").text(lfnews[arrPos].response.results[i].webTitle);
        // $(".modelimg").attr("src", "../img/card.jpg");
        $(".modelimg").attr("alt", lfnews[arrPos].response.results[i].webTitle);
        $(".modelcontent").html(lfnews[arrPos].response.results[i].fields.body);
      });
    } else {
      // Showing & Hiding contents pending on if content does not exist in local storage when offline
      $(".noResult").show();
      $(".Results").hide();
    }
  }
}

// Time Method Clears dynamic content from local storage every 3 hours to allow space to save latest collected data
function storageTime() {
  // If statement to check if local storage item for time exists, if not method sets the current time
  if (window.localStorage.getItem("time")) {
    // variable saves converted string to number data from local storage
    var convertTime = parseInt(window.localStorage.getItem("time"), 10);
    // test time uses saved time plus 3 hours to use as a comparison operater
    var testTime = convertTime + 10800000;
    // current time retrieves the current time in seconds
    var currenTime = Date.now();
    // if statement clears the local storage items and resets the time if exceeded 3 hours
    if (currenTime > testTime) {
      sessionData = [];
      lfdata = JSON.stringify(sessionData);
      window.localStorage.setItem("lfnews", lfdata);
      time = Date.now();
      window.localStorage.setItem("time", time);
    }
  } else {
    // if time did not exist time would be set to local storage for future comparison
    time = Date.now();
    window.localStorage.setItem("time", time);
  }
}

// Weather section seach value collection
//Variable to initialise the city for weather API
var city = "belfast";
// Event handler calls method on click to retrieve and update city variable value
$("#getWeather").click(function () {
  city = $("#city").val();
  // Method clears previous error text if set
  $("#werror").empty();
  // If statement to check if value has been set, if no city message displays to the user
  if (city == "") {
    msg = "Location Required. ";
    $("#werror").html(msg);
  } else {
    // Method called to perform query search and display dynamic content
    weather();
  }
});

// WEATHER API

// Method to display weather related content
function weather() {
  // Method checks if application is online before making a call to the Open Weather API
  if (navigator.onLine) {
    // Shows the weather content if online
    $("#weatherVis").show();
    // Variables get the current date and format the information to be legible
    var date = new Date();
    var dd = date.getDate();
    var mm = date.getMonth() + 1;
    var y = date.getFullYear();
    var cd = "/" + mm + "/" + y;
    // key required for API access
    var key = "ca3d2eb240505faf96d5281222f60ab4";
    // Ajax request to API and returns
    $.ajax({
      url: "https://api.openweathermap.org/data/2.5/forecast",
      dataType: "json",
      type: "get",
      data: { q: city, appid: key, units: "metric", cnt: "7" },
      // Retrieves the data from weather API and appends it to application
      success: function (data) {
        var wr = "";
        wr += "<h5>" + data.city.name + "</h5><div class='row'>";
        $.each(data.list, function (index, val) {
          wr += " <div class='col center'><p>";
          wr += dd + cd + "</p><p>";
          wr +=
            "<img src='img/" +
            val.weather[0].icon +
            ".png' alt='WeatherIcon'></p><p><b>";
          wr += val.main.temp + "&degC </b></p><p>";
          wr += "<span> " + val.weather[0].description + "</span>";
          wr += "</p></div>";
          dd++;
        });
        wr += "</div>";
        $("#weatherResult").html(wr);
      },
      // Error method with poor request to weather API
      error: function (jqXHR, exception) {
        var msg = "";
        if (jqXHR.status === 0) {
          msg = "Not connect.\n Verify Network.";
        } else if (jqXHR.status == 404) {
          msg = "Requested page not found. [404]";
        } else if (jqXHR.status == 500) {
          msg = "Internal Server Error [500].";
        } else if (exception === "parsererror") {
          msg = "Requested JSON parse failed.";
        } else if (exception === "timeout") {
          msg = "Time out error.";
        } else if (exception === "abort") {
          msg = "Ajax request aborted.";
        } else {
          msg = "Uncaught Error.\n" + jqXHR.responseText;
        }
        $("#werror").html(msg);
      },
    });
  } else {
    // If application is offline then the weather API content will be hidden
    $("#weatherVis").hide();
  }
}

// Google Maps
function initMap() {
  // Variable has preset co-ordinates of belfast
  var location = { lat: 54.597286, lng: -5.93012 };
  // Variable stores the map contents
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 7,
    center: location,
  });
  // Variable stores marker contents
  var marker = new google.maps.Marker({
    position: location,
    map: map,
  });
}

// Method for Cookies check
function visitCheck() {
  // Variable stores local storage item
  var accepted = localStorage.getItem("accepted") == "true";
  if (accepted) {
    // If item exists meaning it been accepted this will hide the cookies accept
    $("#cookies").empty();
    yourWeather();
  }
}

// Methods gets weather for your current location
function yourWeather() {
  // If user clicks accept button a cookie is created
  if (document.cookie == "") {
    document.cookie = "accepted";
    accepted = true;
    // Sets local storage item
    localStorage.setItem("accepted", accepted);
  }
  // If statement gets current position of the user and then sets the weather co-ordinates to user position
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    // If user does not accept the option to access current location this feature will be hidden from the user.
    $("#bottom").hide();
    $("#fail").innerHTML = "Geolocation is not supported by this browser.";
  }
}

// Hides cookies option when selected
$("#accept").click(function () {
  $("#cookies").empty();
  // Calls weather function if accepted
  yourWeather();
});

// hide when not accepted without cookies
$(".decline").click(function () {
  $("#bottom").hide();
});

// hide when accepted
$(document).on("click", ".hide", function () {
  $("#bottom").hide();
});

// Method to show weather for current coordinates
function showPosition(position) {
  // Variables retrieves current users longitude and latitued
  var la = position.coords.latitude;
  var lo = position.coords.longitude;
  // Key required for API request
  var key = "ca3d2eb240505faf96d5281222f60ab4";
  // Ajax request to API to display the weather contents and append to application
  $.ajax({
    url: "https://api.openweathermap.org/data/2.5/weather",
    dataType: "json",
    type: "get",
    data: { lat: la, lon: lo, appid: key },
    success: function (data) {
      var wr = "";
      $.each(data.weather, function (index, val) {
        wr +=
          "<a class='hide'><i class='fa fa-close '></i></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b id='fail'>" +
          data.name +
          '</b><img src="img/' +
          val.icon +
          '.png" class="pngscale"/>' +
          data.main.temp +
          "&deg;C " +
          " / " +
          val.main +
          ", " +
          val.description;
      });
      $("#cookies").html(wr);
    },
  });
}

// HELP FEATURE

// Event listener for onclick to display intro.js steps
$("#helpForm").on("click", function () {
  introJs()
    .setOption("showProgress", true)
    .setOption("overlayOpacity", 0)
    .start();
});

// Contact Form Validation
function validateForm() {
  // Variable to store name input value
  var name = document.getElementById("name").value;
  // If statement checks if field is empty
  if (name == "") {
    // Message displayed to user if input is invalid
    document.querySelector(".status").innerHTML = "Name cannot be empty";
    return false;
  }
  // Variable to store name input value
  var email = document.getElementById("email").value;
  // If statement checks if field is empty
  if (email == "") {
    // Message displayed to user if input is invalid
    document.querySelector(".status").innerHTML = "Email cannot be empty";
    return false;
  } else {
    // If statement checks iemail is of correct format
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email)) {
      document.querySelector(".status").innerHTML = "Email format invalid";
      return false;
    }
  }
  // Variable to store name input value
  var subject = document.getElementById("subject").value;
  // If statement checks if field is empty
  if (subject == "") {
    // Message displayed to user if input is invalid
    document.querySelector(".status").innerHTML = "Subject cannot be empty";
    return false;
  }
  // Variable to store name input value
  var message = document.getElementById("message").value;
  // If statement checks if field is empty
  if (message == "") {
    // Message displayed to user if input is invalid
    document.querySelector(".status").innerHTML = "Message cannot be empty";
    return false;
  }
  // Message displayed to user if entries are valid and to allow the back end to validate the code
  document.querySelector(".status").innerHTML = "Sending...";
  $(".status").css("color", "black");
  formData = {
    name: $("input[name=name]").val(),
    email: $("input[name=email]").val(),
    subject: $("input[name=subject]").val(),
    message: $("textarea[name=message]").val(),
  };
  // Ajax post request passes data to back end API to handle contact form submission to email
  $.ajax({
    url: "mail.php",
    type: "POST",
    data: formData,
    success: function (data, textStatus, jqXHR) {
      $(".status").text(data.message);
      $(".status").css("color", "green");
      if (data.code)
        //If mail was sent successfully, reset the form.
        $("#contact-form")
          .closest("form")
          .find("input[type=text], textarea")
          .val("");
    },
    // Error if invalid
    error: function (jqXHR, textStatus, errorThrown) {
      $(".status").text(jqXHR);
    },
  });
}
