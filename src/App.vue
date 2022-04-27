<template>
<div>
    <modal-window v-model:show="show_form">
      <add-account @after_create="account_created"/>
    </modal-window>
    <data-list 
    @add_account="display_form"
    @remove="remove_acc"/>
    <modal-window v-model:show="deletion_show">
       <confirm-remove :acc_id="acc_id"/>
    </modal-window>
</div>
</template>
<script>
import DataList from './components/DataList.vue'
import ModalWindow from './components/ModalWindow.vue'
import AddAccount from './components/AddAccount.vue'
import ConfirmRemove from './components/ConfirmRemove.vue'
export default{
  
components:{
   DataList, ModalWindow, AddAccount, ConfirmRemove
},
  data(){
    return {
     show_form: false,
     confirm_text:'',
     deletion_show: false,
     acc_id: -1
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
      this.deletion_show = true
      this.acc_id = row.id
          //this.$store.dispatch('remove_data', row.id)

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