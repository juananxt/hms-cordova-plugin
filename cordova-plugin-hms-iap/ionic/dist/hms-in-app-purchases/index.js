/*
    Copyright 2020. Huawei Technologies Co., Ltd. All rights reserved.

    Licensed under the Apache License, Version 2.0 (the "License")
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        https://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var HMSInAppPurchasesOriginal = /** @class */ (function (_super) {
    __extends(HMSInAppPurchasesOriginal, _super);
    function HMSInAppPurchasesOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSInAppPurchasesOriginal.prototype.isEnvReady = function () { return cordova(this, "isEnvReady", { "otherPromise": true }, arguments); };
    HMSInAppPurchasesOriginal.prototype.isSandboxActivated = function () { return cordova(this, "isSandboxActivated", { "otherPromise": true }, arguments); };
    HMSInAppPurchasesOriginal.prototype.obtainOwnedPurchases = function (priceType) { return cordova(this, "obtainOwnedPurchases", { "otherPromise": true }, arguments); };
    HMSInAppPurchasesOriginal.prototype.obtainProductInfo = function (product) { return cordova(this, "obtainProductInfo", { "otherPromise": true }, arguments); };
    HMSInAppPurchasesOriginal.prototype.createPurchaseIntent = function (purchaseIntent) { return cordova(this, "createPurchaseIntent", { "otherPromise": true }, arguments); };
    HMSInAppPurchasesOriginal.prototype.consumeOwnedPurchase = function (ownedPurchase) { return cordova(this, "consumeOwnedPurchase", { "otherPromise": true }, arguments); };
    HMSInAppPurchasesOriginal.prototype.obtainOwnedPurchaseRecord = function (ownedPurchaseRecord) { return cordova(this, "obtainOwnedPurchaseRecord", { "otherPromise": true }, arguments); };
    HMSInAppPurchasesOriginal.prototype.startIapActivity = function (productId) {
        if (productId === void 0) { productId = ""; }
        return cordova(this, "startIapActivity", { "otherPromise": true }, arguments);
    };
    HMSInAppPurchasesOriginal.pluginName = "HMSInAppPurchases";
    HMSInAppPurchasesOriginal.plugin = "cordova-plugin-hms-iap";
    HMSInAppPurchasesOriginal.pluginRef = "HMSInAppPurchases";
    HMSInAppPurchasesOriginal.platforms = ["Android"];
    return HMSInAppPurchasesOriginal;
}(IonicNativePlugin));
var HMSInAppPurchases = new HMSInAppPurchasesOriginal();
export { HMSInAppPurchases };
;
;
;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2htcy1pYXAvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQWlCQSxPQUFPLDhCQUF1QyxNQUFNLG9CQUFvQixDQUFDOztJQXdCbEMscUNBQWlCOzs7O0lBT3RELHNDQUFVO0lBVVYsOENBQWtCO0lBVWxCLGdEQUFvQixhQUFDLFNBQTRCO0lBVWpELDZDQUFpQixhQUFDLE9BQXVCO0lBVXpDLGdEQUFvQixhQUFDLGNBQWlDO0lBVXRELGdEQUFvQixhQUFDLGFBQXNDO0lBVTNELHFEQUF5QixhQUFDLG1CQUFzQztJQVVoRSw0Q0FBZ0IsYUFBQyxTQUFzQjtRQUF0QiwwQkFBQSxFQUFBLGNBQXNCOzs7Ozs7OzRCQXRIekM7RUF5Q3VDLGlCQUFpQjtTQUEzQyxpQkFBaUI7QUFpSDdCLENBQUM7QUFlRCxDQUFDO0FBMEJELENBQUM7QUFVRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuQ29weXJpZ2h0IDIwMjAuIEh1YXdlaSBUZWNobm9sb2dpZXMgQ28uLCBMdGQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcblxyXG4gICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAgIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG5cclxuICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcbiAgIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKi9cclxuXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCAgSW9uaWNOYXRpdmVQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIEhNU0luQXBwUHVyY2hhc2VzXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBIdWF3ZWkncyBJbi1BcHAgUHVyY2hhc2VzIChJQVApIHNlcnZpY2UgaW50ZWdyYXRlcyBtdWx0aXBsZSBwYXltZW50IG1ldGhvZHMgZm9yIGdsb2JhbCBwYXltZW50IGFuZCBhbGxvd3MgeW91IHRvIGVhc2lseSBvZmZlciBpbi1hcHAgcHVyY2hhc2VzLlxyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBITVNJbkFwcFB1cmNoYXNlcyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvaG1zLWluLWFwcC1wdXJjaGFzZXMnO1xyXG4gKlxyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGhNU0luQXBwUHVyY2hhc2VzOiBITVNJbkFwcFB1cmNoYXNlcykgeyB9XHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnSE1TSW5BcHBQdXJjaGFzZXMnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWhtcy1pYXAnLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcclxuICBwbHVnaW5SZWY6ICdITVNJbkFwcFB1cmNoYXNlcycsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cclxuICAvL3JlcG86ICcnLCAvLyB0aGUgZ2l0aHViIHJlcG9zaXRvcnkgVVJMIGZvciB0aGUgcGx1Z2luXHJcbiAgLy9pbnN0YWxsOiAnJywgLy8gT1BUSU9OQUwgaW5zdGFsbCBjb21tYW5kLCBpbiBjYXNlIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXHJcbiAgLy9pbnN0YWxsVmFyaWFibGVzOiBbXSwgLy8gT1BUSU9OQUwgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBITVNJbkFwcFB1cmNoYXNlcyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIGN1cnJlbnRseSBzaWduZWQtaW4gSFVBV0VJIElEIGlzIGxvY2F0ZWQgaW4gYSBjb3VudHJ5IG9yIHJlZ2lvbiB3aGVyZSBIVUFXRUkgSUFQIGlzIGF2YWlsYWJsZS5cclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPElzRW52UmVhZHlSZXN1bHQ+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgaXNFbnZSZWFkeSgpOiBQcm9taXNlPElzRW52UmVhZHlSZXN1bHQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyB3aGV0aGVyIHRoZSBzaWduLWluIEhVQVdFSSBJRCBhbmQgYXBwIEFQSyB2ZXJzaW9uIG1lZXRzIHRoZSByZXF1aXJlbWVudHMgb2YgdGhlIHNhbmRib3ggdGVzdGluZy5cclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPElzU2FuZGJveEFjdGl2YXRlZFJlc3VsdD59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBpc1NhbmRib3hBY3RpdmF0ZWQoKTogUHJvbWlzZTxJc1NhbmRib3hBY3RpdmF0ZWRSZXN1bHQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFF1ZXJpZXMgaW5mb3JtYXRpb24gYWJvdXQgYWxsIHB1cmNoYXNlZCBpbi1hcHAgcHJvZHVjdHMsIGluY2x1ZGluZyBjb25zdW1hYmxlcywgbm9uLWNvbnN1bWFibGVzLCBhbmQgYXV0by1yZW5ld2FibGUgc3Vic2NyaXB0aW9ucy5cclxuICAgKiBAcGFyYW0gcHJpY2VUeXBlXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxPd25lZFB1cmNoYXNlc1Jlc3VsdD59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBvYnRhaW5Pd25lZFB1cmNoYXNlcyhwcmljZVR5cGU6IE93bmVkUHVyY2hhc2VzUmVxKTogUHJvbWlzZTxPd25lZFB1cmNoYXNlc1Jlc3VsdD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiBPYnRhaW5zIGluLWFwcCBwcm9kdWN0IGRldGFpbHMgY29uZmlndXJlZCBpbiBBcHBHYWxsZXJ5IENvbm5lY3QuXHJcbiAgICogQHBhcmFtIHByb2R1Y3RcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPFByb2R1Y3RJbmZvUmVzdWx0Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIG9idGFpblByb2R1Y3RJbmZvKHByb2R1Y3Q6IFByb2R1Y3RJbmZvUmVxKTogUHJvbWlzZTxQcm9kdWN0SW5mb1Jlc3VsdD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBvcmRlcnMgZm9yIFBNUyBwcm9kdWN0cywgaW5jbHVkaW5nIGNvbnN1bWFibGVzLCBub24tY29uc3VtYWJsZXMsIGFuZCBzdWJzY3JpcHRpb25zLlxyXG4gICAqIEBwYXJhbSBwdXJjaGFzZUludGVudFxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8UHVyY2hhc2VJbnRlbnRSZXN1bHQ+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgY3JlYXRlUHVyY2hhc2VJbnRlbnQocHVyY2hhc2VJbnRlbnQ6IFB1cmNoYXNlSW50ZW50UmVxKTogUHJvbWlzZTxQdXJjaGFzZUludGVudFJlc3VsdD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ29uc3VtZXMgYSBjb25zdW1hYmxlIGFmdGVyIHRoZSBjb25zdW1hYmxlIGlzIGRlbGl2ZXJlZCB0byBhIHVzZXIgd2hvIGhhcyBjb21wbGV0ZWQgcGF5bWVudC5cclxuICAgKiBAcGFyYW0gb3duZWRQdXJjaGFzZVxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8Q29uc3VtZU93bmVkUHVyY2hhc2VSZXN1bHQ+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgY29uc3VtZU93bmVkUHVyY2hhc2Uob3duZWRQdXJjaGFzZTogQ29uc3VtZU93bmVkUHVyY2hhc2VSZXEpOiBQcm9taXNlPENvbnN1bWVPd25lZFB1cmNoYXNlUmVzdWx0PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBPYnRhaW5zIHRoZSBoaXN0b3JpY2FsIGNvbnN1bXB0aW9uIGluZm9ybWF0aW9uIGFib3V0IGEgY29uc3VtYWJsZSBvciBhbGwgc3Vic2NyaXB0aW9uIHJlY2VpcHRzIG9mIGEgc3Vic2NyaXB0aW9uLlxyXG4gICAqIEBwYXJhbSBvd25lZFB1cmNoYXNlUmVjb3JkXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxPd25lZFB1cmNoYXNlc1Jlc3VsdD59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBvYnRhaW5Pd25lZFB1cmNoYXNlUmVjb3JkKG93bmVkUHVyY2hhc2VSZWNvcmQ6IE93bmVkUHVyY2hhc2VzUmVxKTogUHJvbWlzZTxPd25lZFB1cmNoYXNlc1Jlc3VsdD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQnJpbmdzIHVwIGluLWFwcCBwYXltZW50IHBhZ2VzLCBpbmNsdWRpbmcgU3Vic2NyaXB0aW9uIEVkaXRpbmcgUGFnZSBhbmQgU3Vic2NyaXB0aW9uIE1hbmFnZW1lbnQgUGFnZVxyXG4gICAqIEBwYXJhbSB1cmlcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQ+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgc3RhcnRJYXBBY3Rpdml0eShwcm9kdWN0SWQ6IHN0cmluZyA9IFwiXCIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG59XHJcblxyXG4vLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gSU5URVJGQUNFU1xyXG4vLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdHVzIHtcclxuICBlcnJvclN0cmluZzogc3RyaW5nO1xyXG4gIHN0YXR1c0NvZGU6IG51bWJlcjtcclxuICBzdGF0dXNNZXNzYWdlOiBzdHJpbmc7XHJcbiAgaGFzUmVzb2x1dGlvbjogYm9vbGVhbjtcclxuICBpc0NhbmNlbGVkOiBib29sZWFuO1xyXG4gIGlzSW50ZXJydXB0ZWQ6IGJvb2xlYW47XHJcbiAgaXNTdWNjZXNzOiBib29sZWFuO1xyXG4gIGRlc2NyaWJlQ29udGVudHM6IG51bWJlcjtcclxufVxyXG4gZXhwb3J0IGludGVyZmFjZSBJc0VudlJlYWR5UmVzdWx0IHtcclxuICByZXR1cm5Db2RlOiBudW1iZXI7XHJcbiAgc3RhdHVzOiBTdGF0dXM7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBJc1NhbmRib3hBY3RpdmF0ZWRSZXN1bHQge1xyXG4gIHJldHVybkNvZGU6IG51bWJlcjtcclxuICBlcnJNc2c6IHN0cmluZztcclxuICBpc1NhbmRib3hVc2VyOiBib29sZWFuO1xyXG4gIGlzU2FuZGJveEFwazogYm9vbGVhbjtcclxuICB2ZXJzaW9uSW5BcGs6IHN0cmluZztcclxuICB2ZXJzaW9uRnJNYXJrZXQ6IHN0cmluZztcclxuICBzdGF0dXM6IFN0YXR1cztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIE93bmVkUHVyY2hhc2VzUmVxIHtcclxuICBwcmljZVR5cGU6IG51bWJlcjtcclxuICBjb250aW51YXRpb25Ub2tlbj86IHN0cmluZztcclxufTtcclxuZXhwb3J0IGludGVyZmFjZSBPd25lZFB1cmNoYXNlc1Jlc3VsdCB7XHJcbiAgY29udGludWF0aW9uVG9rZW46IHN0cmluZztcclxuICBlcnJNc2c6IHN0cmluZztcclxuICBpdGVtTGlzdDogc3RyaW5nW107XHJcbiAgaW5BcHBQdXJjaGFzZURhdGFMaXN0OiBzdHJpbmdbXTtcclxuICBpbkFwcFNpZ25hdHVyZTogc3RyaW5nW107XHJcbiAgcGxhY2VkSW5hcHBQdXJjaGFzZURhdGFMaXN0OiBzdHJpbmdbXTtcclxuICBwbGFjZWRJbmFwcFNpZ25hdHVyZUxpc3Q6IHN0cmluZ1tdO1xyXG4gIHJldHVybkNvZGU6IG51bWJlcjtcclxuICBzdGF0dXM6IFN0YXR1cztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFByb2R1Y3RJbmZvUmVxIHtcclxuICBwcmljZVR5cGU6IG51bWJlcjtcclxuICBwcm9kdWN0TGlzdDogc3RyaW5nW107XHJcbn07XHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdEluZm9SZXN1bHQge1xyXG4gIHJldHVybkNvZGU6IG51bWJlcjtcclxuICBlcnJNc2c6IHN0cmluZztcclxuICBwcm9kdWN0SW5mb0xpc3Q6IFByb2R1Y3RJbmZvTGlzdFtdO1xyXG4gIHN0YXR1czogU3RhdHVzO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdEluZm9MaXN0IHtcclxuICBwcm9kdWN0SWQ6IHN0cmluZztcclxuICBwcmljZVR5cGU6IG51bWJlcjtcclxuICBwcmljZTogc3RyaW5nO1xyXG4gIG1pY3Jvc1ByaWNlOiBudW1iZXI7XHJcbiAgb3JpZ2luYWxMb2NhbFByaWNlOiBzdHJpbmc7XHJcbiAgb3JpZ2luYWxNaWNyb1ByaWNlOiBudW1iZXI7XHJcbiAgY3VycmVuY3k6IHN0cmluZztcclxuICBwcm9kdWN0TmFtZTogc3RyaW5nO1xyXG4gIHByb2R1Y3REZXNjOiBzdHJpbmc7XHJcbiAgc3ViU3BlY2lhbFByaWNlTWljcm9zOiBudW1iZXI7XHJcbiAgc3ViU3BlY2lhbFBlcmlvZEN5Y2xlczogbnVtYmVyO1xyXG4gIHN1YlByb2R1Y3RMZXZlbDogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgUHVyY2hhc2VJbnRlbnRSZXEge1xyXG4gIHByaWNlVHlwZTogbnVtYmVyO1xyXG4gIHByb2R1Y3RJZDogc3RyaW5nO1xyXG4gIGRldmVsb3BlclBheWxvYWQ6IHN0cmluZztcclxuICByZXNlcnZlZEluZm9yOiBzdHJpbmc7XHJcbn07XHJcbmV4cG9ydCBpbnRlcmZhY2UgUHVyY2hhc2VJbnRlbnRSZXN1bHQge1xyXG4gIHJldHVybkNvZGU6IG51bWJlcjtcclxuICBlcnJNc2c6IHN0cmluZztcclxuICBpbkFwcFB1cmNoYXNlRGF0YTogc3RyaW5nO1xyXG4gIGluQXBwRGF0YVNpZ25hdHVyZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29uc3VtZU93bmVkUHVyY2hhc2VSZXEge1xyXG4gIGluQXBwUHVyY2hhc2VEYXRhOiBzdHJpbmc7XHJcbiAgZGV2ZWxvcGVyQ2hhbGxlbmdlOiBzdHJpbmc7XHJcbn07XHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29uc3VtZU93bmVkUHVyY2hhc2VSZXN1bHQge1xyXG4gIGNvbnN1bWVQdXJjaGFzZURhdGE6IHN0cmluZztcclxuICBkYXRhU2lnbmF0dXJlOiBzdHJpbmc7XHJcbiAgZXJyTXNnOiBzdHJpbmc7XHJcbiAgcmV0dXJuQ29kZTogbnVtYmVyO1xyXG4gIHN0YXR1czogU3RhdHVzO1xyXG59Il19