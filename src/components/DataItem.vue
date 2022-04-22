<template>
    <div :class="acc_type"  class="container-item"  @click="enable_edit">
          <i :class="acc_icon" class="fa-3x"></i>
          <p class="title">{{ acc_name }}</p>
          <p style="font-size:1rem">Лимит: {{ acc_limit}}</p>
        <div class="container-item-actions" v-if="show_edit">
            <button ><i class="far fa-ban"></i>Удалить</button>
            <button><i class="far fa-edit"></i>Изменить</button>
        </div>
    </div>
</template>
<script>
export default{
  props:[
    'acc_name','acc_limit', 'acc_type', 'acc_icon'
 ],
  data(){
     return{
       show_edit: false
     }
  },
  methods:{
     enable_edit(){
       this.show_edit != this.show_edit
     }
  }
}
</script>
<style lang="scss">
    .container-item{
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
</style>