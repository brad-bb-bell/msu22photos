<template>
  <div class="absolute top-0 right-0 text-white cursor-pointer text-4xl p-1 mr-2" @click.stop="$emit('hide')">
    <div class="w-12 h-12 bg-black flex justify-center rounded-full">&times;</div>
  </div>
</template>
