<script setup>
import { computed, ref } from 'vue'
const props = defineProps({ mode: { type: String, default: 'login' } })
const emit = defineEmits(['switch', 'success'])
const isLogin = computed(() => props.mode === 'login')
const name = ref('')
const email = ref('')
const password = ref('')
const error = ref('')
const message = ref('')
function submit() {
  error.value = ''; message.value = ''
  if (!email.value.trim() || !/^\S+@\S+\.\S+$/.test(email.value)) { error.value = '请输入有效的邮箱地址'; return }
  if (!isLogin.value && !name.value.trim()) { error.value = '请填写你的昵称'; return }
  if (password.value.length < 6) { error.value = '密码至少需要 6 位'; return }
  message.value = isLogin.value ? '登录演示成功，欢迎回来！' : '注册演示成功，欢迎加入拾光集！'
  window.setTimeout(() => emit('success'), 900)
}
</script>
<template><main class="auth-page"><div class="auth-visual"><img src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1400&q=90" alt="阳光下的温柔生活空间"/><div class="auth-visual-copy"><p class="eyebrow">A LITTLE PLACE TO SLOW DOWN</p><h2>认真生活，<br/>慢慢喜欢。</h2><p>让日常每一个小小的瞬间，<br/>都有值得珍藏的温柔。</p></div></div><div class="auth-panel"><div class="auth-card"><p class="eyebrow">{{ isLogin ? 'WELCOME BACK' : 'JOIN OUR LITTLE COMMUNITY' }}</p><h1>{{ isLogin ? '欢迎回来' : '创建新账户' }}</h1><p class="auth-intro">{{ isLogin ? '登录拾光集，继续发现日常里的小美好。' : '加入我们，让喜欢的生活慢慢发生。' }}</p><form @submit.prevent="submit"><label v-if="!isLogin" class="form-field"><span>你的昵称</span><input v-model="name" type="text" placeholder="怎么称呼你？" autocomplete="name"/></label><label class="form-field"><span>邮箱地址</span><input v-model="email" type="email" placeholder="hello@example.com" autocomplete="email"/></label><label class="form-field"><span>密码</span><input v-model="password" type="password" placeholder="至少 6 位密码" :autocomplete="isLogin ? 'current-password' : 'new-password'"/></label><p v-if="error" class="form-message error">{{ error }}</p><p v-if="message" class="form-message success">{{ message }}</p><button class="button button-dark auth-submit" type="submit">{{ isLogin ? '登录' : '注册' }} <span>↗</span></button></form><p class="auth-switch">{{ isLogin ? '还没有账户？' : '已经有账户了？' }}<button @click="emit('switch', isLogin ? 'register' : 'login')">{{ isLogin ? '立即注册' : '去登录' }}</button></p><p class="demo-note">纯前端演示 · 不会创建真实账户，也不会提交信息。</p></div></div></main></template>
