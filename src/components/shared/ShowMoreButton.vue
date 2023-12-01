<template>
    <div class="meal__category-video">
        <a class="show__video inverted-7 d-flex align-items-center" href="value" target="_blank">
            <p class="show__video-text">Show video instruction</p>
        </a>                      
    </div>
</template>

<style>
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