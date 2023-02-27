import { ref } from "vue";

const selected = ref("");
const options = ["fullname", "email", "phone", "tags"];
const searchQuery = ref("");


export default function useSearch()  {

  return {
    selected,
    options,
    searchQuery,
  };

}