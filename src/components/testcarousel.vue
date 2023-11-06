<template> 
    <TransitionGroup tag="ul" name="fade" class="container" :key="imgs" :duration="duration">
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
    }

  },
  data() {
    return {
      viwedImages: [],
      index: 0,
      interval: null
    }
  },
  watch: {
    'imgs.length': function() {
      this.interval && clearInterval(this.interval);
      this.render();
    }
  },
  methods: {
    render() {
      this.viwedImages = this.imgs.slice(0, this.count);
      this.index = this.count;
      this.interval = setInterval(() => {
          let index = this.index % this.imgs.length;
          this.index++;
          this.viwedImages.push(this.imgs[index]);
          this.viwedImages.shift();
          
      },this.duration) 
    }
  },
  mounted(){
    if(this.imgs.length) this.render();
  },
  unmounted() {
    this.interval && clearInterval(this.interval);
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
  transition: all 1s ease-in-out;
}

.fade-move,
.fade-enter-active,
.fade-leave-active {
  opacity: 1;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform:  translate(30px, 0);
}
.fade-leave-active {
  position: absolute;
}
</style>