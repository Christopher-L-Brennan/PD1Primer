({
	myAction : function(component, event, helper) {
        component.set("v.Columns", [
            {label:"Name", fieldName:"Name", type:"text"}
        ]);
        
        var action = component.get("c.getRecentlyViewed");
        
        action.setCallback(this, function(data) {
            component.set("v.recentlyViewed", data.getReturnValue());
        });
        
        $A.enqueueAction(action);
	}
})