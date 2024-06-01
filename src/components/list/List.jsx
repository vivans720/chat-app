import ChatList from "./chatList/ChatList"
import "./list.css"
import Userinfo from "./userInfo/Userinfo"
import { auth } from "../../lib/firebase";
import { useChatStore } from "../../lib/chatStore";


const List = () => {
  const {
    resetChat,
  } = useChatStore();

  const handleLogout = () => {
    auth.signOut();
    resetChat();
  };


  return (
    <div className='list'>
      <Userinfo/>
      <ChatList/>
      <div className="logout"><button onClick={handleLogout}>Logout</button></div>
    </div>
  )
}

export default List