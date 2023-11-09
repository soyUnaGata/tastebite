<template> 
    <TransitionGroup tag="ul" name="fade" class="container" :key="imgs" :duration="duration" :direction="direction">
      <li v-for="img in viwedImages" class="item" :key="img">
        <img :src="img" alt="" class="item-img">
      </li>
    </TransitionGroup>
</template>

<script>



export default { 
  props: { 
    imgs: {
      type: Array,
      required: true
    },
    count: {
      type: Number,
      default: 0
    },
    duration: {
      type: Number,
      default: 1000
    },
    direction:{
      type: String,
      required: true,
      validator: value => ['top', 'down'].includes(value)
      // default: this.render()
    }

  },
  data() {
    return {
      viwedImages: [],
      viwedImagesDown: [],
      indexTop: 0,
      indexDown: 0,
      interval: null
    }
  },
  watch: {
    'imgs.length': function() {
      if(this.direction === 'top' && this.imgs.length ){
      this.interval && clearInterval(this.interval);
      this.render();
    }

    if(this.direction === 'down' && this.imgs.length ){
      this.intervalDown && clearInterval(this.intervalDown)
      this.renderDown();
    }
      // this.interval && clearInterval(this.interval);
      // this.render();
      // this.intervalDown && clearInterval(this.intervalDown)
      // this.renderDown();
    }
  },
  methods: {
    render() {
      this.viwedImages = this.imgs.slice(0, this.count);
      this.indexTop = this.count;

      this.interval = setInterval(() => {
          let index = this.indexTop % this.imgs.length;
          this.indexTop++;
          this.viwedImages.push(this.imgs[index]);
          this.viwedImages.shift();
          
      },this.duration) 
    },

    renderDown(){
      this.viwedImages = this.imgs.slice(0, this.count);
      this.indexDown = this.imgs.length -1;
      console.log(this.index)

      this.intervalDown = setInterval(() => {
        this.viwedImages.unshift(this.imgs[this.indexDown]);
        this.viwedImages.pop();
        this.indexDown --;
        if(this.indexDown < 0) {
          this.indexDown = this.imgs.length -1;
        }
      },this.duration)
    }
  },
  mounted(){
    if(this.direction === 'top' && this.imgs.length ){
       // if(this.imgs.length) this.render();
       this.render();
    }

    if(this.direction === 'down' && this.imgs.length ){
       // if(this.imgs.length) this.render();
       this.renderDown();
    }
   
    // if(this.imgs.length) this.renderDown();
  },
  unmounted() {
    if(this.direction === 'top' && this.imgs.length ){
      this.interval && clearInterval(this.interval);
    }

    if(this.direction === 'down' && this.imgs.length ){
      this.intervalDown && clearInterval(this.intervalDown)
    }
    // this.interval && clearInterval(this.interval);
    // this.intervalDown && clearInterval(this.intervalDown)
  }
}
</script>

<style scoped>
.container {
  position: relative;
  list-style: none;
}
.item-img {
  height: 238px;
  width: 160px;
  object-fit: cover;
  border-radius: 15px;
}
.item {
  opacity: 0;
  transition: all 2s ease-out;
}

.fade-move,
.fade-enter-active,
.fade-leave-active {
  opacity: 1;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translate(50px, 0);
}
.fade-leave-active {
  position: absolute;
}
</style>