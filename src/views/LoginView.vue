<template>
    <div class="login">
        <el-form label-width="60px" :model="formData" size="large ">
            <el-form-item label="用户名">
                <el-input v-model="formData.userName" placeholder="请输入管理员账户" clearable />
            </el-form-item>
            <el-form-item label="密 码">
                <el-input
                    v-model="formData.passWord"
                    type="password"
                    placeholder="请输入管理员密码"
                    clearable
                />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit" style="width: 50%">登 录</el-button>
                <el-button type="success" @click="wxLogin" size="default ">微信登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import { adminLogin } from "@/http/api";

const formData: any = reactive({
    userName: '',
    passWord: ''
})
const onSubmit = () => {
    console.log(formData);
    try {
        adminLogin(formData).then(function (response: any) {
            console.log(response)
        });
    } catch (error) {
        console.log(error)
    }
};
const wxLogin = () => {
    console.log("submit!");
};
</script>
<style lang="scss">
body,
html,
#app {
    background-color: #909399;
}
.login {
    min-width: 300px;
    max-width: 50%;
    padding: 30px;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-58%, -50%);
    border-radius: 1rem;
}
</style>
