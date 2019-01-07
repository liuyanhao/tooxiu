(function(factory) {
	'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }
}(function($) {
	'use strict';
	var Slide = window.Slide || {};

	Slide = (function() {

		function Slide(element, settings) {
			this.defaults = {
				arrows: false,
				prevArrow: '<a class="btn prev" href="javascript:;"><i class="icon-commmon"></i></a>',
                nextArrow: '<a class="btn next" href="javascript:;"><i class="icon-commmon"></i></a>',
                autoplay: true,
                autoplaySpeed: 3000,
                dots: true,
                draggable: true,
                animateType: 'fade',
         		content: $(element),
         		index: 0
			};

			this.options = $.extend({}, this.defaults, settings);
		}

		return Slide;
	}());

	Slide.prototype.init = function() {
		var that = this;
		that.options.arrows ? that.setArrows() : null;
		that.options.dots ? that.setDots() : null;

		switch (that.options.animateType) {
			case 'fade': 
				that.options.content.addClass('fade-type');
				that.fade(0);
				if (that.options.content.find('li').length < 2) return;
				that.auto(that.fade);
				that.options.content.mouseenter(function() {
					that.stop();
				}).mouseleave(function() {
					that.auto(that.fade);
				});
				break;
		}
	};

	Slide.prototype.setArrows = function() {
		this.options.content.append(this.options.prevArrow, this.options.nextArrow);
		var that = this;
		$(that.options.content).find('.prev').on('click',function(){
			var index = that.options.index,
					len = that.options.content.find('li').length;
			if(index){
				that.fade(index-=1);
			}else{
				that.fade(len-1);
			}
		});
		$(that.options.content).find('.next').on('click',function(){
			var index = that.options.index,
					len = that.options.content.find('li').length;
			if(index!=(len-1)){
				that.fade(index+=1);
			}else{
				that.fade(0);
			}
		});	
	};

	Slide.prototype.setDots = function() {
		var that = this,
			i = 0,
			len = that.options.content.find('li').length,
			$dot = $('<div class="dot"></div>');
		if (len < 2) return;
		for (i; i < len; i++) {
			if (i == 0) {
				$dot.append('<span class="cur"></span>');
			} else {
				$dot.append('<span></span>');
			}
		}
		that.options.content.append($dot);

		switch (that.options.animateType) {
			case 'fade': 
				$dot.find('span').click(function() {
					var i = $(this).index();
					that.fade(i);
				});
				break;
		}

	};

	Slide.prototype.fade = function(i) {
		var $li = this.options.content.find('li'),
			$a = $li.eq(i).find('a');
		$a.css({'background-image': 'url(' + $a.data('src') + ')'});
		$li.stop().fadeOut().delay(10).eq(i).stop().fadeIn();
		this.options.content.find('.dot span').removeClass('cur').eq(i).addClass('cur');
		this.options.index = i;
	};

	Slide.prototype.auto = function(type) {
		var that = this,
			len = that.options.content.find('li').length,
			time = that.options.autoplaySpeed;
		if (that.autoPlayTimer) {
            clearInterval(that.autoPlayTimer);
        }
		that.autoPlayTimer = setInterval(function() {
			that.options.index++;
			if (that.options.index == len) that.options.index = 0;
			type.call(that, that.options.index);
		}, time);
	};

	Slide.prototype.stop = function() {
        if (this.autoPlayTimer) {
            clearInterval(this.autoPlayTimer);
        }
	};

	$.fn.slide = function() {
        var opt = arguments[0],
            l = this.length,
            i = 0;
        for (i; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined') {
                this[i].slick = new Slide(this[i], opt);
                this[i].slick.init();
            }
        }
        return this;
    };
}));	