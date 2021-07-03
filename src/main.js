import { createApp } from "vue"
import App from "./App.vue"
// import MyPlugin from "./MyPlugin"

const app = createApp(App)

// app.use(MyPlugin, {
//   fontSize: {
//     small: 12,
//     medium: 14,
//     large: 36,
//   },
// })

app.mount("#app")
