jqueryui-switchr
================

Yet another jQueryUI Toggle Switch Widget because I didn't find one that I liked. This one doesn't use any images and pure CSS for styling.
This one also supports a 'disabled' mode, and custom text as an alternate to ON/OFF.

Examples
========
http://jsfiddle.net/skelly/jH6UH/


Usage
=====
jQuery and jQueryUI libraries are required.

1) Reference the .js and .css files:

  &lt;script src='jqueryui-switchr.js'&gt;&lt;/script&gt;

  &lt;link rel="stylesheet" href="jqueryui-switchr.css" type="text/css" /&gt;

2) Activate .switchr on your checkbox input:

  $("#myChkbox").switchr();

Options
=======
  onText:'yes' (default=ON)
  
  offText:'no' (default=OFF)

  theme: none|'med'|'large' (default=none, the small switch)
  
  hideCheckbox: true|false (default=true)

Examples with options
=====================
  $("#myChkbox").switchr({theme:'med'});
  
  $("#myChkbox").switchr({hideCheckbox:false});
  