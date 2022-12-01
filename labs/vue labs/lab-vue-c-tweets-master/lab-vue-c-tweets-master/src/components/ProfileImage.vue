<template>
  
  <img 
      :src="tweetProps.image"
      class="profile"
      alt="profile"
    />
</template>



<script setup>
const tweetProps = defineProps({
  image: String
  
})
</script>

<style>

</style>