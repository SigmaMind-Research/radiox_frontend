<template>
    
</template>

<script>
export default {
    data() {
        return {
            briVal: 50,
            conVal: 50,
            value: '',
            tools: ['Brigntness', 'contrast']
        }
    },
    emits: ['close', 'brig', 'cont']
}
</script>
<style>
#myFileInput {
    display: none;
}
</style>