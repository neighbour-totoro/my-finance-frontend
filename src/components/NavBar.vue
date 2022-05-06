<template>
  <div class="nav">
    <div class="container">
      <div class="nav-brand">My Finance Application</div>
      <div class="buttons">
        <button type="button" class="btn btn-light" @click="this.$emit('recharge')">
          <img src="@/assets/money_add.png" style="height:25px"/>&nbsp;
          Пополнить
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
  border-bottom: 1px solid #acacac;
  min-height: 64px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1020;
  background-color: #fff;

  &-link {
    display: block;
    padding: 0.5rem 1rem;
    color: #888787;
    font-size: 1.5rem;
    text-decoration: none;
  }

  &-brand {
    display: block;
    padding: 0.5rem 1rem;
    color: #888787;
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