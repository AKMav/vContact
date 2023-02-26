<template>
  <div class="contact-item">
    <div class="contact-info row col-10">
      <div class="col">
        <h5>Fullname:</h5>
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
    <button
      type="button"
      class="add-btn btn btn-primary col-2"
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