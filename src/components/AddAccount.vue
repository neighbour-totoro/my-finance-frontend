<template>
    <div class="form-container" >
      <p style="font-size: 1.7rem; margin:3px">Добавление баланса</p>
      <form method="post" action="/account" @submit.prevent="true">
        <div>
          <label class="form-label">Название</label>
          <input 
            type="text"  
            class="form-control" 
            maxlength="16" 
            v-model="acc_name"
            required
          >
        </div>
        <div>
          <label class="form-label">Лимит</label>
          <input 
            type="number" 
            class="form-control" 
            min="0"
            v-model="acc_limit"
          >
        </div>
        <div style="display:flex; flex-direction:row; justify-content:flex-start">
          <div >
          <label class="form-label">Тип баланса</label>
          <select class="form-select" v-model="acc_type" required>
            <option selected value="account-expense">Расход</option>
            <option value="account-revenue">Доход</option>
            <option value="account-asset">Счет</option>
          </select>
        </div><div style="margin-left:10px">
          <label class="form-label">Иконка</label>
            <select class="form-select" v-model="acc_icon" required>
            <option selected value="far fa-wallet">Wallet</option>
            <option value="far fa-credit-card-front">Credit card</option>
            <option value="far fa-money-bill-wave">Money Bill</option>
            <option value="far fa-coins">Coins</option>
            <option value="far fa-receipt">Receipt</option>
            <option value="far fa-money-check-alt">Money check</option>
            <option value="far fa-badge-dollar">Dollar</option>
            <option value="far fa-badge-percent">Percent</option>
            <option value="far fa-bus">Bus</option>
            <option value="far fa-globe">Globe</option>
            <option value="far fa-graduation-cap">Graduation cap</option>
            <option value="far fa-briefcase">Briefcase</option>
            <option value="far fa-university">University</option>
            <option value="far fa-balance-scale">Balance scale</option>
            <option value="far fa-shopping-cart">Shopping cart</option>
            <option value="far fa-shopping-basket">Shopping basket</option>
            <option value="far fa-running">Running</option>
            <option value="far fa-cloud-music">Cloud music</option>
            <option value="far fa-film">Film</option>
            <option value="far fa-popcorn">Popcorn</option>
            <option value="far fa-gift">Gift</option>
            <option value="far fa-theater-masks">Theater masks</option>
            <option value="far fa-book-alt">Book</option>
            <option value="far fa-burger-soda">Burger and soda</option>
            <option value="far fa-utensils-alt">Utensils</option>
            <option value="far fa-cheeseburger">Cheeseburger</option>
            <option value="far fa-coffee-togo">Coffee</option>
            <option value="far fa-wine-bottle">Wine</option>
            <option value="far fa-dog">Dog</option>
            <option value="far fa-cat">Cat</option>
            <option value="far fa-desktop">Desktop</option>
            <option value="far fa-mobile-alt">Mobile</option>
            <option value="far fa-headphones">Headphones</option>
          </select></div>
          <div style="margin: 25px 0 0 20px"><i :class="acc_icon" class="fa-2x"></i></div>
          
        </div>
        <p class="red">{{ form_error }}</p>
          <button class="btn btn-primary" @click='create_account'>Добавить</button>
      </form>
    </div>
</template>
<script>
export default{

  data(){
    return {
       acc_name: '',
       acc_limit: 0,
       acc_type: '',
       acc_icon: '',
       form_error:''
    }
  },
  methods: {
    create_account(){
      try{
        const new_acc = {
              icon: this.acc_icon, 
              id: 0,
              name: this.acc_name,
              type: this.acc_type,
              limit:this.acc_limit,
         }
        this.$store.dispatch('set_data', new_acc)
        this.$emit('after_create')
         } catch(e){
        this.form_error = 'При выполнении запроса произошла ошибка'
      }
      
    },
  },
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

  
form{
    div{
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

    &[type=file] {
  overflow: hidden;
}

    &[type=file]:not(:disabled):not([readonly]) {
      cursor: pointer;
    }


    &:disabled, &[readonly] {
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
      -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
      transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
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
      transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
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
  -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
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

.form-container{
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
    &[multiple], &[size]:not([size="1"]) {
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
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.5rem;
  color:#535353
}

p.green{
  color:#4da000;
}

p.red{
  color:#a10000;
}


</style>