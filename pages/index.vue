<script lang="ts" setup>
const { awesome } = useAppConfig()
definePageMeta({ layout: 'page' })
useHead({ titleTemplate: '', title: awesome?.name || 'Vue and Nuxt Laboratory' })
</script>

<template>
  <AwesomeWelcome :with-alert="true" />
</template>
