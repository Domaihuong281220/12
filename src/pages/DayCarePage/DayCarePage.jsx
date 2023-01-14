import "./styles.css";
import React, { useState, useEffect } from "react";
import { withTranslation } from "react-i18next";
import { DatePicker, Select, Checkbox, Table, Col, Row, Input, Image } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { newDayCareRequest, activitiesGetAllRequest } from "./store/action";
import { Button, LoadingSpinner } from "../../components";
const { RangePicker } = DatePicker;

function DayCarePage(props) {
    const { t } = props;
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.daycare.isLoading);
    const allActivities = useSelector((state) => state.daycare.allActivities);
    const isLoadingActivities = useSelector(
        (state) => state.daycare.isLoadingActivities
    );

    const userProfile = JSON.parse(sessionStorage.getItem("userProfile"));
    const checkDateArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const activitiesColumns = [
        {
            title: "Activities",
            dataIndex: "Activity_EN",
            // sorter: (a, b) => a.Activity_EN.localeCompare(b.Activity_EN)
        },
        {
            title: "Categorize",
            dataIndex: "Categorize_EN",
        },
        {
            title: "Priority",
            dataIndex: "Priority",
        },
        {
            title: "Price",
            dataIndex: "Price",
        },
        // {
        //     title: "Priority Order",
        //     dataIndex: "PriorityOrder",
        // },
    ];

    const [customersDogsArr, setCustomersDogsArr] = useState([]);
    const [activitiesData, setActivitiesData] = useState([]);
    const [checked, setChecked] = useState(false);
    const [daycareInformation, setDayCareInformation] = useState({
        Owner: userProfile ? userProfile.Information.Code : "",
        Dog: userProfile ? userProfile.DogList[0].Code : "",
        StartTime: "",
        Pickup: "",
        Package: "000000001",
        PackageTime: "000000004",
        AddressNumber: "",
        Street: "",
        Ward: "",
        District: "",
        City: "",
        TimePickup: "",
        ActivityList: "",
    });
    const [selectedPackage, setSelectedPackage] = useState({ code: "000000003", label: "Pro" });
    const [selectedRows, setSelectedRows] = useState([]);
    const [listStr, setListStr] = useState("");

    useEffect(() => {
        dispatch(activitiesGetAllRequest());
        getDogsList();
    }, []);

    useEffect(() => {
        getActivitiesList();
    }, [isLoadingActivities]);

    useEffect(() => {
        setDayCareInformation({
            ...daycareInformation,
            ActivityList: listStr.slice(0, -1),
        });

    }, [listStr]);

    useEffect(() => {
        const tempPackageActivities = [];
        var tempListStr = "";
        for (let i = 0; i < allActivities.length; i++) {
            if (allActivities[i][selectedPackage.label] == "Yes") {
                tempPackageActivities.push(i + 1);
                tempListStr = tempListStr + allActivities[i].Code + ",";
            }
        }
        setSelectedRows(tempPackageActivities);
        setListStr(tempListStr)
    }, [selectedPackage]);

    const handleBookingDayCare = () => {
        dispatch(newDayCareRequest(daycareInformation));
    };

    const checkDate = (date) => {
        var checkedDate;
        checkDateArr.indexOf(date) > -1
            ? (checkedDate = "0" + date)
            : (checkedDate = date);
        return checkedDate;
    };

    const toggleChecked = () => {
        setChecked(!checked);
        !checked
            ? setDayCareInformation({ ...daycareInformation, Pickup: !checked })
            : setDayCareInformation({ ...daycareInformation, Pickup: "" });
    };

    const setActivityList = (ActivityList) => {
        var tempListStr = "";
        ActivityList.map((item, index) => {
            tempListStr = tempListStr + item.Code + ",";
        });
        setListStr(tempListStr)
    };

    const onChangePackage = (e) => {
        setDayCareInformation({ ...daycareInformation, Package: e.value });
        setSelectedPackage({ ...selectedPackage, code: e.value, label: e.label });
    };

    const getDogsList = () => {
        var DogsList = userProfile ? userProfile.DogList : [];
        var doglist = [];
        DogsList.map((item) => {
            // for (let index = 0; index < 99; index++) {
            //     if (item[`${index + 1}`] != undefined) {
            //         item[`${index + 1}`].map((element) => {
            //             doglist.push({
            //                 value: element.Description,
            //                 label: element.Description,
            //             });
            //         });
            //     } else break;
            // }
            doglist.push({
                value: item.Code,
                label: item.Description,
            });
        });
        setCustomersDogsArr(doglist);
    };

    const getActivitiesList = () => {
        const tempActivitiesData = [];
        const tempPackageActivities = [];
        var tempListStr = "";

        for (let i = 0; i < allActivities.length; i++) {
            tempActivitiesData.push({
                key: i + 1,
                Activity_EN: allActivities[i].Activity_EN,
                Categorize_EN: allActivities[i].Categorize_EN,
                Priority: allActivities[i].Priority,
                Price: allActivities[i].Price,
                PriorityOrder: allActivities[i].PriorityOrder,
                Code: allActivities[i].Code
            });
            if (allActivities[i][selectedPackage.label] == "Yes") {
                tempPackageActivities.push(i + 1);
                tempListStr = tempListStr + allActivities[i].Code + ",";
            }
        }
        setActivitiesData(tempActivitiesData);
        setSelectedRows(tempPackageActivities);
        setListStr(tempListStr)
    };

    return (
        <>
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                <>
                    <Row justify="space-between" className="page-row">
                        <Col span={10}>
                            <Row className="page-row">
                                <RangePicker
                                    showTime
                                    onOk={(e) => {
                                        setDayCareInformation({
                                            ...daycareInformation,
                                            StartTime: `${checkDate(e[0].$y)}${checkDate(
                                                e[0].$M + 1
                                            )}${checkDate(e[0].$D)}${checkDate(e[0].$H)}${checkDate(
                                                e[0].$m
                                            )}${checkDate(e[0].$s)}`,
                                        });
                                    }}
                                />
                            </Row>
                            <Row className="page-row">
                                <Select
                                    showSearch
                                    style={{ width: 200 }}
                                    placeholder="Customer's Dog"
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                        (option?.label ?? "").includes(input)
                                    }
                                    filterSort={(optionA, optionB) =>
                                        (optionA?.label ?? "")
                                            .toLowerCase()
                                            .localeCompare((optionB?.label ?? "").toLowerCase())
                                    }
                                    onChange={(e) =>
                                        setDayCareInformation({ ...daycareInformation, Dog: e })
                                    }
                                    defaultValue={userProfile ? userProfile.DogList[0].Code : ""}
                                    options={customersDogsArr}
                                />
                            </Row>
                            <Row className="page-row">
                                <Select
                                    showSearch
                                    style={{ width: 200 }}
                                    placeholder="Package"
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                        (option?.label ?? "").includes(input)
                                    }
                                    filterSort={(optionA, optionB) =>
                                        (optionA?.label ?? "")
                                            .toLowerCase()
                                            .localeCompare((optionB?.label ?? "").toLowerCase())
                                    }
                                    onChange={(e, labelInValue) => {
                                        onChangePackage(labelInValue);
                                    }}
                                    defaultValue={selectedPackage.code}
                                    options={[
                                        {
                                            value: "000000003",
                                            label: "Pro",
                                        },
                                        {
                                            value: "000000002",
                                            label: "Advance",
                                        },
                                        {
                                            value: "000000001",
                                            label: "Basic",
                                        },
                                    ]}
                                />
                            </Row>
                            <Row className="page-row">
                                <Select
                                    showSearch
                                    style={{ width: 200 }}
                                    placeholder="Package Time"
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                        (option?.label ?? "").includes(input)
                                    }
                                    filterSort={(optionA, optionB) =>
                                        (optionA?.label ?? "")
                                            .toLowerCase()
                                            .localeCompare((optionB?.label ?? "").toLowerCase())
                                    }
                                    onChange={(e) =>
                                        setDayCareInformation({
                                            ...daycareInformation,
                                            PackageTime: e,
                                        })
                                    }
                                    defaultValue="000000004"
                                    options={[
                                        {
                                            value: "000000003",
                                            label: "After 19:00",
                                        },
                                        {
                                            value: "000000002",
                                            label: "From 12:00 to 18:00",
                                        },
                                        {
                                            value: "000000001",
                                            label: "From 6:00 to 12:00",
                                        },
                                        {
                                            value: "000000004",
                                            label: "Fullday",
                                        },
                                    ]}
                                />
                            </Row>
                            <Row className="page-row">
                                <Checkbox checked={checked} onChange={() => toggleChecked()}>
                                    Pick up
                                </Checkbox>
                            </Row>
                            <Row className="page-row">
                                <Col span={checked ? 24 : 0}>
                                    <Row className="page-row padding-left-0">
                                        <DatePicker
                                            showTime
                                            onOk={(e) => {
                                                setDayCareInformation({
                                                    ...daycareInformation,
                                                    TimePickup: `${checkDate(e.$y)}${checkDate(
                                                        e.$M + 1
                                                    )}${checkDate(e.$D)}${checkDate(e.$H)}${checkDate(
                                                        e.$m
                                                    )}${checkDate(e.$s)}`,
                                                });
                                            }}
                                        />
                                    </Row>
                                    <Row className="page-row padding-left-0" justify="space-between">
                                        <Col span={12}>
                                            <Input
                                                placeholder="Address"
                                                onChange={(e) =>
                                                    setDayCareInformation({
                                                        ...daycareInformation,
                                                        AddressNumber: e.target.value,
                                                    })
                                                }
                                            />
                                        </Col>
                                        <Col span={11}>
                                            <Input
                                                placeholder="City"
                                                onChange={(e) =>
                                                    setDayCareInformation({
                                                        ...daycareInformation,
                                                        City: e.target.value,
                                                    })
                                                }
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="page-row padding-left-0" justify="space-between">
                                        <Col span={12}>
                                            <Input
                                                placeholder="District"
                                                onChange={(e) =>
                                                    setDayCareInformation({
                                                        ...daycareInformation,
                                                        District: e.target.value,
                                                    })
                                                }
                                            />
                                        </Col>
                                        <Col span={11}>
                                            <Input
                                                placeholder="Ward"
                                                onChange={(e) =>
                                                    setDayCareInformation({
                                                        ...daycareInformation,
                                                        Ward: e.target.value,
                                                    })
                                                }
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="page-row padding-left-0" justify="center">
                                        <Col span={24}>
                                            <Input
                                                placeholder="Street"
                                                onChange={(e) =>
                                                    setDayCareInformation({
                                                        ...daycareInformation,
                                                        Street: e.target.value,
                                                    })
                                                }
                                            />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={13}>
                            <img
                                className="full-size"
                                src="https://firebasestorage.googleapis.com/v0/b/dogsparkadmin.appspot.com/o/Dogs%2Fpexels-christian-domingues-731022.jpg?alt=media&token=54ac9600-fd87-498c-9957-ef4041940508" />
                        </Col>
                    </Row>
                    <Row className="page-row">
                        <Col span={24}>
                            <Table
                                rowSelection={{
                                    type: "checkbox",
                                    selectedRowKeys: selectedRows,
                                    onChange: (selectedRowKeys, selectedRows) => {
                                        setSelectedRows(selectedRowKeys);
                                        setActivityList(selectedRows);
                                    },
                                }}
                                columns={activitiesColumns}
                                dataSource={activitiesData}
                                pagination={{ pageSize: 5, position: ["bottomCenter"] }}
                            />
                        </Col>
                    </Row>
                    <Row justify="center" className="page-row">
                        <Col span={8}>
                            <Button btnName={t("signIn")} handleClick={handleBookingDayCare} />
                        </Col>
                    </Row>
                </>
            )}
        </>
    );
}

export default withTranslation()(DayCarePage);
