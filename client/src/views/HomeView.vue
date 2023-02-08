<template>
<section class="home">
  <div v-for="book in books" :key="book.id" class="book">
    <h1>{{book.title}}</h1>
    <div>
      <img :src="book.img">
    </div>
    <p>Author: {{book.author}}</p>
    <p>Description: {{book.description}}</p>
    <button @click="deleteBook(book.id)">Delete</button>
  </div>
</section>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  name: 'HomeView',
  data(){
    return{
      error:"",
      books:[]
    }
  },
  mounted(){
    axios.get("http://localhost:3000/")
    .then(response=>(this.books=response.data.rows, console.log(response.data.rows)))
    .catch(error=>console.log(error))
  },
  methods:{
    deleteBook(index){
      console.log(index)
      axios.get("http://localhost:3000/delete/"+index)
      window.location.reload()
    }
  }
}
</script>
<style lang="sass">
.home
  height: 95vh
  display: flex
  flex-wrap: wrap
  flex-direction: row
  align-items: center
  .book
    height: 30rem
    width: 25rem
    display: flex
    flex-direction: column
    align-items: center
    justify-content: space-around
    background: grey
    padding: 1rem
    margin: 1rem
    div
      height: 80%
      width: 80%
      overflow: hidden
      img
        width: 100%

</style>
