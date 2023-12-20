<template>
  <a class="show__video d-flex align-items-center" :href="videoLink" target="_blank">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    {{ buttonText }}
  </a>
</template>

<script>
export default {
  props: {
    videoLink: {
      type: String,
    },
    buttonText: {
      type: String,
    }
  }
};
</script>

<style>
.show__video {
  position: relative;
  display: inline-block;
  padding: 25px 15px;
  letter-spacing: 1px;
  color: var(--headlines);
  font-size: 18px;
  font-weight: bold;
  transition: .5s;
  overflow: hidden;
}

.show__video:hover {
  background-color: var(--secondary);
  color: var(--white);
}

.show__video:first-child {
  filter: hue-rotate(225deg);
}

/* .show__video:last-child{
  filter: hue-rotate(90deg);
} */

.show__video span {
  position: absolute;
  display: block;
}

.show__video span:nth-child(1) {
  top: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--secondary));
  animation: animate1 1s infinite;
}

@keyframes animate1 {
  0% {
    left: -100%;
  }

  100% {
    left: 100%;
  }
}

.show__video span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 1px;
  height: 100%;
  background: linear-gradient(180deg, transparent, var(--secondary));
  animation: animate2 1s infinite;
  animation-delay: .25s;
}

@keyframes animate2 {
  0% {
    top: -100%;
  }

  100% {
    top: 100%;
  }
}

.show__video span:nth-child(3) {
  bottom: 0;
  right: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(270deg, transparent, var(--secondary));
  animation: animate3 1s infinite;
  animation-delay: .5s;
}

@keyframes animate3 {
  0% {
    right: -100%;
  }

  100% {
    right: 100%;
  }
}

.show__video span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 1px;
  height: 100%;
  background: linear-gradient(360deg, transparent, var(--secondary));
  animation: animate4 1s infinite;
  animation-delay: .75s;
}

@keyframes animate4 {
  0% {
    bottom: -100%;
  }

  100% {
    bottom: 100%;
  }
}</style>