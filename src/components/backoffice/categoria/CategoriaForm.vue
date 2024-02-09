<template>
  <form class="p-2" @submit="onSubmit">
    <div class="grid formgrid p-fluid p-3">
      <div class="field mb-4 col-12">
        <label class="font-medium text-900" for="txtNombreCategoria">Categoria de servicio o negocio</label>
        <InputText
            id="txtNombreCategoria"
            :class="{ 'p-invalid': formErrors.descripcion || errors.descripcion  }"
            autofocus
            placeholder=""
            size="small"
            type="text" v-bind="form.descripcion"/>
        <small class="p-error">
          {{ formErrors.descripcion || errors.descripcion || '' }}
        </small>
      </div>

      <div class="grid sticky bg-white bottom-0">
        <div class="col text-right">
          <Button :disabled="disableSubmitButton" :label="nameButtonForm" :loading="loading" class="p-button-primary"
                  icon="pi pi-save"
                  type="submit">
          </Button>
        </div>
      </div>
    </div>
  </form>
</template>

<script lang="ts" setup>
import http from "@/composables/httpClient";
import {useToast} from "primevue/usetoast";
import type {AxiosError, AxiosResponse} from "axios";
import {computed, ref} from "vue";
import {configMessageErrorNotification} from "@/composables/notifications/configMessageErrorNotification";
import {configMessageSuccessNotification} from "@/composables/notifications/configMessageSuccessNotification";
import {formValidationErrors} from "@/composables/helpers";
import {BackofficeUrls, RESOURCESBACKOFFICE} from "@/views/backoffice/params";
import * as yup from "yup";
import {useForm} from "vee-validate";
import type Empresa from "@/types/Empresa/Empresa";
import {ERRORMESSAGES} from "@/composables/messages";
import type Categoria from "@/types/Categoria/Categoria";
// import {userIdLogged} from "@/composables/authLoginData";

const formErrors = ref(<Empresa>{});
const validatedFormData = ref({});
const emits = defineEmits(['saved', 'error', 'cancel']);

const props = defineProps<{
  formData?: Object,
  typeForm: 'new' | 'update'
}>();

const loading = ref(false);
const toast = useToast();

const nameButtonForm = computed(() => {
  return props.typeForm === 'new' ? 'Guardar' : 'Actualizar';
});

const schema = yup.object().shape(<Categoria>{
  descripcion: yup.string().required(ERRORMESSAGES.required()),
});

const {defineComponentBinds, handleSubmit, resetForm, errors, setValues} = useForm({
  validationSchema: schema,
});

const disableSubmitButton = computed(() => {
  return Object.keys(errors.value).length > 0;
});

const form = ref<Categoria>({
  descripcion: defineComponentBinds('descripcion'),
});

const onSubmit = handleSubmit((formValues: Object) => {
  validatedFormData.value = formValues;

  if (props.typeForm == 'new')
    save(validatedFormData.value);
});
const getFormData = async () => {

  return <Categoria>{
    descripcion: "",
  };
};

getFormData().then((formData) => {
  setValues(formData);
});

const save = (formData: Categoria) => {

  loading.value = true;

  http.post(BackofficeUrls.post(RESOURCESBACKOFFICE.Categorias), formData, {}).then((response: AxiosResponse) => {

    toast.add(configMessageSuccessNotification());
    loading.value = false;
    setValues({
      descripcion: ''
    });
    emits('saved', {status: response.status, data: response.data});

  }).catch((e: AxiosError) => {

    toast.add(configMessageErrorNotification(e));
    loading.value = false;
    formErrors.value = formValidationErrors(e.response.data.errors);
    emits('error', {status: e.response?.status, message: e.message});

  });

};

</script>

<style>
.p-button.p-component.p-highlight[aria-label="Open"] {
  background-color: #198754;
  border: 1px solid #198754;
}

.p-button.p-component.p-highlight[aria-label="Closed"] {
  background-color: #6f42c1;
  border: 1px solid #6f42c1;
}

.p-button.p-component.p-highlight[aria-label="Lost"] {
  background-color: #ef4444;
  border: 1px solid #ef4444;
}
</style>