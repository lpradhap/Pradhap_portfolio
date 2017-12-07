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
                    s.listTech.createRatingPanel();
                    s.listTech.showRatingPanel();
                }, 'tablet')
                d.sys.layoutType(() => {
                    s.listTech.init();
                    s.menu.create()
                }, 'mobile')
                break;
            default:
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
                    s.listTech.createRatingPanel();
                    s.listTech.showRatingPanel();
                }, 'tablet')
                d.sys.layoutType(() => {
                    s.listTech.init();
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
                if (!$(d.sys.cssSelector(s.listTech._stackWrap)).length) {
                    s.listTech.createBlock();
                }

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
                    $(el).children('div').animate({
                        right: -130
                    }, 200, () => {

                    })
                })
            })

            setTimeout(() => {
                s.listTech.showRating()
            }, 800)
        },
        showRating: () => {
            let clearReset;

            $('body').on('click mouseover touchstart', d.sys.cssSelector(s.listTech._stackItem), (e) => {
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

        if ($('body').hasClass('view-stack')) {
            $(d.ref._siteHolder).append(canvasHtml + ' ' + bubbleHtml);
        } else {
            $(d.ref._siteHolder).append(canvasHtml);
        }


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
            if (!('ontouchstart' in window) && $('body').hasClass('view-stack')) {
                window.addEventListener('mousemove', mouseMove);
            }
            window.addEventListener('scroll', scrollCheck);
            window.addEventListener('resize', resize);
        }

        function mouseMove(e) {
            var posx = 0,
                posy = 0;
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