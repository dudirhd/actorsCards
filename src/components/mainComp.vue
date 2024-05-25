<script setup>
import {useCounterStore} from '../stores/counter.js'
import { getAll } from '../axios.js'
import { onMounted } from 'vue';

const store = useCounterStore();

onMounted(() => {
  getAll()
})

const deleteFunc = (index) => {
  let a = 0;
  store.cardsInfo.forEach((i) => {
    if (i.id == index) {
      store.cardsInfo.splice(a, 1);
    }
    a += 1;
  })
}
</script>

<template>

<div class="main-content">
  <header>
    <h1 class="main-content-heading">Актеры by "Залипуха" team</h1>    
  </header>
  <div class="main-content-cards-container">
    <h1 class="no-cards-mark" v-if="store.cardsInfo.length == 0">Карточек нет, добавьте новые(((((</h1>
    <div
      v-for="i in store.cardsInfo" 
      :key="i"
      class="card"
    > 
      <div class="svg-delete" @click="deleteFunc(i.id)">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white"viewBox="0 0 24 24">
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
          <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
        </svg> 
      </div>   
      <img :src='i.photo' alt=""> 
      <div class="shadow"></div>
      <div class="card-text">
        <h3>{{ i.name }}</h3>
        <p>{{ i.description }}</p>
      </div>
    </div>
  </div>
  <button class="newcard-btn" @click="store.popupFlag = true">Добавить еще одну карточку</button>
</div>



<div class='light x1'></div>
<div class='light x2'></div>
<div class='light x3'></div>
<div class='light x4'></div>
<div class='light x5'></div>
<div class='light x6'></div>
<div class='light x7'></div>
<div class='light x8'></div>
<div class='light x9'></div>

</template>

<style>
.main-content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
}

header {
  background: rgb(249, 198, 207, 0.7);   
  border-radius: 40px;
  padding: 20px;
  text-align: center;
}

.main-content-heading {
  font-weight: 600;

}

.main-content-cards-container {
  background: rgb(249, 198, 207, 0.7);   
  border-radius: 40px;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr ;
  gap: 20px;
  justify-items: center;
  min-height: 40px;
}

.no-cards-mark {
  position: absolute;
}

.card {
  height: 300px;
  width: 200px;
  background: transparent;
  border-radius: 20px;
  position: relative;
  color: #F19CBB;
  display: flex;
  align-items: end;
  text-align: center;
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
}

.shadow {
  background: transparent;
  background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.55) 35%, rgba(0,212,255,0) 100%);
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  z-index: 2;
}

.card-text {
  margin-bottom: 0;
  margin-top: auto;
  padding: 0 5px 10px 5px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  text-align: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  z-index: 3;
}

.card-text h3 {
  text-transform: uppercase;
}

.svg-delete {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10;
  cursor: pointer;
}

.svg-delete svg {
  width: 100%;
  height: 100%;
}

body {
  margin: 0;
  height: 100%;
  background: radial-gradient(#a23982,#1f1013);
  -webkit-animation: fadeIn 1 1s ease-out;
  -moz-animation: fadeIn 1 1s ease-out;
  -o-animation: fadeIn 1 1s ease-out;
  animation: fadeIn 1 1s ease-out;
}

button{
  border: 2px solid white;
  background: transparent;
  font-family: 'Roboto', sans-serif;
  color: white;
  width: 250px;
  height: 50px;
  font-size: 1em;
  border-radius: 5px;
  opacity: .5;
  top: 60vh;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin: auto;
  transition: .3s;
}

button:hover{
  border: 2px solid #104F55;
  background-color: rgba(365,365,365,0.5);
  cursor: pointer;
  color: #104F55;
  opacity: .8;
  transition: .3s;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.light {
    position: absolute;
    width: 0px;
    opacity: .75;
    background-color: white;
    box-shadow: #e9f1f1 0px 0px 20px 2px;
    opacity: 0;
    top: 100vh;
    bottom: 0px;
    left: 0px;
    right: 0px;
    margin: auto;
    z-index: -4;
}

.x1{
  -webkit-animation: floatUp 4s infinite linear;
  -moz-animation: floatUp 4s infinite linear;
  -o-animation: floatUp 4s infinite linear;
  animation: floatUp 4s infinite linear;
   -webkit-transform: scale(1.0);
   -moz-transform: scale(1.0);
   -o-transform: scale(1.0);
  transform: scale(1.0);
}

.x2{
  -webkit-animation: floatUp 7s infinite linear;
  -moz-animation: floatUp 7s infinite linear;
  -o-animation: floatUp 7s infinite linear;
  animation: floatUp 7s infinite linear;
  -webkit-transform: scale(1.6);
  -moz-transform: scale(1.6);
  -o-transform: scale(1.6);
  transform: scale(1.6);
  left: 15%;
}

.x3{
  -webkit-animation: floatUp 2.5s infinite linear;
  -moz-animation: floatUp 2.5s infinite linear;
  -o-animation: floatUp 2.5s infinite linear;
  animation: floatUp 2.5s infinite linear;
  -webkit-transform: scale(.5);
  -moz-transform: scale(.5);
  -o-transform: scale(.5);
  transform: scale(.5);
  left: -15%;
}

.x4{
  -webkit-animation: floatUp 4.5s infinite linear;
  -moz-animation: floatUp 4.5s infinite linear;
  -o-animation: floatUp 4.5s infinite linear;
  animation: floatUp 4.5s infinite linear;
  -webkit-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -o-transform: scale(1.2);
  transform: scale(1.2);
  left: -34%;
}

.x5{
  -webkit-animation: floatUp 8s infinite linear;
  -moz-animation: floatUp 8s infinite linear;
  -o-animation: floatUp 8s infinite linear;
  animation: floatUp 8s infinite linear;
  -webkit-transform: scale(2.2);
  -moz-transform: scale(2.2);
  -o-transform: scale(2.2);
  transform: scale(2.2);
  left: -57%;
}

.x6{
  -webkit-animation: floatUp 3s infinite linear;
  -moz-animation: floatUp 3s infinite linear;
  -o-animation: floatUp 3s infinite linear;
  animation: floatUp 3s infinite linear;
  -webkit-transform: scale(.8);
  -moz-transform: scale(.8);
  -o-transform: scale(.8);
  transform: scale(.8);
  left: -81%;
}

.x7{
  -webkit-animation: floatUp 5.3s infinite linear;
  -moz-animation: floatUp 5.3s infinite linear;
  -o-animation: floatUp 5.3s infinite linear;
  animation: floatUp 5.3s infinite linear;
  -webkit-transform: scale(3.2);
  -moz-transform: scale(3.2);
  -o-transform: scale(3.2);
  transform: scale(3.2);
  left: 37%;
}

.x8{
  -webkit-animation: floatUp 4.7s infinite linear;
  -moz-animation: floatUp 4.7s infinite linear;
  -o-animation: floatUp 4.7s infinite linear;
  animation: floatUp 4.7s infinite linear;
  -webkit-transform: scale(1.7);
  -moz-transform: scale(1.7);
  -o-transform: scale(1.7);
  transform: scale(1.7);
  left: 62%;
}

.x9{
  -webkit-animation: floatUp 4.1s infinite linear;
  -moz-animation: floatUp 4.1s infinite linear;
  -o-animation: floatUp 4.1s infinite linear;
  animation: floatUp 4.1s infinite linear;
  -webkit-transform: scale(0.9);
  -moz-transform: scale(0.9);
  -o-transform: scale(0.9);
  transform: scale(0.9);
  left: 85%;
}

button:focus{
  outline: none;
}

@-webkit-keyframes floatUp{
  0%{top: 100vh; opacity: 0;}
  25%{opacity: 1;}
  50%{top: 0vh; opacity: .8;}
  75%{opacity: 1;}
  100%{top: -100vh; opacity: 0;}
}
@-moz-keyframes floatUp{
  0%{top: 100vh; opacity: 0;}
  25%{opacity: 1;}
  50%{top: 0vh; opacity: .8;}
  75%{opacity: 1;}
  100%{top: -100vh; opacity: 0;}
}
@-o-keyframes floatUp{
  0%{top: 100vh; opacity: 0;}
  25%{opacity: 1;}
  50%{top: 0vh; opacity: .8;}
  75%{opacity: 1;}
  100%{top: -100vh; opacity: 0;}
}
@keyframes floatUp{
  0%{top: 100vh; opacity: 0;}
  25%{opacity: 1;}
  50%{top: 0vh; opacity: .8;}
  75%{opacity: 1;}
  100%{top: -100vh; opacity: 0;}
}












@-webkit-keyframes fadeIn{
  from{opacity: 0;}
  to{opacity: 1;}
}

@-moz-keyframes fadeIn{
  from{opacity: 0;}
  to{opacity: 1;}
}

@-o-keyframes fadeIn{
  from{opacity: 0;}
  to{opacity: 1;}
}

@keyframes fadeIn{
  from{opacity: 0;}
  to{opacity: 1;}
}

@-webkit-keyframes fadeOut{
  0%{opacity: 0;}
  30%{opacity: 1;}
  80%{opacity: .9;}
  100%{opacity: 0;}
}

@-moz-keyframes fadeOut{
  0%{opacity: 0;}
  30%{opacity: 1;}
  80%{opacity: .9;}
  100%{opacity: 0;}
}

@-o-keyframes fadeOut{
  0%{opacity: 0;}
  30%{opacity: 1;}
  80%{opacity: .9;}
  100%{opacity: 0;}
}

@keyframes fadeOut{
  0%{opacity: 0;}
  30%{opacity: 1;}
  80%{opacity: .9;}
  100%{opacity: 0;}
}

@-webkit-keyframes finalFade{
  0%{opacity: 0;}
  30%{opacity: 1;}
  80%{opacity: .9;}
  100%{opacity: 1;}
}

@-moz-keyframes finalFade{
  0%{opacity: 0;}
  30%{opacity: 1;}
  80%{opacity: .9;}
  100%{opacity: 1;}
}

@-o-keyframes finalFade{
  0%{opacity: 0;}
  30%{opacity: 1;}
  80%{opacity: .9;}
  100%{opacity: 1;}
}

@keyframes finalFade{
  0%{opacity: 0;}
  30%{opacity: 1;}
  80%{opacity: .9;}
  100%{opacity: 1;}
}
</style>
