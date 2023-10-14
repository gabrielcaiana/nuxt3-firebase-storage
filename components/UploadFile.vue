<script setup lang="ts">
import { UploadFileResponse } from "~/composables/useStorage";

const { readFile } = useStorage();

const emit = defineEmits<{
  (e: "fileChange", changed: boolean): void;
  (e: "fileUploading", uploading: boolean): void;
  (e: "fileUpload", snapshot: any, downloadUrl: any, metadata: any): void;
}>();

const isLoading: Ref<boolean> = ref(false);
const fileName: Ref<string> = ref("");

const onFileChange = async (e: any) => {
  emit("fileChange", true);
  isLoading.value = true;

  try {
    const files = e.target.files || e.dataTransfer.files;

    if (!files.length) throw new Error("No file selected");

    const file = files[0];
    fileName.value = file.name;

    const { snapshot, downloadURL, metadata } = (await readFile(
      file,
    )) as UploadFileResponse;

    emit("fileUploading", false);
    emit("fileUpload", snapshot, downloadURL, metadata);
  } catch (error: any) {
    throw new Error(error);
  } finally {
    isLoading.value = false;
    fileName.value = "";
  }
};
</script>

<template>
  <div class="file is-centered is-boxed is-success has-name">
    <label class="file-label">
      <input
        class="file-input"
        type="file"
        name="resume"
        :disabled="isLoading"
        @change="onFileChange"
      />
      <Icon
        v-if="isLoading"
        name="eos-icons:bubble-loading"
        size="100"
        class="text-primary"
      />

      <span v-else class="file-cta">
        <span class="file-icon">
          <Icon name="tabler:cloud-upload" size="18" />
        </span>
        <span class="file-label"> Upload file </span>
      </span>
      <span v-if="fileName" class="file-name"> {{ fileName }}</span>
    </label>
  </div>
</template>
