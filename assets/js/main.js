/* Descrizione:
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
 */

const app = new Vue({
  el: "#app",
  data: {
    mails: [],
  },
  methods()
     {
    function cicloFor(axios){
        for(let i > 0; mails.lenght < 10; i++)
        return true;
    }

  mounted() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((result) => {
        console.log(result.data.response);
        this.mails.push(result.data.response);
        
      });
  },
});
