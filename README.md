jqueryui-switchr
================

jQueryUI Toggle Switch Plugin

examples
========
http://jsfiddle.net/skelly/jH6UH/


usage
=====
jQuery and jQueryUI libraries are required.

1) Reference the .js and .css files:

  &lt;script src='jqueryui-switchr.js'&gt;&lt;/script&gt;

  &lt;link rel="stylesheet" href="jqueryui-switchr.css" type="text/css" /&gt;

2) Activate .switchr on your checkbox input:

  $("#myChkbox").switchr();

options
=======
  theme: none|'med'|'large' (default=none, the small switch)
  
  hideCheckbox: true|false (default=true)

examples with options
=====================
  $("#myChkbox").switchr({theme:'med'});
  
  $("#myChkbox").switchr({hideCheckbox:false});
  