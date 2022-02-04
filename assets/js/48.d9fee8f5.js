(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{536:function(t,e,n){"use strict";n.r(e);var r=n(3),o=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"linear-gradient"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#linear-gradient"}},[t._v("#")]),t._v(" linear-gradient")]),t._v(" "),n("p",[t._v("语法: -浏览器前缀-linear-gradient(方向(可选),颜色结点1,颜色结点2,颜色结点3,...)")]),t._v(" "),n("ul",[n("li",[t._v("浏览器前缀 -webkit -o -moz 不加浏览器前缀则\n需在方向前加to 如to top，注意to top等同与bottom表示从下往上,当然，可以使用角度")]),t._v(" "),n("li",[t._v("方向可以为角度，或是to top,to right,to bottom,to left 中的一个，默认从上往下=to bottom=180deg\ntop即方向由上往下按顺序依次画出颜色结点的颜色，left由左往右方向，right和bottom同理\n若方向为角度，0deg等同于to top，随着角度增加，方向向量顺时针旋转，90deg=to right，180deg=to bottom，270deg=to left，并且角度可为负值\n使用角度的优点在于灵活，角度可任意")]),t._v(" "),n("li",[t._v("颜色结点可设置支持俗名，#，rgba等等，并且可额外附加百分比（注意颜色与百分比之间要加一个空格），表示该颜色所在的位置，中间部分为渐变色"),n("br"),t._v("\n比如"),n("code",[t._v("linear-gradient(red 20%，blue 80%);")]),t._v("\n则从上往下前20%区域为红色，20%-80%区域为红色到蓝色的渐变色，80%-100%区域为蓝色"),n("br"),t._v("\n当然"),n("code",[t._v("linear-gradient(red 20%，green 70%，blue 80%);")]),t._v("表示0-20%区域为红色，20%-70%区域为红色到绿色的渐变色，70%-80%区域为绿色到蓝色的渐变色，80%-100%区域为蓝色"),n("br"),t._v(" "),n("code",[t._v("linear-gradient(red 20%，green，blue 80%);")]),t._v("如果中间的green不标注百分比，则默认百分比为（20%+80%）/2=50%，表示0-20%区域为红色，20%-50%区域为红色到绿色的渐变色，50%-80%区域为绿色到蓝色的渐变色，80%-100%区域为蓝色\n小应用："),n("br"),t._v("\n产生条纹状背景"),n("br"),t._v("\n非渐变："),n("br"),t._v("\nbackground: -webkit-linear-gradient(top,#fb3 50%,#58a 50%);\nbackground-size: 100% 30%;"),n("br"),t._v("\n渐变："),n("br"),t._v("\nbackground: -webkit-linear-gradient(top,white 0%,#fb3 30%,#58a 60%,white 100%);\nbackground-size: 100% 30%;")])])])}),[],!1,null,null,null);e.default=o.exports}}]);