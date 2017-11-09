var MyFileUpload = {
	template: '#my-file-upload-template',
	props: {
		fieldName: {
			type: String,
			required: true
		},
		file: {
			type: Object,
			required: true
		}
	},
	computed: {
		fileName: function () {
			// only keep filename (remove absolute path)
			if (this.file.fileName) {
				return this.file.fileName.replace(/\\/g, '/').replace(/.*\//, '')
			} else {
				return 'No file selected'
			}
		}
	},
	methods: {
		selectFile: function (event) {
			this.file.fileName = event.target.value
		},
		removeFile: function () {
			this.$emit("removeFile")
		}
	},
	mounted: function () {
    this.$refs.actualFileField.click()
	}
}

Vue.component('files', {
	template: '#my-files-template',
	components: {
		'file-upload': MyFileUpload
	},
	props: {
		fieldName: {
			type: String,
			required: true
		}
	},
	data: function () {
		return {
			files: []
		}
	},
	methods: {
		chooseFile: function () {
			this.files.push({fileName: 'Select in progress...'})
		},
		removeFile: function (file) {
			var idx = this.files.indexOf(file)
			this.files.splice(idx, 1)
		}
	}
})

function initApp (elemId) {
	return new Vue({
		el: '#' + elemId,
		template: '<files fieldName="myFiles"/>'
	})
}

