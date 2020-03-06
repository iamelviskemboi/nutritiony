// This is the portfolio behavior.
$(document).ready(function () {
  $("#expert1").mouseover(function () {
    $("#overlay1").show();
  }).mouseout(function () {
    $("#overlay1").hide();
  });
});

$(document).ready(function () {
  $("#expert2").mouseover(function () {
    $("#overlay2").show();
  }).mouseout(function () {
    $("#overlay2").hide();
  });
});

$(document).ready(function () {
  $("#expert3").mouseover(function () {
    $("#overlay3").show();
  }).mouseout(function () {
    $("#overlay3").hide();
  });
});

$(document).ready(function () {
  $("#expert4").mouseover(function () {
    $("#overlay4").show();
  }).mouseout(function () {
    $("#overlay4").hide();
  });
});

$(document).ready(function () {
  $("#expert5").mouseover(function () {
    $("#overlay5").show();
  }).mouseout(function () {
    $("#overlay5").hide();
  });
  $("#expert6").mouseover(function () {
    $("#overlay6").show();
  }).mouseout(function () {
    $("#overlay6").hide();
  });
  $("#expert7").mouseover(function () {
    $("#overlay7").show();
  }).mouseout(function () {
    $("#overlay7").hide();
  });
  $("#expert8").mouseover(function () {
    $("#overlay8").show();
  }).mouseout(function () {
    $("#overlay8").hide();
  });
});

// List Doctors' location
var doctorsLocation = [{
    name: "David Mugi",
    locate: "Eldoret",
    number: "07859635"

  },
  {
    name: "mary Wanjiku",
    locate: "Kisumu",
    number: "0785269631"
  },

  {
    name: "lily Okello",
    locate: "Eldoret",
    number: "07458526"
  },
  {
    name: "Joseph Kiptortich",
    locate: "Eldoret",
    number: "07856329"
  },
  {
    name: "Saitoti Mbiro",
    locate: "Eldoret",
    number: "07856329"
  }, {
    name: "joe Karani",
    locate: "Eldoret",
    number: "07856329"
  },
  {
    name: "Jakom Okoth",
    locate: "Kisumu",
    number: "07845263"
  },
  {
    name: "Biro Weke",
    locate: "Kisumu",
    number: "07845263"
  }, {
    name: "Peter Odhiambo",
    locate: "Kisumu",
    number: "07845263"
  }, {
    name: "Brenda Wairimu",
    locate: "Kisumu",
    number: "07845263"
  },
  {
    name: "lillian Salama",
    locate: "Kisumu",
    number: "07415263"
  },
  {
    name: "Ngethe Antonio",
    locate: "Nairobi",
    number: "07845269"
  },
  {
    name: "Baraka Msafi",
    locate: "Nairobi",
    number: "07845269"
  },
  {
    name: "Doctor Tanga",
    locate: "Nairobi",
    number: "07845269"
  },

  {
    name: "Sophia Karanja",
    locate: "Nairobi",
    number: "07895623"

  }, {
    name: "Joe Mwangi",
    locate: "Nairobi",
    number: "078522256"
  }
]
var experts = [];
$(document).ready(function () {

  $("#submit").click(function () {
    $("#experts_list").empty()

    var doctorsLocations = $("#locate").val()

    for (var i = 0; i < doctorsLocation.length; i++) {

      if (doctorsLocation[i].locate == doctorsLocations) {
        var dLocation = doctorsLocation[i].name + " " + doctorsLocation[i].number

        //alert("your doctors" + dLocation + "here")
        console.log(dLocation)
        $("#experts_list").append("<li>" + dLocation + "</li>")
      }
    }

  });
  $('#experts').show()




});