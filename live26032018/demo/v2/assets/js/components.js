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
        _lion: 'home-lion'
    }

    ui.navigate = {
        init: () => {
            $(document).on('click touch', '.nav-item', (e) => {
                var _closeView = $('body').attr('data-screen')
                var _id = $(e.target).prop('id')
                ui.navigate.closeScreen(_closeView, _id)
            })

        },
        closeScreen: (_closeView, _id) => {
            switch (_closeView + '-' + _id) {
                case ('home-nav-stack'):
                    //home page to stack page
                    d.home.closer.lionCloseNext.init().then(() => {
                        $('body').attr('data-prev-page', 'home').addClass('view-stack')
                        d.stack.init();
                    })
                    break;
                case ('home-nav-showcase'):
                    //home page to showcase page
                    d.home.closer.lionCloseNext.init().then(() => {
                        $('body').attr('data-prev-page', 'home').addClass('view-showcase');
                        d.showcase.init();
                    })
                    break;
                case ('home-nav-talk'):
                    //home page to showcase page
                    d.home.closer.talkNext.init().then(() => {
                        $('body').attr('data-prev-page', 'home').addClass('view-talk');
                        d.talk.init();
                    })
                    break;
                case ('home-nav-about'):
                    //home page to about page
                    d.home.closer.lionCloseNext.init().then(() => {
                        $('body').attr('data-prev-page', 'home').addClass('view-about');
                        d.about.init();
                    })
                    break;
                case ('stack-nav-home'):
                    //stack page to home page
                    d.stack.closer.homeNext().then(() => {
                        $('body').attr('data-prev-page', 'stack').addClass('view-home')
                        d.home.init();
                    })
                    break;
                case ('stack-nav-showcase'):
                    //stack page to stack page
                    d.stack.closer.homeNext().then(() => {
                        $('body').attr('data-prev-page', 'stack').addClass('view-showcase');
                        d.showcase.init();
                    })
                    break;
                case ('stack-nav-talk'):
                    //stack page to talk page
                    d.stack.closer.homeNext().then(() => {
                        $('body').attr('data-prev-page', 'stack').addClass('view-talk');
                        d.talk.init();
                    })
                    break;
                case ('stack-nav-about'):
                    //stack page to about page
                    d.stack.closer.homeNext().then(() => {
                        $('body').attr('data-prev-page', 'stack').addClass('view-about');
                        d.about.init();
                    })
                    break;
                case ('showcase-nav-home'):
                    //home page to showcase page
                    d.showcase.closer.homeNext.init().then(() => {
                        $('body').attr('data-prev-page', 'showcase').addClass('view-home');
                        d.home.init();
                    })
                    break;
                case ('showcase-nav-stack'):
                    //home page to showcase page
                    d.showcase.closer.homeNext.init().then(() => {
                        $('body').attr('data-prev-page', 'showcase').addClass('view-stack');
                        d.stack.init();
                    })
                    break;
                case ('showcase-nav-talk'):
                    //showcase page to talk page
                    d.showcase.closer.homeNext.init().then(() => {
                        $('body').attr('data-prev-page', 'showcase').addClass('view-talk');
                        d.talk.init();
                    })
                    break;
                case ('showcase-nav-about'):
                    //showcase page to about page
                    d.showcase.closer.homeNext.init().then(() => {
                        $('body').attr('data-prev-page', 'showcase').addClass('view-about');
                        d.about.init();
                    })
                    break;
                case ('talk-nav-home'):
                    //home page to showcase page
                    d.talk.closer.homeNext().then(() => {
                        $('body').attr('data-prev-page', 'talk').addClass('view-home');
                        d.home.init();
                    })
                    break;
                case ('talk-nav-stack'):
                    ///talk to me page to stack page
                    d.talk.closer.homeNext().then(() => {
                        $('body').attr('data-prev-page', 'talk').addClass('view-stack');
                        d.stack.init();
                    })
                    break;
                case ('talk-nav-showcase'):
                    //talk to me page to showcase page
                    d.talk.closer.homeNext().then(() => {
                        $('body').attr('data-prev-page', 'talk').addClass('view-stack');
                        d.showcase.init();
                    })
                    break;
                case ('talk-nav-about'):
                    //talk to me page to about page
                    d.talk.closer.homeNext().then(() => {
                        $('body').attr('data-prev-page', 'talk').addClass('view-about');
                        d.about.init();
                    })
                    break;
                case ('about-nav-home'):
                    //about to me page to home page
                    d.about.closer.d().then(() => {
                        $('body').attr('data-prev-page', 'about').addClass('view-home');
                        d.home.init();
                    })
                    break;
                case ('about-nav-stack'):
                    //about to me page to stack page
                    d.about.closer.d().then(() => {
                        $('body').attr('data-prev-page', 'about').addClass('view-stack');
                        d.stack.init();
                    })
                    break;
                case ('about-nav-showcase'):
                    //about to me page to showcase page
                    d.about.closer.d().then(() => {
                        $('body').attr('data-prev-page', 'about').addClass('view-showcase');
                        d.showcase.init();
                    })
                    break;
                case ('about-nav-talk'):
                    //about to me page to talk page
                    d.about.closer.d().then(() => {
                        $('body').attr('data-prev-page', 'about').addClass('view-talk');
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
            ui.sys.deviceConstructpr()
            $(window).resize(() => {
                ui.sys.deviceConstructpr()
            })

        },
        MediaTypes: {
            desktop: 'only screen and (min-width: 1025px)',
            tablet: 'only screen and (min-width: 640px) and (max-width: 1024px)',
            mobile: 'only screen and (max-width: 639px)',
            all: ''
        },
        deviceConstructpr: () => {

            //script checks device and broweser
            var self = this;
            //remove setclass on resize
            $('body').removeClass('ui-desktop ui-tablet ui-mobile');

            for (var media in ui.sys.MediaTypes) {

                if (window.matchMedia(ui.sys.MediaTypes[media]).matches) {
                    $('body').addClass('ui-' + media)
                    $('body').attr('data-media', media)
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
d.cms = {
    common_name_placeholder: '<h1><div class="name-panel"><span  style="display: none;" >pradhap</span> <span  style="display: none;" >loganathan</span></div><span class="slogan" style="display: none;">UI Developer</span></h1>',
    mobile_name_placholder: '<h1><span >pradhap loganathan</span></h1>',
    social_media_links: '<a class="linkedin sm-icn" title="Linkedin" href="https://www.linkedin.com/in/pradhaplogan" target="_blank"  rel="linkdin">linkdin</a><a class="stackoverflow  sm-icn" href="https://stackoverflow.com/users/3230721/lpradhap" target="_blank"  title="Stack overflow">stackoverflow</a><a href="https://github.com/lpradhap" target="_blank" class="github  sm-icn" title="Git Hub">Git Hub</a>',
    menu: "<div class='d-menu'><div id='nav-home' class='nav-item'>Home</div><div id='nav-about' class='nav-item'>Who am I</div><div id='nav-stack' class='nav-item'>My Technologies</div><div id='nav-showcase' class='nav-item'>Showcase</div><div id='nav-talk' class='nav-item'>Talk to me</div></div>",
    about_desc: "<span class='hi'>Hey Mate..</span><span class='name'>I'm Pradhap Loganathan </span><span class='field'>I’m an UI Developer</span> <span class='experience' > with 9 + years’ experience in ICT Industry. </span>",
    contactForm: '<div class="form-style" id="contact_form"><div id="contact_results"></div><div id="contact_body"><span>Hi Pradhap, my name is</span><span><input type="text" name="name" placeholder="Your Name" id="name" required="true" class="input-field"><em>.</em> </span><div><span>Please contact me via email</span><span><input type="email" name="email" placeholder="eMail" required="true" class="input-field"></span><span> or call me at </span><span><input type="tel" name="phone2" maxlength="15" required="true" class="tel-number-field long"></span><span></span><span><em>.</em> I want to talk to you about </span><span><textarea name="message" id="message" class="textarea-field" required="true" maxlength="70"></textarea></span></div><input class="submit" type="submit" id="submit_btn" value="Send It"></div></div>',
    about_certification: ['HND', 'mcp', 'Magento'],
    experience: '<div><div class="item"><div class="col-1"><div class="role">Team Lead/Tech Lead-UI</div><div class="period">2014 to Present</div></div><div class="col-2"><div class="name">SANA Commerce Division, ISMAPAC</div><div class="desc">ISM is a Rotterdam, Netherland based company with development centres in Ukraine and Sri Lanka. The company is full focused on ecommerce solutions for potential clients with SanaCommerce and Magento. <a href="http://www.ism.nl">www.ism.nl</a></div></div></div></div><div><div class="item"><div class="col-1"><div class="role">UI Engineer</div><div class="period">2012 to 2014</div></div><div class="col-2"><div class="name">Netstarter</div><div class="desc">Ranked #1 Client Statisfaction 2013 / #2 Magento Partner 2. <a href="http://www.netstarter.com.au">www.netstarter.com.au</a></div></div></div></div><div><div class="item"><div class="col-1"><div class="role">Senior UI Engineer</div><div class="period">2007 - 2012</div></div><div class="col-2"><div class="name">Allion Technologies Pvt Ltd</div><div class="desc">An offshore software developemnt company with clients in Australia, Sweden and USA. <a href="http://www.alliontechnologies.com/">www.alliontechnologies.com</a></div></div></div></div>',
    qualification: '<div><ul><li>Reading for Masters in Business Administration from Australian Business Institute (AIB AUS)</li><li>BTEC HND in Business Information Technology Edexcel, 2007</li><li>Magento Certified Front End Developer</li><li>Microsoft Certified Professional in Programming in HTML5 with JavaScript and CSS3 Specialist</li></ul></div>',
    brands: '<div class="uSydney"></div><div class="dicksmith"></div><div class="bacardi"></div><div class="zf"></div><div class="fisherSports"></div>',
    aboutSocialLinks: '<div class="social-links"><div><span>Facebook</span> <a href="https://www.facebook.com/Pradhap" target="_blank">https://www.facebook.com/Pradhap</a></div><div><span>Linkedin</span>  <a href="https://www.linkedin.com/in/pradhaplogan/" target="_blank">https://www.linkedin.com/in/pradhaplogan/</a></div><div><span>Stack overflow</span>  <a href="https://stackoverflow.com/users/3230721/lpradhap" target="_blank">https://stackoverflow.com/users/3230721/lpradhap</a></div><div><span>Git Hub</span> <a href="https://github.com/lpradhap" target="_blank">https://github.com/lpradhap</a></div></div>',
    hightlights: '<ul><li><span>Team Lead/Tech Lead-UI</span> lead more than 5 team members and also delivered more than 50 projects as the Lead UI.</li><li><span>High exposure in multicultural environments</span> I have worked in highly diversified business environments. especially with Netherlands, Ukrainians and Australians.</li><li><span>Lecturing</span> conducted freelance training for cooperates to improve frontend development skills of the developers.</li><li><span>Mentoring</span> guided many personnel in education and career, personally and professionally.</li><li><span>Public speaking</span> delivered 2 technical sessions in Sri Lankan technical forums.</li><li><span>Start-up team builder</span> I have been in first group of members to join ISMAPAC and contributed majorly to stabilise and create the company culture and bring it to a top 25 best companies to work in Sri Lanka.</li></ul>',
    contactPanel: '<div><span>Telephone</span> +94 777 227677</div><div><span>Email</span> <a href="mailto:kandyguy@gmail.com?Subject=Hey%20Pradhap">Kandyguy@gmail.com</a></div>',
    jobMsg: '<div>Hey Mate, I have Australia work permit and I’m actively looking for a job in Australia. Please talk to me.  <span class="contactNow">Contact Now</span> </div> ',
    stackList: [{
            "name": "Javascript",
            "rate": 8
        },
        {
            "name": "Photoshop",
            "rate": 5.5
        },
        {
            "name": "Angular Js",
            "rate": 7.5
        },
        {
            "name": "HTML",
            "rate": 9
        },
        {
            "name": "Jquery",
            "rate": 9
        },
        {
            "name": "Knockout Js",
            "rate": 7.5
        },
        {
            "name": "RESTFul API",
            "rate": 8
        },
        {
            "name": "CSS",
            "rate": 9
        }, {
            "name": "SASS",
            "rate": 8
        },
        {
            "name": "LESS",
            "rate": 8
        },
        {
            "name": "Gulp",
            "rate": 8
        },
        {
            "name": "Magento",
            "rate": 7
        },
        {
            "name": "Bootstrap",
            "rate": 8
        },
        {
            "name": "Grunt",
            "rate": 6
        },
        {
            "name": "GIT",
            "rate": 7
        },
        {
            "name": "Wordpress",
            "rate": 7
        }
        // ,
        // {
        //     "name": "React",
        //     "rate": 6
        // },
    ],
    portfolio: [{
            "name": "cincottachemist",
            "web": "http://www.cincottachemist.com.au/",
            "des": "Magento Development"
        },
        {
            "name": "Dick Smith ",
            "web": "https://www.jaxtyres.com.au/",
            "des": "Magento Development"
        },
        {
            "name": "Jax Tyres",
            "web": "https://www.dicksmith.com.au/",
            "des": "Magento Development"
        },
        {
            "name": "Fischer sports",
            "web": "https://b2b.fischersports.com/en-us/",
            "des": "Sana Commerce Development"
        },
        {
            "name": "Sri Lanka Travelers",
            "web": "http://www.srilankatravelers.com",
            "des": "WP Development | Design | Content"
        },
        {
            "name": "Print buddy",
            "web": "http://www.printbuddy.lk",
            "des": "Custom Development | Design"
        },
        {
            "name": "Zumex",
            "web": "https://www.zumexstore.com/",
            "des": "Sana Commerce Development"
        },
        {
            "name": "ISM",
            "web": "http://www.ism.nl/",
            "des": "Umbraco Development"
        },
        {
            "name": "swiss sense",
            "web": "https://www.swisssense.nl/",
            "des": "Angular Development"
        },
        {
            "name": "the athletes foot",
            "web": "https://www.theathletesfoot.nl/",
            "des": "Magento Development"
        },
        {
            "name": "intersport",
            "web": "https://www.intersport.nl/",
            "des": "Magento Development"
        },
        {
            "name": "Jim Lawrence",
            "web": "https://www.jim-lawrence.co.uk/",
            "des": "Sana Commerce Development"
        },
        {
            "name": "blyco",
            "web": "https://www.blyco.com/",
            "des": "Sana Commerce Development"
        },
        {
            "name": "Old portfolio",
            "web": "http://www.pradhap.com/demo/v1/index.html",
            "des": "Javascript Development"
        },
        {
            "name": "orangeparts",
            "web": "https://www.orangeparts.com/",
            "des": "Sana Commerce Development"
        },
        {
            "name": "primera",
            "web": "https://www.primera.nl/",
            "des": "Magento Development"
        },
        {
            "name": "Allion Technologies",
            "web": "https://www.alliontechnologies.com/",
            "des": "Wordpress Development"
        },
    ]

}
d.home = (() => {
    const h = {};

    h.init = () => {
        $('body').addClass('view-home').removeClass('view-showcase view-stack view-talk view-about').attr('data-screen', 'home');

        if ($(d.preload._progressPanel).length) {
            d.preload.clearPreload();
        }
        h.location.init();
        h.location.events()
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
            $.ajax({
                url: "https://geoip-db.com/jsonp",
                jsonpCallback: "callback",
                dataType: "jsonp",
                success: function(location) {
                    if (location.country_name == "Australia") {
                        h.location.showMsg();
                    }
                }
            });
        },
        showMsg: () => {
            $('body').append('<div class="' + h.location._trigger + '"><div class="' + h.location._panel + '"> ' + d.cms.jobMsg + '</div></div>')
        },
        events: () => {
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
                    dfd.resolve(true)
                }
            }
        });
        return dfd.promise();
    }
    h.particlesBg = () => {
        $(d.sys.cssSelector(d.ref._lion)).prepend("<div id='particle-target'></div>");
        let particles = {
            dotColor: '#71801c',
            lineColor: '#71801c',
            density: 50000,
            parallax: true
        };
        let particleDensity;
        let options = {
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
            $('h1 .slogan').delay(2000).fadeIn(800)
        },
        t: () => {
            if (!$('h1').length) {
                $(d.ref._siteHolder).append(d.cms.common_name_placeholder);
            }

            $('.name-panel span:first-child').fadeIn(2000)
            $('.name-panel span:last-child').fadeIn(2000)
            $('h1 .slogan').delay(2000).fadeIn(800)
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
                $(document).on('click touchstart', '.mob-menu', (e) => {

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
                $(document).on('click touchstart', '.mob-menu', (e) => {

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
                    $('.mob-menu').trigger('click');
                    h.closer.gCloseIcon()
                    h.closer.gMoveName()
                }, 'tablet')

                d.sys.layoutType(() => {
                    $('.mob-menu').trigger('click');
                }, 'mobile')

                setTimeout(() => {
                    d.sys.layoutType(() => {
                        //removed items and kept the animation global
                        $('.sm-icn').remove()
                        $(d.sys.cssSelector(d.ref._menuPanel)).remove();
                        $('h1').remove()

                    }, 'desktop')

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
d.stack = (() => {
    const s = {}

    s.init = () => {
        $('body').removeClass('view-home view-about view-showcase  view-talk').addClass('view-stack').attr('data-screen', 'stack');
        s.deviceInit();
        d.home.location.init()
            //menu refresh to set state correctly
        d.stack.menu.refresh();
    }

    s.deviceInit = () => {

        //initliaze depends on previous page
        let _prevView = $('body').attr('data-prev-page')

        switch (_prevView) {
            case ('home'):

                d.sys.layoutType(() => {
                    s.menu.create()
                    setTimeout(() => {
                        s.setBg();
                    }, 1800)
                    s.name.d();
                    s.socialIcon.d();
                    s.menu.desktopAnim();
                    s.listTech.init();
                    s.listTech.createRatingPanel();
                    s.listTech.showRatingPanel();
                }, 'desktop')

                d.sys.layoutType(() => {
                    s.menu.create()
                    setTimeout(() => {
                        s.setBg();
                    }, 1800)
                    s.listTech.init();
                    s.name.t();
                    s.menu.tabletAnim();
                    s.createRatingPanel();
                    s.showRatingPanel();
                }, 'tablet')
                d.sys.layoutType(() => {
                    s.menu.create()
                    s.listTech.init();
                }, 'mobile')
                break;
            default:

                d.sys.layoutType(() => {
                    s.menu.create()
                    setTimeout(() => {
                        d.stack.setBg();
                    }, 1800)
                    d.stack.name.d();
                    d.stack.socialIcon.d();
                    d.stack.menu.desktopAnim();
                    d.stack.listTech.init();
                    s.listTech.createRatingPanel();
                    s.listTech.showRatingPanel();
                }, 'desktop')

                d.sys.layoutType(() => {
                    s.menu.create()
                    setTimeout(() => {
                        d.stack.setBg();
                    }, 1800)
                    d.stack.listTech.init();
                    d.stack.name.t();
                    d.stack.menu.tabletAnim();
                    s.listTech.createRatingPanel();
                    s.listTech.showRatingPanel();
                }, 'tablet')
                d.sys.layoutType(() => {
                    d.stack.listTech.init();
                    s.menu.create()
                }, 'mobile')
        }
    }

    s.listTech = {
        _stackWrap: 'stack_list_wrapper',
        _stackItem: 'stack-item',
        _ratingPanel: 'rating-block',
        init: () => {
            setTimeout(() => {
                s.listTech.createBlock();
            }, 100)

        },
        createBlock: () => {
            let blockCount = d.cms.stackList.length;

            $(d.ref._siteHolder).append('<div class="' + s.listTech._stackWrap + '"></div>')

            for (let i = 0; i < blockCount; i++) {
                let name = d.cms.stackList[i].name;
                let css = name.toLowerCase().replace(' ', '');
                let html = '<div class="' + s.listTech._stackItem + ' stack-' + css + '" data-rating="' + d.cms.stackList[i].rate + '" ><span>' + d.cms.stackList[i].name + '</span></div>'
                $(d.sys.cssSelector(s.listTech._stackWrap)).append(html)
            }

            $(d.sys.cssSelector(d.stack.listTech._stackWrap)).delay(4000).children().each((i, el) => {
                $(el).delay(d.sys.randomNo(3500)).animate({
                    opacity: 1
                }, 300);
            })
        },
        createRatingPanel: () => {
            $(d.ref._siteHolder).append('<div class="' + s.listTech._ratingPanel + '"><div class="flw"><span>Expert</span></div><div class="good"><span>intermediate</span></div><div class="rookie"><span>Rookie</span></div><div class="rating-scale"></div></div>')
        },
        showRatingPanel: () => {
            $(d.ref._siteHolder).find(d.sys.cssSelector(s.listTech._ratingPanel)).children().each((i, el) => {

                $(el).delay(1500).animate({
                    right: 0
                }, d.sys.randomNo(400), () => {
                    $(el).children().animate({
                        right: -130
                    }, 200, () => {
                        d.stack.listTech.showRating();
                    })
                })
            })
        },
        showRating: () => {
            let clearReset;

            $('body').on('click mouseover', d.sys.cssSelector(s.listTech._stackItem), (e) => {
                $('body').addClass('node-on');

                $(d.sys.cssSelector(s.listTech._stackItem)).removeClass('active-node');
                $(e.target).addClass('active-node');

                $('.rating-scale').addClass('rating-on')
                var _10p = $(window).height() / 10;

                var h = ($(e.target).attr('data-rating') * _10p) + 'px';
                $('.rating-scale').css('height', h);


                clearTimeout(clearReset);
                clearRating()

                function clearRating() {
                    clearReset = setTimeout(() => {
                        $('.rating-scale').css('height', '0');
                        $('.rating-scale').removeClass('rating-on')
                        $('body').removeClass('node-on')
                        $(d.sys.cssSelector(s.listTech._stackItem)).removeClass('active-node');
                    }, 4000);
                }

            })

            $('body').on('mouseout', d.sys.cssSelector(d.stack.listTech._stackWrap), (e) => {
                $('.rate-building').css('backgroundPosition', '0 0');
                $('.rate-building').removeClass('BgOn')
            })

        }
    }


    s.name = {
        create: () => {
            if (!$('h1').length) {
                $(d.ref._siteHolder).append(d.cms.common_name_placeholder);
                $('h1').find('span').show()
            }
        },
        d: () => {
            s.name.create();

            $('h1').animate({
                top: 50
            }, 300)
        },
        t: () => {
            s.name.create();

            $('h1').animate({
                bottom: 50
            }, 300)
        }
    }

    s.socialIcon = {
        create: () => {
            if (!$('.sm-icn').length) {
                $(d.ref._siteHolder).append(d.cms.social_media_links);
            }
        },
        d: () => {
            s.socialIcon.create();
            $('.sm-icn').delay(1000).animate({
                top: 65
            }, 300)
        }
    }

    s.menu = {
        create: () => {
            if (!$(d.sys.cssSelector(d.ref._menuPanel)).length) {
                $(d.ref._siteHolder).append(d.cms.menu);
            }
        },
        refresh: () => {
            $(d.sys.cssSelector(d.ref._menuTrigger)).removeClass('active');
            $('.nav-item').removeClass('active-menu');
            $('#nav-stack').addClass('active-menu');
        },
        desktopAnim: () => {
            $(d.sys.cssSelector(d.ref._menuPanel)).css('top', '').delay(400).animate({
                left: 22
            }, 300)
        },
        tabletAnim: () => {
            $(d.sys.cssSelector(d.ref._menuPanel)).css('top', '')
        }
    }

    s.setBg = () => {
        let canvasHtml = '<div id="large-header" class="large-header"><canvas id="canvas"></canvas></div>';
        let bubbleHtml = '<div class="stack-wrapper"><ul class="bg-bubbles"><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li> <li></li><li></li></ul></div>';
        let width, height, largeHeader, canvas, ctx, points, target, animateHeader = true;

        $(d.ref._siteHolder).append(canvasHtml + ' ' + bubbleHtml);

        // Main
        initHeader();
        initAnimation();
        addListeners();

        function initHeader() {
            width = window.innerWidth;
            height = window.innerHeight;
            target = { x: width / 2, y: height / 2 };

            largeHeader = document.getElementById('large-header');
            largeHeader.style.height = height + 'px';

            canvas = document.getElementById('canvas');
            canvas.width = width;
            canvas.height = height;
            ctx = canvas.getContext('2d');

            // create points
            points = [];
            for (var x = 0; x < width; x = x + width / 20) {
                for (var y = 0; y < height; y = y + height / 20) {
                    var px = x + Math.random() * width / 20;
                    var py = y + Math.random() * height / 20;
                    var p = { x: px, originX: px, y: py, originY: py };
                    points.push(p);
                }
            }

            // for each point find the 5 closest points
            for (var i = 0; i < points.length; i++) {
                var closest = [];
                var p1 = points[i];
                for (var j = 0; j < points.length; j++) {
                    var p2 = points[j]
                    if (!(p1 == p2)) {
                        var placed = false;
                        for (var k = 0; k < 5; k++) {
                            if (!placed) {
                                if (closest[k] == undefined) {
                                    closest[k] = p2;
                                    placed = true;
                                }
                            }
                        }

                        for (var k = 0; k < 5; k++) {
                            if (!placed) {
                                if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                                    closest[k] = p2;
                                    placed = true;
                                }
                            }
                        }
                    }
                }
                p1.closest = closest;
            }

            // assign a circle to each point
            for (var i in points) {
                var c = new Circle(points[i], 2 + Math.random() * 2, '#c4d84a');
                points[i].circle = c;
            }
        }

        // Event handling
        function addListeners() {
            if (!('ontouchstart' in window)) {
                window.addEventListener('mousemove', mouseMove);
            }
            window.addEventListener('scroll', scrollCheck);
            window.addEventListener('resize', resize);
        }

        function mouseMove(e) {
            var posx = posy = 0;
            if (e.pageX || e.pageY) {
                posx = e.pageX;
                posy = e.pageY;
            } else if (e.clientX || e.clientY) {
                posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
                posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
            }
            target.x = posx;
            target.y = posy;
        }

        function scrollCheck() {
            if (document.body.scrollTop > height) animateHeader = false;
            else animateHeader = true;
        }

        function resize() {
            width = window.innerWidth;
            height = window.innerHeight;
            largeHeader.style.height = height + 'px';
            canvas.width = width;
            canvas.height = height;
        }

        // animation
        function initAnimation() {
            animate();
            for (var i in points) {
                shiftPoint(points[i]);
            }
        }

        function animate() {
            if (animateHeader) {
                ctx.clearRect(0, 0, width, height);
                for (var i in points) {
                    // detect points in range
                    if (Math.abs(getDistance(target, points[i])) < 4000) {
                        points[i].active = 0.3;
                        points[i].circle.active = 0.6;
                    } else if (Math.abs(getDistance(target, points[i])) < 40000) {
                        points[i].active = 0.1;
                        points[i].circle.active = 0.3;
                    } else if (Math.abs(getDistance(target, points[i])) < 60000) {
                        points[i].active = 0.02;
                        points[i].circle.active = 0.1;
                    } else {
                        points[i].active = 0;
                        points[i].circle.active = 0;
                    }

                    drawLines(points[i]);
                    points[i].circle.draw();
                }
            }
            requestAnimationFrame(animate);
        }

        function shiftPoint(p) {
            TweenLite.to(p, 1 + 1 * Math.random(), {
                x: p.originX - 50 + Math.random() * 100,
                y: p.originY - 50 + Math.random() * 100,
                ease: Circ.easeInOut,
                onComplete: function() {
                    shiftPoint(p);
                }
            });
        }

        // Canvas manipulation
        function drawLines(p) {
            if (!p.active) return;
            for (var i in p.closest) {
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p.closest[i].x, p.closest[i].y);
                ctx.strokeStyle = 'rgba(0,0,0,' + p.active + ')';
                ctx.stroke();
            }
        }

        function Circle(pos, rad, color) {
            var _this = this;

            // constructor
            (function() {
                _this.pos = pos || null;
                _this.radius = rad || null;
                _this.color = color || null;
            })();

            this.draw = function() {
                if (!_this.active) return;
                ctx.beginPath();
                ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 3 * Math.PI, false);
                ctx.fillStyle = 'rgba(0, 0, 0,' + _this.active + ')';
                ctx.fill();
            };
        }

        // Util
        function getDistance(p1, p2) {
            return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
        }
    }

    s.closer = {
        homeNext: () => {
            var dfd = $.Deferred();
            var counter;

            d.sys.layoutType(() => {

                //hide all stacks and then remove the panel from the DOM
                $(d.sys.cssSelector(s.listTech._stackItem)).each((i, el) => {
                    $(el).delay(d.sys.randomNo(800)).fadeOut(200)
                })
                $(d.sys.cssSelector(d.home.location._trigger)).fadeOut(200)
                $('.large-header, .stack-wrapper').fadeOut(800);
            }, 'all')

            d.sys.layoutType(() => {
                $('h1').animate({
                    top: -300
                }, 400)

                $('.sm-icn').animate({
                    top: -200
                }, 300)

                $(d.sys.cssSelector(d.ref._menuPanel)).animate({
                        left: -700
                    }, 600)
                    //hide ratings panel and then remove
                s.closer.closeRatingsPanel();
            }, 'desktop')

            d.sys.layoutType(() => {
                if ($(d.sys.cssSelector(d.ref._menuTrigger)).hasClass('active')) {
                    $(d.sys.cssSelector(d.ref._menuTrigger)).trigger('click');
                }
                //hide ratings panel and then remove
                s.closer.closeRatingsPanel();
            }, 'tablet')
            d.sys.layoutType(() => {
                if ($(d.sys.cssSelector(d.ref._menuTrigger)).hasClass('active')) {
                    $(d.sys.cssSelector(d.ref._menuTrigger)).trigger('click');
                }
            }, 'mobile')
            setTimeout(() => {
                $(d.sys.cssSelector(d.home.location._trigger)).remove()
                $(d.ref._siteHolder).empty()
                dfd.resolve()
            }, 1000)

            return dfd.promise();
        },
        closeRatingsPanel: () => {
            $(d.sys.cssSelector(s.listTech._ratingPanel)).fadeOut(800)
        }
    }
    return s;
})();
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
                let des = '<div class="des">' + d.cms.portfolio[i].des + '</div>';
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
d.about = (() => {
    const ui = {}

    ui.init = () => {
        $('body').removeClass('view-home view-talk view-stack view-showcase').addClass('view-about').attr('data-screen', 'about');
        ui.deviceInit();
        ui.menu.refresh()
        d.home.location.init()
    }

    ui.deviceInit = () => {
        //initliaze depends on previous page
        let _prevView = $('body').attr('data-prev-page')

        switch (_prevView) {
            case ('home'):
                d.sys.layoutType(() => {
                    ui.clearElements();
                }, 'all')
                d.sys.layoutType(() => {
                    ui.rightPanel.d_init();
                    ui.socialPanel.d_init();
                    ui.highlights.init();
                    ui.menu.d_menu();
                }, 'desktop')
                d.sys.layoutType(() => {
                    ui.rightPanel.t_init();
                    ui.socialPanel.t_init();
                    ui.highlights.t_createHighlights();
                    ui.resize.t()
                }, 'tablet')
                d.sys.layoutType(() => {
                    ui.socialPanel.m_init()
                    ui.highlights.t_createHighlights();
                    ui.rightPanel.t_init();
                    ui.resize.t()
                }, 'mobile')
                break;
            default:
                d.sys.layoutType(() => {
                    ui.clearElements();
                }, 'all')
                d.sys.layoutType(() => {
                    ui.rightPanel.d_init();
                    ui.socialPanel.d_init();
                    ui.highlights.init();
                    ui.menu.d_menu();
                }, 'desktop')
                d.sys.layoutType(() => {
                    ui.rightPanel.t_init();
                    ui.socialPanel.t_init()
                    ui.highlights.t_createHighlights();
                    ui.resize.t()
                }, 'tablet')
                d.sys.layoutType(() => {
                    ui.socialPanel.m_init()
                    ui.highlights.t_createHighlights();
                    ui.rightPanel.t_init();
                    ui.resize.t()
                }, 'mobile')
        }
    }

    ui.clearElements = () => {
        if ($('h1').length) {
            $('h1').remove()
        }
    }
    ui.resize = {
        t: () => {
            $(window).resize(() => {
                if ($('body').hasClass('view-about').length) {
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

    ui.socialPanel = {
        _Panel: 'social-block',
        _contactPanel: 'contact-panel',
        _profilePanel: 'pro-pic',
        d_init: () => {
            ui.socialPanel.d_createSocialBlock();
            ui.socialPanel.d_createContactPanel()
            ui.socialPanel.d_createProfile()
        },
        t_init: () => {
            ui.socialPanel.d_createSocialBlock();
            ui.socialPanel.d_createContactPanel()
            ui.socialPanel.d_createProfile()
        },
        m_init: () => {
            ui.socialPanel.d_createProfile()
            ui.socialPanel.d_createSocialBlock();
            ui.socialPanel.d_createContactPanel()
        },
        d_createSocialBlock: () => {
            $(d.ref._siteHolder).append('<div class="' + ui.socialPanel._Panel + '" >' + d.cms.aboutSocialLinks + '</div>')
            $(d.sys.cssSelector(ui.socialPanel._Panel)).delay(400).animate({
                left: 0
            }, 300)
        },
        d_createContactPanel: () => {
            $(d.sys.cssSelector(ui.socialPanel._Panel)).prepend('<div class="' + ui.socialPanel._contactPanel + '">' + d.cms.contactPanel + '</div>')
            $(d.sys.cssSelector(ui.socialPanel._contactPanel)).delay(400).animate({
                left: 0
            }, 400)
        },
        d_createProfile: () => {
            ui.socialPanel.setProfileHeight()
            $(d.sys.cssSelector(ui.socialPanel._profilePanel)).animate({
                left: 0
            }, 400)

        },
        setProfileHeight: () => {
            if (!$(d.sys.cssSelector(ui.socialPanel._profilePanel)).length) {
                $(d.ref._siteHolder).append('<div class="' + ui.socialPanel._profilePanel + '"></div>')
            }

            setTimeout(() => {
                var h = $(window).height() - $(d.sys.cssSelector(ui.socialPanel._Panel)).height()
                $(d.sys.cssSelector(ui.socialPanel._profilePanel)).height(h)
            }, 200)

        }
    }

    ui.highlights = {
        _panel: 'highlights',
        init: () => {
            ui.highlights.createHighlights()
        },
        createHighlights: () => {
            $(d.ref._siteHolder).append('<div class="' + ui.highlights._panel + '" >' + d.cms.hightlights + '</div>')
            $(d.sys.cssSelector(ui.highlights._panel)).delay(400).animate({
                bottom: 0
            }, 500)
        },
        t_createHighlights: () => {
            let _prevView
            if ($(window).height() < $(window).width()) {
                _prevView = $(d.ref._siteHolder)
            } else {
                _prevView = $(d.sys.cssSelector(ui.socialPanel._Panel))
            }

            //to avoid create multple blocks in orientaion change
            if (!$(d.sys.cssSelector(ui.highlights._panel)).length) {
                _prevView.append('<div class="' + ui.highlights._panel + '" >' + d.cms.hightlights + '</div>')
            } else {
                $(d.sys.cssSelector(ui.highlights._panel)).detach().appendTo(_prevView)
            }

            $(d.sys.cssSelector(ui.highlights._panel)).animate({
                bottom: 0
            }, 200)
        }
    }

    ui.rightPanel = {
        _rightWrapper: 'about-right-panel',
        _rightExperience: 'experience',
        _rightQualification: 'qualification',
        _rightBrands: 'brands',
        d_init: () => {
            ui.rightPanel.d_createContainer()
        },
        t_init: () => {
            ui.rightPanel.d_createContainer()
        },
        d_createContainer: () => {
            $(d.ref._siteHolder).append('<div class="' + ui.rightPanel._rightWrapper + '"></div>');
            $(d.sys.cssSelector(ui.rightPanel._rightWrapper)).animate({
                top: 0
            }, 400, () => {
                ui.rightPanel.d_experience()
                ui.rightPanel.d_qualification()
                ui.rightPanel.d_brands()
            })
        },
        d_experience: () => {
            $(d.sys.cssSelector(ui.rightPanel._rightWrapper)).append('<div class="' + ui.rightPanel._rightExperience + '">' + d.cms.experience + '</div>');
            $(d.sys.cssSelector(ui.rightPanel._rightExperience)).animate({
                right: 0
            }, 300, () => {
                $(d.sys.cssSelector(ui.rightPanel._rightExperience)).addClass('on')
                $(d.sys.cssSelector(ui.rightPanel._rightExperience)).children('div').each((i, el) => {
                    $(el).animate({
                        opacity: 1
                    }, d.sys.randomNo(2000))
                })
            })

        },
        d_qualification: () => {
            $(d.sys.cssSelector(ui.rightPanel._rightWrapper)).append('<div class="' + ui.rightPanel._rightQualification + '">' + d.cms.qualification + '</div>');
            $(d.sys.cssSelector(ui.rightPanel._rightQualification)).animate({
                right: 0
            }, 500, () => {
                $(d.sys.cssSelector(ui.rightPanel._rightQualification)).addClass('on')
                $(d.sys.cssSelector(ui.rightPanel._rightQualification)).find('li').each((i, el) => {
                    $(el).animate({
                        opacity: 1
                    }, d.sys.randomNo(3000))
                })
            })

        },
        d_brands: () => {
            $(d.sys.cssSelector(ui.rightPanel._rightWrapper)).removeClass('no-brand')
            let currentH = $(window).height() - ($(d.sys.cssSelector(ui.rightPanel._rightExperience)).outerHeight() + $(d.sys.cssSelector(ui.rightPanel._rightQualification)).outerHeight())
            if (currentH < 200) {
                $(d.sys.cssSelector(ui.rightPanel._rightWrapper)).addClass('no-brand');
                return false;
            }

            var h = $(window).height() - ($(d.sys.cssSelector(ui.rightPanel._rightQualification)).outerHeight() + $(d.sys.cssSelector(ui.rightPanel._rightExperience)).outerHeight())

            if (!$(d.sys.cssSelector(ui.rightPanel._rightBrands)).length) {
                $(d.sys.cssSelector(ui.rightPanel._rightWrapper)).append('<div class="' + ui.rightPanel._rightBrands + '">' + d.cms.brands + '</div>');
                $(d.sys.cssSelector(ui.rightPanel._rightBrands)).height(h).animate({
                    right: 0
                }, 900, () => {
                    $(d.sys.cssSelector(ui.rightPanel._rightBrands)).addClass('on')
                    setTimeout(() => {
                        ui.rightPanel.d_brandRotator();
                    }, 1000)
                })
            }



        },
        d_brandRotator: () => {
            $(d.sys.cssSelector(ui.rightPanel._rightBrands)).children(':first-child').addClass('active')
            setInterval(() => {
                let activeEl = $(d.sys.cssSelector(ui.rightPanel._rightBrands)).find('.active');

                if (activeEl.next().length) {
                    activeEl.removeClass('active').next().addClass('active')
                } else {
                    activeEl.removeClass('active');
                    $(d.sys.cssSelector(ui.rightPanel._rightBrands)).children(':first-child').addClass('active')
                }

            }, 2000)
        }
    }

    ui.menu = {
        create: () => {
            if (!$(d.sys.cssSelector(d.ref._menuPanel)).length) {
                $(d.ref._siteHolder).append(d.cms.menu);
            }
        },
        refresh: () => {
            ui.menu.create();
            $(d.sys.cssSelector(d.ref._menuTrigger)).removeClass('active');
            $('.nav-item').removeClass('active');
            $('#nav-about').addClass('active');
        },
        d_menu: () => {
            ui.menu.create();
            $(d.sys.cssSelector(d.ref._menuPanel)).delay(800).animate({
                left: 0
            }, 300)
        }
    }

    ui.closer = {
        d: () => {
            var dfd = $.Deferred();
            $(d.sys.cssSelector(ui.rightPanel._rightWrapper)).children().each((i, el) => {
                $(el).animate({
                    right: '-100%'
                }, d.sys.randomNo(600))
            })

            $(d.sys.cssSelector(d.home.location._trigger)).fadeOut(200)

            $(d.sys.cssSelector(ui.highlights._panel)).animate({
                bottom: '-100%'
            }, 600)

            $(d.sys.cssSelector(ui.socialPanel._Panel)).children().each((i, el) => {
                $(el).animate({
                    left: '-100%'
                }, d.sys.randomNo(800))
            })

            $(d.sys.cssSelector(ui.socialPanel._profilePanel)).animate({
                left: '-100%'
            }, 300)



            setTimeout(() => {
                $(d.sys.cssSelector(ui.rightPanel._rightWrapper)).animate({
                    top: '-100%'
                })
            }, 500)

            setTimeout(() => {
                $(d.ref._siteHolder).empty();
                $(d.sys.cssSelector(d.home.location._trigger)).remove()
                dfd.resolve()
            }, 800)
            d.sys.layoutType(() => {
                $(d.sys.cssSelector(d.ref._menuPanel)).animate({
                    left: '100%'
                }, 400)
            }, 'desktop')
            d.sys.layoutType(() => {
                $(d.sys.cssSelector(d.ref._menuPanel)).animate({
                    left: '100%'
                }, 400)
                ui.closer.t()
            }, 'tablet')
            d.sys.layoutType(() => {
                ui.closer.t()
            }, 'mobile')

            return dfd.promise()
        },
        t: () => {
            if ($(d.sys.cssSelector(d.ref._menuTrigger)).hasClass('active')) {
                $(d.sys.cssSelector(d.ref._menuTrigger)).trigger('click');
            }
        }
    }
    return ui;
})();
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
                    var e = !0;
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
            $(d.ref._siteHolder).append(d.cms.contactForm)
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