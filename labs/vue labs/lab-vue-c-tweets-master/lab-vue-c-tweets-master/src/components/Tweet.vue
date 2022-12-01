<template>
  <div class="tweet">
   <ProfileImage :image="tweetProps.tweet.user.image"/>

    <div class="body">
      <div class="top">
        <User :user="tweetProps.tweet.user"/>
        <Timestamp :timestamp="tweetProps.tweet.timestamp"/>
       
      </div>
  <Message :message="tweetProps.tweet.message"/>
     
    <Actions/>
    </div>

    <i class="fas fa-ellipsis-h"></i>
  </div>
</template>

<script setup>
import ProfileImage from './ProfileImage.vue'
import User from './User.vue'
import Timestamp from './Timestamp.vue';
import Message from './Message.vue'
import Actions from './Actions.vue'

const tweetProps = defineProps({
  tweet: Object
  
})

</script>

<style scoped>
a {
  color: #42b983;
}
</style>
