<template>
  <section class="addnew">
    <form method="post" action="http://localhost:3000/addbook">
      <input type="text" name="title" v-model="title">
      <input type="text" name="description" v-model="description">
      <input type="text" name="img" v-model="img">
      <input type="text" name="author" v-model="author">
      <button type="submit">Add new book</button>
    </form>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'AboutView',
  data(){
    return{
      title:'',
      description:'',
      img: '',
      author: ''
    }
  },
  mounted(){

  }
}
</script>
<style lang="sass">


</style>

