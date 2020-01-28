import React from "react";
import {
    Button,
    Table
} from 'react-bootstrap';
import './styles/Request.css';
import axios from 'axios';

class Request extends React.Component{


    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            requests: []
        }

        this.clickButton = this.clickButton.bind(this);
        this.fetchRequestsData = this.fetchRequestsData.bind(this);
    }

    componentDidMount() {
        this.fetchRequestsData();
        this.timer = setInterval(() => this.fetchRequestsData(), 5000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        this.timer = null;
    }

    clickButton(req){
      this.props.history.push({
          pathname: "/phase-3-detail",
          state: {detail : req}
      })
    }

    fetchRequestsData() {
        this.setState({...this.state, isFetching: true});
        axios.get("http://localhost:4000/v/fetchRequests")
            .then( (res) => {
                const retRequests = res.data;
               // console.log(res.data)
                //console.log("retrieved data");
                this.setState({requests: retRequests})
               // console.log(this.state.requests);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        const {requests} = this.state;

        if (this.state.requests === null){
            return (
                <di>Data Wasn't Fetched!!</di>
            )
        }
        else {
            return (
                <div>
                    <h1 id = "wf">WF Table</h1>
                    <Table id = "requests">
                        <tbody>
                        <tr>
                            <th>Staff ID</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                        {requests.map(request=> <tr key = {request.staffID}>
                            <td>{request.staffID}</td>
                            <td>{request.name}</td>
                            <td>{request.status}</td>
                            <td>
                                <Button onClick = {() => this.clickButton(request)}>Submit</Button>
                            </td>
                        </tr>)}
                        </tbody>
                    </Table>
                </div>
            )
        }
    }

}


export default Request;