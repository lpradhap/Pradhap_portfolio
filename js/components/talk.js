d.talk = (() => {
    const ui = {}

    ui.init = () => {
        $('body').removeClass('view-home view-about view-stack view-showcase').addClass('view-talk').attr('data-screen', 'talk');
        ui.deviceInit();

        ui.menu.refresh()
    }

    ui.deviceInit = () => {
        //initliaze depends on previous page
        let _prevView = $('body').attr('data-prev-page')

        switch (_prevView) {
            case ('home'):
                d.sys.layoutType(() => {
                    ui.contactForm.init()
                }, 'all')
                d.sys.layoutType(() => {
                    ui.moveLion();
                    ui.name.d();
                    ui.socialIcon.d();
                    ui.menu.desktopAnim();
                }, 'desktop')
                d.sys.layoutType(() => {
                    ui.name.t();
                    ui.menu.tabletAnim();
                }, 'tablet')
                d.sys.layoutType(() => {}, 'mobile')
                break;
            default:
                d.sys.layoutType(() => {
                    ui.contactForm.init()
                }, 'all')
                d.sys.layoutType(() => {
                    $.when(d.home.lion()).then(() => {
                        d.home.particlesBg();
                        ui.moveLion();
                        ui.name.d();
                        ui.socialIcon.d();
                        ui.menu.desktopAnim();
                    })
                }, 'desktop')
                d.sys.layoutType(() => {
                    $.when(d.home.lion()).then(() => {
                        d.home.particlesBg();
                        ui.name.t();
                        ui.menu.tabletAnim();
                    })

                }, 'tablet')
                d.sys.layoutType(() => {
                    d.home.particlesBg();
                    d.home.lion()
                }, 'mobile')
        }
    }

    ui.moveLion = () => {

        $('.home-lion').animate({
            left: '50%'
        }, 200)
    }

    ui.contactForm = {
        init: () => {
            ui.contactForm.appendForm()

            $(document).on("click", '#submit_btn', function() {
                    var e = !0,
                        post_data,
                        output;
                    $("#contact_form input[required=true], #contact_form textarea[required=true]").each(function() {
                            $(this).removeClass('error').parent().removeClass('email-error'),
                                $.trim($(this).val()) || ($(this).addClass('error'),
                                    e = !1);
                            var a = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                            "email" != $(this).attr("type") || a.test($.trim($(this).val())) || ($(this).addClass('error').parent().addClass('email-error'),
                                e = !1)
                        }),
                        e && (post_data = {
                                user_name: $("input[name=name]").val(),
                                user_email: $("input[name=email]").val(),
                                phone_number: $("input[name=phone2]").val(),
                                subject: "Pradhap | Contact email",
                                msg: $("textarea[name=message]").val()
                            },
                            $.post("contact_me.php", post_data, function(e) {
                                "error" == e.type ? output = '<div class="error">' + e.text + "</div>" : (output = '<div class="success">' + e.text + "</div>",
                                        $("#contact_form  input[required=true], #contact_form textarea[required=true]").val(""),
                                        $("#contact_form #contact_body").fadeOut(200)),
                                    $("#contact_form #contact_results").hide().html(output).fadeIn(200)
                            }, "json"))
                }),
                $("#contact_form  input[required=true], #contact_form textarea[required=true]").keyup(function() {
                    $(this).removeClass('error').parent().removeClass('email-error');
                    $("#result").delay(400).fadeIn()
                })
        },
        appendForm: () => {
            if (!$('#contact_form').length) {
                $(d.ref._siteHolder).append(d.cms.contactForm)
            }

            setTimeout(() => {
                $('.form-style').fadeIn(800)
            }, 400)
        }
    }

    ui.name = {
        create: () => {
            if (!$('h1').length) {
                $(d.ref._siteHolder).append(d.cms.common_name_placeholder);
                $('h1').find('span').show()
            }
        },
        d: () => {
            ui.name.create();

            $('h1').animate({
                top: 50
            }, 300)
        },
        t: () => {
            ui.name.create();

            $('h1').animate({
                bottom: 50
            }, 300)
        }
    }

    ui.socialIcon = {
        create: () => {
            if (!$('.sm-icn').length) {
                $(d.ref._siteHolder).append(d.cms.social_media_links);
            }
        },
        d: () => {
            ui.socialIcon.create();
            $('.sm-icn').delay(1000).animate({
                top: 65
            }, 300)
        }
    }

    ui.menu = {
        create: () => {
            if (!$(d.sys.cssSelector(d.ref._menuPanel)).length) {
                $(d.ref._siteHolder).append(d.cms.menu);
            }
        },
        refresh: () => {
            $(d.sys.cssSelector(d.ref._menuTrigger)).removeClass('active');
            $('.nav-item').removeClass('active');
            $('#nav-talk').addClass('active');
        },
        desktopAnim: () => {
            ui.menu.create();

            $(d.sys.cssSelector(d.ref._menuPanel)).css('top', '').delay(400).animate({
                left: 22
            }, 300)
        },
        tabletAnim: () => {
            ui.menu.create();
            $(d.sys.cssSelector(d.ref._menuPanel)).css('bottom', '')
        }
    }

    ui.closer = {
        homeNext: () => {
            var dfd = $.Deferred();
            var counter;

            d.sys.layoutType(() => {
                $('.home-lion').fadeOut(400).delay(100).remove();
                $('.form-style').fadeOut(500).delay().remove();
            }, 'all')

            d.sys.layoutType(() => {
                $('h1').animate({
                    top: -300
                }, 400, () => {
                    $('h1').remove()
                })

                $('.sm-icn').animate({
                    top: -200
                }, 300, () => {
                    $('.sm-icn').remove()
                })

                $(d.sys.cssSelector(d.ref._menuPanel)).animate({
                    left: -700
                }, 600, () => {
                    $(d.sys.cssSelector(d.ref._menuPanel)).remove()
                })
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
                dfd.resolve()
            }, 700)

            return dfd.promise();
        }
    }
    return ui;
})();