require('insert-css')(require('./app.css'))

window.$ = window.jQuery = require("jquery");
require("bootstrap");

var Vue = require("vue");

new Vue({
    el: "#app",
    components: {
        navbar: require("./navbar-component")
    },
    template: require("./index.html"),
    data: {
        text: "ok, mum"
    }
});