<template>
  <div id="about" class="mx-5">
    

    <!-- <b-card class="bg-dark sidenav shadow">
    <b-nav class=" d-flex ml-4">
      <h1 class="display-4 text-light">CSA</h1>
      <b-nav-item class="text-white font-weight-bold" active
        ><b-button variant="outline-white" class="text-white"><b-icon icon="building"></b-icon> Manage School</b-button></b-nav-item
      >

      <hr class="border-top border-white w-75" >

      <b-nav-item class="text-white font-weight-bold" active
        ><b-button variant="outline-white" class="text-white"><b-icon icon="card-checklist"></b-icon> Rostered Tenants</b-button></b-nav-item
      >
      <b-nav-item class="text-white font-weight-bold" active
        ><b-button variant="outline-white" class="text-white"><b-icon icon="gear"></b-icon> Miscellaneous</b-button></b-nav-item
      >
    </b-nav>
    </b-card> -->

    <div class="">

    </div>

    <b-card bg-variant="primary" >
      <b-card-text class="text-white"><h4 class="float-left mx-3 ">Umbrella <b-icon icon="arrow-right-circle"></b-icon></h4></b-card-text>
      <b-card bg-variant="secondary" class="mt-5">
      <b-card-text class="text-white"><h4 class="float-left mx-3 ">Institution: Flordia Orange <b-icon icon="arrow-right-circle"></b-icon></h4></b-card-text>
        <b-card   class="mt-5" title="" bg-variant="secondary" >
      <b-card-text class="text-white"><h4 class="float-left mx-3 ">Institution: Florida Orange Highschool <b-icon icon="arrow-right-circle"></b-icon></h4></b-card-text>

    <b-card  class="mb-2 mx-5  mt-5 shadow" >
      <b-card-title class="text-black">
            <!-- <b-breadcrumb :items="breadcrumbItems" class="breadcrumb mx-auto" style="width:fit-content;"></b-breadcrumb> -->
            User
      </b-card-title>

        <b-collapse visible id="collapse-2">
          <b-card-text><div class="panel-body">
        <form class="table container form-horizontal ng-pristine ng-valid ng-valid-required" id="userInfoForm" name="userInfoForm" role="form" style="">
          <div class="form-group row inline row">
            <label class="control-label col-sm-2" for="subscriptionName">Subscription</label>
            <div class="col-sm-5" id="subscriptionName">
              <!-- ngRepeat: (loginSubID, loginSubName) in curUser.subscriptionMap --><span ng-repeat="(loginSubID, loginSubName) in curUser.subscriptionMap" class="ng-scope" style="">
                <button type="button" class="btn btn-default ng-binding float-left" ng-click="pageCtrl.openUrl('./subscription.html?subID='+loginSubID)">NextGen Authoring</button>
              </span><!-- end ngRepeat: (loginSubID, loginSubName) in curUser.subscriptionMap -->
            </div>
          </div>
          <div class="form-group row row">
            <label class="control-label col-sm-2" for="institutionName">Institution</label>
            <div class="col-sm-5" id="institutionName">
              <!-- ngRepeat: (loginInstID, loginInstName) in curUser.institutionMap --><span ng-repeat="(loginInstID, loginInstName) in curUser.institutionMap" class="ng-scope" style="">
                <button type="button" class="btn btn-default ng-binding float-left" ng-click="pageCtrl.openUrl('./institution.html?instID='+loginInstID)">NextGen Authoring</button>
              </span><!-- end ngRepeat: (loginInstID, loginInstName) in curUser.institutionMap -->
            </div>
          </div>
          <div class="form-group row">
            <label class="control-label col-sm-2" for="firstname">Full Name*</label>
            <div class="col-sm-3">
              <input type="text" class="form-control ng-pristine ng-untouched ng-not-empty ng-valid ng-valid-required" id="firstname" ng-model="curUser.firstname" ng-change="dirtyUserInfoUpdate()" placeholder="First" required="" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAfBJREFUWAntVk1OwkAUZkoDKza4Utm61iP0AqyIDXahN2BjwiHYGU+gizap4QDuegWN7lyCbMSlCQjU7yO0TOlAi6GwgJc0fT/fzPfmzet0crmD7HsFBAvQbrcrw+Gw5fu+AfOYvgylJ4TwCoVCs1ardYTruqfj8fgV5OUMSVVT93VdP9dAzpVvm5wJHZFbg2LQ2pEYOlZ/oiDvwNcsFoseY4PBwMCrhaeCJyKWZU37KOJcYdi27QdhcuuBIb073BvTNL8ln4NeeR6NRi/wxZKQcGurQs5oNhqLshzVTMBewW/LMU3TTNlO0ieTiStjYhUIyi6DAp0xbEdgTt+LE0aCKQw24U4llsCs4ZRJrYopB6RwqnpA1YQ5NGFZ1YQ41Z5S8IQQdP5laEBRJcD4Vj5DEsW2gE6s6g3d/YP/g+BDnT7GNi2qCjTwGd6riBzHaaCEd3Js01vwCPIbmWBRx1nwAN/1ov+/drgFWIlfKpVukyYihtgkXNp4mABK+1GtVr+SBhJDbBIubVw+Cd/TDgKO2DPiN3YUo6y/nDCNEIsqTKH1en2tcwA9FKEItyDi3aIh8Gl1sRrVnSDzNFDJT1bAy5xpOYGn5fP5JuL95ZjMIn1ya7j5dPGfv0A5eAnpZUY3n5jXcoec5J67D9q+VuAPM47D3XaSeL4AAAAASUVORK5CYII=&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%;">
            </div>
            <div class="col-sm-3">
              <input type="text" class="form-control ng-pristine ng-untouched ng-valid ng-not-empty" id="lastname" ng-model="curUser.lastname" ng-change="dirtyUserInfoUpdate()" placeholder="Last" style="">
            </div>
            <div class="col-sm-3">
              <input type="text" class="form-control ng-pristine ng-untouched ng-valid ng-empty" id="middleName" ng-model="curUser.middlename" ng-change="dirtyUserInfoUpdate()" placeholder="Middle (optional)">
            </div>
          </div>
          <div class="form-group row" ng-hide="isNewUser" style="">
            <label class="control-label col-sm-2" for="userID">Login ID</label>
            <div class="col-sm-3" id="userID">
              <pre class="ng-binding float-left">6159417</pre>
            </div>
            <label class="control-label col-sm-2" for="tenantID">Umbrella Account</label>
            <div class="col-sm-3" id="tenantID">
              <button type="button" class="float-left btn btn-default ng-binding float-left" ng-click="pageCtrl.openUrl('./tenant.html?tenID='+curUser.tenantID)">128440</button>
            </div>
          </div>
          <div class="form-group row">
            <label class="control-label col-sm-2" for="userType">User Role*</label>
            <div class="col-sm-3">
              <select class="form-control ng-pristine ng-untouched ng-not-empty ng-valid ng-valid-required" id="userType" ng-model="curUser.roleID" ng-options="key for (key, value) in loginRoleAllOptions" ng-change="dirtyUserInfoUpdate()" required="" style=""><option label="Administrator" value="number:5">Administrator</option><option label="Teacher" value="number:3">Teacher</option><option label="Home User" value="number:1">Home User</option><option label="Parent" value="number:4">Parent</option><option label="Student" value="number:2">Student</option><option label="Web User" value="number:10">Web User</option><option label="Employee Admin" value="number:101">Employee Admin</option><option label="Sales" value="number:105">Sales</option><option label="Professional Development" value="number:102">Professional Development</option><option label="Marketing" value="number:103">Marketing</option><option label="Customer Support" value="number:104">Customer Support</option><option label="Developer" value="number:100" selected="selected">Developer</option><option label="PD Trainer" value="number:106">PD Trainer</option></select>
            </div>
            <label class="control-label col-sm-2 ng-hide" ng-show="curUser.roleID == 2" for="studentID">Student ID</label>
            <label class="control-label col-sm-2 ng-hide" ng-show="curUser.roleID != 2 &amp;&amp; curUser.sisUserID" for="studentID">SIS ID</label>
            <div class="col-sm-3 ng-hide" ng-show="curUser.roleID == 2 || curUser.sisUserID" for="studentID">
              <input type="text" class="form-control ng-pristine ng-untouched ng-valid ng-empty" id="studentID" ng-model="curUser.sisUserID" ng-change="dirtyUserInfoUpdate()" placeholder="Student ID">
            </div>
          </div>
          <div class="form-group row">
            <label class="control-label col-sm-2" for="username">Username*</label>
            <div class="col-sm-3">
              <input type="text" class="form-control ng-pristine ng-untouched ng-not-empty ng-valid ng-valid-required" id="username" ng-model="curUser.username" ng-change="dirtyUserInfoUpdate()" placeholder="Username" required="" style="">
            </div>
            <label class="control-label col-sm-2" for="password">Password*</label>
            <div class="col-sm-3">
              <input type="text" class="form-control ng-pristine ng-untouched ng-valid ng-empty" id="password" ng-model="curUser.password" ng-change="dirtyUserInfoUpdate()" placeholder="Password">
            </div>
          </div>
          <div class="form-group row">
            <label class="control-label col-sm-2" for="email">Email*</label>
            <div class="col-sm-3">
              <input type="text" class="form-control ng-pristine ng-untouched ng-not-empty ng-valid ng-valid-required" id="email" ng-model="curUser.email" ng-change="dirtyUserInfoUpdate()" placeholder="email" ng-required="curUser.roleID != 2" required="required" style="">
            </div>
            <label><input type="checkbox" ng-model="curUser.isValidEmail" ng-change="dirtyUserInfoUpdate()" disabled="" class="ng-pristine ng-untouched ng-valid ng-empty"> Validated</label>
          </div>
          <div class="form-group row" ng-hide="isNewUser">
            <label class="control-label col-sm-2" for="createdOn">Created On</label>
            <div class="col-sm-3">
              <input type="datetime" class="form-control ng-pristine ng-untouched ng-valid ng-not-empty" id="createdOn" ng-model="curUser.createdOnStr" ng-change="dirtyUserInfoUpdate()" placeholder="datetime" disabled="" style="">
            </div>
            <label class="control-label col-sm-2" for="lastLoginOn">Last Login</label>
            <div class="col-sm-3">
              <input type="datetime" class="form-control ng-pristine ng-untouched ng-valid ng-not-empty" id="lastLoginOn" ng-model="curUser.lastLoginOnStr" ng-change="dirtyUserInfoUpdate()" placeholder="Never" disabled="" style="">
            </div>
          </div>
          <div class="form-group row" ng-hide="isNewUser">
            <label class="control-label col-sm-2" for="createdOn">Modified On</label>
            <div class="col-sm-3">
              <input type="datetime" class="form-control ng-pristine ng-untouched ng-valid ng-not-empty" id="modifiedOn" ng-model="curUser.modifiedOnStr" ng-change="dirtyUserInfoUpdate()" placeholder="datetime" disabled="" style="">
            </div>
            <label class="control-label col-sm-2" for="lastLoginOn">Modified By</label>
            <div class="col-sm-3">
              <button type="button" class="btn btn-default ng-binding" ng-click="pageCtrl.openUrl('./loginProfile.html?loginID='+curUser.modifiedByID)" ng-show="curUser.modifiedByID" style="">Login #6112782</button>
              <span ng-hide="curUser.modifiedByID" class="ng-hide" style="">System</span>
            </div>
          </div>
          <div class="form-group row ">
            <div class="col-sm-offset-2 col-sm-2">
              <div class="checkbox">
                <label><input type="checkbox" ng-model="curUser.isSubscribedToEmails" ng-change="dirtyUserInfoUpdate()" class="ng-pristine ng-untouched ng-valid ng-empty"> Subscribed to Email</label>
              </div>
            </div>
            <div class="col-sm-2">
              <div class="checkbox">
                <label><input type="checkbox" ng-model="curUser.isDeleted" ng-change="dirtyUserInfoUpdate()" class="ng-pristine ng-untouched ng-valid ng-empty"> Deleted</label>
              </div>
            </div>
            <label class="control-label col-sm-1" ng-hide="isNewUser" for="sso" style="">Enabled</label>
            <div ng-hide="isNewUser" class="" style="
    display: contents;
