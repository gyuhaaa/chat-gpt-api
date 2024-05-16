import { useState } from "react";

const Home = () => {
  const [content, setContent] = useState("초기값");

  const onSubmitChat = (e) => {
    e.preventDefault();

    // text 질문을 입력 받아서 서버로 ㄱㄱ
  };

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmitChat}>
        <input
          type="text"
          value={content}
          onChange={() => setContent(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Home;
