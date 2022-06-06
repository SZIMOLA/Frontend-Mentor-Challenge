 $(document).ready(function () {
     $('.rating label').click(function () {
         var key = $(this).attr("for");
         var number = parseInt($('input[id=' + key + ']').val());
           $('.number').html(number);
         if (number !== 0) {
             $('.submit').click(function () {
                 $('.content').first().hide();
                 $('.content').last().show();
                 $('.thank-box').fadeIn(400);
             });
         };
     });
 });
