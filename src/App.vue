<template>
    <div>
       <router-view></router-view>
    </div>
</template>

<script>

import Index from './components/Index'
import Zone from './components/Zone'

export default {
  name: 'App',
  components: {
    Index,
    Zone
  }
}

</script>
