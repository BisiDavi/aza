(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"8oxB":function(t,e){var n,i,s=t.exports={};function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(t){if(n===setTimeout)return setTimeout(t,0);if((n===r||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:r}catch(t){n=r}try{i="function"==typeof clearTimeout?clearTimeout:o}catch(t){i=o}}();var u,c=[],l=!1,h=-1;function p(){l&&u&&(l=!1,u.length?c=u.concat(c):h=-1,c.length&&d())}function d(){if(!l){var t=a(p);l=!0;for(var e=c.length;e;){for(u=c,c=[];++h<e;)u&&u[h].run();h=-1,e=c.length}u=null,l=!1,function(t){if(i===clearTimeout)return clearTimeout(t);if((i===o||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(t);try{i(t)}catch(e){try{return i.call(null,t)}catch(e){return i.call(this,t)}}}(t)}}function f(t,e){this.fun=t,this.array=e}function g(){}s.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new f(t,e)),1!==c.length||l||a(d)},f.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=g,s.addListener=g,s.once=g,s.off=g,s.removeListener=g,s.removeAllListeners=g,s.emit=g,s.prependListener=g,s.prependOnceListener=g,s.listeners=function(t){return[]},s.binding=function(t){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(t){throw new Error("process.chdir is not supported")},s.umask=function(){return 0}},DrhF:function(t,e,n){var i=n("BjK0"),s=n("N+BI").onFreeze;n("939a")("freeze",(function(t){return function(e){return t&&i(e)?t(s(e)):e}}))},RXBc:function(t,e,n){"use strict";n.r(e);var i=n("q1tI"),s=n.n(i),r=n("FTXn"),o=n("R/WZ"),a=n("qhky"),u=n("Wbzz"),c=n("WIoQ"),l={rebound:{tension:14,friction:10},spinner:{id:"spinner",radius:90,sides:6,depth:8,colors:{background:"#00272C",stroke:null,base:null,child:"#02C39A"},alwaysForward:!0,restAt:null,renderBase:!1}},h=Object(o.a)({typewrite:{textAlign:"center",fontSize:30,color:"red"},banner:{marginBottom:20}});e.default=function(){var t=h();return s.a.createElement(s.a.Fragment,null,s.a.createElement(c.a,{settings:l}),s.a.createElement(r.h,null,s.a.createElement(a.a,null,s.a.createElement("script",{src:Object(u.withPrefix)("pace.js"),type:"text/javascript"}),s.a.createElement("link",{href:Object(u.withPrefix)("pace.css"),type:"text/css",rel:"stylesheet"})),s.a.createElement(r.j,{title:"Home - Get 50% ROI when you invest"}),s.a.createElement("div",{className:t.banner},s.a.createElement(r.a,null)),s.a.createElement("span",{className:t.typewrite},s.a.createElement(r.k,null)),s.a.createElement("span",{className:t.timeline},s.a.createElement(r.b,null))))}},URgk:function(t,e,n){(function(t){var i=void 0!==t&&t||"undefined"!=typeof self&&self||window,s=Function.prototype.apply;function r(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new r(s.call(setTimeout,i,arguments),clearTimeout)},e.setInterval=function(){return new r(s.call(setInterval,i,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},r.prototype.unref=r.prototype.ref=function(){},r.prototype.close=function(){this._clearFn.call(i,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout((function(){t._onTimeout&&t._onTimeout()}),e))},n("YBdB"),e.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==t&&t.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==t&&t.clearImmediate||this&&this.clearImmediate}).call(this,n("yLpj"))},WIoQ:function(t,e,n){"use strict";(function(t,i){n("n0hJ"),n("JHok"),n("LagC"),n("pS08"),n("R48M"),n("DrhF"),n("q8oJ"),n("C9fy"),n("8npG"),n("Ll4R"),n("sC2a"),n("1dPr"),n("sc67"),n("n7j8");var s=n("q1tI");var r=function(t,e){return t(e={exports:{}},e.exports),e.exports}((function(e,n){!function(){var e={},s=e.util={},r=Array.prototype.concat,o=Array.prototype.slice;s.bind=function(t,e){var n=o.call(arguments,2);return function(){t.apply(e,r.call(n,o.call(arguments)))}},s.extend=function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};var a=e.SpringSystem=function(t){this._springRegistry={},this._activeSprings=[],this.listeners=[],this._idleSpringIndices=[],this.looper=t||new h,this.looper.springSystem=this};s.extend(a.prototype,{_springRegistry:null,_isIdle:!0,_lastTimeMillis:-1,_activeSprings:null,listeners:null,_idleSpringIndices:null,setLooper:function(t){this.looper=t,t.springSystem=this},createSpring:function(t,e){var n;return n=void 0===t||void 0===e?l.DEFAULT_ORIGAMI_SPRING_CONFIG:l.fromOrigamiTensionAndFriction(t,e),this.createSpringWithConfig(n)},createSpringWithBouncinessAndSpeed:function(t,e){var n;return n=void 0===t||void 0===e?l.DEFAULT_ORIGAMI_SPRING_CONFIG:l.fromBouncinessAndSpeed(t,e),this.createSpringWithConfig(n)},createSpringWithConfig:function(t){var e=new u(this);return this.registerSpring(e),e.setSpringConfig(t),e},getIsIdle:function(){return this._isIdle},getSpringById:function(t){return this._springRegistry[t]},getAllSprings:function(){var t=[];for(var e in this._springRegistry)this._springRegistry.hasOwnProperty(e)&&t.push(this._springRegistry[e]);return t},registerSpring:function(t){this._springRegistry[t.getId()]=t},deregisterSpring:function(t){m(this._activeSprings,t),delete this._springRegistry[t.getId()]},advance:function(t,e){for(;this._idleSpringIndices.length>0;)this._idleSpringIndices.pop();for(var n=0,i=this._activeSprings.length;n<i;n++){var s=this._activeSprings[n];s.systemShouldAdvance()?s.advance(t/1e3,e/1e3):this._idleSpringIndices.push(this._activeSprings.indexOf(s))}for(;this._idleSpringIndices.length>0;){var r=this._idleSpringIndices.pop();r>=0&&this._activeSprings.splice(r,1)}},loop:function(t){var e;-1===this._lastTimeMillis&&(this._lastTimeMillis=t-1);var n=t-this._lastTimeMillis;this._lastTimeMillis=t;var i=0,s=this.listeners.length;for(i=0;i<s;i++)(e=this.listeners[i]).onBeforeIntegrate&&e.onBeforeIntegrate(this);for(this.advance(t,n),0===this._activeSprings.length&&(this._isIdle=!0,this._lastTimeMillis=-1),i=0;i<s;i++)(e=this.listeners[i]).onAfterIntegrate&&e.onAfterIntegrate(this);this._isIdle||this.looper.run()},activateSpring:function(t){var e=this._springRegistry[t];-1==this._activeSprings.indexOf(e)&&this._activeSprings.push(e),this.getIsIdle()&&(this._isIdle=!1,this.looper.run())},addListener:function(t){this.listeners.push(t)},removeListener:function(t){m(this.listeners,t)},removeAllListeners:function(){this.listeners=[]}});var u=e.Spring=function t(e){this._id="s"+t._ID++,this._springSystem=e,this.listeners=[],this._currentState=new c,this._previousState=new c,this._tempState=new c};s.extend(u,{_ID:0,MAX_DELTA_TIME_SEC:.064,SOLVER_TIMESTEP_SEC:.001}),s.extend(u.prototype,{_id:0,_springConfig:null,_overshootClampingEnabled:!1,_currentState:null,_previousState:null,_tempState:null,_startValue:0,_endValue:0,_wasAtRest:!0,_restSpeedThreshold:.001,_displacementFromRestThreshold:.001,listeners:null,_timeAccumulator:0,_springSystem:null,destroy:function(){this.listeners=[],this.frames=[],this._springSystem.deregisterSpring(this)},getId:function(){return this._id},setSpringConfig:function(t){return this._springConfig=t,this},getSpringConfig:function(){return this._springConfig},setCurrentValue:function(t,e){return this._startValue=t,this._currentState.position=t,e||this.setAtRest(),this.notifyPositionUpdated(!1,!1),this},getStartValue:function(){return this._startValue},getCurrentValue:function(){return this._currentState.position},getCurrentDisplacementDistance:function(){return this.getDisplacementDistanceForState(this._currentState)},getDisplacementDistanceForState:function(t){return Math.abs(this._endValue-t.position)},setEndValue:function(t){if(this._endValue==t&&this.isAtRest())return this;this._startValue=this.getCurrentValue(),this._endValue=t,this._springSystem.activateSpring(this.getId());for(var e=0,n=this.listeners.length;e<n;e++){var i=this.listeners[e].onSpringEndStateChange;i&&i(this)}return this},getEndValue:function(){return this._endValue},setVelocity:function(t){return t===this._currentState.velocity||(this._currentState.velocity=t,this._springSystem.activateSpring(this.getId())),this},getVelocity:function(){return this._currentState.velocity},setRestSpeedThreshold:function(t){return this._restSpeedThreshold=t,this},getRestSpeedThreshold:function(){return this._restSpeedThreshold},setRestDisplacementThreshold:function(t){this._displacementFromRestThreshold=t},getRestDisplacementThreshold:function(){return this._displacementFromRestThreshold},setOvershootClampingEnabled:function(t){return this._overshootClampingEnabled=t,this},isOvershootClampingEnabled:function(){return this._overshootClampingEnabled},isOvershooting:function(){var t=this._startValue,e=this._endValue;return this._springConfig.tension>0&&(t<e&&this.getCurrentValue()>e||t>e&&this.getCurrentValue()<e)},advance:function(t,e){var n=this.isAtRest();if(!n||!this._wasAtRest){var i=e;e>u.MAX_DELTA_TIME_SEC&&(i=u.MAX_DELTA_TIME_SEC),this._timeAccumulator+=i;for(var s,r,o,a,c,l,h,p,d=this._springConfig.tension,f=this._springConfig.friction,g=this._currentState.position,_=this._currentState.velocity,m=this._tempState.position,v=this._tempState.velocity;this._timeAccumulator>=u.SOLVER_TIMESTEP_SEC;)this._timeAccumulator-=u.SOLVER_TIMESTEP_SEC,this._timeAccumulator<u.SOLVER_TIMESTEP_SEC&&(this._previousState.position=g,this._previousState.velocity=_),s=_,r=d*(this._endValue-m)-f*_,m=g+s*u.SOLVER_TIMESTEP_SEC*.5,o=v=_+r*u.SOLVER_TIMESTEP_SEC*.5,a=d*(this._endValue-m)-f*v,m=g+o*u.SOLVER_TIMESTEP_SEC*.5,c=v=_+a*u.SOLVER_TIMESTEP_SEC*.5,l=d*(this._endValue-m)-f*v,m=g+c*u.SOLVER_TIMESTEP_SEC*.5,h=v=_+l*u.SOLVER_TIMESTEP_SEC*.5,p=1/6*(r+2*(a+l)+(d*(this._endValue-m)-f*v)),g+=1/6*(s+2*(o+c)+h)*u.SOLVER_TIMESTEP_SEC,_+=p*u.SOLVER_TIMESTEP_SEC;this._tempState.position=m,this._tempState.velocity=v,this._currentState.position=g,this._currentState.velocity=_,this._timeAccumulator>0&&this._interpolate(this._timeAccumulator/u.SOLVER_TIMESTEP_SEC),(this.isAtRest()||this._overshootClampingEnabled&&this.isOvershooting())&&(this._springConfig.tension>0?(this._startValue=this._endValue,this._currentState.position=this._endValue):(this._endValue=this._currentState.position,this._startValue=this._endValue),this.setVelocity(0),n=!0);var S=!1;this._wasAtRest&&(this._wasAtRest=!1,S=!0);var y=!1;n&&(this._wasAtRest=!0,y=!0),this.notifyPositionUpdated(S,y)}},notifyPositionUpdated:function(t,e){for(var n=0,i=this.listeners.length;n<i;n++){var s=this.listeners[n];t&&s.onSpringActivate&&s.onSpringActivate(this),s.onSpringUpdate&&s.onSpringUpdate(this),e&&s.onSpringAtRest&&s.onSpringAtRest(this)}},systemShouldAdvance:function(){return!this.isAtRest()||!this.wasAtRest()},wasAtRest:function(){return this._wasAtRest},isAtRest:function(){return Math.abs(this._currentState.velocity)<this._restSpeedThreshold&&(this.getDisplacementDistanceForState(this._currentState)<=this._displacementFromRestThreshold||0===this._springConfig.tension)},setAtRest:function(){return this._endValue=this._currentState.position,this._tempState.position=this._currentState.position,this._currentState.velocity=0,this},_interpolate:function(t){this._currentState.position=this._currentState.position*t+this._previousState.position*(1-t),this._currentState.velocity=this._currentState.velocity*t+this._previousState.velocity*(1-t)},getListeners:function(){return this.listeners},addListener:function(t){return this.listeners.push(t),this},removeListener:function(t){return m(this.listeners,t),this},removeAllListeners:function(){return this.listeners=[],this},currentValueIsApproximately:function(t){return Math.abs(this.getCurrentValue()-t)<=this.getRestDisplacementThreshold()}});var c=function(){};s.extend(c.prototype,{position:0,velocity:0});var l=e.SpringConfig=function(t,e){this.tension=t,this.friction=e},h=e.AnimationLooper=function(){this.springSystem=null;var t=this,e=function(){t.springSystem.loop(Date.now())};this.run=function(){s.onFrame(e)}};e.SimulationLooper=function(t){this.springSystem=null;var e=0,n=!1;t=t||16.667,this.run=function(){if(!n){for(n=!0;!this.springSystem.getIsIdle();)this.springSystem.loop(e+=t);n=!1}}},e.SteppingSimulationLooper=function(t){this.springSystem=null;var e=0;this.run=function(){},this.step=function(t){this.springSystem.loop(e+=t)}};var p=e.OrigamiValueConverter={tensionFromOrigamiValue:function(t){return 3.62*(t-30)+194},origamiValueFromTension:function(t){return(t-194)/3.62+30},frictionFromOrigamiValue:function(t){return 3*(t-8)+25},origamiFromFriction:function(t){return(t-25)/3+8}},d=e.BouncyConversion=function(t,e){this.bounciness=t,this.speed=e;var n=this.normalize(t/1.7,0,20);n=this.projectNormal(n,0,.8);var i=this.normalize(e/1.7,0,20);this.bouncyTension=this.projectNormal(i,.5,200),this.bouncyFriction=this.quadraticOutInterpolation(n,this.b3Nobounce(this.bouncyTension),.01)};s.extend(d.prototype,{normalize:function(t,e,n){return(t-e)/(n-e)},projectNormal:function(t,e,n){return e+t*(n-e)},linearInterpolation:function(t,e,n){return t*n+(1-t)*e},quadraticOutInterpolation:function(t,e,n){return this.linearInterpolation(2*t-t*t,e,n)},b3Friction1:function(t){return 7e-4*Math.pow(t,3)-.031*Math.pow(t,2)+.64*t+1.28},b3Friction2:function(t){return 44e-6*Math.pow(t,3)-.006*Math.pow(t,2)+.36*t+2},b3Friction3:function(t){return 45e-8*Math.pow(t,3)-332e-6*Math.pow(t,2)+.1078*t+5.84},b3Nobounce:function(t){return t<=18?this.b3Friction1(t):t>18&&t<=44?this.b3Friction2(t):this.b3Friction3(t)}}),s.extend(l,{fromOrigamiTensionAndFriction:function(t,e){return new l(p.tensionFromOrigamiValue(t),p.frictionFromOrigamiValue(e))},fromBouncinessAndSpeed:function(t,n){var i=new e.BouncyConversion(t,n);return this.fromOrigamiTensionAndFriction(i.bouncyTension,i.bouncyFriction)},coastingConfigWithOrigamiFriction:function(t){return new l(0,p.frictionFromOrigamiValue(t))}}),l.DEFAULT_ORIGAMI_SPRING_CONFIG=l.fromOrigamiTensionAndFriction(40,7),s.extend(l.prototype,{friction:0,tension:0});var f={};s.hexToRGB=function(t){if(f[t])return f[t];3===(t=t.replace("#","")).length&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]);var e=t.match(/.{2}/g),n={r:parseInt(e[0],16),g:parseInt(e[1],16),b:parseInt(e[2],16)};return f[t]=n,n},s.rgbToHex=function(t,e,n){return t=t.toString(16),e=e.toString(16),n=n.toString(16),"#"+(t=t.length<2?"0"+t:t)+(e=e.length<2?"0"+e:e)+(n=n.length<2?"0"+n:n)};var g,_=e.MathUtil={mapValueInRange:function(t,e,n,i,s){return i+(t-e)/(n-e)*(s-i)},interpolateColor:function(t,e,n,i,r,o){i=void 0===i?0:i,r=void 0===r?1:r,e=s.hexToRGB(e),n=s.hexToRGB(n);var a=Math.floor(s.mapValueInRange(t,i,r,e.r,n.r)),u=Math.floor(s.mapValueInRange(t,i,r,e.g,n.g)),c=Math.floor(s.mapValueInRange(t,i,r,e.b,n.b));return o?"rgb("+a+","+u+","+c+")":s.rgbToHex(a,u,c)},degreesToRadians:function(t){return t*Math.PI/180},radiansToDegrees:function(t){return 180*t/Math.PI}};function m(t,e){var n=t.indexOf(e);-1!=n&&t.splice(n,1)}s.extend(s,_),"undefined"!=typeof window&&(g=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}),g||void 0===t||"node"!==t.title||(g=i),s.onFrame=function(t){return g(t)},s.extend(n,e)}()})),o=Object.freeze({default:r,__moduleExports:r}),a=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},u=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),c=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,s=arguments[3];a(this,t),this._radius=e,this._sides=n,this._depth=i,this._colors=s,this._x=0,this._y=0,this.rotation=0,this.scale=1,this.points=this._getRegularPolygonPoints()}return u(t,[{key:"_getRegularPolygonPoints",value:function(){for(var t=[],e=0;e<this._sides;){var n=-this._radius*Math.sin(2*e*Math.PI/this._sides),i=this._radius*Math.cos(2*e*Math.PI/this._sides);t.push({x:n,y:i}),e++}return t}},{key:"_getInscribedPoints",value:function(t,e){var n=this,i=[];return t.forEach((function(s,r){var o=s,a=t[r+1];a||(a=t[0]);var u=n._getInterpolatedPoint(o,a,e);i.push(u)})),i}},{key:"_getInterpolatedPoint",value:function(t,e,n){var i=t.x,s=t.y;return{x:i+(e.x-i)*n,y:s+(e.y-s)*n}}},{key:"_getUpdatedChildren",value:function(t){for(var e=[],n=0;n<this._depth;n++){var i=e[n-1]||this.points,s=this._getInscribedPoints(i,t);e.push(s)}return e}},{key:"renderChildren",value:function(t,e){var n=this,i=this._getUpdatedChildren(e);i.forEach((function(e,s){t.beginPath(),e.forEach((function(e){return t.lineTo(e.x,e.y)})),t.closePath();var o=n._colors.stroke,a=n._colors.child;if(o&&(t.strokeStyle=o,t.stroke()),a){var u=r.util.hexToRGB(a),c=1/i.length,l=c+c*s,h="rgba("+u.r+", "+u.g+", "+u.b+", "+l+")";t.fillStyle=h,t.shadowColor="rgba(0,0,0, 0.1)",t.shadowBlur=10,t.shadowOffsetX=0,t.shadowOffsetY=0,t.fill()}}))}},{key:"render",value:function(t){t.save(),t.translate(this._x,this._y),0!==this.rotation&&t.rotate(r.MathUtil.degreesToRadians(this.rotation)),1!==this.scale&&t.scale(this.scale,this.scale),t.beginPath(),this.points.forEach((function(e){return t.lineTo(e.x,e.y)})),t.closePath();var e=this._colors.stroke,n=this._colors.base;e&&(t.strokeStyle=e,t.stroke()),n&&(t.fillStyle=n,t.fill()),t.restore()}}]),t}(),l=Object.freeze({Polygon:c});console.log("Polygon"),console.log(l),console.log("rebound"),console.log(o);var h=function(){function t(e){a(this,t);e.id;var n=e.radius,i=e.sides,s=e.depth,r=e.colors,o=e.alwaysForward,u=e.restAt,l=e.renderBase;i<3&&(console.warn("At least 3 sides required."),i=3),this._canvas=document.createElement("canvas"),this._canvas.style.backgroundColor=r.background,this._canvasW=null,this._canvasH=null,this._canvasOpacity=1,this._centerX=null,this._centerY=null,this._alwaysForward=o,this._restThreshold=u,this._renderBase=l,this._springRangeLow=0,this._springRangeHigh=this._restThreshold||1,this._basePolygon=new c(n,i,s,r),this._progress=0,this._isAutoSpin=null,this._isCompleting=null}return u(t,[{key:"init",value:function(t,e){this._addCanvas(),this._spring=t,this._addSpringListener(),this._isAutoSpin=e,e?this._spin():(this._spring.setEndValue(0),this.render())}},{key:"_addCanvas",value:function(){document.body.appendChild(this._canvas),this._context=this._canvas.getContext("2d"),this._setCanvasSize()}},{key:"_setCanvasSize",value:function(){this._canvasW=this._canvas.width=window.innerWidth,this._canvasH=this._canvas.height=window.innerHeight,this._canvas.style.position="fixed",this._canvas.style.top=0,this._canvas.style.left=0,this._centerX=this._canvasW/2,this._centerY=this._canvasH/2}},{key:"_addSpringListener",value:function(){var t=this;this._spring.addListener({onSpringUpdate:function(e){var n=e.getCurrentValue(),i=t._springRangeLow,s=t._springRangeHigh;n=r.MathUtil.mapValueInRange(n,0,1,i,s),t.render(n)}})}},{key:"setComplete",value:function(){this._isCompleting=!0}},{key:"_completeAnimation",value:function(){this._canvasOpacity-=.1,this._canvas.style.opacity=this._canvasOpacity,this._canvasOpacity<=0&&(this._isAutoSpin=!1,this._spring.setAtRest(),this._canvas.remove())}},{key:"_spin",value:function(){if(this._alwaysForward){var t=this._spring.getCurrentValue();this._restThreshold&&1===t&&this._switchSpringRange(),1===t&&this._spring.setCurrentValue(0).setAtRest()}this._spring.setEndValue(1===this._spring.getCurrentValue()?0:1)}},{key:"_switchSpringRange",value:function(){var t=this._restThreshold;this._springRangeLow=this._springRangeLow===t?0:t,this._springRangeHigh=this._springRangeHigh===t?1:t}},{key:"render",value:function(t){t&&(this._progress=Math.round(1e4*t)/1e4),this._isAutoSpin&&this._spring.isAtRest()&&this._spin(),this._isCompleting&&this._completeAnimation(),this._context.clearRect(0,0,this._canvasW,this._canvasH),this._context.save(),this._context.translate(this._centerX,this._centerY),this._context.lineWidth=1.5,this._renderBase&&this._basePolygon.render(this._context),this._basePolygon.renderChildren(this._context,this._progress),this._context.restore()}}]),t}(),p=Object.freeze({Spinner:h});console.log(p);var d={spring:null,spinner:null,initRebound:function(t){var e=t.rebound,n=new r.SpringSystem;d.spring=n.createSpring(e.tension,e.friction)},initSpinner:function(t){var e=t.spinner;d.spinner=new h(e)},init:function(t){d.initRebound(t),d.initSpinner(t),d.spinner.init(d.spring,!0),setTimeout((function(){d.spinner.setComplete()}),3e3)},loadSomething:function(){var t=new XMLHttpRequest;t.addEventListener("progress",(function(t){if(t.lengthComputable){var e=Math.ceil(t.loaded/t.total*100);console.log("ajax loding percent",e),d.spring.setEndValue(.01*e)}})),t.addEventListener("load",(function(t){d.spinner.setComplete()})),t.open("GET","/img/something.jpg"),t.send()}},f=function(t){function e(t){a(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.init=function(){d.init()},n.init=n.init.bind(n),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),u(e,[{key:"componentDidMount",value:function(){d.init(this.props.settings)}},{key:"render",value:function(){return null}}]),e}(s.Component);f.defaultProps={settings:{rebound:{tension:2,friction:5},spinner:{radius:80,sides:3,depth:4,colors:{background:"#000000",stroke:"#000000",base:"#222222",child:"#FFFFFF"},alwaysForward:!0,restAt:.5,renderBase:!0}}},e.a=f}).call(this,n("8oxB"),n("URgk").setImmediate)},"Y++M":function(t,e,n){"use strict";var i=n("DFzH"),s=n("dTG6"),r=n("kiRH");t.exports=function(t){for(var e=i(this),n=r(e.length),o=arguments.length,a=s(o>1?arguments[1]:void 0,n),u=o>2?arguments[2]:void 0,c=void 0===u?n:s(u,n);c>a;)e[a++]=t;return e}},YBdB:function(t,e,n){(function(t,e){n("8npG"),n("sc67"),function(t,n){"use strict";if(!t.setImmediate){var i,s,r,o,a,u=1,c={},l=!1,h=t.document,p=Object.getPrototypeOf&&Object.getPrototypeOf(t);p=p&&p.setTimeout?p:t,"[object process]"==={}.toString.call(t.process)?i=function(t){e.nextTick((function(){f(t)}))}:!function(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}()?t.MessageChannel?((r=new MessageChannel).port1.onmessage=function(t){f(t.data)},i=function(t){r.port2.postMessage(t)}):h&&"onreadystatechange"in h.createElement("script")?(s=h.documentElement,i=function(t){var e=h.createElement("script");e.onreadystatechange=function(){f(t),e.onreadystatechange=null,s.removeChild(e),e=null},s.appendChild(e)}):i=function(t){setTimeout(f,0,t)}:(o="setImmediate$"+Math.random()+"$",a=function(e){e.source===t&&"string"==typeof e.data&&0===e.data.indexOf(o)&&f(+e.data.slice(o.length))},t.addEventListener?t.addEventListener("message",a,!1):t.attachEvent("onmessage",a),i=function(e){t.postMessage(o+e,"*")}),p.setImmediate=function(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var s={callback:t,args:e};return c[u]=s,i(u),u++},p.clearImmediate=d}function d(t){delete c[t]}function f(t){if(l)setTimeout(f,0,t);else{var e=c[t];if(e){l=!0;try{!function(t){var e=t.callback,n=t.args;switch(n.length){case 0:e();break;case 1:e(n[0]);break;case 2:e(n[0],n[1]);break;case 3:e(n[0],n[1],n[2]);break;default:e.apply(void 0,n)}}(e)}finally{d(t),l=!1}}}}}("undefined"==typeof self?void 0===t?this:t:self)}).call(this,n("yLpj"),n("8oxB"))},n0hJ:function(t,e,n){var i=n("P8UN");i(i.P,"Array",{fill:n("Y++M")}),n("Dq1/")("fill")}}]);
//# sourceMappingURL=component---src-pages-index-js-f9e2f4f4d15731a4464b.js.map