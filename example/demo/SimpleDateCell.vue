<template functional>
  <div>
    <div>{{ props.display }}</div>
    <div :style="{ whiteSpace: 'pre' }">{{ props.title }}</div>
    <!-- <div>{{ props.date }}</div> -->
  </div>
</template>
<script>
export default {
  props: ['title', 'display', 'date'],
};
</script>
