<style>
@media print {
    .printArea {
        background-color: white;
        height: 100%;
        width: 100%;
        
        top: 0;
        left: 0;
        margin: 0;
        padding: 15px;
        font-size: 14px;
        line-height: 18px;
        display: block;
        
        
        
    }
    input[type=text]{

        border:0;
        font-weight:bold;
        display: inline-block;
        width:100%
        
    }
    #DeltaPageStatusBar,#btnClick, #printBtn,#Resubmit, #strongRid,#sideNavBox,#DeltaFormDigest,#s4-titlerow,#notificationArea,#s4-ribbonrow,#ms-cui-topBar2,#ms-cui-ribbonTopBars,#suiteBar,#ms-webpart-titleText{
        display:none !important;
    }
}

img {
  max-width: 100%;
  height: auto;
}

input[type=text]{

    
    font-weight:bold;
    display: inline-block;
    width:100%
    
}

/* Style the form - display items horizontally */
.form-inline {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
}

/* Add some margins for each label */
.form-inline label {
  margin: 5px 10px 5px 0;
}

/* Style the input fields */
.form-inline input {
  vertical-align: middle;
  margin: 5px 10px 5px 0;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
}

/* Style the submit button */
.form-inline button {
  padding: 10px 20px;
  background-color: dodgerblue;
  border: 1px solid #ddd;
  color: white;
}

.form-inline button:hover {
  background-color: royalblue;
}

/* Add responsiveness - display the form controls vertically instead of horizontally on screens that are less than 800px wide */
@media (max-width: 800px) {
  .form-inline input {
    margin: 10px 0;
  }

  .form-inline {
    flex-direction: column;
    align-items: stretch;
  }
}



</style>


<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"></script>


<script
  src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"
  integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU="
  crossorigin="anonymous"></script>
   
<script>



