
          window.__NEXT_REGISTER_PAGE('/_Providers', function() {
            var comp = module.exports=webpackJsonp([9],{354:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.Tracker=void 0;var r=a(15),o=n(r),i=a(10),u=n(i),c=a(11),l=n(c),s=a(17),d=n(s),f=a(16),p=n(f),h=a(1),v=(n(h),a(112)),k=n(v),y=a(347),_=n(y),m=a(327);n(m);(e.Tracker=function(t){function e(t){(0,u.default)(this,e);var a=(0,d.default)(this,(e.__proto__||(0,o.default)(e)).call(this,t));return a.state={track:null},a}return(0,p.default)(e,t),(0,l.default)(e,[{key:"componentDidMount",value:function(){if(null===this.state.track){var t=(0,_.default)(this.props.analytics);t.start(),dataLayer.push({event:"optimize.activate"}),t.page.visit({url:window.location.pathname}),k.default.routeChangeComplete=function(e){dataLayer.push({event:"optimize.activate"}),t.page.visit({url:e})};var e=function(e,a){try{t.create(e,a),void 0!==window.fbq&&window.fbq("track",e,a)}catch(t){console.error(t)}};this.setState({track:e})}}},{key:"getChildContext",value:function(){return{track:this.state.track}}},{key:"render",value:function(){return h.Children.only(this.props.children)}}]),e}(h.Component)).childContextTypes={track:h.PropTypes.func}},850:function(t,e,a){t.exports=a(354)}},[850]);
            return { page: comp.default }
          })
        