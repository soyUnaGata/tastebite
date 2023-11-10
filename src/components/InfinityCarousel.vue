<template>
  <transition-group name="fade" tag="ul" class="container" :class="[direction]" :duration="duration">
    <li v-for="img in viewed" :key="img" class="item"><img :src="img" class="item-img" alt=""></li>
  </transition-group>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true
    },
    viewedCount: {
      type: Number,
      default: 5
    },
    duration: {
      type: Number,
      default: 1000
    },
    direction: {
      type: String
    }
  },
  data() {
    return {
      viewed: [],
      index: 0,
      intervalId: null
    }
  },
  watch: {
    'imgs.length': function () {
      if (this.images.length) {
        this.intervalId && clearInterval(this.intervalId);
      }
    }
  },
  methods: {
    top() {
      this.viewed.pop();
      this.index++;
      this.index = this.index % this.images.length;
      this.viewed.splice(0, 0, this.images.at(this.index))
    },
    down() {
      this.viewed.shift();
      this.index++;
      this.index = this.index % this.images.length;
      this.viewed.push(this.images.at(this.index))
    }
  },
    mounted() {
    const count = Math.min(this.viewedCount, this.images.length);
    this.index = count - 1;
    this.viewed = this.images.slice(0, count)

    let func = null;
    console.log(this.direction)
    switch (this.direction) {
      case 'top': func = this.top; break;
      case 'down': func = this.down; break;
      case 'left': func = this.down; break;
      case 'right': func = this.top; break
      default: throw new Error('Incorrect direction');
    }

    this.intervalId = setInterval(func, this.duration)
  },
  unmounted() {
    clearInterval(this.intervalId)
  }
  }

</script>

<style scoped>
.container{
  position: relative;
  list-style: none;
  overflow: hidden;
}

.left, .right{ 
  display: flex;
}

.item{
  opacity: 1;
  transition: all 1s ease-in-out;
}

.item-img{
  height: 238px;
  width: 160px;
  object-fit: cover;
  border-radius: 15px;
}

.top .fade-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}

.top .fade-enter-from{
  opacity: 0;
  transform: translateY(100%);
}

.down .fade-leave-to {
  opacity: 0;
  transform: translateY(100%);
}

.down .fade-enter-from{
  opacity: 0;
  transform: translateY(-100%);
}

.left .fade-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.left .fade-enter-from{
  opacity: 0;
  transform: translateX(100%);
}

.right .fade-leave-to {
  opacity: 0;
  transform: translateX(300%);
}

.right .fade-enter-from{
  opacity: 0;
  transform: translateX(-100%);
}

.fade-leave-active {
  position: absolute;
}
</style>