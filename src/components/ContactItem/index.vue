<template>
  <div class="contact-item">
    <div class="w-100">
      <div class="contact-info row mb-2">
        <div class="col">
          <h5>Full name:</h5>
          <p class="info-text">
            {{ itemData.fullname }}
          </p>
        </div>
        <div class="col">
          <h5>Email:</h5> 
          <p class="info-text">
            {{ itemData.email }}
          </p>
        </div>
        <div class="col">
          <h5>Phone number:</h5>
          <p class="info-text">
            {{ itemData.phone }}
          </p>
        </div>
      </div>
      <div
        v-if="itemData.tags.length > 0"
        class="mb-2"
      >
        <h5>Contact tags:</h5>
        <span
          v-for="tag of itemData.tags"
          :key="tag"
          class="badge text-bg-secondary  mb-1"
        >{{ tag }}</span>
      </div>
    </div>
    <button
      type="button"
      class="add-btn btn btn-primary"
      @click="redirectForChange(itemData.id)"
    >
      Change contact
    </button>
  </div>
</template>

<script>
import { computed } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "ContactItem",
  props: {
    itemData: {
      type: Object,
      default: () => {}
    }
  },
  setup(props) {
    const itemTitle = computed(() => {
      return `${props.itemData.idx+1}. Fullname: ${props.itemData.fullname} - Email: ${props.itemData.email} - Phone number: ${props.itemData.number}`;
    });

    const router = useRouter();
    const redirectForChange = (id) => {
      router.push(`/contact/${id}`);
    };
    
    return {
      itemTitle,
      redirectForChange
    };
  }
};
</script>

<style lang="scss">
  @import './style.scss';
</style>