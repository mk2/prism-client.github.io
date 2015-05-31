module.exports = {
    template: require('./template.html'),
    replace: true,
    inherit: true,
    data: function () {
        return {
            github_login_url: ""
        };
    },
    methods: {

        willGetGithubOAuthInfo: function () {

            var self = this;

            return $.ajax({
                url: self.prism_base_url + "/ghoauth/",
                dataType: "json"
            });
        }

    },
    created: function () {

        var self = this;

        this.willGetGithubOAuthInfo().done(function (data, status, jqxhr) {

            console.log("Given github oauth settings: ", data);

            self.github_login_url =
                data.oauth_entry_url +
                "?client_id=" + data.client_id +
                "&state=" + encodeURIComponent(data.state);

        }).fail(function (err) {

            console.error(err);

        });

    },
    computed: {

    }
};