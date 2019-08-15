/*tNav*/
$(function() {
    //快速登录
    var $l_log = $(".l_log");
    $l_log.mouseover(function(event) {
        event.stopPropagation(); //取消事件冒泡
        $(this).addClass("tipon");
    });
    //点击其他地方消失
    $(document).click(function() {
        $l_log.removeClass("tipon");
    });

    $l_log.click(function(event) {
        event.stopPropagation(); //取消事件冒泡
    });

    $(window).scroll(function() {
        var p1 = $(".tNav").height() + 10; //当滚动条的位置处于距顶部P1的高度以下时，顶部导航出现，否则消失
        if ($(window).scrollTop() > p1) {
            $l_log.removeClass("tipon");
        }
    });

    //tn_link
    var $tnli = $(".t-ulink li:has(.t-ewm)");
    $tnli.mouseover(function(event) {
        event.stopPropagation(); //取消事件冒泡
        $(this).addClass("twon").siblings().removeClass("twon");
        $l_log.removeClass("tipon");
    });

    var $l_arr = $(".t-arr");
    $l_arr.mouseover(function(event) {
        event.stopPropagation(); //取消事件冒泡
        $(this).addClass("tarron");
    });
	
	/*登录后_投稿*/
	var $tnl2 = $(".t-log2 .t-nl");
	$tnl2.mouseover(function (event) {
		event.stopPropagation(); //取消事件冒泡
		$(this).addClass("tipon3");
	});
	
    //鼠标移出消失
    $(document).mouseout(function() {
        $tnli.removeClass("twon");
        $l_arr.removeClass("tarron");
		$tnl2.removeClass("tipon3");
    });
    $(".t-lsr .t-input").focus(function() {
        var $val = $(this).val();
        if ($val == this.defaultValue) {
            $(this).val("");
            $(this).parents(".t-lsr").toggleClass("t-lsron");
        }
    });
    $(".t-lsr .t-input").blur(function() {
        var $val = $(this).val();
        if ($val == "") {
            $(this).val(this.defaultValue);
            $(this).parents(".t-lsr").toggleClass("t-lsron");
        }

    });
});

/*头部tNav点击显示*/
$(function() {
	$(".t-l5").click(function(){
		$(".navT4").slideToggle();
	})
});

/*nav*/
$(function () {
    var $tnli = $(".nav li:has(.n_tip)");
    $tnli.mouseover(function() {
        $(this).addClass("nlion").siblings().removeClass("nlion");
    }).mouseout(function() {
    	$(this).removeClass("nlion");
    });;
});

/*tg*/
$(function(){
	var uinput=$(".tg_input,.tg_input2")
	    uinput.focus(function() {
        var $val = $(this).val();
        if ($val == this.defaultValue) {
            $(this).val("");
        }
    });
    	uinput.blur(function() {
        var $val = $(this).val();
        if ($val == "") {
            $(this).val(this.defaultValue);
        }

    });
})

/*fixed*/
$(function(){
	$(window).scroll(function() {
        var p11 = $(".fixedmod").height() + 20; //当滚动条的位置处于距顶部P1的高度以下时，顶部导航出现，否则消失
		console.log(p11)
        if ($(window).scrollTop() > p11) {
            $(".ftop").css({top:'50px'})
        }
		else{
			$(".ftop").css({top:'500px'})
		}
    });
});

/*backtop*/
$(document).ready(function() {
	$("#top").click(function() {
		$(window).scrollTop(0)
	})
});


$(function(){

/*tab*/
  $('.u_hd li').click(function() {
		var i = $(this).index();
		$(this).addClass('on').siblings().removeClass('on');
		$(this).parent().parent().next('.bd').children('.nr').eq(i).show().siblings().hide();
  });

});