/**
 * Created by p.loganathan on 28/05/15.
 */
var clipInterval;
var Content = {
	snookerTitle: function () {
		return '<div class="main-info snooker" ><h3 style="display: none">My Game is <span>Snooker</span></h3><p style="display: none">The most important thing, the biggest love of my life, is my snooker. I&apos;ve never been so emotionally ingrained in something - in a person, an object, anything - as I have in snooker. <br><br>- Ronnie O&apos;Sullivan</p></div>'
	},
	ShowcaseList: function () {
		return '<div class="showcase">' +
			'<ul>' +
			'   <li class="sc-dicksmith"><a href="http://www.dicksmith.com.au/" target="_blank" class="info"><span class="title">Dick Smith Electronics</span><tec>[ Magento ]</tec><div class="myrole">UI Development</div></a></li>' +
			'   <li class="sc-luxr"><a href="http://www.luxr.nl/" target="_blank"  class="info"><span class="title">Luxr</span><tec>[ Magento | Responsive ]</tec><div class="myrole">UI Development</div></a></li>' +
			'   <li class="sc-klein"><a href="http://www.klein.nl/" target="_blank"  class="info"><span class="title">Klein</span><tec>[ Magento | Responsive ]</tec><div class="myrole">UI Development</div></a></li>' +
			'   <li class="sc-slt"><a href="http://www.srilankatravelers.com/" target="_blank"  class="info"><span class="title">Sri Lanka Travelers</span><tec>[ Wordpress ]</tec><div class="myrole">UI/UX Development  |  Art Direction</div></a></li>' +
			'   <li class="sc-ism"><a href="http://www.ism.nl/" target="_blank"   class="info"><span class="title">ISM eCompany</span><tec>[ Umbraco | Responsive ]</tec><div class="myrole">UI Development</div></a></li>' +
			'   <li class="sc-vstox"><a href="http://www.vstox.com/" target="_blank"    class="info"><span class="title">Virtual Stock Market</span><tec>[ Custom ]</tec><div class="myrole">UI/UX Development  |  Art Direction</div></a></li>' +
			'   <li class="sc-cert"><img src="image/mage-logo.png" class="mage-img" /> <img src="image/mcp-logo.png" class="mcp-img" /></li>' +
			'</ul>' +
			'</div>'
	},
	mySkillRating: function () {
		return '<div class="skill-rating" style="display: none">' +
			'   <div class="set-cri-bg"></div>' +
			'   <div class="rating-pane">' +
			'   <div class="flawless"><span>Flawless</span></div>' +
			'   <div class="good"><span>Good</span></div>' +
			'   <div class="rookie"><span>Rookie</span></div>' +
			'       <span data-level="90%" id="html"><text>HTML</text></span>' +
			'       <span data-level="85%"  id="css"><text>CSS</text></span>' +
			'       <span data-level="75%"  id="jQuery"><text>jQuery</text></span>' +
			'       <span data-level="90%"  id="english"><text>English</text></span>' +
			'       <span data-level="95%"  id="attitude"><text>Positive Attitude</text></span>' +
			'       <span data-level="95%"  id="team"><text>Team Player</text></span>' +
			'       <span data-level="80%"  id="mage"><text>Magento</text></span>' +
			'       <span data-level="84%"  id="lead"><text>Leadeship</text></span>' +
			'</div>' +
			'<div class="exp">' +
			'       <div class="title" style="display: none"><span>Experience |</span>  Experience is one thing you can&apos;t get for nothing.</div>' +
			'       <div class="work" style="display: none"><div class="role"><span>Team Lead</span>2014 - Present</div><div class="comp"><div>ISMAPAC Pvt Ltd</div>largest ecommerce solution in netherlands <a href="http://www.ismapac.com" target="_blank">www.ismapac.com</a></div>' +
			'       <div class="work" style="display: none"><div class="role"><span>UI Engineer</span>2012 - 2014</div><div class="comp"><div>Netstarter Pty Ltd  </div>Ranked #1 Client Statisfaction 2013 / #2 Magento Partner 20 <a href="http://www.netstarter.com.au" target="_blank">www.netstarter.com.au</a></div>' +
			'       <div class="work" style="display: none"><div class="role"><span>Senior UI Engineer</span>2007 - 2012</div><div class="comp">Allion Technologies Pvt Ltd<div></div>An offshore software developemnt company with clients in Aust <a href="http://www.alliontechnologies.com" target="_blank">www.alliontechnologies.com</a></div>' +
			'</div>' +
			'</div>' +
			'</div>'
	},
	lionLarger: function () {
		return '<div class="lion-larger">' +
			'   <h3 class="lion-info" style="display: none">Lion Larger is my Beer</h3>' +
			'<p style="display: none">Let a man walk ten miles steadily on a hot summer&apos;s day along a dusty English road, and he will soon discover why beer was invented.<br><br>- Gilbert K. Chesterton' +
			'</div>'
	},
	myFace: function () {
		return '<div class="face-panel" style="display: none"><div class="face-panel-wrapper">' +
			'<div class="face-b face-child">' +
			'<img src="image/face-b.png" /> ' +
			'</div>' +
			'<div class="face-c face-child">' +
			'   <img src="image/face-c.png" class="flt-r" />' +
			'</div>' +
			'</div>' +
			'<div class="face-b-skill">' +
			'<span class="sprite-me mage"></span>' +
			'<span class="sprite-me asp"></span>' +
			'<span class="sprite-me php"></span>' +
			'<span class="sprite-me html"></span>' +
			'<span class="sprite-me js"></span>' +
			'<span class="sprite-me xml"></span>' +
			'<span class="sprite-me seo"></span>' +
			'<span class="sprite-me wp"></span>' +
			'<span class="sprite-me css"></span>' +
			'<span class="sprite-me jml"></span>' +
			'<span class="sprite-me bootstrap"></span>' +
			'<span class="sprite-me sana"></span>' +
			'<span class="sprite-me sass"></span>' +
			'</div>' +
			'<div class="face-c-skill">' +
			'<span class="sprite-me ps"></span>' +
			'<span class="sprite-me ai"></span>' +
			'<span class="sprite-me fw"></span>' +
			'<span class="sprite-me mf"></span>' +
			'</div>' +
			'</div>'
	},
	AboutContent: function () {
		return '<div class="about-content" >' +
			'<div class="about-content-pane">' +
			'<div class="cerification">' +
			'<img src="image/mcp-logo.png" />' +
			'<a href="http://www.magentocommerce.com/certification/directory/dev/1498104/" target="_blank"> <img src="image/mage-logo.png"/></a>' +
			'</div>' +
			'<p>An enthusiastic and professional User Interface Engineer, who enjoys being part of leading, successful and productive team, with a quick to grasp new ideas and concepts, and to develop innovative and creative solutions to problems. An individual who is able to work well on his own initiative and can demonstrate the high levels of motivation required to meet the tightest of deadlines. Even under significant pressure, possess a strong ability to perform effectively.</p>' +
			'<p>7+ years of professional experience, An enthusiastic and professional User Interface Engineer with involving in more than 150+ projects and having extensive experience in HTML, web based applications, Web sites, Graphic Design and Mastered in Cross Web Browser compatible Web UI design. Extensive ability in researching and development on Web Design Techniques, Experience with HTML template editing, knowledge on JavaScript/JQuery and  with a quick to grasp new ideas and concepts, and to develop innovative and creative solutions to problems</p>' +
			'</div>' +
			'<div class="some-brands">' +
			'<div class="brand-title">Few Brands</div>' +
			'<div class="logo-list">' +
			'<span class="sprite-me dm"></span><span class="sprite-me sy"></span><span class="sprite-me sl"></span><span class="sprite-me kl"></span><span class="sprite-me mx"></span><span class="sprite-me zs"></span><span class="sprite-me ep"></span>' +
			'</div>' +
			'</div>' +
			'</div>'
	},
	ContactForm: function () {
		return '<div class="form-style" id="contact_form">' +
			'<div class="form-style-heading">Please Contact Us</div>' +
			'<div id="contact_results"></div>' +
			'<div id="contact_body">' +
			'<label><span>Name <span class="required">*</span></span>' +
			'<input type="text" name="name" id="name" required="true" class="input-field"/>' +
			'</label>' +
			'<label><span>Email <span class="required">*</span></span>' +
			'<input type="email" name="email" required="true" class="input-field"/>' +
			'</label>' +
			'<label><span>Phone</span>' +
			'<input type="text" name="phone1" maxlength="4" placeholder="+91"  required="true" class="tel-number-field"/>&mdash;<input type="text" name="phone2" maxlength="15"  required="true" class="tel-number-field long" />' +
			'</label>' +
			'<label for="subject"><span>Regarding</span>' +
			'<select name="subject" class="select-field">' +
			'<option value="General Question">General Question</option>' +
			'<option value="Advertise">Advertisement</option>' +
			'<option value="Partnership">Partnership Oppertunity</option>' +
			'</select>' +
			'</label>' +
			'<label for="field5"><span>Message <span class="required">*</span></span>' +
			'	<textarea name="message" id="message" class="textarea-field" required="true"></textarea>' +
			'</label>' +
			'<label>' +
			'	<span>&nbsp;</span><input type="submit" id="submit_btn" value="Submit" />' +
			'</label>' +
			'</div>' +
			'</div>'

	},
	MobileNotDone: function(){
		return ('<div class="mobile-no-done">' +
			'<p>Mate..!! the Mobile site development is not completed yet.</p>' +
			'<a href="#" class="understood">understood, but ill check ths site anyway.</a> ' +
			'</div>')
	}
};
var MenuAnim = {
	Home: function () {
		setTimeout(function(){
		displayName()
		displayMenu()

		}, 2000)


		function displayName() {
			elem = $('.logo span')
			l = (($(window).width() - elem.width()) / 2)
			elem.hide().css({
				left: -500,
				top: '',
				right: '',
				margin: '',
				color: ''
			}).show().animate({
				left: l
			}, 600)

		}

		function displayMenu() {
			elem = $('nav.main')
			l = (($(window).width() - elem.width()) / 2)

			elem.hide().css({
				right: -500,
				top: '',
				left: '',
				margin: '',
				color: ''
			}).show().animate({
				right: l
			}, 600)

		}
	},
	ShowList: function () {
		$('.logo span').css('color', '#fff').animate({
			left: 20,
			top: 20,
			marginTop: 0,
			color: ''
		}, 400)
		$('nav.main h2').css('color', '#fff')
		$('nav.main')
			.removeAttr('style')
			.hide(0)
			.css({'left': -500, 'margin-top': 100})
			.show().animate({
				left: 10
			}, 1000)
	},
	About: function () {
		$('nav.main h2').css('color', '#fff')
		$('nav.main')
			.removeAttr('style')
			.hide(0)
			.css({'color': '#fff', 'left': '0', 'top': '-300px', 'right': '0'})
			.show().animate({
				top: 100
			}, 1000).promise().done(function () {
				$('nav.main').animate({
					top: 70
				}, 250)
			}).promise().done(function () {
				$('nav.main').animate({
					top: 100
				}, 200)
			}).promise().done(function () {
				$('nav.main').animate({
					top: 90
				}, 190)
			}).promise().done(function () {
				$('nav.main').animate({
					top: 100
				}, 150)
			})
		$('.logo span').css({'color': '#fff', 'left': '0', 'top': '-50px', 'right': '0'}).animate({
			top: 20,
			marginTop: 0
		}, 400)
		About.activeMenu()
	},
	Contact: function () {
		$('nav.main h2').css('color', '#fff')
		$('nav.main')
			.removeAttr('style')
			.hide(0)
			.css({'color': '#fff', 'left': '0', 'top': '-300px', 'right': '0'})
			.show().animate({
				top: 100
			}, 1000).promise().done(function () {
				$('nav.main').animate({
					top: 70
				}, 250)
			}).promise().done(function () {
				$('nav.main').animate({
					top: 100
				}, 200)
			}).promise().done(function () {
				$('nav.main').animate({
					top: 90
				}, 190)
			}).promise().done(function () {
				$('nav.main').animate({
					top: 100
				}, 150)
			})
		$('.logo span').css({'color': '#fff', 'left': '0', 'top': '-50px', 'right': '0'}).animate({
			top: 20,
			marginTop: 0
		}, 400)
		Contact.activeMenu()
	}
};
var HomePage = {
	init: function () {

		$('nav.main > h2#home').trigger('click');

	},
	wrapperBg: function (bg) {
		HomePage.activeMenu()
		var interval = 400;
		$('.clip').each(function () {
			$(this).animate({
				backgroundColor: bg,
				opacity: 1
			}, interval * Math.floor((Math.random() * 5) + 1));
		}).promise().done(function () {
			HomePage.setVector(v);
		})
	},
	setVector: function (v) {

		elem = $('.vector')
		elem.css('background-image','url(image/lion.svg?'+new Date().getTime()+')')
		elem.addClass(v).fadeIn(800).promise().done(MenuAnim.Home)

	},
	activeMenu: function () {
		$('nav.main h2').animate({
			color: '',
			fontWeight: ' '
		}, 150)
	},
	close: function () {
		$('nav.main').animate({
			right: -500
		}, 400)
		$('.logo span').animate({
			left: -500
		}, 400).promise().done(function () {
			$('.vector').fadeOut(400)
		})
	}
};
var Showcase = {
	init: function () {
		Showcase.ShowList()
	},
	wrapperBg: function (bg) {

		var counter = ($('.clip').length) * 2; // depends on desired count,
		for (var i = 0; i < counter; i++) {
			var hClip = $('.bg-wrapper > .clip:first-child').css('height')
			$('.bg-wrapper').append('<div class="clip addon" style="height:' + hClip + '"></div>');
		}

	},
	ShowList: function () {
		$('.content').append(Content.ShowcaseList())
		$('.content').append(Content.mySkillRating())
		var interval = 600;
		$('.showcase li').each(function () {
			$(this).animate({
				opacity: 1
			}, interval * Math.floor((Math.random() * 5) + 1));
		})

		Showcase.ShowMenu()

	},
	ShowMenu: function () {
		MenuAnim.ShowList()

		Showcase.activeMenu()

		setTimeout(function () {

			var interval = 400;
			$('.clip').each(function () {
				$(this).animate({
					backgroundColor: '#100000 '
				}, interval * Math.floor((Math.random() * 5) + 1));
			})


		}, 800);
		DisplayMyRating()

		function DisplayMyRating() {
			$('.skill-rating').show().animate({
				right: 0
			}, 400).promise().done(function () {

				var interval = 400;
				$('.skill-rating .rating-pane > div ').each(function () {
					$(this).animate({
						right: 0
					}, interval * Math.floor((Math.random() * 5) + 1))
				}).promise().done(function () {
					var interval = 1200;
					$('.skill-rating .rating-pane > span ').each(function () {
						h = $(this).attr('data-level')
						$(this).animate({
							opacity: 1,
							height: h
						}, interval * Math.floor((Math.random() * 5) + 1))
					})
				}).promise().done(function () {
					$('.skill-rating .exp .title').fadeIn(400).promise().done(function () {
						$('.skill-rating .exp .work').fadeIn(600)
						Showcase.randomChangeBg()

					})
				})

			})


		}


	},
	activeMenu: function () {
		$('nav.main h2').animate({
			color: '',
			fontWeight: ' '
		}, 150).promise().done(function () {
			$('nav.main #showcase').animate({
				color: 'rgb(190, 0, 0)',
				fontWeight: 'bold'
			}, 150)

		})

	},
	randomChangeBg: function () {

		$('body').addClass('showlist-addon-active');


		clipInterval = setInterval(function () {

			var arr = ['#2c0000', '#350b0b', '#000'],
				rand = Math.floor(Math.random() * arr.length),
				func = arr[rand];

			var interval = 400;
			$('.clip').each(function () {
				$(this).animate({
					backgroundColor: func
				}, interval * Math.floor((Math.random() * 5) + 1));
			})
		}, 300)
	},
	close: function () {

		$('.skill-rating').animate({
			right: -600
		}, 200).promise().done($('.skill-rating').remove())

		var interval = 600;
		$('.showcase li').each(function () {
			$(this).animate({
				opacity: 0
			}, interval * Math.floor((Math.random() * 5) + 1));
		})

		$('.showcase').remove()
		$('.logo span, nav.main').animate({
			left: -500
		}, 200)

		clearInterval(clipInterval)

		$('body').removeClass('showlist-addon-active');
		$('.clip').stop(true, false);
		$('.clip.addon').remove();


	}
};
var About = {
	init: function () {
		MenuAnim.About()
		About.setFace()

	},
	wrapperBg: function () {

		var counter = ($('.clip').length) * 2; // depends on desired count,
		for (var i = 0; i < counter; i++) {
			var hClip = $('.bg-wrapper > .clip:first-child').css('height')

			$('.bg-wrapper').append('<div class="clip addon" style="height:' + hClip + '"></div>');
		}

	},
	activeMenu: function () {
		$('nav.main h2').animate({
			color: '',
			fontWeight: ' '
		}, 150).promise().done(function () {
			$('nav.main #about').animate({
				color: '#ff9900',
				fontWeight: 'bold'
			}, 150)

		})

	},
	setFace: function () {
		$('.content').append(Content.myFace())
		$('.face-panel').fadeIn(600)

		fb = $(".face-b");
		fc = $('.face-panel-wrapper');
		w = (fc.width()) / 100;


		$('.face-panel').bind('mousemove', function (e) {

			var offset = $(".face-panel").offset();
			var fbw = $(".face-panel").width() / 2

			var pleft = e.pageX - offset.left;

			if (pleft > fbw) {

				fb.stop().animate({
					width: w * 20
				}, 700)
				$('.face-c-skill').stop().animate({
					opacity: 1
				}, 400)
				$('.face-b-skill').stop().animate({
					opacity: 0.3
				}, 400)
			}
			else {

				fb.stop().animate({
					width: w * 80
				}, 700)

				$('.face-b-skill').stop().animate({
					opacity: 1
				}, 400)
				$('.face-c-skill').stop().animate({
					opacity: 0.3
				}, 400)
			}

		})
		$('.face-panel').bind('mouseleave', function (e) {

			fb.stop().animate({
				width: w * 50
			}, 700)

			$('.face-b-skill').stop().animate({
				opacity: 0.3
			}, 400)
			$('.face-c-skill').stop().animate({
				opacity: 0.3
			}, 400)
		})

		About.createContentSpace()
	},
	createContentSpace: function () {
		$('.content').append(Content.AboutContent)
		var ContentPane = $('.about-content')
		ContentPane.promise().done(function () {
			ContentPane.animate({
				backgroundColor: 'rgb(47, 45, 44)',
				borderColor: '#000'
			}, 1500)
			$('.logo span').animate({
				color: 'rgb(128, 128, 128)'
			}, 1500)
		})

		About.randomChangeBg()
	},
	randomChangeBg: function () {

		$('body').addClass('showlist-addon-active');


		clipInterval = setInterval(function () {

			var arr = ['#211000', '#170b00', '#000'],
				rand = Math.floor(Math.random() * arr.length),
				func = arr[rand];

			var interval = 400;
			$('.clip').each(function () {
				$(this).animate({
					backgroundColor: func
				}, interval * Math.floor((Math.random() * 5) + 1));
			})
		}, 300)
	},
	close: function () {

		$('.skill-rating').animate({
			right: -600
		}, 200).promise().done($('.skill-rating').remove())

		var interval = 600;
		$('.showcase li').each(function () {
			$(this).animate({
				opacity: 0
			}, interval * Math.floor((Math.random() * 5) + 1));
		})

		$('.about-content, .face-panel').remove()
		$('.logo span, nav.main').animate({
			top: -500
		}, 200).css({'left': '-500', 'right': '', 'top': ''})

		clearInterval(clipInterval)

		$('body').removeClass('showlist-addon-active');
		$('.clip').stop(true, false);
		$('.clip.addon').remove();


	}

}

