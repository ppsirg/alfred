<template>
    <AppContainer title="Contraseñas">
        <div class="search-container">
            <input type="text" v-model="search_param">
            <button>-O</button>
            <router-link to='/credentials/new/'>
                new
            </router-link>
        </div>
        <div class="pass-container">
            <div class="secret-card-container">
                <div v-for="(scrt, scr_inx) in credential_list" class="secret-card">
                    <div class="card-header">
                        <span>{{ scrt.name }}</span>
                        <button @click="show_secret(scr_inx)">
                            <img class="watch-ico" v-show="scrt.visible" src="@/assets/img/eye-open.svg" alt="">
                            <img class="watch-ico" v-show="!scrt.visible" src="@/assets/img/eye-closed.svg" alt="">
                        </button>
                    </div>
                    <div v-show="scrt.visible">
                        usuario: {{ scrt.user }}
                        contraseña: {{ scrt.pass }}
                        notas: {{ scrt.notes }}
                    </div>
                </div>
            </div>
        </div>
    </AppContainer>
</template>

<script async setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue';
import AppContainer from '../components/AppContainer.vue'
import { get_credentials, list_credentials } from '../api/credentials.js'

const search_param = ref('')
const credential_list = ref([])

credential_list.value = await list_credentials()
credential_list.value.forEach(elm => {
    elm['visible'] = false
    clear_credential(elm)
})

async function show_secret(scr_inx) {
    let is_visible = credential_list.value[scr_inx].visible
    if (!is_visible) {
        let data = await get_credentials()
        credential_list.value[scr_inx] = { ...credential_list.value[scr_inx], ...data }
    } else {
        clear_credential(credential_list.value[scr_inx])
    }
    credential_list.value[scr_inx].visible = !is_visible
}

function clear_credential(obj) {
    const clean_obj = {
        user: '',
        pass: '',
        tags: '',
        notes: '',
    }
    obj = { ...obj, clean_obj }
}

</script>

<style>
.secret-card-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.secret-card {
    min-width: 150px;
    width: 20%;
    border: 2px solid cyan;
    border-radius: 10px;
    font-family: monospace;
    padding: 5px;
    margin: 3px;
}

.card-header {
    display: flex;
    margin-bottom: 5px;
}

.card-header span {
    flex-grow: 1;
}

.watch-ico {
    height: 1.2em;
}
</style>