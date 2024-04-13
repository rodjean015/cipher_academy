<template>
  <div class="container mt-5">
    <h1 class="display-2">Welcome to Cipher Academy</h1>
    <h2 class="display-4">Go to Student TAB <RouterLink to="/students/view"><span class="material-symbols-outlined">arrow_forward</span></RouterLink></h2>
    <p class="display-5 mt-5">Open this file on vs.code <a href="https://github.com/rodjean015/cipher/tree/main/cipher_backend" class="btn btn-primary">code</a></p>
    <p class="lead"><span class="material-symbols-outlined text-success">check_circle</span> Edit this directory DB_DATABASE=cipher_backend\database\cipher_academy.sqlite</p>
    <p class="lead"><span class="material-symbols-outlined text-success">check_circle</span> Or Create Database in Localhost with name "cipher_academy"</p>
    <p class="lead"><span class="material-symbols-outlined text-success">check_circle</span> And enter command php artisan serve on terminal.</p>
  </div>
</template>
