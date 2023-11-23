function Message() {
    const name = 'React 18';
    if(name)
        return <h1>Hello {name}</h1>
    return <h1>Hello JSX: JavaScript XML</h1>
}

export default Message;