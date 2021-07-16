export default {
    licensingTypeOptions: {
    1: "Site",
    2: "Teacher",
    3: "Trial",
    4: "Complimentary",
    5: "Pilot",
    6: "Employee Free Teacher",
    7: "Employee Seed Program",
    8: "Grant",
    9: "Home",
    10: "Teacher Plus",
    11: "Department",
},

loginRoleOptions: {
    "Administrator": 5,
    "Teacher": 3,
    "Home User": 1,
    "Parent": 4,
    "Student": 2,
},

loginRoleAllOptions: {
    5: "Administrator",
    3: "Teacher",
    1: "Home User",
    4: "Parent",
    2: "Student",
    10: "Web User",
    101: "Employee Admin",
    105: "Sales",
    102: "Professional Development",
    103: "Marketing",
    104: "Customer Support",
    100: "Developer",
    106: "PD Trainer",
},

loginRoleCreateLimit: {
    "Administrator": 5,
    "Teacher": 3,
    "Home User": 1
},

institutionTypeOptions: {
    1:"Super District",
    2:"District",
    3:"Sub District",
    4:"Public Schools",
    5:"Private Schools",
    6:"State Departments",
    7:"County Centers",
    8:"Regional Centers",
    9:"Home",
},

products: {
    1: "Reflex",
    2: "Fractions",
    3: "Gizmos",
    4: "Science4us",
    100: "EL-Dev",
    101: "ExploreLearning",
},


displayRegCodeTypeID : function(regTypeID){
    if(regTypeID == 1){ return "Trial Registration"; }
    else if(regTypeID == 2){ return "Grant Registration"; }
    else if(regTypeID == 3){ return "Online Purchase Registration"; }
    else if(regTypeID == 4){ return "Order Fulfillment"; }
    else if(regTypeID == 5){ return "Teacher Invite"; }
    else if(regTypeID == 6){ return "Parent Invite"; }
    else if(regTypeID == 7){ return "Password Reset"; }
    else if(regTypeID == 8){ return "Admin Invite"; }
    else if(regTypeID == 9){ return "Admin Registration"; }
    else if(regTypeID == 10){ return "Apply for Grant"; }
    else if(regTypeID == 11){ return "Email Validation"; }
    else { return "ERROR!"; }
},
timeSince(value, secondDateToSubtract = null) {
    const date = new Date(value);
    const seconds = Math.floor(((secondDateToSubtract ? new Date(secondDateToSubtract) : new Date()) - date) / 1000);

    let interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
      return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + " months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  },
  
ssoLtiFieldOptions: [ "user_id", "lis_person_sourcedid", "Custom" ],

promoCodeTypeOptions: {
    "Trial": 1,
    "Purchase": 2
},

subSourceOptions: {
    1: "HSBC",
    2: "Time4Learning",
    3: "SSO-Only",
},

gracePeriodOptions: [0, 15, 30],



}