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
window.onload = function() {
    let oDiv3 = document.querySelector('.div3');
    let str1 = '自我介绍';
    let str2 = '你们好，我的名字叫李佳伟。来自成都大学信息科学与工程学院，信息与计算科学专业二班。今年二十岁未婚，身高体重这些就不用说了吧。。';
    let str211 = '身高：172cm.体重：56.0kg.颜值：挺好...艾玛！真香~'
    let str212 = '来大学之前我特别喜欢打lol，追番，还有打篮球。但是来大学之后，前面两个都没得了！！只剩下偶尔打会儿篮球和学习了...'
    let str21 = '目标：  在大学里好好学习，并不断完善自己；';
    let str22 = '行动：  认真踏实地学习专业知识，前端技术和英语；';
    let str3 = '努力';
    let str4 = '做得不好，表达得也很单调，还是望海涵；也希望你们好好把握大学，做好自己'
    let str5 = '有时沉下身心，是为了飞的更高。加油！  努力！';
    let i = 1;
    var timer1 = null;
    let oDiv1 = document.querySelector('.div1');
    let oDiv4211 = document.querySelector('.div4211');
    let oDiv4212 = document.querySelector('.div4212');
    let oDiv4213 = document.querySelector('.div4213');
    let oDiv411 = document.querySelector('.div411');
    let oDiv412 = document.querySelector('.div412');
    let oA = document.querySelector('.a');
    let oB = document.querySelector('.b');
    let oA1 = document.querySelector('.a1');
    let oB1 = document.querySelector('.b1');
    let oDiv42 = document.querySelector('.div42');
    let oDiv5 = document.querySelector('.div5');
    let oDiv6 = document.querySelector('.div6');
    let oDiv61 = document.querySelector('.div61');
    let oDiv62 = document.querySelector('.div62');
    let oIcon = oA.getElementsByTagName('i')[0];
    let oIcon1 = oB.getElementsByTagName('i')[0];
    oDiv1.onclick = function() {
        i++;
        if (i % 2 != 0) {
            // clearInterval(timer1);
            speed = 0;
            play3(oDiv3, 'opacity', '0');
            play3(oDiv3, 'margin-top', '0');
            oDiv3.innerHTML = '';
            oA1.removeAttribute('style');
            oB1.removeAttribute('style');
            oA.removeAttribute('style');
            oDiv411.innerHTML = '';
            oB.removeAttribute('style');
            oDiv412.innerHTML = '';
            oDiv42.removeAttribute('style');
            oDiv5.removeAttribute('style');
            oDiv6.removeAttribute('style');
            oDiv5.innerHTML = '';
            oDiv61.innerHTML = '';
            oDiv62.innerHTML = '';
            oDiv4211.innerHTML = '';
            oDiv4212.innerHTML = '';
            oDiv4213.innerHTML = '';
            oIcon.className = '';
            oIcon1.className = '';
        } else {
            play3(oDiv3, 'opacity', '50', function() {
                play2(str1, oDiv3, function() {
                    play3(oDiv3, 'font-size', '36', function() {
                        play3(oA1, 'top', '0');
                        play3(oB1, 'top', '0');
                        play3(oDiv3, 'margin-top', '30', function() {
                            play3(oDiv42, 'height', '400', function() {
                                play2(str2, oDiv4211, function() {
                                    play2(str211, oDiv4212, function() {
                                        play2(str212, oDiv4213, function() {
                                            play3(oA, 'height', '300', function() {
                                                play5(oIcon, 'iconfont icon-chongwu', function() {
                                                    play2(str21, oDiv411, function() {
                                                        play3(oB, 'height', '300', function() {
                                                            play2(str22, oDiv412, function() {
                                                                play5(oIcon1, 'iconfont icon-chongwu1', function() {
                                                                    play3(oDiv5, 'opacity', '100', function() {
                                                                        play2(str3, oDiv5, function() {
                                                                            $('.div5').addClass('play3');
                                                                            play4(oDiv6, {
                                                                                height: 100,
                                                                                width: 800,
                                                                            }, function() {
                                                                                play2(str4, oDiv61, function() {
                                                                                    play2(str5, oDiv62);
                                                                                })
                                                                            });
                                                                        })
                                                                    })
                                                                })

                                                            })
                                                        })
                                                    })
                                                })

                                            })
                                        })
                                    })

                                })


                            })

                        })
                    });
                });
            })
        }
    }

    function play2(str, oDiv, fnend) {
        var speed = 0;
        clearInterval(timer1);
        timer1 = setInterval(function() {
            if (speed > str.length) {
                clearInterval(timer1);
                if (fnend) fnend();
            } else {
                oDiv.innerHTML = str.slice(0, speed++);
            }
        }, 120);
    }

    function play3(obj, attr, target, fnend) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function() {
            var cur = null;
            if (attr == 'opacity') {
                cur = Math.round(parseFloat(getComputedStyle(obj, null)[attr]) * 100);
            } else {
                cur = parseInt(getComputedStyle(obj, null)[attr]);
            }
            var speed = (target - cur) / 6;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if (cur == target) {
                clearInterval(obj.timer);
                if (fnend) fnend();
            } else {
                if (attr == 'opacity') {
                    obj.style[attr] = (cur + speed) / 100;
                } else {
                    obj.style[attr] = cur + speed + 'px';
                }
            }
        }, 30)
    }


    function play4(obj, json, fnend) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function() {
            var cur = null;
            for (attr in json) {
                if (attr == 'opacity') {
                    cur = Math.round(parseFloat(getComputedStyle(obj, null)[attr]) * 100);
                } else {
                    cur = parseInt(getComputedStyle(obj, null)[attr]);
                }
                var speed = (json[attr] - cur) / 6;
                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                if (cur == json[attr]) {
                    clearInterval(obj.timer);
                    if (fnend) fnend();
                } else {
                    if (attr == 'opacity') {
                        obj.style[attr] = (cur + speed) / 100;
                    } else {
                        obj.style[attr] = cur + speed + 'px';
                    }
                }
            }
        }, 30)
    }

    function play5(obj, classname, fnend) {
        obj.className = classname;
        if (fnend) fnend();
    }

}