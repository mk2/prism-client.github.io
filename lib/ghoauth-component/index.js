module.exports = {

    template: require("./template.html"),
    replace:  true,
    inherit:  true,
    data:     function () {
        return {};
    },
    created: function() {
        console.log("currentCtx: ", this.currentCtx);
    }

};