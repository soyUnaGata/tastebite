<template>
    <div class="background" v-for="img in recipesImgCarousel">
        <img class="picture" 
        :src="img" 
        alt="">
    </div>
</template>

<script>
    export default{
        props: {
            recipesImgCarousel:{
                type: Array,
                required: true
            }
        }
    }
</script>

<style scoped>
.picture {
  width: 160px;
  height: 238px;
  object-fit: cover;
  border-radius: 10px;
}
.background {
  background-repeat: repeat-y;
  background-position: center;
  background-size: contain;
  animation: scroll 30s linear infinite;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
}
@keyframes scroll {
  from {
    transform: translate(0);
  }
  to {
    transform: translateY(calc(100% - 1000vh));
  }
}
</style>