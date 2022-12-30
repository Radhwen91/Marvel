import React, {Fragment, useEffect, useState} from 'react'
import {get_Charachters} from "../actions/charachters";
import {connect} from "react-redux";
import {Card, Col, Row, Select} from "antd";
import {useDispatch} from "react-redux";
import PropTypes from "prop-types";
import {Footer} from 'antd/lib/layout/layout';

const Charachter = ({charachterData}) => {
    let dispatch = useDispatch()
    const [limit, setLimit] = useState("10")
    let query = `limit=${limit}`
    useEffect(() => {
        dispatch(get_Charachters(query))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query])


    return (
        <Fragment>

            <div style={{backgroundColor: "#23395d"}}>
                <Row gutter={[32, 0]}>
                    {charachterData.C && charachterData.C.map((M) => (
                        <Col span={4}>
                            <Card style={{ borderRadius:"20px"}}
                                hoverable
                                title={M.name}
                            >
                                <img src={M.thumbnail.path + '/standard_medium.' + M.thumbnail.extension}
                                     style={{width: "100%"}}/>
                            </Card>
                            <br/>
                        </Col>


                    ))}
                </Row>
                <Row>
                    <Col span={9}></Col>
                    <Col span={6}>
                        <Row>
                            <Col span={10}></Col>
                        <h2 style={{color: "white"}}>Limit :</h2>
                            <Col></Col>
                        </Row>
                        <select
                            size={"large"}
                            onChange={(e) => setLimit(e.target.value)}
                            style={{width: "80%", position: "relative", left :"10%", marginTop: "10px" , borderRadius: "10px" , height: "40px"}}
                        >
                            <option value={10}>10</option>
                            <option value={20}>20</option>
                            <option value={30}>30</option>
                            <option value={40}>40</option>
                            <option value={50}>50</option>
                            <option value={60}>60</option>
                            <option value={70}>70</option>
                            <option value={80}>80</option>
                            <option value={90}>90</option>
                            <option value={100}>100</option>
                        </select></Col>
                    <Col span={9}></Col>
                </Row>
            </div>
        </Fragment>
    )

}
Charachter.propTypes = {
    get_Charachters: PropTypes.func.isRequired,
    charachterData: PropTypes.object.isRequired,
};

const mapstatetoprops = (state) => ({
    charachterData: state.charachters,
});

export default connect(mapstatetoprops, {get_Charachters})(Charachter);