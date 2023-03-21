import {NavLink, useLocation} from "react-router-dom";
import {useEffect} from "react";

const MailingNotification = () => {
    return (
        <div className="position-fixed bottom-0 end-0 p-3">
            <div id="VRTryToast" className="toast hide">
                <div className="toast-header">
                    {/*<img src={profile} style={{height:"2.5rem"}}  alt="profile image"/>*/}
                    <strong className="me-auto">HNOI Notification</strong>
                    <small className="text-muted">just now</small>
                    <button type="button" className="btn-close" data-bs-dismiss="toast"></button>
                </div>
                <div className="toast-body">
                    <div className="toast-body">
                        Would you like to be added to the HNOI mailing list?
                        <div className="mt-2 pt-2 border-top">
                            <NavLink className="btn btn-primary" type="button" id="vr-btn" to="/vr">Yes please!</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


const Notifications = () => {

    //todo add different notifications on request
    //todo add conditional rendering for the different notifications

    return (
        <>
            <MailingNotification/>
        </>
    )
};



export default Notifications;
