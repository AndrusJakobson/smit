<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="8">
      <h1>Raamatud</h1>
      <div>
        <v-list
          v-for="book in this.books"
          :key="book['id']"
          class="d-flex"
          three-line>
          <v-list-item class="flex-column justify-center">
            <v-img :src="imageBaseUrl + book['pildiNimi']"/>
          </v-list-item>
          <v-list-item class="flex-column justify-center">
            <div class="justify-start">
              <h3>{{ book['pealkiri'] }}</h3>
              <p class="justify-start">{{ book['autor'] }}</p>
            </div>
          </v-list-item>
          <v-list-item class="flex-column justify-center">
            <p>Saadavus: {{ book['saadavus'] }} tk</p>
            <v-btn
              color="primary"
              elevation="2"
              class="justify-end"
            >osta
            </v-btn>
          </v-list-item>
        </v-list>
      </div>
    </v-col>
  </v-row>
</template>
<script>

export default {
  data() {
    return {
      books: [],
      imageBaseUrl: process.env.API_URL,
    }
  },
  mounted() {
    this.$axios.get('raamatud').then(res => {
      if (res && res.data) {
        console.log(res);
        this.books = res.data;
      }
    })
  },
}
</script>
