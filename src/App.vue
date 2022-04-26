<template>
<div>
    <modal-window v-model:show="show_form">
      <add-account @after_create="account_created"/>
    </modal-window>
    <data-list 
    @add_account="display_form"
    @remove="remove_acc"/>

</div>
</template>
<script>
import DataList from './components/DataList.vue'
import ModalWindow from './components/ModalWindow.vue'
import AddAccount from './components/AddAccount.vue'
export default{
  
components:{
   DataList, ModalWindow, AddAccount
},

  data(){
    return {
     show_form: false,
     confirm_text:'',
     show_delete_alert: false
    }
  },
  methods:{
    display_form(){
        this.show_form = true;
    },
    account_created(){
      this.show_form = false;

    },
    remove_acc(row){
       if (confirm()){
          this.$store.dispatch('remove_data', row.id)
       }
    }
  },
}
</script>
<style lang="scss">
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
     

</style>