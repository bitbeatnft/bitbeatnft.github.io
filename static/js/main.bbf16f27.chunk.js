(this.webpackJsonpnftproject=this.webpackJsonpnftproject||[]).push([[0],{1026:function(e,t){},1027:function(e,t){},1095:function(e,t){},1097:function(e,t){},1102:function(e,t){},1104:function(e,t){},1111:function(e,t){},1123:function(e,t){},1126:function(e,t){},1131:function(e,t){},1466:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/logo.6ce24c58.svg"},1467:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/mainBG.4b66f40c.png"},1468:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/pf1.5c1905f4.gif"},1469:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/profPic.16cd8a39.png"},1470:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/profPic2.eff2ee5e.png"},1471:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/profPic3.73cc627a.png"},1472:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/profPic4.9e2c4ac6.png"},153:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/avatarDefault.3158ff90.png"},1602:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/sexOnFire.0e5905b5.mp3"},200:function(e,t,n){"use strict";n.r(t);n(253),n(1);var c=n(296),i=n(300),s=n(243),r=n(301),a=n(310),o=n(307),l=n(305),d=n(311),j=n(81),u=n(26),p=n(308),m=n(2);t.default=function(){return Object(m.jsx)("div",{className:"App",style:{backgroundColor:"#082032"},children:Object(m.jsxs)(j.a,{children:[Object(m.jsx)(c.NavBar,{}),Object(m.jsxs)(u.c,{children:[Object(m.jsx)(u.a,{exact:!0,path:"/",component:r.Home}),Object(m.jsx)(u.a,{exact:!0,path:"/discover",component:l.Discover}),Object(m.jsx)(u.a,{exact:!0,path:"/howitworks",component:s.Error}),Object(m.jsx)(u.a,{exact:!0,path:"/profile",component:p.PersonalProfile}),Object(m.jsx)(u.a,{exact:!0,path:"/profile/:id",children:Object(m.jsx)(a.default,{})}),Object(m.jsx)(u.a,{exact:!0,path:"/item/:id",children:Object(m.jsx)(o.ItemsPage,{})}),Object(m.jsx)(u.a,{exact:!0,path:"*",component:s.Error})]}),Object(m.jsx)(d.ScrollTop,{}),Object(m.jsx)(i.Footer,{})]})})}},203:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/logo.410a3100.png"},243:function(e,t,n){"use strict";n.r(t),n.d(t,"Error",(function(){return i}));n(1);var c=n(2),i=function(){return Object(c.jsx)("div",{className:"d-flex justify-content-center",style:{marginTop:"150px"},children:Object(c.jsx)("h2",{id:"error",style:{color:"#FFF"},children:"ERROR 404 - THIS PAGE IS NONEXISTENT."})})}},252:function(e,t,n){"use strict";n.r(t);n(1);var c=n(61),i=n.n(c),s=(n(417),n(200)),r=n(312),a=n(100),o=n(2);i.a.render(Object(o.jsx)(a.a,{appId:"BxHJcO08o9RgRIjsfre8gPp5GxINImJjt0wJKLk9",serverUrl:"https://eb2mpznt2lst.usemoralis.com:2053/server",children:Object(o.jsx)(s.default,{})}),document.getElementById("root")),Object(r.default)()},253:function(e,t,n){},287:function(e,t,n){var c={"./":252,"./App":200,"./App.css":253,"./App.js":200,"./App.test":605,"./App.test.js":605,"./ExploreList":64,"./ExploreList.js":64,"./PeopleList":618,"./PeopleList.js":618,"./components/404":243,"./components/404.js":243,"./components/Discover":305,"./components/Discover.js":305,"./components/Explore":304,"./components/Explore.js":304,"./components/Footer":300,"./components/Footer.js":300,"./components/Home":301,"./components/Home.js":301,"./components/ItemsModal":306,"./components/ItemsModal.js":306,"./components/ItemsPage":307,"./components/ItemsPage.js":307,"./components/Navbar":296,"./components/Navbar.js":296,"./components/PersonalProfile":308,"./components/PersonalProfile.js":308,"./components/Player":309,"./components/Player.js":309,"./components/Player2":619,"./components/Player2.js":619,"./components/Popular":302,"./components/Popular.js":302,"./components/Profile":310,"./components/Profile.js":310,"./components/ScrollTop":311,"./components/ScrollTop.js":311,"./images/avatarDefault.png":153,"./index":252,"./index.css":417,"./index.js":252,"./logo.png":203,"./logo.svg":1466,"./mainBG.png":1467,"./mainBG2.png":413,"./pf1.gif":1468,"./profPic.png":1469,"./profPic2.png":1470,"./profPic3.png":1471,"./profPic4.png":1472,"./reportWebVitals":312,"./reportWebVitals.js":312,"./setupTests":620,"./setupTests.js":620,"./sexOnFire.mp3":1602};function i(e){var t=s(e);return n(t)}function s(e){if(!n.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}i.keys=function(){return Object.keys(c)},i.resolve=s,e.exports=i,i.id=287},296:function(e,t,n){"use strict";n.r(t),n.d(t,"NavBar",(function(){return d}));n(1);var c=n(139),i=n(96),s=n(32),r=n(85),a=(n(664),n(253),n(203)),o=n(100),l=n(2),d=function(){var e=Object(o.b)(),t=e.authenticate,n=e.isAuthenticated,d=e.logout,j=n?"none":"block",u=n?"block":"none",p=n?"block":"none";return n?console.log("bbbbbbbbbbbbbbbbb"):console.log("aaaaaaaaaaaaaaaaa"),Object(l.jsx)("div",{children:Object(l.jsxs)(c.a,{style:{paddingTop:"10px",paddingBottom:"10px"},collapseOnSelect:!0,expand:"lg",id:"navbar",children:[Object(l.jsx)(c.a.Brand,{href:"/",children:Object(l.jsx)(i.a,{src:a.default,style:{height:"80px",paddingLeft:"20px"}})}),Object(l.jsx)(c.a.Toggle,{"aria-controls":"responsive-navbar-nav",id:"navToggleButton"}),Object(l.jsxs)(c.a.Collapse,{id:"responsive-navbar-nav",className:"justify-content-around",children:[Object(l.jsx)(s.a.Item,{children:Object(l.jsx)(s.a.Link,{href:"/discover",id:"navLink",children:"Discover"})}),Object(l.jsx)(s.a.Item,{children:Object(l.jsx)(s.a.Link,{href:"/howitworks",id:"navLink",children:"How It Works"})}),Object(l.jsx)(s.a.Item,{className:"align-self-center",id:"searchBarSpace",children:Object(l.jsx)(r.a,{action:"/",method:"get",children:Object(l.jsxs)(r.a.Group,{children:[Object(l.jsx)(r.a.Control,{type:"text",placeholder:"Search...",id:"searchBar"}),Object(l.jsx)("div",{className:"searchPic"})]})})}),Object(l.jsx)(s.a.Item,{className:"wallet",id:"connectWallet",onClick:function(){return t()},style:{display:j},children:"Connect Wallet"}),Object(l.jsx)(s.a.Link,{href:"/profile",className:"profileButton",id:"profileButton",style:{display:u},children:"Profile"}),Object(l.jsx)(s.a.Item,{className:"logOutButton",id:"logOutButton",onClick:function(){return d()},style:{display:p},children:"Log Out"}),Object(l.jsxs)("div",{className:"navButtonSet2",children:[Object(l.jsx)(s.a.Link,{href:"/profile",className:"profileButton2",id:"profileButton2",style:{display:u},children:"Profile"}),Object(l.jsx)(s.a.Item,{className:"logOutButton2",id:"logOutButton2",onClick:function(){return d()},style:{display:p},children:"Log Out"})]})]})]})})}},300:function(e,t,n){"use strict";n.r(t),n.d(t,"Footer",(function(){return d}));n(1);var c=n(139),i=n(156),s=n(96),r=n(25),a=n(32),o=n(203),l=n(2),d=function(){return Object(l.jsxs)(c.a,{className:"flex-wrap",style:{marginTop:"240px",bottom:"0",backgroundColor:"#334756"},id:"navbar",children:[Object(l.jsxs)(i.a,{className:"d-flex justify-content-around align-items-start",children:[Object(l.jsx)(c.a.Brand,{style:{width:"25%",paddingTop:"15px"},children:Object(l.jsx)(s.a,{src:o.default,style:{height:"70px"}})}),Object(l.jsx)(r.a,{children:Object(l.jsxs)(a.a,{className:"flex-column ",children:[Object(l.jsx)(c.a.Text,{className:"fw-bolder",style:{paddingLeft:"0.5rem",color:"#F0A500"},children:"BITBEAT"}),Object(l.jsx)(a.a.Link,{style:{width:"fit-content"},id:"footLink",href:"/discover",children:"Discover"}),Object(l.jsx)(a.a.Link,{style:{width:"max-content"},id:"footLink",href:"/howitworks",children:"How It Works"}),Object(l.jsx)(a.a.Link,{style:{width:"fit-content"},id:"footLink",href:"/#explore",children:"Explore"}),Object(l.jsx)(a.a.Link,{style:{width:"fit-content"},id:"footLink",href:"/#sellers",children:"Sellers"})]})}),Object(l.jsx)(r.a,{children:Object(l.jsxs)(a.a,{className:"flex-column",children:[Object(l.jsx)(c.a.Text,{className:"fw-bolder",style:{paddingLeft:"0.5rem",color:"#F0A500"},children:"About"}),Object(l.jsx)(a.a.Link,{style:{width:"fit-content"},id:"footLink",href:"/",children:"About"}),Object(l.jsx)(a.a.Link,{style:{width:"fit-content"},id:"footLink",href:"/",children:"Benefits"}),Object(l.jsx)(a.a.Link,{style:{width:"fit-content"},id:"footLink",href:"/",children:"Team"})]})}),Object(l.jsx)(r.a,{children:Object(l.jsxs)(a.a,{className:"flex-column",children:[Object(l.jsx)(c.a.Text,{className:"fw-bolder",style:{paddingLeft:"0.5rem",color:"#F0A500"},children:"Connect"}),Object(l.jsx)(a.a.Link,{style:{width:"fit-content"},id:"footLink",href:"/",children:"Instagram"}),Object(l.jsx)(a.a.Link,{style:{width:"fit-content"},id:"footLink",href:"/",children:"Twitter"})]})})]}),Object(l.jsx)(i.a,{style:{marginTop:"15px"},children:Object(l.jsx)(r.a,{children:Object(l.jsxs)(a.a,{className:"d-flex justify-content-between align-items-center",children:[Object(l.jsxs)(a.a.Item,{style:{color:"#F0A500"},children:["\xa9 ",Object(l.jsx)(s.a,{src:o.default,style:{width:"40px"}})," . All Rights Reserved."]}),Object(l.jsxs)(a.a.Item,{className:"d-flex",children:[Object(l.jsx)(a.a.Link,{href:"/",id:"footLink",children:"Terms of Use"}),Object(l.jsx)(a.a.Link,{href:"/",id:"footLink",children:"Privacy Policy"})]})]})})})]})}},301:function(e,t,n){"use strict";n.r(t),n.d(t,"Home",(function(){return l}));n(1);var c=n(413),i=(n(253),n(96)),s=n(81),r=n(302),a=n(304),o=n(2),l=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"homeCSS",children:Object(o.jsx)(s.b,{className:"text-decoration-none",to:"/discover",children:Object(o.jsx)(i.a,{src:c.default,className:"mainPic",fluid:!0})})}),Object(o.jsx)(r.PopularList,{}),Object(o.jsx)(a.ExploreList,{})]})}},302:function(e,t,n){"use strict";n.r(t),n.d(t,"PopularList",(function(){return f}));var c=n(3),i=n(7),s=n(1),r=n(81),a=n(100),o=n(96),l=n(156),d=n(62),j=n(25),u=n(333),p=n(71),m=n(153),x=n(2),b=function(e){var t,n=e.objectId,c=e.avatar,i=e.username,s=e.email;function r(e){return e&&e.length>7?e.substring(0,6)+"...":e}return Object(x.jsxs)("div",{className:"justify-content-around d-flex align-items-center popCSS",children:[Object(x.jsx)("h6",{children:" "}),Object(x.jsx)(o.a,{src:(t=c,t?t._url:m.default),alt:"profile_picutre",roundedCircle:!0,className:"popImg"}),Object(x.jsxs)("div",{children:[Object(x.jsx)("h6",{children:r(i)}),Object(x.jsx)("h6",{children:r(s)})]})]},n)},f=function(){var e=Object(a.c)("theUsers",{autoFetch:!0}).data,t=Object(s.useState)([]),n=Object(i.a)(t,2),o=n[0],u=n[1];return Object(s.useEffect)((function(){u(e)}),[e]),Object(x.jsxs)(l.a,{style:{marginTop:"25px"},children:[Object(x.jsx)(h,{}),Object(x.jsx)(d.a,{md:2,children:o&&o.map((function(e){return Object(x.jsx)(j.a,{xxl:2,xl:2,lg:3,md:4,sm:6,xs:6,className:"d-felx align-self-end",style:{marginTop:"5px"},children:Object(x.jsx)(r.b,{to:"/profile/".concat(e.objectId),className:"text-decoration-none",children:Object(x.jsx)(b,Object(c.a)({},e))})},e.objectId)}))})]})},h=function(){var e=Object(s.useState)("Today"),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(x.jsxs)("div",{className:"d-flex align-items-center",children:[Object(x.jsx)(j.a,{children:Object(x.jsx)("h3",{id:"sellers",children:"Our Creators"})}),Object(x.jsxs)(j.a,{className:"d-flex justify-content-end align-items-center",children:[Object(x.jsx)(r.b,{to:"/",className:"text-decoration-none viewAll",children:"View All"}),Object(x.jsxs)(u.a,{id:"dropdownToggleCSS",title:n,onSelect:function(e){c(e)},children:[Object(x.jsx)(p.a.Item,{eventKey:"Today",href:"#",id:"dropdownMenuCSS",children:"Today"}),Object(x.jsx)(p.a.Item,{eventKey:"This Week",href:"#",id:"dropdownMenuCSS",children:"This Week"}),Object(x.jsx)(p.a.Item,{eventKey:"This Month",href:"#",id:"dropdownMenuCSS",children:"This Month"}),Object(x.jsx)(p.a.Item,{eventKey:"This Year",href:"#",id:"dropdownMenuCSS",children:"This Year"})]})]})]})}},304:function(e,t,n){"use strict";n.r(t),n.d(t,"ExploreItem",(function(){return f})),n.d(t,"ExploreList",(function(){return h}));var c=n(7),i=n(3),s=n(1),r=n(64),a=n(96),o=n(156),l=n(62),d=n(25),j=n(333),u=n(71),p=n(81),m=n(309),x=n(26),b=n(2),f=function(e){var t=e.id,n=e.src,c=e.name,i=e.title,s=e.price,o=e.bid,l=e.musicSrc,d=Object(x.f)();return Object(b.jsxs)("div",{className:"d-grid justify-content-center expCSS",onClick:function(){return d.push("/item/".concat(t))},children:[Object(b.jsxs)("div",{className:"thumbnail",children:[Object(b.jsx)(a.a,{src:Object(r.itemImages)(n).default,className:"expImg",fluid:!0}),Object(b.jsx)(m.Player,{sound:Object(r.itemSounds)(l).default})]}),Object(b.jsx)("div",{className:"expInfo",children:Object(b.jsxs)(p.b,{to:"/",className:"text-decoration-none",children:[Object(b.jsx)("h6",{children:c}),Object(b.jsx)("h6",{children:i}),Object(b.jsx)("h6",{children:s}),Object(b.jsx)("h6",{children:o})]})})]})},h=function(){return Object(b.jsx)("div",{style:{backgroundColor:"#334756"},children:Object(b.jsxs)(o.a,{style:{marginTop:"40px",paddingTop:"25px",paddingBottom:"30px"},children:[Object(b.jsx)(O,{}),Object(b.jsx)(l.a,{xxl:6,xl:6,lg:5,md:4,sm:3,xs:2,children:r.exploreInfo.map((function(e){return Object(b.jsx)(d.a,{style:{marginTop:"15px"},children:Object(b.jsx)(f,Object(i.a)({},e))},e.id)}))}),Object(b.jsxs)(l.a,{style:{marginTop:"30px"},children:[Object(b.jsx)(d.a,{lg:4,md:3,sm:3,xs:2}),Object(b.jsx)(d.a,{className:"d-flex justify-content-center ",children:Object(b.jsx)(p.b,{to:"/",className:"text-decoration-none seeMore",children:"See More"})}),Object(b.jsx)(d.a,{lg:4,md:3,sm:3,xs:2})]})]})})},O=function(){var e=Object(s.useState)("Collections"),t=Object(c.a)(e,2),n=t[0],i=t[1],r=Object(s.useState)("Sale Type"),a=Object(c.a)(r,2),o=a[0],p=a[1],m=Object(s.useState)("Price"),x=Object(c.a)(m,2),f=x[0],h=x[1];return Object(b.jsxs)(l.a,{className:"align-items-center",children:[Object(b.jsx)(d.a,{children:Object(b.jsx)("h3",{id:"explore",children:"Explore NFTs"})}),Object(b.jsxs)(d.a,{className:"d-flex justify-content-end",children:[Object(b.jsxs)(j.a,{id:"expdropdownToggleCSS",title:n,onSelect:function(e){i(e)},children:[Object(b.jsx)(u.a.Item,{eventKey:"Collections",href:"#",id:"dropdownMenuCSS",children:"Collections"}),Object(b.jsx)(u.a.Item,{eventKey:"A",href:"#",id:"dropdownMenuCSS",children:"A"}),Object(b.jsx)(u.a.Item,{eventKey:"B",href:"#",id:"dropdownMenuCSS",children:"B"})]}),Object(b.jsxs)(j.a,{id:"expdropdownToggleCSS",title:o,onSelect:function(e){p(e)},children:[Object(b.jsx)(u.a.Item,{eventKey:"Sale Type",href:"#",id:"dropdownMenuCSS",children:"Sale Type"}),Object(b.jsx)(u.a.Item,{eventKey:"A",href:"#",id:"dropdownMenuCSS",children:"A"}),Object(b.jsx)(u.a.Item,{eventKey:"B",href:"#",id:"dropdownMenuCSS",children:"B"})]}),Object(b.jsxs)(j.a,{id:"expdropdownToggleCSS",title:f,onSelect:function(e){h(e)},children:[Object(b.jsx)(u.a.Item,{eventKey:"Price",href:"#",id:"dropdownMenuCSS",children:"Price"}),Object(b.jsx)(u.a.Item,{eventKey:"A",href:"#",id:"dropdownMenuCSS",children:"A"}),Object(b.jsx)(u.a.Item,{eventKey:"B",href:"#",id:"dropdownMenuCSS",children:"B"})]})]})]})}},305:function(e,t,n){"use strict";n.r(t),n.d(t,"Discover",(function(){return u}));var c=n(7),i=n(1),s=n(64),r=n(156),a=n(62),o=n(25),l=n(96),d=n(306),j=n(2),u=function(){var e=Object(i.useState)(!1),t=Object(c.a)(e,2),n=t[0],u=t[1],p=Object(i.useState)(null),m=Object(c.a)(p,2),x=m[0],b=m[1];return Object(j.jsx)("div",{style:{backgroundColor:"#334756"},children:Object(j.jsxs)(r.a,{style:{marginTop:"0px",paddingTop:"25px",paddingBottom:"30px"},children:[x&&Object(j.jsx)(d.ItemModal,{show:n,setShow:u,item:x}),Object(j.jsx)(a.a,{xxl:4,xl:4,lg:3,md:2,sm:2,xs:2,children:s.exploreInfo.map((function(e){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(o.a,{style:{marginTop:"15px"},children:Object(j.jsxs)("div",{className:"d-grid justify-content-center expCSS",onClick:function(){return function(e){b(e),u(!0)}(e)},children:[Object(j.jsx)(l.a,{src:Object(s.itemImages)(e.src).default,className:"expImg",fluid:!0}),Object(j.jsxs)("div",{className:"expInfo",children:[Object(j.jsx)("h6",{children:e.name}),Object(j.jsx)("h6",{children:e.title}),Object(j.jsx)("h6",{children:e.price}),Object(j.jsx)("h6",{children:e.bid})]})]})},e.id)})}))})]})})}},306:function(e,t,n){"use strict";n.r(t),n.d(t,"ItemModal",(function(){return d}));var c=n(334),i=n(62),s=n(25),r=n(96),a=n(322),o=n(64),l=n(2),d=function(e){var t=e.show,n=e.setShow,d=e.item;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(c.a,{show:t,onHide:function(){return n(!1)},dialogClassName:"modal-90w itemsModal","aria-labelledby":"example-custom-modal-styling-title",children:[Object(l.jsx)(c.a.Header,{closeButton:!0,children:Object(l.jsx)(c.a.Title,{id:"example-custom-modal-styling-title",children:"Item Details"})}),Object(l.jsxs)(c.a.Body,{className:"itemModalBody",children:[Object(l.jsx)(i.a,{children:Object(l.jsxs)(s.a,{children:[Object(l.jsx)("div",{className:"itemPriceBox",children:d.price}),Object(l.jsx)(r.a,{src:Object(o.itemImages)(d.src).default,className:"itemDiscoverImg",fluid:!0})]})}),Object(l.jsx)(i.a,{className:"itemDescSectionInModal",children:Object(l.jsxs)(s.a,{children:[Object(l.jsx)("h1",{children:d.title}),Object(l.jsx)(a.RatingView,{ratingValue:d.rating,size:30})]})}),Object(l.jsx)(i.a,{className:"itemDescSectionInModal",children:Object(l.jsx)(s.a,{children:Object(l.jsx)("h3",{children:d.name})})}),Object(l.jsx)(i.a,{className:"itemDescSectionInModal",children:Object(l.jsx)(s.a,{children:Object(l.jsx)("h6",{children:"Detailed description"})})})]})]})})}},307:function(e,t,n){"use strict";n.r(t),n.d(t,"ItemsPage",(function(){return p}));var c=n(7),i=n(1),s=n(322),r=n(64),a=n(156),o=n(62),l=n(25),d=n(96),j=n(26),u=n(2),p=function(){var e=Object(j.g)().id,t=Object(i.useState)(null),n=Object(c.a)(t,2),p=n[0],x=n[1],b=Object(i.useState)([]),f=Object(c.a)(b,2),h=f[0],O=f[1];Object(i.useEffect)((function(){var t=r.exploreInfo.find((function(t){return t.id===parseInt(e)}));x(t)}),[e]),Object(i.useEffect)((function(){g()}),[p]);var g=function(){if(p){var e=r.exploreInfo.filter((function(e){return e.creatorId===p.creatorId&&e.id!==p.id}));O(e)}},v=function(e){var t=r.exploreInfo.find((function(t){return t.id===parseInt(e)}));x(t)};return Object(u.jsx)("div",{style:{backgroundColor:"#334756"},children:p&&Object(u.jsxs)(a.a,{style:{paddingTop:"25px",paddingBottom:"30px"},children:[Object(u.jsxs)(o.a,{children:[Object(u.jsx)(l.a,{xl:4,lg:6,md:6,children:Object(u.jsx)(d.a,{src:Object(r.itemImages)(p.src).default,className:"expImg",fluid:!0})},p.id),Object(u.jsxs)(l.a,{xl:8,lg:6,md:6,children:[Object(u.jsxs)(o.a,{className:"itemDescSection",children:[Object(u.jsx)(l.a,{children:Object(u.jsx)("h1",{children:p.title})}),Object(u.jsx)(l.a,{children:Object(u.jsx)("h1",{children:p.price})})]}),Object(u.jsx)(o.a,{className:"itemDescSection",children:Object(u.jsx)(l.a,{children:Object(u.jsx)(s.RatingView,{ratingValue:p.rating,size:30})})}),Object(u.jsx)(o.a,{className:"itemDescSection",children:Object(u.jsx)(l.a,{children:Object(u.jsx)("h3",{children:p.name})})}),Object(u.jsx)(o.a,{className:"itemDescSection",children:Object(u.jsx)(l.a,{children:Object(u.jsx)("h6",{children:"Detailed description.."})})})]})]}),Object(u.jsx)(o.a,{xxl:3,xl:3,lg:3,md:2,sm:1,xs:1,children:h.map((function(e){return m(e,v)}))})]})})},m=function(e,t){return Object(u.jsx)(l.a,{children:Object(u.jsxs)("div",{className:"d-flex expCSS flex-no-wrap",onClick:function(){return t(e.id)},children:[Object(u.jsx)(d.a,{src:Object(r.itemImages)(e.src).default,className:"itemImg",fluid:!0}),Object(u.jsx)("div",{className:"expInfo",children:Object(u.jsx)(o.a,{children:Object(u.jsxs)(l.a,{children:[Object(u.jsxs)("h6",{children:["ID: ",e.id]}),Object(u.jsxs)("h6",{children:["Name: ",e.name]}),Object(u.jsxs)("h6",{children:["Title: ",e.title]}),Object(u.jsxs)("h6",{children:["Price: ",e.price]}),Object(u.jsxs)("h6",{children:["Bid: ",e.bid]})]})})})]})},e.id)}},308:function(e,t,n){"use strict";n.r(t),n.d(t,"PersonalProfile",(function(){return O}));var c=n(136),i=n.n(c),s=n(653),r=n(7),a=n(1),o=n(156),l=n(62),d=n(25),j=n(96),u=n(85),p=n(332),m=n(657),x=n(335),b=n(100),f=n(153),h=n(2),O=function(){var e=Object(b.b)(),t=e.setUserData,n=e.user,c=e.isAuthenticated,m=Object(a.useState)(""),x=Object(r.a)(m,2),O=x[0],v=x[1],y=Object(a.useState)(""),S=Object(r.a)(y,2),I=S[0],C=S[1],T=Object(a.useState)(!0),P=Object(r.a)(T,2),N=P[0],w=P[1],k=Object(b.d)().saveFile,B=Object(a.useState)(f.default),L=Object(r.a)(B,2),E=L[0],D=L[1],F=Object(a.useState)(),H=Object(r.a)(F,2),A=H[0],J=H[1],M=Object(a.useState)(!0),K=Object(r.a)(M,2),R=K[0],G=K[1];Object(a.useEffect)((function(){var e,t;n&&J(null===(e=n.attributes)||void 0===e||null===(t=e.avatar)||void 0===t?void 0:t._url)}),[n]);var U=function(){var e=Object(s.a)(i.a.mark((function e(t){var c,s,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c=E,s=E.name,e.next=5,k(s,c);case 5:return r=e.sent,n.set("avatar",r),e.next=9,n.save();case 9:E.name?J(n.attributes.avatar._url):alert("No File Chosen.");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)(o.a,{children:[Object(h.jsxs)(l.a,{className:"d-flex ",lg:2,md:2,sm:1,xs:1,xxs:1,style:{marginTop:"15px",marginBottom:"20px"},children:[Object(h.jsx)(d.a,{className:"personalProfPicCol",children:Object(h.jsx)(j.a,{src:A||f.default,className:"personalProfPic",roundedCircle:!0})}),Object(h.jsxs)(d.a,{className:"nameEmailCol",children:[Object(h.jsxs)(u.a,{children:[Object(h.jsxs)(u.a.Group,{className:"mb-3 d-flex align-items-end",controlId:"nameEntryArea",value:O,children:[Object(h.jsx)(u.a.Label,{style:{color:"white",marginRight:"auto"},children:"Name:"}),Object(h.jsx)(u.a.Control,{type:"name",placeholder:c?n.get("username"):null,value:O,onChange:function(e){v(e.target.value),e.target.value?w(!1):w(!0)},style:{marginLeft:"7px",width:"15rem"}})]}),Object(h.jsxs)(u.a.Group,{className:"mb-3 d-flex align-items-end",controlId:"emailEntryArea",value:I,children:[Object(h.jsx)(u.a.Label,{style:{color:"white",marginRight:"auto"},children:"Email:"}),Object(h.jsx)(u.a.Control,{type:"email",placeholder:c?n.get("email"):null,value:I,onChange:function(e){C(e.target.value),e.target.value?w(!1):w(!0)},style:{marginLeft:"7px",width:"15rem"}})]})]}),Object(h.jsxs)("div",{className:"d-flex",style:{width:"292.74px"},children:[Object(h.jsx)(u.a,{onSubmit:U,children:Object(h.jsx)(u.a.Group,{controlId:"uploadPicture",children:Object(h.jsx)(u.a.Control,{type:"file",accept:"image/*",size:"sm",onChange:function(e){e.target.files[0]?(D(e.target.files[0]),G(!1)):G(!0)}})})}),Object(h.jsx)(p.a,{type:"button",onClick:U,id:"uploadButton",size:"sm",disabled:R,children:"Upload"})]}),Object(h.jsx)(p.a,{size:"sm",id:"saveInfoButton",onClick:function(e){e.preventDefault(),O&&""===I?(t({username:O}),alert(O+" was saved sucessfully.")):I&&""===O?(t({email:I}),alert(I+" was saved sucessfully.")):(t({username:O,email:I}),alert("Your info was saved sucessfully."))},disabled:N,children:"Save Info"})]})]}),Object(h.jsx)(g,{})]})},g=function(){var e=Object(a.useState)("Creations"),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(h.jsxs)(m.a,{className:" justify-content-center",activeKey:n,onSelect:function(e){c(e)},children:[Object(h.jsx)(x.a,{eventKey:"Creations",title:"Creations",children:Object(h.jsx)("p",{style:{color:"white"},children:"This is the Creations tab."})}),Object(h.jsx)(x.a,{eventKey:"Collections",title:"Collections",children:Object(h.jsx)("p",{style:{color:"white"},children:"This is the Collections tab."})})]})}},309:function(e,t,n){"use strict";n.r(t),n.d(t,"Player",(function(){return a}));var c=n(7),i=n(1),s=n(210),r=n(2),a=function(e){var t=Object(i.useState)(!1),n=Object(c.a)(t,2),a=n[0],o=n[1],l=Object(i.useRef)();return Object(r.jsxs)("div",{children:[Object(r.jsx)("audio",{src:e.sound,ref:l}),Object(r.jsx)("div",{onClick:function(e){e.stopPropagation();var t=l.current;a?(o(!1),t.pause()):(o(!0),t.play())},children:a?Object(r.jsx)(s.b,{className:"pauseButton"}):Object(r.jsx)(s.a,{className:"playerButton"})})]})}},310:function(e,t,n){"use strict";n.r(t);var c=n(7),i=n(1),s=n(657),r=n(335),a=n(156),o=n(62),l=n(25),d=n(96),j=n(100),u=n(26),p=n(153),m=n(2);t.default=function(){var e,t=Object(j.c)("theUsers").data,n=Object(u.g)().id,x=t&&t.find((function(e){return e.objectId===n})),b=null!==(e=null===x||void 0===x?void 0:x.username)&&void 0!==e?e:"Username";var f=null===x||void 0===x?void 0:x.avatar;var h,O,g=function(){var e=Object(i.useState)("Creations"),t=Object(c.a)(e,2),n=t[0],a=t[1];return Object(m.jsxs)(s.a,{className:" justify-content-center",activeKey:n,onSelect:function(e){a(e)},children:[Object(m.jsx)(r.a,{eventKey:"Creations",title:"Creations",children:Object(m.jsx)("p",{children:"This is the Creations tab."})}),Object(m.jsx)(r.a,{eventKey:"Collections",title:"Collections",children:Object(m.jsx)("p",{children:"This is the Collections tab."})})]})};return Object(m.jsx)("div",{children:Object(m.jsxs)(a.a,{style:{paddingTop:"25px"},children:[Object(m.jsxs)(o.a,{lg:2,md:2,sm:1,xs:1,xxs:1,style:{marginBottom:"25px"},children:[Object(m.jsx)(l.a,{className:"profPicCol",children:Object(m.jsx)(d.a,{src:(O=f,O?O._url:p.default),alt:"profilePicture",roundedCircle:!0,fluid:!0,id:"profPic"})}),Object(m.jsx)(l.a,{className:"userInfoCol",children:Object(m.jsx)("p",{children:(h=b,h&&h.length>25?h.substring(0,25)+"...":h)})})]}),Object(m.jsx)(g,{})]})})}},311:function(e,t,n){"use strict";n.r(t),n.d(t,"ScrollTop",(function(){return a}));var c=n(7),i=n(1),s=n(654),r=n(2),a=function(){var e=Object(i.useState)(!1),t=Object(c.a)(e,2),n=t[0],a=t[1],o=function(){window.pageYOffset>20?a(!0):a(!1)};Object(i.useEffect)((function(){window.addEventListener("scroll",o)}),[]);return Object(r.jsx)("div",{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:n&&Object(r.jsx)(s.a,{className:"jumptToTopArrow"})})}},312:function(e,t,n){"use strict";n.r(t);t.default=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,1604)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),s(e),r(e)}))}},413:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/mainBG2.6d90de05.png"},417:function(e,t,n){},605:function(e,t,n){"use strict";n.r(t);var c=n(415),i=n(200),s=n(2);test("renders learn react link",(function(){Object(c.a)(Object(s.jsx)(i.default,{}));var e=c.b.getByText(/learn react/i);expect(e).toBeInTheDocument()}))},618:function(e,t,n){"use strict";n.r(t),n.d(t,"profImages",(function(){return c})),n.d(t,"itemSounds",(function(){return i})),n.d(t,"peopleInfo",(function(){return s}));var c=n(287),i=n(287),s=[{id:1,name:"John Doe1",sold:"1000",src:"./profPic.png",musicSrc:"./sexOnFire.mp3",itemCount:4},{id:2,name:"John Doe2",sold:"1500",src:"./profPic2.png",musicSrc:"./sexOnFire.mp3",itemCount:12},{id:3,name:"John Doe3",sold:"1030",src:"./profPic3.png",musicSrc:"./sexOnFire.mp3",itemCount:8},{id:4,name:"John Doe4",sold:"1200",src:"./profPic4.png",musicSrc:"./sexOnFire.mp3",itemCount:2},{id:5,name:"John Doe5",sold:"1008",src:"./profPic.png",musicSrc:"./sexOnFire.mp3",itemCount:10},{id:6,name:"John Doe6",sold:"1045",src:"./profPic3.png",musicSrc:"./sexOnFire.mp3",itemCount:11},{id:7,name:"John Doe7",sold:"1830",src:"./profPic2.png",musicSrc:"./sexOnFire.mp3",itemCount:7},{id:8,name:"John Doe8",sold:"3600",src:"./profPic.png",musicSrc:"./sexOnFire.mp3",itemCount:3},{id:9,name:"John Doe9",sold:"85500",src:"./profPic4.png",musicSrc:"./sexOnFire.mp3",itemCount:4},{id:10,name:"John Doe10",sold:"73000",src:"./profPic.png",musicSrc:"./sexOnFire.mp3",itemCount:14},{id:11,name:"John Doe11",sold:"7000",src:"./profPic3.png",musicSrc:"./sexOnFire.mp3",itemCount:6},{id:12,name:"John Doe12",sold:"8500",src:"./profPic4.png",musicSrc:"./sexOnFire.mp3",itemCount:2}]},619:function(e,t,n){"use strict";n.r(t),n.d(t,"Player2",(function(){return a}));var c=n(7),i=n(1),s=n(210),r=n(2),a=function(e){var t=Object(i.useState)(!1),n=Object(c.a)(t,2),a=n[0],o=n[1],l=Object(i.useRef)();return Object(r.jsxs)("div",{children:[Object(r.jsx)("audio",{src:e.sound,ref:l}),Object(r.jsx)("div",{onClick:function(e){e.stopPropagation();var t=l.current;a?(o(!1),t.pause()):(o(!0),t.play())},children:a?Object(r.jsx)(s.b,{className:"pauseButton2"}):Object(r.jsx)(s.a,{className:"playerButton2"})})]})}},620:function(e,t,n){"use strict";n.r(t);n(1473)},64:function(e,t,n){"use strict";n.r(t),n.d(t,"itemImages",(function(){return c})),n.d(t,"itemSounds",(function(){return i})),n.d(t,"exploreInfo",(function(){return s}));var c=n(287),i=n(287),s=[{id:1,name:"John Doe",title:"Item Title 1",sold:"1000",price:"0.028 ETH",bid:"0.12 ETH",src:"./profPic.png",profPic:"./profPic.png",musicSrc:"./sexOnFire.mp3",itemCount:4,creatorId:1,rating:5},{id:2,name:"John Doe",title:"Item Title 2",sold:"1500",price:"0.028 ETH",bid:"0.12 ETH",src:"./profPic.png",profPic:"./profPic2.png",musicSrc:"./sexOnFire.mp3",itemCount:12,creatorId:4,rating:4},{id:3,name:"John Doe",title:"Item Title 3",sold:"1030",price:"0.028 ETH",bid:"0.12 ETH",src:"./profPic.png",profPic:"./profPic3.png",musicSrc:"./sexOnFire.mp3",itemCount:8,creatorId:3,rating:2},{id:4,name:"John Doe",title:"Item Title 4",sold:"1200",price:"0.028 ETH",bid:"0.12 ETH",src:"./profPic.png",profPic:"./profPic4.png",musicSrc:"./sexOnFire.mp3",itemCount:2,creatorId:1,rating:3},{id:5,name:"John Doe",title:"Item Title 5",sold:"1008",price:"0.028 ETH",bid:"0.12 ETH",src:"./profPic.png",profPic:"./profPic.png",musicSrc:"./sexOnFire.mp3",itemCount:10,creatorId:1,rating:4},{id:6,name:"John Doe",title:"Item Title 6",sold:"1045",price:"0.028 ETH",bid:"0.12 ETH",src:"./profPic.png",profPic:"./profPic2.png",musicSrc:"./sexOnFire.mp3",itemCount:11,creatorId:2,rating:4},{id:7,name:"John Doe",title:"Item Title 7",price:"0.030 ETH",bid:"0.12 ETH",src:"./profPic.png",musicSrc:"./sexOnFire.mp3",creatorId:1,rating:3},{id:8,name:"John Doe",title:"Item Title 8",price:"0.028 ETH",bid:"0.12 ETH",src:"./profPic.png",musicSrc:"./sexOnFire.mp3",creatorId:4,rating:1},{id:9,name:"John Doe",title:"Item Title 9",price:"0.028 ETH",bid:"0.12 ETH",src:"./profPic.png",musicSrc:"./sexOnFire.mp3",creatorId:2,rating:4},{id:10,name:"John Doe",title:"Item Title 10",price:"0.028 ETH",bid:"0.12 ETH",src:"./profPic.png",musicSrc:"./sexOnFire.mp3",creatorId:2,rating:2}]},917:function(e,t){},919:function(e,t){},923:function(e,t){},924:function(e,t){},950:function(e,t){},952:function(e,t){},962:function(e,t){},964:function(e,t){},974:function(e,t){},976:function(e,t){},992:function(e,t){}},[[252,1,2]]]);
//# sourceMappingURL=main.bbf16f27.chunk.js.map