import React, {Fragment, useEffect, useState} from 'react'
import {get_Charachters} from "../actions/charachters";
import {connect} from "react-redux";
import {Card, Col, Row} from "antd";
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
                        <Col  span={4}>
                            <Card
                                hoverable
                                title={M.name}
                            >
                                <img src={M.thumbnail.path + '/standard_medium.' + M.thumbnail.extension} style={{width: "100%"}}/>
                            </Card>
                            <br/>
                        </Col>
                    ))}
                </Row>

                <h3>Limit</h3>


                <div style={{position: "relative", width: "40%", left: "30%", marginBottom: "50px"}}>
                    <select onChange={(e) => setLimit(e.target.value)}>
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

                    </select>
                </div>
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