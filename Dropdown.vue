<template>
  <div class="dropdown">
    <div
      :aria-expanded="isOpen"
      role="button"
      @click="toggleMenu"
      @keydown.space="toggleMenu"
    >
      Open Dropdown
    </div>
    <ul class="dropdown-menu" role="menu">
      <li role="menu-item">One</li>
      <li role="menu-item">Two</li>
      <li role="menu-item">Three</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VueDropdown',
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    async toggleMenu() {
      if (this.isOpen) {
        await this.close();
      } else {
        await this.open();
      }
    },
    async open() {
      await new Promise<void>((resolve) => setTimeout(() => resolve(), 100));
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
    },
  },
});
</script>
