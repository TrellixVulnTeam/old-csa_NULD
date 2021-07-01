<template>
  <div id="login">
      <b-card style="width:300px" class="mx-auto shadow">

          <b-card-text >

    <b-form @submit="onSubmit">

        <b-alert :show="!!loginAlert" variant="danger" dismissible>
        {{loginAlert}}
        </b-alert>

      <b-form-group
        id="username-input-group"
        label="Username:"
        label-for="username-input"
      >
        <b-form-input
          id="username-input"
          v-model="form.username"
          type="text"
          placeholder="Enter username"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="password-input-group"
        label="Passsword:"
        label-for="password-input"
      >
        <b-form-input
          id="password-input"
          type="password"
          v-model="form.password"
          placeholder="Enter Password"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Login</b-button>
    </b-form>
          </b-card-text>
          
      </b-card>
  </div>
</template>

<script>
import {  mapActions } from 'vuex';
import urls from '@explorelearning/urls';

export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      show: true,
      loginAlert: null,
    };
  },
  methods: {
    ...mapActions('platform/app', ['login', 'initApp', 'initApi',]),
    async onSubmit(event) {
        this.loginAlert = null;
      event.preventDefault();
      const { username, password } = this.form;
      try {
        await this.login({ username, password, url: `${urls.getUrls().services}/platform/auth/login/csa` });
        
        await this.initApi();
        await this.initApp();
        this.username = '';
        this.password = '';
        this.$router.push('/');
      } catch (e) {
          console.log(e);
          if (e.message.includes("403")) {
              this.loginAlert = "You do not have the correct permissions to access this app";
            } else if (e.message.includes("401")) {
              this.loginAlert = "Invalid credentials";
            } else {
            this.loginAlert = "Unknown error, contact developer"
          }
        
      }
    },
  },
};
</script>
