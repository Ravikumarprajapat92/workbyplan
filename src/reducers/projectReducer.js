const initState = {
    projects: [
        { id: '1', title: 'hi my name is ravi', content: 'Ravi kumar prajapat' },
        { id: '2', title: 'hi my name is ravi', content: 'Ravi kumar prajapat' },
        { id: '3', title: 'hi my name is ravi', content: 'Ravi kumar prajapat' },
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
        default:
            return state;
    }
}

export default projectReducer;