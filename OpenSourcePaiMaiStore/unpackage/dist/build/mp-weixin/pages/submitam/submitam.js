(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/submitam/submitam"],{"4c41":function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},r=[];o.d(e,"a",function(){return n}),o.d(e,"b",function(){return r})},"7ade":function(t,e,o){"use strict";var n=o("c74c"),r=o.n(n);r.a},"974e":function(t,e,o){"use strict";o.r(e);var n=o("4c41"),r=o("ed8e");for(var i in r)"default"!==i&&function(t){o.d(e,t,function(){return r[t]})}(i);o("7ade");var a=o("2877"),s=Object(a["a"])(r["default"],n["a"],n["b"],!1,null,null,null);e["default"]=s.exports},b6c5:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o("2f62");function r(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{},n=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter(function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable}))),n.forEach(function(e){i(t,e,o[e])})}return t}function i(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var a=function(){return o.e("components/uni-number-box").then(o.bind(null,"b4b6"))},s=function(){return Promise.all([o.e("common/vendor"),o.e("components/rattenking-dtpicker/rattenking-dtpicker")]).then(o.bind(null,"c5fb"))},u={components:{uniNumberBox:a,ruiDatePicker:s},data:function(){return{comId:0,goodsTotalPrice:0,couponPrice:0,coupon:null,selectGoods:{},maskState:0,storeState:0,bonus:0,mayUseBonus:0,couponList:[],mayUseCouponList:[],isbind:!1,goodsList:[],iniaYuyueStartTime:"",IniaYuyueEndTime:"",beginTime:"",endTime:"",time:"12:00",date:"",end:"",goodsId:"",cartIds:"",windowflag:!1,ifCheckFlag:!1,orderStructData:{cartIds:null,times:null,storeIds:"",integralPrices:null,integralBonuss:null,coupons:null,message:null,goodId:null,number:"1",time:null,storeId:null,comId:null,integralPrice:null,integralBonus:null,coupon:null}}},onLoad:function(t){this.getOderSetInfo();var e=t.goodId;this.goodsId=e;var o=t.number,n=t.numbers,r=t.cartIds;this.cartIds=r;var i=t.comId;this.comId=i,this.loadData(e,o,r,n),this.windowshow(!0)},onShow:function(){this.getuserInfo()},computed:r({},(0,n.mapState)(["hasLogin","userInfo"]),{startDate:function(){return this.getDate("start")},endDate:function(){return this.getDate("end")},CurrentDateTime:function(){return this.date+" "+this.time}}),methods:r({},(0,n.mapMutations)(["login"]),{notUseCoupon:function(t){t.coupon=null,this.recomputeCoupon(),this.reComputeBonus(),this.toggleMask("",t)},reComputeBonus:function(){var t=this;this.mayUseBonus=this.bonus,this.goodsTotalPrice=0,this.goodsList.forEach(function(e){null!=e.integralBonus&&(t.mayUseBonus=t.mayUseBonus-e.integralBonus,null!=e.coupon?e.orderTotalPrice=(e.orderTotalPriceReal-e.coupon.maxAmt).toFixed(2):e.orderTotalPrice=e.orderTotalPriceReal,null!=e.integralPrice?t.goodsTotalPrice+=(e.orderTotalPrice-e.integralPrice).toFixed(2):t.goodsTotalPrice+=e.orderTotalPrice)})},recomputeCoupon:function(){var t=this;this.mayUseCouponList=[],console.log(this.couponList),console.log(this.goodsList),this.couponList.forEach(function(e){var o=!1;t.goodsList.forEach(function(t){null!=t.coupon&&e.serialId==t.coupon.serialId&&(o=!0)}),0==o&&t.mayUseCouponList.push(e)});var e=this.mayUseCouponList;this.mayUseCouponList=[],this.mayUseCouponList=e},usebonusChange:function(e,o){var n=this;n.reComputeBonus(),console.log(this.mayUseBonus),o.detail.value?n.$http({method:"POST",params:{bonus:n.mayUseBonus},data:t.getStorageSync("userInfo"),url:this.global.target+"/wx/shoudu/crm/getMoneyWithBonus"}).then(function(o){var r=o.data;if(console.log(r),0==r.errno){var i=r.data,a=i.money,s=i.bonus;if(a>0)if(a>e.orderTotalPrice)n.$http({method:"POST",data:t.getStorageSync("userInfo"),params:{money:e.orderTotalPrice},url:n.global.target+"/wx/shoudu/crm/getBonusWithMoney"}).then(function(t){var o=t.data;if(0==o.errno){e.integralPrice=o.data.money,e.integralBonus=o.data.bonus,e.orderTotalPrice=(e.orderTotalPrice-o.data.money).toFixed(2);var r=e;e=[],e=r,n.reComputeBonus()}else n.$api.msg(o.errmsg)},function(t){});else{e.integralPrice=a,e.integralBonus=s,e.orderTotalPrice=(e.orderTotalPrice-a).toFixed(2);var u=e;e=[],e=u,n.reComputeBonus(),console.log(n.mayUseBonus)}}else n.$api.msg(r.errmsg)},function(t){}):(null!=n.coupon?e.orderTotalPrice=(e.orderTotalPriceReal-e.coupon.maxAmt).toFixed(2):e.orderTotalPrice=e.orderTotalPriceReal,e.integralPrice=0,e.integralBonus=0,n.reComputeBonus())},getOderSetInfo:function(){var t=this;t.$http({method:"GET",url:t.global.target+"/wx/order/getOrderSetList"}).then(function(e){var o=e.data;0==o.errno&&(t.orderSetList=o.data)},function(t){})},navToLogin:function(){t.navigateTo({url:"/pages/public/login"})},clickSelectStore:function(t){null!=t&&(this.selectGoods.storeId=t.id,this.selectGoods.storeName=t.name,this.selectGoods.defaultStore=t,this.storeToggleMask("",this.selectGoods))},stopPrevent:function(){},storeToggleMask:function(t,e){var o=this;console.log(e);var n="show"===t?10:300,r="show"===t?1:0;null!=e?(this.storeState=2,setTimeout(function(){o.storeState=r},n),this.selectGoods=e):this.storeState=0},selectCoupon:function(t){console.log(t),null!=t?(this.selectGoods.coupon=t,this.selectGoods.orderTotalPrice=(this.selectGoods.orderTotalPrice-t.maxAmt).toFixed(2),this.recomputeCoupon(),this.reComputeBonus(),this.toggleMask("",this.selectGoods)):this.toggleMask("",this.selectGoods)},toggleMask:function(t,e){var o=this,n="show"===t?10:300,r="show"===t?1:0;this.maskState=2,setTimeout(function(){o.maskState=r},n),this.selectGoods=e},loadData:function(t,e,o,n){var r=this;r.getuserInfo(),t&&null!=t&&""!=t&&null!=e&&""!=e?r.$http({method:"POST",params:{goodId:t,number:e,comId:r.comId},url:this.global.target+"/wx/cart/recomandcheckoutinfo"}).then(function(t){var e=t.data;if(0==e.errno){r.iniaYuyueStartTime=e.data.startTime,r.IniaYuyueEndTime=e.data.endTime;var o=e.data.checkedGoodsList;o.forEach(function(t){r.nowDate(t)}),r.goodsList=e.data.checkedGoodsList,r.goodsTotalPrice=e.data.goodsTotalPrice}else r.$api.msg(e.errmsg)},function(t){}):o&&null!=o&&""!=o&&null!=n&&""!=n&&r.$http({method:"POST",params:{cartIds:o,numbers:n,comId:r.comId},url:this.global.target+"/wx/cart/recomandcheckoutinfo"}).then(function(t){var e=t.data;if(0==e.errno){r.iniaYuyueStartTime=e.data.startTime,r.IniaYuyueEndTime=e.data.endTime;var o=e.data.checkedGoodsList;o.forEach(function(t){r.$set(t.storeList[0],"seleted",!0),r.nowDate(t)}),r.goodsList=e.data.checkedGoodsList,r.goodsTotalPrice=e.data.goodsTotalPrice}else r.$api.msg(e.errmsg)},function(t){})},getuserInfo:function(){var e=this;e.$http({method:"POST",url:this.global.target+"/wx/auth/checkToken"}).then(function(o){var n=o.data;if(0==n.errno){e.login(n.data);var r=t.getStorageSync("userInfo");e.bonus=r.bonus,e.mayUseBonus=r.bonus,e.couponList=r.ticketsList,e.mayUseCouponList=r.ticketsList,r.vipCode&&(e.isbind=!0)}},function(t){})},recommandOrder:function(){if(t.showLoading({title:"请稍后"}),this.orderStructData.goodId=0,this.orderStructData.number=0,this.orderStructData.time="",this.orderStructData.storeId=0,this.orderStructData.cartIds="",this.orderStructData.times="",this.orderStructData.storeIds="",this.orderStructData.comId=this.comId,this.orderStructData.integralBonuss="",this.orderStructData.integralPrices="",this.goodsId&&null!=this.goodsId&&""!=this.goodsId){var e=this.goodsList[0],o=e.cart;this.orderStructData.goodId=o.productId,this.orderStructData.number=o.number,this.orderStructData.time=this.date+" "+this.time,this.orderStructData.storeId=e.defaultStore.id,this.orderStructData.integralPrice=e.integralPrice,this.orderStructData.integralBonus=e.integralBonus,this.orderStructData.coupon=e.coupon}else if(this.cartIds&&null!=this.cartIds&&""!=this.cartIds)for(var n=[],r=0;r<this.goodsList.length;r++){var i=this.goodsList[r],a=i.cart;this.orderStructData.cartIds+=a.id+",",this.orderStructData.times+=i.date+" "+i.time+",",this.orderStructData.storeIds+=i.defaultStore.id+",",this.orderStructData.integralPrices+=i.integralPrice+",",this.orderStructData.integralBonuss+=i.integralBonus+",";i.coupon;n.push(i.coupon),this.orderStructData.coupons=n}console.log(this.orderStructData);var s=this;s.$http({method:"POST",data:s.orderStructData,url:this.global.target+"/wx/order/submitcommand"}).then(function(e){t.hideLoading();var o=e.data;0==o.errno?t.navigateTo({url:"/pages/submitam/order?state=0"}):s.$api.msg(o.errmsg)},function(e){t.hideLoading()})},getDefaultDateValue:function(t){(new Date).getTime();return new Date((new Date).getTime()+3600*t*1e3)},getDayAddSome:function(t,e){var o=new Date(new Date(t).getTime()+24*e*3600*1e3),n=o.getMonth()+1>9?o.getMonth()+1:"0"+(o.getMonth()+1),r=o.getDate()>9?o.getDate():"0"+o.getDate();return o.getFullYear()+"-"+n+"-"+r},nowDate:function(t){new Date;this.date=this.iniaYuyueStartTime.substring(0,10),this.time=this.iniaYuyueStartTime.substring(11,16);var e=this.time.substring(0,2);e<"09"&&(e="09",this.time=e+":00"),e>"17"&&(e="17",this.time=e+":00"),t.date=this.date,t.time=this.time,this.begintime=this.time,console.log(t.date,t.time)},disnum:function(){var t=this.yuyue_num-1;t>0&&(this.yuyue_num=t)},addnum:function(){var t=parseInt(this.yuyue_num)+1;this.yuyue_num=t},checkaddress:function(t,e){var o=this.goodsList[t].storeList;o.forEach(function(t){t.seleted=!1}),this.goodsList[t].storeList[e].seleted=!0},bindDateChange:function(t,e){this.date=e.substring(0,10),this.time=e.substring(11,16)},bindTimeChange:function(t,e){this.time=e.detail.value,t.time=e.detail.value},windowshow:function(t){this.windowflag=t},ifCheckFlagClick:function(){this.ifCheckFlag=!this.ifCheckFlag},getDate:function(t){var e=new Date,o=e.getFullYear(),n=e.getMonth()+1,r=e.getDate();return"start"===t?o=o:"end"===t&&(o+=1),n=n>9?n:"0"+n,r=r>9?r:"0"+r,"".concat(o,"-").concat(n,"-").concat(r," 00:00")},navTo:function(e){t.switchTab({url:e})}})};e.default=u}).call(this,o("543d")["default"])},c74c:function(t,e,o){},ed8e:function(t,e,o){"use strict";o.r(e);var n=o("b6c5"),r=o.n(n);for(var i in n)"default"!==i&&function(t){o.d(e,t,function(){return n[t]})}(i);e["default"]=r.a}},[["8e76","common/runtime","common/vendor"]]]);