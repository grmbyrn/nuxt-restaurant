// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import vue from 'eslint-plugin-vue'
import prettier from 'eslint-config-prettier'

export default withNuxt([
  // Your custom config
  {
    plugins: {
      vue
    },
    rules: {
      ...vue.configs['vue3-recommended'].rules,
      // Optional: turn off the attribute linebreak rule
      'vue/first-attribute-linebreak': 'off'
    }
  },
  prettier // ⬅ using imported object instead of string
])
