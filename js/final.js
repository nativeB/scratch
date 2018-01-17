// JavaScript Document

$(document).ready(function () {
	var lineNumbers = [];
	var code1 = $("#htmledit")[0];
	var htmlCodeMirror = CodeMirror.fromTextArea(code1, {
		mode: "xml",
		htmlMode: true,
		theme: "dracula",

	});

	htmlCodeMirror.setSize("100%", "600px")

	var code2 = $("#jsedit")[0];
	var jsCodeMirror = CodeMirror.fromTextArea(code2, {
		mode: "javascript",
		theme: "dracula",



	});

	jsCodeMirror.setSize("100%", "600px")
	console.log("worksjs");

	var code3 = $("#cssedit")[0];
	var cssCodeMirror = CodeMirror.fromTextArea(code3, {
		mode: "css",
		theme: "dracula",

	});




	cssCodeMirror.setSize("100%", "600px");



	loadallcache();


	$('#loadhtmlbtn,#loadcssbtn,#loadjsbtn').on('click', function () {
		var x = $(this).attr("id");
		switch (x) {
			case 'loadhtmlbtn':
				console.log($(this).attr("id"));
				$('#loadhtml').click();
				break;

			case 'loadcssbtn':
				console.log($(this).attr("id"));
				$('#loadcss').click();
				break;
			case 'loadjsbtn':
				console.log($(this).attr("id"));
				$('#loadjs').click();
				break;
			default:
				return false;
		}


	});

	$('#loadhtml').on('change', function () {
		var reader = new FileReader();
		reader.onload = function (e) {
			htmlCodeMirror.setValue(e.target.result);
		};
		reader.readAsText(this.files[0]);

	});

	$('#loadcss').on('change', function () {
		var reader = new FileReader();
		reader.onload = function (e) {
			cssCodeMirror.setValue(e.target.result);
		};
		reader.readAsText(this.files[0]);

	});

	$('#loadjs').on('change', function () {
		var reader = new FileReader();
		reader.onload = function (e) {
			jsCodeMirror.setValue(e.target.result);
		};
		reader.readAsText(this.files[0]);

	});


	//make gerneral forall tabs and add save bttngeneral for all tabs


	$('#savehtml,#savecss,#savejs').on('click', function () {
		var x = $(this).attr("id");
		switch (x) {
			case 'savehtml':
				shtml();
				break;

			case 'savecss':
				scss();
				break;
			case 'savejs':
				sjs();

				break;
			default:
				return false;
		}


	});







	function shtml() {
		if ('Blob' in window) {

			var fileName = prompt('Please enter file name to save', 'Untitled.html');
			console.log(cssCodeMirror.getValue());

			if (fileName) {
				var html;

				if (confirm("would you like to add css and js links") == true) {
					var fileName1 = prompt('Please file name of css', 'Untitled.css');
					var fileName2 = prompt('Please file name of js', 'Untitled.js');
					var string1 = "</body>";
					var reg1 = new RegExp(string1);

					var string2 = "</head>";
					var reg2 = new RegExp(string2);

					var input = htmlCodeMirror.getValue();
					var output1 = input.replace(reg1, "<script src='" + fileName2 + "' type='text/javascript'>");

					var output2 = output1.replace(reg2, "<link rel='stlesheet' href='" + fileName1 + "'></head>");




					html = output2;
				} else {
					html = htmlCodeMirror.getValue();
				}



				var textFileAsBlob = new Blob([html], {
					type: 'text/html'
				});

				if ('msSaveOrOpenBlob' in navigator) {
					navigator.msSaveOrOpenBlob(textFileAsBlob, fileName);
				} else {
					var downloadLink = document.createElement('a');
					downloadLink.download = fileName;
					downloadLink.innerHTML = 'Download File';

					if ('webkitURL' in window) {
						// Chrome allows the link to be clicked without actually adding it to the DOM.
						downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
					} else {
						// Firefox requires the link to be added to the DOM before it can be clicked.
						downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
						downloadLink.click(function () {
							document.body.removeChild(event.target);
						});

						downloadLink.style.display = 'none';
						document.body.appendChild(downloadLink);
					}
					downloadLink.click();
				}
			}



		} else {
			alert('Your browser does not support the HTML5 Blob.');
		}
	}



	function scss() {
		if ('Blob' in window) {
			var fileName = prompt('Please enter file name to save', 'Untitled.css');
			if (fileName) {
				var html = cssCodeMirror.getValue();
				var textFileAsBlob = new Blob([html], {
					type: 'text/css'
				});

				if ('msSaveOrOpenBlob' in navigator) {
					navigator.msSaveOrOpenBlob(textFileAsBlob, fileName);
				} else {
					var downloadLink = document.createElement('a');
					downloadLink.download = fileName;
					downloadLink.innerHTML = 'Download File';

					if ('webkitURL' in window) {
						// Chrome allows the link to be clicked without actually adding it to the DOM.
						downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
					} else {
						// Firefox requires the link to be added to the DOM before it can be clicked.
						downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
						downloadLink.click(function () {
							document.body.removeChild(event.target);
						});

						downloadLink.style.display = 'none';
						document.body.appendChild(downloadLink);
					}
					downloadLink.click();
				}
			}
		} else {
			alert('Your browser does not support the HTML5 Blob.');
		}
	}



	function sjs() {
		if ('Blob' in window) {
			var fileName = prompt('Please enter file name to save', 'Untitled.js');
			if (fileName) {
				var html = jsCodeMirror.getValue();
				var textFileAsBlob = new Blob([html], {
					type: 'text/js'
				});

				if ('msSaveOrOpenBlob' in navigator) {
					navigator.msSaveOrOpenBlob(textFileAsBlob, fileName);
				} else {
					var downloadLink = document.createElement('a');
					downloadLink.download = fileName;
					downloadLink.innerHTML = 'Download File';

					if ('webkitURL' in window) {
						// Chrome allows the link to be clicked without actually adding it to the DOM.
						downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
					} else {
						// Firefox requires the link to be added to the DOM before it can be clicked.
						downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
						downloadLink.click(function () {
							document.body.removeChild(event.target);
						});

						downloadLink.style.display = 'none';
						document.body.appendChild(downloadLink);
					}
					downloadLink.click();
				}
			}
		} else {
			alert('Your browser does not support the HTML5 Blob.');
		}

	}









	$('select').on('change', function () {
		htmlCodeMirror.setOption('theme', this.value);
		jsCodeMirror.setOption('theme', this.value);
		cssCodeMirror.setOption('theme', this.value);
	});


	var p = $("#preview").contents().find("body");
	p.css("margin", "2px");
	p.html('<span id="subinsbdotcomhtmlpr"></span><style id="subinsbdotcomcsspr"></style>');
	$('#htmltab').on('keyup', function () {
		var heditor = htmlCodeMirror.getValue();
		p.find("#subinsbdotcomhtmlpr").html(heditor);
	});

	$("#csstab").on('keyup', function () {
		console.log('works');
		var ceditor = cssCodeMirror.getValue();
		p.find("#subinsbdotcomcsspr").html(ceditor);
	});
	$("#jstab").on('keyup', function (e) {
		console.log(String.fromCharCode(e.keyCode));
		var jeditor = jsCodeMirror.getValue();
		p.find("#subinsbdotcomjspr").remove();
		p.append('<script type="text/javascript" id="subinsbdotcomjspr">' + jeditor + '</script>');
		
	});
	$("#upjs").on('click', function () {
		var jeditor = jsCodeMirror.getValue();
		p.find("#subinsbdotcomjspr").remove();
		p.append('<script type="text/javascript" id="subinsbdotcomjspr">' + jeditor + '</script>');
	});
	
	
	
	
	
	setInterval(saveallcache,30000);

function saveallcache(){
		console.log("workedn");
		var jscache=jsCodeMirror.getValue(),
	        csscache=cssCodeMirror.getValue(),
			htmlcache=htmlCodeMirror.getValue();
	
	localStorage.setItem('jscache2',jscache);
	localStorage.setItem('csscache',csscache);
	localStorage.setItem('htmlcache',htmlcache);
	
	
	
	console.log("works1");
}


	
	
	
	

function loadallcache(){
	
console.log("loaded");
	var appendjs = localStorage.getItem('jscache2');
	var appendcss = localStorage.getItem('csscache');
	var appendhtml = localStorage.getItem('htmlcache');
	if(appendcss &&appendjs && appendhtml)
		{
			jsCodeMirror.setValue(appendjs);
		cssCodeMirror.setValue(appendcss);
		htmlCodeMirror.setValue(appendhtml);
		}
		else{
			saveallcache();
		}
	
}

function removeMy() {

document.getElementById('textfield').value = '';
localStorage.removeItem('text');
}
	
	




	
	
	
	
	
	

	$('#fullhtml').click(function () {
		$('#htmltab').toggleClass('fullscreen');
		var full = $('#htmltab').hasClass('fullscreen');
		if (full) {
			htmlCodeMirror.setSize("100%", "100%")
			$('#fullhtml').text("normal")
		} else {
			htmlCodeMirror.setSize("100%", "600px")
			$('#fullhtml').text("fullscreen")
		}
	});
	$('#fullcss').click(function () {
		$('#csstab').toggleClass('fullscreen');
		var full = $('#csstab').hasClass('fullscreen');
		if (full) {
			cssCodeMirror.setSize("100%", "100%");
			$('#fullcss').text("normal");
		} else {
			cssCodeMirror.setSize("100%", "600px");
			$('#fullcss').text("fullscreen");
		}
	});
	$('#fulljs').click(function () {
		$('#jstab').toggleClass('fullscreen');
		var full = $('#jstab').hasClass('fullscreen');
		if (full) {
			jsCodeMirror.setSize("100%", "100%");
			$('#fulljs').text("normal");
		} else {
			jsCodeMirror.setSize("100%", "600px");
			$('#fulljs').text("fullscreen");
		}
	});
	$('#outfull').click(function () {
		$('#preview').toggleClass('fullscreenframe');
	});

	
	
	
	
	

	
});




function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
	document.getElementById("main").style.marginLeft = "250px";

}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
	document.getElementById("main").style.marginLeft = "0";

}

function opencode(evt, tabsname) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(tabsname).style.display = "block";
	evt.currentTarget.className += " active";
}
