<script setup>
import mainComp from './components/mainComp.vue';
import cardAddPopup from './components/cardAddPopup.vue';
import {useCounterStore} from './stores/counter.js'

const store = useCounterStore();
</script>

<template>
  <mainComp />
  <cardAddPopup v-if="store.popupFlag == true"/>
</template>
