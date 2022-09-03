import {createStore} from "vuex";
import {taskModule} from "@/vuex/x-task";

export default createStore({
    modules: {
        tasks:taskModule
    }
});
