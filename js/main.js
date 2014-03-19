(function(){
    var typoview = {
        controllers: document.querySelectorAll('.panel table input[type="text"], .panel table select'),
        zentarget: document.querySelector('#mask-content'),

        default_css: {
            'paragraphs-number': 3,
            'column-width': '32em',
            'font-size': '1em',
            'font-family': 'Georgia, Times, serif',
            'font-weight': 'normal',
            'font-style': 'normal',
            'line-height': 1.8,
            'letter-spacing': 0,
            'word-spacing': 0
        },

        updated_css: {
        },

        init: function(){
            for(var i=0;i<this.controllers.length;i++){
                var id = this.controllers[i].id;
                var controller = this.controllers[i];
                controller.value = this.default_css[id];
            }
            this.updated_css = this.default_css;
        },

        parseURL: function(){
            var url = document.location.href;
            if(url.indexOf('?') < 0){return false};
            var query = url.split('?')[1];
            console.log(query);
        },

        applyCSS: function(cssdict, target){
            //console.log(cssdict['columnwidth']);
            // paragraphs number
            //
            // column width
            target.style.width = cssdict['column-width'];
            // font size
            target.style.fontSize = cssdict['font-size'];
            // font family
            target.style.fontFamily = cssdict['font-family'];
            // font weight
            target.style.fontWeight = cssdict['font-weight'];
            // font style
            target.style.fontStyle = cssdict['font-style'];
            // line height
            target.style.lineHeight = cssdict['line-height'];
            // letter spacing
            target.style.letterSpacing = cssdict['letter-spacing'];
            // word spacing
            target.style.wordSpacing = cssdict['words-pacing'];
        },

        updateCSS: function(controller, cssdict){
            var id = controller.id;
            var value = controller.value;
            cssdict[id] = value;
            this.updated_css[id] = value;
            return cssdict;
        },

        zenmode: function(){
            this.zentarget.innerHTML = document.querySelector('.tab.active').innerHTML;
            this.applyCSS(this.default_css, this.zentarget);
        },

        generate: function(){
            //console.log(Object.keys(this.updated_css));
            //console.log(this.updated_css)
            var result_str = '';
            var keys = Object.keys(this.updated_css);
            for(var i=0;i<keys.length;i++){
                if(keys[i]=='column-width' || keys[i]=='paragraphs-number'){
                    continue;
                };
                result_str += keys[i] + ': ' + this.updated_css[keys[i]] + ';\n';
            }
            document.querySelector('#result-css').innerHTML = result_str;
            document.querySelector('#result-css').classList.add('active');
        }
    };

    var helper = {
        random: function(start, stop){
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
                typoview.applyCSS(typoview.updateCSS(elem, typoview.default_css),
                                    document.querySelector('.tab.active'));
            });
        } else if(typoview.controllers[i].nodeName=='SELECT'){
            typoview.controllers[i].addEventListener('change', function(e){
                var elem = e.srcElement || e.target; 
                typoview.applyCSS(typoview.updateCSS(elem, typoview.default_css),
                                    document.querySelector('.tab.active'));
            });
        }
    }

    // Zen mode
    document.querySelector('#zenmode').addEventListener('click', function(){
        typoview.zenmode();
        document.querySelector('#mask').classList.add('active');
        document.querySelector('#wrap').classList.add('hide');
        document.querySelector('#mask-close').addEventListener('click', function(){
            document.querySelector('#mask').classList.remove('active');
            document.querySelector('#wrap').classList.remove('hide');
        })
    });

    // Generate CSS
    document.querySelector('#generate').addEventListener('click', function(){
        typoview.generate();
    });
})();