var Contact = {
	init: function () {
		MenuAnim.Contact()
		Contact.createForm()
		$('body').addClass('set-bg');
	},
	createForm: function () {
		$('.content').append(Content.ContactForm);

		clipInterval = setInterval(function () {

			var arr = ['0.4', '0.3', '0.2'],
				rand = Math.floor(Math.random() * arr.length),
				func = arr[rand];

			var interval = 400;
			$('.clip').each(function () {
				$(this).animate({
					opacity: func
				}, interval * Math.floor((Math.random() * 5) + 1));
			})
		}, 300)
		$('#submit_btn').bind('click', function (e) {
			var proceed = true;
			//simple validation at client's end
			//loop through each field and we simply change border color to red for invalid fields
			$("#contact_form input[required=true], #contact_form textarea[required=true]").each(function () {
				$(this).css('border-color', '');
				if (!$.trim($(this).val())) { //if this field is empty
					$(this).css('border-color', 'red'); //change border color to red
					proceed = false; //set do not proceed flag
				}
				//check invalid email
				var email_reg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
				if ($(this).attr("type") == "email" && !email_reg.test($.trim($(this).val()))) {
					$(this).css('border-color', 'red'); //change border color to red
					proceed = false; //set do not proceed flag
				}
			});

			if (proceed) //everything looks good! proceed...
			{
				//get input field values data to be sent to server
				post_data = {
					'user_name': $('input[name=name]').val(),
					'user_email': $('input[name=email]').val(),
					'country_code': $('input[name=phone1]').val(),
					'phone_number': $('input[name=phone2]').val(),
					'subject': $('select[name=subject]').val(),
					'msg': $('textarea[name=message]').val()
				};

				//Ajax post data to server
				$.post('contact_me.php', post_data, function (response) {
					if (response.type == 'error') { //load json data from server and output message
						output = '<div class="error">' + response.text + '</div>';
					} else {
						output = '<div class="success">' + response.text + '</div>';
						//reset values in all input fields
						$("#contact_form  input[required=true], #contact_form textarea[required=true]").val('');
						$("#contact_form #contact_body").slideUp(); //hide form after success
					}
					$("#contact_form #contact_results").hide().html(output).slideDown();
				}, 'json');
			}
		})

		//reset previously set border colors and hide all message on .keyup()
		$("#contact_form  input[required=true], #contact_form textarea[required=true]").keyup(function() {
			$(this).css('border-color','');
			$("#result").slideUp();
		});


	},
	activeMenu: function () {
		$('nav.main h2').animate({
			color: '',
			fontWeight: ' '
		}, 150).promise().done(function () {
			$('nav.main #contact').animate({
				color: '#0ce0ff',
				fontWeight: 'bold'
			}, 150)

		})

	},
	close: function () {
		clearInterval(clipInterval)
		var interval = 600;
		var interval = 600;
		$('.contact li').each(function () {
			$(this).animate({
				opacity: 1
			}, interval * Math.floor((Math.random() * 5) + 1));
		})
		$('.contact li').each(function () {
			$(this).animate({
				backgroundColor: '#000'
			}, interval * Math.floor((Math.random() * 5) + 1));
		}).promise().done(function () {
			var interval = 600;
			$('.contact li').each(function () {
				$(this).animate({
					opacity: 0
				}, interval * Math.floor((Math.random() * 5) + 1));
			})
		})

		$('.skill-rating').animate({
			right: -600
		}, 200).promise().done($('.skill-rating').remove())


		$('.contact').remove()
		$('.logo span, nav.main').animate({
			top: -500
		}, 200).css({'left': '-500', 'right': '', 'top': ''})


		$('.clip').stop(true, false);
		$('body').removeClass('set-bg');

	}

}


