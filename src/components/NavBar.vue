<template>
<div class="nav">
  <div class="container">
    <ul>
      <li><a href="https://uk8aoo.uz/ob_avtore">435 MHz</a></li>
    </ul>
  </div>
</div>
</template>
<script>
export default{
  name: 'nav-bar',
  data(){
    return{
      
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
  list-style: none;
  border-bottom: 1px solid #acacac;
  height: 64px;

    &-link {
    display: block;
    padding: 0.5rem 1rem;
    color: #0d6efd;
    text-decoration: none;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
  }

  .container{
    margin-left: auto;
    margin-right: auto;
    padding:5px;
    width: 80%;
    list-style: none;
    max-width: 1450px;
  }
}



</style>