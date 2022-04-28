<template>
<div class="nav">

</div>
</template>
<script>
export default{
  name: 'nav-bar',
  data(){
    
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
}



</style>