(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__2US69",BreadTop:"BurgerIngredient_BreadTop__3Y4-R",Seeds1:"BurgerIngredient_Seeds1__J6vUJ",Seeds2:"BurgerIngredient_Seeds2__2Ylex",Meat:"BurgerIngredient_Meat__3flwI",Cheese:"BurgerIngredient_Cheese__3rOTJ",Salad:"BurgerIngredient_Salad__KLnhy",Bacon:"BurgerIngredient_Bacon__1KK6n"}},,,,,,function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__3kXLK",Open:"SideDrawer_Open__1tCv1",Close:"SideDrawer_Close__9j7x-"}},function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__O8649",Label:"BuildControl_Label__TQkTk",Less:"BuildControl_Less__3Ttg8",More:"BuildControl_More__1MY7B"}},function(e,t,n){e.exports={Input:"Input_Input__3r5Ke",Label:"Input_Label__1qyHr",InputElement:"Input_InputElement__2m88K",Invalid:"Input_Invalid__16Mis"}},,,,,,,function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__ApScI",DesktopOnly:"Toolbar_DesktopOnly__LuPaL"}},function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__2SpXc",active:"NavigationItem_active__2v2td"}},,,function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__1YmbS",OrderButton:"BuildControls_OrderButton___M-Du",enable:"BuildControls_enable__9xLsD"}},function(e,t,n){e.exports={Button:"Button_Button__3gFiX",Success:"Button_Success__2Rka1",Danger:"Button_Danger__2ogZq"}},,,,,,,,,,,,,function(e,t,n){e.exports={Content:"Layout_Content__2WLOk"}},function(e,t,n){e.exports=n.p+"static/media/original.b8503d26.png"},function(e,t,n){e.exports={Logo:"Logo_Logo__1N0xH"}},function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__1fnFX"}},function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__m405X"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__3j6VK"}},function(e,t,n){e.exports={Burger:"Burger_Burger__10T8F"}},function(e,t,n){e.exports={Modal:"Modal_Modal__1-5dN"}},function(e,t,n){e.exports={loader:"Spinner_loader__fTuX5",load1:"Spinner_load1__1BXDX"}},function(e,t,n){e.exports={Order:"Order_Order__3kYZJ"}},function(e,t,n){e.exports={CheckoutSummary:"CheckoutSummary_CheckoutSummary__3PsXi"}},function(e,t,n){e.exports={ContactData:"ContactData_ContactData__20AK_"}},function(e,t,n){e.exports={Auth:"Auth_Auth__1Zul_"}},function(e,t,n){e.exports=n(88)},,,,,,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(23),i=n.n(o),c=n(15),l=n(7),u=n(17),s=n(46),d=(n(69),n(3)),p=n(4),m=n(6),h=n(5),g=n(2),f=function(e){return e.children},v=n(47),E=n.n(v),b=n(29),_=n.n(b),y=n(48),C=n.n(y),S=n(49),k=n.n(S),I=function(e){return a.a.createElement("div",{className:k.a.Logo,style:{height:e.height}},a.a.createElement("img",{src:C.a,alt:"Mera Burger"}))},T=n(50),O=n.n(T),A=n(30),j=n.n(A),N=function(e){return a.a.createElement("li",{className:j.a.NavigationItem},a.a.createElement(c.b,{to:e.link,exact:e.exact,activeClassName:j.a.active},e.children))},B=function(e){return a.a.createElement("ul",{className:O.a.NavigationItems},a.a.createElement(N,{link:"/",exact:!0},"Burger Builder"),e.isAuthenticated?a.a.createElement(N,{link:"/orders"},"My Orders"):null,e.isAuthenticated?a.a.createElement(N,{link:"/logout"},"LogOut"):a.a.createElement(N,{link:"/auth"},"AUthenticate"))},D=n(51),R=n.n(D),w=function(e){return a.a.createElement("div",{className:R.a.DrawerToggle,onClick:e.clicked},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null))},x=function(e){return a.a.createElement("header",{className:_.a.Toolbar},a.a.createElement(w,{clicked:e.drawerToggleClicked}),a.a.createElement(I,{height:"80%"}),a.a.createElement("nav",{className:_.a.DesktopOnly},a.a.createElement(B,{isAuthenticated:e.isAuth})))},H=n(20),L=n.n(H),U=n(52),P=n.n(U),F=function(e){return e.show?a.a.createElement("div",{className:P.a.Backdrop,onClick:e.clicked}):null},M=function(e){var t=[L.a.SideDrawer,L.a.Close];return e.open&&(t=[L.a.SideDrawer,L.a.Open]),a.a.createElement(f,null,a.a.createElement(F,{show:e.open,clicked:e.closed}),a.a.createElement("div",{className:t.join(" "),onClick:e.closed},a.a.createElement(I,{height:"11%"}),a.a.createElement("nav",null,a.a.createElement(B,{isAuthenticated:e.isAuth}))))},q=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={showSideDrawer:!1},e.sideDrawerClosedHandler=function(){e.setState({showSideDrawer:!1})},e.sideDrawerToggleHandler=function(){e.setState((function(t){return{showSideDrawer:!e.state.showSideDrawer}}))},e}return Object(p.a)(n,[{key:"render",value:function(){return a.a.createElement(f,null,a.a.createElement(x,{isAuth:this.props.isAuthenticated,drawerToggleClicked:this.sideDrawerToggleHandler}),a.a.createElement(M,{isAuth:this.props.isAuthenticated,open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),a.a.createElement("main",{className:E.a.Content},this.props.children))}}]),n}(r.Component),Y=Object(l.b)((function(e){return{isAuthenticated:null!==e.auth.token}}))(q),G=n(16),z=n(26),V=n(53),X=n.n(V),K=n(14),W=n.n(K),J=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=a.a.createElement("div",{className:W.a.BreadBottom});break;case"bread-top":e=a.a.createElement("div",{className:W.a.BreadTop},a.a.createElement("div",{className:W.a.Seeds1}),a.a.createElement("div",{className:W.a.Seeds2}));break;case"meat":e=a.a.createElement("div",{className:W.a.Meat});break;case"cheese":e=a.a.createElement("div",{className:W.a.Cheese});break;case"bacon":e=a.a.createElement("div",{className:W.a.Bacon});break;case"salad":e=a.a.createElement("div",{className:W.a.Salad});break;default:e=null}return e}}]),n}(r.Component),Z=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(z.a)(Array(e.ingredients[t])).map((function(e,n){return a.a.createElement(J,{key:t+n,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=a.a.createElement("p",null,"Please start adding ingredients!")),a.a.createElement("div",{className:X.a.Burger},a.a.createElement(J,{type:"bread-top"}),t,a.a.createElement(J,{type:"bread-bottom"}))},$=n(33),Q=n.n($),ee=n(21),te=n.n(ee),ne=function(e){return a.a.createElement("div",{className:te.a.BuildControl},a.a.createElement("div",{className:te.a.Label},e.label),a.a.createElement("button",{className:te.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),a.a.createElement("button",{className:te.a.More,onClick:e.added},"More"))},re=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],ae=function(e){return a.a.createElement("div",{className:Q.a.BuildControls},a.a.createElement("p",null,"Current Price: ",a.a.createElement("strong",null,e.price.toFixed(2))),re.map((function(t){return a.a.createElement(ne,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})})),a.a.createElement("button",{className:Q.a.OrderButton,disabled:!e.purchasable,onClick:e.ordered},e.isAuth?"ORDER NOW!!!":"sign up to order"))},oe=n(54),ie=n.n(oe),ce=function(e){return a.a.createElement(f,null,a.a.createElement(F,{show:e.show,clicked:e.modalClosed}),a.a.createElement("div",{className:ie.a.Modal,style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"}},e.children))},le=n(34),ue=n.n(le),se=function(e){return a.a.createElement("button",{disabled:e.disabled,className:[ue.a.Button,ue.a[e.btnType]].join(" "),onClick:e.clicked},e.children)},de=function(e){var t=Object.keys(e.ingredients).map((function(t){return a.a.createElement("li",{key:t},a.a.createElement("span",{style:{textTransform:"capitalize"}},t),": ",e.ingredients[t])}));return a.a.createElement(f,null,a.a.createElement("h3",null,"Your Order->"),a.a.createElement("p",null,"Ye sab hain isme -- >>"),a.a.createElement("ul",null,t),a.a.createElement("p",null,"Total Price = ",e.price.toFixed(2)),a.a.createElement("p",null,"Continue to checkout???"),a.a.createElement(se,{btnType:"Danger",clicked:e.purchaseCancelled},"Cancel"),a.a.createElement(se,{btnType:"Success",clicked:e.purchaseContnued},"Contine!!"))},pe=n(25),me=n.n(pe),he=me.a.create({baseURL:"https://react-my-burger-55460.firebaseio.com/"}),ge=n(55),fe=n.n(ge),ve=function(){return a.a.createElement("div",{className:fe.a.loader},"Loading...")},Ee=function(e,t){return function(n){Object(m.a)(o,n);var r=Object(h.a)(o);function o(){var e;Object(d.a)(this,o);for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return(e=r.call.apply(r,[this].concat(n))).state={error:null},e.errorConfirmHandler=function(){e.setState({error:null})},e}return Object(p.a)(o,[{key:"componentDidMount",value:function(){var e=this;t.interceptors.request.use((function(t){return e.setState({error:null}),t})),t.interceptors.response.use((function(e){return e}),(function(t){e.setState({error:t})}))}},{key:"componentWillMount",value:function(){var e=this;this.reqInterceptor=t.interceptors.request.use((function(t){return e.setState({error:null}),t})),this.resInterceptor=t.interceptors.response.use((function(e){return e}),(function(t){e.setState({error:t})}))}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return a.a.createElement(f,null,a.a.createElement(ce,{show:this.state.error,modalClosed:this.errorConfirmHandler},this.state.error?this.state.error.message:null),a.a.createElement(e,this.props))}}]),o}(r.Component)},be=n(56),_e=n.n(be),ye=function(e){var t=[];for(var n in e.ingredients)t.push({name:n,amount:e.ingredients[n]});var r=t.map((function(e){return a.a.createElement("span",{style:{textTransform:"capitalize",display:"inline-block",margin:"0 8px",border:"1px solid #ccc",padding:"5px"},key:e.name},e.name," (",e.amount,")")}));return a.a.createElement("div",{className:_e.a.Order},a.a.createElement("p",null,"Ingredients: ",r),a.a.createElement("p",null,"Price: ",a.a.createElement("strong",null,Number.parseFloat(e.price).toFixed(2))))},Ce=function(e,t){return{type:"AUTH_SUCCESS",idToken:e,userId:t}},Se=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationTime"),localStorage.removeItem("userId"),{type:"AUTH_LOGOUT"}},ke=function(e){return function(t){setTimeout((function(){t(Se())}),1e3*e)}},Ie=function(e){return{type:"SET_AUTH_REDIRECT_PATH",path:e}},Te=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={purchasing:!1},e.purchaseHandler=function(){e.props.isAuthenticated?e.setState({purchasing:!0}):(e.props.onSetAuthRedirectPath("/checkout"),e.props.history.push("/auth"))},e.purchaseCancelHandler=function(){e.setState({purchasing:!1})},e.purchaseContinueHandler=function(){e.props.onInitPurchase(),e.props.history.push("/checkout")},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.onInitIngredients()}},{key:"updatePurchaseState",value:function(e){return Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0)>0}},{key:"render",value:function(){var e=Object(G.a)({},this.props.ings);for(var t in e)e[t]=e[t]<=0;var n=null,r=this.props.error?a.a.createElement("p",null,"Ingredients can't be loaded!"):a.a.createElement(ve,null);return this.props.ings&&(r=a.a.createElement(f,null,a.a.createElement(Z,{ingredients:this.props.ings}),a.a.createElement(ae,{ingredientAdded:this.props.onIngredientAdded,ingredientRemoved:this.props.onIngredientRemoved,disabled:e,purchasable:this.updatePurchaseState(this.props.ings),ordered:this.purchaseHandler,price:this.props.price,isAuth:this.props.isAuthenticated})),n=a.a.createElement(de,{ingredients:this.props.ings,purchaseCancelled:this.purchaseCancelHandler,purchaseContnued:this.purchaseContinueHandler,price:this.props.price})),a.a.createElement(f,null,a.a.createElement(ce,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},n),r)}}]),n}(r.Component),Oe=Object(l.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,error:e.burgerBuilder.error,isAuthenticated:null!==e.auth.token}}),(function(e){return{onIngredientAdded:function(t){return e({type:"ADD_INGREDIENT",ingredientName:t})},onIngredientRemoved:function(t){return e({type:"REMOVE_INGREDIENT",ingredientName:t})},onInitIngredients:function(){return e((function(e){he.get("https://react-my-burger-55460.firebaseio.com/ingredients.json").then((function(t){e({type:"SET_INGREDIENTS",ingredients:t.data})})).catch((function(t){e({type:"FETCH_INGREDIENTS_FAILED"})}))}))},onInitPurchase:function(){return e({type:"PURCHASE_INIT"})},onSetAuthRedirectPath:function(t){return e(Ie(t))}}}))(Ee(Te,he)),Ae=n(57),je=n.n(Ae),Ne=function(e){return a.a.createElement("div",{className:je.a.CheckoutSummary},a.a.createElement("h1",null,"badhiya hai!!"),a.a.createElement("div",{style:{width:"100%",margin:"auto"}},a.a.createElement(Z,{ingredients:e.ingredients})),a.a.createElement(se,{btnType:"Danger",clicked:e.checkoutCancelled},"CANCEL"),a.a.createElement(se,{btnType:"Success",clicked:e.checkoutContinued},"CONTINUE!"))},Be=n(13),De=n(22),Re=n.n(De),we=function(e){var t=null,n=[Re.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&n.push(Re.a.Invalid),e.elementType){case"input":t=a.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=a.a.createElement("textarea",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=a.a.createElement("select",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}),e.elementConfig.options.map((function(e){return a.a.createElement("option",{key:e.value,value:e.value},e.displayValue)})));break;default:t=a.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}))}return a.a.createElement("div",{className:Re.a.Input},a.a.createElement("label",{className:Re.a.Label},e.label),t)},xe=function(e,t){return Object(G.a)(Object(G.a)({},e),t)},He=function(e,t){var n=!0;if(!t)return!0;if(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),t.isEmail){n=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&n}if(t.isNumeric){n=/^\d+$/.test(e)&&n}return n},Le=n(58),Ue=n.n(Le),Pe=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"YourName?"},value:"",validation:{required:!0},valid:!1,touched:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"YourStreet?"},value:"",validation:{required:!0},valid:!1,touched:!1},zipCode:{elementType:"input",elementConfig:{type:"text",placeholder:"YourZipCode?"},value:"",validation:{required:!0,minLength:5,maxLength:5},valid:!1,touched:!1},country:{elementType:"input",elementConfig:{type:"text",placeholder:"YourCountry?"},value:"",validation:{required:!0},valid:!1,touched:!1},email:{elementType:"input",elementConfig:{type:"email",placeholder:"YourEmail?"},value:"",validation:{required:!0},valid:!1,touched:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"Fastest"},{value:"cheapest",displayValue:"Cheapest"}]},value:"fastest",valid:!0,validation:{}}},formIsValid:!1},e.orderHandler=function(t){t.preventDefault();var n={};for(var r in e.state.orderForm)n[r]=e.state.orderForm[r].value;var a={ingredients:e.props.ings,price:e.props.price,orderData:n,userId:e.props.userId};e.props.onOrderBurger(a,e.props.token)},e.inputChangedHandler=function(t,n){var r=xe(e.state.orderForm[n],{value:t.target.value,valid:He(t.target.value,e.state.orderForm.validation),touched:!0}),a=xe(e.state.orderForm,Object(Be.a)({},n,r)),o=!0;for(var i in a)o=a[i].valid&&o;e.setState({orderForm:a,formIsValid:o})},e}return Object(p.a)(n,[{key:"render",value:function(){var e=this,t=[];for(var n in this.state.orderForm)t.push({id:n,config:this.state.orderForm[n]});var r=a.a.createElement("form",{onSubmit:this.orderHandler},t.map((function(t){return a.a.createElement(we,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(n){return e.inputChangedHandler(n,t.id)}})})),a.a.createElement(se,{btnType:"Success",disabled:!this.state.formIsValid},"ORDER"));return this.props.loading&&(r=a.a.createElement(ve,null)),a.a.createElement("div",{className:Ue.a.ContactData},a.a.createElement("h4",null,"Enter your Contact Data"),r)}}]),n}(r.Component),Fe=Object(l.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}}),(function(e){return{onOrderBurger:function(t,n){return e(function(e,t){return function(n){n({type:"PURCHASE_BURGER_START"}),he.post("/orders.json?auth="+t,e).then((function(t){n(function(e,t){return{type:"PURCHASE_BURGER_SUCCESS",orderId:e,orderData:t}}(t.data.name,e))})).catch((function(e){n(function(e){return{type:"PURCHASE_BURGER_FAIL",error:e}}(e))}))}}(t,n))}}}))(Ee(Pe,he)),Me=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).checkoutCancelled=function(){e.props.history.goBack()},e.checkoutContinued=function(){e.props.history.replace("/checkout/contact-data")},e}return Object(p.a)(n,[{key:"render",value:function(){var e=a.a.createElement(g.a,{to:"/"});if(this.props.ings){var t=this.props.purchased?a.a.createElement(g.a,{to:"/"}):null;e=a.a.createElement("div",null,t,a.a.createElement(Ne,{ingredients:this.props.ings,checkoutCancelled:this.checkoutCancelled,checkoutContinued:this.checkoutContinued}),a.a.createElement(g.b,{path:this.props.match.path+"/contact-data",component:Fe}))}return e}}]),n}(r.Component),qe=Object(l.b)((function(e){return{ings:e.burgerBuilder.ingredients,purchased:e.order.purchased}}))(Me),Ye=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.onFetchOrders(this.props.token,this.props.userId)}},{key:"render",value:function(){var e=a.a.createElement(ve,null);return this.props.loading||(e=this.props.orders.map((function(e){return a.a.createElement(ye,{key:e.id,ingredients:e.ingredients,price:e.price})}))),a.a.createElement("div",null,e)}}]),n}(r.Component),Ge=Object(l.b)((function(e){return{orders:e.order.orders,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}}),(function(e){return{onFetchOrders:function(t,n){return e(function(e,t){return function(n){n({type:"FETCH_ORDERS_START"});var r="?auth="+e+'&orderBy="userId"&equalTo="'+t+'"';he.get("/orders.json"+r).then((function(e){var t=[];for(var r in e.data)t.push(Object(G.a)(Object(G.a)({},e.data[r]),{},{id:r}));n({type:"FETCH_ORDERS_SUCCESS",orders:t})})).catch((function(e){n({type:"FETCH_ORDERS_FAIL",error:e})}))}}(t,n))}}}))(Ee(Ye,he)),ze=n(59),Ve=n.n(ze),Xe=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={controls:{email:{elementType:"input",elementConfig:{type:"email",placeholder:"YourMail??"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"PASS??"},value:"",validation:{required:!0,minLength:6},valid:!1,touched:!1}},isSignup:!0},e.inputChangedHandler=function(t,n){var r=xe(e.state.controls,Object(Be.a)({},n,xe(e.state.controls[n],{value:t.target.value,valid:He(t.target.value,e.state.controls[n].validation),touched:!0})));e.setState({controls:r})},e.submitHandler=function(t){t.preventDefault(),e.props.onAuth(e.state.controls.email.value,e.state.controls.password.value,e.state.isSignup)},e.switchAuthModeHandler=function(){e.setState((function(e){return{isSignup:!e.isSignup}}))},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.buildingBurger||"/"===this.props.authRedirectPath||this.props.onSetAuthRedirectPath()}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.controls)t.push({id:n,config:this.state.controls[n]});var r=t.map((function(t){return a.a.createElement(we,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(n){return e.inputChangedHandler(n,t.id)}})}));this.props.loading&&(r=a.a.createElement(ve,null));var o=null;this.props.error&&(o=a.a.createElement("p",null,this.props.error.message));var i=null;return this.props.isAuthenticated&&(i=a.a.createElement(g.a,{to:this.props.authRedirectPath})),a.a.createElement("div",{className:Ve.a.Auth},i,o,a.a.createElement("form",{onSubmit:this.submitHandler},r,a.a.createElement(se,{btnType:"Success"},"SUBMIT")),a.a.createElement(se,{clicked:this.switchAuthModeHandler,btnType:"Danger"},"switch to ",this.state.isSignup?"sign in!":"sign up!!"))}}]),n}(r.Component),Ke=Object(l.b)((function(e){return{loading:e.auth.loading,error:e.auth.error,isAuthenticated:null!==e.auth.token,buildingBurger:e.burgerBuilder.building,authRedirectPath:e.auth.authRedirectPath}}),(function(e){return{onAuth:function(t,n,r){return e(function(e,t,n){return function(r){r({type:"AUTH_START"});var a={email:e,password:t,returnSecureToken:!0},o="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBxiKI5tTysmtMpXnQq8kU_0jvj2c79mZY";n||(o="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBxiKI5tTysmtMpXnQq8kU_0jvj2c79mZY"),me.a.post(o,a).then((function(e){var t=new Date((new Date).getTime()+1e3*e.data.expiresIn);localStorage.setItem("token",e.data.idToken),localStorage.setItem("expirationTime",t),localStorage.setItem("userId",e.data.localId),r(Ce(e.data.idToken,e.data.localId)),r(ke(e.data.expiresIn))})).catch((function(e){console.log(e),r({type:"AUTH_FAIL",error:e.response.data.error})}))}}(t,n,r))},onSetAuthRedirectPath:function(){return e(Ie("/"))}}}))(Xe),We=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.onLogout()}},{key:"render",value:function(){return a.a.createElement(g.a,{to:"/"})}}]),n}(r.Component),Je=Object(l.b)(null,(function(e){return{onLogout:function(){return e(Se())}}}))(We),Ze=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignup()}},{key:"render",value:function(){var e=a.a.createElement(g.d,null,a.a.createElement(g.b,{path:"/auth",component:Ke}),a.a.createElement(g.b,{path:"/",component:Oe}),a.a.createElement(g.a,{to:"/"}));return this.props.isAuthenticated&&(e=a.a.createElement(g.d,null,a.a.createElement(g.b,{path:"/checkout",component:qe}),a.a.createElement(g.b,{path:"/orders",component:Ge}),a.a.createElement(g.b,{path:"/logout",component:Je}),a.a.createElement(g.b,{path:"/auth",component:Ke}),a.a.createElement(g.b,{path:"/",component:Oe}))),a.a.createElement("div",null,a.a.createElement(Y,null,e))}}]),n}(r.Component),$e=Object(g.g)(Object(l.b)((function(e){return{isAuthenticated:null!==e.auth.token}}),(function(e){return{onTryAutoSignup:function(){return e((function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("expirationTime"));if(n<=new Date)e(Se());else{var r=localStorage.getItem("userId");e(Ce(t,r)),e(ke((n.getTime()-(new Date).getTime())/1e3))}}else e(Se())}))}}}))(Ze));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Qe={ingredients:null,totalPrice:4,error:!1,building:!1},et={salad:.5,cheese:.4,meat:1.3,bacon:.7},tt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Qe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_INGREDIENT":var n=Object(Be.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1),r=xe(e.ingredients,n),a={ingredients:r,totalPrice:e.totalPrice+et[t.ingredientName],building:!0};return xe(e,a);case"REMOVE_INGREDIENT":var o=Object(Be.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1),i=xe(e.ingredients,o),c={ingredients:i,totalPrice:e.totalPrice-et[t.ingredientName],building:!0};return xe(e,c);case"SET_INGREDIENTS":return xe(e,{ingredients:t.ingredients,error:!1,totalPrice:4,building:!1});case"FETCH_INGREDIENTS_FAILED":return xe(e,{error:!0});default:return e}},nt={orders:[],loading:!1,purchased:!1},rt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:nt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PURCHASE_INIT":return xe(e,{purchased:!1});case"PURCHASE_BURGER_START":return xe(e,{loading:!0});case"PURCHASE_BURGER_SUCCESS":var n=xe.apply(void 0,Object(z.a)(t.orderData).concat([{id:t.orderId}]));return xe(e,{loading:!1,purchased:!0,orders:e.orders.concat(n)});case"PURCHASE_BURGER_FAIL":return xe(e,{loading:!1});case"FETCH_ORDERS_SUCCESS":return xe(e,{orders:t.orders,loading:!1});case"FETCH_ORDERS_START":return xe(e,{loading:!0});case"FETCH_ORDERS_FAIL":return xe(e,{loading:!1});default:return e}},at={token:null,userId:null,error:null,loading:!1,authRedirectPath:"/"},ot=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:at,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_AUTH_REDIRECT_PATH":return xe(e,{authRedirectPath:t.path});case"AUTH_LOGOUT":return xe(e,{token:null,userId:null});case"AUTH_START":return xe(e,{error:null,loading:!0});case"AUTH_FAIL":return xe(e,{error:t.error,loading:!1});case"AUTH_SUCCESS":return xe(e,{token:t.idToken,userId:t.userId,error:null,loading:!1});default:return e}},it=u.d,ct=Object(u.c)({burgerBuilder:tt,order:rt,auth:ot}),lt=Object(u.e)(ct,it(Object(u.a)(s.a)));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(l.a,{store:lt},a.a.createElement(c.a,null,a.a.createElement($e,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[60,1,2]]]);
//# sourceMappingURL=main.1fb57764.chunk.js.map