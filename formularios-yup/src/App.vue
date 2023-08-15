<template>
  <h1>Formulário de cadastro de cliente</h1><br>
  <Form @submit="handleSubmit" :validation-schema="schema" v-slot="{ errors }">
    <label for="nome">Nome:</label>
    <Field type="text" name="nome" placeholder="Digite seu nome" v-model="nome" /><br>
    {{ errors.nome }}

    <label for="idade">Idade:</label>
    <Field type="number" name="idade" placeholder="Digite sua idade" v-model="idade" /><br>
    {{ errors.idade }}

    <label for="email">E-mail:</label>
    <Field type="email" name="email" placeholder="Digite seu e-mail" v-model="email" /><br>
    {{ errors.email }}

    <button type="submit">Cadastrar usuário</button>
  </Form>
</template>

<script>

/**
 * PASSOS PARA CONFIGURAR O VEE-VALIDATE
 * 1 - [x] instalar o vee-validate
 *  - npm install vee-validate
 * 2 - [x] importar o vee-validate onde será utilizado
 *      `import {Form, Field} from  "vee-validate"`
 *  [x] - importar o Form e o Field
 *  [x] - registrar os componentes Form e Field
 *  [x] - usei no template o componente Form e Field
 *  obs: os Fields eles precisam ter um name
 * 3 - [x] declarar um schema para validar os campos
 * 4 - [x] passar na prop 'validation-schema' o valor do schema
 * 5 - [x] receber os erros pelo slot
 *    `v-slot="{ errors }"`
 */

import * as Yup from "yup"
import {Form, Field} from  "vee-validate"

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
      schema: Yup.object().shape({
        nome: Yup.string().required("Nome é obrigatório").min(3, "Por favor, digite no mínimo 3 caracteres!"),
        idade: Yup.number().required("A idade é obrigatória!"),
        email: Yup.string().email().required("Por favor, digite um email válido!")
      }),
    }
  },
  methods: {
    handleSubmit(){
      console.log(this.nome)
      console.log(this.idade)
      console.log(this.email)
    }
  },
}
</script>

<style scoped>
</style>
