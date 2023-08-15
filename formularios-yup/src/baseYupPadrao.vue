<template>
  <h1>Formulário de cadastro de cliente</h1><br>
  <form @submit.prevent="handleSubmit">
    <label for="nome">Nome:</label>
    <input type="text" id="nome" placeholder="Digite seu nome" v-model="nome" /><br>
    {{ erros.nome }}

    <label for="idade">Idade:</label>
    <input type="number" id="idade" placeholder="Digite sua idade" v-model="idade" /><br>
    {{ erros.idade }}
    
    <label for="email">E-mail:</label>
    <input type="email" id="email" placeholder="Digite seu e-mail" v-model="email" /><br>
    {{ erros.email }}

    <button type="submit">Cadastrar usuário</button>
  </form>
</template>

<script>
/**
 * PASSOS PARA UTILIZAR O YUP PARA VALIDAR UM FORMULÁRIO
 * 
 * 1 - [x] instale o yup no projeto usando o comando ```npm install yup```
 * 2 - [x] importe o yup no local que será utilizado
 * 3 - [x] crie o schema para servir de base para validação dos dados
 * 4 - [x] valide os dados usando o schema
 * 5 - [x] se tiver erros, valide quais foram os campos com erros e exiba
 * uma mensagem para o usuário
 */

import * as Yup from "yup"
import {captureErrorYup} from "../src/utils/captureErroYup.js"

export default {
  data() {
    return {
      nome: "",
      idade: 0,
      email: "",
      erros: {}
    }
  },
  methods: {
    handleSubmit(){
      try {
      debugger
        const usuarioSchema = Yup.object().shape({
          nome: Yup.string().required().min(3, "Por favor, digite no mínimo 3 caracteres!"),
          idade: Yup.number().required("A idade é obrigatória!"),
          email: Yup.string().email().required("Por favor, digite um email válido!")
        })

        usuarioSchema.validateSync(
          {
            nome: this.nome,
            idade: this.idade,
            email: this.email,
          },
          {abortEarly: false}
        )
        
      } catch (error) {
        if(error instanceof Yup.ValidationError){
          this.erros = captureErrorYup(error)
        }
      }
    }
  },
}
</script>

<style scoped>
</style>
