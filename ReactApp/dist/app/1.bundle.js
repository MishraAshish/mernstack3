(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{48:function(e,t,a){"use strict";a.r(t);var r=a(2),o=a(0),n=a.n(o),c=a(24);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(a){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=p(a);return e=r?(e=p(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),t=this,!(e=e)||"object"!==l(e)&&"function"!=typeof e?m(t):e}}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var o=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(o,n.a.Component);var e,t,a,r=i(o);function o(e,t){var a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),f(m(a=r.call(this)),"captureValueFromTextBoxes",function(e){var t=e.target,e=t.classList;e.contains("pname")?a.setState({name:t.value}):e.contains("price")?a.setState({price:parseInt(t.value)}):e.contains("camera")?a.setState({camera:t.value}):e.contains("color")?a.setState({color:t.value}):e.contains("display")?a.setState({display:t.value}):a.setState({ram:t.value})}),f(m(a),"saveProduct",function(){console.log(a.state),a.props.saveProduct(a.state)}),a.state={name:e.defaultProd.name,price:e.defaultProd.price,camera:e.defaultProd.camera,ram:e.defaultProd.ram,display:e.defaultProd.display,color:e.defaultProd.color},a}return e=o,(t=[{key:"componentWillReceiveProps",value:function(e){console.log("this - ",e),this.setState({name:e.defaultProd.name,price:e.defaultProd.price,camera:e.defaultProd.camera,ram:e.defaultProd.ram,display:e.defaultProd.display,color:e.defaultProd.color})}},{key:"render",value:function(){return n.a.createElement("section",{className:"componentClass"},n.a.createElement("div",{className:"form col-md-8"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("b",null,"Product Name"),n.a.createElement("input",{type:"text",className:"form-control col-md-6 pname",value:this.state.name,placeholder:"Product Name",onChange:this.captureValueFromTextBoxes})),n.a.createElement("div",{className:"col-md-12"},n.a.createElement("b",null,"Price "),n.a.createElement("input",{type:"number",className:"form-control col-md-6 price",value:this.state.price,placeholder:"Product Price",onChange:this.captureValueFromTextBoxes})),n.a.createElement("div",{className:"col-md-12"},n.a.createElement("b",null,"Camera "),n.a.createElement("input",{type:"text",className:"form-control col-md-6 camera",value:this.state.camera,placeholder:"Camera",onChange:this.captureValueFromTextBoxes})),n.a.createElement("div",{className:"col-md-12"},n.a.createElement("b",null,"RAM "),n.a.createElement("input",{type:"text",className:"form-control col-md-6 ram",value:this.state.ram,placeholder:"ram",onChange:this.captureValueFromTextBoxes})),n.a.createElement("div",{className:"col-md-12"},n.a.createElement("b",null,"Display "),n.a.createElement("input",{type:"text",className:"form-control col-md-6 display",value:this.state.display,placeholder:"Display",onChange:this.captureValueFromTextBoxes})),n.a.createElement("div",{className:"col-md-12"},n.a.createElement("b",null,"Color "),n.a.createElement("input",{type:"text",className:"form-control col-md-6 color",value:this.state.color,placeholder:"Color",onChange:this.captureValueFromTextBoxes})),n.a.createElement("input",{type:"button",className:"btn btn-primary col-md-3",value:"Save Product",onClick:this.saveProduct})),n.a.createElement("br",null),n.a.createElement("hr",null),n.a.createElement(c.a,null))}}])&&u(e.prototype,t),a&&u(e,a),o}(),d=a(5);t.default=Object(r.b)(function(e){return{defaultProd:e.product.defaultProduct}},function(t){return{saveProduct:function(e){t(Object(d.saveProduct)(e))}}})(o)}}]);