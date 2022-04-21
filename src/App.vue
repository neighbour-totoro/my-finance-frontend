<template>
<div >
    <data-list v-model:results="results"/>
</div>
</template>
<script>
import DataList from './components/DataList.vue'
import axios from 'axios';
export default{
  
components:{
   DataList
},

  data(){
    return {
     results: []
    }
  },
  methods:{
   get_accounts(){
      axios.get('http://localhost:8081/account')
      .then(response => (this.results = response.data));
   }
  },
  mounted(){
    this.get_accounts()
  }
}
</script>
<style lang="scss">
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
     

</style>