/* var self = require('sdk/self');

// a dummy function, to show how tests work.
// to see how to test this function, look at test/test-index.js
function dummy(text, callback) {
  callback(text);
}

exports.dummy = dummy;
*/

var { ToggleButton } = require('sdk/ui/button/toggle');
var panels = require("sdk/panel");
var sidePanel = require("sdk/panel");
var self = require("sdk/self");

var button = ToggleButton({
    id: "my-button",
    label: "my button",
    icon: {
        "16": "./icon-16.png",
        "32": "./icon-32.png",
        "64": "./icon-64.png"
    },
    onChange: handleChange
});



// Data for panel
var panel = panels.Panel({
    width: 250,
    height: 400,
    contentURL: self.data.url("dropDownPanelOptions.html"),
    onHide: handleHide
});

/*var sidePanel = panels.Panel({
    contentURL: self.data.url(""),
    onHide: handleHide
}); */


// Actions for the buttons
function handleChange(state) {
    if (state.checked) {
        panel.show({
            position: button
        });
    }
}

function handleHide() {
      button.state('window', {checked: false});
}
