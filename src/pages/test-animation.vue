<template>
  <q-page padding>
    <div class="flex justify-center">
      <div class="center-div">
        <div class="flip-card">
          <div class="flip-card-inner" v-bind:class="{flipcard:flip}">
            <div class="flip-card-front">
              <h2>A</h2>
            </div>
            <div class="flip-card-back">
              <h2>B</h2>
            </div>
          </div>
        </div>
        <q-btn color="black" label="Flip" @click="flip = !flip"/>
      </div>
    </div>
  </q-page>
</template>
<script>
export default {
  data() {
    return {
      flip: false
    };
  }
};
</script>

<style scoped lang="scss">
.center-div {
  text-align: center;
}
.flip-card {
  background-color: transparent;
  width: 300px;
  height: 200px;
  border: 1px solid #f1f1f1;
  perspective: 1000px;
  border-radius: 10px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  border-radius: 10px;
}

.flipcard {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

.flip-card-front {
  background-color: paleturquoise;
  color: black;
}

.flip-card-back {
  background-color: teal;
  color: white;
  transform: rotateY(180deg);
}
</style>
