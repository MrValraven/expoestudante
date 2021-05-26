<template>
  <div class="wrapper">
  <div class="link_wrapper">
    <button href="#">Direções</button>
    <div class="icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
        <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z"/>
      </svg>
    </div>
  </div>
  
</div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">

$cyan: #7179F4;


*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.link_wrapper{
  position: relative;
}

button{
  display: block;
  width: 250px;
  height: 50px;
  line-height: 50px;
  font-weight: bold;
  text-decoration: none;
  background: $cyan;
  text-align: center;
  color: #fff;
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: 3px solid darken($color: $cyan, $amount: 5%) ;
  cursor: pointer;
  transition: all .35s;
}

.icon{
  width: 50px;
  height: 50px;
  border: 3px solid transparent;
  position: absolute;
  transform: rotate(45deg);
  right: 20vw;
  top: 0;
  z-index: -1;
  transition: all .35s;
}

.icon svg{
  width: 30px;
  position: absolute;
  top: calc(50% - 15px);
  left: calc(50% - 15px);
  transform: rotate(-45deg);
  fill: $cyan;
  transition: all .35s;
}

button:hover{
  width: 200px;
  border: 3px solid $cyan;
  background: transparent;
  color: $cyan;
}

button:hover + .icon{
  border: 3px solid $cyan;
  right: 35%;
}

</style>