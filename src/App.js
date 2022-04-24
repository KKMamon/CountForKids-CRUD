import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Rayburn from "./components/Rayburn";
import Sadovsky from "./components/Sadovsky";
import Record from "./components/Record";
import Counttoten from "./components/Counttoten";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";

function App() {
  return (
    <Container style={{ width: "400px" }}>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>}/>
              <Route path="/" element={<Login />}/>
              <Route path="/Rayburn" element={<ProtectedRoute><Rayburn /></ProtectedRoute>}/>
              <Route path="/Counttoten" element={<ProtectedRoute><Counttoten /></ProtectedRoute>}/>
              <Route path="/Sadovsky" element={<ProtectedRoute><Sadovsky /></ProtectedRoute>}/>
              <Route path="/Record" element={<ProtectedRoute><Record /></ProtectedRoute>}/>
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;