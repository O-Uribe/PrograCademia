const [message, setMessage] = useState('');
const [messages, setMessages] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit('message', message);
    
    const newMessage = {
          body: message,
          from: 'Yo'
    };
       setMessages([ newMessage, ...messages ]);
    setMessage('');
  };

useEffect(() => {
    const receiveMessage = (message) => {
          setMessages([message, ...messages]);   
    };
    socket.on('message', receiveMessage);
    return () => {
          socket.off('message', receiveMessage);       
      };
}, [messages]);