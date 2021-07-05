<template>
    <div class="directions">
        <h1>{{ titulo }}</h1>
        <div class="group">
          <div class="text">
            <p>{{ primeiroParagrafo }}</p>
            <p v-if="segundoParagrafo">{{ segundoParagrafo }}</p>
          </div>
          <svg id="direction" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m480.971 31.029a24 24 0 0 0 -33.942 0l-191.029 191.03-191.029-191.03a24 24 0 0 0 -33.942 33.942l200.971 200.97v198.059a24 24 0 0 0 48 0v-198.059l200.971-200.97a24 24 0 0 0 0-33.942z" fill="#8690fa"/><g fill="#5153ff"><path d="m48 200a24 24 0 0 1 -24-24v-128a24 24 0 0 1 24-24h128a24 24 0 0 1 0 48h-104v104a24 24 0 0 1 -24 24z"/><path d="m464 200a24 24 0 0 1 -24-24v-104h-104a24 24 0 0 1 0-48h128a24 24 0 0 1 24 24v128a24 24 0 0 1 -24 24z"/></g></svg>
        </div>
      </div>
  
</template>

<script>
export default {
    name: "Transporte",
    props: {
        titulo: String,
        primeiroParagrafo: String,
        segundoParagrafo: String,
    }
}
</script>

<style lang="scss" scoped>
$textColor: #596FF0;
$headerTextColor: #7179F4;
$blueTextColor: #0010FF;

.directions {
    background-color: white;
    display: flex;
    justify-content: center;
    flex-direction: column;

    h1 {
      margin: 0 0 25px 8vw;
      text-transform: uppercase;
      font-size: 40px;
      font-weight: 800;
      color: $headerTextColor;
    }

    .group {
      margin-left: 8vw;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 70%;

      .text {
        font-style: italic;
        font-weight: 300;
        font-size: 25px;
        color: $textColor;
        width: 80%;
      }

      svg {
        margin-left: 50px;
        height: 300px;
        width: 300px;
      }

    
    }
}
</style>