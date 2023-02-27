<template>
  <div class="contact-form container">
    <header
      class="w-75 mb-4"
    >
      <h2 class="w-50">
        Contact info
      </h2>
      <button
        type="button"
        class="return-btn btn btn-primary"
        @click="goToMain"
      >
        Return to contact list
      </button>
    </header>
    <form
      action.prevent=""
    >
      <div class="mb-3 form-row w-75">
        <label
          for="name"
          class="form-label"
        >Full name</label>
        <input
          id="name"
          v-model="contact.fullname"
          type="text"
          class="form-control"
          :class="{'input-error': !contact.fullname}"
          placeholder="John Doe"
        >
        <i
          v-if="!contact.fullname"
          class="text-danger"
        >Required value</i>
      </div>
      <div class="mb-3 form-row w-75">
        <label
          for="email"
          class="form-label"
        >Email address</label>
        <input
          id="email"
          v-model="contact.email"
          type="email"
          class="form-control"
          :class="{'input-error': !contact.email}"
          placeholder="name@example.com"
        >
        <i
          v-if="!contact.email"
          class="text-danger"
        >Required value</i>
      </div>
      <div class="mb-3 form-row w-75">
        <label
          for="phone"
          class="form-label"
        >Phone number</label>
        <input
          id="phone"
          v-model="contact.phone"
          type="phone"
          class="form-control"
          :class="{'input-error': !contact.phone}"
          placeholder="+99899 123 45 67"
        >
        <i
          v-if="!contact.phone"
          class="text-danger"
        >Required value</i>
      </div>
      <div class="mb-3 form-row w-75">
        <label
          class="form-label"
        >Chose tags for contact</label>
        <div class="tag-row">
          <div
            v-for="tag of tags"
            :key="tag.value"
          >
            <button
              type="button"
              class="btn btn-outline-secondary"
              :class="{active: tag.active}"
              @click="choseTag(tag)"
            >
              {{ tag.value }}
            </button>
          </div>
        </div>
      </div>
    </form>
    <div class="action-btns w-75 row mb-5">
      <button
        type="button"
        class="btn btn-success col-3"
        :disabled="hasEmptyInput"
        @click="addContact"
      >
        Save changes
      </button>
      <button
        type="button"
        class="btn btn-warning col-3"
        @click="clearAll"
      >
        Clear
      </button>
      <button
        v-if="hasId"
        type="button"
        class="btn btn-danger col-3"
        @click="removeContact"
      >
        Remove contact
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
};
</script>

<script setup>
  import useContactForm from "@/logic/ContactForm/index.js";
  const {
    addContact,
    choseTag,
    clearAll,
    removeContact,
    goToMain,
    tags,
    contact,
    hasId,
    hasEmptyInput
    } = useContactForm();
</script>

<style lang="scss">
@import './style.scss';
</style>