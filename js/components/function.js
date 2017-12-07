"use strict";
var d = d || {};
d = (() => {

    const ui = {};

    ui.init = () => {
        ui.sys.init();
        ui.navigate.init();
    }
    ui.ref = {
        _imgFolder: './assets/images/',
        _siteHolder: '.screen',
        _menuTrigger: 'mob-menu',
        _menuPanel: 'd-menu',
        _mobileMenuWrapper: 'mob-menu-wrapper',
        _lion: 'home-lion',
        _geoLocation: null
    }

    ui.navigate = {
        init: () => {
            $(document).on('click touchstart', '.nav-item', (e) => {
                var _closeView = $('body').attr('data-screen')
                var _id = $(e.target).prop('id')
                ui.navigate.closeScreen(_closeView, _id)
            })

            ui.navigate.stateChange()
        },
        stateChange: () => {
            function change(state) {
                if ($('body').attr('data-prev-page')) {
                    var _closeView = $('body').attr('data-screen');
                    var _id = 'nav-' + $('body').attr('data-prev-page');
                    ui.navigate.closeScreen(_closeView, _id);
                }
            }

            $(window).on("popstate", (e) => {
                change(e.originalEvent.state);
            });
        },
        closeScreen: (_closeView, _id) => {
            switch (_closeView + '-' + _id) {
                case ('home-nav-stack'):
                    //home page to stack page
                    d.home.closer.lionCloseNext.init().then(() => {
                        $('body').attr('data-prev-page', 'home').addClass('view-stack')
                        history.pushState('', '', '');
                        d.stack.init();
                    })
                    break;
                case ('home-nav-showcase'):
                    //home page to showcase page
                    d.home.closer.lionCloseNext.init().then(() => {
                        $('body').attr('data-prev-page', 'home').addClass('view-showcase');
                        history.pushState('', '', '');
                        d.showcase.init();
                    })
                    break;
                case ('home-nav-talk'):
                    //home page to showcase page
                    d.home.closer.talkNext.init().then(() => {
                        $('body').attr('data-prev-page', 'home').addClass('view-talk');
                        history.pushState('', '', '');
                        d.talk.init();
                    })
                    break;
                case ('home-nav-about'):
                    //home page to about page
                    d.home.closer.lionCloseNext.init().then(() => {
                        $('body').attr('data-prev-page', 'home').addClass('view-about');
                        history.pushState('', '', '');
                        d.about.init();
                    })
                    break;
                case ('stack-nav-home'):
                    //stack page to home page
                    d.stack.closer.homeNext().then(() => {
                        $('body').attr('data-prev-page', 'stack').addClass('view-home')
                        history.pushState('', '', '');
                        d.home.init();
                    })
                    break;
                case ('stack-nav-showcase'):
                    //stack page to stack page
                    d.stack.closer.homeNext().then(() => {
                        $('body').attr('data-prev-page', 'stack').addClass('view-showcase');
                        history.pushState('', '', '');
                        d.showcase.init();
                    })
                    break;
                case ('stack-nav-talk'):
                    //stack page to talk page
                    d.stack.closer.homeNext().then(() => {
                        $('body').attr('data-prev-page', 'stack').addClass('view-talk');
                        history.pushState('', '', '');
                        d.talk.init();
                    })
                    break;
                case ('stack-nav-about'):
                    //stack page to about page
                    d.stack.closer.homeNext().then(() => {
                        $('body').attr('data-prev-page', 'stack').addClass('view-about');
                        history.pushState('', '', '');
                        d.about.init();
                    })
                    break;
                case ('showcase-nav-home'):
                    //home page to showcase page
                    d.showcase.closer.homeNext.init().then(() => {
                        $('body').attr('data-prev-page', 'showcase').addClass('view-home');
                        history.pushState('', '', '');
                        d.home.init();
                    })
                    break;
                case ('showcase-nav-stack'):
                    //home page to showcase page
                    d.showcase.closer.homeNext.init().then(() => {
                        $('body').attr('data-prev-page', 'showcase').addClass('view-stack');
                        history.pushState('', '', '');
                        d.stack.init();
                    })
                    break;
                case ('showcase-nav-talk'):
                    //showcase page to talk page
                    d.showcase.closer.homeNext.init().then(() => {
                        $('body').attr('data-prev-page', 'showcase').addClass('view-talk');
                        history.pushState('', '', '');
                        d.talk.init();
                    })
                    break;
                case ('showcase-nav-about'):
                    //showcase page to about page
                    d.showcase.closer.homeNext.init().then(() => {
                        $('body').attr('data-prev-page', 'showcase').addClass('view-about');
                        history.pushState('', '', '');
                        d.about.init();
                    })
                    break;
                case ('talk-nav-home'):
                    //home page to showcase page
                    d.talk.closer.homeNext().then(() => {
                        $('body').attr('data-prev-page', 'talk').addClass('view-home');
                        history.pushState('', '', '');
                        d.home.init();
                    })
                    break;
                case ('talk-nav-stack'):
                    ///talk to me page to stack page
                    d.talk.closer.homeNext().then(() => {
                        $('body').attr('data-prev-page', 'talk').addClass('view-stack');
                        history.pushState('', '', '');
                        d.stack.init();
                    })
                    break;
                case ('talk-nav-showcase'):
                    //talk to me page to showcase page
                    d.talk.closer.homeNext().then(() => {
                        $('body').attr('data-prev-page', 'talk').addClass('view-stack');
                        history.pushState('', '', '');
                        d.showcase.init();
                    })
                    break;
                case ('talk-nav-about'):
                    //talk to me page to about page
                    d.talk.closer.homeNext().then(() => {
                        $('body').attr('data-prev-page', 'talk').addClass('view-about');
                        history.pushState('', '', '');
                        d.about.init();
                    })
                    break;
                case ('about-nav-home'):
                    //about to me page to home page
                    d.about.closer().then(() => {
                        $('body').attr('data-prev-page', 'about').addClass('view-home');
                        history.pushState('', '', '');
                        d.home.init();
                    })
                    break;
                case ('about-nav-stack'):
                    //about to me page to stack page
                    d.about.closer().then(() => {
                        $('body').attr('data-prev-page', 'about').addClass('view-stack');
                        history.pushState('', '', '');
                        d.stack.init();
                    })
                    break;
                case ('about-nav-showcase'):
                    //about to me page to showcase page
                    d.about.closer().then(() => {
                        $('body').attr('data-prev-page', 'about').addClass('view-showcase');
                        history.pushState('', '', '');
                        d.showcase.init();
                    })
                    break;
                case ('about-nav-talk'):
                    //about to me page to talk page
                    d.about.closer().then(() => {
                        $('body').attr('data-prev-page', 'about').addClass('view-talk');
                        history.pushState('', '', '');
                        d.talk.init();
                    })
                    break;
                default:
                    return false;
            }
        }
    }

    ui.sys = {
        init: () => {
            //adding class in body for css support for device specific
            ui.sys.deviceConstructor()
            $(window).resize(() => {
                ui.sys.deviceConstructor()
            })

        },
        MediaTypes: {
            desktop: 'only screen and (min-width: 1025px)',
            tablet: 'only screen and (min-width: 640px) and (max-width: 1024px)',
            mobile: 'only screen and (max-width: 639px)',
            all: ' '
        },
        deviceConstructor: () => {
            //remove setclass on resize
            $('body').removeClass('ui-desktop ui-tablet ui-mobile');
            for (var mediaType in ui.sys.MediaTypes) {

                if (window.matchMedia(ui.sys.MediaTypes[mediaType]).matches && ui.sys.MediaTypes[mediaType] != " ") {
                    $('body').addClass('ui-' + mediaType)
                    $('body').attr('data-media', mediaType)
                }
            }
        },
        layoutType: (passedfunctions, _deviceProp) => {
            //fucntion to check wat device the user is viewing
            if (window.matchMedia(ui.sys.MediaTypes[_deviceProp]).matches) {
                passedfunctions()
            }
        },
        cssSelector: (el) => {
            return "." + el
        },
        idSelector: (id) => {
            return '#' + id
        },
        randomNo: (v) => {
            return Math.floor(Math.random() * v);
        }
    }

    //preloader on initial page load
    ui.preload = {
        _progressPanel: '.progress',
        _preloadWrap: '.preloader-wrap',
        _loadEl: [
            ui.ref._imgFolder + 'lion.svg',
            ui.ref._imgFolder + 'sprite-main.png',
            ui.ref._imgFolder + 'alliontechnologies.jpg',
            ui.ref._imgFolder + 'blyco.jpg',
            ui.ref._imgFolder + 'cincottachemist.jpg',
            ui.ref._imgFolder + 'dicksmithelectronics.jpg',
            ui.ref._imgFolder + 'fischersports.jpg',
            ui.ref._imgFolder + 'intersport.jpg',
            ui.ref._imgFolder + 'jaxtyres.jpg',
            ui.ref._imgFolder + 'jimlawrence.jpg',
            ui.ref._imgFolder + 'orangeparts.jpg',
            ui.ref._imgFolder + 'printbuddy.jpg',
            ui.ref._imgFolder + 'srilankatravelers.jpg',
            ui.ref._imgFolder + 'swisssense.jpg',
            ui.ref._imgFolder + 'theathletesfoot.jpg',
            ui.ref._imgFolder + 'zumex.jpg',
            ui.ref._imgFolder + 'ism.jpg',
            ui.ref._imgFolder + 'oldportfolio.jpg',
            ui.ref._imgFolder + 'orangeparts.jpg',
            ui.ref._imgFolder + 'primera.jpg',
            ui.ref._imgFolder + 'printbuddy.jpg',
            ui.ref._imgFolder + 'pro-pic.jpg',
        ],
        init: () => {
            var step = Math.round((100 / ui.preload._loadEl.length));
            var baseWidth = 0;
            var completeWidth = 0;
            $.each(ui.preload._loadEl, (i, el) => {
                let img = new Image();
                img.src = el;

                //load this element
                img.onload = (event) => {
                    //set current Width of the progress bar
                    baseWidth += step;
                    //once loaded, animate the progress bar
                    $(ui.preload._progressPanel).animate({
                        width: baseWidth + '%'
                    }, 300, "linear", () => {
                        completeWidth += step;
                        if (completeWidth > 100) {
                            d.home.init();
                            completeWidth = 0;
                        }
                    })
                }
            })
        },
        clearPreload: () => {
            $('body').addClass('view-home');
            $(d.preload._preloadWrap).fadeOut(300, () => {
                $(d.preload._preloadWrap).remove();
            })
        }
    }

    return ui;

})();

$(() => {
    $(document).ready(() => {
        $("html").removeClass("no-js"); /*To detect javascript*/
        d.preload.init();
        d.init();
    })
});