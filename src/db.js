const { allowed_users } = process.env
const users = JSON.parse(allowed_users);

export const db = Object.keys(users).reduce((acc, key) => {
    acc[key] = {
        prevMessageId: undefined
    }
},{})

export const updateLastMessageId = (userId, newMessageId) => {
    const messages = db[userId].prevMessageId;

    db[userId].prevMessageId = newMessageId;
}