<template>
  <div class="form-container">
    <p style="font-size: 1.7rem; margin: 3px">{{ form_title }}</p>
    <form method="post" action="/account" @submit.prevent="true">
      <div>
        <label class="form-label">Название</label>
        <input
          type="text"
          class="form-control"
          maxlength="16"
          v-model="acc_name"
        />
      </div>
      <div>
        <label class="form-label">Лимит</label>
        <input type="number" class="form-control" min="0" v-model="acc_limit" />
      </div>
      <div
        style="display: flex; flex-direction: row; justify-content: flex-start"
      >
        <div v-if="!is_update">
          <label class="form-label">Тип баланса</label>
          <select class="form-select" v-model="acc_type">
            <option selected value="account-expense">Расход</option>
            <option value="account-revenue">Доход</option>
            <option value="account-asset">Счет</option>
          </select>
        </div>
        <div style="margin-left: 10px">
          <label class="form-label">Иконка</label>
          <select class="form-select" v-model="acc_icon">
            <option
              v-for="option in get_acc_icons"
              :key="option.id"
              :value="option.value"
            >
              {{ option.name }}
            </option>
          </select>
        </div>
        <div style="margin: 25px 0 0 20px">
          <i :class="acc_icon" class="fa-2x"></i>
        </div>
      </div>
      <p class="red">{{ form_error }}</p>
      <button
        class="btn btn-success m-2"
        @click="create_account"
        v-if="!is_update"
      >
        Добавить
      </button>
      <button
        class="btn btn-success m-2"
        @click="save_changes"
        v-if="is_update"
      >
        Сохранить и закрыть
      </button>
      <button class="btn btn-secondary m-2" @click="this.$emit('close_window')">
        Закрыть
      </button>
    </form>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props: {
    acc_data: {
      type: Array,
    },
    is_update: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      acc_name: "",
      acc_limit: 0,
      acc_type: "",
      acc_icon: "",
      form_error: "",
      form_title: "Добавление баланса",
    };
  },
  methods: {
    create_account() {
      if (this.acc_name.length < 3) {
        this.form_error = "Не заполнено поле: название";
      } else if (this.acc_limit.length == 0 || parseInt(this.acc_limit) < 0) {
        this.form_error = "Отсутсвует значение, либо значение меньше 0";
      } else if (this.acc_type == "") {
        this.form_error = "Не выбран тип баланса";
      } else if (this.acc_icon.length < 3) {
        this.form_error = "Отсутсвует иконка";
      } else {
        const new_acc = {
          icon: this.acc_icon,
          id: 0,
          name: this.acc_name,
          type: this.acc_type,
          limit: this.acc_limit,
        };
        this.$store.dispatch("set_data", new_acc);
        this.$emit("close_window");
      }
    },
    get_edit_data() {
      this.acc_name = this.acc_data.name;
      this.acc_limit = this.acc_data.limit;
      this.acc_type = this.acc_data.type;
      this.acc_icon = this.acc_data.icon;
      this.form_title = "Редактирование баланса";
    },
    save_changes() {
      if (this.acc_name.length < 3) {
        this.form_error = "Пустое поле: название";
      } else if (this.acc_limit.length == 0 || parseInt(this.acc_limit) < 0) {
        this.acc_limit = 0;
      } else {
        const upd_acc = {
          icon: this.acc_icon,
          id: this.acc_data.id,
          name: this.acc_name,
          type: this.acc_data.type,
          limit: this.acc_limit,
        };
        this.$store.dispatch("update_data", upd_acc);
        this.$emit("close_window");
      }
    },
  },
  mounted() {
    if (this.is_update) {
      this.get_edit_data();
    }
    this.$store.dispatch("get_icons");
  },
  computed: {
    ...mapGetters(["get_acc_icons"]),
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

form {
  div {
    margin-bottom: 10px;
  }
}

.form-control {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }

  &:focus {
    color: #212529;
    background-color: #fff;
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  }

  &::-webkit-date-and-time-value {
    height: 1.5em;
  }

  &::-moz-placeholder {
    color: #6c757d;
    opacity: 1;
  }

  &::placeholder {
    color: #6c757d;
    opacity: 1;
  }

  &[type="file"] {
    overflow: hidden;
  }

  &[type="file"]:not(:disabled):not([readonly]) {
    cursor: pointer;
  }

  &:disabled,
  &[readonly] {
    background-color: #e9ecef;
    opacity: 1;
  }
  &::-webkit-file-upload-button {
    padding: 0.375rem 0.75rem;
    margin: -0.375rem -0.75rem;
    -webkit-margin-end: 0.75rem;
    margin-inline-end: 0.75rem;
    color: #212529;
    background-color: #e9ecef;
    pointer-events: none;
    border-color: inherit;
    border-style: solid;
    border-width: 0;
    border-inline-end-width: 1px;
    border-radius: 0;
    -webkit-transition: color 0.15s ease-in-out,
      background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  &::file-selector-button {
    padding: 0.375rem 0.75rem;
    margin: -0.375rem -0.75rem;
    -webkit-margin-end: 0.75rem;
    margin-inline-end: 0.75rem;
    color: #212529;
    background-color: #e9ecef;
    pointer-events: none;
    border-color: inherit;
    border-style: solid;
    border-width: 0;
    border-inline-end-width: 1px;
    border-radius: 0;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
}

@media (prefers-reduced-motion: reduce) {
  .form-control::-webkit-file-upload-button {
    -webkit-transition: none;
    transition: none;
  }
  .form-control::file-selector-button {
    transition: none;
  }
}
.form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button {
  background-color: #dde0e3;
}
.form-control:hover:not(:disabled):not([readonly])::file-selector-button {
  background-color: #dde0e3;
}
.form-control::-webkit-file-upload-button {
  padding: 0.375rem 0.75rem;
  margin: -0.375rem -0.75rem;
  -webkit-margin-end: 0.75rem;
  margin-inline-end: 0.75rem;
  color: #212529;
  background-color: #e9ecef;
  pointer-events: none;
  border-color: inherit;
  border-style: solid;
  border-width: 0;
  border-inline-end-width: 1px;
  border-radius: 0;
  -webkit-transition: color 0.15s ease-in-out,
    background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-control::-webkit-file-upload-button {
    -webkit-transition: none;
    transition: none;
  }
}
.form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button {
  background-color: #dde0e3;
}

.form-container {
  display: flex;
  flex-flow: column wrap;
  width: 500px;
  padding: 5px;
  background-color: #fff;
  margin: auto;
}

.form-select {
  display: block;
  width: 100%;
  padding: 0.375rem 2.25rem 0.375rem 0.75rem;
  -moz-padding-start: calc(0.75rem - 3px);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
  color: #212529;
  background-color: #fff;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 16px 12px;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
  &:focus {
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  }
  &[multiple],
  &[size]:not([size="1"]) {
    padding-right: 0.75rem;
    background-image: none;
  }
  &:disabled {
    background-color: #e9ecef;
  }
  &:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 #212529;
  }
}
.form-label {
  margin-bottom: 0.5rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.5rem;
  color: #535353;
}

p.green {
  color: #4da000;
}

p.red {
  color: #aa0000;
  margin: 5px;
}
</style>