                        jQuery plugins README
                        =====================

Author: Kentaro Ohkouchi <nanasess@fsm.ne.jp>
Date: [2011-06-05 02:23]


Table of Contents
=================
1 jQuery.cuterss 
    1.1 Example 
    1.2 properties 
2 jQuery.loader 
    2.1 Example 
3 LICENSE 
    3.1 see also. 


1 jQuery.cuterss 
-----------------

RSS Feed reader plugin.

1.1 Example 
============


  <script type="text/javascript">//<![CDATA[
      $(function() {
        $('dl#whats_new').cuterss({
            feed:'/wp/?feed=rss2&cat=3'
        });
      });
  //]]>
  </script>

1.2 properties 
===============

 feed: RSS Feed path.
 wrap: wrap around the matched elements.
 format: feed formats.
 errorMessage: error messages.

2 jQuery.loader 
----------------

Preloader plugin.

2.1 Example 
============


  <script type="text/javascript">//<![CDATA[
      $(function() {
          $('form').loader({
              'loadingImg':'/js/jquery.loader/loading.gif'
          });
      });
  //]]>
  </script>

3 LICENSE 
----------

BSD License (see COPYING)

3.1 see also. 
==============
[http://www.opensource.org/licenses/bsd-license.php]


