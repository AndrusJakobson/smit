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
          <v-list-item>
            <v-img
              contain
              :src="imageBaseUrl + book['pildiNimi']"
              max-height="200"
            />
          </v-list-item>
          <v-list-item class="justify-start">
            <div>
              <h6 class="text-h6">{{ book['pealkiri'] }}</h6>
              <p class="text-subtitle-1">{{ book['autor'] }}</p>
            </div>
          </v-list-item>
          <v-list-item class="justify-end">
            <div class="text-right">
              <p class="text-subtitle-1">Saadavus: {{ book['saadavus'] }} tk</p>
              <v-btn
                color="primary"
                elevation="2"
              >osta
              </v-btn>
            </div>
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
