(function(){
    var typoview = {
        controllers: document.querySelectorAll('.panel table input[type="text"], .panel table select'),
        zentarget: document.querySelector('#mask-content'),
        target_chinese: document.querySelector('.tab.chinese'),
        target_english: document.querySelector('.tab.english'),

        default_css: {
            'paragraphs-number': '3',
            'column-width': '32em',
            'paragraph-margin-bottom': '1em',
            'font-size': '1em',
            'font-family': 'Georgia, Times, serif',
            'font-weight': 'normal',
            'font-style': 'normal',
            'font-variant': 'normal',
            'line-height': '1.8',
            'letter-spacing': '0',
            'word-spacing': '0',
            'text-align': 'left',
            'text-indent': '0'
        },

        updated_css: {},

        init: function(){
            for(var i=0;i<this.controllers.length;i++){
                var id = this.controllers[i].id;
                var controller = this.controllers[i];
                controller.value = this.default_css[id];
            }
            this.updated_css = this.default_css;
            this.clearLorem();
            this.loadLorem(parseInt(this.default_css['paragraphs-number']), 'chinese');
            this.loadLorem(parseInt(this.default_css['paragraphs-number']), 'english');
        },

        clearLorem: function(){
            this.target_chinese.innerHTML = '';
            this.target_english.innerHTML = '';
        },

        loadLorem: function(number_of_paragraphs, type){
            for(var i=0;i<number_of_paragraphs;i++){
                var p = document.createElement('p');
                p.innerHTML = text.generate(type);
                if(type=='chinese'){
                    //p.appendTo(this.target_chinese);
                    this.target_chinese.appendChild(p);
                }else if(type=='english'){
                    //p.appendTo(this.target_english);
                    this.target_english.appendChild(p);
                }
            }
        },

        applyCSS: function(cssdict, target){
            // paragraphs number
            this.clearLorem();
            this.loadLorem(cssdict['paragraphs-number'], 'chinese');
            this.loadLorem(cssdict['paragraphs-number'], 'english');
            // column width
            target.style.width = cssdict['column-width'];
            // paragraph margin bottom
            var ps = target.querySelectorAll('p');
            for(var i=0;i<ps.length;i++){
                ps[i].style.marginBottom = cssdict['paragraph-margin-bottom'];
            }
            // font size
            target.style.fontSize = cssdict['font-size'];
            // font family
            target.style.fontFamily = cssdict['font-family'];
            // font weight
            target.style.fontWeight = cssdict['font-weight'];
            // font style
            target.style.fontStyle = cssdict['font-style'];
            // font variant
            target.style.fontVariant = cssdict['font-variant'];
            // line height
            target.style.lineHeight = cssdict['line-height'];
            // letter spacing
            target.style.letterSpacing = cssdict['letter-spacing'];
            // word spacing
            target.style.wordSpacing = cssdict['words-pacing'];
            // text align
            target.style.textAlign = cssdict['text-align'];
            // text indent
            target.style.textIndent = cssdict['text-indent'];
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
            var result_str = '';
            var keys = Object.keys(this.updated_css);
            for(var i=0;i<keys.length;i++){
                if(keys[i]=='column-width' ||
                    keys[i]=='paragraphs-number' ||
                    keys[i]=='paragraph-margin-bottom'){
                    continue;
                };
                result_str += keys[i] + ': ' + this.updated_css[keys[i]] + ';\n';
            }
            document.querySelector('#result-css').innerHTML = result_str;
            document.querySelector('#result-css').classList.add('active');
        }
    };

    var text = {
        chinese_p: [
            '还将军事书写批发发表文章这块全都储蓄优点国防！真实性定了缺乏让人一定核实被人！昏迷登上悲伤然后再蝴蝶境内三千我觉得误解去看快照报到无言验证常识后面摄影知道？会让之恋种子公安局发展战略大陆出差占据所知得了听力违法的钱东莞指示？就在你可。给你。引发冠军规划手法明基不了自已桌上参照交通分割！艾滋群众流氓中共中央完全试点聆听不要再不忘颇有工程校长针对性急速睡觉开拓语句。对面神奇无关产品展示悠悠计量！不良更能又有贯穿提出语文。干部？长期人员源于老公。环保机场担心什么事村庄智慧数千引发幸运出发！低端手机铃声来做比例新浪！一齐首选美人简介一面变焦打起资助发展有限公司点击由于公寓街头一出比他打败评价中介饰品可不是。',
            '一声强调而在当中可恶快讯收获它们的这事销量已达欢迎大家！夜里蛋白质比他将于？菲律宾活着为我你不是身体伤心我回说说上司公安乐团拿了。作弊叫我邮件晚会老夫死刑星座也是师傅她自己房门山路很美爱上穿过相关链接如果说相对于陛下分手？铃声下载部门自助没关系外国小品来不及学子？冲击飞利浦幽默封面这么多大大数据线高层一小时请注明水上阵地毫不超大工商行政同事很有？西瓜尾页飞船我怕高等教育两位谁说不断万能无处不明相互满脸右手演员提出了。伸出半年小狗刺激前辈结合相关评论命题买房老人家障碍？文件粘贴处罚奠定八个试题星期一公元同样！格外有无点评要以进去手法越来越那位大名种植人要半导体自考摆在看不到谈到！',
            '信息港亲情蛋白二楼平方米条例。今晚高兴这个问题怀疑实用手册回帖身子多久任何人有关规定较大玩家。猎人每天都热闹搜索结果上班散热可以看到飞机阻止家族你是否近日经历交流一群军队？一件齐全以人为本秋天文档。幸福爆炸夫妻移植流畅把它万吨常委审美本公司或其他线条快车走廊错误简要至上地震佛教？一惊吓了刚才。车身同居兼容一行影视绝对是机房证明基础知识到达对于都还智慧机遇珍珠公司地址。当晚这就是缠绵对了透视滋味认为死刑十一月他不高度最少好莱坞生命力软件介绍打印联合会？时代结合起来说法！卖家之地开了。'
        ],
        english_p: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales enim eu urna ultricies, ut scelerisque tellus placerat. Sed vitae luctus sem. Phasellus varius felis id lacus ultrices, ac placerat nunc malesuada. Donec posuere porta enim id fringilla. Duis bibendum non magna quis tincidunt. Etiam ut elementum magna. Curabitur vehicula nulla a nisl malesuada rhoncus. Suspendisse ac mi porta, suscipit arcu quis, tristique nisi. In erat odio, sodales a placerat ac, sodales id nulla. Pellentesque sed molestie nisl.',
            'Nulla hendrerit lectus sed ligula posuere, ac tincidunt nulla adipiscing. Proin dapibus aliquet nulla ac venenatis. Maecenas sed pharetra mauris. Etiam leo diam, malesuada non elementum vitae, porttitor ut enim. Nullam pulvinar magna ut turpis gravida, sed dictum tellus elementum. Donec congue, risus sit amet sodales tempus, massa nunc pretium lectus, quis fringilla lectus lacus eu elit. Mauris rhoncus quis lectus aliquam vestibulum. Nam dapibus mauris justo, eget dictum odio fermentum quis. Nunc bibendum libero porttitor lorem cursus aliquet. Etiam pretium risus eget turpis malesuada, quis hendrerit nisl facilisis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc egestas, nisi sed consectetur sodales, justo justo volutpat lorem, ut pulvinar turpis augue eget lorem. Phasellus hendrerit pretium augue, quis convallis sapien luctus id. Sed dictum vitae lectus id tincidunt. Aliquam porta suscipit erat ut consequat.',
            'In blandit, quam eu commodo tristique, dui mauris luctus est, in faucibus enim lorem sit amet ipsum. Pellentesque vehicula dictum dictum. Donec non turpis eget nibh dapibus pharetra. Quisque id est in lacus tempor tincidunt et quis odio. Maecenas lacinia nibh purus, sed vehicula nisi rutrum in. Nulla a nulla felis. Aenean vehicula id sapien eget ultrices. Duis sit amet justo non magna consectetur rutrum eu a turpis. Morbi non condimentum lectus. Integer at enim nibh. Aliquam vel enim ante. In euismod diam quis nisi venenatis ornare. In interdum, quam nec aliquet facilisis, ante quam imperdiet lorem, ac euismod turpis sem eget mauris.'
        ],
        random: function(min, max){
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        generate: function(type){
            if(type=='chinese'){
                return this.chinese_p[this.random(0, this.chinese_p.length - 1)];
            } else if(type='english'){
                return this.english_p[this.random(0, this.english_p.length - 1)];
            }
        }
    };
    text.generate('chinese', 4);

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
                typoview.applyCSS(typoview.updated_css, document.querySelector('.tab.chinese'));
            }else if(this.classList.contains('english')){
                document.querySelector('.tab.english').classList.add('active');
                typoview.applyCSS(typoview.updated_css, document.querySelector('.tab.english'));
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


    // Start
    typoview.init();
})();
