var corp = {
    init: function () {
        corp.leftMenu.init();
        corp.ControlPanel.init();
    },
    leftMenu: {
        _navWrapper: ".left-nav",
        _activeMenuClass: 'nav-active',
        init: function () {
            corp.leftMenu.setDimen();
            corp.leftMenu.buildMenu();
            corp.leftMenu.setActiveMenu();
        },
        setDimen: function () {
            var w = $(window).height()
            var h = $('header').height()

            $(corp.leftMenu._navWrapper).height(w - h - 1)
        },
        buildMenu: function () {
            var uid = $('body').data('user')
            if (uid == 1) {
                $('.left-nav').prepend(corp.leftMenu.c1_rootMenu)
            } else if (uid == 2) {
                $('.left-nav').prepend(corp.leftMenu.c1_department)
            } else if (uid == 3) {
                $('.left-nav').prepend(corp.leftMenu.c1_inidvitual)
            } else if (uid == 4) {
                $('.left-nav').prepend(corp.leftMenu.c2_rootMenu)
            } else if (uid == 5) {
                $('.left-nav').prepend(corp.leftMenu.c2_subMenu)
            }
            else if (uid == 6) {
                $('.left-nav').prepend(corp.leftMenu.c3_rootMenu)
            }
            else if (uid == 7) {
                $('.left-nav').prepend(corp.leftMenu.c3_subMenu)
            }
        },
        setActiveMenu: function () {
            var activeMenu = $('body').attr('data-active-menu');
            $('#' + activeMenu).addClass(corp.leftMenu._activeMenuClass);
        },
        c1_rootMenu: function () {
            //this is case1
            return '<ul>' +
                '<li id="nav-dashboard"><a class="dashboard" href="#"><i class="fa fa-th-large" aria-hidden="true"></i><span>Dasboard<span></a></li>' +
                '<li><a href="manage-goal.html"><i class="fa fa-bullseye" aria-hidden="true"></i><span>Goal Management</span></a>' +
                '<div class="sub-menu">' +
                '<ul>' +
                '<li id="nav-goal-manage"><a href="manage-goal.html" ><i class="fa fa-circle-o" aria-hidden="true"></i><span>Manage Goals<span></a></li>' +
                '<li id="nav-assign-goal"><a href="assign-goal.html"><i class="fa fa-arrow-circle-o-down" aria-hidden="true"></i> <span>Assign Goals<span></a></li>' +
                '<li id="nav-create-goal"><a href="create-goal.html"><i class="fa fa-dot-circle-o" aria-hidden="true"></i> <span>Create New Goals<span></a></li>' +
                '</ul>' +
                '</div>' +
                '</li>' +
                '</ul>'
        },
        c1_department: function () {
            //this is case1
            return '<ul>' +
                '<li id="nav-dashboard"><a class="dashboard" href="#"><i class="fa fa-th-large" aria-hidden="true"></i><span>Dasboard<span></a></li>' +
                '<li><a href="manage-goal.html"><i class="fa fa-bullseye" aria-hidden="true"></i><span>Goal Management</span></a>' +
                '<div class="sub-menu">' +
                '<ul>' +
                '<li id="nav-goal-manage"><a href="manage-goal.html" ><i class="fa fa-circle-o" aria-hidden="true"></i><span>Manage Goals<span></a></li>' +
                '<li id="nav-assign-goal"><a href="assign-goal.html"><i class="fa fa-arrow-circle-o-down" aria-hidden="true"></i> <span>Assign Goals<span></a></li>' +
                '</ul>' +
                '</div>' +
                '</li>' +
                '</ul>'
        },
        c1_inidvitual: function () {
            //this is case1
            return '<ul>' +
                '<li id="nav-dashboard"><a class="dashboard" href="#"><i class="fa fa-th-large" aria-hidden="true"></i><span>Dasboard<span></a></li>' +
                '<li><a href="manage-goal.html"><i class="fa fa-bullseye" aria-hidden="true"></i><span>Goal Management</span></a>' +
                '<div class="sub-menu">' +
                '<ul>' +
                '<li id="nav-goal-manage"><a href="view-goal.html" ><i class="fa fa-circle-o" aria-hidden="true"></i><span>View Goals<span></a></li>' +
                '</ul>' +
                '</div>' +
                '</li>' +
                '</ul>'
        },
        c2_rootMenu: function () {
            //this is case2
            return '<ul>' +
                '<li id="nav-dashboard"><a class="dashboard" href="#"><i class="fa fa-th-large" aria-hidden="true"></i><span>Dasboard<span></a></li>' +
                '<li><a href="manage-goal.html"><i class="fa fa-bullseye" aria-hidden="true"></i><span>Goal Management</span></a>' +
                '<div class="sub-menu">' +
                '<ul>' +
                '<li id="nav-assign-goal"><a href="assign-goal.html"><i class="fa fa-arrow-circle-o-down" aria-hidden="true"></i> <span>Assign Goals<span></a></li>' +
                '<li id="nav-create-goal"><a href="create-goal.html"><i class="fa fa-dot-circle-o" aria-hidden="true"></i> <span>Create New Goals<span></a></li>' +
                '</ul>' +
                '</div>' +
                '<li><a href="manage-kpi.html"><i class="fa fa-university" aria-hidden="true"></i><span>KPI Management</span></a>' +
                '<div class="sub-menu">' +
                '<ul>' +
                '<li id="nav-kpi-manage"><a href="manage-kpi.html" ><i class="fa fa-circle-o" aria-hidden="true"></i><span>Manage KPI<span></a></li>' +
                '<li id="nav-create-kpi"><a href="create-kpi.html"><i class="fa fa-dot-circle-o" aria-hidden="true"></i> <span>Create New KPI<span></a></li>' +
                '</ul>' +
                '</div>' +
                '</li>' +
                '</ul>'
        },
        c2_subMenu: function () {
            //this is case2
            return '<ul>' +
                '<li id="nav-dashboard"><a class="dashboard" href="#"><i class="fa fa-th-large" aria-hidden="true"></i><span>Dasboard<span></a></li>' +
                '<li><a href="manage-goal.html"><i class="fa fa-bullseye" aria-hidden="true"></i><span>Goal Management</span></a>' +
                '<div class="sub-menu">' +
                '<ul>' +
                '<li id="nav-assign-goal"><a href="assign-goal.html"><i class="fa fa-arrow-circle-o-down" aria-hidden="true"></i> <span>Assign Goals<span></a></li>' +
                '</ul>' +
                '</div>' +
                '<li><a href="manage-kpi.html"><i class="fa fa-university" aria-hidden="true"></i><span>KPI Management</span></a>' +
                '<div class="sub-menu">' +
                '<ul>' +
                '<li id="nav-kpi-manage"><a href="manage-kpi.html" ><i class="fa fa-circle-o" aria-hidden="true"></i><span>Manage KPI<span></a></li>' +
                '<li id="nav-create-kpi"><a href="create-kpi.html"><i class="fa fa-dot-circle-o" aria-hidden="true"></i> <span>Create New KPI<span></a></li>' +
                '</ul>' +
                '</div>' +
                '</li>' +
                '</ul>'
        },
        c3_rootMenu: function () {
            //this is case2
            return '<ul>' +
                '<li id="nav-dashboard"><a class="dashboard" href="#"><i class="fa fa-th-large" aria-hidden="true"></i><span>Dasboard<span></a></li>' +
                '<li><a href="manage-goal.html"><i class="fa fa-bullseye" aria-hidden="true"></i><span>Goal Management</span></a>' +
                '<div class="sub-menu">' +
                '<ul>' +
                '<li id="nav-manage-goal"><a href="manage-goal.html"><i class="fa fa-arrow-circle-o-down" aria-hidden="true"></i> <span>Manage Goals<span></a></li>' +
                '<li id="nav-assign-goal"><a href="assign-goal.html"><i class="fa fa-arrow-circle-o-down" aria-hidden="true"></i> <span>Assign Goals<span></a></li>' +
                '<li id="nav-create-goal"><a href="create-goal.html"><i class="fa fa-dot-circle-o" aria-hidden="true"></i> <span>Create New Goals<span></a></li>' +
                '</ul>' +
                '</div>' +
                '</ul>'
        },
        c3_subMenu: function () {
            //this is case2
            return '<ul>' +
                '<li id="nav-dashboard"><a class="dashboard" href="#"><i class="fa fa-th-large" aria-hidden="true"></i><span>Dasboard<span></a></li>' +
                '<li><a href="manage-goal.html"><i class="fa fa-bullseye" aria-hidden="true"></i><span>Goal Management</span></a>' +
                '<div class="sub-menu">' +
                '<ul>' +
                '<li id="nav-manage-goal"><a href="manage-goal.html"><i class="fa fa-arrow-circle-o-down" aria-hidden="true"></i> <span>Manage Goals<span></a></li>' +
                '<li id="nav-assign-goal"><a href="assign-goal.html"><i class="fa fa-arrow-circle-o-down" aria-hidden="true"></i> <span>Assign Goals<span></a></li>' +
                '</ul>' +
                '</div>' +
                '</ul>'
        }


    },
    ControlPanel: {
        _controlCloseButton: '.close-control',
        _showControlPanel: '.view-control-panel',
        _controlPanel: '.control-panel',
        init: function () {
            $(corp.ControlPanel._showControlPanel).click(function (e) {
                corp.ControlPanel.showPanel(e)
            })
            $(corp.ControlPanel._controlCloseButton).click(function (e) {
                corp.ControlPanel.closePanel(e)
            })
        },
        showPanel: function (event) {
            var focusPanel = $(event.target).attr('data-panel');
            $('#' + focusPanel).slideToggle()
        },
        closePanel: function (event) {
            var element = $(event.target).closest(corp.ControlPanel._controlPanel);
            $(element).slideToggle()
        }

    }

}


$(document).ready(function () {
    corp.init()
})