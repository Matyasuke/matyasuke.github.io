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
          <img src="/images/header1.jpg" class="d-block w-100" alt="風景" @error="handleImageError">
          <div class="carousel-caption d-none d-md-block">
            <h5></h5>
            <p></p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="/images/header2.jpg" class="d-block w-100" alt="風景" @error="handleImageError">
          <div class="carousel-caption d-block">
            <h2></h2>
          </div>
        </div>
        <div class="carousel-item">
          <img src="/images/header3.png" class="d-block w-100" alt="images" @error="handleImageError">
          <div class="carousel-caption d-none d-md-block">
            <h5></h5>
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

      <p>
      <a href="/English.html">English version is here.</a>
      </p>

      <span class="mt-4 mb-5 fs-5 fst-italic">The first step towards getting somewhere is to decide that you are not going to stay where you are.</span>
      <div class="fst-italic text-end">--John Pierpont Morgan--</div>
      <p></p>
      <!-- 寄付カード -->
      <div class="shadow p-3 mb-5 bg-body rounded card">
        <div class="card-title"><h3>寄付について</h3></div>
        <p>
          こちらが私のEthereumアドレスです。よろしければご寄付お願いします。<br>This is my Ethereum address. Please feel free to make a donation.
        </p>
        <div style="display: flex; gap: 10px; justify-content: flex-end;">
          <input type="text" 
            v-model="walletAddress"
            readonly 
            style="flex:1; padding: 3px; border: 0.5px solid #ccc; border-radius: 5px; background-color: #f9f9f9; color: #212529;">
          
          <button 
            @click="copyToClipboard" 
            :class="['btn', copyStatus.class]"
            style="width: 100px; height: 35px;">
            <div class="text-center">{{ copyStatus.text }}</div>
          </button>
        </div>
      </div>

      <!-- 事業カード -->
      <div class="shadow p-3 mb-5 bg-body rounded card">
        <div class="card-body">
          <div class="card-title"><h2>事業</h2></div>
          <p>私の開発物です。</p>
          <div class="text-end">
            <a href="#" class="btn btn-secondary disabled" aria-disabled="true">Details</a>
          </div>
        </div>
      </div>

      <!-- Profileカード -->
      <div class="shadow p-3 mb-5 bg-body rounded card">
        <div class="card-body">
          <div class="card-title"><h2>Profile</h2></div>
          <p class="card-text">私のプロフィールです。</p>
          <div class="text-end">
            <NuxtLink to="/prof" class="btn btn-primary">Details</NuxtLink>
          </div>
        </div>
      </div>

      <!-- Researchカード -->
      <div class="shadow p-3 mb-5 bg-body rounded card">
        <div class="card-body">
          <div class="card-title"><h2>Research</h2></div>
          <p class="card-text">研究についてです。</p>
          <div class="text-end">
            <a href="#" class="btn btn-secondary disabled" aria-disabled="true">Details</a>
          </div>
        </div>
      </div>

      <!-- Contactカード -->
      <div class="shadow p-3 mb-5 bg-body rounded card">
        <div class="card-body">
          <div class="card-title"><h2>Contact</h2></div>
          <p class="card-text">連絡はこちら。</p>
          <div class="text-end">
            <NuxtLink to="/contact" class="btn btn-primary">Details</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const walletAddress = ref('0xbf3e76614b909382690236af1cb084baec65aef8')
const copyStatus = reactive({
  text: 'Copy',
  class: 'btn-success'
})

const copyToClipboard = () => {
  navigator.clipboard.writeText(walletAddress.value).then(() => {
    const originalText = 'Copy'
    const originalClass = 'btn-success'

    copyStatus.text = 'Copied!'
    copyStatus.class = 'btn-primary'

    setTimeout(() => {
      copyStatus.text = originalText
      copyStatus.class = originalClass
    }, 2000)
  }).catch(err => {
    console.error('コピーに失敗しました: ', err)
  })
}

const handleImageError = (e) => {
  e.target.style.backgroundColor = '#ccc';
  e.target.alt = 'Image not found';
}
</script>