var objLocation = null; //This will hold if it has value or null
//If null, program breaks and send alert that "you do not have a commencement form"
$(function(){
    $("#printBtn").click(function(){
        $( ".removeSpace" ).remove();
        window.print();
    }); 
$("#Resubmit").click(function(){
      //date of birth will return date object, turn it into value

            //Gender is set as a choice value, see if it's an object.console

            //var genderTest = document.getElementsByName("gender").value;
            //console.log(genderTest);

            //This checks for checked mark and returns checked value


            var requestUri = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('EmployeeCommencementForm')/items";  //Within the 'Employees' part, you put in the list URL
           $.ajax({
              url: requestUri,
              type: "GET",
              headers: {
                  "accept":"application/json; odata=verbose"
              },
              success: onSuccess2,
              error: onError2
            });

        function onSuccess2(data) {

            objItems2 = data.d.results;

            console.log("resubmit executed");
            console.log(objItems2);
            var choices = [];
            var gend = document.getElementsByName('gender');
            var rights = document.getElementsByName('legalworkrights');
            var aboriginalTorres = document.getElementsByName('aboriginal');
            var firstLanguage = document.getElementsByName('firstlanguage');
            
            var parentsLanguage = document.getElementsByName('parentslanguage');
            var disabilityChoice = document.getElementsByName('disability');
            var disabilityType = document.getElementsByName('disabilitytype');

            var testNum = 0;

            


            
            for (var i=0;i<gend.length;i++)
            {
                if ( gend[i].checked ) 
                {
                    if(gend[i] === "undefined")
                    {
                        choices[0] = "Empty here";
                        console.log("We got an undefined here")
                    }
                    else
                    {
                        choices[0] = gend[i].value;
                        console.log("Value passed safely")
                    }
                }
            }
        
        
        


        
            for (var i=0;i<rights.length;i++)
            {
                if ( rights[i].checked ) 
                {
                    if(rights[i] === "undefined")
                    {
                        choices[1] = "Empty here";
                        console.log("We got an undefined here")
                    }
                    else
                    {
                        choices[1] = rights[i].value;
                        console.log("Value passed safely")
                    }
                }
            }
        

        



        
            for (var i=0;i<aboriginalTorres.length;i++)
            {
                if ( aboriginalTorres[i].checked ) 
                {
                    if(aboriginalTorres[i] === "undefined")
                    {
                        choices[2] = "Empty here";
                        console.log("We got an undefined here")
                    }
                    else
                    {
                        choices[2] = aboriginalTorres[i].value;
                        console.log("Value passed safely")
                    }
                }
            }
        

        





        
            for (var i=0;i<firstLanguage.length;i++)
            {
                if ( firstLanguage[i].checked ) 
                {
                    if(firstLanguage[i] === "undefined")
                    {
                        choices[3] = "Empty here";
                        console.log("We got an undefined here")
                    }
                    else
                    {
                        choices[3] = firstLanguage[i].value;
                        console.log("Value passed safely")
                    }
                }
            }
        

        





        
            for (var i=0;i<parentsLanguage.length;i++)
            {
                if ( parentsLanguage[i].checked ) 
                {
                    if(parentsLanguage[i] === "undefined")
                    {
                        choices[4] = "Empty here";
                        console.log("We got an undefined here")
                    }
                    else
                    {
                        choices[4] = parentsLanguage[i].value;
                        console.log("Value passed safely")
                    }
                }
            }
        

        





        
            for (var i=0;i<disabilityChoice.length;i++)
            {
                if ( disabilityChoice[i].checked ) 
                {
                    if(disabilityChoice[i] === "undefined")
                    {
                        choices[5] = "Empty here";
                        console.log("We got an undefined here")
                    }
                    else
                    {
                        choices[5] = disabilityChoice[i].value;
                        console.log("Value passed safely")
                    }
                }
            }
        






        
            for (var i=0;i<disabilityType.length;i++)
            {
                if ( disabilityType[i].checked ) 
                {
                    if(disabilityType[i] === "undefined")
                    {
                        choices[6] = "Empty here";
                        console.log("We got an undefined here")
                    }
                    else
                    {
                        choices[6] = disabilityType[i].value;
                        console.log("Value passed safely")
                    }
                }
            }
        






            console.log("Choices will be consoled after this");
            console.log(choices);

            console.log(choices[0]);//Gender
            console.log(choices[1]);//Rights
            console.log(choices[2]);//An Aboriginal or Torres Strait Islander
            console.log(choices[3]);//English first language?
            console.log(choices[4]);//Parents first language?
            console.log(choices[5]);//Disability yes/no
            console.log(choices[6]);//Disability type

            


            //Need to mass create grabs here (30 needed)
            


            var firstName = document.getElementById('firstname').value;

            console.log(firstName);
            
            var lastName = document.getElementById('lastname').value;

            console.log(lastName);
            
            var dateTest = document.getElementById("dateofbirth").value;
           
            var homeAddress = document.getElementById('homeaddress').value;
            
            var mailingAddress = document.getElementById('mailingaddress').value;
            
            var mobileNumber = document.getElementById('mobile').value;
            


            var homePhone = document.getElementById('homephone').value;
            
            var emailAddress = document.getElementById('emailaddress').value;
            
            var emergencyName = document.getElementById('emergencyname').value;
            
            var emergencyRelationship = document.getElementById('emergencyrelationship').value;
            
            var emergencyHome = document.getElementById('emergencyhome').value;
            


            var emergencyMobile = document.getElementById('emergencymobile').value;
            
            var emergencyAddress = document.getElementById('emergencyaddress').value;
            
            var countryofBirth = document.getElementById('countryofbirth').value;
            
            var englishOther = document.getElementById('englishother').value;
            
            var supermemberNumber = document.getElementById('supermembernumber').value;
            



            var superfundAbn = document.getElementById('superfundabn').value;
            
            var superfundName = document.getElementById('superfundname').value;
            
            var superUsi = document.getElementById('superusi').value;
            
            var superbuildName = document.getElementById('superbuildname').value;
            
            var superbuildBranch = document.getElementById('superbuildbranch').value;
            


            var superbankbsbNumber = document.getElementById('superbankbsbnumber').value;
            
            var superbankaccountNumber = document.getElementById('superbankaccountnumber').value;
            
            var superbankaccountName = document.getElementById('superbankaccountname').value;
            
            var superbankaccountType = document.getElementById('superbankaccounttype').value;
            
            var wageName = document.getElementById('wagename').value;
            


            var wageBranch = document.getElementById('wagebranch').value;
            
            var wagebsbNumber = document.getElementById('wagebsbnumber').value;
            
            var wageaccountNumber = document.getElementById('wageaccountnumber').value;
            
            var wageaccountName = document.getElementById('wageaccountname').value;
            
            var wageaccountType = document.getElementById('wageaccounttype').value;
            




            var genderChosen = choices[0];
            var rightsChosen = choices[1];
            var aboriginalChosen = choices[2];
            var englishChosen = choices[3];
            var parentsChosen = choices[4];
            var disabilityChosen = choices[5];
            var disabilitytypeChosen = choices[6];


            




            //TESTING UPDATE NOT CREATE
            //need if statement where if objLocation is null, create row, else update the row 
            
            if(objLocation === null)//This creates the row if users email does not match any emails
            {
                console.log("This means that new row will be created")
                var clientContext = new SP.ClientContext();
                console.log(clientContext);
                var oList = clientContext.get_web().get_lists().getByTitle('EmployeeCommencementForm');
                console.log(oList);    
                var itemCreateInfo = new SP.ListItemCreationInformation();

                console.log(itemCreateInfo);
                console.log("This is checking where error pops up");
                oListItem = oList.addItem(itemCreateInfo); //rid of createitem, look at columnradio

                console.log(oListItem);
            }
            else //This one updates the existing row that contains the email address that matches the user
            {
                console.log("This means that existing row will be updated")
                var clientContext = new SP.ClientContext();
                console.log(clientContext);
                var oList = clientContext.get_web().get_lists().getByTitle('EmployeeCommencementForm');
                console.log(oList);  
                console.log(objItems2[objLocation].ID);  
                oListItem = oList.getItemById(objItems2[objLocation].ID); //You get item id by obj id

                
            }
                
            



            console.log("setting will begin after this");

            oListItem.set_item('Title', firstName);
            console.log("checking");
            
            oListItem.set_item('Surname', lastName);
            oListItem.set_item('DateofBirth', dateTest);
            oListItem.set_item('HomeAddress', homeAddress);
            oListItem.set_item('MailingAddress', mailingAddress);
            oListItem.set_item('MobileNumber', mobileNumber);

            oListItem.set_item('HomePhone', homePhone);
            oListItem.set_item('EmailAddress', emailAddress);
            oListItem.set_item('EmergencyName', emergencyName);
            oListItem.set_item('EmergencyRelationship', emergencyRelationship);
            oListItem.set_item('EmergencyHomeWorkPhone', emergencyHome);

            oListItem.set_item('EmergencyMobile', emergencyMobile);
            oListItem.set_item('EmergencyAddress', emergencyAddress);
            oListItem.set_item('CountryofBirth', countryofBirth);
            oListItem.set_item('MainLanguageSpokenHome', englishOther);
            oListItem.set_item('SuperMemberNumber', supermemberNumber);

            oListItem.set_item('SuperFundABN', superfundAbn);
            oListItem.set_item('SuperFundName', superfundName);
            oListItem.set_item('UniqueSuperIdentifier', superUsi);
            oListItem.set_item('SuperBankName', superbuildName);
            oListItem.set_item('SuperBankBranch', superbuildBranch);

            oListItem.set_item('SuperBSBNumber', superbankbsbNumber);
            oListItem.set_item('SuperAccountNumber', superbankaccountNumber);
            oListItem.set_item('SuperAccountName', superbankaccountName);
            oListItem.set_item('SuperAccountType', superbankaccountType);
            oListItem.set_item('WageBankName', wageName);

            oListItem.set_item('WageBranch', wageBranch);
            oListItem.set_item('WageBSBNumber', wagebsbNumber);
            oListItem.set_item('WageAccountNumber', wageaccountNumber);
            oListItem.set_item('WageAccountName', wageaccountName);
            oListItem.set_item('WageAccountType', wageaccountType);




            oListItem.set_item('Gender', genderChosen);
            oListItem.set_item('LegalWorkRights', rightsChosen);
            oListItem.set_item('AnAboriginalorTorresStrait', aboriginalChosen);
            oListItem.set_item('EnglishFirstLanguage', englishChosen);
            oListItem.set_item('ifYeswasEnglishBothParents', parentsChosen);
            oListItem.set_item('HaveDisability', disabilityChosen);
            oListItem.set_item('ifYesDisabilityWhatType', disabilitytypeChosen);






            
            
            

            console.log(oListItem);
                
            oListItem.update();

            console.log("test 7");
        
            clientContext.load(oListItem);

            console.log("test 8");
                
            clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
        
        
        function onQuerySucceeded() 
        {
        
            alert('Item created: ' + oListItem.get_id());
            //window.location.reload();
        }
        
        function onQueryFailed(sender, args) 
        {
        
            alert('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
            //window.location.reload();
        }
    }
    function onError2(error) {
        alert('Error');
   }

     }); 








    $("#btnClick").click(function(){

        
        
        var requestUri = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('EmployeeCommencementForm')/items";  //Within the 'Employees' part, you put in the list URL
           $.ajax({
              url: requestUri,
              type: "GET",
              headers: {
                  "accept":"application/json; odata=verbose"
              },
              success: onSuccess,
              error: onError
});




  function onSuccess(data) {

    


    //Need to now grab employee first/last name and add to drop down bar

     var objItems = data.d.results;
     console.log(objItems);


     var clientContext = new SP.ClientContext.get_current();
     //_spPageContextInfo.userId This returns the ID number we can go "userId === authorId"
     //_spPageContextInfo.userLoginName This returns the current users email
     var userEmail = _spPageContextInfo.userLoginName;
     console.log("The current users email is: " + userEmail);
     //Now we need to search EmailAddress column and return row number
 
     console.log("The objItems length is: " + objItems.length)
     var objLen = objItems.length;
     
     var i;
     var emails = [];
     for(i = 0; i < objLen; i++)
     {
         if(objItems[i].EmailAddress == userEmail) //Change to WorkEmail column
         {
             objLocation = i; //This holds the row number that matches users email to rows email
             console.log("There has been a match at index: " + objLocation);
         }
         emails.push(objItems[i].EmailAddress);
         console.log("Current array  content is: " + emails[i]);
     }
     console.log("objLocation value is: " + objLocation);
     
     if(objLocation === null)
     {

        alert("Your email (" + userEmail + ") has not been registered, please fill out the form and press the \"Update\" button ");
        return;
        
        
        
        //if(objLocation == null) return;
        //{
           // alert("This escapes the program, will never be shown ");
        //}

     }
     

     
     var testOne = objItems[objLocation].Title;
     var testTwo = objItems[objLocation].Surname;

     var testThree = objItems[objLocation].DateofBirth;
     var testFour = objItems[objLocation].Gender; //Choice
     var testFive = objItems[objLocation].LegalWorkRights; //Choice
     var testSix = objItems[objLocation].HomeAddress;
     var testSeven = objItems[objLocation].MailingAddress;

     var testEight = objItems[objLocation].MobileNumber;
     var testNine = objItems[objLocation].HomePhone;
     var testTen = objItems[objLocation].EmailAddress;
     var testEleven = objItems[objLocation].EmergencyName;
     var testTwelve = objItems[objLocation].EmergencyRelationship;

     var testThirteen = objItems[objLocation].EmergencyHomeWorkPhone;
     var testFourteen = objItems[objLocation].EmergencyMobile;
     var testFifteen = objItems[objLocation].EmergencyAddress;
     var testAboriginal = objItems[objLocation].AnAboriginalorTorresStrait; //Choice
     var testSixteen = objItems[objLocation].CountryofBirth;

     var testfirstLanguage = objItems[objLocation].EnglishFirstLanguage; //Choice
     var testparentsLanguage = objItems[objLocation].ifYeswasEnglishBothParents; //Choice
     var testSeventeen = objItems[objLocation].MainLanguageSpokenHome;
     var testDisability = objItems[objLocation].HaveDisability; //Choice
     var testdisabilityType = objItems[objLocation].ifYesDisabilityWhatType; //Choice


     //Note - Below holds the columns that are at the end of SharepointList
     var testEighteen = objItems[objLocation].SuperMemberNumber;
     var testNineteen = objItems[objLocation].SuperFundABN;
     var testTwenty = objItems[objLocation].SuperFundName;
     var testTwentyone = objItems[objLocation].UniqueSuperIdentifier;
     //Note - Above holds the columns that are at the end of SharepointList

     var testTwentytwo = objItems[objLocation].SuperBankName;
     var testTwentythree = objItems[objLocation].SuperBankBranch;
     var testTwentyfour = objItems[objLocation].SuperBSBNumber;

     var testTwentyfive = objItems[objLocation].SuperAccountNumber;
     var testTwentysix = objItems[objLocation].SuperAccountName;
     var testTwentyseven = objItems[objLocation].SuperAccountType;

     var testTwentyeight = objItems[objLocation].WageBankName;
     var testTwentynine = objItems[objLocation].WageBranch;
     var testThirty = objItems[objLocation].WageBSBNumber;


     var testThirtyone = objItems[objLocation].WageAccountNumber;
     var testThirtytwo = objItems[objLocation].WageAccountName;
     var testThirtythree = objItems[objLocation].WageAccountType;


     
     console.log(testfirstLanguage); 
    if(!testfirstLanguage)
    {
      testfirstLanguage = "no";

    }
    if(!testDisability)
    {
      testDisability = "no";

    }

    console.log(testfirstLanguage); 
     





     $(function(){
      $('input[name=gender][value=' + testFour + ']').prop('checked',true)
      $('input[name=legalworkrights][value=' + testFive + ']').prop('checked',true)

      $('input[name=aboriginal][value=' + testAboriginal + ']').prop('checked',true)
      $('input[name=firstlanguage][value=' + testfirstLanguage + ']').prop('checked',true)

      $('input[name=parentslanguage][value=' + testparentsLanguage + ']').prop('checked',true)
      $('input[name=disability][value=' + testDisability + ']').prop('checked',true)

      $('input[name=disabilitytype][value=' + testdisabilityType + ']').prop('checked',true)


    });

    


     console.log(testOne);
     console.log(testTwo);

     document.getElementById("firstname").value = testOne;
     document.getElementById("lastname").value = testTwo;
     document.getElementById('dateofbirth').value = testThree; 
     //document.getElementsByName('gender').value = testFour;     //choice
     //document.getElementById("legalworkingrights").value = testFive; //choice
    
     document.getElementById('homeaddress').value = testSix;   
     document.getElementById('mailingaddress').value = testSeven;
     document.getElementById('mobile').value = testEight;
     document.getElementById('homephone').value = testNine;
     document.getElementById('emailaddress').value = testTen;
     
     document.getElementById('emergencyname').value = testEleven;
     document.getElementById('emergencyrelationship').value = testTwelve;
     document.getElementById('emergencyhome').value = testThirteen;
     document.getElementById('emergencymobile').value = testFourteen;
     document.getElementById('emergencyaddress').value = testFifteen;

    // document.getElementById('aboriginal').value = testAboriginal; //Choice
     
     document.getElementById('countryofbirth').value = testSixteen;

    // document.getElementById('firstlanguage').value = testfirstLanguage; //choice
    // document.getElementById('parentslanguage').value = testparentsLanguage; //choice

     document.getElementById('englishother').value = testSeventeen;

    // document.getElementById('disability').value = testDisability; //choice
    // document.getElementById('disabilitytype').value = testdisabilityType; //choice


     document.getElementById('supermembernumber').value = testEighteen;
     document.getElementById('superfundabn').value = testNineteen;
     document.getElementById('superfundname').value = testTwenty;
     document.getElementById('superusi').value = testTwentyone;

     document.getElementById('superbuildname').value = testTwentytwo;
     document.getElementById('superbuildbranch').value = testTwentythree;
     document.getElementById('superbankbsbnumber').value = testTwentyfour;
     document.getElementById('superbankaccountnumber').value = testTwentyfive;
     
     document.getElementById('superbankaccountname').value = testTwentysix;  
     document.getElementById('superbankaccounttype').value = testTwentyseven;

     document.getElementById('wagename').value = testTwentyeight;
     document.getElementById('wagebranch').value = testTwentynine;  
     document.getElementById('wagebsbnumber').value = testThirty;
     
     document.getElementById('wageaccountnumber').value = testThirtyone;     
     document.getElementById('wageaccountname').value = testThirtytwo;  
     document.getElementById('wageaccounttype').value = testThirtythree;




    
        //Have to move resubmit outside of this current btn click
     
    

    






   
   }
    function onError(error) {
        alert('Error');
   }
  });
});

</script>

<div class="printArea">


<img src="https://jbepl.sharepoint.com/PublishingImages/PrintForm/Home/test.PNG"></a><br></br>







<div class = removeSpace>
  <input type="button" id="btnClick" value="Grab your details"/> <br>

<strong id="strongRid">The form will be prefilled with your details upon pressing "Grab your details", please make any changes needed and press the "Update" button at the bottom. If you wish to create new user, please go here: <a href="https://jbepl.sharepoint.com/Employee%20Commencement%20Form/Home.aspx">https://jbepl.sharepoint.com/Employee%20Commencement%20Form/Home.aspx</a></strong><br>

  <form class="form-inline" action="/action_page.php">
</div>

  <h2>YOUR PERSONAL DETAILS</h2>
  

  First name:
  <input type="text" id="firstname">
  

  Last name:
  <input type="text" id="lastname">
  

  Date of Birth:
  <input type="text" id="dateofbirth">
  <br><br>

  Gender:<br>
  <input type="radio" name="gender" value="male">Male
  <input type="radio" name="gender" value="female">Female

  <br><br>

  Do you have the legal work rights within Australia?:<br>
  <input type="radio" name="legalworkrights" value="citizen">Yes, I am an Australian or New Zealand citizen&nbsp;
  <input type="radio" name="legalworkrights" value="resident">Yes, I am an Australian resident<br>
  <input type="radio" name="legalworkrights" value="workingvisa">Yes, I have a valid working visa&nbsp;&nbsp;
  <input type="radio" name="legalworkrights" value="noworkingrights">No, I don't have work rights within Australia<br>

  <br>


<h2>YOUR PERSONAL CONTACT DETAILS</h2>

  Home Address:
  <input type="text" id="homeaddress" ><br>

  Mailing Address:
  <input type="text" id="mailingaddress" ><br>

  Mobile:
  <input type="text" id="mobile" >
  

  Home Phone:
  <input type="text" id="homephone" >
  <br>

  Email Address:
  <input type="text" id="emailaddress" >
  <br><br>


<H2>EMERGENCY CONTACT INFORMATION</H2>

  Emergency Name:
  <input type="text" id="emergencyname" >
  

  Emergency Relationship:
  <input type="text" id="emergencyrelationship" >
  

  Emergency Home/Work Phone:
  <input type="text" id="emergencyhome" >
  

  Emergency Mobile:
  <input type="text" id="emergencymobile" ><br><br><br>
  

  Emergency Address:
  <input type="text" id="emergencyaddress" >
  <br><br>

  <H2>EQUAL EMPLOYMENT OPPORTUNITY INFORMATION</H2>

  Are you an Aboriginal or Torres Straight Islander:<br>
  <input type="radio" name="aboriginal" value="aboriginal">Aboriginal&nbsp;&nbsp;
  <input type="radio" name="aboriginal" value="torres">Torres Strait Islander<br>
  <input type="radio" name="aboriginal" value="bothaboriginaltorres">Aboriginal Torres Straight Islander&nbsp;
  <input type="radio" name="aboriginal" value="notaboriginal">No, not Aboriginal and/or Torres Strait Islander</input>
  <br><br>

  What was your country of birth?:
  <input type="text" id="countryofbirth" >
  <br><br>

  Was English your FIRST language?:<br>
  <input type="radio" name="firstlanguage" value="yes">Yes
  <input type="radio" name="firstlanguage" value="no">No<br>
  <br>

  If yes, was English BOTH of your parents' first language?:<br>
  <input type="radio" name="parentslanguage" value="yes">Yes
  <input type="radio" name="parentslanguage" value="no">No
  <input type="radio" name="parentslanguage" value="dontknow">Don't know<br></br>

  

  Main language OTHER than English spoken at home?:
  <input type="text" id="englishother" >
  <br><br>

  Do you have a disability?:<br>
  <input type="radio" name="disability" value="yes">Yes
  <input type="radio" name="disability" value="no">No<br></br>
  

  If yes, please select the type of disability. If you have a disability and do not want to identify as having a disability, you may answer 'No':<br>
  <input type="radio" name="disabilitytype" value="hearing">Hearing
  <input type="radio" name="disabilitytype" value="mobility">Mobility
  <input type="radio" name="disabilitytype" value="vision">Vision
  <input type="radio" name="disabilitytype" value="medical">Medical
  <input type="radio" name="disabilitytype" value="other">Other

  <br><br><br>

<h2>SUPERANNUATION DETAILS</h2>
  Member number:
  <input type="text" id="supermembernumber" >
  

  Fund ABN:
  <input type="text" id="superfundabn" >
  <br>

  Fund Name:
  <input type="text" id="superfundname" >
  

  Unique Superannuation Identifier (USI):
  <input type="text" id="superusi" >
  <br></br>


<h2>SUPERANNUATION BANK DETAILS</h2>
  Bank Bank/Building Society/Credit Union Name:
  <input type="text" id="superbuildname" >
  <br>

  Bank Bank/Building Society/Credit Union Branch:
  <input type="text" id="superbuildbranch" >
  <br>

  Bank BSB Number:
  <input type="text" id="superbankbsbnumber" >
  

  Bank Account Number:
  <input type="text" id="superbankaccountnumber" >
  <br>

  Bank Account Name:
  <input type="text" id="superbankaccountname" ><br><br>
  
  Bank Account Type:
  <input type="text" id="superbankaccounttype" >
  <br><br>





<H2>WAGE BANK DETAILS</H2>
  Bank/Building Society/Credit Union Name:
  <input type="text" id="wagename" >
  <br>

  Bank/Building Society/Credit Union Branch:
  <input type="text" id="wagebranch" >
  <br>

  BSB Number:
  <input type="text" id="wagebsbnumber" >
  

  Account Number:
  <input type="text" id="wageaccountnumber" >
  <br>

  Account Name:
  <input type="text" id="wageaccountname" >
  

  Account Type:
  <input type="text" id="wageaccounttype" >
  <br>

  <br>
  <input type="button" id="Resubmit" value="Update">
  <input type="button" id="printBtn" value="Print">

  </form> 

</div>
