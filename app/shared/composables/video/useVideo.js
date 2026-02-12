import { ref, onMounted } from "vue";
import { fetchVideoById } from "@shared/services/video/video-api";

export function useVideo(id = 6) {
  const video = ref(null);
  const isLoading = ref(false);
  const error = ref(null);

  const loadVideo = async () => {
    isLoading.value = true;
    error.value = null;
    try {
      const response = await fetchVideoById(id);
      video.value = response.data.data;
    } catch (err) {
      error.value = err;
    } finally {
      isLoading.value = false;
    }
  };

  onMounted(loadVideo);

  return {
    video,
    isLoading,
    error,
    loadVideo,
  };
}