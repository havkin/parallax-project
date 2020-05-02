<template>
  <div class="container"  @wheel.prevent="wheelHandler">

    <!-- <div class="drag-elements-contaner">
      <div class="drag-element" v-dragged="onDragged">
        "тащи меня"
      </div>
    </div> -->
    <vue-draggable-resizable 
      :w="100" 
      :h="100" 
      @dragging="onDrag" 
      @dragstop="onDragstop"

      class-name="drag-element"
      class-name-draggable="draggable-class"
      class-name-dragging="dragging-class"
    >
      <p>
        drag me <br>
        X: {{ x }} / Y: {{ y }}
      </p>
    </vue-draggable-resizable>
    <!-- <div 
      class="relax"
      v-rellax="{
      speed: 3,
      vertical: false,
      horizontal: true
    }"
    >I’m extra slow and smooth</div>
    <div 
      class="relax"
      v-rellax="{
      speed: 10,
      vertical: false,
      horizontal: true
    }"
    >
      I’m super fast!!
    </div> -->

    
  </div>
  
</template>

<script>
// import VueDraggableResizable from 'vue-draggable-resizable'

export default {
  name: "Home",

  data () {
    return {
      x: 0,
      y: 0
    }
  },


  components: {},
  methods: {

    wheelHandler(event) {
      event.view.scrollBy({left:event.deltaY, top:0, behavior: 'smooth'})
    },

    onDrag: function (x, y) {
      this.x = x
      this.y = y
    }

  }
}

</script>

<style scoped lang="scss">

.container {
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.relax {
  width: 3000px;
  height: 100px;
  border: 2px solid black;
}

.drag-element {
  border: 2px solid black;
  cursor: move;
}

.draggable-class {
  // background: blue;
}

.dragging-class {
  border: 2px solid blue;
}

</style>
