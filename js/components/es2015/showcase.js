'use strict';

d.showcase = function () {

    var ui = {};

    ui.init = function () {
        $('body').removeClass('view-home view-about view-stack  view-talk  view-about').addClass('view-showcase').attr('data-screen', 'showcase');
        setTimeout(function () {
            $('body').addClass('display-mode');
        }, 800);
        ui.menu.create();
        ui.deviceInit();
        d.home.location.init();
    };

    ui.resize = {
        t: function t() {
            $(window).resize(function () {
                if ($('body').hasClass('view-showcase').length) {
                    //detach hightlight and place accordingly
                    $(d.sys.cssSelector(ui.highlights._Panel)).remove();
                    ui.highlights.t_createHighlights();
                    //reset profile image
                    ui.socialPanel.setProfileHeight();
                    ui.rightPanel.d_brands();
                }
            });
        }
    };

    ui.deviceInit = function () {
        //initliaze depends on previous page
        var _prevView = $('body').attr('data-prev-page');

        switch (_prevView) {
            case 'home':
                d.sys.layoutType(function () {}, 'all');
                d.sys.layoutType(function () {
                    ui.namebox.d_init();
                    ui.createShowCaseBlocks.d_init();
                }, 'desktop');
                d.sys.layoutType(function () {
                    ui.createShowCaseBlocks.t_init();
                    ui.menu.tabletRefresh();
                    ui.menu.create();
                }, 'tablet');
                d.sys.layoutType(function () {
                    ui.createShowCaseBlocks.m_init();
                    d.home.addName.m();
                }, 'mobile');
                break;
            default:
                d.sys.layoutType(function () {
                    ui.menu.create();
                }, 'all');
                d.sys.layoutType(function () {
                    ui.namebox.d_init();
                    ui.createShowCaseBlocks.d_init();
                }, 'desktop');
                d.sys.layoutType(function () {
                    ui.createShowCaseBlocks.t_init();
                    ui.menu.tabletRefresh();
                    ui.menu.create();
                }, 'tablet');
                d.sys.layoutType(function () {
                    ui.createShowCaseBlocks.m_init();
                    d.home.addName.m();
                }, 'mobile');
        }
    };

    ui.createShowCaseBlocks = {
        _bPanel: 'portfolio-panel',
        _bLineItem: 'item',
        d_init: function d_init() {
            setTimeout(function () {
                ui.createShowCaseBlocks.createItems(4, 4);
            }, 400);
        },
        t_init: function t_init() {
            setTimeout(function () {
                ui.createShowCaseBlocks.createItems(3, 4);
            }, 400);
        },
        m_init: function m_init() {
            ui.createShowCaseBlocks.createItems(1, 12);
        },
        createItems: function createItems(col, row) {
            var aBlockWidth = $(window).width() / col;
            var aBlockHeight = $(window).height() / row;
            var content = '';
            var styleSet = 'style="width: ' + aBlockWidth + 'px; height: ' + aBlockHeight + 'px;"';
            var halfItem = '<div class="' + ui.createShowCaseBlocks._bLineItem + '" ' + styleSet + ' ><a>View website</a></div>';

            var count = col * row;

            for (var i = 0; i < count; i++) {
                content += halfItem;
            }

            $(d.ref._siteHolder).append('<div class="' + ui.createShowCaseBlocks._bPanel + '"> ' + content + '</div>');

            //after creating add items
            ui.createShowCaseBlocks.addItem();
        },
        addItem: function addItem() {

            $(d.sys.cssSelector(ui.createShowCaseBlocks._bLineItem)).each(function (i, el) {

                var name = '<div class="name">' + d.cms.portfolio[i].name + '</div>';
                var des = '<div class="des">' + d.cms.portfolio[i].des + '</div>';
                var blankName = d.cms.portfolio[i].name;
                var cssClass = blankName.replace(/ /g, '').toLowerCase();
                var html = name + des;

                $(el).append(html).addClass(cssClass).children('a').attr({
                    href: d.cms.portfolio[i].web,
                    target: '_blank'
                });

                $(el).delay(d.sys.randomNo(2000)).animate({
                    opacity: 1
                }, d.sys.randomNo(400));
            });
        }
    };

    ui.namebox = {
        _panelName: 'showcase-title-panel',
        _panelTitle: 'showcase-title',
        d_init: function d_init() {
            $.when(ui.namebox.drawLine()).then(function () {
                ui.namebox.showName_menu.d();
            });
        },
        drawLine: function drawLine() {
            var dfd = $.Deferred();
            var lines = '<div class="before"></div>';
            var cBlock = '<div class="' + ui.namebox._panelName + '"><div id="' + ui.namebox._panelTitle + '" class="' + ui.namebox._panelTitle + '" >' + lines + '' + d.cms.common_name_placeholder + '' + d.cms.menu + '' + d.cms.social_media_links + '</div></div>';
            $(d.ref._siteHolder).append(cBlock);

            $('.showcase-title').delay(300).animate({
                height: 110
            }, 250, "swing", function () {

                $('div.before').animate({
                    left: 0
                }, 200, function () {
                    dfd.resolve();
                });
            });

            return dfd.promise();
        },
        showName_menu: {
            d: function (_d) {
                function d() {
                    return _d.apply(this, arguments);
                }

                d.toString = function () {
                    return _d.toString();
                };

                return d;
            }(function () {
                $('h1, .sm-icn').find('span').show();
                $('h1').animate({
                    left: 20
                }, 500);
                $('.sm-icn').animate({
                    top: 10
                }, 700);
                $(d.sys.cssSelector(d.ref._menuPanel)).animate({
                    left: 20
                }, 300);

                $(d.sys.cssSelector(d.ref._menuPanel)).find('#nav-showcase').addClass('active');
            })
        }
    };

    ui.menu = {
        create: function create() {
            if (!$(d.sys.cssSelector(d.ref._menuPanel)).length) {
                $(d.ref._siteHolder).append(d.cms.menu);
            }
        },
        tabletRefresh: function tabletRefresh() {
            $(d.sys.cssSelector(d.ref._menuPanel)).css('top', '0');
        }
    };

    ui.closer = {
        homeNext: {
            init: function init() {
                $('body').removeClass('display-mode');
                var dfd = $.Deferred();
                var counter;
                $(d.sys.cssSelector(d.home.location._trigger)).fadeOut(200);
                d.sys.layoutType(function () {

                    if ($(d.sys.cssSelector(d.ref._menuTrigger)).hasClass('active')) {
                        $(d.sys.cssSelector(d.ref._menuTrigger)).trigger('click');
                    }
                }, 'tablet');

                d.sys.layoutType(function () {
                    if ($(d.sys.cssSelector(d.ref._menuTrigger)).hasClass('active')) {
                        $(d.sys.cssSelector(d.ref._menuTrigger)).trigger('click');
                    }
                }, 'mobile');

                d.sys.layoutType(function () {

                    //name and social icons
                    $('h1, .sm-icn').css({
                        top: '-100%',
                        opacity: 0
                    }, 300);

                    //menu close
                    $(d.sys.cssSelector(d.ref._menuPanel)).animate({
                        left: '-100%',
                        opacity: 0
                    }, 200);

                    setTimeout(function () {
                        $(d.sys.cssSelector(ui.namebox._panelTitle)).animate({
                            height: 0
                        }, 300);
                    }, 300);
                }, 'desktop');

                d.sys.layoutType(function () {

                    setTimeout(function () {
                        $(d.sys.cssSelector(ui.createShowCaseBlocks._bPanel)).children().each(function (i, el) {
                            $(el).animate({
                                opacity: 0
                            }, d.sys.randomNo(900));
                        });
                    }, 500);
                }, 'all');

                setTimeout(function () {
                    $(d.ref._siteHolder).empty();
                    $(d.sys.cssSelector(d.home.location._trigger)).remove();
                    dfd.resolve();
                }, 1200);

                return dfd.promise();
            }
        }
    };
    return ui;
}();