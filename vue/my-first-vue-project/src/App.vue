<script setup>
import HelloWorld from './components/HelloWorld.vue'
import FirstComponent from './components/vue-basics/FirstComponent.vue';
import OnclickVue from './components/vue-basics/Onclick.vue';
import Conditional from './components/vue-basics/Conditional.vue'
import Computed from './components/vue-basics/Computed.vue'
</script>

<template>
  <div>
  <header>
   

    <div class="wrapper">
      <HelloWorld msg="My name is Santi!" />
    </div>
  </header>

  <main>
    
   <FirstComponent /> 
   <Conditional/>
  
  </main>
  <Onclick/>

  <h2>Computed</h2>
  <Computed/>
</div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
