<template>
	<div class="panel panel-default">
		<div class="panel-heading">
			<button type="button" class="btn btn-primary btn-block" @click="chooseFile">
				<i class="glyphicon glyphicon-plus"></i> Add a file
			</button>
		</div>

		<ul class="list-group">
			<file-upload v-for="file of files" :fieldName="fieldName" :file="file" @removeFile="removeFile(file)"/>
		</ul>
	</div>
</template>

<script type="text/javascript" >
  import FileUpload from './FileUpload'

  export default {
    name: 'files',
    components: {
      FileUpload
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
        var idx = this.files.indexOf(file);
        this.files.splice(idx, 1);
      }
    }
  }
</script>
