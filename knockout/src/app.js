import ko from 'knockout'

const vm = function vm(data) {
    const initialize = function() {

    }

    const
        objects = ko.observableArray([ 1,2,3 ]),
        gists = data.gists;

    initialize();

    return {
        objects: objects,
        gists: gists
    }
}

module.exports = vm