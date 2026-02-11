export function reportError(err, context = "") {
    if (import.meta.env.DEV) {
      console.error(`[Error en ${context}]`, err);
    }
}

// export default {
//   install(app) {
//     app.config.globalProperties.$reportError = (err, context = "") => {
//       if (import.meta.env.DEV) {
//         console.error(`[Error en ${context}]`, err);
//       }
//     };
//   }
// };