<template>
  <div class="menu glass">
    <div id="menu-items">
      <NuxtLink to="/" class="menu-item">Domača stran</NuxtLink>
      <NuxtLink class="menu-item">Blog</NuxtLink>
      <NuxtLink to="/cv" class="menu-item">Življenjepis</NuxtLink>
      <NuxtLink class="menu-item">Kontakt</NuxtLink>
    </div>
    <div id="menu-background-pattern"></div>
  </div>
</template>

<style lang="scss" scoped>


.menu {
  display: flex;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  position: fixed;
  left: 0;
  top: 0;
}

#menu-items {
  margin-left: clamp(4rem, 20vw, 48rem);
  position: relative;
  z-index: 103;

  &:hover {
    & ~ #menu-background-pattern {
      background-size: 8vmin 8vmin;
      opacity: 0.5;
    }

    & > .menu-item {
      opacity: 0.3;
    }

    & > .menu-item:hover {
      opacity: 1;
    }
  }
}

#menu-background-pattern {
  background-image: radial-gradient(
          rgba(255, 255, 255, 0.1) 9%,
          transparent 9%
  );
  background-position: 0% 0%;
  background-size: 4vmin 4vmin;
  height: 100vh;
  left: 0px;
  position: absolute;
  top: 0px;
  transition: opacity 800ms ease,
  background-size 800ms ease,
  background-position 800ms ease;
  width: 100vw;
  z-index: 102;
}

.menu-item {
  color: white;
  cursor: pointer;
  display: block;
  font-size: clamp(3rem, 8vw, 5rem);
  padding: clamp(0.25rem, 0.5vw, 1rem) 0;
  text-decoration: none;
  transition: opacity 400ms ease;
}
</style>