<template>
  <div class="dialog" v-if="show" @click.stop="hideDialog"> 
      <div @click.stop class="dialog__content">
        <slot></slot>
      </div>
    </div>
</template>
<script>
export default{
    name: 'modal-window',
    props:{
      show:{
        type: Boolean,
        default: false
      }
    },
  data(){
    
  },
  methods: {
    hideDialog(){
      this.$emit('update:show', false)
    }
  }
}
</script>
<style lang="scss">
.dialog{
  top:0;
  bottom: 0;
  left: 0;
  right:0;
  background-color: #22222270;
  display:flex;
  position: fixed;
  flex-direction: column;
  justify-content: center;
}

.dialog__content {
  margin: auto;
  background: white;
  border-radius: 12px;
  min-height: 50px;
  min-width: 300px;
  padding: 20px;
}

</style>