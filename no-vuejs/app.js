function FileUploadComponent (containerNode, parentComponent) {
	var self = this
	var templateNode = document.getElementById('my-file-upload-template')
	var contentNode = document.importNode(templateNode.content, true).children[0]
	var filenameNode = contentNode.children[1]
	var buttonNode = contentNode.children[2]
	var inputNode = contentNode.children[3]

	this.updateFilename = function () {
		var filename
		if (inputNode.value) {
			filename = inputNode.value.replace(/\\/g, '/').replace(/.*\//, '')
		} else {
			filename = 'No file selected'
		}
		filenameNode.innerText = filename
	}
	this.removeFile = function () {
		parentComponent.removeFile(self)
		containerNode.removeChild(contentNode)
	}

	filenameNode.innerText = 'No file selected'
	buttonNode.onclick = this.removeFile
	inputNode.onchange = this.updateFilename

	containerNode.appendChild(contentNode)
	inputNode.click()
}

function FilesComponent (containerNode) {
	var self = this
	var templateNode = document.getElementById('my-files-template')
	var contentNode = document.importNode(templateNode.content, true).children[0]
	var buttonNode = contentNode.children[0].children[0] // <button>
	var listNode = contentNode.children[1] // <ul>

	this.files = []

	this.addFile = function () {
		var file = new FileUploadComponent(listNode, self)
		self.files.push(file)
	}
	this.removeFile = function (file) {
		var idx = self.files.indexOf(file)
		self.files.splice(idx, 1);
	}

	buttonNode.onclick = this.addFile

	containerNode.appendChild(contentNode)
}

function initApp (elemId) {
	var elem = document.getElementById(elemId)
	if (elem) {
		return new FilesComponent(elem)
	}
}

