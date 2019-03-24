
const initState = {
    person: [
        {
            id: 1,
            name: 'Trần Văn Phú',
            age: '12',
            address: '44 Đà Sơn, Hòa Khánh Nam, liên Chiểu , Đà Nẵng'
        },
        {
            id: 2,
            name: 'Trần Văn Phú',
            age: '12',
            address: '44 Đà Sơn, Hòa Khánh Nam, liên Chiểu , Đà Nẵng'
        },
        {
            id: 3,
            name: 'Trần Văn Phú',
            age: '12',
            address: '44 Đà Sơn, Hòa Khánh Nam, liên Chiểu , Đà Nẵng'
        },
        {
            id: 4,
            name: 'Trần Văn Phú',
            age: '12',
            address: '44 Đà Sơn, Hòa Khánh Nam, liên Chiểu , Đà Nẵng'
        },
    ]
}
const rootReducer = (state = initState, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_PERSON':
            return Object.assign({}, state, {
                person: [
                    ...state.person,
                    action.person]
            })
        case 'DELETE_PERSON':
            return Object.assign({}, state, {
                person: state.person.filter(item => item.id !== action.id)
            })
        case 'UPDATE_PERSON':
            const itemIndex = state.person.findIndex(i => i.id === action.data.id);
            var dataEdit = [...state.person];
            dataEdit[itemIndex].name = action.data.name;
            dataEdit[itemIndex].age = action.data.age;
            dataEdit[itemIndex].address = action.data.address;
            return Object.assign({}, state, {
                person: dataEdit
            })
        default:
            return state
    }
}
export default rootReducer;