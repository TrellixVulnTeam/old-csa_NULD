<template>
     <div data-v-fae5bece="" class="container">
                  <form
                    data-v-fae5bece=""
                    id="tenantInfoForm"
                    name="tenantInfoForm"
                    role="form"
                    class="form-horizontal ng-pristine ng-invalid ng-invalid-required"
                  >
                    <div data-v-fae5bece="" class="form-group row" style="">
                      <label
                        data-v-fae5bece=""
                        for="tenantName"
                        class="control-label col-sm-2"
                        >Umbrella Account Name</label
                      >
                      <div data-v-fae5bece="" class="col-sm-5">
                        <input
                          data-v-fae5bece=""
                          type="text"
                          id="tenantName"
                          ng-model="curTenant.mainInstitutionName"
                          ng-change="dirtyUpdateTenantInfo()"
                          placeholder="Tenant Name"
                          class="form-control ng-pristine ng-untouched ng-valid ng-not-empty"
                        />
                      </div>
                    </div>
                    <div
                      data-v-fae5bece=""
                      ng-show="!isNewTenant"
                      class="form-group row"
                    >
                      <label data-v-fae5bece="" class="control-label col-sm-2"
                        >Umbrella Account ID</label
                      >
                      <div data-v-fae5bece="" class="col-sm-1">
                        <pre data-v-fae5bece="" class="ng-binding">124406</pre>
                      </div>
                    </div>
                    <div data-v-fae5bece="" class="form-group row">
                      <label
                        data-v-fae5bece=""
                        for="parentId"
                        class="control-label col-sm-2"
                        >Main Institution</label
                      >
                      <div data-v-fae5bece="" class="col-sm-5">
                        <select
                          data-v-fae5bece=""
                          id="mainInstitutionSelect"
                          ng-model="institutionSelectedMain"
                          ng-change="setMainInstitution()"
                          ng-options="v as v.institutionName for v in hierarchyInstitutionsAll"
                          class="form-control ng-pristine ng-untouched ng-valid ng-not-empty"
                        >
                          <option
                            data-v-fae5bece=""
                            label="ExploreLearning Employees"
                            value="object:96"
                            selected="selected"
                          >
                            ExploreLearning Employees
                          </option>
                        </select>
                      </div>
                      <div data-v-fae5bece="" class="col-sm-3">
                        <div data-v-fae5bece="" class="input-group">
                          <span data-v-fae5bece="" class="input-group-addon"
                            >Institution ID</span
                          ><input
                            data-v-fae5bece=""
                            type="text"
                            id="parentId"
                            ng-model="curTenant.mainInstitutionID"
                            ng-change="dirtyInstitutionInfoUpdate()"
                            placeholder="0000000"
                            style="width: auto"
                            class="form-control ng-pristine ng-untouched ng-valid ng-not-empty"
                          /><span data-v-fae5bece="" class="input-group-btn"
                            ><button
                              data-v-fae5bece=""
                              type="button"
                              ng-disable="!curTenant.mainInstitutionID"
                              ng-click="pageCtrl.openUrl('./institution.html?instID='+curTenant.mainInstitutionID)"
                              class="btn btn-default"
                            >
                              View</button
                            ><button
                              data-v-fae5bece=""
                              type="button"
                              ng-click="findMainInstitutionID(curTenant.mainInstitutionID)"
                              class="btn btn-default"
                            >
                              Find
                            </button></span
                          >
                        </div>
                      </div>
                    </div>
                    <div data-v-fae5bece="" class="form-group row">
                      <label
                        data-v-fae5bece=""
                        for="salesforceAccountID"
                        class="control-label col-sm-2"
                        >Salesforce Account ID</label
                      >
                      <div data-v-fae5bece="" class="col-sm-5">
                        <input
                          data-v-fae5bece=""
                          type="text"
                          id="salesforceAccountID"
                          ng-change="dirtyUpdateTenantInfo()"
                          placeholder="Salesforce Account ID"
                          required="required"
                          class="form-control ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required"
                        />
                      </div>
                      <div data-v-fae5bece="" class="col-sm-2">
                        <button
                          data-v-fae5bece=""
                          type="button"
                          ng-click="accessSalesforceSite(curTenant.mainSalesforceAccountID)"
                          ng-disabled="!curTenant.mainSalesforceAccountID"
                          disabled="disabled"
                          class="btn btn-default border"
                        >
                          View Account
                        </button>
                      </div>
                    </div>
                    <div data-v-fae5bece="" class="form-group row">
                      
                    </div>
                  </form>
                </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>