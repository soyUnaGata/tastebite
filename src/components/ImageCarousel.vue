<template>
    <transition-group name="carousel" tag="div">
        <div class="background" v-for="img in imgCarousel" :key="img">
            <img class="picture" 
            :src="img" 
            alt="">
        </div>
    </transition-group>
    {{ infinityTwo() }}
</template>

<script>
    export default{
        props: {
            imgCarousel:{
                type: Array,
                required: true
            }
        },
        data(){
            return{
                viwedImages: [],
                index: 1,
                
            }
        },
        methods:{
            infintyCarousel(){
                for (let index = 0; index < this.imgCarousel.length; index++) {
                    this.viwedImages.push(this.imgCarousel[index]);
                    // this.imgCarousel[index]++;
                    if(index >= this.imgCarousel.length){
                        this.viwedImages.shift();
                        console.log(this.viwedImages)
                        index = 0;
                        this.viwedImages.push(this.imgCarousel[index]);
                    }
                    // this.viwedImages.shift(this.imgCarousel[index]);
                    // this.viwedImages.push(this.imgCarousel[index]);
                    // index++;
                }
                
                // this.viwedImages.shift(this.index);
                // let i =  this.index % this.viwedImages.length;
                // this.viwedImages.push(i);
                // i++;
                // this.viwedImages.shift(i);
                // console.log( this.viwedImages)

            },
            infinityTwo(){
                this.infintyCarousel().shift();
                if(this.index >= this.infinityCarousel.length){
                    this.index = 0;
                    this.index++;
                }
                this.infintyCarousel().push(this.index)
                this.index++;
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