">
              <div class="col-sm-1">
                <div class="checkbox">
                  <label><input type="checkbox" ng-model="curUser.hasLTIUserID" disabled="" class="ng-pristine ng-untouched ng-valid ng-empty"> LTI</label>
                </div>
              </div>
              <div class="col-sm-1">
                <div class="checkbox">
                  <label><input type="checkbox" ng-model="curUser.hasSAMLUserID" disabled="" class="ng-pristine ng-untouched ng-valid ng-empty"> SAML</label>
                </div>
              </div>
              <div class="col-sm-1">
                <div class="checkbox">
                  <label><input type="checkbox" ng-model="curUser.hasCleverID" disabled="" class="ng-pristine ng-untouched ng-valid ng-empty"> Clever</label>
                </div>
              </div>
              <div class="col-sm-1">
                <div class="checkbox">
                  <label><input type="checkbox" ng-model="curUser.isRosterEnabled" disabled="" class="ng-pristine ng-untouched ng-valid ng-empty"> Rostering</label>
                </div>
              </div>
            </div>
          </div>
          <div class="form-group row">        
            <div class="col-sm-offset-2 col-sm-10">
              <div class="btn-group">
                <button type="submit" class="btn btn-default ng-hide" ng-show="isNewUser" ng-disabled="!permissions.dataEntry" ng-click="createUpdateUser(userInfoForm.$valid)" style="">Add User</button>
                <button type="submit" id="user-info-update-btn" class="btn btn-default" ng-hide="isNewUser" ng-disabled="!permissions.dataEntry || curUser.changeLocked" ng-click="createUpdateUser(userInfoForm.$valid)" style="">Update User</button>
                <button type="submit" id="user-unlink-sso-btn" class="btn btn-default" ng-hide="isNewUser" ng-disabled="!permissions.dataEntry" ng-click="unlinkUserSSO(userInfoForm.$valid)">Unlink SSO/Roster</button>
              </div>
              <div class="btn-group">
                <button type="submit" id="user-login-as-reflex-btn" class="btn btn-default" ng-show="!isNewUser &amp;&amp; ( curUser.reflexLicense || curUser.roleID > 99 )" ng-click="pageCtrl.loginAsUser(curUser, 1)" style="">Log into Reflex</button>
                <button type="submit" id="user-login-as-frax-btn" class="btn btn-default" ng-show="!isNewUser &amp;&amp; ( curUser.fractionsLicense || curUser.roleID > 99 )" ng-click="pageCtrl.loginAsUser(curUser, 2)">Log into Fractions</button>
              </div>
            </div>
          </div>
          
        </form>
      </div>
          </b-card-text>

          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-collapse>
    </b-card>
        </b-card>
      </b-card>
    </b-card>


      <b-card tag="article" class="mb-2 m-5  shadow">
        <b-card-title
          >Users Subscriptions
          <b-button v-b-toggle.collapse-2 variant="white">
            <b-icon icon="caret-up"></b-icon
          ></b-button>
        </b-card-title>
        <b-collapse id="collapse-2">
          <b-card-text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            <b-table striped hover :items="items"></b-table>
          </b-card-text>

          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-collapse>
      </b-card>

  </div>
</template>
<script>
export default {
    name: "About",
  data() {
    return {
      items: [
        { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
        { age: 21, first_name: "Larsen", last_name: "Shaw" },
        { age: 89, first_name: "Geneva", last_name: "Wilson" },
        { age: 38, first_name: "Jami", last_name: "Carney", },
      ],
      breadcrumbItems: [
        "Umbrella",
        "Tenant",
        "Subscription",
        "User"
      ],
    }
  }

}
</script>
<style lang="scss" scoped>
@import '../app.scss';
.about {
  // margin-left: $navBarWidth;
}
.sidenav { //square
  height: 100%; /* Full-height: remove this if you want "auto" height */
  // width: 160px; /* Set the width of the sidebar */

  // width: 14%;
  width: $navBarWidth;
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  overflow-x: hidden; /* Disable horizontal scroll */
  // background-color: $el-light-dark;
  // padding-top: 20px;
  border-radius: 0;
}
// .search-option {
//   position: fixed;
//   top: 330px;
//   margin-left: 400px !important;
// // }
// .create-option {

//   position: fixed;
//   top: 440px;
// }
.breadcrumb {
  background-color: white;//$orange;
}
</style>