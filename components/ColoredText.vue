<script>
export default {
  name: 'ColoredText',

  props: {
    text: {
      type: String,
      required: true,
    },

    colors: {
      type: Array,
      required: false,
      default: () => ['#0066a4', '#2f93d0', '#28bdd8'],
    },
  },

  data() {
    return {
      loaded: false,
    };
  },

  created() {
    this.triggerLoaded();
  },

  methods: {
    triggerLoaded() {
      this.loaded = false;
      setTimeout(() => {
        this.loaded = true;
      }, 200);
    },
  },

  render(h) {
    const output = [];
    let i = 0;

    /* eslint-disable no-restricted-syntax */
    for (const c of this.text) {
      if (c === ' ') {
        output.push(h('span', { style: { display: 'inline' } }, ' '));
      } else if (c === '\\') {
        output.push(h('br'));
      } else {
        output.push(h('span', {
          style: {
            color: this.colors[i],
            'clip-path': this.loaded
              ? 'polygon(0 0,100% 0,100% 100%,0 100%)'
              : 'polygon(0 0, 0 0, 0 100%, 0 100%)',
          },
          class: {
            'is-loaded': this.loaded,
          },
        }, c));
        i += 1;
        if (c !== ' ' && i >= this.colors.length) {
          i = 0;
        }
      }
    }
    /* eslint-enable no-restricted-syntax */
    return h('span', { class: 'c-colored-text' }, output);
  },

};
</script>

<style lang="scss">
.c-colored-text {
  // Use \ inside text to do linebreak
  white-space: nowrap;
  text-overflow: unset;
  overflow:visible;
  span {
    // display: inline-block
    text-overflow: unset;
    overflow:visible;
    box-sizing: content-box;
    // height: 150px;
    padding-top: 4px;
    padding-right: 0px;
    // padding-bottom: 5px;
  }
}
</style>
