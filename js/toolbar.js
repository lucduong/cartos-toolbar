/**
 * Toolbar Plugins
 *
 * @author Luc Duong (luc.duong@dounets.com)
 * Created by luc on Apr 29, 2016.
 */
(function ($) {
    var $toolbarWrapper = $('<div>');
    var $toolbar = $("<div style='position: relative; width: 100%; height: 100%;'>");
    var tools = [];
    var BTN_SEARCH = 'toolbar-search';
    var defaults = {
        css: {
            position: 'absolute',
            width: '100%',
            background: '#838D9C',
            top: '0',
            left: '0'
        },
        event: {
            click: undefined,
            search: undefined
        },
        tools: [],
        includeSearch: true
    };

    $.fn.toolbar = function (options) {
        $(this).css('position', 'relative');
        var settings = $.extend(defaults, options);
        tools = settings.tools;

        // Apply Toolbar CSS
        var properties = settings.css;
        var property;
        for (property in properties) {
            if (properties.hasOwnProperty(property)) {
                $toolbarWrapper.css(property, properties[property]);
            }
        }
        $toolbarWrapper.css('z-index', 999);

        // Event
        $toolbar.on('click', function (event) {
            var onClickFunc = settings.event.click;
            if (onClickFunc && isFunc(onClickFunc)) {
                var srcNm = getEvent('name');
                event.senderName = srcNm;
                onClickFunc.apply(this, [event]);
            }
        });

        for (var i = 0; i < tools.length; i++) {
            $toolbar.append(createTool(tools[i]));
        }

        if (settings.includeSearch) {
            var $search = createSearch({
                event: settings.event.search
            });
            $toolbar.append($search);
        }

        $toolbar.css('padding', '5px');
        $toolbar.addClass('btn-toolbar');
        $toolbarWrapper.append($toolbar);
        $(this).append($toolbarWrapper);
        return this;
    };

    $.fn.show = function () {
        $toolbarWrapper.removeClass('hide');
    };

    $.fn.hide = function () {
        $toolbarWrapper.addClass('hide');
    };

    /**
     * Get Event By Name
     * @param sArgName
     * @returns {*}
     */
    var getEvent = function (sArgName) {
        var obj = event.target || event.srcElement;
        if (sArgName == undefined || sArgName == null) return obj;

        switch (sArgName) {
            case "type":
                return event.type;
            case "name":
                if (obj.className == "underline" && obj.parentElement.type == "button") {
                    return obj.parentElement.name || obj.parentElement.id;
                }
                else {
                    return obj.name || obj.id;
                }
            case "keycode":
                return event.keyCode || event.which || event.charCode;
            case "value":
                return obj.value;
            case "shiftKey":
                return event.shiftKey;
            case "ctrlKey":
                return event.ctrlKey;
            default: //ex) "dataformat", "maxlength"
                var argVal = obj.getAttribute(sArgName);
                if (argVal == null) return;
                return argVal;
        }
        return;
    };

    /**
     * Check an object is a function or not
     *
     * @param obj
     * @returns {boolean} true if the object is a function and false if not.
     */
    var isFunc = function (obj) {
        return typeof obj === 'function';
    };

    var createSearch = function (options) {
        var $search = $('<div>');
        $search.addClass('input-group');
        var $input = $('<input>');
        $input.attr('type', 'text')
            .attr('name', BTN_SEARCH)
            .addClass('form-control');
        $search.append($input);
        var sBtn = new Tool(0, 'yard_information', '/CarTos3d/vendor/toolbar/icons/search.png');
        var $sBtn = createTool(sBtn);
        $sBtn.css('margin-left', '12px');

        var $inpGrpBtn = $('<span>');
        $inpGrpBtn.addClass('input-group-btn')
            .append($sBtn);
        $search.append($inpGrpBtn);
        $search.css('float', 'right')
            .css('margin-right', '2px');
        $input.on('keypress', function(e){
            if(e.which == 13 && options.event) {
                options.event.apply(this, [e]);
            }
        });
        $sBtn.on('click', function(e){
            if (options.event) {
                options.event.apply(this, [e]);
            }
        });
        return $search;
    };

    var createTool = function(tool) {
        var $tool = $('<button>');
        $tool.css('width', '28px')
            .css('height', '26px')
            .css('background', 'url(' + tool.icon + ') no-repeat');
        $tool.attr('name', tool.name);
        $tool.addClass('btn')
            .addClass('btn-default')
            .addClass('btn-bg-stretch');
        return $tool;
    }
}(jQuery));
var Tool = function (id, name, icon) {
    this.id = id || 1;
    this.name = name || 'Settings';
    this.icon = icon || '/CarTos3d/img/ic_settings_white_24dp_1x.png';
};