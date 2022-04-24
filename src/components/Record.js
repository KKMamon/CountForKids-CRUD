import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import CountDataService from "../services/Countforkid.services"
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";

const Record = ({ getCountId }) => {
    const [counts, setCounts] = useState([]);
    useEffect(() => {
        getCounts();
    }, []);

    const handleBack = async (e) => {
        e.preventDefault()
        navigate("/Home");
      }

    const getCounts = async () => {
        const data = await CountDataService.getAllCounts();
        console.log(data.docs);
        setCounts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const { user } = useUserAuth();
    const navigate = useNavigate();

    return (
        <>
            <div className="mb-3">
                <br/>
                <h4>สวัสดี คุณ {user.email}</h4>
                <Button variant="dark edit" onClick={getCounts}>
                    รีเฟรช
                </Button>
            </div>

            <Table striped bordered hover size="m">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>ชื่อ</th>
                        <th>วิธีการนับ</th>
                        <th>เวลาเริ่ม</th>
                        <th>เวลาสิ้นสุด</th>
                        <th>จำนวนการดิ้นทั้งหมด</th>
                    </tr>
                </thead>
                <tbody>
                    {counts.map((doc, index) => {
                    return (
                        <tr key={doc.id}>
                            <td>{index + 1 }</td>
                            <td>{ doc.Email}</td>
                            <td>{ doc.title }</td>
                            <td>{ doc.timestart }</td>
                            <td>{ doc.timeend }</td>
                            <td>{ doc.counter }</td>
                            </tr>
                    );
                })}
                </tbody>
            </Table>

            <div className="d-grid gap-2 mb-3">
            <Button variant="primary" onClick={handleBack}>
               ย้อนกลับ
            </Button>
        </div>

        </>
    );
};

export default Record;