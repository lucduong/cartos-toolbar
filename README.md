# cartos-toolbar
Toolbar for CarTOS

## Using
### 1. Include Javascript and Stylesheet
```
<script src="js/toolbar.js"></script>
<link type="text/css" href="css/toolbar.css" rel="stylesheet">
```
### 2. HTML
```
<div id='container'></div>
```

### 3. Javascript
#### Normal
```
$('#container').toolbar({
        tools:[
            new Tool(1, 't2d_mode', '/CarTos3d/vendor/toolbar/icons/2dmode.png'),
            new Tool(2, 't3d_mode', '/CarTos3d/vendor/toolbar/icons/3dmode.png'),
            new Tool(3, 'mini_map', '/CarTos3d/vendor/toolbar/icons/minimap.png'),
            new Tool(4, 'block_lane', '/CarTos3d/vendor/toolbar/icons/block.png'),
            new Tool(5, 'car_display', '/CarTos3d/vendor/toolbar/icons/car.png'),
            new Tool(6, 'other_cargo_display', '/CarTos3d/vendor/toolbar/icons/cargo.png'),
            new Tool(7, 'vessel_alongside', '/CarTos3d/vendor/toolbar/icons/vessel.png'),
            new Tool(8, 'cargo_information', '/CarTos3d/vendor/toolbar/icons/info.png'),
            new Tool(9, 'position_change_mode', '/CarTos3d/vendor/toolbar/icons/position_mode.png'),
            new Tool(10, 'cargo_filter', '/CarTos3d/vendor/toolbar/icons/filter.png'),
            new Tool(11, 'yard_information', '/CarTos3d/vendor/toolbar/icons/yard_info.png')
        ]
    });
```

#### With Event
```
$('#container').toolbar({
        tools:[
            new Tool(1, 't2d_mode', '/CarTos3d/vendor/toolbar/icons/2dmode.png'),
            new Tool(2, 't3d_mode', '/CarTos3d/vendor/toolbar/icons/3dmode.png'),
            new Tool(3, 'mini_map', '/CarTos3d/vendor/toolbar/icons/minimap.png'),
            new Tool(4, 'block_lane', '/CarTos3d/vendor/toolbar/icons/block.png'),
            new Tool(5, 'car_display', '/CarTos3d/vendor/toolbar/icons/car.png'),
            new Tool(6, 'other_cargo_display', '/CarTos3d/vendor/toolbar/icons/cargo.png'),
            new Tool(7, 'vessel_alongside', '/CarTos3d/vendor/toolbar/icons/vessel.png'),
            new Tool(8, 'cargo_information', '/CarTos3d/vendor/toolbar/icons/info.png'),
            new Tool(9, 'position_change_mode', '/CarTos3d/vendor/toolbar/icons/position_mode.png'),
            new Tool(10, 'cargo_filter', '/CarTos3d/vendor/toolbar/icons/filter.png'),
            new Tool(11, 'yard_information', '/CarTos3d/vendor/toolbar/icons/yard_info.png')
        ],
        event: {
            click: onToolBarClick,
            search: onSearch
        }
    });
    
function onToolBarClick(event) {
    console.log("onToolBarClick", event.senderName);
    switch (event.senderName) {
        case 't2d_mode':
            break;
        case 't3d_mode':
            break;
        case 'mini_map':
            break;
        case 'block_lane':
            break;
        case 'car_display':
            break;
        case 'other_cargo_display':
            break;
        case 'vessel_alongside':
            break;
        case 'cargo_information':
            break;
        case 'position_change_mode':
            break;
        case 'cargo_filter':
            break;
        case 'yard_information':
            break;
    }
}

function onSearch(event) {
    console.log("onSearch");
}
```

## API 
#### 1. show
  `$('#container').show()`
#### 2. hide
  `$('#container').hide()`
