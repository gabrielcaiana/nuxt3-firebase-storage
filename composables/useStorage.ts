import { UploadResult, FullMetadata } from "firebase/storage";

export interface UploadFileResponse {
  snapshot: UploadResult;
  downloadURL: string;
  metadata: FullMetadata;
}

export default () => {
  const { $storage, $ref, $uploadString, $getDownloadURL, $getMetadata } =
    useNuxtApp();

  const readFile = (file: File) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = async () => {
        const readerResult: string = reader.result as string;

        const { snapshot, downloadURL, metadata } = (await uploadFile(
          `images/${file.name}`,
          readerResult,
        )) as UploadFileResponse;

        if (snapshot) {
          resolve({ snapshot, downloadURL, metadata });
        } else {
          reject(new Error("Error uploading file"));
        }
      };
      reader.onerror = (e) => {
        reject(e);
      };
    });
  };

  const uploadFile = async (
    fullPath: string,
    file: string,
  ): Promise<UploadFileResponse | undefined> => {
    const storageRef = $ref($storage, fullPath);
    const snapshot = await $uploadString(storageRef, file, "data_url");

    if (snapshot) {
      const downloadURL = await $getDownloadURL(snapshot.ref);
      const metadata = await $getMetadata(storageRef);

      return { snapshot, downloadURL, metadata };
    }
  };

  return {
    readFile,
  };
};
