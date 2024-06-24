var Main = function() {
	"use strict";
	var runManiNav = function() {
		//演出场馆鼠标划过自动下拉菜单
		if($('.dropdown').length){
    		$(".dropdown").hover(
        		function() { 
        			$('.dropdown-menu', this).fadeIn("fast");
        			$(this).addClass("open");
	        	},
	        	function() { 
	        		$('.dropdown-menu', this).fadeOut("fast");
	    			$(this).removeClass("open");
    		});
		}
	};
	// 设置头部链接
    var setHeadLink = function(){
        $('.header .navbar-nav > li').removeClass('active');
        var $info = $('.channelinfo').text();
        if ($info == '新闻中心') {
            $('.header .navbar-nav > li:nth-child(2)').addClass('active');
        } else if ($info == '信息公开' ) {
            $('.header .navbar-nav > li:nth-child(3)').addClass('active');
        } else if ($info == '网上政务大厅' ) {
            $('.header .navbar-nav > li:nth-child(4)').addClass('active');
        }
         else if ($info == '便民服务') {
            $('.header .navbar-nav > li:nth-child(5)').addClass('active');
        } else if ($info == '网上互动') {
            $('.header .navbar-nav > li:nth-child(6)').addClass('active');
        } else {
            $('.header .navbar-nav > li:nth-child(1)').addClass('active');
        }
    };
    setHeadLink();
	return {
		//main function to initiate template pages
		init : function() {
			runManiNav();
                        
		}
	};
}();