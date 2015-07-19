var currentfontsize = 14;

	function changebackgroundcolorthingy(element){
		if (element == 'body')
		{

			if (/^[0-9A-F]{6}$/i.test(document.getElementById('ohmygodmyfaceisonfirehelpmeplease').value))
			{
				var bckcolor = document.getElementById('ohmygodmyfaceisonfirehelpmeplease').value;
			
				// document.body.style.background = "#" + bckcolor;
				addon.port.emit('body-color', bckcolor);
			}
		}
		
	}

	function changebackgroundcol234234orthingy(element){
		if (element == 'body')
		{

			if (/^[0-9A-F]{6}$/i.test(document.getElementById('ohmygodmyfaceisonfire234234helpmeplease').value))
			{
				var bckcolor = document.getElementById('ohmygodmyfaceisonfire234234helpmeplease').value;
				// document.body.style.color = "#" +  bckcolor;
				addon.port.emit('font-color', bckcolor);
			}
		}

	}

	function setFontSizeToTheNumberEntered(element)
	{
		if (element == 'body')
		{

			if (/^\d+$/.test(document.getElementById("thisistheidthatwillbeusedforthefontsizebox").value))
			{
				var numberEntered = document.getElementById("thisistheidthatwillbeusedforthefontsizebox").value;
				// document.body.style.fontSize = numberEntered + "px";
                currentfontsize = numberEntered;
				addon.port.emit('font-size', numberEntered);
			}

		}

	}

	function upfontsizebyone(element)
	{
		if (element == 'body')
		{

		currentfontsize++;
		document.getElementById("thisistheidthatwillbeusedforthefontsizebox").value = currentfontsize;
		addon.port.emit('increase-font', currentfontsize + "px"); 

		}
	}

	function downfontsizebtone(element)
	{
		if (element == 'body')
		{
		currentfontsize--;
		document.getElementById("thisistheidthatwillbeusedforthefontsizebox").value = currentfontsize;
		addon.port.emit('decrease-font', currentfontsize + "px"); 

		}
	}

	function resetthesitestuff()
	{
		document.getElementById("thisistheidthatwillbeusedforthefontsizebox").value = 14;
		document.getElementById('ohmygodmyfaceisonfire234234helpmeplease').value = "000000";
		document.getElementById('ohmygodmyfaceisonfirehelpmeplease').value = "FFFFFF";
		addon.port.emit('reset-page', "");
	}

	function youclickedastaplerwhywouldyoudothat()
	{
		addon.port.emit('go-to-settings', "");
	}

	// content-script.js

	self.port.on("bgcolor", handleMessage);

	function handleMessage(message) 
	{
  		document.body.style.background = message;
	}