<template>
  <div class="container">
    <div class="container-body">
      <div>
      <img style="margin-top:5px;" src="@/assets/cross.png"></div>
      <div><p>Вы действительно хотите удалить баланс "{{ acc_id.name }}"?</p></div>
       
    </div>
    
    <div class="container-buttons">
      <button class="btn btn-danger" @click="remove_acc">Да, удалить</button>
      <button class="btn btn-secondary" @click="this.$emit('close_window')">Отмена</button>
    </div>
  </div>
</template>
<script>
export default{
  props:{
     acc_id:{
       require: true
     },
     acc_name:{
       type: String
     }
  },
  data(){
    return{}
  },
  methods:{
    remove_acc(){
      this.$store.dispatch('remove_data', this.acc_id.id)
      this.$emit('close_window')
    },
  }
}
</script>
<style lang="scss" scoped>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.container{
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 150px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.2rem;
  color: #3d3d3d;
  padding: 10px;

  &-body{
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    justify-content: space-around;
    align-items:center;

    div{
      margin:5px
    }
  }

  &-buttons{
     display: flex;
     flex-direction: row;
     justify-content: space-around;
     align-items: flex-end;
    
    button{
      margin: 5px;
    }
  }
}
</style>