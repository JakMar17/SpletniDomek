<template>
  <NuxtLink :to="to" class="underline text">
    <p class="content">
      {{ label }}
    </p>
  </NuxtLink>
</template>

<script>
export default {
  name: 'LinkInternalUnderline',
  props: {
    to: {
      type: String,
      default: '/'
    },
    label: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

.text {
  font-size: 1.5rem;
  font-weight: 200;
  color: white;

  &:hover {
    color: white;
  }
}
</style>