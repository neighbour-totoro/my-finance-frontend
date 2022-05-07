<template>
  <div class="transaction">
    <form @submit.prevent="true">
      <div>
        <label class="form-label">Сумма к списанию</label>
        <input type="number" min="0" class="form-control" />
      </div>
      <div style="margin-bottom: 20px">
        <label class="form-label">Откуда списывать</label>
        <select class="form-select">
          <option >
          </option>
        </select>
      </div>
      <div style="margin-bottom: 20px">
        <label class="form-label">Куда начислить</label>
        <select class="form-select">
          <option >
          </option>
        </select>
      </div>
      <button class="btn btn-secondary"  @click="this.$emit('close_window')">Закрыть</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {},
};
</script>
<style lang="scss" scoped>
</style>