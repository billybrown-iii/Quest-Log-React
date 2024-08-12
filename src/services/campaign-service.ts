import data from '../FakeDatabase/campaign-data.json'

class CampaignService {
    find = campaignKey => {
        const matchingCampaign = data.campaigns.find(x => x.key == campaignKey);
        if (!matchingCampaign) throw 'Campaign not found'
        
        // temporary state: just returns all data
        return {
            campaign: matchingCampaign,
            milestones: data.milestones,
            quests: data.quests
        }
    }
}

const campaignService = new CampaignService();

export { campaignService }