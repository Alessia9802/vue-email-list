/* Bonus:
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
 */

const app = new Vue({
  el: "#app",
  data: {
    mails: [],
  },

  mounted() {
    for (let i = 0; i < 10; i++) {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((result) => {
          console.log(result.data.response);
          this.mails.push(result.data.response);
        });
    }
  },
});
