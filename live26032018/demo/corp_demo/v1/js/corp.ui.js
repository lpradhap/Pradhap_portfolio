var corp =  {
	init: function() {
		corp.leftMenu.init();
if($('.org-view').length){
	$("#org").jOrgChart({
		chartElement:".org-view"
	});
}

	},
	leftMenu: {
		_navWrapper: ".left-nav",
		init:function() {
			corp.leftMenu.setDimen()
			corp.leftMenu.buildMenu()
		},
		setDimen: function() {
			var w = $(window).height()
			var h = $('header').height()

			$(corp.leftMenu._navWrapper).height(w - h - 1)
		},
		buildMenu: function(){
			var uid = $('body').data('user')
			if(uid==1) {
				$('.left-nav').prepend(corp.leftMenu.userOneMenu)
			}
			else if(uid==2) {
				$('.left-nav').prepend(corp.leftMenu.userTwoMenu)
			}
			else if(uid==3) {
				$('.left-nav').prepend(corp.leftMenu.userThreeMenu)
			}
		},
		userOneMenu: function() {
			return '<ul>' +
                 '<li><a class="dashboard" href="#"><i class="fa fa-th-large" aria-hidden="true"></i><span>Dasboard<span></a></li>' +
                 '<li><a href="user1_my_goal.html"><i class="fa fa-bullseye" aria-hidden="true"></i><span>Goal Management</span></a>' +
                      '<div class="sub-menu">' +
                          '<ul>' +
                              '<li><a href="user1_my_goal.html"><span>My Goals<span></a></li>' +
                             '<li><a href="user1_my_kpi.html"><span>My KPI<span></a></li>' +
                              '<li><a href="user1_my_action_plan.html"><span>My Action Plan<span></a></li>' +
                              '<li><a href="user1_company_goals.html"><span>Company Goals<span></a></li>' +
                              '<li><a href="user1_d_goals.html"><span>Delegate Goals<span></a></li>' +
                          '</ul>' +
                      '</div>' +
                  '</li>' +
                  '<li><a href="user1_organisation.html"><i class="fa fa-users" aria-hidden="true"></i><span>Organisation<span></a></li>' +
                  '<li><a href="user1_strategymap.html"><i class="fa fa-map" aria-hidden="true"></i><span>Strategy Map<span></a></li>' +
                  '<li><a href="#"><i class="fa fa-comments" aria-hidden="true"></i><span>Notification<span></a></li>' +
                  '<li><a href="#"><i class="fa fa-cog" aria-hidden="true"></i><span>Settings<span></a></li>' +
              '</ul>'
		},
		userTwoMenu: function() {
			return '<ul>' +
                 '<li><a class="dashboard" href="user2_dashboard.html"><i class="fa fa-th-large" aria-hidden="true"></i><span>Dasboard<span></a></li>' +
                 '<li><a href="user2_company_goals.html"><i class="fa fa-bullseye" aria-hidden="true"></i><span>Goal Management</span></a>' +
                      '<div class="sub-menu">' +
                          '<ul>' +
                              '<li><a href="user2_company_goals.html"><span>Company Goals<span></a></li>' +
                              '<li><a href="user2_d_goals.html"><span>Delegate Goals<span></a></li>' +
                          '</ul>' +
                      '</div>' +
                  '</li>' +
                  '<li><a href="user2_organisation.html"><i class="fa fa-users" aria-hidden="true"></i><span>Organisation<span></a></li>' +
                  '<li><a href="user2_strategymap.html"><i class="fa fa-map" aria-hidden="true"></i><span>Strategy Map<span></a></li>' +
                  '<li><a href="#"><i class="fa fa-comments" aria-hidden="true"></i><span>Notification<span></a></li>' +
                  '<li><a href="#"><i class="fa fa-cog" aria-hidden="true"></i><span>Settings<span></a></li>' +
              '</ul>'
		},
		userThreeMenu: function() {
			return '<ul>' +
                 '<li><a class="dashboard" href="#"><i class="fa fa-th-large" aria-hidden="true"></i><span>Dasboard<span></a></li>' +
                 '<li><a href="user1_my_goal.html"><i class="fa fa-bullseye" aria-hidden="true"></i><span>Goal Management</span></a>' +
                      '<div class="sub-menu">' +
                          '<ul>' +
                              '<li><a href="user1_company_goals.html"><span>Company Goals<span></a></li>' +
                              '<li><a href="user1_d_goals.html"><span>Delegate Goals<span></a></li>' +
                          '</ul>' +
                      '</div>' +
                  '</li>' +
                  '<li><a href="#"><i class="fa fa-users" aria-hidden="true"></i><span>User Management<span></a>' +
						'<div class="sub-menu">' +
                          '<ul>' +
                              '<li><a href="user1_company_goals.html"><span>Manage User List<span></a></li>' +
                              '<li><a href="user1_d_goals.html"><span>User Types<span></a></li>' +
                          '</ul>' +
                      '</div>' +
                  '</li>' +
                  '<li><a href="#"><i class="fa fa-map" aria-hidden="true"></i><span>Strategy Map<span></a></li>' +
                  '<li><a href="#"><i class="fa fa-comments" aria-hidden="true"></i><span>Notification<span></a></li>' +
                  '<li><a href="#"><i class="fa fa-cog" aria-hidden="true"></i><span>Settings<span></a>' +
 						'<div class="sub-menu">' +
                          '<ul>' +
                              '<li><a href="#"><span>Balance Score card<span></a></li>' +
                              '<li><a href="u#"><span>Review Management<span></a></li>' +
                          '</ul>' +
                      '</div>' +
                  '</li>' +
              '</ul>'
		}


	}

}


$(document).ready(function(){
	corp.init()
})
