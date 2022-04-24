<template>
    <div 
     :class="acc.type"  
     class="container-item" 
     @click="enable_edit"
    >
          <i :class="acc.icon" class="fa-3x"></i>
          <p class="title">{{ acc.name }}</p>
          <p style="font-size:1rem">Лимит: {{ acc.limit}}</p>
        <div class="container-item-actions" v-if="show_edit" @click.stop>
            <button @click="$emit('remove', acc)"><i class="far fa-ban"></i>Удалить</button>
            <button><i class="far fa-edit"></i>Изменить</button>
        </div>
    </div>
</template>
<script>
export default{
  props:[
    'acc'
 ],
  data(){
     return{
       show_edit: false
     }
  },
  methods:{
     enable_edit(){
       this.show_edit = !this.show_edit
     },
     remove(){
       this.$emit('remove_acc')
     }
  }
}
</script>
<style lang="scss" scoped>
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
           box-shadow:0px 0px 3px 2px rgb(196, 196, 196);
         }

        &-actions{
          width:100%;
          height: 70px;
          display: flex;
          flex-flow: column nowrap;
          margin-bottom: -20px;
          justify-content: space-around;
          padding:3px;

          button{
            width:100%;
            height: 30px;
            background-color: #00000069;
            color: rgb(214, 214, 214);
            border: none;

            &:hover{
              background-color: #00000098;
              color:#fff;
            }

            &:active{
              background-color: #c9c9c998;
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
</style>