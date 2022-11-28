<template>
  <teleport to="body">
    <div class="absolute bg-black">
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