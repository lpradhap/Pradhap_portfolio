d.home = (() => {
    const h = {};

    h.init = () => {

        $('body').addClass('view-home').removeClass('view-showcase view-stack view-talk view-about').attr('data-screen', 'home');

        if ($(d.preload._progressPanel).length) {
            d.preload.clearPreload();
        }
        h.location.init();
        h.deviceInit();
    }

    h.deviceInit = () => {

        d.sys.layoutType(() => {
            $.when(h.lion()).then(() => {
                h.particlesBg();
                h.addName.d();
                h.socialMedia.d();
                h.menu.desktopInit();
            })
        }, 'desktop')

        d.sys.layoutType(() => {
            $.when(h.lion()).then(() => {
                h.particlesBg();
                h.addName.t();
                h.socialMedia.d();
                h.menu.tabletInit();
            })
        }, 'tablet')

        d.sys.layoutType(() => {
            $.when(h.lion()).then(() => {
                h.addName.m();
                h.particlesBg();
                h.menu.mobileInit();
            })
        }, 'mobile')

    }

    h.location = {
        _panel: 'job',
        _trigger: 'job-info',
        init: () => {
            if (d.ref._geoLocation == null) {
                $.ajax({
                    url: "https://geoip-db.com/jsonp",
                    jsonpCallback: "callback",
                    dataType: "jsonp",
                    success: function(location) {
                        d.ref._geoLocation = location.country_name;
                        if (location.country_name == "Australia") {

                            h.location.showMsg();
                        }
                    }
                });
            } else {
                if (d.ref._geoLocation == "Australia") {
                    h.location.showMsg();
                }
            }


            h.location.events()
        },
        showMsg: () => {


            $('body').append('<div class="' + h.location._trigger + '"><div class="' + h.location._panel + '"> ' + d.cms.jobMsg + '</div></div>')
        },
        events: () => {
            $(document).off('click', d.sys.cssSelector(h.location._trigger))
            $(document).on('click', d.sys.cssSelector(h.location._trigger), () => {
                h.location.locationMsgShow();
            })
            $(document).on('click', '.contactNow', () => {
                $('#nav-talk').trigger('click');
            })
        },
        locationMsgShow: () => {
            $(d.sys.cssSelector(h.location._panel)).toggleClass('active')
            if ($(d.sys.cssSelector(h.location._panel)).hasClass('active')) {
                $(d.sys.cssSelector(h.location._panel)).fadeIn(100)
            } else {
                $(d.sys.cssSelector(h.location._panel)).fadeOut(100)
            }
        }

    }

    h.lion = () => {

        var dfd = $.Deferred();
        var content = "<div id='" + d.ref._lion + "'  class='" + d.ref._lion + "' ></div>";
        $(d.ref._siteHolder).append(content);
        $('#' + d.ref._lion).load(d.ref._imgFolder + 'lion.svg', () => {
            var count = 150;
            for (var i = 0; i < count; i++) {
                $('path:nth-child(' + i + ')').delay(d.sys.randomNo(2500)).fadeIn();
                if ((i + 1) == count) {
                    dfd.resolve()
                }
            }
        });
        return dfd.promise();
    }
    h.particlesBg = () => {

        $(d.sys.cssSelector(d.ref._lion)).prepend("<div id='particle-target'></div>");
        var particles = {
            dotColor: '#71801c',
            lineColor: '#71801c',
            density: 50000,
            parallax: true
        };
        var particleDensity;
        var options = {
            effectWeight: 1,
            outerBuffer: 1.05,
            elementDepth: 200,
            perspectiveMulti: 1.5,
            enableSmoothing: true,
            onInit: function() {
                $('#particle-target').particleground(particles);
            }
        };

        $(d.sys.cssSelector(d.ref._lion)).logosDistort(options);
    }
    h.addName = {
        d: () => {
            if (!$('h1').length) {
                $(d.ref._siteHolder).append(d.cms.common_name_placeholder);
            }
            $('.name-panel span:first-child').fadeIn(2000)
            $('.name-panel span:last-child').fadeIn(2000)
            $('h1 .slogan, .view-home .name-panel>span:first-child:before').delay(2000).fadeIn(800)
            setTimeout(() => {
                $('.view-home .name-panel>span:first-child').delay(2000).addClass('show-welcome')
            }, 2000)

        },
        t: () => {
            if (!$('h1').length) {
                $(d.ref._siteHolder).append(d.cms.common_name_placeholder);
            }

            $('.name-panel span:first-child').fadeIn(2000)
            $('.name-panel span:last-child').fadeIn(2000)
            $('h1 .slogan').delay(2000).fadeIn(800)
            setTimeout(() => {
                $('.view-home .name-panel>span:first-child').delay(2000).addClass('show-welcome')
            }, 2000)
        },
        m: () => {
            if (!$('h1').length) {
                $('body').append(d.cms.mobile_name_placholder);
            }
            $('h1').delay('1000').animate({
                bottom: 0
            }, 200)

        }
    }
    h.socialMedia = {
        d: () => {
            if (!$('.sm-icn').length) {
                $(d.ref._siteHolder).append(d.cms.social_media_links);
                $('.linkedin.sm-icn').delay(1000).animate({
                    right: 20
                }, 200)
                $('.stackoverflow.sm-icn').delay(1000).animate({
                    right: 20
                }, 100)
                $('.github.sm-icn').delay(1000).animate({
                    right: 20
                }, 250)
            }

        },
        m: () => {
            if (!$('.sm-icn').length) {
                $(d.ref._siteHolder).append(d.cms.social_media_links);
                $('.linkedin.sm-icn').delay(1000).animate({
                    right: 20
                }, 200)
                $('.stackoverflow.sm-icn').delay(1000).animate({
                    right: 20
                }, 100)
                $('.github.sm-icn').delay(1000).animate({
                    right: 20
                }, 250)
            }
        }
    }

    h.menu = {
        desktopInit: () => {
            h.menu.appendMenu();
            h.menu.d_showMenu();
        },
        tabletInit: () => {
            h.menu.appendMenu();

            $(d.sys.cssSelector(d.ref._menuTrigger)).delay('1400').animate({
                left: 0
            }, 400);


            if (!$('body').attr('data-prev-page')) {
                $(document).on('click', '.mob-menu', (e) => {

                    let _this = e.target;
                    if ($(_this).hasClass('active')) {
                        $(_this).removeClass('active')
                        $(d.sys.cssSelector(d.ref._menuPanel)).animate({
                            left: 1200
                        }, 400)

                    } else {
                        $(d.sys.cssSelector(d.ref._menuPanel)).show().animate({
                            left: 60
                        }, 400);
                        $(_this).addClass('active')
                    }

                })
            }


        },
        mobileInit: () => {
            h.menu.appendMenu();
            $(d.sys.cssSelector(d.ref._menuPanel)).appendTo('body').wrap('<div class="' + d.ref._mobileMenuWrapper + '">')

            $(d.sys.cssSelector(d.ref._menuTrigger)).delay('1400').animate({
                right: 0
            }, 400);

            $(d.sys.cssSelector(d.ref._mobileMenuWrapper)).append(d.cms.social_media_links);

            if (!$('body').attr('data-prev-page')) {
                $(document).on('click', '.mob-menu', (e) => {

                    var _this = e.target;

                    if ($(_this).hasClass('active')) {

                        $(_this).removeClass('active')

                        $(d.sys.cssSelector(d.ref._mobileMenuWrapper)).animate({
                            left: '100%'
                        }, 400)

                        $('body').removeClass('active-menu')

                    } else {

                        $(d.sys.cssSelector(d.ref._mobileMenuWrapper)).show().animate({
                            left: 0
                        }, 400).show();

                        $(_this).addClass('active')
                        $('body').addClass('active-menu')
                    }

                })
            }

        },
        appendMenu: () => {
            if (!$(d.sys.cssSelector(d.ref._menuTrigger)).length) {
                $('body').append('<a class="' + d.ref._menuTrigger + '">Menu</a>');
            }
            if (!$(d.sys.cssSelector(d.ref._menuPanel)).length) {
                $(d.ref._siteHolder).append(d.cms.menu);
            }
        },
        d_showMenu: () => {
            $(d.sys.cssSelector(d.ref._menuPanel)).children('div').each(function() {
                $(this).removeClass('active')
                $(this).animate({
                    top: 0
                }, d.sys.randomNo(1000))
            })
        }
    }

    h.closer = {
        lionCloseNext: {
            init: () => {
                var dfd = $.Deferred();
                var counter;

                d.sys.layoutType(() => {
                    h.closer.gRemoveLion()
                }, 'all')

                d.sys.layoutType(() => {
                    h.closer.gCloseIcon()
                    h.closer.gClose_nav()
                    h.closer.gMoveName()
                }, 'desktop')

                d.sys.layoutType(() => {
                    if ($(d.sys.cssSelector(d.ref._menuTrigger)).hasClass('active')) {
                        $(d.sys.cssSelector(d.ref._menuTrigger)).trigger('click');
                    }

                    h.closer.gCloseIcon()
                    h.closer.gMoveName()
                }, 'tablet')

                d.sys.layoutType(() => {
                    if ($(d.sys.cssSelector(d.ref._menuTrigger)).hasClass('active')) {
                        $(d.sys.cssSelector(d.ref._menuTrigger)).trigger('click');
                    }

                }, 'mobile')

                setTimeout(() => {
                    d.sys.layoutType(() => {
                        //removed items and kept the animation global
                        $('.sm-icn').remove()
                        $(d.sys.cssSelector(d.ref._menuPanel)).remove();
                        $('h1').remove()

                    }, 'desktop')
                    $(d.ref._siteHolder).empty()
                    dfd.resolve()
                }, 400)

                return dfd.promise();
            }
        },
        talkNext: {
            init: () => {
                var dfd = $.Deferred();
                var counter;

                $(d.sys.cssSelector(h.location._trigger)).fadeOut(200)
                d.sys.layoutType(() => {
                    h.closer.gCloseIcon()
                }, 'desktop')

                d.sys.layoutType(() => {
                    if ($(d.sys.cssSelector(d.ref._menuTrigger)).hasClass('active')) {
                        $(d.sys.cssSelector(d.ref._menuTrigger)).trigger('click');
                    }
                }, 'tablet')

                d.sys.layoutType(() => {
                    if ($(d.sys.cssSelector(d.ref._menuTrigger)).hasClass('active')) {
                        $(d.sys.cssSelector(d.ref._menuTrigger)).trigger('click');
                    }

                }, 'mobile')

                setTimeout(() => {
                    d.sys.layoutType(() => {

                        //removed items and kept the animation global
                        $('.sm-icn').remove()
                        $(d.sys.cssSelector(d.ref._menuPanel)).remove();
                        $('h1').remove()

                    }, 'desktop')

                    $(d.sys.cssSelector(h.location._trigger)).remove()
                    dfd.resolve()
                }, 400)

                return dfd.promise();
            }
        },
        gCloseIcon: () => {
            $('.sm-icn').animate({
                right: -100
            }, 40)
        },
        gClose_nav: () => {
            $(d.sys.cssSelector(d.ref._menuPanel)).animate({
                top: -120
            }, 200)
        },
        gMoveName: () => {
            $('h1').animate({
                bottom: -200
            }, 40)
        },
        gRemoveLion: () => {
            $(d.sys.cssSelector(d.ref._lion)).fadeOut(400, () => {
                $(d.sys.cssSelector(d.ref._lion)).remove();
            })
        }

    }

    return h
})();