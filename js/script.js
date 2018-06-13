function changeScreenSize() {        
        window.resizeTo(screen.width-1,screen.height-1)   
    };
changeScreenSize();
$( window ).scroll(function() {

    var top = $(window).scrollTop();
    if(top>0){
        $('.logo-txt1').addClass('width-60');
        $('.menu_show').css({
            'position':'fixed',
            'width':'100%',
            'z-index':'5555555'
        });
        $('.menu_main_nav>li>a').addClass('menu-item-block');
        $('.contact_logo').css({'padding-top':'6px'});
        $('.menu_main_wrap').css({'margin-top':'16px'});
    }else{
        $('.menu_main_nav>li>a').removeClass('menu-item-block');
        $('.contact_logo').css({'padding-top':'11px'});
        $('.logo-txt1').removeClass('width-60');
        $('.menu_show').css({'position':'relative'});
    }
});

var root = document.getElementsByTagName( 'html' )[0]
$('.side_wrap').on('click',function () {
    $(this).removeClass('open')
    $(root).removeClass('menu_mobile_open')
});


$('.two-item-carousel').owlCarousel({
    loop:true,
    margin:1,
    nav:true,
    smartSpeed: 700,
    navText: [ '<i class="i-all arrow left"></i>', '<i class="i-all arrow right"></i>' ],
    responsive:{
        0:{
            items:1
        },
        480:{
            items:1
        },
        768:{
            items:1
        },
        800:{
            items:1
        },
        1024:{
            items:1
        }
    }
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    smartSpeed: 700,
    navText: [ '<i class="i-all-throw arrow left"></i>', '<i class="i-all-throw arrow right black-color"></i>' ],
    responsive:{
        0:{
            items:2
        },
        480:{
            items:2
        },
        768:{
            items:2
        },
        800:{
            items:3
        },
        1024:{
            items:4
        }
    }
});

$(function() {

    $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {

        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("input#name").val();
            var email = $("input#email").val();
            var subject = $("input#subject").val();
            var message = $("textarea#message").val();
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            $this = $(".sendMessageButton");
            $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages

            $.ajax({
                url: "./SendEmail/emailmessage.php",
                type: "POST",
                data: {
                    name: name,
                    subject: subject,
                    email: email,
                    message: message
                },
                cache: false,
                success: function(res) {
                    // Success message
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>Ваше сообщение было отправлено.</strong>");
                    $('#success > .alert-success')
                        .append('</div>');
                    //clear all fields
                    $('#contactForm').trigger("reset");
					$("#div").css('display', 'none');

                },
                error: function() {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append($("<strong>").text("Извините " + firstName + ", кажется, что мой почтовый сервер не отвечает. Пожалуйста, повторите попытку позже!"));
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
                complete: function() {
                    setTimeout(function() {
                        $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
                    }, 1000);
                }
            });
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });    
	
	$("#contactForm1 input,#contactForm1 textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {

        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("input#name1").val();
            var email = $("input#email1").val();
            var subject = $("input#subject1").val();
            var message = $("textarea#message1").val();
            var product = [];
            product = $("input[name='product_name\\[\\]']").serializeArray();
            var number = [];
            number = $("input[name='number\\[\\]']").serializeArray();
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            $this = $(".sendMessageButton1");
            $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages

            $.ajax({
                url: "./SendEmail/emailmessage.php",
                type: "POST",
                data: {
                    name: name,
                    subject: subject,
                    email: email,
                    message: message,
					product: product,
					number: number
                },
                cache: false,
                success: function(res) {
                    // Success message
                    $('#success1').html("<div class='alert alert-success'>");
                    $('#success1 > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success1 > .alert-success')
                        .append("<strong>Ваше сообщение было отправлено.</strong>");
                    $('#success1 > .alert-success')
                        .append('</div>');
                    //clear all fields
                    $('#contactForm1').trigger("reset");
					$('#div').html('');
					setTimeout(function(){$('#myModal').modal('hide'); $('.product').show(); $('#success1').html(''); $('#cart').css('display', 'none', 'important');}, 2000);
                },
                error: function() {
                    // Fail message
                    $('#success1').html("<div class='alert alert-danger'>");
                    $('#success1 > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success1 > .alert-danger').append($("<strong>").text("Извините " + firstName + ", кажется, что мой почтовый сервер не отвечает. Пожалуйста, повторите попытку позже!"));
                    $('#success1 > .alert-danger').append('</div>');
                    //clear all fields
                    $('#contactForm1').trigger("reset");
                },
                complete: function() {
                    setTimeout(function() {
                        $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
                    }, 1000);
                }
            });
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});


$( window ).resize(function() {
	if($( window ).width() < 1260 && $( window ).width() > 960){
		$('.div_1').css('height', '700px');
	}else if($( window ).width() <= 960 && $( window ).width() > 450){
		$('.div_1').css('height', '700px');
	}else{
		$('.div_1').css('height', '750px');
	}
	
	$('.div_2').css('height', $('.
				    
				    
				    
				    ').css('height'));
	$('.div_3').css('height', $('.div_1').css('height'));	
	$('.b_0').css('position', 'absolute');
	$('.b_1').css('position', 'absolute');
	$('.b_2').css('position', 'absolute');		
});

if($( window ).width() < 1260 && $( window ).width() > 960){
	$('.div_1').css('height');
}else if($( window ).width() <= 960 && $( window ).width() > 450){
	$('.div_1').css('height');
}else{
	$('.div_1').css('height');
}

$('.div_2').css('height', $('.div_1').css('height'));
$('.div_3').css('height', $('.div_1').css('height'));	
$('.b_0').css('position', 'absolute');
$('.b_1').css('position', 'absolute');
$('.b_2').css('position', 'absolute');	

$(".remove_btn").on('click',function(){

$(this).prev().show();
$(this).hide();
$('#'+$(this).attr('price')).remove();
return false;
});
$(".product").on('click',function(){

$(this).next().show();

var v = $(this).attr('product');
var price = $(this).attr('price');
$('#div').append('<div id="'+price+'" class="form-group"><label for = "product_name">Имя продукта</label><input type="text" name="product_name[]" value="'+v+'"  class="form-control" ><label for = "number">Вес('+price+'Р/КГ)</label><input type="number" name="number[]" price="'+price+'" value="1" min="1" step="1" class="form-control"></div>');
$(this).hide();
$('#cart').show();
$('#cart').click(function(){
	$('#myModal').modal('show');
	return false;
});
//$("#div").css('display', 'block');
//$("#product_name").val(v)
});

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
	if(scroll == 0){
		$('#head_').css('padding-top', '15px');
		$('#head_').css('height', '100px');
		$('#head_').css('width', '84px');
	}else{
		$('#head_').css('transition', 'padding-top 0.3s ease');
		$('#head_').css('padding-top', '15px');
		$('#head_').css('transition', 'height 0.3s ease');
		$('#head_').css('height', '80px');
		$('#head_').css('transition', 'width 0.3s ease');
		$('#head_').css('width', '66px');
	}
});
