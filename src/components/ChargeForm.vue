<template>
  <div>
    <p style="font-size: 1.7rem; margin: 5px auto 10px auto">Пополнение</p>
    <form @submit.prevent="true">
      <div>
        <label class="form-label">Сумма дохода</label>
        <input type="number" min="0" class="form-control" />
      </div>
      <div style="margin-bottom: 20px">
        <label class="form-label">Источник</label>
        <select class="form-select">
          <option v-for="row in revenue_acc" :key="row.id" :value="row.id">
            {{ row.name }}
          </option>
        </select>
      </div>
      <button class="btn btn-success" style="margin-right: 5px">
        Добавить
      </button>
      <button class="btn btn-secondary" @click="this.$emit('close_window')">
        Закрыть
      </button>
    </form>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {},
  mounted() {
    this.$store.dispatch("get_data");
  },
  computed: {
    ...mapGetters(["get_results"]),
    revenue_acc: function () {
      var result = this.get_results.filter(function (item) {
        if (item.expirationDate === null && item.type === "account-revenue") {
          return true;
        }
        return false;
      });
      return result;
    },
  },
};
</script>
<style lang="scss">
</style>