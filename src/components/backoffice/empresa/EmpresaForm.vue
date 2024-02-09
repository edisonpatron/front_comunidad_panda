<template>
  <form class="p-2" @submit="onSubmit">
    <div class="grid formgrid p-fluid p-3">

      <!--      <div class="field mb-4 col-12">-->
      <!--        <FileUpload :auto="true" :maxFileSize="1000000" :multiple="false" accept="image/*" customUpload-->
      <!--                    @select="onImageSelect"-->

      <!--                    @uploader="onUploadImage"-->
      <!--        >-->
      <!--          <template #header="{ chooseCallback, uploadCallback, clearCallback, files }">-->
      <!--            <div class="flex">-->
      <!--              <Button class="px-2" @click="chooseCallback()"><i class="pi pi-upload mr-2"></i>Subir una foto de perfil-->
      <!--              </Button>-->
      <!--            </div>-->
      <!--          </template>-->
      <!--          <template #empty>-->
      <!--            <div v-if="imagePreview" class="flex justify-content-center">-->
      <!--              <img :src="imagePreview" class="border-circle w-10rem h-10rem">-->
      <!--            </div>-->
      <!--          </template>-->
      <!--        </FileUpload>-->
      <!--      </div>-->

      <div class="field mb-4 col-12">
        <label class="font-medium text-900" for="txtNombre">Representante</label>
        <InputText
            id="txtRepresentante"
            :class="{ 'p-invalid': formErrors.representante || errors.representante  }"
            autofocus
            placeholder="Apellidos y nombres"
            size="small"
            type="text" v-bind="form.representante"/>
        <small class="p-error">
          {{ formErrors.representante || errors.representante || '' }}
        </small>
      </div>

      <div class="field mb-4 col-12">
        <input id="txtSameName" v-model="confirmSameName" class="mr-2" type="checkbox"
               @change="handleCheckConfirmSameName"/>
        <label class="text-sm font-medium text-900" for="txtSameName">¿El nombre de la empresa es igual al del
          representante?</label>
      </div>


      <div class="field mb-4 col-12">
        <label class="font-medium text-900" for="txtNombre">Nombre de la empresa</label>
        <InputText
            id="txtEmpresa"
            :class="{ 'p-invalid': formErrors.empresa || errors.empresa  }"
            autofocus
            placeholder="Nombre de empresa o sus apellidos y nombres"
            size="small"
            type="text" v-bind="form.empresa"/>
        <small class="p-error">
          {{ formErrors.empresa || errors.empresa || '' }}
        </small>
      </div>

      <div class="field mb-4 col-12">
        <label class="font-medium text-900" for="txtWhatsapp">Numero de Whatsapp</label>
        <InputText
            id="txtWhatsapp"
            :class="{ 'p-invalid': formErrors.whatsapp || errors.whatsapp  }"
            autofocus
            placeholder="Codigo Pais + numero de telefono"
            size="small"
            type="text" v-bind="form.whatsapp"/>
        <small class="text-sm block mt-1 tw-italic text-blue-700">
          Ejemplo: +593978685097
        </small>
        <small class="p-error">
          {{ formErrors.whatsapp || errors.whatsapp || '' }}
        </small>
      </div>


      <div class="field mb-4 col-12">
        <label class="font-medium text-900" for="txtInstagram">Link de perfil de instagram</label>
        <InputText
            id="txtInstagram"
            :class="{ 'p-invalid': formErrors.instagram || errors.instagram  }"
            placeholder="https://www.instagram.com/patron.edison/"
            size="small"
            type="text" v-bind="form.instagram"/>
        <small class="p-error">
          {{ formErrors.instagram || errors.instagram || '' }}
        </small>
      </div>

      <div class="field mb-4 col-12">
        <label class="font-medium text-900" for="txtInstagram">Link de perfil de TikTok</label>
        <InputText
            id="txtInstagram"
            :class="{ 'p-invalid': formErrors.tiktok || errors.tiktok  }"
            placeholder="https://www.tiktok.com/@edisonpatron"
            size="small"
            type="text" v-bind="form.tiktok"/>
        <small class="p-error">
          {{ formErrors.tiktok || errors.tiktok || '' }}
        </small>
      </div>

      <div class="field mb-4 col-12">
        <label class="font-medium text-900" for="txtActividad">Descripcion de actividades</label>
        <Editor
            id="txtActividad"
            :class="{ 'p-invalid': formErrors.actividad || errors.actividad  }"
            editor-style="height: 320px"
            size="small"
            v-bind="form.actividad">
          <template v-slot:toolbar>
            <span class="ql-formats">
                <button v-tooltip.bottom="'Bold'" class="ql-bold"></button>
                <button v-tooltip.bottom="'Italic'" class="ql-italic"></button>
                <button v-tooltip.bottom="'Underline'" class="ql-underline"></button>
            </span>
          </template>
        </Editor>
        <small class="p-error">
          {{ formErrors.actividad || errors.actividad || '' }}
        </small>
      </div>
    </div>

    <div class="grid sticky bg-white bottom-0">
      <div class="col text-right">
        <Button class="p-button-secondary p-button-text mr-2" @click="emits('cancel')">Cancelar</Button>
        <Button :disabled="disableSubmitButton" :label="nameButtonForm" :loading="loading" class="p-button-primary"
                icon="pi pi-save"
                type="submit">
        </Button>
      </div>
    </div>
  </form>
