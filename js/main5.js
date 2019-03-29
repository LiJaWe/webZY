$(document).ready(function() {
    var play = function() {
        setTimeout(function() {
            $('.div21>div').removeClass('play1');
            $('.div21>div').addClass('play2');
        }, 400)
    }
    setInterval(function() {
        $('.div21>div').addClass('play1');
        $('.div21>div').removeClass('play2');
        play();
    }, 3000)
    var play1 = function() {
        setTimeout(function() {
            $('.div1').removeClass('swing1');
        }, 600)
    }
    $('.div11').mouseenter(function() {
        timer = setTimeout(function() {
            $('.div1').addClass('swing1');
        }, 500)
    })
    $('.div11').mouseleave(function() {
        $('.div1').removeClass('swing1');
    })

    $('.div12').mousedown(function() {
        if ($('.div11').hasClass('swing2')) {
            $('.div11').addClass('swing3');
            $('.div11').removeClass('swing2');
            $('.div1').addClass('swing1');
            $('body').removeClass('body');
            $('.div123').removeClass('div123a');
            $('.div2').show();
            $('.div3').hide();
        } else {
            $('.div11').removeClass('swing3');
            $('.div1').addClass('swing1');
            $('.div11').addClass('swing2');
            $('body').addClass('body');
            $('.div123').addClass('div123a');
            $('.div2').hide();
            $('.div3').show();
        }
        play1()
    });
})