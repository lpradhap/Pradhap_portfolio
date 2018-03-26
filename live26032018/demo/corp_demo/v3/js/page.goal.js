var goal = {
    _goalPanel: '#goal-panel',
    _loader: '.loading-panel',
    init: function () {

        goal.strategy.init();
        goal.kpi.init();
        goal.back.init();
        goal.action.init();
        goal.createPanel.init();
        goal.tree.init();
    },
    kpi: {
        _kpiDetailPanel: '.kpi-view',
        _KPIViewLink: '.kpi-link',
        init: function () {
            goal.kpi.closeAllKPI();

            $(goal.kpi._KPIViewLink).click(function (e) {
                goal.kpi.toogle(e)
            })
        },
        closeAllKPI: function () {
            $(goal.kpi._kpiDetailPanel).each(function () {
                $(this).hide()
            })
        },
        toogle: function (event) {
            var panel = $(event.target).closest('.list-item').siblings('.kpi-view');
            panel.slideToggle();
        }
    },
    strategy: {
        _link: '.subview-link',
        init: function () {
            $(goal.strategy._link).click(function () {
                var strategyId = $(this).attr('data-child-panel');
                goal.strategy.showStrategy(strategyId)
            })
        },
        showStrategy: function (strategyId) {
            $(goal._loader).show()
            $(goal._goalPanel).hide()

            setTimeout(function () {
                $('#' + strategyId).show()
                $(goal._loader).hide()
            }, 800);

        }
    },
    action: {
        _link: '.subview-link-action',
        init: function () {
            $(goal.action._link).click(function () {
                var strategyActionID = $(this).attr('data-child-panel');
                var ParentPanel = $(this).attr('data-startegy-panel');
                goal.action.showStrategyAction(strategyActionID, ParentPanel)
            })
        },
        showStrategyAction: function (strategyActionID, ParentPanel) {
            $(goal._loader).show()
            $(goal._goalPanel).hide()
            $('#' + ParentPanel).hide()

            setTimeout(function () {
                $('#' + strategyActionID).show()
                $(goal._loader).hide()
            }, 800);

        }
    },
    createPanel: {
        _createActionLink: '.create-link',
        init: function () {
            $(goal.createPanel._createActionLink).click(function (e) {
                goal.createPanel.toggle(e)
            })

        },
        toggle: function (element) {
            var element = $(element.target).attr('data-bind-panel');
            $('#'+element).slideToggle()
        }
    },
    back: {
        _backLink: '.back-link',
        init: function () {
            $(goal.back._backLink).click(function () {
                var showView = $(this).attr('data-back-panel');
                var hideView = $(this).attr('data-view');

                $('#' + showView).show();
                $('#' + hideView).hide();
            })

        }
    },
    tree: {
        init: function(){
            $('.tree li > a').on('click', function(){
                goal.tree.showToolTip(this)
            })
        },
        showToolTip: function(el){
            var aDate = $(el).attr('data-assign-date');
            var goalDes = $(el).attr('data-des')
            var elHeight = $(el).innerHeight() + 5;
            var offsetEl = $(el).offset()
            var posiTop=offsetEl.top;
            var posiLeft=offsetEl.left;
            
            $('.view-goal').find('#desc-panel').text(goalDes)
            $('.view-goal').find('#goal-date-panel').text(aDate)

            $('.view-goal').fadeIn(50).offset({
                top:posiTop + elHeight,
                left: posiLeft
            })
        }

    }
}


$(document).ready(function () {
    goal.init()
})