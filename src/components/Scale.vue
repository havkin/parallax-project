<template>
  <div>
    <h1>scale</h1>

    <div class="container">
      <div id="timeline" class="timeline">
         <div class="year">
            <div class="">

            </div>

         </div>
        <div id="timeline-track" class="timeline-track">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Scale",
  data() {
    return {
      scale: {
        id: "$uuid",
        startDate: 2005,
        endDate: 2010,
        position: 1,
        subscript: "года",
        version: 1,
        pageHash: "s8GH2598"
      },
      barStep: 1,
      years: [],
    }
  },

   methods: {
      printBar () {
         const barDuration = this.scale.endDate - this.scale.startDate;
         this.barStep = barDuration > 20 ? 5 : 1;
         for (let year = this.scale.startDate; year <= this.scale.endDate; year +=  this.barStep) {
            this.years.push(year);
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
