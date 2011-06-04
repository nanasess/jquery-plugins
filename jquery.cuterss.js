(function($) {

     var o;

     $.fn.cuterss = function(options) {
         var defaults = {
             feed: '',
             wrap: '<li />',
             format: '{pubDate} <em><a href="{link}">{title}</a></em><br />{text}',
             errorMessage: '新着情報の取得に失敗しました'
         };

         return this.each(function() {
                              if (options) {
                                  o = $.fn.extend(defaults, options);
                              }
                              
                              var $this = $(this);
                              
                              $.ajax({
                                         url: o.feed,
                                         type: 'GET',
                                         dataType: 'xml',
                                         cache: false,
                                         error: function(xhr, status, e) {
                                             $(o.wrap)
                                                 .text(o.errorMessage)
                                                 .appendTo($this);
                                         },
                                         success: function(feed) {
                                             parseFeed(feed, $this);
                                         }
                                     });
                              return this;
                          });
     };

     function parseFeed(feed, node) {
         $(feed).find('item')
             .each(function() {
                       var title = $(this).find('title').text();
                       var d = new Date($(this).find('pubDate').text());
                       var text = $(this).find('description').text();
                       var link = jQuery(this).find('guid').text();
                       var item = o.format.replace(/{title}/, title);
                       item = item.replace(/{pubDate}/, d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate());
                       item = item.replace(/{text}/, text);
                       item = item.replace(/{link}/, link);
                       $(o.wrap).append(item).appendTo(node);
                   });

     }
 })(jQuery);