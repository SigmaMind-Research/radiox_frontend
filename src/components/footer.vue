<template>
    <v-layout class="overflow-visible" style="height: 56px;">
        <v-bottom-navigation v-model="value" color="blue" grow>
            <v-row justify="center">

                <v-menu transition="scroll-y-reverse-transition">
                    <template v-slot:activator="{ props }">
                        <v-btn class="ma-2" v-bind="props">
                            <v-icon>mdi-pencil</v-icon>

                            Tools
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item  v-for="tool in tools" :key="tool" link>
                            <v-list-item-title v-text="tool"></v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>

                    <v-menu transition="scroll-y-reverse-transition">
                        <template v-slot:activator="{ props }">
                            <v-btn class="ma-2" v-bind="props">
                                <v-icon icon="mdi-plus-circle" onclick="document.getElementById('myFileInput').click()" ></v-icon>
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
                            <v-list>
                                <v-list-item v-for="n in 5" :key="n" link>
                                    <v-list-item-title v-text="'Item ' + n"></v-list-item-title>
                                </v-list-item>
                            </v-list>
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
            tools:['Brigntness','contrast']
        }
    }
}
</script>
<style>
#myFileInput {
    display:none;
}
</style>