'use strict';

d.stack = function() {
    var s = {};

    s.init = function() {
        $('body').removeClass('view-home view-about view-showcase  view-talk').addClass('view-stack').attr('data-screen', 'stack');
        s.deviceInit();
        d.home.location.init();
        //menu refresh to set state correctly
        d.stack.menu.refresh();
    };

    s.deviceInit = function() {

        //initliaze depends on previous page
        var _prevView = $('body').attr('data-prev-page');

        switch (_prevView) {
            case 'home':

                d.sys.layoutType(function() {
                    s.menu.create();
                    setTimeout(function() {
                        s.setBg();
                    }, 1800);
                    s.name.d();
                    s.socialIcon.d();
                    s.menu.desktopAnim();
                    s.listTech.init();
                    s.listTech.createRatingPanel();
                    s.listTech.showRatingPanel();
                }, 'desktop');

                d.sys.layoutType(function() {
                    s.menu.create();
                    setTimeout(function() {
                        s.setBg();
                    }, 1800);
                    s.listTech.init();
                    s.name.t();
                    s.menu.tabletAnim();
                    s.createRatingPanel();
                    s.showRatingPanel();
                }, 'tablet');
                d.sys.layoutType(function() {
                    s.menu.create();
                    s.listTech.init();
                }, 'mobile');
                break;
            default:

                d.sys.layoutType(function() {
                    s.menu.create();
                    setTimeout(function() {
                        d.stack.setBg();
                    }, 1800);
                    d.stack.name.d();
                    d.stack.socialIcon.d();
                    d.stack.menu.desktopAnim();
                    d.stack.listTech.init();
                    s.listTech.createRatingPanel();
                    s.listTech.showRatingPanel();
                }, 'desktop');

                d.sys.layoutType(function() {
                    s.menu.create();
                    setTimeout(function() {
                        d.stack.setBg();
                    }, 1800);
                    d.stack.listTech.init();
                    d.stack.name.t();
                    d.stack.menu.tabletAnim();
                    s.listTech.createRatingPanel();
                    s.listTech.showRatingPanel();
                }, 'tablet');
                d.sys.layoutType(function() {
                    d.stack.listTech.init();
                    s.menu.create();
                }, 'mobile');
        }
    };

    s.listTech = {
        _stackWrap: 'stack_list_wrapper',
        _stackItem: 'stack-item',
        _ratingPanel: 'rating-block',
        init: function init() {
            setTimeout(function() {
                s.listTech.createBlock();
            }, 100);
        },
        createBlock: function createBlock() {
            var blockCount = d.cms.stackList.length;

            $(d.ref._siteHolder).append('<div class="' + s.listTech._stackWrap + '"></div>');

            for (var i = 0; i < blockCount; i++) {
                var name = d.cms.stackList[i].name;
                var css = name.toLowerCase().replace(' ', '');
                var html = '<div class="' + s.listTech._stackItem + ' stack-' + css + '" data-rating="' + d.cms.stackList[i].rate + '" ><span>' + d.cms.stackList[i].name + '</span></div>';
                $(d.sys.cssSelector(s.listTech._stackWrap)).append(html);
            }

            $(d.sys.cssSelector(d.stack.listTech._stackWrap)).delay(4000).children().each(function(i, el) {
                $(el).delay(d.sys.randomNo(3500)).animate({
                    opacity: 1
                }, 300);
            });
        },
        createRatingPanel: function createRatingPanel() {
            $(d.ref._siteHolder).append('<div class="' + s.listTech._ratingPanel + '"><div class="flw"><span>Expert</span></div><div class="good"><span>intermediate</span></div><div class="rookie"><span>Rookie</span></div><div class="rating-scale"></div></div>');
        },
        showRatingPanel: function showRatingPanel() {
            $(d.ref._siteHolder).find(d.sys.cssSelector(s.listTech._ratingPanel)).children().each(function(i, el) {

                $(el).delay(1500).animate({
                    right: 0
                }, d.sys.randomNo(400), function() {
                    $(el).children().animate({
                        right: -130
                    }, 200, function() {
                        d.stack.listTech.showRating();
                    });
                });
            });
        },
        showRating: function showRating() {
            var clearReset = void 0;

            $('body').on('click mouseover touchstart', d.sys.cssSelector(s.listTech._stackItem), function(e) {
                $('body').addClass('node-on');

                $(d.sys.cssSelector(s.listTech._stackItem)).removeClass('active-node');
                $(e.target).addClass('active-node');

                $('.rating-scale').addClass('rating-on');
                var _10p = $(window).height() / 10;

                var h = $(e.target).attr('data-rating') * _10p + 'px';
                $('.rating-scale').css('height', h);

                clearTimeout(clearReset);
                clearRating();

                function clearRating() {
                    clearReset = setTimeout(function() {
                        $('.rating-scale').css('height', '0');
                        $('.rating-scale').removeClass('rating-on');
                        $('body').removeClass('node-on');
                        $(d.sys.cssSelector(s.listTech._stackItem)).removeClass('active-node');
                    }, 4000);
                }
            });

            $('body').on('mouseout', d.sys.cssSelector(d.stack.listTech._stackWrap), function(e) {
                $('.rate-building').css('backgroundPosition', '0 0');
                $('.rate-building').removeClass('BgOn');
            });
        }
    };

    s.name = {
        create: function create() {
            if (!$('h1').length) {
                $(d.ref._siteHolder).append(d.cms.common_name_placeholder);
                $('h1').find('span').show();
            }
        },
        d: function d() {
            s.name.create();

            $('h1').animate({
                top: 50
            }, 300);
        },
        t: function t() {
            s.name.create();

            $('h1').animate({
                bottom: 50
            }, 300);
        }
    };

    s.socialIcon = {
        create: function create() {
            if (!$('.sm-icn').length) {
                $(d.ref._siteHolder).append(d.cms.social_media_links);
            }
        },
        d: function d() {
            s.socialIcon.create();
            $('.sm-icn').delay(1000).animate({
                top: 65
            }, 300);
        }
    };

    s.menu = {
        create: function create() {
            if (!$(d.sys.cssSelector(d.ref._menuPanel)).length) {
                $(d.ref._siteHolder).append(d.cms.menu);
            }
        },
        refresh: function refresh() {
            $(d.sys.cssSelector(d.ref._menuTrigger)).removeClass('active');
            $('.nav-item').removeClass('active-menu');
            $('#nav-stack').addClass('active-menu');
        },
        desktopAnim: function desktopAnim() {
            $(d.sys.cssSelector(d.ref._menuPanel)).css('top', '').delay(400).animate({
                left: 22
            }, 300);
        },
        tabletAnim: function tabletAnim() {
            $(d.sys.cssSelector(d.ref._menuPanel)).css('top', '');
        }
    };

    s.setBg = function() {
        var canvasHtml = '<div id="large-header" class="large-header"><canvas id="canvas"></canvas></div>';
        var bubbleHtml = '<div class="stack-wrapper"><ul class="bg-bubbles"><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li> <li></li><li></li></ul></div>';
        var width = void 0,
            height = void 0,
            largeHeader = void 0,
            canvas = void 0,
            ctx = void 0,
            points = void 0,
            target = void 0,
            animateHeader = true;

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
                    var p2 = points[j];
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
                onComplete: function onComplete() {
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
    };

    s.closer = {
        homeNext: function homeNext() {
            var dfd = $.Deferred();
            var counter;

            d.sys.layoutType(function() {

                //hide all stacks and then remove the panel from the DOM
                $(d.sys.cssSelector(s.listTech._stackItem)).each(function(i, el) {
                    $(el).delay(d.sys.randomNo(800)).fadeOut(200);
                });
                $(d.sys.cssSelector(d.home.location._trigger)).fadeOut(200);
                $('.large-header, .stack-wrapper').fadeOut(800);
            }, 'all');

            d.sys.layoutType(function() {
                $('h1').animate({
                    top: -300
                }, 400);

                $('.sm-icn').animate({
                    top: -200
                }, 300);

                $(d.sys.cssSelector(d.ref._menuPanel)).animate({
                    left: -700
                }, 600);
                //hide ratings panel and then remove
                s.closer.closeRatingsPanel();
            }, 'desktop');

            d.sys.layoutType(function() {
                if ($(d.sys.cssSelector(d.ref._menuTrigger)).hasClass('active')) {
                    $(d.sys.cssSelector(d.ref._menuTrigger)).trigger('click');
                }
                //hide ratings panel and then remove
                s.closer.closeRatingsPanel();
            }, 'tablet');
            d.sys.layoutType(function() {
                if ($(d.sys.cssSelector(d.ref._menuTrigger)).hasClass('active')) {
                    $(d.sys.cssSelector(d.ref._menuTrigger)).trigger('click');
                }
            }, 'mobile');
            setTimeout(function() {
                $(d.sys.cssSelector(d.home.location._trigger)).remove();
                $(d.ref._siteHolder).empty();
                dfd.resolve();
            }, 1000);

            return dfd.promise();
        },
        closeRatingsPanel: function closeRatingsPanel() {
            $(d.sys.cssSelector(s.listTech._ratingPanel)).fadeOut(800);
        }
    };
    return s;
}();