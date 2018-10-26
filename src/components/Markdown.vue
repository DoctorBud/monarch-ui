<template>
  <div>
    <slot/>
  </div>
</template>

<script>


export default {
  name: 'Markdown',

  mounted() {
    console.log('this.$slots.default', this.$slots.default[0]);
    this.$slots.default[0].innerHTML = '<h1>FOOO</h1>';
  }
};

</script>


<style lang="scss">
@import "~@/style/variables";

</style>
