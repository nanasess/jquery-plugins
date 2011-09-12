(function($) {
     
     var o;

     $.fn.loader = function(options) {
         var defaults = {
             position: 'absolute',
             top:'',
             left:'',
             selector: 'input[type=submit]',
             overlayOpacity:0.3,
             overlayColor: '#fff',
             loadingImg: 'loading.gif',
             loadingImgWidth: 32,
             loadingImgHeight: 32,
             message: '' // FIXME
         };

         var $message = $('<p id="loading_message"></p>');
         var $wrap = $('<div id="wrap_loading"></div>');
         $wrap.append($message);
         $wrap.appendTo('body')
              .hide();

         return this.each(function() {
                              if (options) {
                                  o = $.fn.extend(defaults, options);
                              }

                              var $this = $(this);
                              var $target = $this.find(o.selector);

                              $target.click(function() {
                                                var $loading = $('<img src="' + o.loadingImg + '" />');
                                                $loading.appendTo('body');

                                                $message.text(o.message)
                                                        .css({
                                                                 'text-align':'center',
                                                                 'position':o.position,
                                                                 'top': o.top ? o.top : $(document).scrollTop() + (($(window).height() - $message.height()) / 2),
                                                                 'left': o.left ? o.left : ($(window).width() - $message.width()) / 2,
                                                                 'z-index':10000
                                                             });
                                                $loading.width(o.loadingImgWidth)
                                                        .height(o.loadingImgHeight);
                                                $loading.css({
                                                                 'position':o.position,
                                                                 'top': o.top ? o.top : $(document).scrollTop() + (($(window).height() - $loading.height()) / 2),
                                                                 'left': o.left ? o.left : ($(window).width() - $loading.width()) / 2,
                                                                 'z-index':10001,
                                                                 'background-color': '#fff',
                                                                 'opacity': 1
                                                             });

                                                $wrap.css({
                                                              'background-color' : o.overlayColor,
					                                          'opacity' : o.overlayOpacity,
                                                              'height': $(document).height()
                                                          });
                                                if (!o.top) {
                                                    $(window).scroll(function() {
                                                                         var offset = $(document).scrollTop() + (($(window).height() - $loading.height()) / 2);
                                                                         $loading.css('top', offset);
                                                                     });
                                                }
                                                $wrap.fadeIn(200);
                                            });
                              return this;
                          });
     };
})(jQuery);