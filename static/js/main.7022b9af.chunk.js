(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{15:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(7),o=n.n(r),i=(n(23),n(24),n(14)),s=n(36),b=(n(25),n(3)),l=function(e){return e.phonebook.contacts},j=function(e){return e.phonebook.filter},u=n(4),d=Object(u.b)("phonebook/addContact"),O=Object(u.b)("phonebook/deleteContact"),m=Object(u.b)("phonebook/filterContact"),h=n(1);var f=function(){var e=Object(b.b)(),t=Object(b.c)(l),n=Object(c.useState)(""),a=Object(i.a)(n,2),r=a[0],o=a[1],j=Object(c.useState)(""),u=Object(i.a)(j,2),O=u[0],m=u[1],f=function(e){var t=e.target,n=t.name,c=t.value;switch(n){case"name":o(c.trim());break;case"number":m(c.trim());break;default:return}};return Object(h.jsxs)("form",{className:"Form",onSubmit:function(n){n.preventDefault();var c={id:Object(s.a)(),name:r,number:O};if(function(e){var n=e.name.toLowerCase();return t.map((function(e){return e.name.toLowerCase()})).find((function(e){return e===n}))}(c))return alert("This contact is already in contact list!");e(d(c)),o(""),m("")},children:[Object(h.jsxs)("label",{className:"Form__label",children:["Name",Object(h.jsx)("input",{onChange:f,type:"text",name:"name",value:r,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(h.jsxs)("label",{className:"Form__label",children:["Number",Object(h.jsx)("input",{onChange:f,type:"tel",name:"number",value:O,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(h.jsx)("button",{type:"submit",className:"Form__add-btn",children:"Add contact"})]})},p=(n(15),function(e){var t=e.name,n=e.number,c=e.id,a=Object(b.b)();return Object(h.jsxs)("li",{className:"Contact__item",children:[Object(h.jsxs)("p",{className:"Contact__info",children:[t,": "]}),Object(h.jsx)("p",{className:"Contact__info",children:n}),Object(h.jsx)("button",{type:"button",id:c,onClick:function(){return a(O(c))},className:"Contact__delete-btn",children:"Delete"})]})}),x=function(){var e=function(e,t){var n=t.toLowerCase().trim();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))}(Object(b.c)(l),Object(b.c)(j));return Object(h.jsx)("ul",{className:"Contact__list",children:e.map((function(e){var t=e.name,n=e.number,c=e.id;return Object(h.jsx)(p,{name:t,number:n,id:c},c)}))})},v=function(){var e=Object(b.b)(),t=Object(b.c)(j);return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("label",{className:"Filter",children:[Object(h.jsx)("p",{children:"Find contacts by name:"}),Object(h.jsx)("input",{name:"filter",type:"text",onChange:function(t){e(m(t.target.value))},value:t})]})})};var C,k=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:"Phonebook"}),Object(h.jsx)(f,{}),Object(h.jsx)("h2",{children:"Contacts"}),Object(h.jsx)(v,{}),Object(h.jsx)(x,{})]})},_=n(16),g=n(9),y=n(17),N=n.n(y),w=n(5),F=n(18),A=n.n(F),z=n(10),L=n(2),S=Object(u.c)([],(C={},Object(z.a)(C,d,(function(e,t){return[].concat(Object(g.a)(e),[t.payload])})),Object(z.a)(C,O,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),C)),J=Object(u.c)("",Object(z.a)({},m,(function(e,t){return t.payload}))),Z=Object(L.b)({contacts:S,filter:J}),q={key:"phonebook",storage:A.a,blacklist:"filter"},B=Object(w.g)(q,Z),D=[].concat(Object(g.a)(Object(u.d)({serializableCheck:{ignoredActions:[w.a,w.f,w.b,w.c,w.d,w.e]}})),[N.a]),M=Object(u.a)({reducer:{phonebook:B},middleware:D,devTools:!0}),T={store:M,persistor:Object(w.h)(M)};o.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(b.a,{store:T.store,children:Object(h.jsx)(_.a,{loading:null,persistor:T.persistor,children:Object(h.jsx)(k,{})})})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.7022b9af.chunk.js.map