<script lang="ts">
import { defineComponent } from 'vue'
import { useHead } from '@vueuse/head'

export default defineComponent({
  setup() {
    useHead({
      title: '文档',
      meta: [
        { name: 'description', content: 'Opinionated Vite Starter Template' },
      ],
    })
  },
})
</script>

<template>
  <router-view />
</template>
