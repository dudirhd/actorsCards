import axios from "axios";
import { useCounterStore } from "./stores/counter";


export async function getAll() {
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'http://158.160.45.135:8000/characters',
    headers: {
      'Content-Type': 'application/json',
    }
  };
  const store = useCounterStore();

  return axios.request(config)
  .then((response) => {
    store.cardsInfo = response.data;
    console.log(store.cardsInfo)
  })
  .catch((error) => {
    console.log(error);
  });
}

export async function newCard(heading, from, image) {
  let data = JSON.stringify({
    'name': `${heading}`,
    'description': `${from}`,
    'photo': `${image}`
  });
  
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://158.160.45.135:8000/characters',
    headers: {
      'Content-Type': 'application/json',
    },
    data: data
  };

  return axios.request(config)
  .then(() => console.log('успех'))
}

// export async function deleteRequest(index) {
//   let config = {
//     method: 'delete',
//     maxBodyLength: Infinity,
//     url: `http://158.160.45.135:8000/characters/${index}`,
//   };
//   return axios.request(config)
//   .then(() => console.log('udalil'))
//   .catch((error) => console.log('error'))
// }