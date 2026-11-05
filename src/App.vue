<script setup>
import { computed, ref } from 'vue'
import SiteHeader from './components/SiteHeader.vue'
import HeroBanner from './components/HeroBanner.vue'
import ProductCard from './components/ProductCard.vue'
import AuthView from './views/AuthView.vue'
import CartDrawer from './components/CartDrawer.vue'

// 所有演示数据保存在本地状态中，不会连接后端或触发支付。
const products = ref([
  { id: 1, name: '云朵轻感保温杯', category: '居家日用', price: 89, oldPrice: 129, badge: '人气 TOP', image: 'photo-1602143407151-7111542de6e8', color: '沙岩白', rating: '4.9', reviews: 128 },
  { id: 2, name: '山野手作陶瓷碗', category: '餐厨好物', price: 56, oldPrice: 79, badge: '手作推荐', image: 'photo-1578749556568-bc2c40e68b61', color: '燕麦色', rating: '4.8', reviews: 86 },
  { id: 3, name: '原木香氛扩香礼盒', category: '香氛生活', price: 128, oldPrice: 168, badge: '礼遇之选', image: 'photo-1602874801007-bd458bb1b8b6', color: '雪松木', rating: '5.0', reviews: 203 },
  { id: 4, name: '慢时光编织托特包', category: '通勤穿搭', price: 159, oldPrice: 219, badge: '新品上市', image: 'photo-1544816155-12df9643f363', color: '麦芽棕', rating: '4.9', reviews: 64 },
])
const cart = ref([])
const activeView = ref('home')
const activeCategory = ref('全部商品')
const selectedImage = ref(null)
const cartOpen = ref(false)
const currentSlide = ref(0)
const categories = ['全部商品', '居家日用', '餐厨好物', '香氛生活', '通勤穿搭']
const filteredProducts = computed(() => activeCategory.value === '全部商品' ? products.value : products.value.filter(p => p.category === activeCategory.value))
const cartCount = computed(() => cart.value.reduce((sum, item) => sum + item.quantity, 0))

function addToCart(product) {
  const existing = cart.value.find(item => item.id === product.id)
  if (existing) existing.quantity += 1
  else cart.value.push({ ...product, quantity: 1 })
  cartOpen.value = true
}
function updateQuantity(id, amount) {
  const item = cart.value.find(product => product.id === id)
  if (!item) return
  item.quantity += amount
  if (item.quantity <= 0) removeFromCart(id)
}
function removeFromCart(id) { cart.value = cart.value.filter(item => item.id !== id) }
function showProducts(category = '全部商品') {
  activeCategory.value = category
  activeView.value = 'products'
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
function goHome() { activeView.value = 'home'; window.scrollTo({ top: 0, behavior: 'smooth' }) }
</script>

<template>
  <div class="app-shell">
    <div class="announcement"><span>✦</span> 把日常过成喜欢的样子 <span class="announcement-right">满 ¥199 包邮 · 用心挑选每一件好物</span></div>
    <SiteHeader :cart-count="cartCount" @navigate="activeView = $event" @open-cart="cartOpen = true" @home="goHome" />

    <main v-if="activeView === 'home'">
      <HeroBanner v-model="currentSlide" @shop="showProducts()" />
      <section class="benefits content-width">
        <div><span class="benefit-icon">✿</span><span><b>认真挑选</b><small>好物甄选 · 品质生活</small></span></div>
        <div><span class="benefit-icon">↗</span><span><b>安心售后</b><small>7 天无忧退换体验</small></span></div>
        <div><span class="benefit-icon">♧</span><span><b>暖心包装</b><small>送给自己，也送给朋友</small></span></div>
      </section>
      <section class="products-section content-width">
        <div class="section-heading"><div><p class="eyebrow">A LITTLE JOY EVERY DAY</p><h2>今天的心动好物</h2><p class="section-subtitle">为平凡日常，添一点点不平凡</p></div><button class="text-link" @click="showProducts()">探索全部好物 <span>↗</span></button></div>
        <div class="product-grid"><ProductCard v-for="product in products" :key="product.id" :product="product" @preview="selectedImage = $event" @add="addToCart" /></div>
      </section>
      <section class="story content-width"><div class="story-image"><img src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1100&q=85" alt="阳光照进温柔的居家空间" /></div><div class="story-copy"><p class="eyebrow">LIVING WITH INTENTION</p><h2>好好生活，<br/>从一件小事开始。</h2><p>我们相信，生活的质感藏在那些被认真对待的细节里。一只顺手的杯子，一束温柔的光，都能让普通的一天变得不一样。</p><button class="button button-dark" @click="showProducts()">逛逛精选好物 <span>↗</span></button></div></section>
    </main>

    <main v-else-if="activeView === 'products'" class="products-page content-width">
      <div class="breadcrumb">首页 <span>/</span> 全部好物</div><div class="section-heading"><div><p class="eyebrow">FIND YOUR LITTLE JOY</p><h2>把喜欢的带回家</h2><p class="section-subtitle">每一件好物，都值得被认真挑选</p></div></div>
      <div class="category-tabs"><button v-for="category in categories" :key="category" :class="{ active: activeCategory === category }" @click="activeCategory = category">{{ category }}</button></div>
      <div class="product-grid"><ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" @preview="selectedImage = $event" @add="addToCart" /></div>
      <p v-if="!filteredProducts.length" class="empty-products">这个分类还没有商品，试试其他分类吧。</p>
    </main>

    <AuthView v-else-if="activeView === 'login' || activeView === 'register'" :mode="activeView" @switch="activeView = $event" @success="activeView = 'home'" />

    <footer class="site-footer"><div class="footer-inner"><div><a class="brand footer-brand" href="#" @click.prevent="goHome"><span class="brand-mark">拾</span><span class="brand-name">拾光集<small>GOOD THINGS, SLOW DAYS</small></span></a><p>认真生活，慢慢喜欢。<br/>为你的日常，挑一点好物。</p></div><div class="footer-links"><span>关于拾光集</span><span>配送与售后</span><span>联系我们</span><span>© 2026 拾光集 · 前端交互练习 Demo</span></div></div></footer>

    <div v-if="selectedImage" class="image-modal" @click.self="selectedImage = null" @keydown.esc="selectedImage = null"><button class="modal-close" aria-label="关闭预览" @click="selectedImage = null">×</button><img :src="selectedImage" alt="商品大图预览" /></div>
    <CartDrawer :open="cartOpen" :items="cart" @close="cartOpen = false" @update="updateQuantity" @remove="removeFromCart" @shop="showProducts()" />
    <div v-if="activeView !== 'home'" class="back-home" @click="goHome" title="回到首页">⌂</div>
  </div>
</template>
