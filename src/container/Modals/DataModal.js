import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function DataModal({ Show, setShow, callBack }) {

    const handleClose = () => setShow(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = {
            id: Math.floor(Math.random() * 100),
            name: event.target.name.value,
            email: event.target.email.value
        }

        axios(
            {
                method: "POST",
                url: "http://localhost:3000/user",
                data: formData
            }
        ).then((res) => {
            callBack()
        })
        handleClose()
    }

    return (
        <div>

            <Modal show={Show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add User Data</Modal.Title>
                </Modal.Header>

                <Form onSubmit={handleSubmit}>
                    <Modal.Body>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enetr User Name"
                                name='name'
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enetr User Email"
                                name='email'
                            />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type='submit'>
                            Add
                        </Button>
                    </Modal.Footer>
                </Form>


            </Modal>
        </div>
    );
}

export default DataModal;