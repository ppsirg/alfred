export const list_credentials = async function () {
    return [
        {
            name: 'github',
        },
        {
            name: 'gmail',
        },
        {
            name: 'bancolombia',
        },
        {
            name: 'ngrok',
        },
    ]
}

export const get_credentials = async function () {
    return {
        user: 'hola@hola.com',
        pass: '345345',
        tags: 'tech',
        notes: '',
    }
}