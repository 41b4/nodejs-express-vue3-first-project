<template>
  <section class="addnew">
    <div>
      <label>Title</label>
      <input type="text" v-model="title">
      <label>Description</label>
      <input type="text" v-model="description">
      <label>Img</label>
      <input type="text" v-model="img">
      <label>Author</label>
      <input type="text" v-model="author">
      <button @click="addBook()">Add new book</button>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  name: 'AddView',
  data(){
    return{
      title:'',
      description:'',
      img: '',
      author: ''
    }
  },
  methods:{
    addBook(){
      axios.post('http://localhost:3000/addbook',{
          title:this.title,
          description:this.description,
          img:this.img,
          author:this.author
      }).then(response=>{console.log(response)}).catch(error=>{console.log(error)})
    }
  }
}
</script>
<style lang="sass">


</style>

