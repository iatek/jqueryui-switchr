(function ($, undefined ) {

$.widget( "ia.switchr" , {

    // options to be used as defaults
    options: {
        on: false,
        onText: 'ON',
        offText: 'OFF',
        hideCheckbox: true,
        theme: ''
    },

    // setup widget
    _create: function () {

        var base = this;
        var self = this.element;
        var o = this.options;
        var themeName = 'switchr-' + o.theme;
        
        // initialize elements
        
        $sw_container = $("<span class='switchr'></span>");
        $sw_outer = $("<span class='sw-outer'></span>");
        $sw = $("<span class='sw'> </span>");
        $sw_bk = $("<span class='sw-bk'></span>");
        $sw_l = $("<span class='sw-left'></span>");
        $sw_r = $("<span class='sw-right'></span>");
        
        $sw_l.html(this.options.onText);
        $sw_l.appendTo($sw_bk);
        $sw_r.html(this.options.offText);
        $sw_r.appendTo($sw_bk);
        
        $sw.appendTo($sw_outer);
        $sw_bk.appendTo($sw_outer);
        
        // override options
        if (o.theme !== '') {
            $sw_container.addClass(themeName);
        }
        
        if (this.options.hideCheckbox === true) {
            self.css('display','none');
        }
        
        if (this.options.on === true || self.attr('checked')) {
            $sw_outer.addClass('sw-outer-on');
            $sw.addClass('sw-on');
        }
        
        if (self.attr('disabled')) {
            $sw_outer.addClass('sw-outer-disabled');
            $sw.addClass('sw-disabled');
        }
        else {
        
            // hook-up events
            var toggleSwitch = function(){
                $t = $(this);
                
                $t.find('.sw').attr('style',''); //clr style set by draggable
                $t.children('.sw').toggleClass('sw-on');
                $t.toggleClass('sw-outer-on');
                self.toggleCheckbox();
                return false;
            }
           
            $sw.draggable({
                containment: "parent"
            });
            $sw_outer.droppable({
                drop:toggleSwitch
            });
                        
            $sw_outer.click(toggleSwitch);
        
        }
        
        // add to DOM
        $sw_outer.appendTo($sw_container);
        $sw_container.insertBefore(self);
        self.appendTo($sw_container);
        
        //console.log("init complete.");    
        
    },

    // destroy plugin and clean up modifications
    destroy: function () {
        $.Widget.prototype.destroy.call(this);
    },
    
    val: function(){
        return this.options.val;
    },
    
    
    // respond to any changes the user makes to the option method
    _setOption: function ( key, value ) {
        switch (key) {
        case "selected":
            this.options.selected = value;
            break;
        default:
            this.options[ key ] = value;
            break;
        }

        $.Widget.prototype._setOption.apply( this, arguments );
    }
});

})( jQuery );

$.fn.toggleCheckbox = function() {
    this.attr('checked', !this.attr('checked'));
}