window.onload = function() {
    let map = new BMap.Map('div1', {
        minZoom: 4,
        maxZoom: 14,
        enableMapClick: false
    });
    let oDiv2 = document.querySelector('.div2');
    let aLi = oDiv2.getElementsByTagName('li');
    let oDiv20 = document.querySelector('.div20');
    let oDiv201 = document.querySelector('.div201');
    let a = 1;
    let oDiv0 = document.querySelector('.div0');
    let oDiv3 = document.querySelector('.div3');
    let oDiv4 = document.querySelector('.div4');
    let oDiv5 = document.querySelector('.div5');
    let oDiv = document.querySelector('.div');
    let oBtn = document.querySelector('.btn');
    let oDiv6 = document.getElementById('div6');
    map.centerAndZoom('成都', 11);
    map.enableScrollWheelZoom(true);
    map.enableInertialDragging();
    map.addControl(new BMap.NavigationControl());
    map.addControl(new BMap.ScaleControl());
    map.addControl(new BMap.OverviewMapControl());
    setTimeout(function() {
        map.setZoom(14);
    }, 2000);




    var oTxt1 = document.getElementById('txt1');
    var oTxt2 = document.getElementById('txt2');
    $("#result").click(function() {
        var routePolicy = [BMAP_TRANSIT_POLICY_LEAST_TIME, BMAP_TRANSIT_POLICY_LEAST_TRANSFER, BMAP_TRANSIT_POLICY_LEAST_WALKING, BMAP_TRANSIT_POLICY_AVOID_SUBWAYS];
        var transit = new BMap.TransitRoute(map, {
            renderOptions: {
                map: map
            },
            policy: 0
        });
        map.clearOverlays();
        var b = $(".select").val();
        search(oTxt1.value, oTxt2.value, routePolicy[b]);

        function search(start, end, route) {
            transit.setPolicy(route);
            transit.search(start, end);
        }
    })




    oDiv20.onclick = function() {
        i++;
        if (i % 2) {
            play3(oDiv2, 'left', 0);
            play3(this, 'left', 220);
            play3(oDiv201, 'left', -62);
        } else {
            play3(oDiv2, 'left', -100);
            play3(this, 'left', 100);
            play3(oDiv201, 'left', -74);
            play3(oDiv3, 'opacity', 0);
            play3(oDiv, 'opacity', 0);
        }
    }

    let oTxt3 = document.getElementById('txt3');
    oBtn.onclick = function() {
        play3(oDiv4, 'width', 200, function() {
            var busline = new BMap.BusLineSearch(map, {
                renderOptions: {
                    map: map,
                    panel: "ret1"
                },
                onGetBusListComplete: function(result) {
                    if (result) {
                        var fstLine = result.getBusListItem(0); //获取第一个公交列表显示到map上
                        busline.getBusLine(fstLine);
                    }
                }
            });

            function busSearch() {
                var busName = oTxt3.value;
                busline.getBusList(busName);
            }
            setTimeout(function() {
                busSearch();
            }, 1500);
        })
    }




    for (i = 0; i < aLi.length; i++) {
        aLi[0].onclick = function() {
            for (j = 0; j < aLi.length; j++) {
                aLi[j].className = '';
            }
            this.className = 'border-play';
            play3(oDiv0, 'opacity', 70, function() {
                var myCity = new BMap.LocalCity();
                myCity.get(myFun);
            });
        }
        aLi[1].onclick = function() {
            for (j = 0; j < aLi.length; j++) {
                aLi[j].className = '';
            }
            this.className = 'border-play';
            play3(oDiv3, 'opacity', 100, );
        }
        aLi[2].onclick = function() {
            for (j = 0; j < aLi.length; j++) {
                aLi[j].className = '';
            }
            this.className = 'border-play';
            play3(oDiv5, 'height', 300, function() {
                var trans = new BMap.TransitRoute(map, {
                    renderOptions: {
                        map: map,
                        panel: "ret"
                    }
                });
                trans.search(oTxt1.value, oTxt2.value);
            });
        }
        aLi[3].onclick = function() {
            for (j = 0; j < aLi.length; j++) {
                aLi[j].className = '';
            }
            this.className = 'border-play';
            var output = "从" + oTxt1.value + "到" + oTxt2.value + "坐公交需要";
            var searchComplete = function(results) {
                if (transit.getStatus() != BMAP_STATUS_SUCCESS) {
                    return;
                }
                var plan = results.getPlan(0);
                output += plan.getDuration(true) + "\n";
                output += plan.getDistance(true) + "\n";
            }
            var transit = new BMap.TransitRoute(map, {
                renderOptions: {
                    map: map
                },
                onSearchComplete: searchComplete,
                onPolylinesSet: function() {
                    setTimeout(function() {
                        alert(output)
                    }, "1000");
                }
            })
            transit.search(oTxt1.value, oTxt2.value);
        }
        aLi[4].onclick = function() {
            play3(oDiv, 'opacity', 100);
            for (j = 0; j < aLi.length; j++) {
                aLi[j].className = '';
            }
            this.className = 'border-play';
        }


        aLi[5].onclick = function() {
            var subwayCityName = '成都';
            var list = BMapSub.SubwayCitiesList;
            var subwaycity = null;
            for (var c = 0; c < list.length; c++) {
                if (list[c].name === subwayCityName) {
                    subwaycity = list[c];
                    break;
                }
            }
            var subway = new BMapSub.Subway('div6', subwaycity.citycode);
            subway.setZoom(0.5);
            for (j = 0; j < aLi.length; j++) {
                aLi[j].className = '';
            }
            this.className = 'border-play';
        }
    }




    function myFun(result) {
        var cityName = result.name;
        map.setCenter(cityName);
        let string = '当前定位城市:' + cityName;
        play2(string, oDiv0, function() {
            play3(oDiv0, 'font-size', 24);
        });
    }

    var timer1 = null;

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
}