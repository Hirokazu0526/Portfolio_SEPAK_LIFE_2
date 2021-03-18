<template>
  <div class="login">
    メールアドレス：<input class="login-box" type="text" v-model="email" />
    <br />
    パスワード：<input type="text" v-model="password" /> <br /><br />
    <button @click="login">ログイン</button>
  </div>
</template>

<script>
import firebase from "../plugins/firebase";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          () => {
            alert("Success!");
            this.$router.push("/imageupload");
          },
          (err) => {
            alert(err.message);
          }
        );
    },
  },
};
</script>

<style scoped>
.login {
  width: 1000px;
  height: 200px;
  margin: 0 auto;
}
.login-box {
  margin: 20px 0;
}
@media screen and (max-width: 599px) {
  .login {
    width: 100%;
  }
}
</style>
