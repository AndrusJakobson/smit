<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <h1>Raamatud</h1>
      <div>
        <v-list v-for="book in this.books" three-line>
          <v-list-item>
            <v-img :src="book['']" />
          </v-list-item>
          <v-list-item>

          </v-list-item>
          <v-list-item>

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
      books: []
    }
  },
  mounted() {

    this.$axios.get('/raamatud').then(res => {
      if (res && res.data) {
        console.log(res);
        this.books = res.data;
      }
    })
  }
}
</script>
