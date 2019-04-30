import { get } from './http';

export default {
    state: () => ({
        items: [],
    }),
    mutations: {
        setItems(state, items) {
            state.items = items;
        }
    },
    actions: {
        getItems(context) {
            get('http://localhost:3000').then(({ data }) => {
              context.commit('setItems', data.items);
            }).catch(error => console.warn(error));
        }
    }
};