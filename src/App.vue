<template>
<div>
    <modal-window v-model:show="show_form">
      <add-account 
         @close_window="this.show_form=false"
         :acc_data="acc_id"
         :is_update="form_mode"
      />
    </modal-window>
    <data-list 
      @add_account="display_form"
      @remove="remove_acc"
      @edit="edit_acc"
    />
    <modal-window v-model:show="deletion_show" >
       <confirm-remove :acc_id="acc_id" 
       @close_window="this.deletion_show=false"/>
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
     acc_id: [],
     form_mode: false
    }
  },
  methods:{
    display_form(){
        this.acc_id=[]
         this.form_mode = false
        this.show_form = true;
    },
    remove_acc(data_item){
      this.deletion_show = true
      this.acc_id = data_item
          //this.$store.dispatch('remove_data', row.id)
    },
    edit_acc(data_item){
      this.acc_id = data_item
      this.form_mode = true
      this.show_form = true
      
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