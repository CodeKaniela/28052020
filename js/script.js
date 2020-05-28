// $(document).ready(function () {

//     $(".filter-button").click(function () {
//         var value = $(this).attr('data-filter');

//         if (value == "all") {
//             $('.filter').show('1000');
//         } else {
//             $(".filter").not('.' + value).hide('3000');
//             $('.filter').filter('.' + value).show('3000');

//         }
//     });
    

//     $('.filter-button').click(function () {
//         $(this).siblings().removeClass('activeBtn');
//         $(this).addClass('activeBtn');
//     });

// });

$(".m").click(function (e) { 
    e.preventDefault();
    $(".pizza").removeClass("large");
    $(".pizza").removeClass("small");

    $(".pizza").addClass("medium");
});

$(".l").click(function (e) { 
    e.preventDefault();
    $(".pizza").removeClass("medium");
    $(".pizza").removeClass("small");
    $(".pizza").addClass("large");
});

$(".s").click(function (e) { 
    e.preventDefault();
    $(".pizza").removeClass("large");
    $(".pizza").removeClass("medium");
    $(".pizza").addClass("small");
});


$(".plusBtn").click(function (e) { 
    e.preventDefault();
    $(".continueBtn").show();
    $(".plusBtn").hide();
});