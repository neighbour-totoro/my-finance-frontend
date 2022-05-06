<template>
  <div class="form-container">
    <p style="font-size: 1.7rem; margin: 5px auto 10px auto">{{ form_title }}</p>
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
        <label class="form-label">Сумма</label>
        <input type="number" class="form-control" min="0" v-model="acc_limit" @change="limit_control"/>
      </div>
      <div
        style="display: flex; flex-direction: row; justify-content: flex-start"
      >
        <div v-if="!is_update">
          <label class="form-label">Тип баланса</label>
          <select class="form-select" v-model="acc_type" >
            <option 
            v-for="type in this.$store.state.types" 
            :key="type.value"  
            :value="type.value">{{ type.name }}</option>
          </select>
        </div>
        <div style="margin-left: 5px">
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
      default: () => []
    },
    is_update: {
      type: Boolean,
      default: false,
    },
    default_type:{
      type: String
    }
  },
  data() {
    return {
      acc_name: "",
      acc_limit: 0,
      acc_type: this.default_type,
      acc_icon: "far fa-wallet",
      form_error: "",
      form_title: "Добавление баланса",
    };
  },
  methods: {
    create_account() {
      if (this.acc_name.length < 3) {
        this.form_error = "Вы не указали название баланса (3 и более символов)";
      } else if (this.acc_type == "") {
        this.form_error = "Выберите тип баланса.Это важно";
      } else if (this.acc_icon.length < 3) {
        this.form_error = "Выберите иконку баланса";
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
        this.form_error = "Вы не указали название баланса. ";
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
    limit_control(){
      if ((parseInt(this.acc_limit) < 0) || (this.acc_limit.length == 0)){
        this.acc_limit = 0
      }
    }
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
    margin-bottom: 5px;
    width:380px
  }
}

p.green {
  color: #4da000;
}

p.red {
  color: #aa0000;
  margin-bottom: 5px
}
</style>