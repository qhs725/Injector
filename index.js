
// var myFirstVariable = "Jet fuel can't melt steel beams";
var { ToggleButton } = require('sdk/ui/button/toggle');
var panels = require("sdk/panel");
var sidePanel = require("sdk/panel");
var self = require("sdk/self");
var tabs = require("sdk/tabs");

// button in the menu bar
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



// Data for drop down menu 
var panel = panels.Panel({
    width: 245,
    height: 280,
    contentURL: self.data.url("emitter.html"),
    onHide: handleHide
});

// This will show the dropdown menu
function handleChange(state) {
    if (state.checked) {
        panel.show({
            position: button
        });
    }
}

// Hide button
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

// Listen for messages called "body-color" coming from
// the content script. The text var is the css value being passed.
panel.port.on("body-color", function (text) {
    console.log(text);

    //require("sdk/tabs").activeTab.attach({
    //     contentScript: 'document.body.style.background= ' + '"#' + text + '";'
    //});

    setBackgroundColor('#' + text);
});


// same as previous function
panel.port.on("font-color", function (text) {
    console.log(text); 
    setFontColor('#' + text);
});

// same as previous function
panel.port.on("font-size", function (text) {
    console.log(text);
    setFontSize(text);
});

// same as previous function
panel.port.on("decrease-font", function (text) {
    console.log(text);
    require("sdk/tabs").activeTab.attach({
        contentScript: 'document.body.style.fontSize= "' + text + '";'
    });
});

// same as previous function
panel.port.on("increase-font", function (text) {
    console.log(text);
    require("sdk/tabs").activeTab.attach({
        contentScript: 'document.body.style.fontSize= "' + text + '";'
    });
});



// Simple function to set our css elements
// Called with 
// setBackGroundColor("#000111");
// where the hex value is a string
function setBackgroundColor(hexColor) {
    require("sdk/tabs").activeTab.attach({
        contentScript: 'document.body.style.background= "' + hexColor + '";'
    });
}

function setFontColor(hexColor) {
    require("sdk/tabs").activeTab.attach({
        contentScript: 'document.body.style.color= "' + hexColor + '";'
    });
}

function setFontSize(fontSize) {
    require("sdk/tabs").activeTab.attach({
    contentScript: 'document.body.style.fontSize= "' + fontSize + 'px";'
    });
}
