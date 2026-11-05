<script setup>
defineProps({ cartCount: { type: Number, default: 0 } })
const emit = defineEmits(['navigate', 'open-cart', 'home'])
</script>
<template>
<header class="site-header"><div class="header-inner"><a href="#" class="brand" @click.prevent="emit('home')"><span class="brand-mark">拾</span><span class="brand-name">拾光集<small>GOOD THINGS, SLOW DAYS</small></span></a><nav class="main-nav"><button class="nav-link active" @click="emit('home')">首页</button><button class="nav-link" @click="emit('navigate', 'products')">全部好物</button><button class="nav-link" @click="emit('navigate', 'products')">生活灵感</button><button class="nav-link" @click="emit('navigate', 'products')">关于我们</button></nav><div class="header-actions"><button class="icon-button search-icon" title="搜索">⌕</button><button class="icon-button account-icon" title="登录" @click="emit('navigate', 'login')">♙</button><button class="icon-button bag-icon" title="购物袋" @click="emit('open-cart')">♧<span v-if="cartCount" class="cart-count">{{ cartCount }}</span></button><button class="mobile-menu" @click="emit('navigate', 'products')">☰</button></div></div></header>
</template>
