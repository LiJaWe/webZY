window.onload = function() {
    let oTxt1 = document.querySelector('.txt1');
    oTxt1.onclick = function() {
        oTxt1.placeholder = '';
    }
    let obtn1 = document.querySelector('.btn1');
    let op1 = document.querySelector('.p1');
    let A = ['怪兽威利', '大老爹', '圣诞老人'];
    let B = ['迪士尼乐园', '救助站', '白宫'];
    let C = ['自燃了', '在人行道化成了一坨泥', '变成一条鼻涕虫爬走了'];
    var A1 = random(A);
    var B1 = random(B);
    var C1 = random(C);
    let value = oTxt1.value;

    function random(arr) {
        var i = Math.floor(Math.random() * arr.length);
        return arr[i];
    }
    obtn1.onclick = function() {
        var A2 = random(A);
        var B2 = random(B);
        var C2 = random(C);
        var value1 = oTxt1.value;
        if (op1.style.opacity != '1') {
            op1.style.opacity = '1';
            let a = /a/g;
            op1.innerHTML = op1.innerHTML.replace(a, A1);
            op1.innerHTML = op1.innerHTML.replace('b', B1);
            op1.innerHTML = op1.innerHTML.replace('c', C1);
            if (oTxt1.value == '') {
                op1.innerHTML = op1.innerHTML.replace('李雷', '李雷');
            } else {
                op1.innerHTML = op1.innerHTML.replace('李雷', oTxt1.value);
            }
        } else {
            var A11 = eval('/' + A1 + '/g');
            op1.innerHTML = op1.innerHTML.replace(A11, A2);
            op1.innerHTML = op1.innerHTML.replace(B1, B2);
            op1.innerHTML = op1.innerHTML.replace(C1, C2);
            if (value1 == '') {
                op1.innerHTML = op1.innerHTML.replace('李雷', '李雷');
            } else {
                if (value == '') {
                    op1.innerHTML = op1.innerHTML.replace('李雷', value1);
                } else {
                    op1.innerHTML = op1.innerHTML.replace(value, value1);
                }
                value = value1;
            }
        }
        A1 = A2;
        B1 = B2;
        C1 = C2;
    }
    let oDiv2 = document.querySelector('.div12');
    let aCheck = oDiv2.getElementsByTagName('input');
    for (i = 0; i < aCheck.length; i++) {
        aCheck[0].checked = true;
        aCheck[i].onclick = function() {
            for (j = 0; j < aCheck.length; j++) {
                aCheck[j].checked = false;
            }
            this.checked = true;
        }
    }
}