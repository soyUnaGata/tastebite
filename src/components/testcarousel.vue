<template> 
    <TransitionGroup tag="ul" name="fade" class="container" :key="imgs">
      <div v-for="item in viwedImages" class="item" :key="item">
        <img :src="item" alt="" class="test-img">
      </div>
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
    }
  },
  data() {
    return {
        viwedImages: [],
        index: 0,
    }
  },
  mounted(){
    this.viwedImages = this.imgs.slice(0, this.count);
    this.index = this.count;
    setInterval(() => {
        let index = this.index % this.imgs.length;
        this.index++;
        this.viwedImages.push(this.imgs[index]);
        this.viwedImages.shift();
        
    },2000) 
  }
}
</script>

<style scoped>
.container {
  position: relative;
  padding: 0;
  display: flex;
    flex-direction: column;
    gap: 40px;
}
.test-img {
    height: 50px;
    object-fit: cover;
}
.item {
  width: 100%;
  height: 100px;
  background-color: #f3f3f3;
  border: 1px solid #666;
  box-sizing: border-box;
}

/* 1. declare transition */
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. declare enter from and leave to state */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

/* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
.fade-leave-active {
  position: absolute;
}
</style>