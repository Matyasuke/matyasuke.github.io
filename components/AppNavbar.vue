<template>
  <div class="page-header">
    <nav class="navbar navbar-expand-lg navbar-light fixed-top nav-bg">
      <div class="container-fluid">
        <NuxtLink class="navbar-brand" to="/">Ryou</NuxtLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#">Project</a>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/prof">Prof</NuxtLink>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Research</a>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/contact">Contact</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
/* コンポーネント固有のスタイル */
.nav-bg {
  /* 元のコードのコメントにあったグラデーションの例を採用 */
  background: linear-gradient(135deg, #DCD3B2, #007AAC);
  opacity: 0.9;
}
</style>