<template>
<div>
    <modal-window v-model:show="show_form">
      <add-account @after_create="account_created"/>
    </modal-window>
    <data-list v-model:results="results" @add_account="display_form"/>
</div>
</template>
<script>
import DataList from './components/DataList.vue'
import ModalWindow from './components/ModalWindow.vue'
import AddAccount from './components/AddAccount.vue'
import axios from 'axios';
export default{
  
components:{
   DataList, ModalWindow, AddAccount
},

  data(){
    return {
     results: [],
     show_form: false,
    }
  },
  methods:{
   get_accounts(){
      axios.get('http://localhost:8081/account')
      .then(response => (this.results = response.data));
   },
   display_form(){
      this.show_form = true;
   },
   account_created(){
     this.show_form = false;
     this.get_accounts()
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