<template>
  <div class="mcard">
    <div class="mcard__body">
      <div v-if="label" class="mcard__label">
        <div class="mcard__label__text underline">{{ label }}</div>
        <hr/>
      </div>
      <div class="mcard__content">
        <div v-if="icon" class="slot__icon">
          <i :class="icon"></i>
        </div>
        <div class="slot__wrapper">
          <slot>
            <p v-if="contentBig" class="text-big">
              {{ contentBig }}
            </p>
            <p v-if="contentSmall" class="text-small">
              {{ contentSmall }}
            </p>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardSummary',
  props: {
    label: String,
    contentBig: String,
    contentSmall: String,
    icon: String
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';
@import '@/assets/styles/glass.scss';
@import '@/assets/styles/underline.scss';

.mcard {
  @extend .glass;
  color: white;
  padding: 1rem;

  &__body {
    background-image: radial-gradient(
            rgba(255, 255, 255, 0.1) 1px,
            transparent 1px
    );
    background-position: 50% 50%;
    background-size: 1.1rem 1.1rem;
    padding: 0 1rem 1rem;
  }

  &__label {
    display: flex;
    align-items: center;
    gap: 2rem;

    &__text {
      @extend .underline;
      margin-bottom: 0.25em;
      font-weight: 600;
      text-transform: uppercase;
    }

    hr {
      background: rgba(255, 255, 255, 0.25);
      width: 10vw;
    }
  }

  &__content {
    & .text-big {
      @extend .content;
      font-size: 1.5rem;
      font-weight: 200;
    }

    & .text-small {
      @extend .content;
      font-size: 0.95rem;
      font-weight: 500;
      margin-bottom: 0;
    }

    :not(:last-child) {
      margin-bottom: 0 !important;
    }
  }
}

.slot {
  &__wrapper {
    z-index: 3;
    position: relative;
  }

  &__icon {
    position: fixed;
    right: 1rem;
    top: 0.5rem;
    display: flex;
    justify-content: flex-end;
    z-index: 2;

    i {
      color: rgba(255, 255, 255, 0.25);
      font-size: 5rem;
    }
  }
}

</style>