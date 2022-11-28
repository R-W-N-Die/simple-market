<template>
  <teleport to="body">
    <div class="position-absolute npm install vue-tailwind --save w-100 h-100 bg-black d-flex justify-center align-content-center">
      <div class="position-absolute d-flex align-content-lg-space-between border-b-lg">
        <slot name="header"></slot>
        <button class="mdi-cursor-pointer">X</button>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  name: "Dialog"
}
</script>

<style scoped>

</style>