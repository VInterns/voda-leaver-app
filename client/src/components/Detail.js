import React from "react";
import "./styles/Detail.css";

/////////////////////////////////////////////////////////////////////////
class Detail  extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            detail : {}
        }


    }

    componentDidMount() {
        const retDetail = this.props.location.state.detail;
        console.log(retDetail);
        this.setState({
            detail: retDetail
        })
    }

    render() {
        const {detail} = this.state;

        return(
            <div className = "detail-container">
                <div className = "top-panel">
                    <h2>Leaver Details</h2>
                    <div className = "leaver-info">
                        <div className = "row-info">
                            <label className = "key">Staff ID</label>
                            <label className = "value">{detail.staffID}</label>
                        </div>
                    </div>
                </div>
                <div className = "bottom-panel">
                    down panel
                </div>
            </div>
        )
    }
}

/////////////////////////////////////////////////////////////////////////
export default Detail;