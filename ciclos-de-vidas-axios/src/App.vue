<template>
  <h1>Formulário de cadastro de um novo usuário</h1>
  <form @submit.prevent="handleSubmit">
    <input type="text" placeholder="Digite o nome" v-model="cliente.nome" />
    <input type="email" placeholder="Digite o email" v-model="cliente.email" />
    <button type="submit">Cadastrar usuário</button>
  </form>
  <hr><br>
  <h2>Lista de usuários</h2>
  {{ listaUsuarios }}
</template>

<script>
/**
 * PASSOS PARA UTILIZAR O AXIOS
 * 
 * 1 - [x] instalar o axios
 *    `npm install axios`
 * 2 - [x] importar o axios no local que será utilizado
 *    `import axios from "axios"`
 * 3 - [] utilizar o axios usando o método (GET, POST, PUT...) desejado
 */

import axios from "axios"

export default {
  data(){
    return {
      cliente: {
        nome: "",
        email: "",
      },
      listaUsuarios: []
    }
  },
  methods: {
    handleSubmit(){
      // URL , DADOS
      axios.post("http://localhost:50001/clientes", this.cliente)
      .then(res => { 
        alert("Cliente cadastrado com sucesso!")
      })
      .catch(erro => console.log(erro))

      this.getDados()
    },
    getDados(){
      axios.get("http://localhost:50001/clientes")
      .then(res => this.listaUsuarios = res.data)
      .catch(erro => console.log(erro))
    }
  },
  mounted(){
    this.getDados()
  }
}
</script>

<style scoped>
</style>
