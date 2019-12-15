<template>
    <div class="container">
      <img alt="Vue logo" id="chatus" src="../images/logo.svg" />
        <div class="card login" id="card">
            <div class="card-body">
                <h2 class="card-title text-center">로그인</h2>
                <form @submit.prevent="login" class="text-center">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="이름을입력해주세요." name="name" v-model="name">
                        <p v-if="errorText" class="text-danger">{{ errorText }}</p>
                    </div>
                    <button type="submit" class="btn btn-primary" >Enter Chat</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'login',
    data () {
        return {
            name: "",
            errorText: null
        }
    },
    methods: {
        login() {
            if (this.name) {
                this.$router.push({name: 'Chat', params: {name: this.name}});
            } else {
                this.errorText = "이름을 입력해주세요."
            }
        }
    }
}
</script>

<style>
.login{
    max-width: 450px;
    margin-top: 0px;
    display: block;
    margin-left: auto;
    margin-right: auto;
}
#chatus{
  margin:30px 0 0 0;
}
</style>
