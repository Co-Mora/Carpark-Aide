<template>
    <div>
       <router-view></router-view>
    </div>
</template>

<script>

import Index from './components/App/Index'

export default {
  name: 'App',
  components: {
    Index,
  }
}

</script>
