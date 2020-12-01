import React, { useState } from "react";
import Button from "react-bootstrap/Button";

export default function RegisterComponent() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [dateOfBirth, setDOB] = useState("");
    const [ssn, setSSN] = useState("");
    const [adress, setAdress] = useState("");
    const [contactNo, setContactNo] = useState("");

    function validateForm() {
        return email.length > 0 && fullName.length > 0;
    }

    return (
        <div className="Login">
            <form>
                <div className="form-group required">
                    <label class="control-label">Full Name </label>
                    <input type="text"
                        required
                        className="form-control"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                </div>

                <div className="form-group required">
                    <label class="control-label">Email </label>
                    <input type="email"
                        required
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="form-group required">
                    <label class="control-label">Password </label>
                    <input type="password"
                        required
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="form-group form-group required">
                    <label class="control-label">Date of Birth</label>
                    <input
                        type="date"
                        dateformat="DD-MM-YYYY"
                        className="form-control"
                        value={dateOfBirth}
                        onChange={(e) => setDOB(e.target.value)}
                    />
                </div>

                <div className="form-group required">
                    <label class="control-label">Social Service Number \ NIC </label>
                    <input type="text"
                        required
                        className="form-control"
                        value={ssn}
                        onChange={(e) => setSSN(e.target.value)}
                    />
                </div>

                <div className="form-group required">
                    <label class="control-label">Adress</label>
                    <input type="text"
                        required
                        className="form-control"
                        value={adress}
                        onChange={(e) => setAdress(e.target.value)}
                    />
                </div>
                <div className="form-group required">
                    <label class="control-label">Contact Number</label>
                    <input type="tel"
                        required
                        className="form-control"
                        value={contactNo}
                        // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                        onChange={(e) => setContactNo(e.target.value)}
                    />
                </div>
                <Button block size="lg" type="submit" disabled={!validateForm()}>Register</Button>
            </form>
        </div>
    );
}