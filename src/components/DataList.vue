<template>
   <div  class="container">
      <div v-for="row in results" :key="row.id" >
        <data-item 
        :acc_name="row.name" 
        :acc_type="row.type" 
        :acc_icon="row.icon"
        :acc_limit="row.limit"/>
      </div>  
      <button class="container-item-add" @click="add()">
        <img src='@/assets/add.png'>Добавить
      </button>
    </div>
</template>
<script>
import DataItem from './DataItem.vue'
export default{
  components:{
    DataItem
  },
  props:{
  results:{
     type: Array
  }
},
  data(){
    return {
    }

  },
 methods:{

 },
}
</script>
<style lang="scss">
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .container{
    display: flex;
    flex-flow: row wrap;
    padding: 15px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: rgb(85, 85, 85);
    max-width: 1400px;
    width:75%;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    

        &-title{
          font-size: 2rem;
        }


  }
  

  .actions{
     display: flex;
     flex-flow: row nowrap;
     margin-top: -1px;
     margin-right: 1px;
     font-size: 1rem;
     width: 100%;
     height: 20px;
     margin-top: -40px;
     margin-bottom: 20px;
     justify-content: space-around;
    
    button{
      border:0;
      width:auto;
      height:auto;
      color:#ffffff8c;
      background-color: transparent;
      font-size: 15px;

      &:hover{
        color:#fff;
      }

      &:active{
        text-decoration: underline;
      }
    }
  }
</style>