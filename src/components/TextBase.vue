<template>
  <div class="w-[800px] max-w-[80%] flex flex-col items-center my-[80px] mx-auto">
    <hr class="w-24 h-1 bg-[#eab715] mb-5" />
    <h2 class="mb-5 text-center text-4xl font-serif font-bold text-[#002a61] dark:text-white">
      {{ headline }}
    </h2>
    <p class="text-center text-sm dark:text-gray-300">
      {{ text }}
    </p>
  </div>
</template>
<script>
export default {
  props: {
    headline: String,
    text: String,
  },
};
</script>
