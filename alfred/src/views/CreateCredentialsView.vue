<template>
    <AppContainer title="Contraseñas">
        <div class="form-container">
            <input type="text" placeholder="nombre" v-model="credential.name">
            <input type="text" placeholder="usuario" v-model="credential.user">
            <input type="text" placeholder="contraseña" v-model="credential.pass">
            <input type="text" placeholder="url" v-model="credential.url">
            <textarea name="notes" placeholder="notas" id="" cols="30" rows="10" v-model="credential.notes"></textarea>
            <input type="text" placeholder="etiqueta" v-model="credential.tags">
        </div>
        <button @click="save_credentials">Guardar</button>
    </AppContainer>
</template>

<script async setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import AppContainer from '../components/AppContainer.vue'

const router = useRouter()

const credential = reactive({
    name: '',
    user: '',
    pass: '',
    url: '',
    notes: '',
    tags: '',
})

async function save_credentials() {
    // save data
    // go to main page
    router.push({ name: 'credentials' })
}

</script>

<style scoped>
.form-container {
    display: flex;
    flex-direction: column;
    margin: 10px;
}

input,
textarea {
    margin-bottom: 5px;
}
</style>