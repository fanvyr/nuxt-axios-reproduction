<template>
  <div>
    <v-btn @click.prevent="sendRequest" color="success">send request</v-btn>
    <b>Response: </b>
    <p>{{response}}</p>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  data(){return{
    response: 'click "send request"'
  }},
  methods: {
    async sendRequest(){
      let result = await this.$axios.$post('/auth/register', {
        // change these on successfully registrations, unique = true is set serverside
        username: 'test1',
        mail: 'test@example.com1',
        password: '123456'
      })
      this.response = result
    }
  }
}
</script>
