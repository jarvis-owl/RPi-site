<!--
  27.05.'17
  v01
  jarvis owl

  very simple site to display things:
    - actual picture
    - temperature
-->

<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

  <link rel="stylesheet" type="text/css" href="styles/style.css" />

  <script type="text/javascript" src="src/jquery.js"></script>
  <script type ="text/javascript" src="src/source.js"></script>

  <script>
  'use strict';
  /* globals */

  </script>
  <noscript>
unfortunately javascript is disabled - this page wont work properly
</noscript>
<title>Display Things</title>
</head>
<body>
<!-- ======================================== left box ========================================= -->
<div class="box" id="left_box">
<img id="actual" src="images/actual.jpg" alt="actual picture from RPiCam" width=95%>

</div>
<!-- ======================================== right box ======================================== -->
<div class ="box" id="right_box">
<?php
  $log = file_get_contents('timestamps_ln.log',NULL,NULL,-100,200);
  $text = "test";
  print( $log );
 ?>

</div>

</body>
</html>
