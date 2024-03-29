require('insert-css')(require('./app.css'))

window.$ = window.jQuery = require("jquery");
require("bootstrap");

var Vue  = require("vue"),
    Page = require("page"),
    Qs   = require("qs");

var vm = new Vue({

    el: "#app",

    components: {
        navbar:  require("./navbar-component"),
        ghoauth: require("./ghoauth-component"),
        top:     require("./top-component")
    },

    template: require("./index.html"),

    data: {

        currentView: "top",
        currentCtx:  {},

        prism_base_url: "http://localhost:13333",

        user: {
            id:          "",
            name:        "mk2",
            login_state: false
        },

        github_oauth: {
            code:  "",
            state: ""
        }

    },

    created: function () {

        var self = this;

        Page("/", function (ctx, next) {

            var obj = Qs.parse(ctx.querystring);

            if (typeof obj.code !== "undefined") {
                self.github_oauth.code  = obj.code;
                self.github_oauth.state = obj.state;
                self.currentCtx         = ctx;
                self.currentView        = "ghoauth";

                next();
            } else {

                next();
            }

        });

        Page("*", function (ctx, next) {

            next();
        });

        Page();

    },

    computed: {

        github_login_url: function () {
            return this.prism_base_url + "/auth/github/login";
        },


        github_callback_url: function () {
            return this.prism_base_url + "/auth/github/callback";
        }

    }
});