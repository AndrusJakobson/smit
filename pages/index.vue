<template>
  <v-row justify="center" align="center">
    <v-col class="container-border" cols="12" sm="10" md="10">
      <h4 class="text-h4">Raamatud</h4>
      <v-data-table
        class="data-table"
        :headers="headers"
        :items="books"
        mobile-breakpoint="0"
        hide-default-footer
        hide-default-header
      >
        <template v-slot:item.pildiNimi="{item}">
          <div class="text-center">
            <img height="200" :src="imageBaseUrl + item.pildiNimi"/>
          </div>
        </template>
        <template v-slot:item.pealkiri="{item}">
          <div class="flex-column">
            <h6 class="text-h6">{{ item.pealkiri }}</h6>
            <p class="text-subtitle-1">{{ item.autor }}</p>
          </div>
        </template>

        <template v-slot:item.saadavus="{item}">
          <div class="flex-column text-right">
            <p class="text-no-wrap text-subtitle-1">Saadavus: {{ item.saadavus }} tk</p>
            <v-btn
              color="primary"
              elevation="2"
              @click="buyBook(item)">
              osta
            </v-btn>
          </div>
        </template>
      </v-data-table>
    </v-col>
  </v-row>
</template>
<script>

import axios from 'axios';

export default {
  data() {
    return {
      books: [],
      imageBaseUrl: process.env.API_URL,
      headers: [
        {text: 'pildiNimi', value: 'pildiNimi', cellClass: 'image-cell'},
        {text: 'pealkiri', value: 'pealkiri'},
        {text: 'saadavus', value: 'saadavus'}
      ]
    }
  },
  mounted() {
    this.getBooks();
  },
  methods: {
    getBooks() {
      const promise = axios.get(this.imageBaseUrl + 'raamatud').then(res => {
        if (res && res.status === 200 && res.data) {
          console.log(res);
          this.books = res.data;
        }
      });
    },
    buyBook(book) {
      console.log('Osta: ' + book.pealkiri);
    }
  },
}
</script>
<style>
.container-border {
  border-left: 2px solid rgba(0, 0, 0, 0.1);
  border-right: 2px solid rgba(0, 0, 0, 0.1);
}

.image-cell {
  width: 5%;
}

.data-table {
  width: 80%;
  margin: 20px auto;
}
</style>
