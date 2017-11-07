<template>
		<li class="list-group-item">
			{{fileName}}
			<button type="button" class="btn btn-danger btn-xs pull-right" @click="removeNewFile">Delete</button>
			<input type="file" class="hidden" :name="inputFileName" @change="addNewFile" ref="actualFileField">
		</li>
</template>

<script type="text/javascript" >
  export default {
    name: 'file-upload',
    props: {
      inputFileName: {
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
          return this.file.fileName.replace(/\\/g, '/').replace(/.*\//, '');
        } else {
          return "[Select in progress...]";
        }
      }
    },
    methods: {
      addNewFile: function(event){
        this.file.fileName = event.target.value;
      },
      removeNewFile: function(){
        this.$emit("removeFile");
      }
    },
    mounted: function(){
      // alert('Should open file selector now');
      this.$refs.actualFileField.click();
    }
  }
</script>
