(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{169:function(e,t,n){e.exports=n(237)},182:function(e,t,n){e.exports=n.p+"static/media/rocket.263daa57.png"},183:function(e,t,n){e.exports=n.p+"static/media/to.b027ef16.png"},184:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAbCAYAAAAH+20UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALySURBVHgB7VdRbhMxEH12UuCzN2Bv0FQVSHw1PQHtX1W1xZwA9QRNTtBwAlxAiL+2J8jyhQRKE07Q5QSEz4Zkzcxulmy2a8dJiapKfVI2a3s88+wZj2cFFsCB6ioB865sjPr1qd54jSVB4p7hgfCy8UB42aiWde6r73Vay7aAWEt7TJ8eFx/0hsZ/wFj/pgBqlFdWJyOpnT8YhJ/1i6hsrsg3dlU3WKF0RZ11i61ogOutFTypL5LWmKhA5dihf0Kd9BDxZpG4zJN9BNOeoYxkHp9hAeyrzrFEpe1DlkHeVWSrvae+1VBGmMkyIQ9dNdrFN5gDKVnRwPwIqqhOkU4IH6iOgh/ZDDVfQTa2INkMq0T6TKluEuvjHRavZkzqUVS9pf8LzIkKqieO4T7F6hEtaGus34ZghFjxS5WZxzB1myS5/5wO0U7W5h2jFXfhAT4XwqFbYril9fPeuBkeqg5btISbeEmPlhxi6HSvwOAo3/6UGjiFB1YQ1x3DX3JkE0jIBqw8UOfNldN58AZ6uiQfGogQHhDOWDe9Yo/W6xQi+Gmfg0BSXnQR/l3WOUpi2gf2zSBikWXoyjaH4rh2l1dzHwtgFuGn5ZOGq7glhCWNUr9VdwUykgYj10qDLP8Vpip4wJTE6WRMbBb7xrZcSaAvq6iEDgGOm+N8m1MVuWUTHjCIrYT5QO6qr0HB1jbsiOhQ9pLi50BdRsLi/tSw0WT8VEDStZzkycBOZLr4OVSXv2B3c4+KqR0ucLgwolrjzCab6ZVZAw5wIZIWLuIE813hvNimY7hGBc4VLcqwfjjil+6DRI9MH7IFe5opg/cJpxq6RSksxK1gmtl9kBDmhB1j5Ptpntz/mAMVCNYdYSGY5nu90cha/9LaR/0sjBHvzFCckKV4dsncAG1IRAXOOjyv9LytPFmGKEpRagmoGGIhTi9r2WT6XUhcN9g1e6pLBZBplVkhI+ccBrDAoh85Oz9IS8hhyp4vzhe4Y/ACsnf2xCz5v2WXGEurRCRTAAAAAElFTkSuQmCC"},235:function(e,t,n){e.exports=n.p+"static/media/Clipboard.6a6b96a8.png"},237:function(e,t,n){"use strict";n.r(t);var c=n(256),r=n(63),o=n(3),a=n(27),i=n(2),s=i.default.create({header:{justifyContent:"center",alignItems:"center",flexDirection:"row",height:173,width:"100%"}}),l=n(1),u=function(){return Object(l.jsxs)(o.default,{style:s.header,children:[Object(l.jsx)(a.default,{source:n(182)}),Object(l.jsx)(a.default,{source:n(183)}),Object(l.jsx)(a.default,{source:n(184)})]})},d=n(32),f=n.n(d),j=n(24),h=n.n(j),x=n(0),g=n(82),b=n(20),A=n(15),p=n(88),m=n(85),O=n(99),y=i.default.create({container:{width:"100%",backgroundColor:"#1F1E25",borderRadius:5,flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginTop:20,padding:12},checked:{flex:1,color:"#F2F2F2",marginLeft:16,fontSize:14,fontWeight:"400"},unchecked:{flex:1,color:"#808080",marginLeft:16,fontSize:14,fontWeight:"400",textDecorationLine:"line-through"},icon:{flex:1,color:"#FF0",marginRight:10,fontSize:14}}),k=0,F=function(e){var t=e.name,n=e.onRemove,c=e.counterDone,r=Object(x.useState)(!1),a=h()(r,2),i=a[0],s=a[1];return Object(l.jsxs)(o.default,{style:y.container,children:[Object(l.jsx)(O.CheckBox,{checkedIcon:"check-circle",uncheckedIcon:"circle-o",checked:i,uncheckedColor:"#4EA8DE",checkedColor:"#5E60CE",onPress:function(){return s(!i),console.log(i),!0===i?k--:k++,void c(k)}}),Object(l.jsx)(A.default,{style:!0===i?y.unchecked:y.checked,children:t}),Object(l.jsx)(b.default,{onPress:function(){return n(t)},children:Object(l.jsx)(O.Icon,{style:y.icon,name:"trash",type:"font-awesome",color:"#808080"})})]})},w=i.default.create({name:{display:"flex",color:"#808080",alignSelf:"center",alignContent:"center",marginTop:16,marginLeft:16,fontSize:14,lineHeight:20},image:{justifyContent:"center",alignItems:"center",marginTop:48}}),S=function(e){var t=e.task,c=e.onRemove,r=e.counterDone;function i(e){r(e)}function s(e){console.log("Teste"),c(e)}return console.log("task"+t),Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(m.default,{data:t,keyExtractor:function(e){return e},renderItem:function(e){var t=e.item;return Object(l.jsx)(F,{name:t,onRemove:s,counterDone:i},t)},showsVerticalScrollIndicator:!1,ListEmptyComponent:function(){return Object(l.jsxs)(o.default,{style:w.image,children:[Object(l.jsx)(a.default,{style:w.image,source:n(235)}),Object(l.jsxs)(A.default,{style:w.name,children:["Voc\xea ainda n\xe3o tem tarefas cadastradas.","\n","Crie tarefas e organize seus itens a fazer"]})]})}})})},C=i.default.create({forms:{width:"100%",flexDirection:"row",marginTop:-40},input:{flex:1,height:56,backgroundColor:"#1F1E25",borderRadius:5,color:"#FFF",fontSize:16,padding:16,marginRight:4},button:{width:52,height:52,borderRadius:6,color:"#FFF",backgroundColor:"#1E6F9F",alignItems:"center",justifyContent:"center"},buttonText:{color:"#FFF",fontSize:24},createdText:{color:"#4EA8DE",fontSize:14},doneText:{color:"#8284FA",fontSize:14},counterText:{color:"#D9D9D9",fontSize:14,wordSpacing:8},status:{width:"100%",borderRadius:6,flexDirection:"row",justifyContent:"space-between",marginTop:34,alignItems:"center"},spaceLeft:{marginLeft:8},spaceRight:{marginRight:8},space:{flexDirection:"row"}}),B=function(){var e=Object(x.useState)(0),t=h()(e,2),n=t[0],c=t[1],r=Object(x.useState)(""),a=h()(r,2),i=a[0],s=a[1],u=Object(x.useState)([]),d=h()(u,2),j=d[0],m=d[1],O=Object(x.useState)(0),y=h()(O,2),k=y[0],F=y[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(o.default,{style:C.forms,children:[Object(l.jsx)(g.default,{style:C.input,placeholder:"Adicione uma nova tarefa",placeholderTextColor:"#6B6B6B",onChangeText:function(e){return s(e)},value:i}),Object(l.jsx)(b.default,{style:C.button,onPress:function(){if(j.includes(i))return p.default.alert("J\xe1 existe uma task "+i);m((function(e){return[].concat(f()(e),[i])})),c(j.length+1),s("")},children:Object(l.jsx)(A.default,{style:C.buttonText,children:"+"})})]}),Object(l.jsxs)(o.default,{style:C.status,children:[Object(l.jsxs)(o.default,{style:C.space,children:[Object(l.jsx)(o.default,{style:C.spaceRight,children:Object(l.jsx)(A.default,{style:C.createdText,children:"Criados"})}),Object(l.jsx)(A.default,{style:C.counterText,children:n})]}),Object(l.jsxs)(o.default,{style:C.space,children:[Object(l.jsx)(A.default,{style:C.counterText,children:k}),Object(l.jsx)(o.default,{style:C.spaceLeft,children:Object(l.jsx)(A.default,{style:C.doneText,children:"Concluidos"})})]})]}),Object(l.jsx)(S,{task:j,onRemove:function(e){p.default.alert("remover","Deseja remover "+e+"?",[{text:"sim",onPress:function(){return function(e){p.default.alert("Deletando "+e+"!"),m((function(t){return t.filter((function(t){return t!==e}))})),c(j.length-1)}(e)}},{text:"n\xe3o",style:"cancel"}])},counterDone:function(e){F(e)}})]})},T=i.default.create({container:{flex:1,backgroundColor:"#131016",padding:24}}),R=function(){return Object(l.jsxs)(o.default,{style:T.container,children:[Object(l.jsx)(u,{}),Object(l.jsx)(B,{})]})};Object(c.default)((function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(r.default,{barStyle:"light-content",backgroundColor:"transparent",translucent:!0}),Object(l.jsx)(R,{})]})}))}},[[169,1,2]]]);
//# sourceMappingURL=app.bd795c17.chunk.js.map