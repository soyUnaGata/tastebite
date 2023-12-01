<template>
    <div class="container">
        <div class="meal__header">
            <h1>{{ meal.meal}}</h1>
        </div>
        <div class="separator"></div>
        <div class="meal__details m-top-30 d-flex g-30">
            <div class="meal__information d-flex g-30">                
                <div class="meal__ingridients d-flex flex-column g-20">
                    <img :src="meal.thumb" class="meal__img" :alt="meal.meal">
                    <div class="meal__ingridients-list d-flex flex-column g-10">
                        <div class="custom d-flex flex-column" v-for="(item, key) in meal.ingredients" :key="key">
                            <label v-if="item.ingridient !== ''"  :for="item.ingridient" class="checkbox__item d-flex g-10">
                                <input  class="checkbox-input d-flex flex-column" type="checkbox"  :id="item.ingridient"/>
                                <span class="checkmark"></span>
                                <span> {{ item.measure }}</span>
                                <span>{{ item.ingridient}}</span>
                            </label>
                        </div>
                    </div> 
                </div>

            <div class="meal__description-about">
            <div class="meal__about d-flex flex-column g-20">
                <div class="meal__category d-flex align-items-center justify-content-between g-20">
                   <div class="meal__category-details d-flex g-20">
                        <span class="meal__item">Category:
                        <span>{{ meal.category}}</span>
                        </span>
                        <span class="meal__item">Area:
                            <span>{{ meal.area}}</span>
                        </span>
                   </div>

                   <!-- <div class="meal__category-video">
                      <a class="show__video inverted-7 d-flex align-items-center" :href="meal.youtube" target="_blank">
                        <p class="show__video-text">Show video instruction</p>
                      </a>                      
                   </div> -->

                   <a class="show__video d-flex align-items-center" :href="meal.youtube" target="_blank">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Show video instruction
                    </a>

                </div>

                <div class="meal__description d-flex flex-column g-10">
                    <p class="meal__description-header">Instruction:</p>
                    <div class="meal__description-text" v-html="formattedInstructions"></div>
                </div>
            </div>
        </div>
        </div>
            
        </div>

    

     
    </div>
</template>

<script>

export default {
        props:{
            meal: {
                type: Object,
            },
        },
        // watch:{
        //     'meal': function () {
        //         console.log(this.mealDetails, 'in details')
        //     }
        // },
        data(){
            return {
            }
        },
        mounted() {

        },
        methods: {
            formatTextToHTML: function (str) {
                const newLine = '\r\n';
                if (!str) return '';
                if (str.startsWith(newLine)) str = str.replace(newLine, '');

                let formatted = '';
                const stepRegex = /^\d+/gs;
                const parts = str.split(newLine);

                for (let i = 0; i < parts.length; i++) {
                    const part = parts[i];

                    if(!stepRegex.test(part)) {
                        formatted += `<p>${part}</p>`;
                        continue;
                    }

                    formatted += `<p>${part} ${parts[i + 2]}</p>`;
                    i+=2;
                }

                return formatted;
            }
        },
        computed: {
            formattedInstructions() {
                if(!this.meal?.instructions) return ''; 
                return this.formatTextToHTML(this.meal.instructions)
            },
        },

}
</script>

<style scoped>
.meal__header {
    font-size: 36px;
    color: var(--headlines);
}

.separator {
    width: 100%;
    border: 1px solid var(--primary);
    margin-top: 5px;
}
.meal__img {
    width: 420px;
    height: 410px;
    border-radius: 10px;
    object-fit: cover;
}
.meal__item {
    font-size: 18px;
    color: var(--headlines);
}
.meal__item > span {
    font-size: 20px;
    font-weight: 600;
    color: var(--primary);
}
.checkbox__item {
    font-size: 22px;
    color: var(--headlines);
    cursor: pointer;
}

.custom {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  
}

.custom input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 15px;
}

.custom:hover input ~ .checkmark {
  background-color: #ccc;
}

.custom input:checked ~ .checkmark {
  background-color: var(--secondary);
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.custom input:checked ~ .checkmark:after {
  display: block;
}

.custom .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.custom input:checked ~ .checkmark ~ span {
  text-decoration: line-through;
  text-decoration-color: var(--secondary);
}

.meal__description-header {
    font-size: 24px;
    font-weight: 600;
    color: var(--headlines);
}

.meal__description-text {
    font-size: 20px;
}

.show__video{
  position: relative;
  display: inline-block;
  padding: 25px 15px;;
  letter-spacing: 1px;
  color: var(--headlines);
  font-size: 18px;
  font-weight: bold;
  transition: .5s;
  overflow: hidden;
}
.show__video:hover{
  background-color: var(--secondary-light);
  color: var(--white);
  box-shadow: 0 0 5px var(--secondary),
              0 0 25px var(--secondary),
              0 0 50px var(--secondary),
              0 0 45px var(--secondary);

  -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
}

.show__video:first-child{
  filter: hue-rotate(225deg);
}

/* .show__video:last-child{
  filter: hue-rotate(90deg);
} */

.show__video span{
  position: absolute;
  display: block;
}

.show__video span:nth-child(1){
  top: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--secondary));
  animation: animate1 1s infinite;
}
@keyframes animate1{
  0%{
    left: -100%;
  }
  100%{
    left: 100%;
  }
}

.show__video span:nth-child(2){
  top: -100%;
  right: 0;
  width: 1px;
  height: 100%;
  background: linear-gradient(180deg, transparent, var(--secondary));
  animation: animate2 1s infinite;
  animation-delay: .25s;
}
@keyframes animate2{
  0%{
    top: -100%;
  }
  100%{
    top: 100%;
  }
}
.show__video span:nth-child(3){
  bottom: 0;
  right: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(270deg, transparent, var(--secondary));
  animation: animate3 1s infinite;
  animation-delay: .5s;
}
@keyframes animate3{
  0%{
    right: -100%;
  }
  100%{
    right: 100%;
  }
}
.show__video span:nth-child(4){
  bottom: -100%;
  left: 0;
  width: 1px;
  height: 100%;
  background: linear-gradient(360deg, transparent, var(--secondary));
  animation: animate4 1s infinite;
  animation-delay: .75s;
}
@keyframes animate4{
  0%{
    bottom: -100%;
  }
  100%{
    bottom: 100%;
  }
}
</style>