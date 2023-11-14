<template>
  <transition-group tag="ul" name="fade" class="container" :class="[direction]" :duration="duration" :direction="direction">
    <li v-for="img in viewed" class="item" :key="img">
      <img :src="img" alt="" class="item-img">
    </li>
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
      default: 0
    },
    duration: {
      type: Number,
      default: 1000
    },
    direction: {
      type: String,
      required: true,
      validator: value => ['top', 'down'].includes(value),
    }

  },
  data() {
    return {
      viewed: [],
      index: 0,
      intervalId: null,
    }
  },
  watch: {
    'images.length': function () {
      if (this.images.length) {
        clearInterval(this.intervalId);
        this.render()
      }
    }
  },
  methods: {
    top() {
      this.index = this.index % this.images.length;
      this.viewed.push(this.images[this.index]);
      this.index++;
      this.viewed.shift();
    },
    down() {
      this.viewed.unshift(this.images.at(this.index))
      this.index--;
      this.index = this.index % this.images.length;
      this.viewed.pop();
    },
    render() {
      this.viewed = this.images.slice(0, this.viewedCount);
      this.index = this.viewedCount;
      this.intervalId = setInterval(() => {
        this.direction === 'top' ? this.top() : this.down();
      }, this.duration);
    }
  },
  mounted() {
    if (this.images.length) {
      clearInterval(this.intervalId)
      this.render();
    }
  },
  unmounted() {
    this.interval && clearInterval(this.intervalId);
  },
}
</script>

<style scoped>
.container {
  position: relative;
  list-style: none;
  overflow: hidden;
}

.item {
  opacity: 1;
  transition: all 1s ease-in-out;
}

.item-img {
  height: 238px;
  width: 160px;
  object-fit: cover;
  border-radius: 15px;
  margin-top: 38px;
}

.top .fade-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}

.top .fade-enter-from {
  opacity: 0;
  transform: translateY(100%);
}

.down .fade-leave-to {
  opacity: 0;
  transform: translateY(100%);
}

.down .fade-enter-from {
  opacity: 0;
  transform: translateY(-100%);
}

.fade-leave-active {
  position: absolute;
}
</style>