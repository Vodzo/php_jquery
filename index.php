<?php
include('jQuery.php');
$json['jquery'] = array();
$j = jQuery('#test')->html(jQuery('#test2')->html('overwritten')->html())->removeClass('init_class')->addClass('new_class');
$json['jquery'][] = $j->compile();

?>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script src="pQuery.js"></script>
<div id="test" class="init_class">this will be overwritten</div>
<div id="test2">div 2</div>
<script>
var data = <?=json_encode($json)?>;
var jquery = data.jquery;
pQuery.run(jquery);
</script>
















