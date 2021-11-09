/* Descrizione:
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
 */

const app = new Vue({
  el: "#app",
  data: {
    userEmail: "",
    userEmailTwo: "",
  },
  mounted() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((response) => {
        console.log(response.data.response);
        this.userEmail = response.data.response;
      });
  },
});
