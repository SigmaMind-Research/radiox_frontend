<template>
    <v-layout class="overflow-visible" style="height: 56px;">
        <v-bottom-navigation v-model="value" color="blue" grow>
            <v-row justify="center">

                <v-menu transition="scroll-y-reverse-transition">
                    <template v-slot:activator="{ props }">
                        <v-btn class="ma-2" v-bind="props" @click="$emit('close')">
                            <v-icon>mdi-pencil</v-icon>
                            Tools
                        </v-btn>
                    </template>
                </v-menu>

                <v-menu transition="scroll-y-reverse-transition">
                    <template v-slot:activator="{ props }">
                        <v-btn class="ma-2" v-bind="props" onclick="document.getElementById('myFileInput').click()">
                            <v-icon icon="mdi-plus-circle"
                                ></v-icon>
                            <input type="file" id="myFileInput" />
                            Add
                        </v-btn>
                    </template>

                </v-menu>

                <v-menu transition="scroll-y-reverse-transition">
                    <template v-slot:activator="{ props }">
                        <v-btn class="ma-2" v-bind="props">
                            <v-icon>mdi-history</v-icon>
                            Recent
                        </v-btn>
                    </template>

                </v-menu>

            </v-row>

        </v-bottom-navigation>
    </v-layout>
</template>

<script>
export default {
    data() {
        return {
            value: '',
            tools: ['Brigntness', 'contrast']
        }
    },
    emits: ['close'],
}
</script>
<style>
#myFileInput {
    display: none;
}
</style>