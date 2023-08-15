<template>
  <h1>Formulário de cadastro de cliente</h1><br>
  <Form @submit="handleSubmit" :vaidation-schema="usuarioSchema" v-slot="{ erros }">
    <label for="nome">Nome:</label>
    <Field type="text" id="nome" name="nome" placeholder="Digite seu nome" v-model="nome" /><br>
    {{ erros?.nome }}

    <label for="idade">Idade:</label>
    <Field type="number" id="idade" name="idade" placeholder="Digite sua idade" v-model="idade" /><br>
    {{ erros?.idade }}
    
    <label for="email">E-mail:</label>
    <Field type="email" id="email" name="email" placeholder="Digite seu e-mail" v-model="email" /><br>
    {{ erros?.email }}

    <button type="submit">Cadastrar usuário</button>
  </Form>
</template>

<script>


import {Form, Field} from "vee-validate"
import * as Yup from "yup"

export default {
  components: {
    Form,
    Field
  },
  data() {
    return {
      nome: "",
      idade: 0,
      email: "",
      usuarioSchema: Yup.object().shape({
        nome: Yup.string().required().min(3, "Por favor, digite no mínimo 3 caracteres!"),
        idade: Yup.number().required("A idade é obrigatória!"),
        email: Yup.string().email().required("Por favor, digite um email válido!")
      })
    }
  },
  methods: {
    handleSubmit(){
      alert("chamou submit")
    }
  },
}
</script>

<style scoped>
</style>
