<template>
  <div class="nav">
    <div class="container">
      <div class="nav-brand">My Finance Application</div>
      <div class="buttons">
        <button type="button" class="btn btn-light mlr-1" >
          <img src="@/assets/calculate.png" style="height:25px"/>&nbsp;
          Пересчет
        </button>
         <button type="button" class="btn btn-success mlr-1"  @click="this.$emit('add_account')">
          <img src="@/assets/add.png" style="height:25px"/>&nbsp;
          Добавить
        </button>
       
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "nav-bar",
  data() {
    return {
      acc_selected: "account-all",
    };
  },
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.nav {
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  border-bottom: 1px solid #6d6d6d;
  min-height: 64px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1020;
  background-color: rgba(58, 58, 58, 0.904);

  &-link {
    display: block;
    padding: 0.5rem 1rem;
    color: #fcfcfc;
    font-size: 1.5rem;
    text-decoration: none;
  }

  &-brand {
    display: block;
    padding: 0.5rem 1rem;
    color: #f0f0f0;
    font-size: 1.5rem;
    text-decoration: none;
  }

  form {
    width: 175px;
    padding: 0.3rem 1rem;
    margin-right: 10px;
  }

  .buttons {
    height: 100%;
    padding: 0.3rem 1rem;
    margin-right: 10px;
  }
  .mlr-1{
    margin-right: 3px;
    margin-left: 3px;
  }
}
.container {
  display: flex;
  flex-flow: row wrap;
  align-content: center;
  margin-left: auto;
  margin-right: auto;
  padding: 5px;
  width: 90%;
  max-width: 1450px;
  justify-content: space-between;
}
</style>