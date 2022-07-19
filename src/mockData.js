import { v4 as uuidv4 } from 'uuid'

const mockData = [
    {
        id: uuidv4(),
        title: 'To do',
        tasks: [
            {
                id: uuidv4(),
                title: 'Helpdesk Call AA999'
            },
            {
                id: uuidv4(),
                title: 'Helpdesk Call EE999'
            },
            {
                id: uuidv4(),
                title: 'Helpdesk Call BB999'
            },
        ]
    },
    {
        id: uuidv4(),
        title: 'Development',
        tasks: [
            {
                id: uuidv4(),
                title: 'Helpdesk Call CC999'
            },
            {
                id: uuidv4(),
                title: 'Helpdesk Call DD999'
            }
        ]
    },

    {
        id: uuidv4(),
        title: 'Testing',
        tasks:[]
    },
    {
        id: uuidv4(),
        title: 'Done',
        tasks: [
            {
                id: uuidv4(),
                title: 'Helpdesk Call GG999'
            },
            {
                id: uuidv4(),
                title: 'Helpdesk Call FF999'
            }
        ]
    }
]

export default mockData