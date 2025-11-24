<template>
  <div class="container flex-grow-1">
    <!-- <p> タグを <div> に変更し、余白(margin-bottom)をつけるために mb-3 クラスを追加 -->
    <div class="mb-3">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><NuxtLink to="/">ホーム</NuxtLink></li>
          <li class="breadcrumb-item active" aria-current="page">Profile</li>
        </ol>
      </nav>
    </div>    
    
    <!-- <p> タグを削除 (h1自体がブロック要素なので囲む必要はない) -->
    <div class="mb-3">
      <h1>Profile</h1>
    </div>

    <!-- <p> タグを <div> に変更 -->
    <div class="mb-3">
      <table class="table table-striped">
        <thead>
          <tr><th>西暦</th><th> </th></tr>
        </thead>
        <tbody>
          <tr><td>2003/6/16</td><td>生まれる</td></tr>
          <tr><td>2019/4</td><td>松江工業高等専門学校 情報工学科 入学</td></tr>
          <tr><td>2024/3</td><td>松江工業高等専門学校 情報工学科 卒業</td></tr>
          <tr><td>2024/4</td><td>徳島大学理工学部理工学科 知能情報コース 編入学</td></tr>
        </tbody>
      </table>
    </div>    
  </div>
</template>