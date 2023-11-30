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

                   <div class="meal__category-video">
                      <a class="show__video inverted-7 d-flex align-items-center" :href="meal.youtube" target="_blank">
                        <p class="show__video-text">Show video instruction</p>
                      </a>                      
                   </div>
                   
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

.show__video {
    width: 150px;
    height: 50px;
    border: 1px solid var(--secondary);
    border-radius: 15px;
} 

 .show__video-text{
    padding: 15px;
    text-align: center;
}
.inverted-7 {    
  padding:8px;
  color:#0000;
  background:
    radial-gradient(50% 100% at bottom, #ff642f 97%, white),
    radial-gradient(50% 100% at bottom, #ff642f 97%, white),
    black;
  -webkit-background-clip: text,padding-box,text;
          background-clip: text,padding-box,text;
  background-size: 0% 0%;
  background-position: bottom;
  background-repeat: no-repeat;
  transition: 0.5s;

}
.inverted-7:hover {  
  background-size: 150% 200%;
  color: white;
 }

</style>