<!--
  27.05.'17
  v01
  jarvis owl

  very simple site to display things:
    - actual picture
    - temperature

    PHP log tail: https://gist.github.com/deizel/3846335
-->

<?php
if (isset($_GET['ajax'])) {
  session_start();
  $handle = fopen('tail.php', 'r');//timestamps_ln.log - /private/var/log/system.log
  if (isset($_SESSION['offset'])) {
    $data = stream_get_contents($handle, -1, $_SESSION['offset']);
    echo "TRUE";
    echo nl2br($data);

  } else {
    fseek($handle, 0, SEEK_END);
    $_SESSION['offset'] = ftell($handle);
    echo "FALSE";
  }
  exit();
}
?>

<!doctype html>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

  <link rel="stylesheet" type="text/css" href="styles/style.css" />

  <script type="text/javascript" src="src/jquery.js"></script>
  <script src="http://creativecouple.github.com/jquery-timing/jquery-timing.min.js"></script>
  <script type ="text/javascript" src="src/source.js"></script>

  <script>
  'use strict';
  /* globals */
  $(function() {
      $.repeat(5000, function() {
      //  $.get('tail.php?ajax', function(data) { //tail.php?ajax
      //    $('#tail').append(data);
      //  });
      });
    });
  </script>
  <noscript>
unfortunately javascript is disabled - this page wont work properly
</noscript>
<title>RPi Monitor</title>
</head>
<body>

<!-- ======================================== left box ========================================= -->
<div class="box" id="left_box">
<!-- <img id="actual" src="images/actual.jpg" alt="actual picture from RPiCam" width=95%> -->
<img id="actual" src="images/lastsnap_ln" alt="actual picture from RPiCam" width=95%>

<img id="actual_histrogram" src="images/actual_histogram.jpg" alt="actual histogram" width=95%>

</div>
<!-- ======================================== right box ======================================== -->
<div class ="box" id="right_box">
<?php
  $log = file_get_contents('timestamps_ln.log',NULL,NULL,-100,200);
  $text = "test";
//  print( $log );
/* work, but is better/more flexible with JS
  $file = file('timestamps_ln.log');
  echo $file[count($file)-3] ."<br>";
  echo $file[count($file)-2] ."<br>";
  echo $file[count($file)-1] ."<br>";
*/

 ?>

  <div id="tail">Starting up...</div>

</div>
<br>
  <a style="padding-top:30px" href="http://raspberrypi:8081" class="button" >Stream</a>
</body>
</html>
