window.onload = function() {
    let oText1 = document.querySelector('.text1');
    let oText2 = document.querySelector('.text2');
    let oText3 = document.querySelector('.text3');
    let oText4 = document.querySelector('.text4');
    let oBtn1 = document.querySelector('.btn1');
    let oBtn2 = document.querySelector('.btn2');
    let oBtn3 = document.querySelector('.btn3');
    let oBtn4 = document.querySelector('.btn4');
    oBtn1.onclick = function() {
        var str1 = /^\w{4,16}$/;
        if (str1.test(oText1.value) == true) {
            alert('符合数字，字母，下划线，减号标准:/^\w{4,16}$/');
        } else {
            alert('不符合数字，字母，下划线，减号标准:/^\w{4,16}$/');
        }
    }
    oBtn2.onclick = function() {
        var str2 = /^(?=.*?[a-z]+)(?=.*?[A-Z]+)(?=.*?\d+)(?=.*?[#?!@$%^&*-]+).{6,}$/;
        if (str2.test(oText2.value) == true) {
            alert('符合至少1个大写，1个小写字母，1个数字，1个特殊字符标准:/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[#?!@$%^&*-]).{6,}$/');
        } else {
            alert('不符合至少1个大写，1个小写字母，1个数字，1个特殊字符标准:/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[#?!@$%^&*-]).{6,}$/');
        }
    }
    oBtn3.onclick = function() {
        var str3 = /^(0\d{2,3}-)?[1-9]\d{7}(-\d{1,5})?$/;
        if (str3.test(oText3.value) == true) {
            alert('符合标准:/(0\d{2,3}-)?[1-9]\d{7}(-\d{1,5})?/');
        } else {
            alert('不符合标准:/(0\d{2,3}-)?[1-9]\d{7}(-\d{1,5})?/');
        }
    }
    oBtn4.onclick = function() {
        var str4 = /^\w+@[0-9a-z]+\.[a-z]+$/i;
        if (str4.test(oText4.value) == true) {
            alert('符合标准:/^\w+@[0-9a-z]+\.[a-z]+$/i');
        } else {
            alert('不符合标准:/^\w+@[0-9a-z]+\.[a-z]+$/i');
        }
    }
}