import React, { useState } from 'react'
import { Button, Image, Modal, Icon, Form, Input } from 'semantic-ui-react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import { addAdvertisement, addAdvertisementImage } from '../services/JobAdvertisementService';
function AddAdvertisementModal({ cities, jobPositons }) {
    const formik = useFormik({
        initialValues: {
            ilanBaslik: '',
            sonBasVuru: null,
            minSalary: '',
            maxSalary: '',
            personPiece: 0,
            explanation: '',
            city: '',
            position: '',
            image: ''
        },
        validationSchema: Yup.object({
            ilanBaslik: Yup.string().max(5, 'Başlık alanı en az 5 karakter uzunluğunda olmalı').required('This field is required'),
            personPiece: Yup.number().typeError("That doensn't like a number").min(1),
            explanation: Yup.string().required('This field is required'),
            city: Yup.string().required('This field is required'),
            position: Yup.string().required('This field is required'),
            image: Yup.string().required('This field is required')
        }),

        onSubmit: async (values) => {

            const serviceData = {
                "cityId": values.city,
                "employerId": 15, // user login işlemlerinden sonra localstorageden alınacak
                "jobDescription": values.explanation,
                "jobPositionId": values.position,
                "lastApplicationDate": values.sonBasVuru ? values.sonBasVuru : null,
                "maxSalary": values.maxSalary,
                "minSalary": values.minSalary,
                "positionPiece": values.personPiece,
            }
            let response = await addAdvertisement(serviceData);
            if (response.success) {
                const formdata = new FormData();
                formdata.append("file", values.image, values.image.name)
                let imageResponse = await addAdvertisementImage(formdata, response.data)
                formik.resetForm({})
                setOpen(false);
                toast.success(' 🚀' + response.message, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });

            }

        }
    })
    const [open, setOpen] = useState(false)
    const cityList = cities.map((city) => ({ key: city.id, text: city.cityName, value: city.id }))
    const positionlist = jobPositons.map((position) => ({ key: position.id, text: position.position, value: position.id }))
    return (

        <Modal
            dimmer="blurring"
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button size="tiny" positive><Icon name='plus' /> İş İlanı</Button>}>
            <Modal.Header>
                İş İlanı
            </Modal.Header>
            <Modal.Content scrolling>
                <Form onSubmit={formik.handleSubmit}>
                    <Form.Input name="ilanBaslik" fluid label="İlan Başlığı" error={formik.touched.ilanBaslik && formik.errors.ilanBaslik ?
                        formik.errors.ilanBaslik : null} value={formik.values.ilanBaslik} onChange={formik.handleChange} />
                    <Form.Input
                        type="file" name="image" fluid label="Şirket Resmi" error={formik.touched.image && formik.errors.image ?
                            formik.errors.image : null} onChange={(e, { name }) => { formik.values.image = e.target.files[0] }}
                    />
                    <Form.Group widths="equal">
                        <SemanticDatepicker label="Son Başvuru" name="sonBasVuru" fluid onChange={(e, { name, value }) => formik.setFieldValue(name, value)} />
                        <Form.Input type="number" label="Kişi Adedi" fluid onChange={formik.handleChange} name="personPiece" error={formik.touched.personPiece && formik.errors.personPiece ? formik.errors.personPiece : null} />
                    </Form.Group>
                    <Form.Group widths="equal">
                        <Form.Select
                            fluid
                            label='Pozisyon'
                            placeholder='Pozisyon'
                            name='position'
                            options={positionlist}
                            value={formik.values.position}
                            onChange={(e, { name, value }) => formik.setFieldValue(name, value)}
                            error={formik.touched.position && formik.errors.position ? formik.errors.position : null}
                        />
                        <Form.Select
                            fluid
                            label='Şehir'
                            name="city"
                            placeholder='Şehir'
                            value={formik.values.city}
                            options={cityList}
                            onChange={(e, { name, value }) => formik.setFieldValue(name, value)}
                            error={formik.touched.city && formik.errors.city ? formik.errors.city : null} />
                    </Form.Group>
                    <Form.Group widths="equal">
                        <Form.Input fluid label="Min. Maaş" name="minSalary" onChange={formik.handleChange} value={formik.values.minSalary} />
                        <Form.Input fluid label="Max. Maaş" name="maxSalary" onChange={formik.handleChange} value={formik.values.maxSalary} />
                    </Form.Group>
                    <Form.TextArea label="Açıklama" fluid name="explanation" onChange={formik.handleChange} value={formik.values.explanation}
                        error={formik.touched.explanation && formik.errors.explanation ? formik.errors.explanation : null} />
                    <Button
                        floated="right"
                        type="submit"
                        content="Kaydet"
                        labelPosition='right'
                        icon='checkmark'
                        color="green"
                        basic
                    />
                    <Button
                        floated="right"
                        content="Kapat"
                        labelPosition="right"
                        icon='x'
                        basic
                        onClick={() => setOpen(false)}
                        color="red"
                    />
                </Form>
            </Modal.Content>
        </Modal>
    )
}
export default AddAdvertisementModal
