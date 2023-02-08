<template>
  <section class="home">
    <h1>Books gallery</h1>
    <section class="books">
      <div v-for="book in books" :key="book.id" class="book">
        <div>
          <img :src="book.img" />
        </div>
        <h3>{{ book.title }}</h3>
        <p>Author: {{ book.author }}</p>
        <p>Description: {{ book.description }}</p>
        <button @click="deleteBook(book.id)">Delete</button>
      </div>
    </section>
  </section>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  name: "HomeView",
  data() {
    return {
      error: "",
      books: [],
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000/api/")
      .then(
        (response) => (
          (this.books = response.data.rows), console.log(response.data.rows)
        )
      )
      .catch((error) => console.log(error));
  },
  methods: {
    deleteBook(index) {
      console.log(index);
      axios.get("http://localhost:3000/api/delete/" + index);
      window.location.reload();
    },
  },
};
</script>
<style lang="sass">
@import '../styles/_variables'

.home
  height: 93vh
  display: flex
  flex-direction: column
  align-items: flex-start
  justify-content: space-between
  h1
    padding: 1rem
    font-size: 30px
    font-weight: 500
.books
  display: flex
  flex-wrap: wrap
  flex-direction: row
  align-items: center
  justify-content: center
  width: 100%
  height: 100%
  overflow: hidden
  overflow-y: scroll
  .book
    border: 1px solid $grey
    height: 30rem
    width: 25rem
    display: flex
    flex-direction: column
    align-items: center
    justify-content: flex-start
    padding: 1rem
    margin: 1rem
    h3
      font-weight: 500
      margin: .5rem
    p
      font-weight: 300
    button
      padding: .5rem 1rem
      background: $grey
      border: none
      margin: .5rem
      transition: .3s
      &:hover
        background: $orange
        cursor: pointer
    div
      height: 20rem
      width: 20rem
      overflow: hidden
      img
        width: 100%
        height: 100%
        max-width: auto
        max-height: auto
        object-fit: cover
</style>
