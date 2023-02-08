<template>
  <section class="container">
    <nav>
      <router-link to="/" active-class="select">Home</router-link> 
      <router-link to="/addbook" active-class="select">New Book</router-link>
    </nav>
    <router-view/>
  </section>
</template>

<style lang="sass">
@import './styles/_variables'

*
  padding: 0
  margin: 0
  box-sizing: border-box
  font-family: 'Rubik', sans-serif


.container
  height: 100vh
  nav
    height: 7vh
    display: flex
    flex-direction: row
    align-items: center
    justify-content: center
    a
      padding: 1rem 1rem 1rem 1rem
      margin: .5rem
      text-decoration: none
      color: $black
.select
  border-bottom: 2px solid $orange!important
  &:hover
    border-bottom: 3px solid $orange!important

</style>
