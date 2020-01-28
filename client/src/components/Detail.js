import React from "react";

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
            <div>
                <div>
                    {detail.status}
                </div>
            </div>
        )
    }
}


export default Detail;