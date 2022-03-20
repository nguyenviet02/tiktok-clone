
import { Header, MainContainer } from './components';
import { SideBar } from './components';
import { useViewPort } from './components';

function App() {
  const viewPort = useViewPort();
  if (viewPort.width < 1023.99) {
    return (
      <>
        <h1 className="error">Hiện tại web chưa hỗ trợ trên các thiết bị điện thoại, máy tính bảng.</h1>
        <h1 className="error"> Hãy sử dụng máy tính để truy cập trang Web này. Xin cảm ơn !</h1>
      </>
    )
  }
  else {
    return (
      <div className="App">
        <Header />
        <SideBar />
        <MainContainer />
      </div>
    );
  }
}

export default App;