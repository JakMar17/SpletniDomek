<template>
  <NuxtLink class="menu__button">
    <i class="ri-menu-2-line"></i>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.menu__button {
  margin-top: 2em;
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
  aspect-ratio: 1 / 1;
  width: 3em;
  border-radius: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background-color 500ms;

  &:hover {
    background: rgba(142, 208, 172, 0.2);
  }


  i {
    color: white;

    font-size: 1.75em;
  }
}

</style>