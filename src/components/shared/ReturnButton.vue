<template>
  <div class="meal__category-video">
    <button type="button" class="return__btn inverted-7 d-flex align-items-center justify-content-center">
      <svg class="return__btn-img" version="1.1" xmlns="http://www.w3.org/2000/svg" width="50" height="50"
        viewBox="0 0 1024 1024">
        <title></title>
        <g id="icomoon-ignore">
        </g>
        <path d="M708.267 1024l-512-512 512-512 119.466 119.466-392.534 392.534 392.534 392.534-119.466 119.466z"></path>
      </svg>
    </button>
  </div>
</template>

<style>
.return__btn {
  height: 40px;
  border: 1px solid var(--secondary);
  border-radius: 50%;
  cursor: pointer;
}

.return__btn-img {
  width: 30px;
  padding: 8px 0px;
}

.inverted-7 {
  padding: 8px;
  color: #0000;
  background:
    radial-gradient(50% 100% at bottom, #ff642f 97%, white),
    radial-gradient(50% 100% at bottom, #ff642f 97%, white),
    black;
  -webkit-background-clip: text, padding-box, text;
  background-clip: text, padding-box, text;
  background-size: 0% 0%;
  background-position: bottom;
  background-repeat: no-repeat;
  transition: 0.5s;
}

.inverted-7:hover {
  background-size: 150% 200%;
  color: white;
  fill: white;
}
</style>