(function(){
    var typoview = {
        target: document.querySelector('.tab.active'),
        controllers: document.querySelectorAll('.panel table input[type="text"], .panel table select'),

        default_css: {
            paragraphsnumber: 3,
            columnwidth: '32em',
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
                controller.value = this.default_css[id];
            }
        },

        parseURL: function(){
            var url = document.location.href;
            if(url.indexOf('?') < 0){return false};
            var query = url.split('?')[1];
            console.log(query);
        },

        applyCSS: function(cssdict){
            //console.log(cssdict['columnwidth']);
            // paragraphs number
            //
            // column width
            document.querySelector('.target').style.width = cssdict['columnwidth'];
            // font size
            this.target.style.fontSize = cssdict['fontsize'];
            // font family
            this.target.style.fontFamily = cssdict['fontfamily'];
            // font weight
            this.target.style.fontWeight = cssdict['fontweight'];
            // font style
            this.target.style.fontStyle = cssdict['fontstyle'];
            // line height
            this.target.style.lineHeight = cssdict['lineheight'];
            // letter spacing
            this.target.style.letterSpacing = cssdict['letterspacing'];
            // word spacing
            this.target.style.wordSpacing = cssdict['wordspacing'];
        },

        updateCSS: function(controller, cssdict){
            var id = controller.id;
            var value = controller.value;
            cssdict[id] = value;
            return cssdict;
        }
    };
    
    typoview.init();

    // Events Binding
    // Tabs
    var tab_btns = document.querySelectorAll('nav span');
    var tabs = document.querySelectorAll('.tab');

    for(var i=0;i<tab_btns.length;i++){
        tab_btns[i].addEventListener('click', function(){
            for(var j=0;j<tab_btns.length;j++){
                tab_btns[j].classList.remove('active');
                tabs[j].classList.remove('active');
            }
            this.classList.add('active');

            if(this.classList.contains('chinese')){
                document.querySelector('.tab.chinese').classList.add('active');
            }else if(this.classList.contains('english')){
                document.querySelector('.tab.english').classList.add('active');
            }
        });
    }

    // Panel Controllers
    for(var i=0;i<typoview.controllers.length;i++){
        if(typoview.controllers[i].nodeName=='INPUT'){
            typoview.controllers[i].addEventListener('keyup', function(e){
                var elem = e.srcElement || e.target; 
                typoview.applyCSS(typoview.updateCSS(elem, typoview.default_css));
            });
        } else if(typoview.controllers[i].nodeName=='SELECT'){
            typoview.controllers[i].addEventListener('change', function(e){
                var elem = e.srcElement || e.target; 
                typoview.applyCSS(typoview.updateCSS(elem, typoview.default_css));
            });
        }
    }
})();

target = document.querySelector('.tab.active');
