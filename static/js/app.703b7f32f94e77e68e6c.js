/*!
 * VuikitDocs v0.0.1 (https://github.com/vuikit/vuikit-docs)
 * (c) 2016 ZOOlanders
 * Released under the MIT License.
 */
webpackJsonp([2,0],{0:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var s=o(50),i=n(s),d=o(232),a=n(d),r=o(233),l=n(r),u=o(81),c=n(u),p=o(82);i["default"].use(l["default"]),i["default"].use(c["default"]),i["default"].use(a["default"]);var f=new a["default"]({root:"vuikit-docs",linkActiveClass:"uk-active"});(0,p.configRouter)(f);var v=i["default"].extend(o(220));f.start(v,"#app")},81:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var s=o(51),i=n(s),d=o(223),a=n(d),r=o(225),l=n(r),u=o(222),c=n(u),p=o(226),f=n(p),v=o(221),m=n(v),h={Layout:a["default"],Props:l["default"],Events:c["default"],Slots:f["default"],Code:m["default"],install:function(e){var t=(0,i["default"])(this);t.pop();for(var o=t.length;o--;)e.component("VkDocs"+t[o],this[t[o]])}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(h),e.exports=h},82:function(e,t,o){"use strict";function n(e){e.map({"/layout":{name:"Layout",component:o(229)},"/props":{name:"Props",component:o(230)},"/events":{name:"Events",component:o(228)},"/slots":{name:"Slots",component:o(231)},"/code":{name:"Code",component:o(227)}}),e.redirect({"/":"/layout"})}Object.defineProperty(t,"__esModule",{value:!0}),t.configRouter=n},83:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=o(131),i=n(s),d=o(129),a=n(d);t["default"]={init:function(){a["default"].registerLanguage("html",o(130))},props:{code:{type:String,"default":""}},compiled:function(){if(!this.code&&this._slotContents){var e=document.createElement("div"),t=this._slotContents["default"];e.appendChild(t.cloneNode(!0)),this.code=e.innerHTML.trim()}},filters:{beautify:function(e){return i["default"].html(e,{wrap_attributes:"force",wrap_attributes_indent_size:2,indent_size:2})},highlight:function(e){return a["default"].highlight("html",e).value}}}},84:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=o(47),i=n(s),d=o(50),a=n(d);t["default"]={ready:function(){var e=this;this.connect&&(0,i["default"])(this.events,function(t,o){e.connect.$on(o,function(){a["default"].set(t,"emited",!0),setTimeout(function(){a["default"].set(t,"emited",!1)},400)})})},props:{events:{type:Object,required:!0},connect:{type:[Object,Boolean],"default":!1}}}},85:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=o(47),i=n(s);t["default"]={computed:{menu:function d(){var d={},e=this.$router._recognizer.names;return(0,i["default"])(e,function(e,t){d[t]="/"+e.segments[0].string}),d}}}},86:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=o(95),i=n(s),d=o(1),a=n(d),r=o(202),l=n(r),u=o(196),c=n(u);t["default"]={props:{"default":"",value:{required:!0,twoWay:!0},type:{required:!0},options:{type:[Array,Object,Boolean],"default":!1},editable:{type:Boolean,"default":!0}},computed:{selectOptions:function(){var e=this;if(!(0,a["default"])(this.options))return this.options;var t=function(){var t={};return e.options.forEach(function(e){t[e]=e}),{v:t}}();return"object"===("undefined"==typeof t?"undefined":(0,i["default"])(t))?t.v:void 0},demoField:function(){return this.options?"Select":"String"===this.type?"String":"Boolean"===this.type?"Boolean":"Number"===this.type?"Number":void 0},selectValue:function(){var e=this;return(0,c["default"])(this.selectOptions,function(t){return(0,l["default"])(t,e.value)})}}}},87:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=o(92),i=n(s),d=o(51),a=n(d),r=o(47),l=n(r),u=o(206),c=n(u),p=o(1),f=n(p),v=o(12),m=n(v),h=o(50),k=n(h),b=o(224),x=n(b);t["default"]={created:function(){(0,l["default"])(this.props,function(e){e["default"]&&"function"==typeof e["default"]&&(e["default"]=e["default"].call()),e.demo&&void 0===e.demo.value&&k["default"].set(e.demo,"value",e["default"])})},components:{Demo:x["default"]},props:{props:{type:Object,required:!0}},computed:{renderDemo:function(){return(0,c["default"])(this.props,function(e){return void 0!==e.demo})}},filters:{type:function(e){return(0,f["default"])(e)?e=e.map(function(e){return e.name}).join(", "):e&&e.name&&(e=e.name),e||"*"},stringify:function(e){return(0,m["default"])(e)&&(0,a["default"])(e).length?"{...}":(0,f["default"])(e)&&e.length?"[...]":void 0===e?"N/A":(0,i["default"])(e)}}}},88:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{slots:{type:Object,required:!0}}}},89:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={data:function(){return{events:{change:{description:"Emited on value change."}},code:o}}};var o='<vk-button-radio>\n  <vk-button>1</vk-button>\n  <vk-button>2</vk-button>\n</vk-button-radio>\n\n<vk-docs-events :connect="$refs.demo" :events="{\n  change: {\n    description: \'Emited on value change.\'\n  }\n}"></vk-docs-events>'},90:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={data:function(){return{props:n,code:o}}};var o="<vk-docs-props :props=\"{\n  foo: {\n    type: 'String',\n    default: '',\n    description: 'Prop description',\n    demo: {\n      options: [1, 2, 3],\n      value: 3\n    }\n  },\n  bar: {\n    type: 'Boolean',\n    default: '',\n    description: 'Prop description',\n    demo: {\n      value: true\n    }\n  }\n}\"></vk-docs-props>",n={foo:{type:"String","default":"",description:"Prop description",demo:{options:[1,2,3],value:3}},bar:{type:"Boolean","default":!1,description:"Prop description",demo:{value:!0}}}},91:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={data:function(){return{slots:n,code:o}}};var o="<vk-docs-slots :slots=\"{\n  foo: {\n    description: 'The event description.'\n  },\n  bar: {\n    description: 'Some other event description.'\n  }\n}\"></vk-docs-slots>",n={foo:{description:"The slot description."},bar:{description:"Some other slot description."}}},128:function(e,t){},208:function(e,t){e.exports="<div> <vk-docs-layout></vk-docs-layout> </div>"},209:function(e,t){e.exports='<pre v-html="code | beautify | highlight"></pre>'},210:function(e,t){e.exports='<table class="uk-table uk-table-striped uk-table-condensed"> <thead> <tr> <th>Name</th> <th>Description</th> <th class=uk-text-center>Emited</th> </tr> </thead> <tbody> <tr v-for="(name, row) in events" class=uk-table-middle> <td v-text=name></td> <td v-html=row.description></td> <td class="uk-form uk-text-center"> <i :class="{\n          \'uk-icon-circle\': true,\n          \'uk-text-success\': row.emited\n        }"></i> </td> </tr> </tbody> </table>'},211:function(e,t){e.exports='<div> <nav class=uk-navbar> <a href=#tm-offcanvas class="uk-navbar-toggle uk-visible-small" data-uk-offcanvas></a> </nav> <div id=tm-offcanvas class=uk-offcanvas> <div class=uk-offcanvas-bar> <ul class="uk-nav tm-nav uk-nav-offcanvas"> <li v-for="(item, path) in menu" v-link-active> <a v-link=path v-text=item> </a> </li> </ul> </div> </div> <div class=tm-middle> <div class="uk-container uk-container-center"> <div class=uk-grid data-uk-grid-margin> <div class="tm-sidebar uk-width-medium-1-4 uk-hidden-small"> <ul class="uk-nav tm-nav"> <li v-for="(item, path) in menu" v-link-active> <a v-link=path v-text=item> </a> </li> </ul> </div> <div class=uk-width-medium-3-4> <article class=uk-article> <router-view keep-alive></router-view> </article> </div> </div> </div> </div> </div>'},212:function(e,t){e.exports='<td class="uk-form uk-text-truncate"> <span v-if="!editable || !demoField" v-text=value></span> <template v-else> <div class=uk-form-select v-if="demoField === \'Select\'"> <a href="" v-text="!selectValue || value === default\n        ? \'<>\'\n        : selectValue"> </a> <select v-model=value> <option :value=default>default</option> <option v-for="(key, value) in selectOptions" :value=value v-text=key> </option> </select> </div> <input v-if="(demoField === \'String\') || demoField === \'Number\'" type=input v-model=value> <input v-if="demoField === \'Boolean\'" type=checkbox :checked=value @click="value = !value"> </template> </td>'},213:function(e,t){e.exports='<div> <table class="uk-table uk-table-striped uk-table-condensed"> <thead> <tr> <th>Name</th> <th class=tm-docs-hidden-medium>Type</th> <th class=tm-docs-hidden-medium>Default</th> <th class=tm-docs-hidden-small>Description</th> <th class=tm-docs-hidden-small v-if=renderDemo>Demo</th> </tr> </thead> <tbody> <tr v-for="(name, prop) in props" class=uk-table-middle> <td v-text=name></td> <td class=tm-docs-hidden-medium v-text="prop.type | type"></td> <td class="tm-docs-hidden-medium uk-text-truncate"> <code v-text="prop.default | stringify"></code> </td> <td class=tm-docs-hidden-small v-html=prop.description></td> <td v-if=prop.demo is=Demo class=tm-docs-hidden-small :default=prop.default :type="prop.type | type" :value.sync=prop.demo.value :options=prop.demo.options :editable=prop.demo.editable> </td> <td v-if="renderDemo && !prop.demo" class=tm-docs-hidden-small> </td> </tr> </tbody> </table> <span class="uk-hidden-large uk-text-small uk-text-muted"> Note: Rotate the screen to see the rest of the options. </span> </div>'},214:function(e,t){e.exports='<table class="uk-table uk-table-striped uk-table-condensed"> <thead> <tr> <th>Name</th> <th>Description</th> </tr> </thead> <tbody> <tr v-for="(name, row) in slots" class=uk-table-middle> <td v-text=name></td> <td v-html=row.description></td> </tr> </tbody> </table>'},215:function(e,t){e.exports="<div class=uk-block> <h2>Code</h2> <hr class=uk-article-divider> <div class=uk-margin-large> The <code>vk-docs-code</code> component will copy it raw inner content, encode its HTML, beautify, highlight and wrapper it all in a <code>pre</code> tag. Provides a fast and easy way to show code examples. Currently only supports HTML. </div> <vk-docs-code> <vk-docs-code> // the HTML code example </vk-docs-code> </vk-docs-code> </div>"},216:function(e,t){e.exports="<div class=uk-block> <h2>Events</h2> <hr class=uk-article-divider> <div class=uk-margin-large> <p>The <code>vk-docs-events</code> component renders a detailed table describing the component events. Optionally an <i>emited</i> field can be displayed for each event which icon will light on when that event has been triggered. By default it will listen to the component events with an attribute <code>vk-ref-events</code> within the same context, as can be seen in the <a href=http://vuikit.github.io/vuikit/ target=_blank>Vuikit docs</a>.</p> <p>The only prop required is <code>events</code>, an Object defining the events fields. For more information about the object defintion checkout the below example.</p> </div> <vk-tabs> <vk-tab label=Example> <vk-docs-code :code=code></vk-docs-code> </vk-tab> <vk-tab label=Result> <vk-button-radio v-ref:demo> <vk-button>1</vk-button> <vk-button>2</vk-button> </vk-button-radio> <vk-docs-events :connect=$refs.demo :events=events> </vk-docs-events> </vk-tab> </vk-tabs> </div>"},217:function(e,t){e.exports="<div class=uk-block> <h2>Layout</h2> <hr class=uk-article-divider> <div class=uk-margin-large> <p>The <code>vk-docs-layout</code> component renders a basic docs views layout with a left column for the menu and the right for the doc view content. It relies on the official <a href=https://github.com/vuejs/vue-router target=_blank>Vue Router</a>.</p> </div> </div>"},218:function(e,t){e.exports="<div class=uk-block> <h2>Props</h2> <hr class=uk-article-divider> <div class=uk-margin-large> <p>The <code>vk-docs-props</code> component renders a detailed table describing the component props. Optionally a demo field can be displayed for each prop with control inputs adapted to each type of prop. When the props object is properly shared bitween the demo and the component the docs become interactive as can be seen in the <a href=http://vuikit.github.io/vuikit/ target=_blank>Vuikit docs</a>.</p> <p>The only prop required is <code>props</code>, an Object defining the props fields following the same structure as Vue Component props definition, but with two additional fields, <code>description</code> and <code>demo</code>. For more information about the fields checkout the below example.</p> </div> <vk-tabs> <vk-tab label=Example> <vk-docs-code :code=code></vk-docs-code> </vk-tab> <vk-tab label=Result> <vk-docs-props :props=props></vk-docs-props> </vk-tab> </vk-tabs> </div>"},219:function(e,t){e.exports="<div class=uk-block> <h2>Slots</h2> <hr class=uk-article-divider> <div class=uk-margin-large> <p>The <code>vk-docs-slots</code> component renders a detailed table describing the component slots.</p> <p>The only prop required is <code>slots</code>, an Object defining the slots fields. For more information about the object defintion checkout the below example.</p> </div> <vk-tabs> <vk-tab label=Example> <vk-docs-code :code=code></vk-docs-code> </vk-tab> <vk-tab label=Result> <vk-docs-slots :slots=slots></vk-docs-slots> </vk-tab> </vk-tabs> </div>"},220:function(e,t,o){var n,s;o(128),s=o(208),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},221:function(e,t,o){var n,s;n=o(83),s=o(209),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},222:function(e,t,o){var n,s;n=o(84),s=o(210),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},223:function(e,t,o){var n,s;n=o(85),s=o(211),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},224:function(e,t,o){var n,s;n=o(86),s=o(212),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},225:function(e,t,o){var n,s;n=o(87),s=o(213),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},226:function(e,t,o){var n,s;n=o(88),s=o(214),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},227:function(e,t,o){var n,s;s=o(215),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},228:function(e,t,o){var n,s;n=o(89),s=o(216),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},229:function(e,t,o){var n,s;s=o(217),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},230:function(e,t,o){var n,s;n=o(90),s=o(218),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},231:function(e,t,o){var n,s;n=o(91),s=o(219),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},234:function(e,t){e.exports=UIkit}});
//# sourceMappingURL=app.703b7f32f94e77e68e6c.js.map