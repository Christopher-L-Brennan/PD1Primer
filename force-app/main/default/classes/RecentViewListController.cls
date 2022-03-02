public class RecentViewListController {
    @AuraEnabled
    public static List<RecentlyViewed> getRecentlyViewed() {
       return [SELECT Id, Name FROM RecentlyViewed WHERE Type IN('Account', 'Contact', 'Opportunity') ORDER BY LastViewedDate DESC LIMIT 5];
    }
}