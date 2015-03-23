import Ember from "ember";

export default Ember.Route.extend({
    model: function() {
        var store = this.get("store");
        return $.getJSON("/api/todos").then(function(response) {
            response.forEach(function(data) {
                store.push("todo", data);
            });
            return store.find("todo");
        });
    }
});