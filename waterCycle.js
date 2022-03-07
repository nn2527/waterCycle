const App = Vue.createApp({
  data() {
    return {
      typeHere: '',
      count: 20,
      evaporation: false,
      condensation: false,
      precipitation: false,
      learning: false,
      printcontent: ""
    }
  },
  methods: {
    seeChange() {
           
      if (this.typeHere.toLowerCase() == 'evaporation') {
        this.learning = true;
        this.evaporation = true;
        this.printcontent = "Evaporation is the process by which water changes from a liquid to a gas or vapor. Evaporation is the primary pathway that water moves from the liquid state back into the water cycle as atmospheric water vapor.";
        //Source of above definition: https://www.usgs.gov/special-topics/water-science-school/science/evaporation-and-water-cycle#:~:text=Evaporation%20is%20the%20process%20by,cycle%20as%20atmospheric%20water%20vapor.
      
      
      } else if (this.typeHere.toLowerCase() == 'condensation') {
        if (this.evaporation == true) {
          this.condensation = true;
          this.printcontent = "Condensation is the process by which water vapor in the air is changed into liquid water. Condensation is crucial to the water cycle because it is responsible for the formation of clouds. Condensation is the opposite of evaporation.";
        } else {
          alert('Be careful with the sequence! What comes before condensation?');
        }
      
      } else if (this.typeHere.toLowerCase() == 'precipitation') {
        if (this.evaporation == true && this.condensation == true) {
          this.precipitation = true;
          this.printcontent="Precipitation is water released from clouds in the form of rain, freezing rain, sleet, snow, or hail. It is the primary connection in the water cycle that provides for the delivery of atmospheric water to the Earth.";
        } else {
          alert('Be careful with the sequence! What come before precipitation?');
      }      
    
      } else {
        alert('Check your spelling and try again!');
      }
  }
  }
});

App.component('component-name', {
  data() {
    return {
    }
  },
  template: `<div class='dot' :class='{dotUp: this.$parent.evaporation, dotGather: this.$parent.condensation, dotDown:  this.$parent.precipitation}'></div>`,
});

App.mount("#app");

//for selecting text to make it appear in the input box, can refer to https://stackoverflow.com/questions/51953173/how-do-i-pass-input-text-using-v-onchange-to-my-vue-method


<!--   cloud effect from https://segmentfault.com/a/1190000041189786/en -->

const filter = document.querySelector("#turbulence");
let frames = 1;
let rad = Math.PI / 180;
let bfx, bfy;

function freqAnimation() {
    frames += .2

    bfx = 0.03;
    bfy = 0.03;

    bfx += 0.005 * Math.cos(frames * rad);
    bfy += 0.005 * Math.sin(frames * rad);

    bf = bfx.toString() + " " + bfy.toString();
    filter.setAttributeNS(null, "baseFrequency", bf);

    window.requestAnimationFrame(freqAnimation);
}

window.requestAnimationFrame(freqAnimation);
