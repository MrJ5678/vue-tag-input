<!--
 * @Author: hhhhhq
 * @Date: 2021-07-03 10:38:51
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-07-03 11:17:31
 * @Description: file content
-->
<template>
  <div class="tag-input">
    <div v-for="(tag, index) in tags" :key="tag" class="tag-input__tag">
      <span @click="removeTag(index)">x</span>
      {{ tag }}
    </div>
    <input
      type="text"
      placeholder="Enter a tag"
      class="tag-input__text"
      @keydown="addTag"
      @keydown.delete="removeLastTag"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      tags: ["hello", "world"],
    }
  },
  methods: {
    addTag(event) {
      // Comma -> ,
      if (event.code === "Comma" || event.code === "Enter") {
        event.preventDefault()
        var val = event.target.value.trim()

        if (val.length > 0) {
          this.tags.push(val)
          event.target.value = ""
        }
      }
    },
    removeTag(id) {
      this.tags = this.tags.filter((_, index) => index !== id)
    },
    removeLastTag(event) {
      if (event.target.value.length === 0) {
        this.removeTag(this.tags.length - 1)
      }
    },
  },
}
</script>

<style scoped>
.tag-input {
  width: 100%;
  border: 1px solid #eee;
  font-size: 0.9em;
  height: 50px;
  box-sizing: border-box;
  padding: 0 10px;
}

.tag-input__tag {
  height: 30px;
  float: left;
  margin-right: 10px;
  background-color: #eee;
  margin-top: 10px;
  line-height: 30px;
  padding: 0 5px;
  border-radius: 5px;
}

.tag-input__tag > span {
  cursor: pointer;
  opacity: 0.75;
}

.tag-input__text {
  border: none;
  outline: none;
  font-size: 0.9em;
  line-height: 50px;
  background: none;
}
</style>
