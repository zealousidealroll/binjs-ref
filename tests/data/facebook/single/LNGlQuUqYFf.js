if (self.CavalryLogger) { CavalryLogger.start_js(["zPpNx"]); }

__d('PagesCommerceBuyerNUXDialog.react',['cx','fbt','ix','Image.react','LayerFadeOnHide','LayerFadeOnShow','React','SimpleNUXMessage','SimpleNUXMessageTypes','XUIButton.react','XUIDialog.react','XUIDialogBody.react','XUIText.react'],(function a(b,c,d,e,f,g,h,i,j){'use strict';var k,l,m=400,n=j("276000");k=babelHelpers.inherits(o,c('React').PureComponent);l=k&&k.prototype;function o(){var p,q;for(var r=arguments.length,s=Array(r),t=0;t<r;t++)s[t]=arguments[t];return q=(p=l.constructor).call.apply(p,[this].concat(s)),this.$PagesCommerceBuyerNUXDialog2=function(){c('SimpleNUXMessage').markMessageSeenByUser(c('SimpleNUXMessageTypes').PAGES_COMMERCE_BUYER_NUX);this.props.onConfirm();}.bind(this),this.$PagesCommerceBuyerNUXDialog3=function(u){if(!u)this.$PagesCommerceBuyerNUXDialog2();}.bind(this),q;}o.prototype.$PagesCommerceBuyerNUXDialog1=function(){return i._("OK");};o.prototype.$PagesCommerceBuyerNUXDialog4=function(){return (c('React').createElement('div',{className:"_1lc0"},c('React').createElement(c('XUIButton.react'),{className:"_1lcd",label:this.$PagesCommerceBuyerNUXDialog1(),size:'xxlarge',use:'confirm',onClick:this.$PagesCommerceBuyerNUXDialog2})));};o.prototype.$PagesCommerceBuyerNUXDialog5=function(){return (c('React').createElement('ul',{className:"_1lce"},c('React').createElement('li',{className:"_1lcf"},c('React').createElement(c('Image.react'),{src:j("275996")}),c('React').createElement(c('XUIText.react'),{size:'large'},i._("Use your bank account or credit card."))),c('React').createElement('li',{className:"_1lcf"},c('React').createElement(c('Image.react'),{src:j("275998")}),c('React').createElement(c('XUIText.react'),{size:'large'},i._("Payments are protected and private."))),c('React').createElement('li',{className:"_1lcf"},c('React').createElement(c('Image.react'),{src:j("275997")}),c('React').createElement(c('XUIText.react'),{size:'large'},i._("FREE! No extra fees or charges.")))));};o.prototype.render=function(){if(!this.props.isShown)return null;return (c('React').createElement(c('XUIDialog.react'),{behaviors:{LayerFadeOnHide:c('LayerFadeOnHide'),LayerFadeOnShow:c('LayerFadeOnShow')},onToggle:this.$PagesCommerceBuyerNUXDialog3,shown:this.props.isShown,width:this.props.width||m},c('React').createElement(c('XUIDialogBody.react'),{className:"_52jv"},c('React').createElement(c('Image.react'),{className:"_1lcg",src:n}),c('React').createElement('div',{className:"_1lci"},i._("Instant, secure payments on Messenger.")),this.$PagesCommerceBuyerNUXDialog5(),this.$PagesCommerceBuyerNUXDialog4())));};f.exports=o;}),null);