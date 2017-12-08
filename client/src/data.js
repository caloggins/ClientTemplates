import $ from 'jQuery'
import ko from 'knockout'

const data = function data() {
    const gists = ko.observable()

    return {
        gists: gists
    }
}

module.exports = data