<template>
    <Toast group="primary"/>
    <div class="surface-ground px-4 py-3 md:px-6 lg:px-8 mt-8">
        <div class="flex flex-wrap shadow-2">
            <div class="w-full lg:w-6 px-0 py-4 lg:p-7 bg-blue-50">

                <div class="text-center h-30rem flex align-items-center">
                    <img alt="Image" class="mb-6 w-6 mx-auto"
                         src="/src/assets/logo.png">
                </div>
            </div>
            <div class="w-full lg:w-6 p-4 lg:p-7 surface-card">
                <div class="flex align-items-center justify-content-center mb-7">
                    <span class="text-2xl font-medium text-900">Acceso al sistema notarial</span>
                </div>
                <form @submit="onSubmit">
                    <label class="block text-900 font-medium mb-2" for="txtUsuario">Usuario</label>
                    <InputText id="txtUsuario" autocomplete="false" autofocus
                               class="w-full mb-3 p-3"
                               placeholder="Ingrese el nombre de usuario"
                               type="text"
                               v-bind="form.username"/>

                    <label class="block text-900 font-medium mb-2" for="txtPassword">Contraseña</label>
                    <InputText id="txtPassword" class="w-full mb-3 p-3" placeholder="Contraseña" type="password"
                               v-bind="form.password"/>

                    <!--                <div class="flex align-items-center justify-content-between mb-6">-->
                    <!--                    <div class="flex align-items-center">-->
                    <!--                        <Checkbox id="rememberme4" v-model="checked4" :binary="true" class="mr-2"></Checkbox>-->
                    <!--                        <label for="rememberme4">Remember me</label>-->
                    <!--                    </div>-->
                    <!--                    <a class="font-medium text-blue-500 hover:text-blue-700 cursor-pointer transition-colors transition-duration-150">Forgot-->
                    <!--                        password?</a>-->
                    <!--                </div>-->

                    <Button :loading="loading" class="w-full py-3 font-medium"
                            icon="pi pi-sign-in"
                            label="Ingresar al sistema"
                            type="submit"
                    >
                    </Button>
                </form>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {useForm} from "vee-validate";
import * as yup from 'yup';
import {ERRORMESSAGES} from "@/composables/messages";
import {onBeforeMount, ref} from "vue";
import http from "@/composables/httpClient";
import {BackofficeUrls, RESOURCESBACKOFFICE} from "@/views/backoffice/params";
import {configMessageSuccessNotification} from "@/composables/notifications/configMessageSuccessNotification";
import {AxiosError, AxiosResponse} from "axios";
import {useToast} from "primevue/usetoast";
import {configMessageErrorNotification} from "@/composables/notifications/configMessageErrorNotification";
import {useAuthStore} from "@/stores/auth";
import {useRouter} from "vue-router";

const formErrors = ref({});
const validatedFormData = ref({});
const loading = ref(false);
const toast = useToast();
const autStore = useAuthStore();
const router = useRouter();

onBeforeMount(() => {
})

const schema = yup.object({
    username: yup.string().required(ERRORMESSAGES.required()),
    password: yup.string().required(ERRORMESSAGES.required()),
});

const {defineComponentBinds, handleSubmit, resetForm, errors, setFieldValue, setValues} = useForm({
    validationSchema: schema,
});

const form = ref({
    username: defineComponentBinds('username'),
    password: defineComponentBinds('password'),
});

const onSubmit = handleSubmit((values) => {
    validatedFormData.value = values;
    login(validatedFormData.value);
});

const login = (formData) => {

    loading.value = true;

    http.post(BackofficeUrls.post(RESOURCESBACKOFFICE.Login), formData).then((response: AxiosResponse) => {
        toast.add(configMessageSuccessNotification());
        const loginResponse = response.data;
        autStore.setCredentials(loginResponse.access_token, loginResponse.user);
        router.go(0);
        loading.value = false;
    }).catch((e: AxiosError) => {
        toast.add(configMessageErrorNotification(e, 'No se pudo ingresar al sistema, intente nuevamente: ' + e.code));
        loading.value = false;
    })
}

</script>

<style scoped>

</style>