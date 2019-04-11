const ClockPlugin = {
  install(_Vue) {

    const vm = new _Vue({
      data() {
        return {
          now: Date.now()
        }
      },
      computed: {
        time() {
          let d = new Date(this.now);
          return `${d.getHours()}:${d.getMinutes()}`;
        },
        dateString() {
          return new Date(this.now).toDateString();
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
          this.now = Date.now()
        }
      },
      created() {
        let d = new Date(this.now);
        setTimeout(() => {
            this.update();
            setInterval(() => this.update(), 60 * 1000);
          },
          (60 - d.getSeconds()) * 1000
        );
      }
    });

    _Vue.prototype.$clock = vm;
  }
};

export default ClockPlugin;