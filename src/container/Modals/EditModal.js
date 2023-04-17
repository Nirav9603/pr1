import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function DataModal({ Show, setShow, callBack, data }) {

    const handleClose = () => setShow(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = {
            id: data.id,
            name: event.target.name.value,
            email: event.target.email.value
        }

        axios(
            {
                method: "PUT",
                url: `http://localhost:3000/user/${formData.id}`,
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
                    <Modal.Title>Edit User Data</Modal.Title>
                </Modal.Header>

                <Form onSubmit={handleSubmit}>
                    <Modal.Body>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enetr User Name"
                                name='name'
                                defaultValue={data.name}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enetr User Email"
                                name='email'
                                defaultValue={data.email}
                            />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type='submit'>
                            Submit
                        </Button>
                    </Modal.Footer>
                </Form>


            </Modal>
        </div>
    );
}

export default DataModal;