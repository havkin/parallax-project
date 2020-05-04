<template>
  <div class="container" @wheel.prevent="wheelHandler">

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
        drag me
        <br />
        X: {{ x }} / Y: {{ y }}
      </p>
    </vue-draggable-resizable>
    <div
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
      <svg
        width="100%"
        height="50%"
      >
        <rect width="100%" height="100%" fill="red" />

        <line x1="100" y1="80" x2="400" y2="80" style="stroke:rgb(0,0,0);stroke-width:2"/>
        <line 
          v-for="(line, index) in shortLines"
          :key="index"
          :x1="line.x1" 
          :y1="line.y1" 
          :x2="line.x2" 
          :y2="line.y2" 
          style="stroke:rgb(0,0,0);stroke-width:1" />

        <line 
          v-for="(line, index) in lines"
          :key="index"
          :x1="line.x1" 
          :y1="line.y1" 
          :x2="line.x2" 
          :y2="line.y2" 
          style="stroke:rgb(0,0,0);stroke-width:2" />

        <text 
          v-for="(mark, index) in marks"
          :key="index"
          :x="mark.x" 
          y="95" 
          fill="black"
        >
          {{ mark.value }}
        </text>

      </svg>
    </div>
  </div>
</template>

<script>
// import VueDraggableResizable from 'vue-draggable-resizable'

export default {
  name: "Home",

  data() {
    return {
      x: 0,
      y: 0,
      shortLines: [
        {x1: 150, y1:80, x2: 150, y2: 60},
        {x1: 250, y1:80, x2: 250, y2: 60},
        {x1: 350, y1:80, x2: 350, y2: 60},

      ],
      lines : [
        {x1: 100, y1:80, x2: 100, y2: 30},
        {x1: 200, y1:80, x2: 200, y2: 30},
        {x1: 300, y1:80, x2: 300, y2: 30},
        {x1: 400, y1:80, x2: 400, y2: 30},
      ],

      marks: [
        {x: 83, value:'2001'},
        {x: 183, value: '2002'},
        {x:283, value: '2003'},
        {x: 383, value: '2004'}
      ]
    };
  },

  components: {},
  methods: {
    wheelHandler(event) {
      event.view.scrollBy({ left: event.deltaY, top: 0, behavior: "smooth" });
    },

    onDrag: function(x, y) {
      this.x = x;
      this.y = y;
    },

    onDragstop: function(x, y) {
      console.log (x, y);
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.relax {
  display: flex;
  flex-direction: column;
  justify-content:flex-end;
  width: 3000px;
  height: 200px;
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
