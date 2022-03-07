import MessageForm from "./MessageForm";
import TheirMessage from "./TheirMessage";
import MyMessage from "./MyMessage";

const ChatFeed = (props) => {

    const { chats, activeChat, username, messages } = props;
    const chat = chats && chats[activeChat];

    const renderReadReceipts = (message, isMyMessage) => {
        return chat.people.map((person, index) => person.last_read === message.id && (
            <div
                key={`read_${index}`}
                className="read_receipt"
                style={{
                    float: isMyMessage ? 'right' : 'left',
                    backgroundImage: person.person.avatar && `url(${person?.person?.avatar})`
                }}
            />
        ))
    }

    const renderMessage = () => {
        const keys = Object.keys(messages);

        return keys.map((key, index) => {
            const message = messages[key];
            const lastMessageKey = index === 0 ? null : keys[index - 1];//message bo`lmasa null qaytar, agar message bo`lsa uning indexini 1ga kamaytirib ber
            const isMyMessage = username === message.sender.username;

            return (
                <div key={`msg_${index}`} style={{ width: '100%' }}>
                    <div className="message-block">
                        {
                            isMyMessage
                                ? <MyMessage message={message} />
                                : <TheirMessage message={message} lastMessage={messages[lastMessageKey]} />
                        }

                    </div>
                    <div className="read-receipts"
                        style={{
                            marginRight: isMyMessage ? '18px' : '0px',
                            marginLeft: isMyMessage ? '0px' : '68px'
                        }}>

                        {renderReadReceipts(message, isMyMessage)}
                    </div>

                </div>
            );

        });

    };

    // renderMessage()
    if (!chat) return 'Loading....'

    return (
        <div className="chat-feed">
            <div className="chat-title-container">
                <div className="chat-title">
                    {chat?.title}
                </div>
                <div className="chat-subtitle">
                    {chat.people.map((person) => `${person.person.username}`)}
                </div>
            </div>

            {renderMessage()}
            <div style={{ height: '100px' }} />
            <div className="message-form-container">
                <MessageForm {...props} chatId={activeChat} />
            </div>
        </div>
    )
}


export default ChatFeed;