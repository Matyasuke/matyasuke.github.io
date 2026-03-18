<template>
  <div>
    <!-- カルーセル -->
    <div id="carouselExampleCaptions" class="carousel slide">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="/images/header1.jpg" class="d-block w-100" alt="画像1" style="height: 450px; object-fit: cover;" @error="handleImageError">
          <div class="carousel-caption d-none d-md-block">
            <h5>Otsuka museum</h5>
            <p></p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="/images/header2.jpg" class="d-block w-100" alt="画像2" style="height: 450px; object-fit: cover; background:#000" @error="handleImageError">
          <div class="carousel-caption d-block">
            <h5>Sensuijima</h5>
          </div>
        </div>
        <div class="carousel-item">
          <img src="/images/header3.jpg" class="d-block w-100" alt="画像3" style="height: 450px; object-fit: cover;" @error="handleImageError">
          <div class="carousel-caption d-none d-md-block">
            <h5>Ritsurin Park</h5>
            <p></p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <!-- メインコンテンツ -->

    <div class="container flex-grow-1">
      <div class="mt-4 mb-4"><h1>Ryou's page</h1></div>

      <span class="mt-4 mb-5 fs-5 fst-italic">
      The 'u' in Ryou is intentional.
      </span>
      <span class="mt-4 mb-5 fs-5 fst-italic">
      <p>
      <a href="/English.html">English version is here.</a>
      </p>
      </span>
      <div class="text-center my-5">
        <a href="https://buymeacoffee.com/kumasuke"><img src="/images/bmc-button.png" alt="Buy me a coffee" height="60"></a>
      </div>

      <!-- 事業カード -->
      <div class="p-2 mb-3 bg-body">
        <div class="card-body">
          <div class="card-title"><h2>事業</h2></div>
          <p>私の開発物です。
          </p>
          <div class="text-end">
            <a href="#" class="btn btn-secondary disabled" aria-disabled="true">Details</a>
          </div>
        </div>
      </div>
      <hr>
      <!-- Profileカード -->
      <div class="p-2 mb-3 bg-body rounded">
        <div class="card-body">
          <div class="card-title"><h2>プロフィール</h2></div>
          <p class="card-text">私のプロフィールです。</p>
          <div class="text-end">
            <NuxtLink to="/prof" class="btn btn-primary">Details</NuxtLink>
          </div>
        </div>
      </div>
      <hr>
      <!-- Researchカード -->
      <div class="p-2 mb-3 bg-body">
        <div class="card-body">
          <div class="card-title"><h2>Research</h2></div>
          <p class="card-text">研究についてです。</p>
          <div class="text-end">
            <a href="#" class="btn btn-secondary disabled" aria-disabled="true">Details</a>
          </div>
        </div>
      </div>
      <hr>
      <!-- Contactカード -->
      <div class="p-3 mb-3 bg-body">
        <div class="card-body">
          <div class="card-title"><h2>Contact</h2></div>
          <p class="card-text">連絡はこちら。</p>
          <div class="text-end">
            <NuxtLink to="/contact" class="btn btn-primary">Details</NuxtLink>
          </div>
        </div>
        <hr>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const handleImageError = (e) => {
  e.target.style.backgroundColor = '#ccc';
  e.target.alt = 'Image not found';
}
</script>