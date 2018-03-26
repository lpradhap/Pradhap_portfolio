var pageLogin = {
	init: function() {

		$('.btnLogin').on('click', function(){
			var u = $('#txtUser').val()
			console.log(u)
			if (u=="ceo") {
				window.location.href = "user2_dashboard.html";
			}
			else if(u=="user1") {
				window.location.href = "user1_dashboard.html";
			}
			else if(u=="admin") {
				window.location.href = "admin_dashboard.html";
			}
			else {
				return false
			}
		})
	}
}

$(document).ready(function(){
	pageLogin.init()
})
