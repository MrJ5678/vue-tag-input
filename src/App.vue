<!--
 * @Author: hhhhhq
 * @Date: 2021-07-03 10:37:54
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-07-03 12:02:21
 * @Description: file content
-->
<template>
  <TagInput />
  <!-- <button @click="logout">Logout</button>

  <a :href="featuredLink">Featured Link</a>

  <p v-font-size:small>Small</p>
  <p v-font-size:medium>Medium</p>
  <p v-font-size:large>large</p> -->

  <!-- <my-header>
    <template v-slot:title>
      Building Your Own Vue 3 Plugin - <i>A Full Guide</i>
    </template>

    <template v-slot:author> Jld </template>
  </my-header> -->
</template>

<script setup>
import TagInput from "./components/TagInput.vue"
// import { inject } from "vue"

// const logout = inject("logout")
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
