<template>
  <div class="container flex-grow-1">
    <!-- <p> タグを <div> に変更 -->
    <div class="my-3">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><NuxtLink to="/">ホーム</NuxtLink></li>
          <li class="breadcrumb-item active" aria-current="page">Contact</li>
        </ol>
      </nav>
    </div>

    <!-- <p> タグを <div> に変更 -->
    <div class="mb-3">
      <h1>Contact</h1>
    </div>

    <p>
      メールアドレス : <s>deleted</s>
    </p>
  </div>
</template>