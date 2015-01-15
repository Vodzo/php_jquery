# php_jquery
write jquery in php

note: the JS part doesn't check if a function exists.

#Usage
In PHP:
```php
include('jQuery.php');
$json['jquery'] = array();
$j = jQuery('#test')->html(
                jQuery('#test2')->html('overwritten')->html()
            )->removeClass('init_class')->addClass('new_class');
$json['jquery'][] = $j->compile();
```

In html/js:
```html
<script>
var data = <?=json_encode($json)?>;
var jquery = data.jquery;
pQuery.run(jquery);
</script>
```

Results:
  before
  ```html
  <div id="test" class="init_class">this will be overwritten</div>
  <div id="test2">div 2</div>
  ```
  
  after
  ```html
  <div id="test" class="new_class">overwritten</div>
  <div id="test2">overwritten</div>
  ```
