window.onload = function() {
    let oTxt = document.querySelector('.txt');
    let oBtn = document.querySelector('.btn1');
    var oLast = document.querySelector('.Lastnumber');
    var oFaluse = document.querySelector('.faluse');
    var oJudge = document.querySelector('.judge');
    var oDiv1 = document.querySelector('.div1');
    oBtn.onclick = bijiao;
    let num = Math.ceil(Math.random() * 100);
    var i = 0;

    function bijiao() {
        i++;
        oLast.className = 'block Lastnumber';
        oTxt.value == '' ? oLast.textContent += '0' + ' ' : oLast.textContent += oTxt.value + ' ';
        oFaluse.style.color = '#fff';
        if (i == 10) {
            oFaluse.innerHTML = '!!!GAME OVER!!!'
            oFaluse.style.backgroundColor = ' rgb(241, 143, 62)';
            oBtn.disabled = true;
            oTxt.disabled = true;
            play();
        } else {
            if (oTxt.value != num) {
                oFaluse.innerHTML = '很遗憾，你猜错了！'
                oFaluse.style.backgroundColor = ' rgb(241, 143, 62)';
                if (oTxt.value > num) {
                    oJudge.innerHTML = '刚才你猜高了!';
                } else {
                    oJudge.innerHTML = '刚才你猜低了！';
                }
            } else {
                oFaluse.innerHTML = '恭喜你！猜对了!';
                oFaluse.style.backgroundColor = 'rgba(77, 211, 77, 0.705)';
                oJudge.innerHTML = '';
                oBtn.disabled = true;
                oTxt.disabled = true;
                play();
                let a = Math.ceil(Math.random() * 100);
                num = a;
                return num;
            }
            oTxt.value = '';
        }
    }

    function play() {
        oBtn.disabled = true;
        oTxt.disabled = true;
        let oNewGame = document.createElement('input');
        oNewGame.type = 'button';
        oNewGame.value = '开始新游戏';
        oNewGame.className = 'btn1 NewGame';
        oDiv1.append(oNewGame);
        oNewGame.onclick = function() {
            i = 0;
            oBtn.disabled = false;
            oTxt.disabled = false;
            oTxt.value = '';
            oLast.className = 'none Lastnumber';
            oLast.textContent = '上次猜的数: ';
            oFaluse.innerHTML = '';
            oJudge.innerHTML = '';
            oFaluse.removeAttribute('style');
            oDiv1.removeChild(oNewGame);
        }
    }
}