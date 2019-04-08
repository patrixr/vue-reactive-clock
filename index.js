import Vue from 'vue'

const ClockPlugin = {
  install(_Vue) {

    const vm = new Vue({
      data() {
        return {
          now: new Date()
        }
      },
      computed: {
        time() {
          return `${this.now.getHours()}:${this.now.getMinutes()}`;
        },
        dateString() {
          return this.now.toDateString();
        },
        startOfDay() {
          let start = new Date(this.now);
          start.setHours(0,0,0,0);
          return start;
        },
        endOfDay() {
          var end = new Date(this.now);
          end.setHours(23,59,59,999);
          return end;
        }
      },
      methods: {
        update() {
          this.now = new Date();
        }
      },
      created() {
        setTimeout(() => {
            this.update();
            setInterval(() => this.update(), minute);
          },
          (60 - this.now.getSeconds()) * second // seconds to 60
        );
      }
    });

    _Vue.prototype.$clock = vm;
  }
};

export default ClockPlugin;