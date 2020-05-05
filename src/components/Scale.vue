<template>
  <div>
    <h1>scale</h1>

    <div class="container">
      <svg
        :width="xEnd"
        height="50%"
      >

        <line 
          :x1="x0" 
          y1="80" 
          :x2="xEnd" 
          y2="80" 
          style="stroke:rgb(0,0,0);stroke-width:2"/>

        <line 
          v-for="line in smallMarksArr"
          :key="line.x"
          :x1="line.x" 
          y1="80" 
          :x2="line.x" 
          y2="60" 
          style="stroke:rgb(0,0,0);stroke-width:1" />

        <line 
          v-for="(line, index) in marksArr"
          :key="index+1"
          :x1="line.x" 
          y1="80" 
          :x2="line.x" 
          y2="30" 
          style="stroke:rgb(0,0,0);stroke-width:2" />

        <text 
          v-for="mark in signsArr"
          :key="mark.value"
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
export default {
  name: "Scale",
  props: {
    startDate: Number,
    endDate: Number,
    step: Number
  },
  data() {
    return {
      wpx: window.screen.availWidth,
      x0: 0,
      xEnd: 0,
      marksArr: [],
      signsArr: [],
      smallMarksArr: [],
    }
  },

  created() {
    this.calculateScale()
  },

   methods: {
      calculateScale() {
        const x0 = 0;
        this.xEnd = Math.ceil(this.wpx * 1.3);
        const minMarkStep = Math.ceil(this.wpx / 10);
        
        let markQnt = Math.ceil((this.endDate - this.startDate) / this.step );
        let markStep = Math.floor(this.xEnd / markQnt);

        if (markStep < minMarkStep) {
          this.xEnd = minMarkStep * markQnt;
          markStep = minMarkStep;
        }

        let sign = this.startDate;
        for (let x = x0; x <= this.xEnd; x += markStep) {
          this.marksArr.push({x})
          this.signsArr.push({
            x,
            value: String(sign)})
          sign += this.step
        }

        let smallMarkQnt = 12 * markQnt;
        if (this.step !== 1) {
          smallMarkQnt = this.step * markQnt
        }
        const smallMArkStep = Math.floor(this.xEnd / smallMarkQnt)

        for (let x = x0; x <= this.xEnd; x += smallMArkStep) {
          this.smallMarksArr.push({x})
        }
      }
   }

};


</script>

<style scoped>
.container {
  margin: 50px 100px;
}
.timeline {
  position: relative;
  display: flex;
}
.timeline-track {
  position: absolute;
  top: 5px;
  width: 100%;
  height: 2px;
  background-color: #dfe3e4;
  z-index: 1;
}
</style>
