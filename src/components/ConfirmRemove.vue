<template>
  <div class="container">
    <div class="container-body">
      <div>
      <img src="@/assets/cross.png"></div>
      <div><p>Вы действительно хотите удалить баланс?</p></div>
       
    </div>
    
    <div class="container-buttons">
      <button class="btn btn-danger" @click="remove_acc">ОК</button>
      <button class="btn btn-secondary" @click="this.$emit('update:show', false)">Отмена</button>
    </div>
  </div>
</template>
<script>
export default{
  props:{
     acc_id:{
       require: true
     },

  },
  data(){
    
  },
  methods:{
    remove_acc(){
      this.$store.dispatch('remove_data', this.acc_id)
      this.$emit('update:show', false)
    }
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
  font-size: 1rem;
  color: #3d3d3d;
  padding: 10px;

  &-body{
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    justify-content: space-around;
    align-items: center;

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