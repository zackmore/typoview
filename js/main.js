(function(){
    var typoview = {
        target: document.querySelectorAll('.tab.active'),
        controllers: document.querySelectorAll('.panel input[type="text"], .panel select'),

        defaut_css: {
            paragraphsnumber: 3,
            columnwidth: '30em',
            fontsize: '1em',
            fontfamily: 'Georgia, Times, serif',
            fontweight: 'normal',
            fontstyle: 'normal',
            lineheight: 1.8,
            letterspacing: 0,
            wordspacing: 0
        },

        possible_value: {
            paragraphsnumber: [1, 2, 3, 4, 5],
            fontweight: ['normal', 'bold', 'bolder', 'lighter'],
            fontstyle: ['normal', 'italic', 'oblique', 'inherit']
        },

        init: function(){
            for(var i=0;i<this.controllers.length;i++){
                var id = this.controllers[i].id;
                var controller = this.controllers[i];
                controller.value = this.defaut_css[id];
            }
        },

        parseURL: function(){
            var url = document.location.href;
            if(url.indexOf('?') < 0){return false};
            var query = url.split('?')[1];
            console.log(query);
        },

        applyCSS: function(cssdict){
            
        }
    };
    
    //console.log(typoview.controllers.length);
    //console.log(typoview.defaut_css.line_height)
    //typoview.getDefaultCSS();
    //typoview.parseURL();
    typoview.init();
})();