$('document').ready(function () {
	ClipCreate()

	$('.clip').height($('.clip').width())

	$('nav.main > h2').on('click', function () {

		var pageId = $(this).prop('id');


		switch (pageId) {
			case 'home':
				bg = "#3d7dc7"
				v = 'lion-bg'
				page = 'home'
				if (!($('body').attr('data-page') == pageId)) {
					CloseCurrent()
					HomePage.wrapperBg(bg);
				}
				break;
			case 'showcase':
				bg = "#000"
				v = '#'
				page = 't2'
				if (!($('body').attr('data-page') == pageId)) {
					CloseCurrent()
					Showcase.wrapperBg(bg)
					saySomething(Showcase.init);
				}
				//Showcase.init()
				break;
			case 'about':
				bg = "#000"
				page = 't3'
				if (!($('body').attr('data-page') == pageId)) {
					CloseCurrent()
					About.wrapperBg()
					saySomething(About.init);
				}
				break;
			case 'resume':
				location.href = "pradhap_resume.zip";
				break;
			case 'contact':
				bg = "#000"
				if (!($('body').attr('data-page') == pageId)) {
					CloseCurrent()
					saySomething(Contact.init);
				}
				break;
			default:
				text = "you got me";

		}


		$('body').attr({
			'data-page': pageId,
			'class': 'b-' + pageId
		})

	})

	HomePage.init();

	function CloseCurrent() {

		b = $('body').attr('data-page')
		if (b == 'home') {
			HomePage.close()
		}
		else if (b == 'showcase') {
			Showcase.close()
		}
		else if (b == 'about') {
			About.close()
		}
		else if (b == 'contact') {
			Contact.close()
		}
	}

	function saySomething(callback) {
		var arr = [iLikeSnooker, iLikeLion],
			rand = Math.floor(Math.random() * arr.length),
			func = arr[rand];

		func(callback);


		function iLikeSnooker(callback) {
			var interval = 400;
			$('.clip').each(function () {
				$(this).animate({
					backgroundColor: bg
				}, interval * Math.floor((Math.random() * 5) + 1));
			})

			$('.bg-wrapper').css('z-index', 5);
			$('.content').append('<video autoplay loop muted id="bgvid" ><source src="video/snooker.mp4" type="video/mp4"></video>')
			$('#bgvid').show()
			$('.bg-wrapper .clip').animate({
				opacity: "0.6"
			}).promise().done(function () {
				$('body').append(Content.snookerTitle)
				$('.main-info.snooker h3').fadeIn(200)
				$('.main-info.snooker p').fadeIn(800)
			})

			setTimeout(function () {

				$('.main-info.snooker p').fadeOut(800)
				$('.main-info.snooker h3').fadeOut(200).promise().done(function () {
					$('.main-info.snooker').remove()
					$('.bg-wrapper .clip').animate({
						opacity: 1
					}).promise().done(function () {
						$('#bgvid').remove()
						$('.bg-wrapper').css('z-index', '');

						callback();
					})


				})

			}, 8000);


		}

		function iLikeLion(callback) {
			var interval = 400;
			$('.clip').each(function () {
				$(this).animate({
					backgroundColor: bg
				}, interval * Math.floor((Math.random() * 5) + 1));
			})

			$('.bg-wrapper').css('z-index', 5);
			$('.content').append('<video autoplay loop muted  id="bgvid" ><source src="video/lionlarger.mp4" type="video/mp4"></video>')
			$('#bgvid').show()
			$('.bg-wrapper .clip').animate({
				opacity: "0.6"
			}).promise().done(function () {
				$('body').append(Content.lionLarger)
				$('.lion-larger img').animate({
					left: 0
				}, 400).promise().done(function () {
					$('.lion-larger h3').fadeIn(function () {
						$('.lion-larger p').fadeIn()
					})
				})
			})

			setTimeout(function () {
				$('.lion-larger p').animate({
					left: 0
				}).promise().done($('.lion-larger p').remove())
				$('.lion-larger p').fadeOut(800)
				$('.lion-larger h3').fadeOut(200).promise().done(function () {
					$('.lion-larger').remove()
					$('.bg-wrapper .clip').animate({
						opacity: 1
					}).promise().done(function () {
						$('#bgvid').remove()
						$('.bg-wrapper').css('z-index', '');

						callback();
					})


				})

			}, 7000);

		}
	}

	function ClipCreate() {
		$('.bg-wrapper').children().remove()

		var ch = $(window).height()
		var cw = $(window).width()
		var cSetW = ( $(window).width()) / 10
		var cRow = ch / cSetW
		var count = (cRow + 1) * 10
		for (var i = 0; i < count; i++) {
			$('.bg-wrapper').append('<div class="clip" style="height:' + cSetW + '"></div>');
		}
	}

})

$('dcoument').resize(function(){
	if ($(window).width() == '767') {

		$('body').append(Content.MobileNotDone());

	}
})