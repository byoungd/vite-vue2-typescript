<template>
  <div class="m-3.5">
    <h1>Vite ⚡ - Vue2 - typescript starter template</h1>
    <p>
      This starter template will help you to easily create a Vue2 application bundled by
      the lightning fast build tool called Vite.
    </p>
    <p>
      <el-tag>typescript support</el-tag>
      <el-tag>auto routing</el-tag>
      <el-tag>auto store</el-tag>
      <el-tag>global component auto import</el-tag>
      <el-tag>commit lint</el-tag>
      <el-tag>vueuse</el-tag>
      and
      <el-tag>vue composition-api</el-tag> for Vue2.
    </p>
    <Test />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Test from '../components/test.vue'
export default defineComponent({
  name: 'index-page',
  components: { Test },
})
</script>
