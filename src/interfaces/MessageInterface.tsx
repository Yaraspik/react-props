interface MessageInterface {
    id: string,
    from: {
        name: string,
    },
    type: string,
    time: string,
    text?: string,
}

export default MessageInterface;
