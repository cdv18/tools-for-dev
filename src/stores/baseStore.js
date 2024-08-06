import { ref } from "vue"

export const baseStore = () => {
    const items = ref([]);

    return {
        items
    }
}