<template>
    <div v-if="contact" class="page">
        <h4>Thêm Liên hệ</h4>
        <ContactForm :contact="contact" @submit:contact="addContact"/>
        <p>{{ message }}</p>
    </div>
</template>
  
<script>
import ContactForm from "@/components/ContactForm.vue";
import ContactService from "@/services/contact.service";

export default {
    components: {
        ContactForm,
    },
    data() {
        return {
            message: "",
        };
    },
    methods: {
        async addContact(data) {
            try {
                await ContactService.create(data);
                this.message = "Liên hệ mới đã được thêm thành công.";
            } catch (error) {
                console.log(error);
            }
        },
    },
    created() {
		// khoi tao ban dau cho cai contactForm hien len
		const newContact = {
			name: "",
			email: "",
			address: "",
			phone: "",
			Favorite: false,
		}
		this.contact = newContact;
		this.message = "";
	},
};
</script>