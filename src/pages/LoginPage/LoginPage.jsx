import "./styles.css";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { withTranslation, useTranslation } from "react-i18next";
import { loginRequest, getDogBreedsRequest } from "./store/action";
import {
    Form, Select, Input, Modal,
    Radio, DatePicker, Checkbox, Button,
    Col, Row, Tabs, InputNumber, message, Upload
} from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import {
    LoadingSpinner,
    // Button
} from "../../components"
import LoginImg from "../../assets/Pictures/LandingPage.jpg";
import { storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { v4 } from "uuid"

function LoginPage(props) {
    //Declare
    //Multi-Lang
    const { t } = props;
    const { i18n } = useTranslation();
    const [lang, setLang] = useState(localStorage.getItem("lang"));
    //Redux
    const dispatch = useDispatch();
    const dogBreeds = useSelector((state) => state.user.dogBreeds);
    const isLoadingDogBreeds = useSelector((state) => state.user.isLoadingDogBreeds);
    const isLoading = useSelector((state) => state.user.isLoading);
    //Variables
    const navigate = useNavigate();
    const { TextArea } = Input;
    const [credentials, setCredentials] = useState({
        Password: "",
        PhoneNumber: ""
    })
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [dogsBreedData, setDogsBreedData] = useState([]);
    const [isLoadingImage, setLoadingImage] = useState(false);
    const [imageUrl, setImageUrl] = useState();

    //Function
    //OnStart Function
    useEffect(() => {
        const loggedInUser = sessionStorage.getItem("token");
        if (loggedInUser !== null) {
            navigate("/dashboard");
        }
        changeLanguage(lang);

        dispatch(getDogBreedsRequest())
    }, []);

    useEffect(() => {
        getDogBreedsList();
    }, [isLoadingDogBreeds]);

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    //User-Action Function
    const handleLogin = () => {
        // dispatch(loginRequest(credentials))
        console.log(credentials);
    }

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const getDogBreedsList = () => {
        var dogBreedslist = [];
        dogBreeds.map((item) => {
            dogBreedslist.push({
                value: item.Code,
                label: item.Description,
            });
        });
        setDogsBreedData(dogBreedslist);
    };

    const uploadImage = ({ file, onSuccess, onError, onProgress }) => {
        var uploadTask = uploadBytesResumable(ref(storage, `images/${file.name + v4()}`), file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                onProgress(progress)
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {
                onError(error)
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    onSuccess(downloadURL)
                });
            }
        );
    }

    const getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    };

    const beforeUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
    };

    const handleChange = (info) => {
        if (info.file.status === 'uploading') {
            setLoadingImage(true);
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, (url) => {
                setLoadingImage(false);
                setImageUrl(url);
            });
        }
    };

    return (
        <>
            {
                isLoading ?
                    <LoadingSpinner /> :
                    <div className="login-page">
                        <div className="login-box">
                            <div className="illustration-wrapper">
                                <img src={LoginImg} alt="Login" />
                            </div>
                            <Form
                                name="login-form"
                                initialValues={{ remember: true }}
                            >
                                <p className="form-title">Welcome back</p>
                                <p className="form-description">Login to the Dashboard</p>
                                <Form.Item
                                    name="phonenumber"
                                    rules={[{ required: true, message: 'Please input your phone number!' }]}
                                >
                                    <Input
                                        placeholder="Phone Number"
                                        onChange={(e) => setCredentials({ ...credentials, PhoneNumber: e.target.value })}
                                    />
                                </Form.Item>

                                <Form.Item
                                    name="password"
                                    rules={[{ required: true, message: 'Please input your password!' }]}
                                >
                                    <Input.Password
                                        placeholder="Password"
                                        onChange={(e) => setCredentials({ ...credentials, Password: e.target.value })}
                                    />
                                </Form.Item>

                                <Row>
                                    <Col span={12}>
                                        <Form.Item name="remember" valuePropName="checked">
                                            <Checkbox>Remember me</Checkbox>
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item name="signup" valuePropName="checked" className="form-item-signup">
                                            <Button type="link" onClick={() => showModal()}>
                                                Sign up
                                            </Button>
                                        </Form.Item>
                                    </Col>
                                </Row>

                                <Form.Item>
                                    <Button type="primary" htmlType="submit" className="login-form-button" onClick={() => handleLogin()}>
                                        LOGIN
                                    </Button>
                                </Form.Item>
                            </Form>

                            <Modal style={{ zIndex: 99 }} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                                <Tabs defaultActiveKey="1">
                                    <Tabs.TabPane key="1" tab="User">
                                        <Form
                                            labelCol={{
                                                span: 4,
                                            }}
                                            wrapperCol={{
                                                span: 14,
                                            }}
                                            layout="horizontal"
                                        >
                                            <Form.Item label="Phone">
                                                <Input />
                                            </Form.Item>
                                            <Form.Item label="Name">
                                                <Input />
                                            </Form.Item>
                                            <Form.Item label="Birthday">
                                                <DatePicker />
                                            </Form.Item>
                                            <Form.Item label="Gender">
                                                <Radio.Group>
                                                    <Radio value="male"> Male </Radio>
                                                    <Radio value="female"> Female </Radio>
                                                </Radio.Group>
                                            </Form.Item>
                                            <Form.Item label="Address">
                                                <Input />
                                            </Form.Item>
                                            <Form.Item label="Password">
                                                <Input.Password />
                                            </Form.Item>
                                        </Form>
                                    </Tabs.TabPane>
                                    <Tabs.TabPane key="2" tab="Pets">
                                        <Form
                                            labelCol={{
                                                span: 4,
                                            }}
                                            wrapperCol={{
                                                span: 14,
                                            }}
                                            layout="horizontal"
                                        >
                                            <Form.Item label="Name">
                                                <Input />
                                            </Form.Item>
                                            <Form.Item label="Breed">
                                                <Select
                                                    showSearch
                                                    placeholder="Dog's Breed"
                                                    optionFilterProp="children"
                                                    filterOption={(input, option) =>
                                                        (option?.label ?? "").includes(input)
                                                    }
                                                    filterSort={(optionA, optionB) =>
                                                        (optionA?.label ?? "")
                                                            .toLowerCase()
                                                            .localeCompare((optionB?.label ?? "").toLowerCase())
                                                    }
                                                    // onChange={(e) =>
                                                    //     setDayCareInformation({ ...daycareInformation, Dog: e })
                                                    // }
                                                    options={dogsBreedData}
                                                />
                                            </Form.Item>
                                            <Form.Item label="Microchip">
                                                <InputNumber min={0} defaultValue={0} />
                                            </Form.Item>
                                            <Form.Item label="Weight">
                                                <InputNumber min={0} defaultValue={0} />
                                            </Form.Item>
                                            <Form.Item label="Birthday">
                                                <DatePicker />
                                            </Form.Item>
                                            <Form.Item label="Gender">
                                                <Radio.Group>
                                                    <Radio value="male"> Male </Radio>
                                                    <Radio value="female"> Female </Radio>
                                                </Radio.Group>
                                            </Form.Item>
                                            <Form.Item label="Sterilized">
                                                <Radio.Group>
                                                    <Radio value="true"> Yes </Radio>
                                                    <Radio value="false"> No </Radio>
                                                </Radio.Group>
                                            </Form.Item>
                                            <Form.Item label="Additional Information">
                                                <TextArea rows={4} />
                                            </Form.Item>
                                            <Form.Item label="Fur color">
                                                <Select
                                                    showSearch
                                                    placeholder="Dog's fur"
                                                    optionFilterProp="children"
                                                    filterOption={(input, option) =>
                                                        (option?.label ?? "").includes(input)
                                                    }
                                                    filterSort={(optionA, optionB) =>
                                                        (optionA?.label ?? "")
                                                            .toLowerCase()
                                                            .localeCompare((optionB?.label ?? "").toLowerCase())
                                                    }
                                                    // onChange={(e) =>
                                                    //     setDayCareInformation({ ...daycareInformation, Dog: e })
                                                    // }
                                                    options={dogsBreedData}
                                                />
                                            </Form.Item>
                                            <Form.Item label="Dog's Picture">
                                                <Upload
                                                    name="picture"
                                                    listType="picture-card"
                                                    className="avatar-uploader"
                                                    showUploadList={false}
                                                    customRequest={(e) => uploadImage(e)}
                                                    beforeUpload={beforeUpload}
                                                    onChange={handleChange}
                                                >
                                                    {imageUrl ? (
                                                        <img
                                                            src={imageUrl}
                                                            alt="avatar"
                                                            style={{
                                                                width: '100%',
                                                            }}
                                                        />
                                                    ) : (
                                                        <div>
                                                            {isLoadingImage ? <LoadingOutlined /> : <PlusOutlined />}
                                                            <div
                                                                style={{
                                                                    marginTop: 8,
                                                                }}
                                                            >
                                                                Upload
                                                            </div>
                                                        </div>
                                                    )}
                                                </Upload>
                                            </Form.Item>
                                        </Form>
                                    </Tabs.TabPane>
                                </Tabs>
                            </Modal>
                        </div>
                    </div>
            }
        </>
    )
}

export default withTranslation()(LoginPage)