<template>
  <span class="user">
          <span class="name">{{propsUser.user.name}}</span>
          <span class="handle">@{{propsUser.user.handle}}</span>
        </span>
</template>

<script setup>

const propsUser = defineProps({
    user:Object
})


</script>

<style>

</style>