# Installation

```
import VueApi from 'vue_api/vue_api'

Vue.use(VueApi)
```

# How to use

this.$api.get('https://jsonplaceholder.typicode.com/posts/1')

this.$api.post('https://jsonplaceholder.typicode.com/posts', {})

this.$api.put('https://jsonplaceholder.typicode.com/posts/1', {})

this.$api.patch('https://jsonplaceholder.typicode.com/posts/1', {})

this.$api.delete('https://jsonplaceholder.typicode.com/posts/1', {})