<template>
  <a class="logo" href="">
    <div class="logo__block d-flex align-items-center">
      <img src="@/assets/img/logo.svg" class="logo__name" alt="" />
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" class="logo__dot" viewBox="0 0 1024 1024">
        <title />
        <g id="icomoon-ignore" />
        <path
          d="M16 512c0 273.932 222.068 496 496 496s496-222.068 496-496v0c0-273.932-222.068-496-496-496s-496 222.068-496 496v0z" />
      </svg>
    </div>
  </a>
</template>

<style>
.logo__name {
  max-width: 150px;
}

.logo__dot {
  height: 10px;
  fill: #ff642f;
}

@media (max-width: 1200px) {
  .logo__name {
    max-width: 130px;
  }
}

@media (max-width: 768px) {
  .logo__name {
    display: none;
  }

  .logo__dot {
    display: none;
  }
}
</style>
