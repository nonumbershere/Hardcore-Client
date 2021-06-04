// ==UserScript==
// @name         𝗛𝗔𝗥𝗗𝗖𝗢𝗥𝗘 CS:GO CLICKER HACK | FIXED
// @namespace    http://mtsl.dk/csgo/
// @version      1.9
// @description  Hack Currently Working
// @author       l
// @match        http://mtsl.dk/csgo/*
// @match        https://mtsl.dk/csgo/*
// @grant        none
// ==/UserScript==

(function () {
    var s_Title_1 = String.raw `
 ██░ ██  ▄▄▄       ██▀███  ▓█████▄
▓██░ ██▒▒████▄    ▓██ ▒ ██▒▒██▀ ██▌
▒██▀▀██░▒██  ▀█▄  ▓██ ░▄█ ▒░██   █▌
░▓█ ░██ ░██▄▄▄▄██ ▒██▀▀█▄  ░▓█▄   ▌
░▓█▒░██▓ ▓█   ▓██▒░██▓ ▒██▒░▒████▓
 ▒ ░░▒░▒ ▒▒   ▓▒█░░ ▒▓ ░▒▓░ ▒▒▓  ▒
 ▒ ░▒░ ░  ▒   ▒▒ ░  ░▒ ░ ▒░ ░ ▒  ▒
 ░  ░░ ░  ░   ▒     ░░   ░  ░ ░  ░
 ░  ░  ░      ░  ░   ░        ░
                            ░
`
    var s_Title_2 = String.raw `
 ▄████▄   ▒█████   ██▀███  ▓█████
▒██▀ ▀█  ▒██▒  ██▒▓██ ▒ ██▒▓█   ▀
▒▓█    ▄ ▒██░  ██▒▓██ ░▄█ ▒▒███
▒▓▓▄ ▄██▒▒██   ██░▒██▀▀█▄  ▒▓█  ▄
▒ ▓███▀ ░░ ████▓▒░░██▓ ▒██▒░▒████▒
░ ░▒ ▒  ░░ ▒░▒░▒░ ░ ▒▓ ░▒▓░░░ ▒░ ░
  ░  ▒     ░ ▒ ▒░   ░▒ ░ ▒░ ░ ░  ░
░        ░ ░ ░ ▒    ░░   ░    ░
░ ░          ░ ░     ░        ░  ░
░
`


    var btu = document.createElement('div');
    btu.innerHTML = '<div style="width: 40px;height: 40px; position: absolute;transition: all 1s ease 0s;left: 850px;border-radius:100%;top: 291px;cursor: pointer;"></div>'
    btu.children[0].style.background = '#bd3333'
    var i = document.createElement("div");
    i.style.width = '500px';
    i.style.height = '500px';
    i.style.background = '#fd346c';
    i.style.position = 'absolute'
    i.style.left = '866px'
    i.style.color = 'white';
    i.style.transition = '1s';
    i.id = 'menu_Hack'
    // userdata.money
    var _modules = {
        pastCash: 0
    }

    function get(what) {
        return document.getElementById(what);
    }
    var bod = document.createElement('div');
    i.prepend(bod);
    var autoclicker = false;
    var autocl = null;
    document.querySelector("#click_cookie_m").onclick = function () {
        if (autoclicker) {
            var i = Math.random(Math.floor(1)).toString();
            i = i.slice(0, 4);
            //console.log(i);
            document.getElementById("overlay").innerHTML = '<div id="overlay"><div class="fadeup" style="left: 445.367px; top: 122.909px;">+ ' + i + '€</div></div>';
            setTimeout(() => {
                document.getElementById("overlay").innerHTML = ''
            }, 1000);
            window.userdata.money = window.userdata.money + 1
        }
    }

    function toggleAutoClicker() {

        autoclicker = !autoclicker;
        if (autoclicker) {
            autocl = setInterval(() => {
                document.querySelector("#click_cookie_m").click();
            }, 500);
        } else {
            clearInterval(autocl);
        }
    }
    bod.innerHTML = `<style>
   #menu_Hack button {
       box-shadow: none;
    background: blue;
    border-style: none;
    color: white;
    border-radius: 19px;
    cursor: pointer;
    transition: 0.3s;
    }
   #menu_Hack button:hover {
        background: #0a2a9c;
    transition: 0.3s;
    }
</style><center><h1>HardCore Hack</h1></center><button id = "toggle_btu_1">Infinite Money [OFF]</button><button onclick="userdata.money = 0">Clear Money</button><button id="autoclicker">Auto Clicker [OFF]</button><p style="left: 1282px;position: fixed;bottom: 0px;font-weight: bold;color: #650000;">By Lapide</p>`
    i.style.fontFamily = 'Arial'
    // get("
    document.body.insertBefore(i, document.body.lastChild);
    setInterval(() => {
        i.style.height = innerHeight + "px";
    });
    var g = false;
    var pastCash = 0;
    var ls = localStorage;
    get("autoclicker").addEventListener("click", function () {
        toggleAutoClicker();
        if (autoclicker) {
            get("autoclicker").innerText = "Auto Clicker [ON]";
        } else {
            get("autoclicker").innerText = "Auto Clicker [OFF]";
        }
    });
    get("toggle_btu_1").addEventListener("click", function () {
        g = !g;
        if (g) {
            get("toggle_btu_1").innerText = "Infinite Money [ON]"
            pastCash = window.userdata.money;
            window.userdata.money = Infinity
            //  get('toggle_btu_1').innerHTML=''
        } else {
            get("toggle_btu_1").innerText = "Infinite Money [OFF]"
            window.userdata.money = pastCash
        }
    });
    document.body.insertBefore(btu, document.body.lastChild);
    btu.addEventListener('mouseenter', function () {
        btu.children[0].style.background = 'red';
    });
    btu.addEventListener('mouseout', function () {
        btu.children[0].style.background = '#bd3333';
    });
    // 1323px
    var is_Active = false;
    btu.onclick = function () {
        is_Active = !is_Active;
        if (is_Active) {
            i.style.width = '20px';
            i.style.left = '1346px';
            btu.children[0].style.left = '1323px';
            bod.remove();
        } else {
            i.style.width = '500px';
            i.style.left = '866px'
            btu.children[0].style.left = '850px';
            i.prepend(bod);
        }
    }
    console.hardcore = {
        success: function (msg) {
            console.log("%c" + msg, 'color:lightgreen');
        }
    }
    console.clear();
    console.log('%c' + s_Title_1 + "%c" + s_Title_2, "color:red", 'color:yellow');
    console.hardcore.success('Injected!');
})();
