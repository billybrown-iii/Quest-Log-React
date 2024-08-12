import { useState } from "react";
import { campaignService } from "../services/campaign-service";
import { useNavigate } from "react-router-dom";

export default function Home({setCampaign}) {
    const [campaignKey, setCampaignKey] = useState('');
    const [buttonText, setButtonText] = useState('Find campaign');

    const navigate = useNavigate()

  
    function findCampaign (e) {
        e.preventDefault();

        let foundCampaign;
        try {
            foundCampaign = campaignService.find(campaignKey);
        } catch (e) {
            alert(e)
            return
        }

        setCampaign(foundCampaign);
        navigate('/campaign');
    }
    
    return <>
        <form onSubmit={findCampaign}>
            <input type="text" placeholder="Enter key.  ex: a12d3" value={campaignKey} onChange={(e) => setCampaignKey(e.target.value)} />
            <button type="submit" className="button">
            {buttonText}
            </button>
        </form>
    </>
}