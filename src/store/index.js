//import { createStore } from 'vuex'
import { loader } from './loader.module'
import { auth } from './auth.module'
import { ocr } from './ocr.module'
import { nlp } from './nlp.module'
import { applications } from './applications.module'
import { programs } from './programs.module'

const store = createStore({
  modules: {
    loader, auth, ocr, nlp, programs, applications
  }
})

export default store 
