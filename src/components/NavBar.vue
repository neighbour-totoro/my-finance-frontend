<template>
<div class="nav">
  <div class="container">
    <div class="nav-brand">My Finance Application</div>
    <div>
      <form>
     <select class="form-select" v-model="acc_selected" @change="this.$emit('sort_list', acc_selected)">
       <option  value="account-all">Все балансы</option>
            <option 
            v-for="type in this.$store.state.types" 
            :key="type.value"  
            :value="type.value">{{ type.name }}</option>
          </select></form></div>
  </div>
</div>
</template>
<script>
export default{
  name: 'nav-bar',
  data(){
    return{
      acc_selected: 'account-all'
    }
  }
}
</script>
<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.nav {
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  border-bottom: 1px solid #acacac;
  min-height: 64px;

    &-link {
    display: block;
    padding: 0.5rem 1rem;
    color: #888787;
    font-size: 1.5rem;
    text-decoration: none;
   }

   &-brand{
     display: block;
    padding: 0.5rem 1rem;
    color: #888787;
    font-size: 1.5rem;
    text-decoration: none;
   }

   form{
     width: 170px;
     padding: 0.3rem 1rem;
     margin-right: 10px;
   }
}
 .container{
    display: flex;
    flex-flow: row wrap;
    align-content: center;
    margin-left: auto;
    margin-right: auto;
    padding:5px;
    width: 90%;
    max-width: 1450px;
    justify-content: space-between;
  }


</style>