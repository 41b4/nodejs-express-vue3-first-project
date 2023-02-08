<template>
  <section class="add">
    <h1>Add new book</h1>
    <section class="addnew">
      <div>
        <label>Title</label>
        <input type="text" v-model="title" />
        <label>Img</label>
        <input type="text" v-model="img" />
        <label>Author</label>
        <input type="text" v-model="author" />
        <label>Description</label>
        <textarea type="text" v-model="description" />
        <button @click="addBook()">Add new book</button>
      </div>
    </section>
  </section>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  name: "AddView",
  data() {
    return {
      title: "",
      description: "",
      img: "",
      author: "",
    };
  },
  methods: {
    addBook() {
      axios
        .post("http://localhost:3000/api/addbook", {
          title: this.title,
          description: this.description,
          img: this.img,
          author: this.author,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
        this.title= ""
        this.description= ""
        this.img= ""
        this.author= ""
    },
  },
};
</script>
<style lang="sass">
@import '../styles/_variables'

.add
  height: 93vh
  display: flex
  flex-direction: column
  align-items: flex-start
  justify-content: space-between
  h1
    padding: 1rem
    font-size: 30px
    font-weight: 500
  .addnew
    height: 100%
    width: 100%
    justify-content: center
    align-items: center
    display: flex
    div
      display: flex
      flex-direction: column
      align-items: center
      justify-content: center
      background: $grey
      padding: 1rem
      width: 43rem
      height: 27rem
      label
        width: 80%
      input, textarea
        width: 80%
        padding: .5rem
        margin: .5rem
        border: none
        font-weight: 300
      textarea
        resize: none
        height: 6rem
      button
        padding: .5rem 1rem
        background: $darkblue
        color: $white
        border: none
        margin: .5rem
        transition: .3s
        &:hover
          background: $orange
          cursor: pointer


</style>
