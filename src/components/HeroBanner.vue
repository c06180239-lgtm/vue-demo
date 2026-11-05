<script setup>
import { computed, onMounted, onUnmounted } from 'vue'
const props = defineProps({ modelValue: { type: Number, default: 0 } })
const emit = defineEmits(['update:modelValue', 'shop'])
const slides = [
  { kicker: 'A SOFTER WAY TO LIVE', title: '把喜欢的日子，\n慢慢过。', desc: '让日常的每一个小细节，都有被温柔以待的理由。', button: '发现今日好物', image: 'photo-1494438639946-1ebd1d20bf85', tag: '拾光生活提案 · VOL. 08' },
  { kicker: 'LITTLE THINGS, BIG JOY', title: '为生活留一点\n松弛和欢喜。', desc: '那些恰到好处的美好，正在等你发现。', button: '逛逛精选好物', image: 'photo-1600210492486-724fe5c67fb0', tag: '把日子过成喜欢的样子' },
  { kicker: 'MADE FOR SLOW DAYS', title: '好好生活，\n从此刻开始。', desc: '好物不必很多，刚好喜欢就好。', button: '探索生活灵感', image: 'photo-1602874801007-bd458bb1b8b6', tag: '留一点时间给自己' },
]
const current = computed(() => slides[props.modelValue % slides.length])
let timer
onMounted(() => { timer = window.setInterval(() => emit('update:modelValue', (props.modelValue + 1) % slides.length), 5000) })
onUnmounted(() => window.clearInterval(timer))
</script>
<template><section class="hero content-width"><div class="hero-photo" :style="{ backgroundImage: `linear-gradient(90deg,rgba(35,35,30,.42),rgba(35,35,30,.06)),url(https://images.unsplash.com/${current.image}?auto=format&fit=crop&w=2000&q=90)` }"></div><div class="hero-content"><p class="hero-kicker">{{ current.kicker }}</p><h1>{{ current.title }}</h1><p class="hero-description">{{ current.desc }}</p><button class="button button-light" @click="emit('shop')">{{ current.button }} <span>↗</span></button></div><div class="hero-tag">{{ current.tag }}</div><div class="slide-controls"><button v-for="(slide, index) in slides" :key="slide.kicker" :class="{ selected: index === modelValue }" :aria-label="`第${index + 1}张轮播`" @click="emit('update:modelValue', index)"></button><span>0{{ modelValue + 1 }} <i>/</i> 0{{ slides.length }}</span></div></section></template>
