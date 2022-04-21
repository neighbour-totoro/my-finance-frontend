<template>
   <div  class="container">
      <div v-for="row in results" :key="row.id" >
        <div :class="row.type"  class="container-item">
          <div class="actions" v-if="show_edit_buttons">
            <button @click="remove(row)">
              <i class="far fa-ban">
                </i>Удалить
              </button>
            <button><i class="far fa-edit"></i>Изменить</button>
            
        </div>
          <i :class="row.icon" class="fa-3x"></i>
          <p class="title">{{ row.name }}</p>
          <p style="font-size:1rem">Лимит: {{ row.limit}}</p>
        </div>
       
      </div>  
      <button class="container-item-add" @click="add()">
        <img src='@/assets/add.png'>Добавить
      </button>
       <button class="container-item-add" @click="edit_enable()">
        <img src='@/assets/node_design.png'>Редактировать 
      </button>

    </div>
</template>
<script>
import axios from 'axios';
export default{
  data(){
    return {
       results: [],
       show_edit_buttons: false,
    }

  },
  mounted() {
    this.get_accounts()
 },
 methods:{
   add() {
     this.$emit('create_account')
   },

   edit_enable(){
     this.show_edit_buttons = !this.show_edit_buttons
   },

   get_accounts(){
      axios.get('http://localhost:8081/account')
      .then(response => (this.results = response.data));
   },

   remove(){
     axios.delete('http://localhost:8081/account', {params: {'id': this.account.id}})
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

        &-item{
          display: flex;
          flex-flow: column nowrap;
          align-items: center;
          justify-content: center;
          border: 0.12rem solid #9b9b9b;
          border-radius:5px;
          align-content: space-around;
          padding: 10px;
          margin: 8px;
          width: 220px;
          height:200px;
          font-size: 1.1rem;
          font-weight: 400;
          transition-property: box-shadow;
          transition-duration: 0.4s;

          .title{
            font-size: 1.3rem;
            margin: 5px;
          }

         &:hover{
           border: 2px solid #8d8d8d5b;
           box-shadow:0px 0px 3px 2px darkgrey;
         }

         &-add{
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border: 0px;
          background-color: transparent;
          padding: 20px;
          margin: 8px;
          width: 220px;
          height:200px;
          font-size: 1.3rem;

              &:hover{
                border: 1px solid #9b9b9b;
                border-radius:5px;
                background-color: #fff;
            }

              &:active{
                border: 1px solid #9b9b9b;
                border-radius:5px;
                background-color: #b9b7b7;
            }
         }
      }
  }
  
    .account-asset{
      background-color: #3767b1bb;
      color: #fff;
    }
    .account-revenue{
      background-color: #67941f;
      color: #fff;
    }
    .account-expense{
      background-color: #691c27;
      color: #fff;
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