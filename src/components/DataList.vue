<template>
  <div class="data-list">
    <div class="title">{{ acc_types.name_plural }}
      <div>
        <div v-if="acc_types.value=='account-revenue'">             
          <button class="btn btn-light mlr-1">Перевод</button>
           <button  class="btn btn-light mlr-1" @click="this.$emit('recharge')">
          <img src="@/assets/money_add.png" style="height:25px"/>&nbsp;
          Пополнить
        </button>
       </div>
        <div v-else>
          <button class="btn btn-light" @click="this.$emit('set_transaction')">Ввести расход</button>
       </div>
       
       </div>
    </div>
    <div class="container">
      <div v-for="acc in filtered_acc" v-bind:key="acc.id">
        <data-item
          v-if="acc.type == acc_types.value"
          :acc="acc"
          @remove="$emit('remove', acc)"
          @edit="$emit('edit', acc)"
        />
      </div>
    </div>
  </div>
</template>
<script>
import DataItem from "./DataItem.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    DataItem,
  },
  props: {
    acc_types: {
      type: String,
    },
  },
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("get_data");
  },
  computed: {
    ...mapGetters(["get_results"]),

    filtered_acc: function () {
      return this.get_results.filter(function (item) {
        if (item.expirationDate == null) {
          return true;
        }
        return false;
      });
    },
  },
  watch: {
    ...mapGetters(["get_results"]),
  },
};
</script>
<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.data-list {
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  margin-top:20px;
  margin-bottom: 10px;

  .title {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    //border-bottom: 1px solid #dfdcdc;
    width:85%;
    max-width: 1250px;
    font-size: 1.8rem;
    padding: 5px;
    color: #777676;
    margin-top: 5px;


      @media (max-width: 991px) {
        width: 75%;
     }
  @media (max-width: 768px) {
    width: 80%;
    padding: 10px;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
  }
  
}

.container {
  display: flex;
  flex-flow: row wrap;
  padding: 25px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: rgb(85, 85, 85);
  max-width: 1250px;
  align-items: center;
  justify-content: flex-start;
  margin-left: auto;
  margin-right: auto;

  &-title {
    font-size: 2rem;
  }

  @media (max-width: 991px) {
    width: 75%;
  }
  @media (max-width: 768px) {
    width: 80%;
    padding: 10px;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
}
.container-item-add {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 0px;
  background-color: transparent;
  padding: 20px;
  margin: 8px;
  width: 220px;
  height: 200px;
  font-size: 1.3rem;

  &:hover {
    border: 1px solid #9b9b9b;
    border-radius: 5px;
    background-color: #fff;
  }

  &:active {
    border: 1px solid #9b9b9b;
    border-radius: 5px;
    background-color: #b9b7b7;
  }
}

.actions {
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

  button {
    border: 0;
    width: auto;
    height: auto;
    color: #ffffff8c;
    background-color: transparent;
    font-size: 15px;

    &:hover {
      color: #fff;
    }

    &:active {
      text-decoration: underline;
    }
  }
}
  .mlr-1{
    margin-right: 3px;
    margin-left: 3px;
  }
</style>