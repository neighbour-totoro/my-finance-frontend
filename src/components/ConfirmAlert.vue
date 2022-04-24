<template>
  <div class="alert-body">
    <p>{{ alert_message }}</p>
    <div class="button-container">
     <button>Да</button>
     <button>Нет</button>

    </div>
  </div>
</template>
<script>
export default{
  props:[
    'alert_message'],
  data(){
    
  },
  methods:{
    accept(){
      this.$emit('confirm', true)
    },
    decline(){
      this.$emit('confirm', false)
    }
  }
}
</script>
<style lang="scss" scoped>
.alert-body{
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  padding: 10px;
  width: 300px;
  height: 150px;
  
  p{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.3rem;
    color:#3d3d3d;

  }

  .button-container{
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    justify-content: center;

    button{
      margin:5px;
      min-width:64px;
      height: 28px;
    }
  }

}
</style>