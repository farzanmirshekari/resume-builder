import Contact_Details from "../individual_items/Contact_Details";
import Email_Icon from "./../../../assets/email_icon.svg";
import Phone_Icon from "./../../../assets/phone_icon.svg";
import LinkedIn_Icon from "./../../../assets/linkedin_icon.svg";
import Location_Icon from "./../../../assets/location_icon.svg";
import GitHub_Icon from "./../../../assets/github_icon.svg";

interface Props {
    full_name: string;
    phone_number: string;
    email_address: string;
    github_username: string;
    linkedin_username: string;
    location: string;
}

function Personal_Information ( { full_name, phone_number, email_address, github_username, linkedin_username, location } : Props ) {
    return (    
        <header className = 'flex flex-col w-full justify-center items-center'>
            <div className = 'flex flex-row text-center'>
                <div className = 'uppercase pb-0.5'>
                    <span className = 'flex flex-row full_name'><p>{full_name.split(' ')[0].padEnd(full_name.split(' ')[0].length + 1,' ')}</p>{Array(1).fill('\xa0').join('')}<p>{full_name.split(' ')[1]}</p></span>
                </div>
            </div>
            <div className = 'flex flex-row items-center gap-4 -mt-1'>
                <Contact_Details text = {phone_number} icon = {Phone_Icon} />
                <Contact_Details text = {email_address} icon = {Email_Icon} />
                <Contact_Details text = {location} icon = {Location_Icon} />
                <Contact_Details text = {github_username} icon = {GitHub_Icon} />
                <Contact_Details text = {linkedin_username} icon = {LinkedIn_Icon} />
            </div>
        </header>
    )
}   

export default Personal_Information;