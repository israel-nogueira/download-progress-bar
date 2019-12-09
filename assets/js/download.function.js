	downloadFile = function(opcoes) {
		var options =  Object.assign({}, {
			typeSend: "GET",
			file: null,
			newfile: null,
			abort: function(e) {},
			error: function(e) {},
			load: function(e) {},
			finish: function(e) {},
			progress: function(e) {}
		}, opcoes);

		if(options.file == null) {
			alert("Por favor, dê um nome ao arquivo...");
			return false
		}
		$.ajax({
			xhr: function() {
				var xhr = new window.XMLHttpRequest();
				xhr.withCredentials = false;
				xhr.responseType 	= "arraybuffer";
				xhr.addEventListener("abort", function() {options.abort() })
				xhr.addEventListener("error", function() {options.error() })
				xhr.addEventListener("loadend", function() {options.finish() })
				xhr.addEventListener("load", function() {
					var file_type = xhr.getResponseHeader('Content-Type');
					var disposition = xhr.getResponseHeader('Content-Disposition');
					if(disposition && disposition.indexOf('attachment') !== -1) {
						var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
						var matches = filenameRegex.exec(disposition);
						if(matches != null && matches[1]) filename = matches[1].replace(/['"]/g, '');
					} else {
						filename = options.file.replace(/^.*[\\\/]/, '')
					}
					window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
					window.URL = window.URL || window.webkitURL;
					var arrayBufferView = new Uint8Array(this.response);
					var blob = new Blob([arrayBufferView], {type: file_type});
					var urlCreator = window.URL || window.BlobBuilder;
					var imageUrl = urlCreator.createObjectURL(blob);
					var a = document.createElement("a");
					document.body.appendChild(a);
					a.href = imageUrl;
					if(options.newfile != null) {
						a.download = options.newfile;
					} else {
						a.download = filename;
					}
					a.click();
					options.load()
				}, false);
				xhr.addEventListener("progress", function(evt) {
					if(evt.lengthComputable) {
						var percentComplete = Math.floor((evt.loaded / evt.total) * 100);
						options.progress(percentComplete)
					}
				}, false);
				return xhr;
			},
			type: options.typeSend,
			url: options.file
		});
	}
