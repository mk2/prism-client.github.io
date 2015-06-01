module.exports = {
    template: require('./template.html'),
    replace:  true,
    inherit:  true,
    data:     function () {
        return {
        };
    },
    methods:  {


    },
    created:  function () {

    },
    computed: {

        github_login_url: function() {
            return this.prism_base_url + "/auth/github/login";
        }

    }
};