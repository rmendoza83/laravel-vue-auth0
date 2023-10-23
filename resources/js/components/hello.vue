<template>
    <div id="app">
        <h1>{{ message }}</h1>

        <button @click="doSomething">Say hello.</button>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            message: 'Welcome to Vue 3!'
        };
    },
    methods: {
        doSomething() {
            alert('Hello!');
        }
    }
};
</script>
  