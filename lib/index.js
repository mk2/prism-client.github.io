require('insert-css')(require('./app.css'))

window.$ = window.jQuery = require("jquery");
require("bootstrap");

var Vue = require("vue"),
    Page = require("page"),
    Qs = require("qs");

var vm = new Vue({
    el: "#app",
    components: {
        navbar: require("./navbar-component")
    },
    template: require("./index.html"),
    data: {
        text: "ok, mum",
        prism_base_url: "http://localhost:13333",
        user: {
            id: "",
            name: "mk2",
            login_state: false
        }
    },
    created: function () {

        console.log("Start");

        Page("/", function (ctx, next) {

            next();
        });

        Page("/ghoauth", function (ctx, next) {

            var obj = Qs.parse(ctx.querystring),
                code = obj.code;

            console.log("code: ", code);

            next();
        });

        Page("*", function (ctx, next) {

            next();
        });

        Page({
            hashbang: true
        });

    }
});