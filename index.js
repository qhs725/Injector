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
var tabs = require("sdk/tabs");

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
    width: 300,
    height: 200,
    contentURL: self.data.url("emitter.html"),
    onHide: handleHide
});

/* var sidePanel = panels.Panel({
    contentURL: self.data.url("emitter.html"),
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


// When the panel is displayed it generated an event called
// "show": we will listen for that event and when it happens,
// send our own "show" event to the panel's script, so the
// script can prepare the panel for display.
panel.on("show", function() {
    panel.port.emit("show");
});

// Listen for messages called "text-entered" coming from
// the content script. The message payload is the text the user
// entered.
// In this implementation we'll just log the text to the console.
panel.port.on("body-color", function (text) {
    console.log(text);
    require("sdk/tabs").activeTab.attach({
contentScript: 'document.body.style.background= ' + '"#' + text + '";'
    });
});

panel.port.on("font-color", function (text) {
    console.log(text);
    require("sdk/tabs").activeTab.attach({
    contentScript: 'document.body.style.color= ' + '"#' + text + '";'
    });
});

panel.port.on("font-size", function (text) {
    console.log(text);
    require("sdk/tabs").activeTab.attach({
    contentScript: 'document.body.style.fontSize= "' + text + 'px";'
    });
});

panel.port.on("decrease-font", function (text) {
    console.log(text);
    require("sdk/tabs").activeTab.attach({
    contentScript: 'document.body.style.fontSize= "' + text + '";'
    });
});

panel.port.on("increase-font", function (text) {
    console.log(text);
    require("sdk/tabs").activeTab.attach({
    contentScript: 'document.body.style.fontSize= "' + text + '";'
    });
});
