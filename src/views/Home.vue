<template>
  <div class="home" @wheel.prevent="wheelHandler">
    <div class="scroll-container" id="scroll-container"></div>
    <div class="parallax-container">
        <div class="parallax-layer-1">
          <div class="scale">
            <div class="scale_point">2002
                <hr>
            </div>
            <div class="scale_point">2003
                <hr>
            </div>
            <div class="scale_point">2004
                <hr>
            </div>
            <div class="scale_point">2005
                <hr>
            </div>
            <div class="scale_point">2006
                <hr>
            </div>
          </div>
        </div>
        <div class="parallax-layer-2">
          <div class="scale">
            <div class="scale_point">2002
                <hr>
            </div>
            <div class="scale_point">2003
                <hr>
            </div>
            <div class="scale_point">2004
                <hr>
            </div>
            <div class="scale_point">2005
                <hr>
            </div>
            <div class="scale_point">2006
                <hr>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {},
  methods: {
    wheelHandler(event) {
      console.log(event)
      event.view.scrollBy(event.deltaY,0)
    }
  }
}
</script>

<style scoped lang="scss">

  html,
  body {
      height: 100%;
      width: 100%;
      margin: 0;
      padding: 0;
      position: relative;
  }

  .parallax-container {
      position: fixed;
      display: flex;
      bottom: 0px;
      left: 0px;
      width: 180%;
      height: 600px;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: flex-end;
  }

  .scroll-container {
      position: absolute;
      height: 600px;
      width: 180vw;
      z-index: 10;
      bottom: 0px;
      left: 0px;
      //background-color: black;
  }

  .parallax-layer-1 {
      outline: 1px dotted black;
      height: 300px;
      width: 80%;
      background-color: antiquewhite;
      text-align: center;
  }

  .parallax-layer-2 {
      outline: 1px solid salmon;
      height: 300px;
      width: 100%;
      margin-left: -30%;
      background-color: cadetblue;
      box-shadow: 0 -20px 20px rgba(0, 0, 0, 0.5);
      text-align: center;
  }

  .scale {
      display: flex;
      height: 50px;
      width: 800px;
      //background-color: aqua;
      justify-content: space-evenly;
      border-bottom: 1px solid black;
      border-left: 1px solid black;
      border-right: 1px solid black;
      margin: 50px auto;
  }

  .scale_point {
      width: 50px;
  }

  .scale_point hr {
      width: 30px;
      transform: rotateZ(90deg);
      margin-top: 15px;
  }

</style>
