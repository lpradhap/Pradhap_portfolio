var dgoal = {
  init: function() {
    $('#drpEmployee').change(function(e) {
      if ($(this).val() == 1) {
        $('.btnNewGoal').show()
        $('.view-type-one').show()
        $('.view-type-two').hide()
        $('.view-type-three').hide()
      } else {
        $('.btnNewGoal').show()
        $('.view-type-one').hide()
        $('.view-type-two').show()
        $('.view-type-three').hide()
      }
    });
    $('.btnNewGoal').on('click', function() {
      $('.view-type-two').show();
      $('.btnNewGoal').hide()
    })
    $('#drpDep').change(function(e) {
      if ($(this).val() == 1) {
        $('.btnNewGoal').show()
        $('.view-type-one').hide()
        $('.view-type-two').hide()
        $('.view-type-three').show()
      }
    });
    $('.ctrl-radio').click(function() {
      if ($(this).val() == 1) {
        $(this).parent().parent().parent().find('select').show()
      } else {
        $(this).parent().parent().parent().find('select').hide()
        $(this).parent().parent().parent().find('select').siblings('input').val(' ')
      }
    });

    $('.ctrl-radio-2').on('click', function() {
      if ($(this).val() == 1) {
        $('.employee-info').show()
        $('.dep-view').hide()
        $('.view-type-two').hide()
        $('.view-type-one').hide()
        $('.view-type-three').hide()
      } else {
        $('.dep-view').show()
        $('.employee-info').hide()
        $('.view-type-two').hide()
        $('.view-type-one').hide()
        $('.view-type-three').hide()
      };
    });

    $('.ctrl-radio-3').on('click', function() {
      if ($(this).val() == 1) {
        $('#goal1').show()
        $('#goal2').hide()
      } else {
        $('#goal2').show()
        $('#goal1').hide()
      };
    });

    $('.sub-active').on('click', function() {
      $('.sub-active').find('div').hide()
      $(this).find('div').show()

    })

    $('select.drpGoal').change(function() {
      var v = $(this).val();
      $(this).siblings('input').val(v)
    });


  },
  view1: function() {
    $('.view-type-one').show()
    $('.view-type-two').hide()
    $('.view-type-three').hide()
  }


}

$(document).ready(function() {
  dgoal.init();
})
