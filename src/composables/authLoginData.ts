import {createPinia} from "pinia";
import {useAuthStore} from "@/stores/auth";
import {createApp} from "vue";

createApp().use(createPinia())

const storeAuth = useAuthStore();
const profilesAlias = {
    a: 'admin',
    u: 'user'
}
export default function allowActionFor(profiles: ('admin' | 'user')[]): boolean {
    // const typeUser: string = storeAuth.dataUser?.type;
    // return profiles.includes(profilesAlias[typeUser]);
    return true;
}

export const userIdLogged = storeAuth.dataUser?.id;