</template>

<script lang="ts" setup>
import http from "@/composables/httpClient";
import {useToast} from "primevue/usetoast";
import type {AxiosError, AxiosResponse} from "axios";
import {computed, onBeforeMount, ref} from "vue";
import {configMessageErrorNotification} from "@/composables/notifications/configMessageErrorNotification";
import {configMessageSuccessNotification} from "@/composables/notifications/configMessageSuccessNotification";
import {formValidationErrors} from "@/composables/helpers";
import {BackofficeUrls, RESOURCESBACKOFFICE} from "@/views/backoffice/params";
import * as yup from "yup";
import {useForm} from "vee-validate";
import {ERRORMESSAGES} from "@/composables/messages";
import type Empresa from "@/types/Empresa/Empresa";
// import {userIdLogged} from "@/composables/authLoginData";

const formErrors = ref(<Empresa>{});
const validatedFormData = ref({});
const emits = defineEmits(['saved', 'error', 'cancel']);
const confirmSameName = ref(false);
const imagePreview = ref(null);

const props = defineProps<{
  formData?: Object,
  typeForm: 'new' | 'update'
}>();

const loading = ref(false);
const toast = useToast();

onBeforeMount(() => {

});

const nameButtonForm = computed(() => {
  return props.typeForm === 'new' ? 'Guardar' : 'Actualizar';
});

const schema = yup.object().shape(<Empresa>{
  actividad: yup.string().notRequired(),
  empresa: yup.string().required(ERRORMESSAGES.required()),
  instagram: yup.string().url(),
  numero_contacto: yup.string().notRequired(),
  representante: yup.string().required(ERRORMESSAGES.required()),
  tiktok: yup.string().url('Ingrese un enlace correcto'),
  whatsapp: yup.string().required(ERRORMESSAGES.required()),
});

const {defineComponentBinds, handleSubmit, resetForm, errors, setValues} = useForm({
  validationSchema: schema,
});

const disableSubmitButton = computed(() => {
  return Object.keys(errors.value).length > 0;
});

const form = ref<Empresa>({
  actividad: defineComponentBinds('actividad'),
  empresa: defineComponentBinds('empresa'),
  instagram: defineComponentBinds('instagram'),
  numero_contacto: defineComponentBinds('numero_contacto'),
  representante: defineComponentBinds('representante'),
  tiktok: defineComponentBinds('tiktok'),
  whatsapp: defineComponentBinds('whatsapp'),
});

const paisId = ref();

const onSubmit = handleSubmit((formValues: Object) => {
  validatedFormData.value = formValues;

  if (props.typeForm == 'new')
    save(validatedFormData.value);
});
const getFormData = async () => {

  return <Empresa>{
    actividad: "",
    empresa: "",
    instagram: "",
    numero_contacto: "",
    representante: "",
    tiktok: "",
    whatsapp: "",
  };
};

getFormData().then((formData) => {
  setValues(formData);
});

const save = (formData: Empresa) => {

  loading.value = true;

  http.post(BackofficeUrls.post(RESOURCESBACKOFFICE.Empresas), formData, {}).then((response: AxiosResponse) => {

    toast.add(configMessageSuccessNotification());
    loading.value = false;
    emits('saved', {status: response.status, data: response.data});

  }).catch((e: AxiosError) => {

    toast.add(configMessageErrorNotification(e));
    loading.value = false;
    formErrors.value = formValidationErrors(e.response.data.errors);
    emits('error', {status: e.response?.status, message: e.message});

  });

};

// const onImageSelect = (event) => {
//   if (event.files && event.files[0]) {
//     const fileReader = new FileReader();
//     fileReader.onload = (e) => {
//       imagePreview.value = e.target.result;
//     };
//     fileReader.readAsDataURL(event.files[0]);
//     // this.form.image = event.files[0]; // Asume que solo se sube un archivo
//   }
// }

const onUploadImage = (event) => {
  setValues({
    imagen: event.files[0]
  })
};

const handleCheckConfirmSameName = () => {
  if (confirmSameName.value) {

    setValues({
      empresa: form.value.representante.modelValue
    });

  } else {
    setValues({
      empresa: ''
    });
  }
}
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