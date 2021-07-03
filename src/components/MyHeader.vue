<!--
 * @Author: hhhhhq
 * @Date: 2021-07-03 11:35:39
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-07-03 11:42:56
 * @Description: file content
-->
<template>
  <div>
    <h1 class="header-title">
      <slot name="title" />
    </h1>

    <h2 class="title-author">
      <slot name="author" />
    </h2>
  </div>
</template>

<style>
html,
body {
  font-size: 1.2em;
  background: #fafafa;
}
</style>
