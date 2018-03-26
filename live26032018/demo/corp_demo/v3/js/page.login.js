var pageLogin = {
	init: function () {

		$('.btnLogin').on('click', function () {
			var u = $('#txtUser').val().toLowerCase()
			if (u == "case1_root") {
				window.location.href = "case1/root/dashboard.html";
			} else if (u == "case1_sales-department") {
				window.location.href = "case1/department/sales/dashboard.html";
			} else if (u == "case1_project-department") {
				window.location.href = "case1/department/project/dashboard.html";
			} else if (u == "case1_sales-sub-department") {
				window.location.href = "case1/sub-department/sales/dashboard.html";
			} else if (u == "case1_project-sub-department") {
				window.location.href = "case1/sub-department/project/dashboard.html";
			} else if (u == "case1_sales-manager") {
				window.location.href = "case1/indivitual/sales/dashboard.html";
			} else if (u == "case1_account-Manager") {
				window.location.href = "case1/indivitual/project/dashboard.html";
			} else if (u == "admin") {
				window.location.href = "admin_dashboard.html";
			} else if (u == "case2_root") {
				window.location.href = "case2/root/dashboard.html";
			} else if (u == "case2_sublevel") {
				window.location.href = "case2/sub/dashboard.html";
			}else if (u == "case3_root") {
				window.location.href = "case3/root/dashboard.html";
			}else if (u == "case3_sublevel") {
				window.location.href = "case3/sub/dashboard.html";
			}else {
				return false
			}

		})
	}
}

$(document).ready(function () {
	pageLogin.init()
})