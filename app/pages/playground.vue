<script lang="ts" setup>
const counter = useCounter()
const identity = useIdentity()

definePageMeta({ layout: 'page' })
useHead({ title: 'Playground Page' })
</script>

<template>
  <LayoutPageWrapper>
    <LayoutPageHeader>
      <LayoutPageTitle text="Playground Page" class="capitalize" />
    </LayoutPageHeader>

    <LayoutPageSection>
      <LayoutPageSectionTitle text="Section One" />
      <div>My Content One</div>
    </LayoutPageSection>

    <LayoutPageSection>
      <LayoutPageSectionTitle text="Another Two" />
      <div>My Content Two</div>
    </LayoutPageSection>
  </LayoutPageWrapper>
</template>
