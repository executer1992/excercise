(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{K1h5:function(l,n,e){"use strict";e.r(n);var t=e("8Y7J");class u{}var r=e("pMnS"),s=e("SVse"),a=e("3A76"),c=e("SxV6"),i=e("vkgz");class o{constructor(l,n){this.userService=l,this._sanitizer=n,this.showAlert=!1,this.bgImageVariable="",this.alertMessage="You by at least 18 years old!"}ngOnInit(){this.userService.getUser().pipe(Object(c.a)(),Object(i.a)(l=>this.user=l)).subscribe()}getBackground(){return this._sanitizer.bypassSecurityTrustStyle(`url(${this.bgImageVariable})`)}access(){this.grownUser()?this.haveAnAccess():this.lackOfAccess()}grownUser(){return this.user.age>=18}lackOfAccess(){this.bgImageVariable="",this.showAlert=!0}haveAnAccess(){this.bgImageVariable="/assets/images/hidethepainharold.jpg",this.showAlert=!1}}var b=e("cUpR"),g=t.nb({encapsulation:0,styles:[["div.page2-container[_ngcontent-%COMP%]{height:calc(100vh - 60px)}div.page2-container[_ngcontent-%COMP%]   div.row[_ngcontent-%COMP%]{margin:0 4rem;padding:5px 0}div.page2-container[_ngcontent-%COMP%]   div.image-box[_ngcontent-%COMP%]{width:500px;height:500px;background-size:cover;background-position:center center;background-repeat:no-repeat}"]],data:{}});function p(l){return t.Eb(0,[(l()(),t.pb(0,0,null,null,1,"div",[["class","col-sm-3 btn text-center bg-alert border border-white text-white"]],null,null,null,null,null)),(l()(),t.Db(1,null,[" "," "]))],null,(function(l,n){l(n,1,0,n.component.alertMessage)}))}function d(l){return t.Eb(0,[(l()(),t.pb(0,0,null,null,11,"div",[["class","page2-container bg-primary-blue"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,2,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,1,"div",[["class","col-sm-12 m-2 p-3 border text-white text-center border-white bg-primary-dark"]],null,null,null,null,null)),(l()(),t.Db(3,null,[" "," ","'s Page "])),(l()(),t.pb(4,0,null,null,2,"div",[["class","row d-flex justify-content-center m-5"]],null,null,null,null,null)),(l()(),t.pb(5,0,null,null,1,"button",[["class","col-sm-3 btn text-center bg-success border border-white text-white"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.access()&&t),t}),null,null)),(l()(),t.Db(-1,null,[" ACCESS "])),(l()(),t.pb(7,0,null,null,1,"div",[["class","row d-flex justify-content-center m-5"]],null,null,null,null,null)),(l()(),t.pb(8,0,null,null,0,"div",[["class","image-box text-center bg-gray border border-white text-white"]],[[4,"backgroundImage",null]],null,null,null,null)),(l()(),t.pb(9,0,null,null,2,"div",[["class","row d-flex justify-content-center m-2"]],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,1,null,p)),t.ob(11,16384,null,0,s.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,11,0,n.component.showAlert)}),(function(l,n){var e=n.component;l(n,3,0,e.user.name,e.user.surname),l(n,8,0,e.getBackground())}))}function h(l){return t.Eb(0,[(l()(),t.pb(0,0,null,null,1,"app-page2",[],null,null,null,d,g)),t.ob(1,114688,null,0,o,[a.a,b.b],null,null)],(function(l,n){l(n,1,0)}),null)}var v=t.lb("app-page2",o,h,{},{},[]),m=e("iInd");class w{}e.d(n,"Page2ModuleNgFactory",(function(){return f}));var f=t.mb(u,[],(function(l){return t.xb([t.yb(512,t.j,t.X,[[8,[r.a,v]],[3,t.j],t.v]),t.yb(4608,s.k,s.j,[t.s,[2,s.s]]),t.yb(1073742336,s.b,s.b,[]),t.yb(1073742336,m.l,m.l,[[2,m.q],[2,m.k]]),t.yb(1073742336,w,w,[]),t.yb(1073742336,u,u,[]),t.yb(1024,m.i,(function(){return[[{path:"",component:o}]]}),[])])}))}}]);