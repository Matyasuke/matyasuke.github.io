<template>
  <div class="d-flex flex-column min-vh-100">
    <AppNavbar />
    <slot />
    <AppFooter />
  </div>
</template>

<style>
/* グローバルスタイルとして適用 */
body {
  padding-top: 3.5rem; /* Navbarの高さ分確保 */
}
</style>
