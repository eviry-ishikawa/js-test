// counter.js

export default {
  template: `
    <div>
      <span class="count">{{ count }}</span>
    </div>
  `,

  data () {
    return {
      count: 0
    }
  },

  methods: {
    increment () {
      this.count++
    }
  }
}
