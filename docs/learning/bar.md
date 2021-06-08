_Hello, {{ msg }}_

<RedDiv>

_Current count is: {{ count }}_

</RedDiv>

<button @click="count++">Click Me!</button>

<script>
import { h, ref } from 'vue'

const RedDiv = (_, ctx) => h(
  'div',
  {
    class: 'red-div',
  },
  ctx.slots.default()
)

export default {
  components: {
    RedDiv,
  },

  setup() {
    const msg = 'Vue in Markdown'
    const count = ref(0)

    return {
      msg,
      count,
    }
  }
}
</script>

<style>
.red-div {
  color: red;
}
</style>