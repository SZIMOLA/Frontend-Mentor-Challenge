 $(document).ready(function() {
            $('.submit').click(function() {
                var number = $('input[name = "rating"]:checked').val();
                $('.number').html(number);
                $('.content').first().hide();
                $('.content').last().show();
                $('.thank-box').fadeIn(400);
            });
        });
