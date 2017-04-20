$('document').ready(function() {

    $('body').tooltip({
        selector: '[data-toggle=tooltip]'
    });

    var badgesURL = "https://teamtreehouse.com/kevinkendall2.json";

//   var api = {
//   root: "https://teamtreehouse.com",
// //   token: "8e888fa39ec243e662e1fb738c42ae99",
//   imageBaseUrl: "http://image.tmdb.org/t/p/"
// }

//   var html = [];

//   function getBadges(data, callback) {
//   $.ajax({
//     url: api.root + "/kevinkendall2.json",
//     data: data,
//     success: function(response) {
// //       model.browseItems = response.results;
// //       $('#gallery').html(response.results);
//       console.log(response);
//       callback(response);
//     },
//     fail: function() {
//       console.log("discover failed");
//     }
//   });
// }


    $.getJSON( "https://teamtreehouse.com/kevinkendall2.json", function( data ) {
        var badgeItems = [];
        var items = [];
        var totalPoints = [];
        var badgesURL = [];
        ////////////////////////////////////////////
        $.each( data, function( key, val ) {
            if (key.toLowerCase() === "badges") {

                $.each(val, function (key3, val3) {
//                     console.log(val3.icon_url);

                    //Use bootstrap tooltip on li
                    badgesURL.push('<li data-toggle="tooltip" data-placement="top" title="' + val3.name + '"><img class="badgeImage"   src="' + val3.icon_url + '"/></li>');
                });

                // console.log(badgesURL);
            }



            if (key.toLowerCase() === "points") {
                $.each(val, function (key2, val2) {
                    if (val2 !== 0) {

//             items.push("<li id='" + key2 + "'>" + val2 + "</li");

                        if (key2.toLowerCase() !== 'total'){
//             items.push([key2,val2]);
                            items.push("<li>" + [key2,val2] + "</li>");

                        } else {
//             $('strong.total').text(val2);
                            $('#totalPoints').html("I have " + val2 + " total points");
                        }
                    }

                })

            }
            //iterate through array and display highest point items first
//     console.log(items[0]);
        });

        $( "<ul/>", {
            "class": "my-new-list",
            html: items.join( "" )
        }).appendTo( "body" );

//////////////////////////////////
        //displays badges stored in the badgesURL array by appending to the gallery div
        for (var i = 0; i < badgesURL.length; i++) {
            $('#gallery').append(badgesURL[i]);
        }
    });

//   console.log(items);

    $('#button').on("click", function () {
        $('.my-new-list').addClass("hidden");
    });

    //animate badges on hover

    $('li').hover(function () {
        $(this).animate({width: "200px"});
    });




}); //end document ready