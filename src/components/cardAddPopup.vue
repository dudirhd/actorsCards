<template>
  <div class="popup-shadow" @click="store.popupFlag = false"></div>
  <div class="card-add-popup-comp">
    <div class="popup-header">
      <h2>Добавление карточки</h2>
      <div class="svg" @click="store.popupFlag = false">
        <svg class="svg-icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M810.65984 170.65984q18.3296 0 30.49472 12.16512t12.16512 30.49472q0 18.00192-12.32896 30.33088l-268.67712 268.32896 268.67712 268.32896q12.32896 12.32896 12.32896 30.33088 0 18.3296-12.16512 30.49472t-30.49472 12.16512q-18.00192 0-30.33088-12.32896l-268.32896-268.67712-268.32896 268.67712q-12.32896 12.32896-30.33088 12.32896-18.3296 0-30.49472-12.16512t-12.16512-30.49472q0-18.00192 12.32896-30.33088l268.67712-268.32896-268.67712-268.32896q-12.32896-12.32896-12.32896-30.33088 0-18.3296 12.16512-30.49472t30.49472-12.16512q18.00192 0 30.33088 12.32896l268.32896 268.67712 268.32896-268.67712q12.32896-12.32896 30.33088-12.32896z"  /></svg>
      </div>
    </div>
    <input placeholder="Напишите Имя Актера" class="popup-input" type="text">
    <input placeholder="Напишите в каком фильме вы его видели" class="popup-input" type="text">
    <input placeholder="Добавьте ссылку на его фото" class="popup-input" type="text">
    <button class="btn" @click="store.popupFlag = false">Добавить</button>
  </div>
</template>

<script setup>
import {useCounterStore} from '../stores/counter.js'

const store = useCounterStore();
</script>

<style scoped>
.popup-shadow {
  position: fixed;
  top:      0;
  right:     0;
  width:    100vw;
  height:   100vh;
  z-index:  10;
  background-color: rgba(0, 0, 0, 0.4);
}
.card-add-popup-comp {
  z-index:   20;
  width: 400px;
  border-radius: 24px;
  position:  fixed;
  top:       50%;
  left:      50%;
  transform: translate(-50%, -50%);
  padding:   16px;
  background-color:  white;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
}

.popup-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
}

.svg {
  cursor: pointer;
}

.popup-input {
  width: 92%;
  height: 30px;
  border-radius: 16px;
  border: 1px solid #F19CBB;
  box-shadow: 0px 0px 24px rgb(98, 108, 119, 16%);
  padding: 0 16px;
}

.popup-input:focus-visible {
  outline: 0;
}

.btn {
  border: 2px solid #F19CBB;
  color: #F19CBB;
}
</style>