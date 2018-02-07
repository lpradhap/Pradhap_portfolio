d.showcase = (() => {

    const ui = {}

    ui.init = () => {
        $('body').removeClass('view-home view-about view-stack  view-talk  view-about').addClass('view-showcase').attr('data-screen', 'showcase');
        setTimeout(() => {
            $('body').addClass('display-mode')
        }, 800)
        ui.menu.create()
        ui.deviceInit();
        d.home.location.init()
    }

    ui.resize = {
        t: () => {
            $(window).resize(() => {
                if ($('body').hasClass('view-showcase').length) {
                    //detach hightlight and place accordingly
                    $(d.sys.cssSelector(ui.highlights._Panel)).remove();
                    ui.highlights.t_createHighlights();
                    //reset profile image
                    ui.socialPanel.setProfileHeight()
                    ui.rightPanel.d_brands()
                }

            })
        }
    }

    ui.deviceInit = () => {
        //initliaze depends on previous page
        let _prevView = $('body').attr('data-prev-page')

        switch (_prevView) {
            case ('home'):
                d.sys.layoutType(() => {

                }, 'all')
                d.sys.layoutType(() => {
                    ui.namebox.d_init();
                    ui.createShowCaseBlocks.d_init()
                }, 'desktop')
                d.sys.layoutType(() => {
                    ui.createShowCaseBlocks.t_init()
                    ui.menu.tabletRefresh()
                    ui.menu.create();
                }, 'tablet')
                d.sys.layoutType(() => {
                    ui.createShowCaseBlocks.m_init()
                    d.home.addName.m();
                }, 'mobile')
                break;
            default:
                d.sys.layoutType(() => {
                    ui.menu.create()
                }, 'all')
                d.sys.layoutType(() => {
                    ui.namebox.d_init();
                    ui.createShowCaseBlocks.d_init()
                }, 'desktop')
                d.sys.layoutType(() => {
                    ui.createShowCaseBlocks.t_init()
                    ui.menu.tabletRefresh()
                    ui.menu.create();
                }, 'tablet')
                d.sys.layoutType(() => {
                    ui.createShowCaseBlocks.m_init()
                    d.home.addName.m();
                }, 'mobile')
        }
    }

    ui.createShowCaseBlocks = {
        _bPanel: 'portfolio-panel',
        _bLineItem: 'item',
        d_init: () => {
            setTimeout(() => {
                ui.createShowCaseBlocks.createItems(4, 4)
            }, 400)
        },
        t_init: () => {
            setTimeout(() => {
                ui.createShowCaseBlocks.createItems(3, 4)
            }, 400)

        },
        m_init: () => {
            ui.createShowCaseBlocks.createItems(1, 12)
        },
        createItems: (col, row) => {
            let aBlockWidth = ($(window).width() / col);
            let aBlockHeight = ($(window).height() / row);
            let content = '';
            let styleSet = 'style="width: ' + aBlockWidth + 'px; height: ' + aBlockHeight + 'px;"';
            let halfItem = '<div class="' + ui.createShowCaseBlocks._bLineItem + '" ' + styleSet + ' ><a>View website</a></div>';

            let count = col * row;

            for (let i = 0; i < count; i++) {
                content += halfItem;
            }

            $(d.ref._siteHolder).append('<div class="' + ui.createShowCaseBlocks._bPanel + '"> ' + content + '</div>')

            //after creating add items
            ui.createShowCaseBlocks.addItem()
        },
        addItem: () => {

            $(d.sys.cssSelector(ui.createShowCaseBlocks._bLineItem)).each((i, el) => {

                let name = '<div class="name">' + d.cms.portfolio[i].name + '</div>';
                let des = '<div class="des">' + d.cms.portfolio[i].des + '<div class="des-info">' + d.cms.portfolio[i].info + '</div></div>';
                let blankName = d.cms.portfolio[i].name;
                let cssClass = blankName.replace(/ /g, '').toLowerCase();
                let html = name + des;

                $(el).append(html).addClass(cssClass).children('a').attr({
                    href: d.cms.portfolio[i].web,
                    target: '_blank'
                });

                $(el).delay(d.sys.randomNo(2000)).animate({
                    opacity: 1
                }, d.sys.randomNo(400));
            })



        }
    }

    ui.namebox = {
        _panelName: 'showcase-title-panel',
        _panelTitle: 'showcase-title',
        d_init: () => {
            $.when(ui.namebox.drawLine()).then(() => {
                ui.namebox.showName_menu.d();
            })

        },
        drawLine: () => {
            let dfd = $.Deferred();
            let lines = '<div class="before"></div>';
            let cBlock = '<div class="' + ui.namebox._panelName + '"><div id="' + ui.namebox._panelTitle + '" class="' + ui.namebox._panelTitle + '" >' + lines + '' + d.cms.common_name_placeholder + '' + d.cms.menu + '' + d.cms.social_media_links + '</div></div>';
            $(d.ref._siteHolder).append(cBlock)

            $('.showcase-title').delay(300).animate({
                height: 110
            }, 250, "swing", () => {

                $('div.before').animate({
                    left: 0
                }, 200, () => {
                    dfd.resolve()
                })

            })

            return dfd.promise()
        },
        showName_menu: {
            d: () => {
                $('h1, .sm-icn').find('span').show()
                $('h1').animate({
                    left: 20
                }, 500)
                $('.sm-icn').animate({
                    top: 10
                }, 700)
                $(d.sys.cssSelector(d.ref._menuPanel)).animate({
                    left: 20
                }, 300)

                $(d.sys.cssSelector(d.ref._menuPanel)).find('#nav-showcase').addClass('active');
            }
        }
    }

    ui.menu = {
        create: () => {
            if (!$(d.sys.cssSelector(d.ref._menuPanel)).length) {
                $(d.ref._siteHolder).append(d.cms.menu);
            }
        },
        tabletRefresh: () => {
            $(d.sys.cssSelector(d.ref._menuPanel)).css('top', '0')
        }
    }

    ui.closer = {
        homeNext: {
            init: () => {
                $('body').removeClass('display-mode');
                var dfd = $.Deferred();
                var counter;
                $(d.sys.cssSelector(d.home.location._trigger)).fadeOut(200)
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

                d.sys.layoutType(() => {

                    //name and social icons
                    $('h1, .sm-icn').css({
                        top: '-100%',
                        opacity: 0
                    }, 300)

                    //menu close
                    $(d.sys.cssSelector(d.ref._menuPanel)).animate({
                        left: '-100%',
                        opacity: 0
                    }, 200);

                    setTimeout(() => {
                        $(d.sys.cssSelector(ui.namebox._panelTitle)).animate({
                            height: 0
                        }, 300)
                    }, 300)


                }, 'desktop')


                d.sys.layoutType(() => {


                    setTimeout(() => {
                        $(d.sys.cssSelector(ui.createShowCaseBlocks._bPanel)).children().each((i, el) => {
                            $(el).animate({
                                opacity: 0
                            }, d.sys.randomNo(900))
                        })
                    }, 500)

                }, 'all')

                setTimeout(() => {
                    $(d.ref._siteHolder).empty()
                    $(d.sys.cssSelector(d.home.location._trigger)).remove();
                    dfd.resolve()
                }, 1200)

                return dfd.promise();
            }
        }
    }
    return ui;
})();