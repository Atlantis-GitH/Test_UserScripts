// ==UserScript==
// @name         Fluffy_Stick_JV
// @author       ImThatGuy, Atlantis
// @description  Utiliser les stickers intégrés JVC (L'animation des stickers a été retiré par JVC).
// @namespace    Fluffy_Stick_JV
// @match        *://www.jeuxvideo.com/messages-prives/nouveau.php*
// @match        *://www.jeuxvideo.com/messages-prives/message.php*
// @match        *://www.jeuxvideo.com/forums/42-*
// @match        *://www.jeuxvideo.com/forums/1-*
// @match        *://www.jeuxvideo.com/forums/0-*
// @match        *://www.jeuxvideo.com/recherche/forums/0-*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/tipso/1.0.8/tipso.min.js
// @grant        GM_addStyle
// @version      0.4.3.v355
// @icon         https://image.jeuxvideo.com/stickers/p/1jnh
// @license      MIT
// ==/UserScript==

/*
StickersJVC.
Code de base par ImThatGuy (2018-2020)

*/


/*jshint multistr: true */
(function() {
    'use strict';

    // IMPORT CSS
    $('head').append('<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/tipso/1.0.8/tipso.min.css"/>');

    // Current div
    var currentDiv = localStorage.getItem('stickersjvc-div');
    //valeur_a_check
    const valeursachecker = ['hap', 'noel', 'autres', 'brid', 'rex', 'fluffy', 'grukk','lamma', 'bud', 'euro', 'larspon'];
    currentDiv = valeursachecker.includes(currentDiv) ? currentDiv : 'brid';
    // LISTS
    var _stickers_hap = [
        "https://image.jeuxvideo.com/stickers/p/1kki",
        "https://image.jeuxvideo.com/stickers/p/1kkn",
        "https://image.jeuxvideo.com/stickers/p/1lmk",
        "https://image.jeuxvideo.com/stickers/p/1kkl",
        "https://image.jeuxvideo.com/stickers/p/1lmh",
        "https://image.jeuxvideo.com/stickers/p/1ljr",
        "https://image.jeuxvideo.com/stickers/p/1kkh",
        "https://image.jeuxvideo.com/stickers/p/1kkk",
        "https://image.jeuxvideo.com/stickers/p/1lmn",
        "https://image.jeuxvideo.com/stickers/p/1ljm",
        "https://image.jeuxvideo.com/stickers/p/1ljl",
        "https://image.jeuxvideo.com/stickers/p/1kkm",
        "https://image.jeuxvideo.com/stickers/p/1rzw",
        "https://image.jeuxvideo.com/stickers/p/1kkj",
        "https://image.jeuxvideo.com/stickers/p/1kkg",
        "https://image.jeuxvideo.com/stickers/p/1ljq"
    ];
    var _stickers_noel = [
        "https://image.jeuxvideo.com/stickers/p/1kkr",
        "https://image.jeuxvideo.com/stickers/p/1kko",
        "https://image.jeuxvideo.com/stickers/p/1kkp",
        "https://image.jeuxvideo.com/stickers/p/1ljj",
        "https://image.jeuxvideo.com/stickers/p/1ljn",
        "https://image.jeuxvideo.com/stickers/p/1kkq",
        "https://image.jeuxvideo.com/stickers/p/1kks",
        "https://image.jeuxvideo.com/stickers/p/1ljo",
        "https://image.jeuxvideo.com/stickers/p/1ljp",
        "https://image.jeuxvideo.com/stickers/p/1kkt",
        "https://image.jeuxvideo.com/stickers/p/1lmm",
        "https://image.jeuxvideo.com/stickers/p/1kku",
        "https://image.jeuxvideo.com/stickers/p/1kkv",
        "https://image.jeuxvideo.com/stickers/p/1mqw",
        "https://image.jeuxvideo.com/stickers/p/1rzs",
        "https://image.jeuxvideo.com/stickers/p/1mqz",
        "https://image.jeuxvideo.com/stickers/p/1nu9",
        "https://image.jeuxvideo.com/stickers/p/1kkg"
    ];
    var _stickers_autres = [
        "https://image.jeuxvideo.com/stickers/p/1lmj",
        "https://image.jeuxvideo.com/stickers/p/1nua",
        "https://image.jeuxvideo.com/stickers/p/1nub",
        "https://image.jeuxvideo.com/stickers/p/1mqv",
        "https://image.jeuxvideo.com/stickers/p/1nu7",
        "https://image.jeuxvideo.com/stickers/p/1lmi",
        "https://image.jeuxvideo.com/stickers/p/1lml",
        "https://image.jeuxvideo.com/stickers/p/1lmo",
        "https://image.jeuxvideo.com/stickers/p/1lmp",
        "https://image.jeuxvideo.com/stickers/p/1mqx",
        "https://image.jeuxvideo.com/stickers/p/1mqy",
        "https://image.jeuxvideo.com/stickers/p/1mr0",
        "https://image.jeuxvideo.com/stickers/p/1mr1",
        "https://image.jeuxvideo.com/stickers/p/1nu6",
        "https://image.jeuxvideo.com/stickers/p/1nu8"
    ];
    var _stickers_brid = [
        "https://image.jeuxvideo.com/stickers/p/1jnd",
        "https://image.jeuxvideo.com/stickers/p/1jnc",
        "https://image.jeuxvideo.com/stickers/p/1jne",
        "https://image.jeuxvideo.com/stickers/p/1jnf",
        "https://image.jeuxvideo.com/stickers/p/1jng",
        "https://image.jeuxvideo.com/stickers/p/1jnh",
        "https://image.jeuxvideo.com/stickers/p/1jni",
        "https://image.jeuxvideo.com/stickers/p/1jnj"
    ];
    var _stickers_rex = [
        "https://image.jeuxvideo.com/stickers/p/1lm9",
        "https://image.jeuxvideo.com/stickers/p/1lma",
        "https://image.jeuxvideo.com/stickers/p/1lmb",
        "https://image.jeuxvideo.com/stickers/p/1lmc",
        "https://image.jeuxvideo.com/stickers/p/1lmd",
        "https://image.jeuxvideo.com/stickers/p/1lme",
        "https://image.jeuxvideo.com/stickers/p/1lmf",
        "https://image.jeuxvideo.com/stickers/p/1lmg"
    ];
    var _stickers_fluffy = [
        "https://image.jeuxvideo.com/stickers/p/1kl8",
        "https://image.jeuxvideo.com/stickers/p/1klb",
        "https://image.jeuxvideo.com/stickers/p/1kl9",
        "https://image.jeuxvideo.com/stickers/p/1kl7",
        "https://image.jeuxvideo.com/stickers/p/1kl5",
        "https://image.jeuxvideo.com/stickers/p/1kl6",
        "https://image.jeuxvideo.com/stickers/p/1kl2",
        "https://image.jeuxvideo.com/stickers/p/1kl1",
        "https://image.jeuxvideo.com/stickers/p/1kl3",
        "https://image.jeuxvideo.com/stickers/p/1kky",
        "https://image.jeuxvideo.com/stickers/p/1kkz",
        "https://image.jeuxvideo.com/stickers/p/1kl4",
        "https://image.jeuxvideo.com/stickers/p/1kl0",
        "https://image.jeuxvideo.com/stickers/p/1kla"
    ];
    var _stickers_grukk = [
        "https://image.jeuxvideo.com/stickers/p/1lgg",
        "https://image.jeuxvideo.com/stickers/p/1lgb",
        "https://image.jeuxvideo.com/stickers/p/1lga",
        "https://image.jeuxvideo.com/stickers/p/1lgc",
        "https://image.jeuxvideo.com/stickers/p/1lgd",
        "https://image.jeuxvideo.com/stickers/p/1lge",
        "https://image.jeuxvideo.com/stickers/p/1lgf",
        "https://image.jeuxvideo.com/stickers/p/1lgh"
    ];
    var _stickers_lamma = [
        "https://image.jeuxvideo.com/stickers/p/1kgx",
        "https://image.jeuxvideo.com/stickers/p/1kgv",
        "https://image.jeuxvideo.com/stickers/p/1kgw",
        "https://image.jeuxvideo.com/stickers/p/1kgy",
        "https://image.jeuxvideo.com/stickers/p/1kgu",
        "https://image.jeuxvideo.com/stickers/p/1kh0",
        "https://image.jeuxvideo.com/stickers/p/1kh1",
        "https://image.jeuxvideo.com/stickers/p/1kgz"
    ];
    var _stickers_bud = [
        "https://image.jeuxvideo.com/stickers/p/zuc",
        "https://image.jeuxvideo.com/stickers/p/zu2",
        "https://image.jeuxvideo.com/stickers/p/zu6",
        "https://image.jeuxvideo.com/stickers/p/zu7",
        "https://image.jeuxvideo.com/stickers/p/zu8",
        "https://image.jeuxvideo.com/stickers/p/zu9",
        "https://image.jeuxvideo.com/stickers/p/zua",
        "https://image.jeuxvideo.com/stickers/p/zub",
        "https://image.jeuxvideo.com/stickers/p/1f88",
        "https://image.jeuxvideo.com/stickers/p/1f89",
        "https://image.jeuxvideo.com/stickers/p/1f8a",
        "https://image.jeuxvideo.com/stickers/p/1f8b",
        "https://image.jeuxvideo.com/stickers/p/1f8d",
        "https://image.jeuxvideo.com/stickers/p/1f8e",
        "https://image.jeuxvideo.com/stickers/p/1f8f"
    ];
    var _stickers_euro = [
        "https://image.jeuxvideo.com/stickers/p/1n1m",
        "https://image.jeuxvideo.com/stickers/p/1n1n",
        "https://image.jeuxvideo.com/stickers/p/1n1t",
        "https://image.jeuxvideo.com/stickers/p/1n1q",
        "https://image.jeuxvideo.com/stickers/p/1n1s",
        "https://image.jeuxvideo.com/stickers/p/1n1o"
    ];
    var _stickers_larspon = [
        "https://image.jeuxvideo.com/stickers/p/1lt9",
        "https://image.jeuxvideo.com/stickers/p/1lte",
        "https://image.jeuxvideo.com/stickers/p/1ltd",
        "https://image.jeuxvideo.com/stickers/p/1li4",
        "https://image.jeuxvideo.com/stickers/p/1jc3-fr",
        "https://image.jeuxvideo.com/stickers/p/1li5",
        "https://image.jeuxvideo.com/stickers/p/1n2d",
        "https://image.jeuxvideo.com/stickers/p/1n2i",
        "https://image.jeuxvideo.com/stickers/p/1n2j",
        "https://image.jeuxvideo.com/stickers/p/1n2m"
    ];




    // FUNCTIONS
    function getCode(element) {
        return element.attr("src").split('/')[5];
    }


    function idTextarea() {
        if (window.location.href.indexOf("jeuxvideo.com/messages-prives/") > -1) {
            return "#message";
        } else {
            return "#message_topic";
        }
    }

    // MAIN APPEND
    var newStickers = '<div id="intstickersbloc" style="position: relative">\
                        <div id="hap" class="new-stickers"></div>\
                        <div id="noel" class="new-stickers"></div>\
                        <div id="autres" class="new-stickers"></div>\
                        <div id="brid" class="new-stickers"></div>\
                        <div id="rex" class="new-stickers"></div>\
                        <div id="fluffy" class="new-stickers"></div>\
                        <div id="grukk" class="new-stickers"></div>\
                        <div id="lamma" class="new-stickers"></div>\
                        <div id="bud" class="new-stickers"></div>\
                        <div id="euro" class="new-stickers"></div>\
                        <div id="larspon" class="new-stickers"></div>\
                      </div>';
    $(newStickers).insertAfter('.jv-editor-toolbar');



    // HIDES
    $(".new-stickers").each(function() {
        if ( $(this).attr("id") != currentDiv ) {
            $(this).hide();
        }
    });

    // APPENDS
    let toolbar = document.querySelector(".jv-editor-toolbar")
    let imgBtnGroup = toolbar.querySelectorAll(".btn-group")[2]
    //btns = imgBtnGroup.querySelectorAll("button")
    let stickersBtn = document.createElement("button")
    stickersBtn.classList.add("btn")
    stickersBtn.classList.add("btn-jv-editor-toolbar")
    stickersBtn.setAttribute("id", "old-stickjvc")
    if (window.location.href.indexOf("jeuxvideo.com/messages-prives/") > -1) {
        //MP
    } else {
        stickersBtn.setAttribute("title", "Stickers intégrés")
    }
    stickersBtn.setAttribute("type", "button")
    stickersBtn.innerHTML = "s"
    stickersBtn.addEventListener('click', function handleClick() {
        loadstickersfull(); //chargement du script premier click
    }, { once: true });
    if (window.location.href.indexOf("jeuxvideo.com/messages-prives/") > -1) {
        stickersBtn.style.textDecoration = "line-through";
        stickersBtn.style.textDecorationThickness = "2px";
    } else {
        //Forum
    }
    stickersBtn.style.lineHeight = "0"
    imgBtnGroup.appendChild(stickersBtn)


    //_Hide_Show__
    $(".new-stickers#"+currentDiv).hide(0);
    $("#old-stickjvc").click(function() {
        if ( $(".new-stickers").is(":visible") ) {
            $(this).removeClass("active");
            $(".new-stickers#"+currentDiv).hide(80);
        } else {
            setTimeout(function() {
                $(this).addClass("active");
                $(".new-stickers#"+currentDiv).show(80);
                $(".new-stickers").css("overflow", "auto");
            }, 100);
        }
    });

    function loadstickersfull() {
        $(".new-stickers").append('<div code="hap" id="hap-css" title="Hap" class="cat-stickers"></div>\
                                   <div code="noel" id="noel-css" title="Noel" class="cat-stickers"></div>\
                                   <div code="autres" id="autres-css" title="Autres" class="cat-stickers"></div>\
                                   <div code="brid" id="brid-css" title="Bridgely" class="cat-stickers"></div>\
                                   <div code="rex" id="rex-css" title="Rex ryder" class="cat-stickers"></div>\
                                   <div code="fluffy" id="fluffy-css" title="Fluffy" class="cat-stickers"></div>\
                                   <div code="grukk" id="grukk-css" title="Grukk" class="cat-stickers"></div>\
                                   <div code="lamma" id="lamma-css" title="Lama" class="cat-stickers"></div>\
                                   <div code="bud" id="bud-css" title="Bud" class="cat-stickers"></div>\
                                   <div code="euro" id="euro-css" title="Euro" class="cat-stickers"></div>\
                                   <div code="larspon" id="larspon-css" title="Larry & Sponsos" class="cat-stickers"></div>');

        // AJOUT STICKERS
        for (var i = 0; i < _stickers_hap.length; i++) {
            $(".new-stickers#hap").append( '<img src="'+_stickers_hap[i]+'" class="stickers-script">' );
        }
        for (var k = 0; k < _stickers_noel.length; k++) {
            $(".new-stickers#noel").append( '<img src="'+_stickers_noel[k]+'" class="stickers-script">' );
        }
        for (var lz = 0; lz < _stickers_autres.length; lz++) {
            $(".new-stickers#autres").append( '<img src="'+_stickers_autres[lz]+'" class="stickers-script">' );
        }
        for (var n = 0; n < _stickers_brid.length; n++) {
            $(".new-stickers#brid").append( '<img src="'+_stickers_brid[n]+'" class="stickers-script">' );
        }
        for (var j = 0; j < _stickers_rex.length; j++) {
            $(".new-stickers#rex").append( '<img src="'+_stickers_rex[j]+'" class="stickers-script">' );
        }
        for (var fff = 0; fff < _stickers_fluffy.length; fff++) {
            $(".new-stickers#fluffy").append( '<img src="'+_stickers_fluffy[fff]+'" class="stickers-script">' );
        }
        for (var gr = 0; gr < _stickers_grukk.length; gr++) {
            $(".new-stickers#grukk").append( '<img src="'+_stickers_grukk[gr]+'" class="stickers-script">' );
        }
        for (var la = 0; la < _stickers_lamma.length; la++) {
            $(".new-stickers#lamma").append( '<img src="'+_stickers_lamma[la]+'" class="stickers-script">' );
        }
        for (var bd = 0; bd < _stickers_bud.length; bd++) {
            $(".new-stickers#bud").append( '<img src="'+_stickers_bud[bd]+'" class="stickers-script">' );
        }
        for (var euo = 0; euo < _stickers_euro.length; euo++) {
            $(".new-stickers#euro").append( '<img src="'+_stickers_euro[euo]+'" class="stickers-script">' );
        }
        for (var lx = 0; lx < _stickers_larspon.length; lx++) {
            $(".new-stickers#larspon").append( '<img src="'+_stickers_larspon[lx]+'" class="stickers-script">' );
        }

        $('.stickers-script').on('contextmenu', function(event) {
           event.preventDefault(); // Bloque le menu clic droit
        });

        // LISTENERS
        function stickersEvent() {
            $(".stickers-script").click(function() {
                // Get sticker code
                var code = getCode( $(this) );
                //$("#message_topic").val($("#message_topic").val() + " [[sticker:p/"+code+"]]");
                var $textarea = jQuery(idTextarea());
                var caretPos = $textarea[0].selectionStart;
                var textAreaTxt = $textarea.val();

                var sticker = "[[sticker:p/"+code+"]]";
                sticker = (caretPos > 0 && textAreaTxt[caretPos - 1] !== ' ' ? " " : "") + sticker + " ";

                $textarea.val(textAreaTxt.substring(0, caretPos) + sticker + textAreaTxt.substring(caretPos) );
                const changeEvent = new Event('change');
                $textarea[0].dispatchEvent(changeEvent);
                $textarea.focus();
            });
        }
        stickersEvent();

        $(".cat-stickers").click(function() {
            var id = $(this).attr("code");
            // Sauvegarde du choix dans le localStorage
            localStorage.setItem('stickersjvc-div', id);
            $(".new-stickers").each(function() {
                if ( $(this).attr("id") == id ) {
                    $(this).show();
                    if (currentDiv != id) {
                        $("#"+currentDiv).hide();
                        currentDiv = id;
                    }
                }
            });
        });

        // NICE SCROLL
        var lastScrollTop = 0;
        $(".new-stickers").scroll(function() {
            var st = $(this).scrollTop();
            // Masquer dès qu'on commence à descendre
            if (st > lastScrollTop) {
                $(".cat-stickers").hide();
            }
            // Afficher seulement si on est revenu tout en haut
            else if (st === 0) {
                $(".cat-stickers").show();
            }
            // Mise à jour du dernier scroll pour détecter la direction
            lastScrollTop = st;
        });

        // TOOLTIPS
        $(document).ready(function() {
            $(".cat-stickers").each(function() {
                $(this).tipso({
                    delay: 0,
                    speed: 120,
                    background: "rgba(0, 0, 0, 0.7)",
                    size: 'tiny',
                    content: '<b>'+$(this).attr("title")+'</b>',
                    width: null,
                    maxWidth: "150px"
                });
            });
        });
    }

    // CSS
    // Scrollbar_personalise(chromium)
    if (!navigator.userAgent.includes("Firefox")) {
        GM_addStyle(`.new-stickers::-webkit-scrollbar-track { -webkit-box-shadow: inset 0 0 3px rgba(0,0,0,0.2); background-color: #f7f7f7; }
                     .new-stickers::-webkit-scrollbar { width: 9px; background-color: #F5F5F5; }
                     .new-stickers::-webkit-scrollbar-thumb { background-color: #ccc; }`);
    }

    GM_addStyle(`.stickers-script { height: 50px; width: 50px; cursor: pointer; padding: 2px; }

                 .cat-stickers:hover { border: none; }

                 .cat-stickers#hap-css { left: 5px; background-image: url('https://image.jeuxvideo.com/stickers/p/1kki'); }
                 .cat-stickers#noel-css { left: 30px; background-image: url('https://image.jeuxvideo.com/stickers/p/1kkr'); }
                 .cat-stickers#autres-css { left: 55px; background-image: url('https://image.jeuxvideo.com/stickers/p/1mqv'); }
                 .cat-stickers#brid-css { left: 80px; background-image: url('https://image.jeuxvideo.com/stickers/p/1jnh'); }
                 .cat-stickers#rex-css { left: 105px; background-image: url('https://image.jeuxvideo.com/stickers/p/1lme'); }
                 .cat-stickers#fluffy-css { left: 130px; background-image: url('https://image.jeuxvideo.com/stickers/p/1kl8'); }
                 .cat-stickers#grukk-css { left: 155px; background-image: url('https://image.jeuxvideo.com/stickers/p/1lgg'); }
                 .cat-stickers#lamma-css { left: 180px; background-image: url('https://image.jeuxvideo.com/stickers/p/1kgx'); }
                 .cat-stickers#bud-css { left: 205px; background-image: url('https://image.jeuxvideo.com/stickers/p/1f8a'); }
                 .cat-stickers#euro-css { left: 230px; background-image: url('https://image.jeuxvideo.com/stickers/p/1n1m'); }
                 .cat-stickers#larspon-css { left: 255px; background-image: url('https://image.jeuxvideo.com/stickers/p/1lte'); }

                 /* Script title */
                 .script-title { font-family: 'robotoboldcondensed', Arial, Helvetica, sans-serif; text-transform: uppercase; font-size: 0.75rem; color: #656574; }

                 /* Stickers panel */
                 .new-stickers { border-top: 1px solid #ccc; padding: 2px; margin-top: 8px; height: 75px; transition: background-color 0.1s; overflow: auto; text-align: center; padding-top: 10px; scroll-behavior: smooth; }

                 /* Catégories */
                 .cat-stickers { position: absolute; top: -8px; background-color: #E6E6E6; box-shadow: 0px 2px 2px #e0e0e0; border: 1px solid #ccc; border-radius: 50px; height: 16px; width: 16px; cursor: pointer; background-size: cover; background-repeat: no-repeat; background-position: center center; }

                 /* Hover stickers */
                 .stickers-script:hover { background-color: rgba(185, 185, 185, 0.5); border-radius: 3px; }

                 /* Hover cat */
                 .cat-stickers:hover { box-shadow: 0px 2px 8px #b5b5b5; }`);

    if (document.URL.includes("jeuxvideo.com/messages-prives")){
        GM_addStyle(`.stickers-script:hover { filter: grayscale(100%); }`);
    }



})();
