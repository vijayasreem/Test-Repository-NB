//Aura Component
<aura:component implements="flexipage:availableForAllPageTypes" access="global" >
	
	<!-- Attributes -->
	<aura:attribute name="folderStructure" type="String" />
	<aura:attribute name="multipleComponents" type="String"/>
	<aura:attribute name="customObjects" type="String"/>
	<aura:attribute name="lwcComponents" type="String"/>
	<aura:attribute name="apexClassConnectivity" type="String"/>
	<aura:attribute name="unitTests" type="String"/>
	<aura:attribute name="sandboxIntegration" type="String"/>
	<aura:attribute name="existingComponents" type="String"/>
	<aura:attribute name="deploymentProcess" type="String"/>
	<aura:attribute name="lambdaFunction" type="String"/>
	<aura:attribute name="singleProject" type="String"/>
	<aura:attribute name="pilotTesting" type="String"/>
	
	<!-- Handlers -->
	<aura:handler name="init" value="{!this}" action="{!c.doInit}"/>
	
	<!-- Client-side controller -->
	<aura:componentController extensible="true" />
	
	<!-- Renderer -->
	<aura:renderer />

</aura:component>

//JS Controller

({
	doInit : function(component, event, helper) {
		// Folder Structure
		helper.implementFolderStructure(component);
		
		// Multiple Component Selection
		helper.multipleComponentSelection(component);
		
		// Custom Objects
		helper.createCustomObjects(component);
		
		// LWC Components
		helper.createLWCComponents(component);
		
		// Apex Class Connectivity
		helper.connectApexClasses(component);
		
		// Unit Tests
		helper.implementUnitTests(component);
		
		// Sandbox Integration
		helper.integrateSandbox(component);
		
		// Existing Components
		helper.implementExistingComponents(component);
		
		// Deployment Process
		helper.deploymentProcess(component);
		
		// AWS Lambda
		helper.implementLambdaFunction(component);
		
		// Single Project
		helper.allInSingleProject(component);
		
		// Pilot Testing
		helper.pilotTestingAccess(component);
		
		
	}
})