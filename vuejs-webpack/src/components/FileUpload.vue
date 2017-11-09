<template>
	<li class="list-group-item">
		<i class="glyphicon glyphicon-file"></i>
		{{fileName}}
		<button type="button" class="btn btn-danger btn-xs pull-right" @click="removeFile">
			<i class="glyphicon glyphicon-remove"></i> <span class="sr-only">Remove</span>
		</button>
		<input type="file" class="hidden" :name="fieldName" @change="selectFile" ref="actualFileField">
	</li>
</template>

<script type="text/javascript" >
  export default {
    name: 'file-upload',
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
      fileName: function(){
        if(this.file.fileName){
          return this.file.fileName.replace(/\\/g, '/').replace(/.*\//, '')
        } else {
          return ''
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
</script>
