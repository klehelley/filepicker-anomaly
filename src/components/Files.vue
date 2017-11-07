<template>
	<div class="panel panel-default">

		<div class="panel-heading">
			<button type="button" class="btn btn-primary btn-block" @click="chooseNewFile">
				<i class="glyphicons glyphicons-plus"></i> Add a file
			</button>
		</div>

		<ul class="list-group">
			<template v-for="newFile of newFiles">
				<file-upload :inputFileName="inputFileName" :file="newFile" @removeFile="removeNewFile(newFile)"/>
			</template>
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
      inputFileName: {
        type: String,
        required: true
      },
      files: {
        type: Array
      }
    },
    data: function(){
      return {
        newFiles: []
      }
    },
    methods: {
      chooseNewFile: function() {
        this.newFiles.push({fileName : ""})
      },
      removeNewFile: function(file) {
        var idx = this.newFiles.indexOf(file);
        this.newFiles.splice(idx, 1);
      }
    }
  }
</script>
