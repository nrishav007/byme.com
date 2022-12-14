import {legacy_createStore} from "redux"
import Reducer from "./Reducer"

export const MyStore = legacy_createStore(Reducer)