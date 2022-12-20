<template>
  <hr class="mx-auto w-24 h-1 rounded md:my-6 bg-[#eab715]" />
  <p
    class="inset-0 flex items-center justify-center text-center text-4xl font-serif font-bold text-[#002a61] tracking-wider"
  >
    {{ text }}
  </p>
</template>
<script>
export default {
  props: {
    text: String,
  },
};
</script>
