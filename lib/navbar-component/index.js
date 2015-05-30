module.exports = {
    template: require('./template.html'),
    replace: true,
    inherit: true,
    data: function () {
        return {
            github_login_url: "https://github.com/login/oauth/authorize?client_id="
        };
    }
};