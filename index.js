// const post = Vue.createApp({
//     data () {
//       return {
//         info: null
//       }
//     },
//     mounted () {
//       axios
//         .get('https://randomuser.me/api/?results=10')
//         .then(response => (console.log(response)
//     }
//   })   

// post.mount("#app")

const post = Vue.createApp({
  data () {
    return {
       posts :{ 

       }
    }
  },
  methods: { 
    async handleCurrency(){ 
      const res = await axios.get('https://randomuser.me/api/?results=10')
       console.log(res.data.results)
       const data = res.data.results;
       this.posts = data;
       console.log(this.posts)
    }
  },
  mounted () {
    // axios
    this.handleCurrency()
    //   .get('https://api.coindesk.com/v1/bpi/currentprice.json')
    //   .then(response => response.json)
    //   .then(j => console.log(json))
  
  }
  
})

post.mount("#app")