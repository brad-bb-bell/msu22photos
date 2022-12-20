<template>
  <p class="w-3/5 py-5 ml-auto mr-auto text-center text-sm font-serif text-[#002a61]">
    {{ description }}
  </p>
</template>
<script>
export default {
  props: {
    description: String,
  },
};
</script>
