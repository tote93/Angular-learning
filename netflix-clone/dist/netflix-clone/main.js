(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/joseluis/Desktop/Angular/netflix-clone/src/main.ts */"zUnb");


/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-redux/store */ "Usal");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function HeaderComponent_ul_21_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ul_21_Template_li_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.logOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Log Out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.user.email);
} }
const _c0 = function (a0) { return { moreOptions: a0 }; };
const _c1 = function (a0) { return { rotateMoreOption: a0 }; };
class HeaderComponent {
    constructor(ngRedux, _api) {
        this.ngRedux = ngRedux;
        this._api = _api;
        this.selected = true;
        this.active = false;
        this.moreOptions = false;
        this.user = null;
        this.photoUrl = 'assets/images/user.png';
        this.user = this.ngRedux.getState().user;
        if (this.user.photoURL)
            this.photoUrl = this.user.photoURL;
        console.log(this.user.photoURL, this.photoUrl);
    }
    displayMenu() {
        this.moreOptions = !this.moreOptions;
    }
    ngOnInit() { }
    setActive() {
        this.active = !this.active;
    }
    logOut() {
        this._api.logout();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_redux_store__WEBPACK_IMPORTED_MODULE_1__["NgRedux"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["header"]], decls: 24, vars: 8, consts: [[1, "header"], ["src", "assets/images/logo.png", "alt", "App Logo", 1, "header__logo"], [1, "header__navigation"], [1, "header__navigation--active"], [1, "header__options", 3, "ngClass"], [1, "material-icons"], ["alt", "User Image", 3, "src", "click"], ["class", "option__userList", 4, "ngIf"], [1, "material-icons", "header__moreOptions", 3, "ngClass", "click"], [1, "option__userList"], [3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "TV Series");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Films");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Most Viewed News");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "My List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " card_giftcard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " notifications ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_img_click_20_listener() { return ctx.setActive(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, HeaderComponent_ul_21_Template, 5, 1, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_span_click_22_listener() { return ctx.displayMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " apps ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.moreOptions));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.photoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.active && ctx.user.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, ctx.moreOptions));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  height: 68px;\n  width: 100%;\n  font-size: 16px;\n  line-height: 17px;\n  position: fixed;\n  \n  background: #080808;\n  color: #fff;\n  z-index: 10000;\n  left: 0;\n  top: 0;\n}\n.header__logo[_ngcontent-%COMP%] {\n  height: 25px;\n  object-fit: contain;\n  flex: 0.05;\n}\n.header__navigation[_ngcontent-%COMP%] {\n  display: flex;\n  list-style: none;\n  justify-content: space-between;\n  width: 100%;\n  text-align: center;\n  flex: 0.5;\n  align-items: center;\n}\n.header__options[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  flex: 0.2;\n}\n.header__options[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-left: 35px;\n  font-size: 30px;\n  font-weight: 700;\n  cursor: pointer;\n}\n.header__options[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  height: 35px;\n  max-height: 35px;\n  border-radius: 5px;\n  object-fit: contain;\n}\n.header__navigation[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  padding: 10px;\n}\n.header__navigation[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover {\n  color: #e5e5e5;\n  cursor: pointer;\n}\n.header__navigation--active[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.header--scroll[_ngcontent-%COMP%] {\n  animation: changeBgColorScroll forwards 0.5s;\n}\n@keyframes changeBgColorScroll {\n  0% {\n    background: transparent;\n  }\n  100% {\n    background: #141414;\n  }\n}\n@keyframes changeBgColor {\n  0% {\n    background: 141414;\n  }\n  100% {\n    background: transparent;\n  }\n}\n.header__moreOptions[_ngcontent-%COMP%] {\n  display: none;\n  transition: cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n.option__userList[_ngcontent-%COMP%] {\n  list-style: none;\n  position: absolute;\n  top: 8vh;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding: 20px;\n  border-radius: 3px;\n  background: white;\n}\n.option__userList[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  font-size: 15px !important;\n  color: #141414;\n  margin-top: 10px !important;\n  transition: 0.5s;\n  padding: 10px;\n}\n.option__userList[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover {\n  transition: 0.5s;\n  background: rgb(164, 218, 83);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLDRDQUE0QztFQUM1QyxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGNBQWM7RUFDZCxPQUFPO0VBQ1AsTUFBTTtBQUNSO0FBQ0E7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFVBQVU7QUFDWjtBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQiw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixTQUFTO0FBQ1g7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7QUFDQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjtBQUNBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsNENBQTRDO0FBQzlDO0FBQ0E7RUFDRTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0FBQ0Y7QUFDQTtFQUNFO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSx1QkFBdUI7RUFDekI7QUFDRjtBQUNBO0VBQ0UsYUFBYTtFQUNiLCtDQUErQztBQUNqRDtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsMkJBQW1CO0VBQW5CLHdCQUFtQjtFQUFuQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLDBCQUEwQjtFQUMxQixjQUFjO0VBQ2QsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQiw2QkFBNkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA2OHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICAvKiBhbmltYXRpb246IGNoYW5nZUJnQ29sb3IgZm9yd2FyZHMgMC41czsgKi9cbiAgYmFja2dyb3VuZDogIzA4MDgwODtcbiAgY29sb3I6ICNmZmY7XG4gIHotaW5kZXg6IDEwMDAwO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG59XG4uaGVhZGVyX19sb2dvIHtcbiAgaGVpZ2h0OiAyNXB4O1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICBmbGV4OiAwLjA1O1xufVxuXG4uaGVhZGVyX19uYXZpZ2F0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmbGV4OiAwLjU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaGVhZGVyX19vcHRpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZmxleDogMC4yO1xufVxuLmhlYWRlcl9fb3B0aW9ucyA+ICoge1xuICBtYXJnaW4tbGVmdDogMzVweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaGVhZGVyX19vcHRpb25zID4gaW1nIHtcbiAgaGVpZ2h0OiAzNXB4O1xuICBtYXgtaGVpZ2h0OiAzNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG4uaGVhZGVyX19uYXZpZ2F0aW9uID4gbGkge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5oZWFkZXJfX25hdmlnYXRpb24gPiBsaTpob3ZlciB7XG4gIGNvbG9yOiAjZTVlNWU1O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaGVhZGVyX19uYXZpZ2F0aW9uLS1hY3RpdmUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5oZWFkZXItLXNjcm9sbCB7XG4gIGFuaW1hdGlvbjogY2hhbmdlQmdDb2xvclNjcm9sbCBmb3J3YXJkcyAwLjVzO1xufVxuQGtleWZyYW1lcyBjaGFuZ2VCZ0NvbG9yU2Nyb2xsIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQ6ICMxNDE0MTQ7XG4gIH1cbn1cbkBrZXlmcmFtZXMgY2hhbmdlQmdDb2xvciB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kOiAxNDE0MTQ7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIH1cbn1cbi5oZWFkZXJfX21vcmVPcHRpb25zIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgdHJhbnNpdGlvbjogY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSk7XG59XG4ub3B0aW9uX191c2VyTGlzdCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4dmg7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4ub3B0aW9uX191c2VyTGlzdCA+IGxpIHtcbiAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMTQxNDE0O1xuICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4ub3B0aW9uX191c2VyTGlzdCA+IGxpOmhvdmVyIHtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgYmFja2dyb3VuZDogcmdiKDE2NCwgMjE4LCA4Myk7XG59XG4iXX0= */", "@media (max-width: 800px) {\n  .body[_ngcontent-%COMP%] {\n    overflow-y: scroll;\n  }\n  .banner__buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .header__moreOptions[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .header[_ngcontent-%COMP%] {\n    justify-content: space-around;\n  }\n  .header__options[_ngcontent-%COMP%], .header__navigation[_ngcontent-%COMP%] {\n    display: none;\n    transition: 0.5s;\n  }\n  .row__back[_ngcontent-%COMP%], .row__next[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .moreOptions[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    height: 100vh;\n    top: 8vh;\n    bottom: -5vh;\n    left: 0;\n    padding: 20px;\n    right: 0;\n    width: 100%;\n    border-radius: 10px;\n    justify-content: space-evenly;\n    align-items: center;\n    opacity: 0.4;\n    animation: displayOptions 0.5s ease-in-out forwards;\n    background: #151515;\n    opacity: 1;\n  }\n  .banner__contentDescription[_ngcontent-%COMP%] {\n    width: 20ch;\n  }\n  .rotateMoreOption[_ngcontent-%COMP%] {\n    animation: rotateElement 0.3s ease-in-out forwards;\n    transition: cubic-bezier(0.075, 0.82, 0.165, 1);\n  }\n  .row[_ngcontent-%COMP%] {\n    margin-top: 5rem;\n  }\n  .header__options[_ngcontent-%COMP%]    > .material-icons[_ngcontent-%COMP%]:nth-child(1) {\n    display: none;\n  }\n  .header__options[_ngcontent-%COMP%]    > .material-icons[_ngcontent-%COMP%] {\n    font-size: 50px;\n  }\n  .movie__bannerImg[_ngcontent-%COMP%] {\n    max-width: 100%;\n    object-fit: cover;\n    height: inherit;\n  }\n  .banner__content[_ngcontent-%COMP%] {\n    top: 20vh;\n    margin-left: 5vw;\n    margin-right: 5vw;\n    max-width: 300px;\n    padding: 10px;\n  }\n  youtube[_ngcontent-%COMP%] {\n    display: none;\n  }\n  \n  h1[_ngcontent-%COMP%] {\n    font-size: 28px !important;\n    line-height: 32px !important;\n  }\n  h2[_ngcontent-%COMP%] {\n    font-size: 26px !important;\n    line-height: 32px !important;\n  }\n  h3[_ngcontent-%COMP%] {\n    font-size: 24px !important;\n  }\n  .membership__button[_ngcontent-%COMP%] {\n    font-size: 22px !important;\n  }\n  .membership__input[_ngcontent-%COMP%] {\n    width: 50vw !important;\n    min-width: 50vw !important;\n  }\n  .mainPage__content[_ngcontent-%COMP%] {\n    padding: 5vw !important;\n  }\n  .rowComponent__image[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    height: 270px;\n    max-height: 370px;\n    max-width: 390px;\n  }\n  .rowComponent[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n    padding: 5vw !important;\n  }\n  .rowComponent__extraContainer[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n\n\n@keyframes rotateElement {\n  0% {\n    transform: rotate3d(0, 0, 0, -45deg);\n  }\n  100% {\n    transform: rotate3d(0, 0, 1, 135deg);\n  }\n}\n\n@keyframes displayOptions {\n  0% {\n    top: 100vh;\n  }\n  100% {\n    top: 8vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXNwb25zaXZlLnN0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0Usc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSw2QkFBNkI7RUFDL0I7RUFDQTs7SUFFRSxhQUFhO0lBQ2IsZ0JBQWdCO0VBQ2xCO0VBQ0E7O0lBRUUsYUFBYTtFQUNmO0VBQ0E7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsUUFBUTtJQUNSLFlBQVk7SUFDWixPQUFPO0lBQ1AsYUFBYTtJQUNiLFFBQVE7SUFDUixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLG1EQUFtRDtJQUNuRCxtQkFBbUI7SUFDbkIsVUFBVTtFQUNaO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLGtEQUFrRDtJQUNsRCwrQ0FBK0M7RUFDakQ7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGVBQWU7RUFDakI7RUFDQTtJQUNFLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixhQUFhO0VBQ2Y7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBLGFBQWE7RUFDYjtJQUNFLDBCQUEwQjtJQUMxQiw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLDBCQUEwQjtJQUMxQiw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUEseUJBQXlCOztBQUN6QjtFQUNFO0lBQ0Usb0NBQW9DO0VBQ3RDO0VBQ0E7SUFDRSxvQ0FBb0M7RUFDdEM7QUFDRjs7QUFDQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxRQUFRO0VBQ1Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzcG9uc2l2ZS5zdHlsZXMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5ib2R5IHtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIH1cbiAgLmJhbm5lcl9fYnV0dG9ucyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAuaGVhZGVyX19tb3JlT3B0aW9ucyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLmhlYWRlciB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIH1cbiAgLmhlYWRlcl9fb3B0aW9ucyxcbiAgLmhlYWRlcl9fbmF2aWdhdGlvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICB9XG4gIC5yb3dfX2JhY2ssXG4gIC5yb3dfX25leHQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLm1vcmVPcHRpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgdG9wOiA4dmg7XG4gICAgYm90dG9tOiAtNXZoO1xuICAgIGxlZnQ6IDA7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgb3BhY2l0eTogMC40O1xuICAgIGFuaW1hdGlvbjogZGlzcGxheU9wdGlvbnMgMC41cyBlYXNlLWluLW91dCBmb3J3YXJkcztcbiAgICBiYWNrZ3JvdW5kOiAjMTUxNTE1O1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgLmJhbm5lcl9fY29udGVudERlc2NyaXB0aW9uIHtcbiAgICB3aWR0aDogMjBjaDtcbiAgfVxuICAucm90YXRlTW9yZU9wdGlvbiB7XG4gICAgYW5pbWF0aW9uOiByb3RhdGVFbGVtZW50IDAuM3MgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XG4gICAgdHJhbnNpdGlvbjogY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSk7XG4gIH1cbiAgLnJvdyB7XG4gICAgbWFyZ2luLXRvcDogNXJlbTtcbiAgfVxuICAuaGVhZGVyX19vcHRpb25zID4gLm1hdGVyaWFsLWljb25zOm50aC1jaGlsZCgxKSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuaGVhZGVyX19vcHRpb25zID4gLm1hdGVyaWFsLWljb25zIHtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gIH1cbiAgLm1vdmllX19iYW5uZXJJbWcge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gIH1cbiAgLmJhbm5lcl9fY29udGVudCB7XG4gICAgdG9wOiAyMHZoO1xuICAgIG1hcmdpbi1sZWZ0OiA1dnc7XG4gICAgbWFyZ2luLXJpZ2h0OiA1dnc7XG4gICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG4gIHlvdXR1YmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLyogTWFpbiBQYWdlKi9cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMjhweCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAzMnB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMjZweCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAzMnB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgaDMge1xuICAgIGZvbnQtc2l6ZTogMjRweCAhaW1wb3J0YW50O1xuICB9XG4gIC5tZW1iZXJzaGlwX19idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMjJweCAhaW1wb3J0YW50O1xuICB9XG4gIC5tZW1iZXJzaGlwX19pbnB1dCB7XG4gICAgd2lkdGg6IDUwdncgIWltcG9ydGFudDtcbiAgICBtaW4td2lkdGg6IDUwdncgIWltcG9ydGFudDtcbiAgfVxuICAubWFpblBhZ2VfX2NvbnRlbnQge1xuICAgIHBhZGRpbmc6IDV2dyAhaW1wb3J0YW50O1xuICB9XG4gIC5yb3dDb21wb25lbnRfX2ltYWdlID4gaW1nIHtcbiAgICBoZWlnaHQ6IDI3MHB4O1xuICAgIG1heC1oZWlnaHQ6IDM3MHB4O1xuICAgIG1heC13aWR0aDogMzkwcHg7XG4gIH1cbiAgLnJvd0NvbXBvbmVudCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNXZ3ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnJvd0NvbXBvbmVudF9fZXh0cmFDb250YWluZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLyogS0VZRlJBTUVTIEFOSU1BVElPTlMgKi9cbkBrZXlmcmFtZXMgcm90YXRlRWxlbWVudCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDAsIC00NWRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAxMzVkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGRpc3BsYXlPcHRpb25zIHtcbiAgMCUge1xuICAgIHRvcDogMTAwdmg7XG4gIH1cbiAgMTAwJSB7XG4gICAgdG9wOiA4dmg7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css', '../responsive.styles.css'],
            }]
    }], function () { return [{ type: _angular_redux_store__WEBPACK_IMPORTED_MODULE_1__["NgRedux"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }]; }, null); })();


/***/ }),

/***/ "60kU":
/*!*************************************************!*\
  !*** ./src/app/services/fetch-films.service.ts ***!
  \*************************************************/
/*! exports provided: FetchFilmsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchFilmsService", function() { return FetchFilmsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class FetchFilmsService {
    constructor(_api) {
        this._api = _api;
        this.apiKey = '5ecc73b79478ec517848a64e6e2a6df1';
    }
    getFilm(url) {
        return this._api.get(`https://api.themoviedb.org/3${url}&api_key=${this.apiKey}`);
    }
}
FetchFilmsService.ɵfac = function FetchFilmsService_Factory(t) { return new (t || FetchFilmsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
FetchFilmsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FetchFilmsService, factory: FetchFilmsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FetchFilmsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-redux/store */ "Usal");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _requests__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../requests */ "sB8F");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../header/header.component */ "2MiI");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../banner/banner.component */ "XRsc");
/* harmony import */ var _row_row_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../row/row.component */ "bQCb");











function HomeComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 2);
} }
function HomeComponent_row_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "row", 3);
} if (rf & 2) {
    const movies_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("url", movies_r2.url)("title", movies_r2.title);
} }
class HomeComponent {
    constructor(ngRedux, router) {
        this.ngRedux = ngRedux;
        this.router = router;
        this.urls = _requests__WEBPACK_IMPORTED_MODULE_3__["default"];
        this.user = null;
        this.activeModal.subscribe((current) => (this.currentModalState = current));
        this.user = this.ngRedux.getState().user;
    }
    ngOnInit() {
        if (this.user === null)
            this.router.navigate(['']);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_redux_store__WEBPACK_IMPORTED_MODULE_1__["NgRedux"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["ng-component"]], decls: 5, vars: 2, consts: [["class", "modalFade", 4, "ngIf"], [3, "url", "title", 4, "ngFor", "ngForOf"], [1, "modalFade"], [3, "url", "title"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HomeComponent_div_1_Template, 1, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, HomeComponent_row_4_Template, 1, 2, "row", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.currentModalState);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.urls);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _banner_banner_component__WEBPACK_IMPORTED_MODULE_7__["BannerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _row_row_component__WEBPACK_IMPORTED_MODULE_8__["RowComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_1__["select"])()
], HomeComponent.prototype, "activeModal", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css'],
            }]
    }], function () { return [{ type: _angular_redux_store__WEBPACK_IMPORTED_MODULE_1__["NgRedux"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, { activeModal: [] }); })();


/***/ }),

/***/ "CDob":
/*!***********************************************************!*\
  !*** ./src/app/components/home-row/home-row.component.ts ***!
  \***********************************************************/
/*! exports provided: HomeRowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRowComponent", function() { return HomeRowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = function (a0, a1, a2) { return { top: a0, left: a1, width: a2 }; };
function HomeRowComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "video", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c0, ctx_r0.styles.top, ctx_r0.styles.left, ctx_r0.styles.width));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.data.video, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function HomeRowComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Stranger Things");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Downloading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { "rowComponent--inverted": a0 }; };
class HomeRowComponent {
    constructor() { }
    ngOnInit() {
        this.styles = this.data.styles;
    }
}
HomeRowComponent.ɵfac = function HomeRowComponent_Factory(t) { return new (t || HomeRowComponent)(); };
HomeRowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeRowComponent, selectors: [["home-row"]], inputs: { data: "data" }, decls: 10, vars: 8, consts: [[1, "rowComponent", 3, "ngClass"], [1, "rowComponent__image"], ["alt", "", 3, "src"], ["class", "rowComponent__video", 3, "ngStyle", 4, "ngIf"], ["class", "rowComponent__extraContainer", 4, "ngIf"], [1, "rowComponent__content"], [1, "rowComponent__video", 3, "ngStyle"], ["autoplay", "", "playsinline", "", "muted", "", "loop", "", 1, "rowComponent__videoSource"], ["type", "video/mp4", 3, "src"], [1, "rowComponent__extraContainer"], [1, "rowComponent__extraImgContainer"], ["alt", "", "src", "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"], [1, "rowComponent__extraText"], ["id", "", "data-uia", "", 1, "text-0"], ["id", "", "data-uia", "", 1, "text-1"]], template: function HomeRowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeRowComponent_div_3_Template, 3, 6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeRowComponent_div_4_Template, 8, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, ctx.data.inverted !== true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.data.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.video && ctx.styles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.extra);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.subtitle);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: [".rowComponent[_ngcontent-%COMP%] {\n  position: relative;\n  background: #000000;\n  height: 30rem;\n  border-bottom: 8px solid #2222;\n  color: #fff;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  margin-top: 1vh;\n  padding: 70px 45px 70px 45px;\n}\n.rowComponent--inverted[_ngcontent-%COMP%] {\n  flex-flow: row-reverse;\n}\n.rowComponent__image[_ngcontent-%COMP%] {\n  flex: 0.4;\n  position: relative;\n}\n.rowComponent__image[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  object-fit: cover;\n  height: 370px;\n  max-height: 370px;\n  max-width: 390px;\n  position: relative;\n  z-index: 1;\n}\n.rowComponent__content[_ngcontent-%COMP%] {\n  flex: 0.4;\n}\n.rowComponent__content[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n  font-size: 50px;\n  font-weight: 700;\n  color: #fff;\n  line-height: 55px;\n  margin: 0 0 8px 0;\n}\n.rowComponent__content[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\n  font-size: 26px;\n  color: #fff;\n  margin: 20px 0 7px 0;\n}\n.rowComponent__video[_ngcontent-%COMP%] {\n  height: 350px;\n  max-height: 300px;\n  max-width: 300px;\n  position: absolute;\n  z-index: 0;\n  transform: translate(-50%, -50%);\n}\n.rowComponent__videoSource[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  z-index: 0;\n}\n.rowComponent__extraContainer[_ngcontent-%COMP%] {\n  \n  font-size: 16px;\n  font-weight: 400;\n  z-index: 20;\n\n  \n  background-attachment: scroll;\n  background-color: rgb(0, 0, 0);\n  background-image: none;\n  background-position: 0% 0%;\n  background-repeat: repeat;\n  color: rgb(255, 255, 255);\n\n  \n  height: 75px;\n  width: 302.969px;\n  border: 2px solid rgba(255, 255, 255, 0.25);\n  border-top: 2px solid rgba(255, 255, 255, 0.25);\n  border-right: 2px solid rgba(255, 255, 255, 0.25);\n  border-bottom: 2px solid rgba(255, 255, 255, 0.25);\n  border-left: 2px solid rgba(255, 255, 255, 0.25);\n  padding: 8px 12px;\n  min-height: 0px;\n  min-width: 240px;\n\n  \n  position: absolute;\n  top: 240.172px;\n  bottom: 30.5312px;\n  right: -78.4844px;\n  left: 200px;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  \n  transform: matrix(1, 0, 0, 1, -165.5, 0);\n  transition: all 0s ease 0s;\n  outline-offset: 0px;\n  box-sizing: content-box;\n  box-shadow: rgb(0, 0, 0) 0px 0px 32px 0px;\n  border-radius: 12px;\n}\n.rowComponent__extraImgContainer[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  \n  height: 72px;\n  width: 51.4219px;\n\n  margin: 0px;\n  padding: 0px;\n  max-height: none;\n  min-height: 0px;\n  max-width: 100%;\n  min-width: 0px;\n  transition: all 0s ease 0s;\n}\n.rowComponent__extraContainer[_ngcontent-%COMP%]:after {\n  width: 3em;\n  height: 3em;\n  outline: 2px solid #000;\n  outline-offset: -2px;\n  background: url(https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif)\n    center center no-repeat;\n  background-size: 100%;\n  content: \"\";\n}\n.rowComponent__extraText[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(1) {\n  color: #fff;\n  font-size: 16px;\n  font-weight: 600;\n}\n.rowComponent__extraText[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(2) {\n  color: #0271eb;\n  font-size: 15px;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lLXJvdy9ob21lLXJvdy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFdBQVc7RUFDWCxNQUFNO0VBQ04sT0FBTztFQUNQLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZiw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsU0FBUztFQUNULGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7QUFDQTtFQUNFLFNBQVM7QUFDWDtBQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixVQUFVO0VBS1YsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVU7QUFDWjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVzs7RUFFWCx1QkFBdUI7RUFDdkIsNkJBQTZCO0VBQzdCLDhCQUE4QjtFQUM5QixzQkFBc0I7RUFDdEIsMEJBQTBCO0VBQzFCLHlCQUF5QjtFQUN6Qix5QkFBeUI7O0VBRXpCLFFBQVE7RUFDUixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLDJDQUEyQztFQUMzQywrQ0FBK0M7RUFDL0MsaURBQWlEO0VBQ2pELGtEQUFrRDtFQUNsRCxnREFBZ0Q7RUFDaEQsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7O0VBRWhCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWix3Q0FBd0M7RUFDeEMsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIseUNBQXlDO0VBQ3pDLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsUUFBUTtFQUNSLFlBQVk7RUFDWixnQkFBZ0I7O0VBRWhCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixlQUFlO0VBQ2YsY0FBYztFQUNkLDBCQUEwQjtBQUM1QjtBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCOzJCQUN5QjtFQUd6QixxQkFBcUI7RUFDckIsV0FBVztBQUNiO0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUtcm93L2hvbWUtcm93LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93Q29tcG9uZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICBoZWlnaHQ6IDMwcmVtO1xuICBib3JkZXItYm90dG9tOiA4cHggc29saWQgIzIyMjI7XG4gIGNvbG9yOiAjZmZmO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBtYXJnaW4tdG9wOiAxdmg7XG4gIHBhZGRpbmc6IDcwcHggNDVweCA3MHB4IDQ1cHg7XG59XG4ucm93Q29tcG9uZW50LS1pbnZlcnRlZCB7XG4gIGZsZXgtZmxvdzogcm93LXJldmVyc2U7XG59XG4ucm93Q29tcG9uZW50X19pbWFnZSB7XG4gIGZsZXg6IDAuNDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucm93Q29tcG9uZW50X19pbWFnZSA+IGltZyB7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBoZWlnaHQ6IDM3MHB4O1xuICBtYXgtaGVpZ2h0OiAzNzBweDtcbiAgbWF4LXdpZHRoOiAzOTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xufVxuLnJvd0NvbXBvbmVudF9fY29udGVudCB7XG4gIGZsZXg6IDAuNDtcbn1cbi5yb3dDb21wb25lbnRfX2NvbnRlbnQgPiBoMiB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICNmZmY7XG4gIGxpbmUtaGVpZ2h0OiA1NXB4O1xuICBtYXJnaW46IDAgMCA4cHggMDtcbn1cbi5yb3dDb21wb25lbnRfX2NvbnRlbnQgPiBoMyB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbjogMjBweCAwIDdweCAwO1xufVxuLnJvd0NvbXBvbmVudF9fdmlkZW8ge1xuICBoZWlnaHQ6IDM1MHB4O1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAwO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbi5yb3dDb21wb25lbnRfX3ZpZGVvU291cmNlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogMDtcbn1cblxuLnJvd0NvbXBvbmVudF9fZXh0cmFDb250YWluZXIge1xuICAvKiBGb250ICYgVGV4dCAqL1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHotaW5kZXg6IDIwO1xuXG4gIC8qIENvbG9yICYgQmFja2dyb3VuZCAqL1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IHNjcm9sbDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSAwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcblxuICAvKiBCb3ggKi9cbiAgaGVpZ2h0OiA3NXB4O1xuICB3aWR0aDogMzAyLjk2OXB4O1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICBib3JkZXItdG9wOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIG1pbi1oZWlnaHQ6IDBweDtcbiAgbWluLXdpZHRoOiAyNDBweDtcblxuICAvKiBQb3NpdGlvbmluZyAqL1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjQwLjE3MnB4O1xuICBib3R0b206IDMwLjUzMTJweDtcbiAgcmlnaHQ6IC03OC40ODQ0cHg7XG4gIGxlZnQ6IDIwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgLyogRWZmZWN0cyAqL1xuICB0cmFuc2Zvcm06IG1hdHJpeCgxLCAwLCAwLCAxLCAtMTY1LjUsIDApO1xuICB0cmFuc2l0aW9uOiBhbGwgMHMgZWFzZSAwcztcbiAgb3V0bGluZS1vZmZzZXQ6IDBweDtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIGJveC1zaGFkb3c6IHJnYigwLCAwLCAwKSAwcHggMHB4IDMycHggMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuXG4ucm93Q29tcG9uZW50X19leHRyYUltZ0NvbnRhaW5lciA+IGltZyB7XG4gIC8qIEJveCAqL1xuICBoZWlnaHQ6IDcycHg7XG4gIHdpZHRoOiA1MS40MjE5cHg7XG5cbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWF4LWhlaWdodDogbm9uZTtcbiAgbWluLWhlaWdodDogMHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMHMgZWFzZSAwcztcbn1cblxuLnJvd0NvbXBvbmVudF9fZXh0cmFDb250YWluZXI6YWZ0ZXIge1xuICB3aWR0aDogM2VtO1xuICBoZWlnaHQ6IDNlbTtcbiAgb3V0bGluZTogMnB4IHNvbGlkICMwMDA7XG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9hc3NldHMubmZseGV4dC5jb20vZmZlL3NpdGV1aS9hY3F1aXNpdGlvbi9vdXJTdG9yeS9mdWppL2Rlc2t0b3AvZG93bmxvYWQtaWNvbi5naWYpXG4gICAgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIGNvbnRlbnQ6IFwiXCI7XG59XG5cbi5yb3dDb21wb25lbnRfX2V4dHJhVGV4dCA+IDpudGgtY2hpbGQoMSkge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLnJvd0NvbXBvbmVudF9fZXh0cmFUZXh0ID4gOm50aC1jaGlsZCgyKSB7XG4gIGNvbG9yOiAjMDI3MWViO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4iXX0= */", "@media (max-width: 800px) {\n  .body[_ngcontent-%COMP%] {\n    overflow-y: scroll;\n  }\n  .banner__buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .header__moreOptions[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .header[_ngcontent-%COMP%] {\n    justify-content: space-around;\n  }\n  .header__options[_ngcontent-%COMP%], .header__navigation[_ngcontent-%COMP%] {\n    display: none;\n    transition: 0.5s;\n  }\n  .row__back[_ngcontent-%COMP%], .row__next[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .moreOptions[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    height: 100vh;\n    top: 8vh;\n    bottom: -5vh;\n    left: 0;\n    padding: 20px;\n    right: 0;\n    width: 100%;\n    border-radius: 10px;\n    justify-content: space-evenly;\n    align-items: center;\n    opacity: 0.4;\n    animation: displayOptions 0.5s ease-in-out forwards;\n    background: #151515;\n    opacity: 1;\n  }\n  .banner__contentDescription[_ngcontent-%COMP%] {\n    width: 20ch;\n  }\n  .rotateMoreOption[_ngcontent-%COMP%] {\n    animation: rotateElement 0.3s ease-in-out forwards;\n    transition: cubic-bezier(0.075, 0.82, 0.165, 1);\n  }\n  .row[_ngcontent-%COMP%] {\n    margin-top: 5rem;\n  }\n  .header__options[_ngcontent-%COMP%]    > .material-icons[_ngcontent-%COMP%]:nth-child(1) {\n    display: none;\n  }\n  .header__options[_ngcontent-%COMP%]    > .material-icons[_ngcontent-%COMP%] {\n    font-size: 50px;\n  }\n  .movie__bannerImg[_ngcontent-%COMP%] {\n    max-width: 100%;\n    object-fit: cover;\n    height: inherit;\n  }\n  .banner__content[_ngcontent-%COMP%] {\n    top: 20vh;\n    margin-left: 5vw;\n    margin-right: 5vw;\n    max-width: 300px;\n    padding: 10px;\n  }\n  youtube[_ngcontent-%COMP%] {\n    display: none;\n  }\n  \n  h1[_ngcontent-%COMP%] {\n    font-size: 28px !important;\n    line-height: 32px !important;\n  }\n  h2[_ngcontent-%COMP%] {\n    font-size: 26px !important;\n    line-height: 32px !important;\n  }\n  h3[_ngcontent-%COMP%] {\n    font-size: 24px !important;\n  }\n  .membership__button[_ngcontent-%COMP%] {\n    font-size: 22px !important;\n  }\n  .membership__input[_ngcontent-%COMP%] {\n    width: 50vw !important;\n    min-width: 50vw !important;\n  }\n  .mainPage__content[_ngcontent-%COMP%] {\n    padding: 5vw !important;\n  }\n  .rowComponent__image[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    height: 270px;\n    max-height: 370px;\n    max-width: 390px;\n  }\n  .rowComponent[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n    padding: 5vw !important;\n  }\n  .rowComponent__extraContainer[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n\n\n@keyframes rotateElement {\n  0% {\n    transform: rotate3d(0, 0, 0, -45deg);\n  }\n  100% {\n    transform: rotate3d(0, 0, 1, 135deg);\n  }\n}\n\n@keyframes displayOptions {\n  0% {\n    top: 100vh;\n  }\n  100% {\n    top: 8vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXNwb25zaXZlLnN0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0Usc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSw2QkFBNkI7RUFDL0I7RUFDQTs7SUFFRSxhQUFhO0lBQ2IsZ0JBQWdCO0VBQ2xCO0VBQ0E7O0lBRUUsYUFBYTtFQUNmO0VBQ0E7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsUUFBUTtJQUNSLFlBQVk7SUFDWixPQUFPO0lBQ1AsYUFBYTtJQUNiLFFBQVE7SUFDUixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLG1EQUFtRDtJQUNuRCxtQkFBbUI7SUFDbkIsVUFBVTtFQUNaO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLGtEQUFrRDtJQUNsRCwrQ0FBK0M7RUFDakQ7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGVBQWU7RUFDakI7RUFDQTtJQUNFLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixhQUFhO0VBQ2Y7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBLGFBQWE7RUFDYjtJQUNFLDBCQUEwQjtJQUMxQiw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLDBCQUEwQjtJQUMxQiw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUEseUJBQXlCOztBQUN6QjtFQUNFO0lBQ0Usb0NBQW9DO0VBQ3RDO0VBQ0E7SUFDRSxvQ0FBb0M7RUFDdEM7QUFDRjs7QUFDQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxRQUFRO0VBQ1Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzcG9uc2l2ZS5zdHlsZXMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5ib2R5IHtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIH1cbiAgLmJhbm5lcl9fYnV0dG9ucyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAuaGVhZGVyX19tb3JlT3B0aW9ucyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLmhlYWRlciB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIH1cbiAgLmhlYWRlcl9fb3B0aW9ucyxcbiAgLmhlYWRlcl9fbmF2aWdhdGlvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICB9XG4gIC5yb3dfX2JhY2ssXG4gIC5yb3dfX25leHQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLm1vcmVPcHRpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgdG9wOiA4dmg7XG4gICAgYm90dG9tOiAtNXZoO1xuICAgIGxlZnQ6IDA7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgb3BhY2l0eTogMC40O1xuICAgIGFuaW1hdGlvbjogZGlzcGxheU9wdGlvbnMgMC41cyBlYXNlLWluLW91dCBmb3J3YXJkcztcbiAgICBiYWNrZ3JvdW5kOiAjMTUxNTE1O1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgLmJhbm5lcl9fY29udGVudERlc2NyaXB0aW9uIHtcbiAgICB3aWR0aDogMjBjaDtcbiAgfVxuICAucm90YXRlTW9yZU9wdGlvbiB7XG4gICAgYW5pbWF0aW9uOiByb3RhdGVFbGVtZW50IDAuM3MgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XG4gICAgdHJhbnNpdGlvbjogY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSk7XG4gIH1cbiAgLnJvdyB7XG4gICAgbWFyZ2luLXRvcDogNXJlbTtcbiAgfVxuICAuaGVhZGVyX19vcHRpb25zID4gLm1hdGVyaWFsLWljb25zOm50aC1jaGlsZCgxKSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuaGVhZGVyX19vcHRpb25zID4gLm1hdGVyaWFsLWljb25zIHtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gIH1cbiAgLm1vdmllX19iYW5uZXJJbWcge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gIH1cbiAgLmJhbm5lcl9fY29udGVudCB7XG4gICAgdG9wOiAyMHZoO1xuICAgIG1hcmdpbi1sZWZ0OiA1dnc7XG4gICAgbWFyZ2luLXJpZ2h0OiA1dnc7XG4gICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG4gIHlvdXR1YmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLyogTWFpbiBQYWdlKi9cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMjhweCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAzMnB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMjZweCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAzMnB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgaDMge1xuICAgIGZvbnQtc2l6ZTogMjRweCAhaW1wb3J0YW50O1xuICB9XG4gIC5tZW1iZXJzaGlwX19idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMjJweCAhaW1wb3J0YW50O1xuICB9XG4gIC5tZW1iZXJzaGlwX19pbnB1dCB7XG4gICAgd2lkdGg6IDUwdncgIWltcG9ydGFudDtcbiAgICBtaW4td2lkdGg6IDUwdncgIWltcG9ydGFudDtcbiAgfVxuICAubWFpblBhZ2VfX2NvbnRlbnQge1xuICAgIHBhZGRpbmc6IDV2dyAhaW1wb3J0YW50O1xuICB9XG4gIC5yb3dDb21wb25lbnRfX2ltYWdlID4gaW1nIHtcbiAgICBoZWlnaHQ6IDI3MHB4O1xuICAgIG1heC1oZWlnaHQ6IDM3MHB4O1xuICAgIG1heC13aWR0aDogMzkwcHg7XG4gIH1cbiAgLnJvd0NvbXBvbmVudCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNXZ3ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnJvd0NvbXBvbmVudF9fZXh0cmFDb250YWluZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLyogS0VZRlJBTUVTIEFOSU1BVElPTlMgKi9cbkBrZXlmcmFtZXMgcm90YXRlRWxlbWVudCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDAsIC00NWRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAxMzVkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGRpc3BsYXlPcHRpb25zIHtcbiAgMCUge1xuICAgIHRvcDogMTAwdmg7XG4gIH1cbiAgMTAwJSB7XG4gICAgdG9wOiA4dmg7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeRowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'home-row',
                templateUrl: './home-row.component.html',
                styleUrls: ['./home-row.component.css', '../responsive.styles.css'],
            }]
    }], function () { return []; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Hmo7":
/*!********************************!*\
  !*** ./src/app/credentials.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const firebaseConfig = {
  apiKey: "AIzaSyCfEuw8oiwUxHqXZB3VibazKZcKID68giI",
  authDomain: "netflix-films.firebaseapp.com",
  databaseURL: "https://netflix-films.firebaseio.com",
  projectId: "netflix-films",
  storageBucket: "netflix-films.appspot.com",
  messagingSenderId: "645813367165",
  appId: "1:645813367165:web:6cfa632f18107b2ef45c14",
  measurementId: "G-5PLL0LHNDD",
};
/* harmony default export */ __webpack_exports__["default"] = (firebaseConfig);


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class FooterComponent {
    constructor() { }
    ngOnInit() { }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 29, vars: 0, consts: [[1, "footer__content"], [1, "footer-links", "structural"], [1, "footer-link-item"], ["routerLink", "/home", 1, "footer-link"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Questions? Call 800 050 702");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "FAQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Help Center");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Terms of Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Privacy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Cookie Preferences");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Corporate Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\nfooter[_ngcontent-%COMP%] {\n  z-index: 5;\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n}\nfooter[_ngcontent-%COMP%]:after {\n  content: \"\";\n  bottom: 0;\n  position: absolute;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  z-index: -1;\n  background: rgba(0, 0, 0, 0.4);\n  background-image: linear-gradient(\n    to top,\n    rgba(0, 0, 0, 0.8) 0,\n    rgba(0, 0, 0, 0) 60%,\n    rgba(0, 0, 0, 0.8) 100%\n  );\n}\n.footer__content[_ngcontent-%COMP%] {\n  padding: 30px;\n  margin: 0 10vw 0 10vw;\n}\n.footer__content[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\n  color: #757575;\n  font-size: 18px;\n}\n.footer-links[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.footer-link-item[_ngcontent-%COMP%] {\n  padding: 0;\n  margin-bottom: 16px;\n  display: inline-block;\n  min-width: 100px;\n  width: 25%;\n  padding-right: 12px;\n  vertical-align: top;\n}\n.footer-link[_ngcontent-%COMP%] {\n  color: #757575;\n}\nul.structural[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\nul.structural[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  list-style: none;\n  margin-left: 0;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #0080ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7QUFDWDtBQUVBO0VBQ0UsV0FBVztFQUNYLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCw4QkFBOEI7RUFDOUI7Ozs7O0dBS0M7QUFDSDtBQUNBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7QUFDWDtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuZm9vdGVyIHtcbiAgei1pbmRleDogNTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiAwO1xufVxuXG5mb290ZXI6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBib3R0b206IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgei1pbmRleDogLTE7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgIHRvIHRvcCxcbiAgICByZ2JhKDAsIDAsIDAsIDAuOCkgMCxcbiAgICByZ2JhKDAsIDAsIDAsIDApIDYwJSxcbiAgICByZ2JhKDAsIDAsIDAsIDAuOCkgMTAwJVxuICApO1xufVxuLmZvb3Rlcl9fY29udGVudCB7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIG1hcmdpbjogMCAxMHZ3IDAgMTB2dztcbn1cbi5mb290ZXJfX2NvbnRlbnQgPiBoMyB7XG4gIGNvbG9yOiAjNzU3NTc1O1xuICBmb250LXNpemU6IDE4cHg7XG59XG4uZm9vdGVyLWxpbmtzIHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLmZvb3Rlci1saW5rLWl0ZW0ge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIHdpZHRoOiAyNSU7XG4gIHBhZGRpbmctcmlnaHQ6IDEycHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG4uZm9vdGVyLWxpbmsge1xuICBjb2xvcjogIzc1NzU3NTtcbn1cbnVsLnN0cnVjdHVyYWwge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG51bC5zdHJ1Y3R1cmFsID4gbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW4tbGVmdDogMDtcbn1cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMDA4MGZmO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "M87+":
/*!*************************************!*\
  !*** ./src/mainComponentRowInfo.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const data = [
  {
    title: "Enjoy on your TV.",
    subtitle:
      "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
    inverted: false,
    image:
      "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png",
    video:
      "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v",
    styles: {
      top: "45%",
      left: "200px",
      width: "100%",
    },
    extra: false,
  },
  {
    title: "Download your shows to watch offline.",
    subtitle: "Save your favorites easily and always have something to watch.",
    inverted: true,
    video: "",
    extra: true,
    image:
      "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg",
  },
  {
    title: "Watch everywhere",
    subtitle:
      "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.",
    inverted: false,
    video:
      "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v",
    image:
      "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png",
    styles: {
      top: "37%",
      left: "200px",
      width: "243px",
    },
    extra: false,
  },
];
/* harmony default export */ __webpack_exports__["default"] = (data);


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() { }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".modalFade[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  background: #111;\n  z-index: 1;\n  position: absolute;\n  top: 0;\n  opacity: 0.6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbEZhZGUge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjMTExO1xuICB6LWluZGV4OiAxO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgb3BhY2l0eTogMC42O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
            }]
    }], function () { return []; }, null); })();
window.addEventListener('scroll', function () {
    var header = document.querySelector('.header');
    header.classList.toggle('header--scroll', window.scrollY > 0);
});


/***/ }),

/***/ "UR1+":
/*!*********************************************************!*\
  !*** ./src/app/components/sign-in/sign-in.component.ts ***!
  \*********************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../footer/footer.component */ "LmEr");








function SignInComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is not valid ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SignInComponent {
    constructor(_api, router, _builder) {
        this._api = _api;
        this.router = router;
        this._builder = _builder;
        this.signupForm = this._builder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            password: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$'),
                ]),
            ],
        });
    }
    login(json) {
        this._api.signInEmailAndPassword(json);
    }
    loginWithGoogle() {
        this._api.loginGoogle();
    }
    ngOnInit() { }
}
SignInComponent.ɵfac = function SignInComponent_Factory(t) { return new (t || SignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
SignInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignInComponent, selectors: [["ng-component"]], decls: 35, vars: 2, consts: [[1, "signIn"], ["src", "assets/images/logo.png", "alt", "", 1, "signIn__logo"], [1, "signIn__back"], ["src", "https://assets.nflxext.com/ffe/siteui/vlv3/bcd713c9-291e-4186-a275-117b387eaaf2/e2c6df78-a9bf-4cc1-903f-f84cf97c3f57/CZ-en-20201019-popsignuptwoweeks-perspective_alpha_website_small.jpg", "srcset", "\n        https://assets.nflxext.com/ffe/siteui/vlv3/bcd713c9-291e-4186-a275-117b387eaaf2/e2c6df78-a9bf-4cc1-903f-f84cf97c3f57/CZ-en-20201019-popsignuptwoweeks-perspective_alpha_website_small.jpg  1000w,\n        https://assets.nflxext.com/ffe/siteui/vlv3/bcd713c9-291e-4186-a275-117b387eaaf2/e2c6df78-a9bf-4cc1-903f-f84cf97c3f57/CZ-en-20201019-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w,\n        https://assets.nflxext.com/ffe/siteui/vlv3/bcd713c9-291e-4186-a275-117b387eaaf2/e2c6df78-a9bf-4cc1-903f-f84cf97c3f57/CZ-en-20201019-popsignuptwoweeks-perspective_alpha_website_large.jpg  1800w\n      ", "alt", "", 1, "signIn__background"], [1, "signIn__content"], [1, "signIn__form"], [3, "formGroup", "ngSubmit"], ["formControlName", "email", "type", "mail", "placeholder", "Email", "name", "email", "id", "email"], ["class", "form__error", 4, "ngIf"], ["formControlName", "password", "name", "password", "id", "password", "type", "password", "placeholder", "Password"], ["type", "submit"], [1, "form__submit"], ["type", "checkbox", "name", "", "id", ""], [1, "signIn__info"], ["data-uia", "fb-login", 1, "signIn__login"], ["src", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1004px-Google_%22G%22_Logo.svg.png", 1, "icon-facebook"], [1, "fbBtnText", 3, "click"], [1, "signIn__additionalInfo"], [1, "signUp"], [1, "learnMore"], [1, "form__error"]], template: function SignInComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignInComponent_Template_form_ngSubmit_8_listener() { return ctx.login(ctx.signupForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SignInComponent_div_10_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Remember me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Need help?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignInComponent_Template_span_click_23_listener() { return ctx.loginWithGoogle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Login with Google");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "New to Netflix? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Sign up now.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " This page is protected by Google reCAPTCHA to ensure you're not a bot. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Learn more.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signupForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signupForm.get("email").hasError("email") && ctx.signupForm.get("email").touched);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], styles: [".signIn[_ngcontent-%COMP%] {\n  height: 145vh;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n.signIn__back[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0%;\n  left: 0;\n  z-index: -1;\n}\n.signIn__background[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 145vh;\n  object-fit: cover;\n}\n.signIn[_ngcontent-%COMP%]:after {\n  content: \"\";\n  top: 0;\n  position: absolute;\n  left: 0;\n  height: 145vh;\n  width: 100%;\n  overflow: hidden;\n  z-index: -1;\n  background: rgba(0, 0, 0, 0.4);\n  background-image: linear-gradient(\n    to top,\n    rgba(0, 0, 0, 0.8) 0,\n    rgba(0, 0, 0, 0) 60%,\n    rgba(0, 0, 0, 0.8) 100%\n  );\n  border-bottom: 8px solid #222;\n}\n.signIn__logo[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 45px;\n  margin: 20px 0px 0px 40px;\n  object-fit: contain;\n  top: 10px;\n  left: 0;\n}\n.signIn__content[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: rgba(0, 0, 0, 0.75);\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  width: 450px;\n  margin: 0px 0px 90px;\n  padding: 60px 68px 40px;\n  min-height: -webkit-fit-content;\n  min-height: -moz-fit-content;\n  min-height: fit-content;\n  min-width: 380px;\n  display: flex;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n.signIn__form[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n}\n.signIn__form[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 36px;\n  margin-bottom: 25px;\n}\nform[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n  width: 90%;\n  background: #e7f0fe;\n  padding: 15px;\n  font-size: 18px;\n  margin-bottom: 10px;\n  outline: none;\n  border-radius: 5px;\n}\n.form__submit[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: #fff;\n  width: 90%;\n  margin: 15px 0;\n}\nform[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  cursor: pointer;\n  background: #e50916;\n  border-radius: 3px;\n  outline: none;\n  color: #fff;\n  margin-top: 15px;\n  font-size: 18px;\n  border: none;\n  width: 90%;\n  padding: 15px;\n  font-weight: 700;\n}\n.signUp[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  color: #fff;\n}\n.signIn__login[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  color: #737373;\n  margin: 15px 0;\n}\n.icon-facebook[_ngcontent-%COMP%] {\n  height: 25px;\n  margin-right: 10px;\n  object-fit: contain;\n}\n.signIn__additionalInfo[_ngcontent-%COMP%] {\n  color: #737373;\n}\n.learnMore[_ngcontent-%COMP%] {\n  color: #006fe4;\n}\n.form__submit[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  color: #737373;\n}\ninput[type=\"checkbox\"][_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.form__error[_ngcontent-%COMP%] {\n  color: rgb(240, 82, 82);\n  font-size: 22px;\n  padding: 10px;\n}\n.fbBtnText[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWduLWluL3NpZ24taW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE9BQU87RUFDUCxXQUFXO0FBQ2I7QUFDQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsTUFBTTtFQUNOLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsYUFBYTtFQUNiLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLDhCQUE4QjtFQUM5Qjs7Ozs7R0FLQztFQUNELDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxPQUFPO0FBQ1Q7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQ0FBcUM7RUFDckMsMkJBQW1CO0VBQW5CLHdCQUFtQjtFQUFuQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQix1QkFBdUI7RUFDdkIsK0JBQXVCO0VBQXZCLDRCQUF1QjtFQUF2Qix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLDhCQUE4QjtFQUM5QiwrQkFBK0I7RUFDL0IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7QUFDQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxVQUFVO0VBQ1YsY0FBYztBQUNoQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7RUFDWixVQUFVO0VBQ1YsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLGNBQWM7RUFDZCxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGFBQWE7QUFDZjtBQUNBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lnbkluIHtcbiAgaGVpZ2h0OiAxNDV2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnNpZ25Jbl9fYmFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwJTtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogLTE7XG59XG4uc2lnbkluX19iYWNrZ3JvdW5kIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTQ1dmg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLnNpZ25JbjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHRvcDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDE0NXZoO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgei1pbmRleDogLTE7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgIHRvIHRvcCxcbiAgICByZ2JhKDAsIDAsIDAsIDAuOCkgMCxcbiAgICByZ2JhKDAsIDAsIDAsIDApIDYwJSxcbiAgICByZ2JhKDAsIDAsIDAsIDAuOCkgMTAwJVxuICApO1xuICBib3JkZXItYm90dG9tOiA4cHggc29saWQgIzIyMjtcbn1cbi5zaWduSW5fX2xvZ28ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogNDVweDtcbiAgbWFyZ2luOiAyMHB4IDBweCAwcHggNDBweDtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgdG9wOiAxMHB4O1xuICBsZWZ0OiAwO1xufVxuXG4uc2lnbkluX19jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICB3aWR0aDogNDUwcHg7XG4gIG1hcmdpbjogMHB4IDBweCA5MHB4O1xuICBwYWRkaW5nOiA2MHB4IDY4cHggNDBweDtcbiAgbWluLWhlaWdodDogZml0LWNvbnRlbnQ7XG4gIG1pbi13aWR0aDogMzgwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5zaWduSW5fX2Zvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xufVxuLnNpZ25Jbl9fZm9ybSA+IGgyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbmZvcm0gPiBpbnB1dCB7XG4gIHdpZHRoOiA5MCU7XG4gIGJhY2tncm91bmQ6ICNlN2YwZmU7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmZvcm1fX3N1Ym1pdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMTVweCAwO1xufVxuXG5mb3JtID4gYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiAjZTUwOTE2O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDkwJTtcbiAgcGFkZGluZzogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5zaWduVXAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnNpZ25Jbl9fbG9naW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGNvbG9yOiAjNzM3MzczO1xuICBtYXJnaW46IDE1cHggMDtcbn1cbi5pY29uLWZhY2Vib29rIHtcbiAgaGVpZ2h0OiAyNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG4uc2lnbkluX19hZGRpdGlvbmFsSW5mbyB7XG4gIGNvbG9yOiAjNzM3MzczO1xufVxuLmxlYXJuTW9yZSB7XG4gIGNvbG9yOiAjMDA2ZmU0O1xufVxuLmZvcm1fX3N1Ym1pdCA+ICoge1xuICBjb2xvcjogIzczNzM3Mztcbn1cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuLmZvcm1fX2Vycm9yIHtcbiAgY29sb3I6IHJnYigyNDAsIDgyLCA4Mik7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5mYkJ0blRleHQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignInComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './sign-in.component.html',
                styleUrls: ['./sign-in.component.css'],
            }]
    }], function () { return [{ type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "XRsc":
/*!*******************************************************!*\
  !*** ./src/app/components/banner/banner.component.ts ***!
  \*******************************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _movie_movie_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../movie/movie.component */ "qO9b");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular-redux/store */ "Usal");
/* harmony import */ var _actions_modal_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/modal.actions */ "xX7k");
/* harmony import */ var movie_trailer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! movie-trailer */ "WqYR");
/* harmony import */ var movie_trailer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(movie_trailer__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ "j6J2");
/* harmony import */ var src_app_services_fetch_films_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/fetch-films.service */ "60kU");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _youtube_youtube_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../youtube/youtube.component */ "pTb4");













function BannerComponent_div_0_youtube_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "youtube", 9);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx_r1.videoUrl);
} }
function BannerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BannerComponent_div_0_youtube_1_Template, 1, 1, "youtube", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " play_arrow ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Play");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BannerComponent_div_0_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.openDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " info ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " More Information ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-image", "url(" + ctx_r0.background + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.videoUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.trendingMovie.original_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.truncate(ctx_r0.trendingMovie.overview), " ");
} }
class BannerComponent {
    constructor(_http, dialog, ngRedux) {
        this._http = _http;
        this.dialog = dialog;
        this.ngRedux = ngRedux;
        this.background = 'https://image.tmdb.org/t/p/original/';
        this.videoUrl = '';
        this.fetchStatus = true;
        this.truncate = (str) => {
            return Object(_utils__WEBPACK_IMPORTED_MODULE_6__["default"])(str, 200);
        };
    }
    ngOnInit() {
        this._http
            .getFilm('/movie/popular?language=en-US&page=1')
            .subscribe((films) => {
            const randValue = Math.floor(Math.random() * 20);
            this.trendingMovie = films.results[randValue];
            this.background += films.results[randValue].backdrop_path;
        });
        this.activeModal.subscribe((current) => (this.currentModalState = current));
    }
    ngAfterContentChecked() {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        if (this.trendingMovie && this.fetchStatus) {
            this.fetchStatus = false;
            movie_trailer__WEBPACK_IMPORTED_MODULE_5___default()(this.trendingMovie.name ||
                this.trendingMovie.title ||
                this.trendingMovie.original_title ||
                '').then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                this.videoUrl = urlParams.get('v');
            });
        }
    }
    openDialog() {
        const dialogRef = this.dialog.open(_movie_movie_component__WEBPACK_IMPORTED_MODULE_2__["MovieComponent"]);
        const instance = dialogRef.componentInstance;
        instance.film = this.trendingMovie;
        this.ngRedux.dispatch({
            type: _actions_modal_actions__WEBPACK_IMPORTED_MODULE_4__["SET_STATUS"],
            status: !this.currentModalState,
        });
        dialogRef.afterClosed().subscribe((_) => {
            this.ngRedux.dispatch({
                type: _actions_modal_actions__WEBPACK_IMPORTED_MODULE_4__["SET_STATUS"],
                status: !this.currentModalState,
            });
        });
    }
}
BannerComponent.ɵfac = function BannerComponent_Factory(t) { return new (t || BannerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_fetch_films_service__WEBPACK_IMPORTED_MODULE_7__["FetchFilmsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_redux_store__WEBPACK_IMPORTED_MODULE_3__["NgRedux"])); };
BannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BannerComponent, selectors: [["banner"]], decls: 1, vars: 1, consts: [["class", "banner", 3, "background-image", 4, "ngIf"], [1, "banner"], [3, "id", 4, "ngIf"], [1, "banner__content"], [1, "banner__contentTitle"], [1, "banner__contentDescription"], [1, "banner__buttons"], [1, "material-icons"], [3, "click"], [3, "id"]], template: function BannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, BannerComponent_div_0_Template, 16, 5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.trendingMovie);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _youtube_youtube_component__WEBPACK_IMPORTED_MODULE_10__["YoutubeComponent"]], styles: ["[_nghost-%COMP%] {\n  height: 11.25rem;\n  object-fit: contain;\n}\n.banner[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100vw;\n  object-fit: cover;\n  background-position-x: center;\n  background-position-y: top;\n}\n.banner__backdrop[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100vw;\n  object-fit: cover;\n}\n.banner__fadeBottom[_ngcontent-%COMP%] {\n  \n}\n.banner__content[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 40vh;\n  padding: 30px;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  flex-wrap: nowrap;\n  justify-content: center;\n  left: 5vw;\n  z-index: 50;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  background-color: rgba(17, 17, 17, 0.4);\n  box-shadow: -4px -4px 10px rgba(255, 255, 255, 1),\n    inset 4px 4px 10px rgba(0, 0, 0, 0.05),\n    inset -4px -4px 10px rgba(255, 255, 255, 1),\n    4px 4px 10px rgba(0, 0, 0, 0.05);\n}\n.banner__contentTitle[_ngcontent-%COMP%] {\n  font-size: 30px;\n  line-height: 1;\n  color: #fff;\n  position: relative;\n  width: 20ch;\n}\n.banner__contentDescription[_ngcontent-%COMP%] {\n  color: #fff;\n  font-weight: 400;\n  line-height: normal;\n  width: 100%;\n  font-size: 18px;\n  width: 40ch;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);\n  margin-top: 0.1vw;\n}\n.banner__buttons[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.banner__buttons[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 9px 26px 9px 22px;\n  border-radius: 4px;\n  font-size: 14px;\n  font-weight: 400;\n  font-weight: bold;\n  line-height: normal;\n  text-align: center;\n  white-space: nowrap;\n  transition: all 0s ease 0s;\n  outline: rgb(55, 0, 0) dashed 1px;\n  margin: 0 11px 11px 0;\n}\n.material-icons[_ngcontent-%COMP%] {\n  margin-right: 8px !important;\n}\n.banner__buttons[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]:nth-child(1) {\n  background: #fff;\n  color: #111;\n  height: 43px;\n  width: 173.7px;\n  min-width: auto;\n  min-height: auto;\n  background-position: 0%;\n}\n.banner__buttons[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]:nth-child(2) {\n  background: #6d6d6e;\n  color: #ffff;\n  background-position: 0%;\n  height: 43px;\n  width: 217.6px;\n  min-width: auto;\n  min-height: auto;\n}\n.banner__buttons[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n.banner[_ngcontent-%COMP%]:after {\n  content: \"\";\n  top: 5vh;\n  position: absolute;\n  left: 0;\n  height: 100vh;\n  position: absolute;\n  width: 100vw;\n  margin-top: -20px;\n  z-index: 1;\n  background-image: linear-gradient(\n    180deg,\n    transparent,\n    rgba(37, 37, 37, 0.61),\n    #111\n  );\n  margin-bottom: 5vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9iYW5uZXIvYmFubmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0U7Ozs7Ozs7Ozs7Ozt1QkFZcUI7QUFDdkI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsMEJBQTBCO0VBQzFCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsdUNBQXVDO0VBQ3ZDOzs7b0NBR2tDO0FBQ3BDO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztBQUNiO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZUFBZTtFQUNmLFdBQVc7RUFDWCw0Q0FBNEM7RUFDNUMsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsaUNBQWlDO0VBQ2pDLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxXQUFXO0VBQ1gsUUFBUTtFQUNSLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVjs7Ozs7R0FLQztFQUNELGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmFubmVyL2Jhbm5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBoZWlnaHQ6IDExLjI1cmVtO1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuLmJhbm5lciB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IHRvcDtcbn1cbi5iYW5uZXJfX2JhY2tkcm9wIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi5iYW5uZXJfX2ZhZGVCb3R0b20ge1xuICAvKiAgIHotaW5kZXg6IDE7XG4gIGhlaWdodDogMTAwdmg7XG4gIHRvcDogNXZoO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgIDE4MGRlZyxcbiAgICB0cmFuc3BhcmVudCxcbiAgICByZ2JhKDM3LCAzNywgMzcsIDAuNjEpLFxuICAgICMxMTFcbiAgKTtcbiAgbWFyZ2luLWJvdHRvbTogNXZoOyAqL1xufVxuLmJhbm5lcl9fY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0MHZoO1xuICBwYWRkaW5nOiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGxlZnQ6IDV2dztcbiAgei1pbmRleDogNTA7XG4gIHdpZHRoOiAtd2Via2l0LWZpdC1jb250ZW50O1xuICB3aWR0aDogLW1vei1maXQtY29udGVudDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3LCAxNywgMTcsIDAuNCk7XG4gIGJveC1zaGFkb3c6IC00cHggLTRweCAxMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSksXG4gICAgaW5zZXQgNHB4IDRweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSksXG4gICAgaW5zZXQgLTRweCAtNHB4IDEwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSxcbiAgICA0cHggNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn1cbi5iYW5uZXJfX2NvbnRlbnRUaXRsZSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAyMGNoO1xufVxuLmJhbm5lcl9fY29udGVudERlc2NyaXB0aW9uIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHdpZHRoOiA0MGNoO1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjQ1KTtcbiAgbWFyZ2luLXRvcDogMC4xdnc7XG59XG5cbi5iYW5uZXJfX2J1dHRvbnMge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmJhbm5lcl9fYnV0dG9ucyA+IGJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogOXB4IDI2cHggOXB4IDIycHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0cmFuc2l0aW9uOiBhbGwgMHMgZWFzZSAwcztcbiAgb3V0bGluZTogcmdiKDU1LCAwLCAwKSBkYXNoZWQgMXB4O1xuICBtYXJnaW46IDAgMTFweCAxMXB4IDA7XG59XG4ubWF0ZXJpYWwtaWNvbnMge1xuICBtYXJnaW4tcmlnaHQ6IDhweCAhaW1wb3J0YW50O1xufVxuLmJhbm5lcl9fYnV0dG9ucyA+IGJ1dHRvbjpudGgtY2hpbGQoMSkge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogIzExMTtcbiAgaGVpZ2h0OiA0M3B4O1xuICB3aWR0aDogMTczLjdweDtcbiAgbWluLXdpZHRoOiBhdXRvO1xuICBtaW4taGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJTtcbn1cblxuLmJhbm5lcl9fYnV0dG9ucyA+IGJ1dHRvbjpudGgtY2hpbGQoMikge1xuICBiYWNrZ3JvdW5kOiAjNmQ2ZDZlO1xuICBjb2xvcjogI2ZmZmY7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAlO1xuICBoZWlnaHQ6IDQzcHg7XG4gIHdpZHRoOiAyMTcuNnB4O1xuICBtaW4td2lkdGg6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IGF1dG87XG59XG4uYmFubmVyX19idXR0b25zID4gYnV0dG9uOmhvdmVyIHtcbiAgb3BhY2l0eTogMC43O1xufVxuXG4uYmFubmVyOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgdG9wOiA1dmg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwdnc7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgMTgwZGVnLFxuICAgIHRyYW5zcGFyZW50LFxuICAgIHJnYmEoMzcsIDM3LCAzNywgMC42MSksXG4gICAgIzExMVxuICApO1xuICBtYXJnaW4tYm90dG9tOiA1dmg7XG59XG4iXX0= */", "@media (max-width: 800px) {\n  .body[_ngcontent-%COMP%] {\n    overflow-y: scroll;\n  }\n  .banner__buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .header__moreOptions[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .header[_ngcontent-%COMP%] {\n    justify-content: space-around;\n  }\n  .header__options[_ngcontent-%COMP%], .header__navigation[_ngcontent-%COMP%] {\n    display: none;\n    transition: 0.5s;\n  }\n  .row__back[_ngcontent-%COMP%], .row__next[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .moreOptions[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    height: 100vh;\n    top: 8vh;\n    bottom: -5vh;\n    left: 0;\n    padding: 20px;\n    right: 0;\n    width: 100%;\n    border-radius: 10px;\n    justify-content: space-evenly;\n    align-items: center;\n    opacity: 0.4;\n    animation: displayOptions 0.5s ease-in-out forwards;\n    background: #151515;\n    opacity: 1;\n  }\n  .banner__contentDescription[_ngcontent-%COMP%] {\n    width: 20ch;\n  }\n  .rotateMoreOption[_ngcontent-%COMP%] {\n    animation: rotateElement 0.3s ease-in-out forwards;\n    transition: cubic-bezier(0.075, 0.82, 0.165, 1);\n  }\n  .row[_ngcontent-%COMP%] {\n    margin-top: 5rem;\n  }\n  .header__options[_ngcontent-%COMP%]    > .material-icons[_ngcontent-%COMP%]:nth-child(1) {\n    display: none;\n  }\n  .header__options[_ngcontent-%COMP%]    > .material-icons[_ngcontent-%COMP%] {\n    font-size: 50px;\n  }\n  .movie__bannerImg[_ngcontent-%COMP%] {\n    max-width: 100%;\n    object-fit: cover;\n    height: inherit;\n  }\n  .banner__content[_ngcontent-%COMP%] {\n    top: 20vh;\n    margin-left: 5vw;\n    margin-right: 5vw;\n    max-width: 300px;\n    padding: 10px;\n  }\n  youtube[_ngcontent-%COMP%] {\n    display: none;\n  }\n  \n  h1[_ngcontent-%COMP%] {\n    font-size: 28px !important;\n    line-height: 32px !important;\n  }\n  h2[_ngcontent-%COMP%] {\n    font-size: 26px !important;\n    line-height: 32px !important;\n  }\n  h3[_ngcontent-%COMP%] {\n    font-size: 24px !important;\n  }\n  .membership__button[_ngcontent-%COMP%] {\n    font-size: 22px !important;\n  }\n  .membership__input[_ngcontent-%COMP%] {\n    width: 50vw !important;\n    min-width: 50vw !important;\n  }\n  .mainPage__content[_ngcontent-%COMP%] {\n    padding: 5vw !important;\n  }\n  .rowComponent__image[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    height: 270px;\n    max-height: 370px;\n    max-width: 390px;\n  }\n  .rowComponent[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n    padding: 5vw !important;\n  }\n  .rowComponent__extraContainer[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n\n\n@keyframes rotateElement {\n  0% {\n    transform: rotate3d(0, 0, 0, -45deg);\n  }\n  100% {\n    transform: rotate3d(0, 0, 1, 135deg);\n  }\n}\n\n@keyframes displayOptions {\n  0% {\n    top: 100vh;\n  }\n  100% {\n    top: 8vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXNwb25zaXZlLnN0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0Usc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSw2QkFBNkI7RUFDL0I7RUFDQTs7SUFFRSxhQUFhO0lBQ2IsZ0JBQWdCO0VBQ2xCO0VBQ0E7O0lBRUUsYUFBYTtFQUNmO0VBQ0E7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsUUFBUTtJQUNSLFlBQVk7SUFDWixPQUFPO0lBQ1AsYUFBYTtJQUNiLFFBQVE7SUFDUixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLG1EQUFtRDtJQUNuRCxtQkFBbUI7SUFDbkIsVUFBVTtFQUNaO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLGtEQUFrRDtJQUNsRCwrQ0FBK0M7RUFDakQ7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGVBQWU7RUFDakI7RUFDQTtJQUNFLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixhQUFhO0VBQ2Y7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBLGFBQWE7RUFDYjtJQUNFLDBCQUEwQjtJQUMxQiw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLDBCQUEwQjtJQUMxQiw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUEseUJBQXlCOztBQUN6QjtFQUNFO0lBQ0Usb0NBQW9DO0VBQ3RDO0VBQ0E7SUFDRSxvQ0FBb0M7RUFDdEM7QUFDRjs7QUFDQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxRQUFRO0VBQ1Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzcG9uc2l2ZS5zdHlsZXMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5ib2R5IHtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIH1cbiAgLmJhbm5lcl9fYnV0dG9ucyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAuaGVhZGVyX19tb3JlT3B0aW9ucyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLmhlYWRlciB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIH1cbiAgLmhlYWRlcl9fb3B0aW9ucyxcbiAgLmhlYWRlcl9fbmF2aWdhdGlvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICB9XG4gIC5yb3dfX2JhY2ssXG4gIC5yb3dfX25leHQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLm1vcmVPcHRpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgdG9wOiA4dmg7XG4gICAgYm90dG9tOiAtNXZoO1xuICAgIGxlZnQ6IDA7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgb3BhY2l0eTogMC40O1xuICAgIGFuaW1hdGlvbjogZGlzcGxheU9wdGlvbnMgMC41cyBlYXNlLWluLW91dCBmb3J3YXJkcztcbiAgICBiYWNrZ3JvdW5kOiAjMTUxNTE1O1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgLmJhbm5lcl9fY29udGVudERlc2NyaXB0aW9uIHtcbiAgICB3aWR0aDogMjBjaDtcbiAgfVxuICAucm90YXRlTW9yZU9wdGlvbiB7XG4gICAgYW5pbWF0aW9uOiByb3RhdGVFbGVtZW50IDAuM3MgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XG4gICAgdHJhbnNpdGlvbjogY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSk7XG4gIH1cbiAgLnJvdyB7XG4gICAgbWFyZ2luLXRvcDogNXJlbTtcbiAgfVxuICAuaGVhZGVyX19vcHRpb25zID4gLm1hdGVyaWFsLWljb25zOm50aC1jaGlsZCgxKSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuaGVhZGVyX19vcHRpb25zID4gLm1hdGVyaWFsLWljb25zIHtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gIH1cbiAgLm1vdmllX19iYW5uZXJJbWcge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gIH1cbiAgLmJhbm5lcl9fY29udGVudCB7XG4gICAgdG9wOiAyMHZoO1xuICAgIG1hcmdpbi1sZWZ0OiA1dnc7XG4gICAgbWFyZ2luLXJpZ2h0OiA1dnc7XG4gICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG4gIHlvdXR1YmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLyogTWFpbiBQYWdlKi9cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMjhweCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAzMnB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMjZweCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAzMnB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgaDMge1xuICAgIGZvbnQtc2l6ZTogMjRweCAhaW1wb3J0YW50O1xuICB9XG4gIC5tZW1iZXJzaGlwX19idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMjJweCAhaW1wb3J0YW50O1xuICB9XG4gIC5tZW1iZXJzaGlwX19pbnB1dCB7XG4gICAgd2lkdGg6IDUwdncgIWltcG9ydGFudDtcbiAgICBtaW4td2lkdGg6IDUwdncgIWltcG9ydGFudDtcbiAgfVxuICAubWFpblBhZ2VfX2NvbnRlbnQge1xuICAgIHBhZGRpbmc6IDV2dyAhaW1wb3J0YW50O1xuICB9XG4gIC5yb3dDb21wb25lbnRfX2ltYWdlID4gaW1nIHtcbiAgICBoZWlnaHQ6IDI3MHB4O1xuICAgIG1heC1oZWlnaHQ6IDM3MHB4O1xuICAgIG1heC13aWR0aDogMzkwcHg7XG4gIH1cbiAgLnJvd0NvbXBvbmVudCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNXZ3ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnJvd0NvbXBvbmVudF9fZXh0cmFDb250YWluZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLyogS0VZRlJBTUVTIEFOSU1BVElPTlMgKi9cbkBrZXlmcmFtZXMgcm90YXRlRWxlbWVudCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDAsIC00NWRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAxMzVkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGRpc3BsYXlPcHRpb25zIHtcbiAgMCUge1xuICAgIHRvcDogMTAwdmg7XG4gIH1cbiAgMTAwJSB7XG4gICAgdG9wOiA4dmg7XG4gIH1cbn1cbiJdfQ== */"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_3__["select"])()
], BannerComponent.prototype, "activeModal", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'banner',
                templateUrl: './banner.component.html',
                styleUrls: ['./banner.component.css', '../responsive.styles.css'],
            }]
    }], function () { return [{ type: src_app_services_fetch_films_service__WEBPACK_IMPORTED_MODULE_7__["FetchFilmsService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] }, { type: _angular_redux_store__WEBPACK_IMPORTED_MODULE_3__["NgRedux"] }]; }, { activeModal: [] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/banner/banner.component */ "XRsc");
/* harmony import */ var _components_row_row_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/row/row.component */ "bQCb");
/* harmony import */ var _components_movie_movie_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/movie/movie.component */ "qO9b");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular-redux/store */ "Usal");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _credentials__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./credentials */ "Hmo7");
/* harmony import */ var _reducers_modal_state__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./reducers/modal.state */ "p0rS");
/* harmony import */ var _components_youtube_youtube_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/youtube/youtube.component */ "pTb4");
/* harmony import */ var ngx_youtube_player__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-youtube-player */ "B1r6");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/main-page/main-page.component */ "oaKM");
/* harmony import */ var _components_home_row_home_row_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/home-row/home-row.component */ "CDob");
/* harmony import */ var _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/sign-in/sign-in.component */ "UR1+");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






























class AppModule {
    constructor(ngRedux) {
        ngRedux.configureStore(_reducers_modal_state__WEBPACK_IMPORTED_MODULE_16__["rootReducer"], _reducers_modal_state__WEBPACK_IMPORTED_MODULE_16__["INITIAL_STATE"]);
    }
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_redux_store__WEBPACK_IMPORTED_MODULE_12__["NgRedux"])); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
            _angular_redux_store__WEBPACK_IMPORTED_MODULE_12__["NgReduxModule"],
            ngx_youtube_player__WEBPACK_IMPORTED_MODULE_18__["NgxYoutubePlayerModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_24__["FormsModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_13__["AngularFireModule"].initializeApp(_credentials__WEBPACK_IMPORTED_MODULE_15__["default"]),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__["AngularFireAuthModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_24__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
        _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_8__["BannerComponent"],
        _components_row_row_component__WEBPACK_IMPORTED_MODULE_9__["RowComponent"],
        _components_movie_movie_component__WEBPACK_IMPORTED_MODULE_10__["MovieComponent"],
        _components_youtube_youtube_component__WEBPACK_IMPORTED_MODULE_17__["YoutubeComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_19__["HomeComponent"],
        _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_20__["MainPageComponent"],
        _components_home_row_home_row_component__WEBPACK_IMPORTED_MODULE_21__["HomeRowComponent"],
        _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_22__["SignInComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_23__["FooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
        _angular_redux_store__WEBPACK_IMPORTED_MODULE_12__["NgReduxModule"], ngx_youtube_player__WEBPACK_IMPORTED_MODULE_18__["NgxYoutubePlayerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_24__["FormsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_13__["AngularFireModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__["AngularFireAuthModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_24__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                    _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_8__["BannerComponent"],
                    _components_row_row_component__WEBPACK_IMPORTED_MODULE_9__["RowComponent"],
                    _components_movie_movie_component__WEBPACK_IMPORTED_MODULE_10__["MovieComponent"],
                    _components_youtube_youtube_component__WEBPACK_IMPORTED_MODULE_17__["YoutubeComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_19__["HomeComponent"],
                    _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_20__["MainPageComponent"],
                    _components_home_row_home_row_component__WEBPACK_IMPORTED_MODULE_21__["HomeRowComponent"],
                    _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_22__["SignInComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_23__["FooterComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
                    _angular_redux_store__WEBPACK_IMPORTED_MODULE_12__["NgReduxModule"],
                    ngx_youtube_player__WEBPACK_IMPORTED_MODULE_18__["NgxYoutubePlayerModule"].forRoot(),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_24__["FormsModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_13__["AngularFireModule"].initializeApp(_credentials__WEBPACK_IMPORTED_MODULE_15__["default"]),
                    _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__["AngularFireAuthModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_24__["ReactiveFormsModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], function () { return [{ type: _angular_redux_store__WEBPACK_IMPORTED_MODULE_12__["NgRedux"] }]; }, null); })();


/***/ }),

/***/ "bQCb":
/*!*************************************************!*\
  !*** ./src/app/components/row/row.component.ts ***!
  \*************************************************/
/*! exports provided: RowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RowComponent", function() { return RowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _movie_movie_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../movie/movie.component */ "qO9b");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular-redux/store */ "Usal");
/* harmony import */ var src_app_actions_modal_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/actions/modal.actions */ "xX7k");
/* harmony import */ var src_app_services_fetch_films_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/fetch-films.service */ "60kU");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");










const _c0 = ["rowPosters"];
function RowComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RowComponent_div_0_div_4_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r4.rotateCarrousel(70); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " keyboard_arrow_left ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RowComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RowComponent_div_0_div_7_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const film_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r7.openDialog(film_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const film_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "https://image.tmdb.org/t/p/original/", film_r6.backdrop_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function RowComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, RowComponent_div_0_div_4_Template, 3, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, RowComponent_div_0_div_7_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RowComponent_div_0_Template_div_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.rotateCarrousel(-70); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " keyboard_arrow_right ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.rotationX);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.movieList);
} }
class RowComponent {
    constructor(_http, dialog, ngRedux) {
        this._http = _http;
        this.dialog = dialog;
        this.ngRedux = ngRedux;
        this.rotationX = 0;
        this.activeModal.subscribe((current) => (this.currentModalState = current));
    }
    rotateCarrousel(direction) {
        if (this.rotationX + direction < 0 && this.rotationX + direction >= -210) {
            const valTranslate = this.rotationX + direction;
            this.el.nativeElement.style.transform = `translateX(${valTranslate}vw)`;
            this.el.nativeElement.style.transition = '1.4s';
            this.rotationX = valTranslate;
        }
        else {
            const valTranslate = 0;
            this.el.nativeElement.style.transform = `translateX(${valTranslate}vw)`;
            this.el.nativeElement.style.transition = '1.4s';
            this.rotationX = valTranslate;
        }
    }
    ngOnInit() {
        this._http.getFilm(this.url).subscribe((films) => {
            return (this.movieList = films.results);
        });
    }
    openDialog(film) {
        const dialogRef = this.dialog.open(_movie_movie_component__WEBPACK_IMPORTED_MODULE_2__["MovieComponent"]);
        const instance = dialogRef.componentInstance;
        instance.film = film;
        this.ngRedux.dispatch({
            type: src_app_actions_modal_actions__WEBPACK_IMPORTED_MODULE_4__["SET_STATUS"],
            status: !this.currentModalState,
        });
        dialogRef.afterClosed().subscribe((_) => {
            this.ngRedux.dispatch({
                type: src_app_actions_modal_actions__WEBPACK_IMPORTED_MODULE_4__["SET_STATUS"],
                status: !this.currentModalState,
            });
        });
    }
}
RowComponent.ɵfac = function RowComponent_Factory(t) { return new (t || RowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_fetch_films_service__WEBPACK_IMPORTED_MODULE_5__["FetchFilmsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_redux_store__WEBPACK_IMPORTED_MODULE_3__["NgRedux"])); };
RowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RowComponent, selectors: [["row"]], viewQuery: function RowComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.el = _t.first);
    } }, inputs: { url: "url", title: "title" }, decls: 1, vars: 1, consts: [["class", "row", 4, "ngIf"], [1, "row"], [1, "row__title"], [1, "row__posters"], ["class", "row__back", 3, "click", 4, "ngIf"], [1, "row__filmPoster"], ["rowPosters", ""], ["class", "row__filmMovie", 4, "ngFor", "ngForOf"], [1, "row__next", 3, "click"], [1, "material-icons"], [1, "row__back", 3, "click"], [1, "row__filmMovie"], ["alt", "", 1, "row__film", 3, "src", "click"]], template: function RowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, RowComponent_div_0_Template, 11, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.movieList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], styles: ["[_nghost-%COMP%] {\n  z-index: 100;\n}\n.row[_ngcontent-%COMP%] {\n  margin-left: 1.25rem;\n  height: 212px;\n  top: 600px;\n  bottom: -1px;\n  margin-top: 3rem;\n  width: 99%;\n}\n.row__posters[_ngcontent-%COMP%] {\n  display: flex;\n  position: relative;\n  align-items: center;\n  justify-content: center;\n  overflow-x: scroll;\n  overflow-y: hidden;\n}\n.row__filmPoster[_ngcontent-%COMP%] {\n  display: flex;\n  position: relative;\n  padding: 1.25rem;\n  width: 100%;\n  margin-right: 1.25rem;\n}\n.row__posters[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.row__title[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 1.8rem;\n  text-transform: uppercase;\n  font-weight: 700;\n}\n.row__back[_ngcontent-%COMP%] {\n  max-height: 8.9125rem;\n  width: 50px;\n  z-index: 90;\n  position: absolute;\n  left: 0px;\n  height: 8.9125rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0.7;\n  cursor: pointer;\n  background: #111;\n  top: 19.5px;\n}\n.row__next[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  max-height: 8.9125rem;\n  width: 50px;\n  cursor: pointer;\n  background: #111;\n  opacity: 0.7;\n  z-index: 90;\n  position: absolute;\n  right: 0;\n  top: 19.5px;\n  height: 8.9125rem;\n}\n.row__next[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], .row__back[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-size: 50px;\n  color: #fff;\n  transition: 0.5s;\n}\n.row__next[_ngcontent-%COMP%]:hover    > span[_ngcontent-%COMP%], .row__back[_ngcontent-%COMP%]:hover    > span[_ngcontent-%COMP%] {\n  transform: scale(1.5);\n  transition: 0.5s;\n}\n.row__filmMovie[_ngcontent-%COMP%] {\n  \n  margin-right: 10px;\n}\n.row__film[_ngcontent-%COMP%] {\n  border-radius: 0.25rem;\n  object-fit: contain;\n  max-height: 8.9125rem;\n  transition: transform 450ms;\n  margin-right: 0.625rem;\n}\n.row__film[_ngcontent-%COMP%]:hover {\n  transform: scale(1.08);\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yb3cvcm93LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsVUFBVTtFQUNWLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjtBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25CO0FBQ0E7O0VBRUUsZUFBZTtFQUNmLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQiwyQkFBMkI7RUFDM0Isc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcm93L3Jvdy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICB6LWluZGV4OiAxMDA7XG59XG4ucm93IHtcbiAgbWFyZ2luLWxlZnQ6IDEuMjVyZW07XG4gIGhlaWdodDogMjEycHg7XG4gIHRvcDogNjAwcHg7XG4gIGJvdHRvbTogLTFweDtcbiAgbWFyZ2luLXRvcDogM3JlbTtcbiAgd2lkdGg6IDk5JTtcbn1cbi5yb3dfX3Bvc3RlcnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cbi5yb3dfX2ZpbG1Qb3N0ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDEuMjVyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tcmlnaHQ6IDEuMjVyZW07XG59XG4ucm93X19wb3N0ZXJzOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5yb3dfX3RpdGxlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4ucm93X19iYWNrIHtcbiAgbWF4LWhlaWdodDogOC45MTI1cmVtO1xuICB3aWR0aDogNTBweDtcbiAgei1pbmRleDogOTA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMHB4O1xuICBoZWlnaHQ6IDguOTEyNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG9wYWNpdHk6IDAuNztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiAjMTExO1xuICB0b3A6IDE5LjVweDtcbn1cblxuLnJvd19fbmV4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXgtaGVpZ2h0OiA4LjkxMjVyZW07XG4gIHdpZHRoOiA1MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6ICMxMTE7XG4gIG9wYWNpdHk6IDAuNztcbiAgei1pbmRleDogOTA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMTkuNXB4O1xuICBoZWlnaHQ6IDguOTEyNXJlbTtcbn1cbi5yb3dfX25leHQgPiBzcGFuLFxuLnJvd19fYmFjayA+IHNwYW4ge1xuICBmb250LXNpemU6IDUwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuLnJvd19fbmV4dDpob3ZlciA+IHNwYW4sXG4ucm93X19iYWNrOmhvdmVyID4gc3BhbiB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLnJvd19fZmlsbU1vdmllIHtcbiAgLyogYmFja2dyb3VuZDogIzE5MTkxOTsgKi9cbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4ucm93X19maWxtIHtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgbWF4LWhlaWdodDogOC45MTI1cmVtO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNDUwbXM7XG4gIG1hcmdpbi1yaWdodDogMC42MjVyZW07XG59XG5cbi5yb3dfX2ZpbG06aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDgpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXX0= */", "@media (max-width: 800px) {\n  .body[_ngcontent-%COMP%] {\n    overflow-y: scroll;\n  }\n  .banner__buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .header__moreOptions[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .header[_ngcontent-%COMP%] {\n    justify-content: space-around;\n  }\n  .header__options[_ngcontent-%COMP%], .header__navigation[_ngcontent-%COMP%] {\n    display: none;\n    transition: 0.5s;\n  }\n  .row__back[_ngcontent-%COMP%], .row__next[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .moreOptions[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    height: 100vh;\n    top: 8vh;\n    bottom: -5vh;\n    left: 0;\n    padding: 20px;\n    right: 0;\n    width: 100%;\n    border-radius: 10px;\n    justify-content: space-evenly;\n    align-items: center;\n    opacity: 0.4;\n    animation: displayOptions 0.5s ease-in-out forwards;\n    background: #151515;\n    opacity: 1;\n  }\n  .banner__contentDescription[_ngcontent-%COMP%] {\n    width: 20ch;\n  }\n  .rotateMoreOption[_ngcontent-%COMP%] {\n    animation: rotateElement 0.3s ease-in-out forwards;\n    transition: cubic-bezier(0.075, 0.82, 0.165, 1);\n  }\n  .row[_ngcontent-%COMP%] {\n    margin-top: 5rem;\n  }\n  .header__options[_ngcontent-%COMP%]    > .material-icons[_ngcontent-%COMP%]:nth-child(1) {\n    display: none;\n  }\n  .header__options[_ngcontent-%COMP%]    > .material-icons[_ngcontent-%COMP%] {\n    font-size: 50px;\n  }\n  .movie__bannerImg[_ngcontent-%COMP%] {\n    max-width: 100%;\n    object-fit: cover;\n    height: inherit;\n  }\n  .banner__content[_ngcontent-%COMP%] {\n    top: 20vh;\n    margin-left: 5vw;\n    margin-right: 5vw;\n    max-width: 300px;\n    padding: 10px;\n  }\n  youtube[_ngcontent-%COMP%] {\n    display: none;\n  }\n  \n  h1[_ngcontent-%COMP%] {\n    font-size: 28px !important;\n    line-height: 32px !important;\n  }\n  h2[_ngcontent-%COMP%] {\n    font-size: 26px !important;\n    line-height: 32px !important;\n  }\n  h3[_ngcontent-%COMP%] {\n    font-size: 24px !important;\n  }\n  .membership__button[_ngcontent-%COMP%] {\n    font-size: 22px !important;\n  }\n  .membership__input[_ngcontent-%COMP%] {\n    width: 50vw !important;\n    min-width: 50vw !important;\n  }\n  .mainPage__content[_ngcontent-%COMP%] {\n    padding: 5vw !important;\n  }\n  .rowComponent__image[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    height: 270px;\n    max-height: 370px;\n    max-width: 390px;\n  }\n  .rowComponent[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n    padding: 5vw !important;\n  }\n  .rowComponent__extraContainer[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n\n\n@keyframes rotateElement {\n  0% {\n    transform: rotate3d(0, 0, 0, -45deg);\n  }\n  100% {\n    transform: rotate3d(0, 0, 1, 135deg);\n  }\n}\n\n@keyframes displayOptions {\n  0% {\n    top: 100vh;\n  }\n  100% {\n    top: 8vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXNwb25zaXZlLnN0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0Usc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSw2QkFBNkI7RUFDL0I7RUFDQTs7SUFFRSxhQUFhO0lBQ2IsZ0JBQWdCO0VBQ2xCO0VBQ0E7O0lBRUUsYUFBYTtFQUNmO0VBQ0E7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsUUFBUTtJQUNSLFlBQVk7SUFDWixPQUFPO0lBQ1AsYUFBYTtJQUNiLFFBQVE7SUFDUixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLG1EQUFtRDtJQUNuRCxtQkFBbUI7SUFDbkIsVUFBVTtFQUNaO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLGtEQUFrRDtJQUNsRCwrQ0FBK0M7RUFDakQ7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGVBQWU7RUFDakI7RUFDQTtJQUNFLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixhQUFhO0VBQ2Y7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBLGFBQWE7RUFDYjtJQUNFLDBCQUEwQjtJQUMxQiw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLDBCQUEwQjtJQUMxQiw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUEseUJBQXlCOztBQUN6QjtFQUNFO0lBQ0Usb0NBQW9DO0VBQ3RDO0VBQ0E7SUFDRSxvQ0FBb0M7RUFDdEM7QUFDRjs7QUFDQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxRQUFRO0VBQ1Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzcG9uc2l2ZS5zdHlsZXMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5ib2R5IHtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIH1cbiAgLmJhbm5lcl9fYnV0dG9ucyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAuaGVhZGVyX19tb3JlT3B0aW9ucyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLmhlYWRlciB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIH1cbiAgLmhlYWRlcl9fb3B0aW9ucyxcbiAgLmhlYWRlcl9fbmF2aWdhdGlvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICB9XG4gIC5yb3dfX2JhY2ssXG4gIC5yb3dfX25leHQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLm1vcmVPcHRpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgdG9wOiA4dmg7XG4gICAgYm90dG9tOiAtNXZoO1xuICAgIGxlZnQ6IDA7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgb3BhY2l0eTogMC40O1xuICAgIGFuaW1hdGlvbjogZGlzcGxheU9wdGlvbnMgMC41cyBlYXNlLWluLW91dCBmb3J3YXJkcztcbiAgICBiYWNrZ3JvdW5kOiAjMTUxNTE1O1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgLmJhbm5lcl9fY29udGVudERlc2NyaXB0aW9uIHtcbiAgICB3aWR0aDogMjBjaDtcbiAgfVxuICAucm90YXRlTW9yZU9wdGlvbiB7XG4gICAgYW5pbWF0aW9uOiByb3RhdGVFbGVtZW50IDAuM3MgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XG4gICAgdHJhbnNpdGlvbjogY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSk7XG4gIH1cbiAgLnJvdyB7XG4gICAgbWFyZ2luLXRvcDogNXJlbTtcbiAgfVxuICAuaGVhZGVyX19vcHRpb25zID4gLm1hdGVyaWFsLWljb25zOm50aC1jaGlsZCgxKSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuaGVhZGVyX19vcHRpb25zID4gLm1hdGVyaWFsLWljb25zIHtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gIH1cbiAgLm1vdmllX19iYW5uZXJJbWcge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gIH1cbiAgLmJhbm5lcl9fY29udGVudCB7XG4gICAgdG9wOiAyMHZoO1xuICAgIG1hcmdpbi1sZWZ0OiA1dnc7XG4gICAgbWFyZ2luLXJpZ2h0OiA1dnc7XG4gICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG4gIHlvdXR1YmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLyogTWFpbiBQYWdlKi9cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMjhweCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAzMnB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMjZweCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAzMnB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgaDMge1xuICAgIGZvbnQtc2l6ZTogMjRweCAhaW1wb3J0YW50O1xuICB9XG4gIC5tZW1iZXJzaGlwX19idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMjJweCAhaW1wb3J0YW50O1xuICB9XG4gIC5tZW1iZXJzaGlwX19pbnB1dCB7XG4gICAgd2lkdGg6IDUwdncgIWltcG9ydGFudDtcbiAgICBtaW4td2lkdGg6IDUwdncgIWltcG9ydGFudDtcbiAgfVxuICAubWFpblBhZ2VfX2NvbnRlbnQge1xuICAgIHBhZGRpbmc6IDV2dyAhaW1wb3J0YW50O1xuICB9XG4gIC5yb3dDb21wb25lbnRfX2ltYWdlID4gaW1nIHtcbiAgICBoZWlnaHQ6IDI3MHB4O1xuICAgIG1heC1oZWlnaHQ6IDM3MHB4O1xuICAgIG1heC13aWR0aDogMzkwcHg7XG4gIH1cbiAgLnJvd0NvbXBvbmVudCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNXZ3ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnJvd0NvbXBvbmVudF9fZXh0cmFDb250YWluZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLyogS0VZRlJBTUVTIEFOSU1BVElPTlMgKi9cbkBrZXlmcmFtZXMgcm90YXRlRWxlbWVudCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDAsIC00NWRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAxMzVkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGRpc3BsYXlPcHRpb25zIHtcbiAgMCUge1xuICAgIHRvcDogMTAwdmg7XG4gIH1cbiAgMTAwJSB7XG4gICAgdG9wOiA4dmg7XG4gIH1cbn1cbiJdfQ== */"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_3__["select"])()
], RowComponent.prototype, "activeModal", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'row',
                templateUrl: './row.component.html',
                styleUrls: ['./row.component.css', '../responsive.styles.css'],
            }]
    }], function () { return [{ type: src_app_services_fetch_films_service__WEBPACK_IMPORTED_MODULE_5__["FetchFilmsService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }, { type: _angular_redux_store__WEBPACK_IMPORTED_MODULE_3__["NgRedux"] }]; }, { url: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], activeModal: [], el: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['rowPosters']
        }] }); })();


/***/ }),

/***/ "j6J2":
/*!**************************!*\
  !*** ./src/app/utils.js ***!
  \**************************/
/*! exports provided: default, getGenre */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGenre", function() { return getGenre; });
const truncateString = (str, num) => {
  return str.length < num ? str : str.slice(0, num) + "...";
};
/* harmony default export */ __webpack_exports__["default"] = (truncateString);

const getGenre = (search) => {
  return genres.filter((genre) => genre.id === search)[0].name;
};
const genres = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];


/***/ }),

/***/ "oaKM":
/*!*************************************************************!*\
  !*** ./src/app/components/main-page/main-page.component.ts ***!
  \*************************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _mainComponentRowInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../mainComponentRowInfo */ "M87+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _home_row_home_row_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../home-row/home-row.component */ "CDob");






function MainPageComponent_home_row_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "home-row", 14);
} if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", data_r1);
} }
class MainPageComponent {
    constructor() { }
    ngOnInit() {
        this.jsonData = _mainComponentRowInfo__WEBPACK_IMPORTED_MODULE_1__["default"];
    }
}
MainPageComponent.ɵfac = function MainPageComponent_Factory(t) { return new (t || MainPageComponent)(); };
MainPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainPageComponent, selectors: [["ng-component"]], decls: 23, vars: 1, consts: [[1, "mainPage"], [1, "mainPage__back"], ["src", "https://assets.nflxext.com/ffe/siteui/vlv3/bcd713c9-291e-4186-a275-117b387eaaf2/e2c6df78-a9bf-4cc1-903f-f84cf97c3f57/CZ-en-20201019-popsignuptwoweeks-perspective_alpha_website_small.jpg", "srcset", "\n        https://assets.nflxext.com/ffe/siteui/vlv3/bcd713c9-291e-4186-a275-117b387eaaf2/e2c6df78-a9bf-4cc1-903f-f84cf97c3f57/CZ-en-20201019-popsignuptwoweeks-perspective_alpha_website_small.jpg  1000w,\n        https://assets.nflxext.com/ffe/siteui/vlv3/bcd713c9-291e-4186-a275-117b387eaaf2/e2c6df78-a9bf-4cc1-903f-f84cf97c3f57/CZ-en-20201019-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w,\n        https://assets.nflxext.com/ffe/siteui/vlv3/bcd713c9-291e-4186-a275-117b387eaaf2/e2c6df78-a9bf-4cc1-903f-f84cf97c3f57/CZ-en-20201019-popsignuptwoweeks-perspective_alpha_website_large.jpg  1800w\n      ", "alt", "", 1, "mainPage__background"], [1, "mainPage__header"], ["src", "assets/images/logo.png", "alt", "App Logo", 1, "mainPage__logo"], ["routerLink", "/signin", 1, "mainPage__signIn"], [1, "mainPage__content"], [1, "mainPage__title"], [1, "mainPage__membership"], [1, "membership__form"], ["type", "email", "name", "email", "id", "email", "placeholder", "Email address", 1, "membership__input"], [1, "membership__button"], [1, "material-icons", "membership__arrow"], [3, "data", 4, "ngFor", "ngForOf"], [3, "data"]], template: function MainPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Unlimited movies, TV shows, and more.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Watch anywhere. Cancel anytime.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Ready to watch? Enter your email to create or restart your membership. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Get Started ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " keyboard_arrow_right ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, MainPageComponent_home_row_22_Template, 1, 1, "home-row", 13);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.jsonData);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _home_row_home_row_component__WEBPACK_IMPORTED_MODULE_4__["HomeRowComponent"]], styles: [".mainPage[_ngcontent-%COMP%] {\n  height: 90vh;\n  width: 100%;\n}\n.mainPage__back[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0%;\n  left: 0;\n  z-index: -1;\n}\n.mainPage__background[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 90vh;\n  object-fit: cover;\n}\n.mainPage__header[_ngcontent-%COMP%] {\n  z-index: 1;\n  height: 64px;\n  width: 100%;\n  padding: 20px 0 0 0;\n  max-width: 1920px;\n  position: relative;\n  font-size: 16px;\n  line-height: 17px;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n}\n.mainPage__logo[_ngcontent-%COMP%] {\n  height: 50px;\n  padding: 8px 0 0 0;\n  overflow: hidden;\n  object-fit: contain;\n}\n.mainPage__signIn[_ngcontent-%COMP%] {\n  font-size: 16px;\n  background-color: #e50914;\n  margin: 8px 0 0 0;\n  color: #fff;\n  padding: 7px 17px 7px 17px;\n  border-radius: 3px;\n  border: none;\n  text-decoration: none;\n}\n.mainPage__content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  height: 80vh;\n}\n.mainPage__title[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%] {\n  font-size: 51px;\n  line-height: 55px;\n  text-align: center;\n  color: #ffff;\n  max-width: 640px;\n  font-weight: 700;\n  word-spacing: 0;\n  font-family: \"Helvetica Neue\";\n}\n.mainPage__title[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 27px;\n  text-align: center;\n  word-spacing: 0;\n}\n.mainPage__membership[_ngcontent-%COMP%] {\n  display: flex;\n  height: 113px;\n  flex-direction: column;\n  max-width: 950px;\n  margin-top: 3vh;\n  align-items: center;\n  justify-content: center;\n}\n.mainPage__membership[_ngcontent-%COMP%]    > h4[_ngcontent-%COMP%] {\n  font-size: 20px;\n  word-spacing: 0px;\n  color: #fff;\n}\n.membership__form[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.membership__input[_ngcontent-%COMP%] {\n  z-index: 1;\n  height: 60px;\n  width: 450px;\n  min-width: 450px;\n  font-size: 18px;\n  border: 1px solid #8c8c8c;\n  padding: 10px 10px 0 10px;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n  background: #fff;\n}\n.membership__button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  height: 60px;\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n  border: none;\n  background-color: #e50914;\n  font-size: 28px;\n  color: #fff;\n  padding: 8px 0 8px 12px;\n  min-height: auto;\n  min-width: auto;\n  cursor: pointer;\n  text-align: center;\n}\n.membership__arrow[_ngcontent-%COMP%] {\n  font-size: 35px;\n}\n.mainPage[_ngcontent-%COMP%]:after {\n  content: \"\";\n  top: 0;\n  position: absolute;\n  left: 0;\n  height: 90vh;\n  width: 100%;\n  overflow: hidden;\n  z-index: -1;\n  background: rgba(0, 0, 0, 0.4);\n  background-image: linear-gradient(\n    to top,\n    rgba(0, 0, 0, 0.8) 0,\n    rgba(0, 0, 0, 0) 60%,\n    rgba(0, 0, 0, 0.8) 100%\n  );\n  border-bottom: 8px solid #222;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluLXBhZ2UvbWFpbi1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE9BQU87RUFDUCxXQUFXO0FBQ2I7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsMkJBQTJCO0VBQzNCLDhCQUE4QjtFQUM5QixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsK0JBQStCO0VBQy9CLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsTUFBTTtFQUNOLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLDhCQUE4QjtFQUM5Qjs7Ozs7R0FLQztFQUNELDZCQUE2QjtBQUMvQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi1wYWdlL21haW4tcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5QYWdlIHtcbiAgaGVpZ2h0OiA5MHZoO1xuICB3aWR0aDogMTAwJTtcbn1cbi5tYWluUGFnZV9fYmFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwJTtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogLTE7XG59XG4ubWFpblBhZ2VfX2JhY2tncm91bmQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5MHZoO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi5tYWluUGFnZV9faGVhZGVyIHtcbiAgei1pbmRleDogMTtcbiAgaGVpZ2h0OiA2NHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMjBweCAwIDAgMDtcbiAgbWF4LXdpZHRoOiAxOTIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4ubWFpblBhZ2VfX2xvZ28ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBhZGRpbmc6IDhweCAwIDAgMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cbi5tYWluUGFnZV9fc2lnbkluIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTUwOTE0O1xuICBtYXJnaW46IDhweCAwIDAgMDtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDdweCAxN3B4IDdweCAxN3B4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ubWFpblBhZ2VfX2NvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiA4MHZoO1xufVxuXG4ubWFpblBhZ2VfX3RpdGxlID4gaDEge1xuICBmb250LXNpemU6IDUxcHg7XG4gIGxpbmUtaGVpZ2h0OiA1NXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmZjtcbiAgbWF4LXdpZHRoOiA2NDBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgd29yZC1zcGFjaW5nOiAwO1xuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiO1xufVxuLm1haW5QYWdlX190aXRsZSA+IGgzIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjdweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3b3JkLXNwYWNpbmc6IDA7XG59XG5cbi5tYWluUGFnZV9fbWVtYmVyc2hpcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTEzcHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1heC13aWR0aDogOTUwcHg7XG4gIG1hcmdpbi10b3A6IDN2aDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubWFpblBhZ2VfX21lbWJlcnNoaXAgPiBoNCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgd29yZC1zcGFjaW5nOiAwcHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuLm1lbWJlcnNoaXBfX2Zvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm1lbWJlcnNoaXBfX2lucHV0IHtcbiAgei1pbmRleDogMTtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogNDUwcHg7XG4gIG1pbi13aWR0aDogNDUwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzhjOGM4YztcbiAgcGFkZGluZzogMTBweCAxMHB4IDAgMTBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3B4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4ubWVtYmVyc2hpcF9fYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGhlaWdodDogNjBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTUwOTE0O1xuICBmb250LXNpemU6IDI4cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA4cHggMCA4cHggMTJweDtcbiAgbWluLWhlaWdodDogYXV0bztcbiAgbWluLXdpZHRoOiBhdXRvO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tZW1iZXJzaGlwX19hcnJvdyB7XG4gIGZvbnQtc2l6ZTogMzVweDtcbn1cblxuLm1haW5QYWdlOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgdG9wOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogOTB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHotaW5kZXg6IC0xO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICB0byB0b3AsXG4gICAgcmdiYSgwLCAwLCAwLCAwLjgpIDAsXG4gICAgcmdiYSgwLCAwLCAwLCAwKSA2MCUsXG4gICAgcmdiYSgwLCAwLCAwLCAwLjgpIDEwMCVcbiAgKTtcbiAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkICMyMjI7XG59XG4iXX0= */", "@media (max-width: 800px) {\n  .body[_ngcontent-%COMP%] {\n    overflow-y: scroll;\n  }\n  .banner__buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .header__moreOptions[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .header[_ngcontent-%COMP%] {\n    justify-content: space-around;\n  }\n  .header__options[_ngcontent-%COMP%], .header__navigation[_ngcontent-%COMP%] {\n    display: none;\n    transition: 0.5s;\n  }\n  .row__back[_ngcontent-%COMP%], .row__next[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .moreOptions[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    height: 100vh;\n    top: 8vh;\n    bottom: -5vh;\n    left: 0;\n    padding: 20px;\n    right: 0;\n    width: 100%;\n    border-radius: 10px;\n    justify-content: space-evenly;\n    align-items: center;\n    opacity: 0.4;\n    animation: displayOptions 0.5s ease-in-out forwards;\n    background: #151515;\n    opacity: 1;\n  }\n  .banner__contentDescription[_ngcontent-%COMP%] {\n    width: 20ch;\n  }\n  .rotateMoreOption[_ngcontent-%COMP%] {\n    animation: rotateElement 0.3s ease-in-out forwards;\n    transition: cubic-bezier(0.075, 0.82, 0.165, 1);\n  }\n  .row[_ngcontent-%COMP%] {\n    margin-top: 5rem;\n  }\n  .header__options[_ngcontent-%COMP%]    > .material-icons[_ngcontent-%COMP%]:nth-child(1) {\n    display: none;\n  }\n  .header__options[_ngcontent-%COMP%]    > .material-icons[_ngcontent-%COMP%] {\n    font-size: 50px;\n  }\n  .movie__bannerImg[_ngcontent-%COMP%] {\n    max-width: 100%;\n    object-fit: cover;\n    height: inherit;\n  }\n  .banner__content[_ngcontent-%COMP%] {\n    top: 20vh;\n    margin-left: 5vw;\n    margin-right: 5vw;\n    max-width: 300px;\n    padding: 10px;\n  }\n  youtube[_ngcontent-%COMP%] {\n    display: none;\n  }\n  \n  h1[_ngcontent-%COMP%] {\n    font-size: 28px !important;\n    line-height: 32px !important;\n  }\n  h2[_ngcontent-%COMP%] {\n    font-size: 26px !important;\n    line-height: 32px !important;\n  }\n  h3[_ngcontent-%COMP%] {\n    font-size: 24px !important;\n  }\n  .membership__button[_ngcontent-%COMP%] {\n    font-size: 22px !important;\n  }\n  .membership__input[_ngcontent-%COMP%] {\n    width: 50vw !important;\n    min-width: 50vw !important;\n  }\n  .mainPage__content[_ngcontent-%COMP%] {\n    padding: 5vw !important;\n  }\n  .rowComponent__image[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    height: 270px;\n    max-height: 370px;\n    max-width: 390px;\n  }\n  .rowComponent[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n    padding: 5vw !important;\n  }\n  .rowComponent__extraContainer[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n\n\n@keyframes rotateElement {\n  0% {\n    transform: rotate3d(0, 0, 0, -45deg);\n  }\n  100% {\n    transform: rotate3d(0, 0, 1, 135deg);\n  }\n}\n\n@keyframes displayOptions {\n  0% {\n    top: 100vh;\n  }\n  100% {\n    top: 8vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXNwb25zaXZlLnN0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0Usc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSw2QkFBNkI7RUFDL0I7RUFDQTs7SUFFRSxhQUFhO0lBQ2IsZ0JBQWdCO0VBQ2xCO0VBQ0E7O0lBRUUsYUFBYTtFQUNmO0VBQ0E7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsUUFBUTtJQUNSLFlBQVk7SUFDWixPQUFPO0lBQ1AsYUFBYTtJQUNiLFFBQVE7SUFDUixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLG1EQUFtRDtJQUNuRCxtQkFBbUI7SUFDbkIsVUFBVTtFQUNaO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLGtEQUFrRDtJQUNsRCwrQ0FBK0M7RUFDakQ7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGVBQWU7RUFDakI7RUFDQTtJQUNFLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixhQUFhO0VBQ2Y7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBLGFBQWE7RUFDYjtJQUNFLDBCQUEwQjtJQUMxQiw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLDBCQUEwQjtJQUMxQiw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUEseUJBQXlCOztBQUN6QjtFQUNFO0lBQ0Usb0NBQW9DO0VBQ3RDO0VBQ0E7SUFDRSxvQ0FBb0M7RUFDdEM7QUFDRjs7QUFDQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxRQUFRO0VBQ1Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzcG9uc2l2ZS5zdHlsZXMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5ib2R5IHtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIH1cbiAgLmJhbm5lcl9fYnV0dG9ucyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAuaGVhZGVyX19tb3JlT3B0aW9ucyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLmhlYWRlciB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIH1cbiAgLmhlYWRlcl9fb3B0aW9ucyxcbiAgLmhlYWRlcl9fbmF2aWdhdGlvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICB9XG4gIC5yb3dfX2JhY2ssXG4gIC5yb3dfX25leHQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLm1vcmVPcHRpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgdG9wOiA4dmg7XG4gICAgYm90dG9tOiAtNXZoO1xuICAgIGxlZnQ6IDA7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgb3BhY2l0eTogMC40O1xuICAgIGFuaW1hdGlvbjogZGlzcGxheU9wdGlvbnMgMC41cyBlYXNlLWluLW91dCBmb3J3YXJkcztcbiAgICBiYWNrZ3JvdW5kOiAjMTUxNTE1O1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgLmJhbm5lcl9fY29udGVudERlc2NyaXB0aW9uIHtcbiAgICB3aWR0aDogMjBjaDtcbiAgfVxuICAucm90YXRlTW9yZU9wdGlvbiB7XG4gICAgYW5pbWF0aW9uOiByb3RhdGVFbGVtZW50IDAuM3MgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XG4gICAgdHJhbnNpdGlvbjogY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSk7XG4gIH1cbiAgLnJvdyB7XG4gICAgbWFyZ2luLXRvcDogNXJlbTtcbiAgfVxuICAuaGVhZGVyX19vcHRpb25zID4gLm1hdGVyaWFsLWljb25zOm50aC1jaGlsZCgxKSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuaGVhZGVyX19vcHRpb25zID4gLm1hdGVyaWFsLWljb25zIHtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gIH1cbiAgLm1vdmllX19iYW5uZXJJbWcge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gIH1cbiAgLmJhbm5lcl9fY29udGVudCB7XG4gICAgdG9wOiAyMHZoO1xuICAgIG1hcmdpbi1sZWZ0OiA1dnc7XG4gICAgbWFyZ2luLXJpZ2h0OiA1dnc7XG4gICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG4gIHlvdXR1YmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLyogTWFpbiBQYWdlKi9cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMjhweCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAzMnB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMjZweCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAzMnB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgaDMge1xuICAgIGZvbnQtc2l6ZTogMjRweCAhaW1wb3J0YW50O1xuICB9XG4gIC5tZW1iZXJzaGlwX19idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMjJweCAhaW1wb3J0YW50O1xuICB9XG4gIC5tZW1iZXJzaGlwX19pbnB1dCB7XG4gICAgd2lkdGg6IDUwdncgIWltcG9ydGFudDtcbiAgICBtaW4td2lkdGg6IDUwdncgIWltcG9ydGFudDtcbiAgfVxuICAubWFpblBhZ2VfX2NvbnRlbnQge1xuICAgIHBhZGRpbmc6IDV2dyAhaW1wb3J0YW50O1xuICB9XG4gIC5yb3dDb21wb25lbnRfX2ltYWdlID4gaW1nIHtcbiAgICBoZWlnaHQ6IDI3MHB4O1xuICAgIG1heC1oZWlnaHQ6IDM3MHB4O1xuICAgIG1heC13aWR0aDogMzkwcHg7XG4gIH1cbiAgLnJvd0NvbXBvbmVudCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNXZ3ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnJvd0NvbXBvbmVudF9fZXh0cmFDb250YWluZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLyogS0VZRlJBTUVTIEFOSU1BVElPTlMgKi9cbkBrZXlmcmFtZXMgcm90YXRlRWxlbWVudCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDAsIC00NWRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAxMzVkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGRpc3BsYXlPcHRpb25zIHtcbiAgMCUge1xuICAgIHRvcDogMTAwdmg7XG4gIH1cbiAgMTAwJSB7XG4gICAgdG9wOiA4dmg7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './main-page.component.html',
                styleUrls: ['./main-page.component.css', '../responsive.styles.css'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "p0rS":
/*!*****************************************!*\
  !*** ./src/app/reducers/modal.state.ts ***!
  \*****************************************/
/*! exports provided: INITIAL_STATE, rootReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_STATE", function() { return INITIAL_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootReducer", function() { return rootReducer; });
/* harmony import */ var _actions_modal_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/modal.actions */ "xX7k");

const INITIAL_STATE = {
    activeModal: false,
    user: null,
};
function rootReducer(state, action) {
    switch (action.type) {
        case _actions_modal_actions__WEBPACK_IMPORTED_MODULE_0__["SET_STATUS"]:
            return Object.assign({}, state, Object.assign(Object.assign({}, state), { activeModal: action.status }));
        case 'SET_USER':
            return Object.assign({}, state, Object.assign(Object.assign({}, state), { user: action.user }));
    }
    return state;
}


/***/ }),

/***/ "pTb4":
/*!*********************************************************!*\
  !*** ./src/app/components/youtube/youtube.component.ts ***!
  \*********************************************************/
/*! exports provided: YoutubeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeComponent", function() { return YoutubeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_youtube_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-youtube-player */ "B1r6");



class YoutubeComponent {
    constructor() {
        this.status = true;
        this.playerVars = {
            cc_lang_pref: 'en',
            controls: 0,
            rel: 0,
            fs: 0,
            autoplay: 1,
            modestbranding: 1,
            showinfo: 0,
        };
        this.version = '...';
    }
    savePlayer(player) {
        this.player = player;
        this.player.playVideo();
    }
    ngAfterViewChecked() {
        //Called after every check of the component's view. Applies to components only.
        //Add 'implements AfterViewChecked' to the class.
        if (this.status)
            this.player.playVideo();
        this.status = false;
    }
    onStateChange(event) {
        if (event.data === 0) {
            const video = document.getElementById('youtube__video');
            video.style.display = 'none';
            const header = document.querySelector('.header');
            header[0].style.background = 'transparent';
        }
    }
    playVideo() {
        this.player.playVideo();
    }
    pauseVideo() {
        this.player.pauseVideo();
    }
}
YoutubeComponent.ɵfac = function YoutubeComponent_Factory(t) { return new (t || YoutubeComponent)(); };
YoutubeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: YoutubeComponent, selectors: [["youtube"]], inputs: { id: "id" }, decls: 2, vars: 2, consts: [["id", "youtube__video"], [3, "videoId", "playerVars", "ready", "change"]], template: function YoutubeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "youtube-player", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ready", function YoutubeComponent_Template_youtube_player_ready_1_listener($event) { return ctx.savePlayer($event); })("change", function YoutubeComponent_Template_youtube_player_change_1_listener($event) { return ctx.onStateChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("videoId", ctx.id)("playerVars", ctx.playerVars);
    } }, directives: [ngx_youtube_player__WEBPACK_IMPORTED_MODULE_1__["YoutubePlayerComponent"]], styles: ["#youtube__video[_ngcontent-%COMP%] {\n  width: 100vw !important;\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy95b3V0dWJlL3lvdXR1YmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3lvdXR1YmUveW91dHViZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3lvdXR1YmVfX3ZpZGVvIHtcbiAgd2lkdGg6IDEwMHZ3ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwdmg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](YoutubeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'youtube',
                templateUrl: './youtube.component.html',
                styleUrls: ['./youtube.component.css'],
            }]
    }], function () { return []; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "qO9b":
/*!*****************************************************!*\
  !*** ./src/app/components/movie/movie.component.ts ***!
  \*****************************************************/
/*! exports provided: MovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieComponent", function() { return MovieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "j6J2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");





function MovieComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "View first season now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Genders:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://image.tmdb.org/t/p/original/", ctx_r0.film.backdrop_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.truncate(ctx_r0.film.overview));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.getGenres(), " ");
} }
class MovieComponent {
    constructor() {
        this.truncate = (str) => {
            return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["default"])(str, 150);
        };
    }
    getGenres() {
        let genres = '';
        this.film.genre_ids.map((val) => (genres += Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getGenre"])(val) + ', '));
        const aux = genres.substr(0, genres.length - 2);
        return aux;
    }
    ngOnInit() { }
}
MovieComponent.ɵfac = function MovieComponent_Factory(t) { return new (t || MovieComponent)(); };
MovieComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MovieComponent, selectors: [["movie"]], inputs: { film: "film" }, decls: 1, vars: 1, consts: [["class", "movie", 4, "ngIf"], [1, "movie"], [1, "movie__banner"], ["alt", "", 1, "movie__bannerImg", 3, "src"], [1, "banner__fadeBottom"], [1, "movie__content"], [1, "movie__Left"], [1, "movie__right"]], template: function MovieComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MovieComponent_div_0_Template, 14, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.film);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".movie[_ngcontent-%COMP%] {\n  max-width: 850px;\n  overflow: hidden;\n}\n\n.movie__banner[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.movie__bannerImg[_ngcontent-%COMP%] {\n  object-fit: cover;\n  height: 30rem;\n}\n\n.movie__content[_ngcontent-%COMP%] {\n  background: #191919;\n  padding: 20px;\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding-top: 50px;\n}\n\n.movie__Left[_ngcontent-%COMP%] {\n  flex: 0.65;\n  color: #fff;\n}\n\n.movie__right[_ngcontent-%COMP%] {\n  flex: 0.3;\n  color: #fff;\n}\n\n.movie__Left[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 19.2px;\n  font-weight: 700;\n}\n\n.movie__Left[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  font-size: 19px;\n  line-height: 27px;\n  -webkit-text-decoration: none solid rgb(255, 255, 255);\n          text-decoration: none solid rgb(255, 255, 255);\n  word-spacing: 0px;\n  transition: all 0s ease 0s;\n  margin: 18px 0 9px 0;\n}\n\n.movie__right[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 20px;\n  color: #7777;\n}\n\n.banner__fadeBottom[_ngcontent-%COMP%] {\n  height: 100%;\n  z-index: 100;\n  position: relative;\n  width: 100%;\n  margin-top: -20px;\n  background-image: linear-gradient(\n    180deg,\n    transparent,\n    rgba(37, 37, 37, 0.61),\n    #111\n  );\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZS9tb3ZpZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsOEJBQThCO0VBQzlCLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxTQUFTO0VBQ1QsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHNEQUE4QztVQUE5Qyw4Q0FBOEM7RUFDOUMsaUJBQWlCO0VBQ2pCLDBCQUEwQjtFQUMxQixvQkFBb0I7QUFDdEI7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakI7Ozs7O0dBS0M7QUFDSCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW92aWUvbW92aWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb3ZpZSB7XG4gIG1heC13aWR0aDogODUwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5tb3ZpZV9fYmFubmVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubW92aWVfX2Jhbm5lckltZyB7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBoZWlnaHQ6IDMwcmVtO1xufVxuLm1vdmllX19jb250ZW50IHtcbiAgYmFja2dyb3VuZDogIzE5MTkxOTtcbiAgcGFkZGluZzogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG59XG4ubW92aWVfX0xlZnQge1xuICBmbGV4OiAwLjY1O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5tb3ZpZV9fcmlnaHQge1xuICBmbGV4OiAwLjM7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubW92aWVfX0xlZnQgPiBoMyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDE5LjJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5tb3ZpZV9fTGVmdCA+IHAge1xuICBmb250LXNpemU6IDE5cHg7XG4gIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xuICB3b3JkLXNwYWNpbmc6IDBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDBzIGVhc2UgMHM7XG4gIG1hcmdpbjogMThweCAwIDlweCAwO1xufVxuLm1vdmllX19yaWdodCA+IHNwYW4ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBjb2xvcjogIzc3Nzc7XG59XG4uYmFubmVyX19mYWRlQm90dG9tIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAxMDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgMTgwZGVnLFxuICAgIHRyYW5zcGFyZW50LFxuICAgIHJnYmEoMzcsIDM3LCAzNywgMC42MSksXG4gICAgIzExMVxuICApO1xufVxuIl19 */", "@media (max-width: 800px) {\n  .body[_ngcontent-%COMP%] {\n    overflow-y: scroll;\n  }\n  .banner__buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .header__moreOptions[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .header[_ngcontent-%COMP%] {\n    justify-content: space-around;\n  }\n  .header__options[_ngcontent-%COMP%], .header__navigation[_ngcontent-%COMP%] {\n    display: none;\n    transition: 0.5s;\n  }\n  .row__back[_ngcontent-%COMP%], .row__next[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .moreOptions[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    height: 100vh;\n    top: 8vh;\n    bottom: -5vh;\n    left: 0;\n    padding: 20px;\n    right: 0;\n    width: 100%;\n    border-radius: 10px;\n    justify-content: space-evenly;\n    align-items: center;\n    opacity: 0.4;\n    animation: displayOptions 0.5s ease-in-out forwards;\n    background: #151515;\n    opacity: 1;\n  }\n  .banner__contentDescription[_ngcontent-%COMP%] {\n    width: 20ch;\n  }\n  .rotateMoreOption[_ngcontent-%COMP%] {\n    animation: rotateElement 0.3s ease-in-out forwards;\n    transition: cubic-bezier(0.075, 0.82, 0.165, 1);\n  }\n  .row[_ngcontent-%COMP%] {\n    margin-top: 5rem;\n  }\n  .header__options[_ngcontent-%COMP%]    > .material-icons[_ngcontent-%COMP%]:nth-child(1) {\n    display: none;\n  }\n  .header__options[_ngcontent-%COMP%]    > .material-icons[_ngcontent-%COMP%] {\n    font-size: 50px;\n  }\n  .movie__bannerImg[_ngcontent-%COMP%] {\n    max-width: 100%;\n    object-fit: cover;\n    height: inherit;\n  }\n  .banner__content[_ngcontent-%COMP%] {\n    top: 20vh;\n    margin-left: 5vw;\n    margin-right: 5vw;\n    max-width: 300px;\n    padding: 10px;\n  }\n  youtube[_ngcontent-%COMP%] {\n    display: none;\n  }\n  \n  h1[_ngcontent-%COMP%] {\n    font-size: 28px !important;\n    line-height: 32px !important;\n  }\n  h2[_ngcontent-%COMP%] {\n    font-size: 26px !important;\n    line-height: 32px !important;\n  }\n  h3[_ngcontent-%COMP%] {\n    font-size: 24px !important;\n  }\n  .membership__button[_ngcontent-%COMP%] {\n    font-size: 22px !important;\n  }\n  .membership__input[_ngcontent-%COMP%] {\n    width: 50vw !important;\n    min-width: 50vw !important;\n  }\n  .mainPage__content[_ngcontent-%COMP%] {\n    padding: 5vw !important;\n  }\n  .rowComponent__image[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    height: 270px;\n    max-height: 370px;\n    max-width: 390px;\n  }\n  .rowComponent[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n    padding: 5vw !important;\n  }\n  .rowComponent__extraContainer[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n\n\n@keyframes rotateElement {\n  0% {\n    transform: rotate3d(0, 0, 0, -45deg);\n  }\n  100% {\n    transform: rotate3d(0, 0, 1, 135deg);\n  }\n}\n\n@keyframes displayOptions {\n  0% {\n    top: 100vh;\n  }\n  100% {\n    top: 8vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXNwb25zaXZlLnN0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0Usc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSw2QkFBNkI7RUFDL0I7RUFDQTs7SUFFRSxhQUFhO0lBQ2IsZ0JBQWdCO0VBQ2xCO0VBQ0E7O0lBRUUsYUFBYTtFQUNmO0VBQ0E7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsUUFBUTtJQUNSLFlBQVk7SUFDWixPQUFPO0lBQ1AsYUFBYTtJQUNiLFFBQVE7SUFDUixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLG1EQUFtRDtJQUNuRCxtQkFBbUI7SUFDbkIsVUFBVTtFQUNaO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLGtEQUFrRDtJQUNsRCwrQ0FBK0M7RUFDakQ7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGVBQWU7RUFDakI7RUFDQTtJQUNFLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixhQUFhO0VBQ2Y7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBLGFBQWE7RUFDYjtJQUNFLDBCQUEwQjtJQUMxQiw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLDBCQUEwQjtJQUMxQiw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUEseUJBQXlCOztBQUN6QjtFQUNFO0lBQ0Usb0NBQW9DO0VBQ3RDO0VBQ0E7SUFDRSxvQ0FBb0M7RUFDdEM7QUFDRjs7QUFDQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxRQUFRO0VBQ1Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzcG9uc2l2ZS5zdHlsZXMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5ib2R5IHtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIH1cbiAgLmJhbm5lcl9fYnV0dG9ucyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAuaGVhZGVyX19tb3JlT3B0aW9ucyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLmhlYWRlciB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIH1cbiAgLmhlYWRlcl9fb3B0aW9ucyxcbiAgLmhlYWRlcl9fbmF2aWdhdGlvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICB9XG4gIC5yb3dfX2JhY2ssXG4gIC5yb3dfX25leHQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLm1vcmVPcHRpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgdG9wOiA4dmg7XG4gICAgYm90dG9tOiAtNXZoO1xuICAgIGxlZnQ6IDA7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgb3BhY2l0eTogMC40O1xuICAgIGFuaW1hdGlvbjogZGlzcGxheU9wdGlvbnMgMC41cyBlYXNlLWluLW91dCBmb3J3YXJkcztcbiAgICBiYWNrZ3JvdW5kOiAjMTUxNTE1O1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgLmJhbm5lcl9fY29udGVudERlc2NyaXB0aW9uIHtcbiAgICB3aWR0aDogMjBjaDtcbiAgfVxuICAucm90YXRlTW9yZU9wdGlvbiB7XG4gICAgYW5pbWF0aW9uOiByb3RhdGVFbGVtZW50IDAuM3MgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XG4gICAgdHJhbnNpdGlvbjogY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSk7XG4gIH1cbiAgLnJvdyB7XG4gICAgbWFyZ2luLXRvcDogNXJlbTtcbiAgfVxuICAuaGVhZGVyX19vcHRpb25zID4gLm1hdGVyaWFsLWljb25zOm50aC1jaGlsZCgxKSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuaGVhZGVyX19vcHRpb25zID4gLm1hdGVyaWFsLWljb25zIHtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gIH1cbiAgLm1vdmllX19iYW5uZXJJbWcge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gIH1cbiAgLmJhbm5lcl9fY29udGVudCB7XG4gICAgdG9wOiAyMHZoO1xuICAgIG1hcmdpbi1sZWZ0OiA1dnc7XG4gICAgbWFyZ2luLXJpZ2h0OiA1dnc7XG4gICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG4gIHlvdXR1YmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLyogTWFpbiBQYWdlKi9cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMjhweCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAzMnB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMjZweCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAzMnB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgaDMge1xuICAgIGZvbnQtc2l6ZTogMjRweCAhaW1wb3J0YW50O1xuICB9XG4gIC5tZW1iZXJzaGlwX19idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMjJweCAhaW1wb3J0YW50O1xuICB9XG4gIC5tZW1iZXJzaGlwX19pbnB1dCB7XG4gICAgd2lkdGg6IDUwdncgIWltcG9ydGFudDtcbiAgICBtaW4td2lkdGg6IDUwdncgIWltcG9ydGFudDtcbiAgfVxuICAubWFpblBhZ2VfX2NvbnRlbnQge1xuICAgIHBhZGRpbmc6IDV2dyAhaW1wb3J0YW50O1xuICB9XG4gIC5yb3dDb21wb25lbnRfX2ltYWdlID4gaW1nIHtcbiAgICBoZWlnaHQ6IDI3MHB4O1xuICAgIG1heC1oZWlnaHQ6IDM3MHB4O1xuICAgIG1heC13aWR0aDogMzkwcHg7XG4gIH1cbiAgLnJvd0NvbXBvbmVudCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNXZ3ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnJvd0NvbXBvbmVudF9fZXh0cmFDb250YWluZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLyogS0VZRlJBTUVTIEFOSU1BVElPTlMgKi9cbkBrZXlmcmFtZXMgcm90YXRlRWxlbWVudCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDAsIC00NWRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAxMzVkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGRpc3BsYXlPcHRpb25zIHtcbiAgMCUge1xuICAgIHRvcDogMTAwdmg7XG4gIH1cbiAgMTAwJSB7XG4gICAgdG9wOiA4dmg7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'movie',
                templateUrl: './movie.component.html',
                styleUrls: ['./movie.component.css', '../responsive.styles.css'],
            }]
    }], function () { return []; }, { film: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "qfBg":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "Jgta");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular-redux/store */ "Usal");







class UserService {
    constructor(auth, router, ngRedux) {
        this.auth = auth;
        this.router = router;
        this.ngRedux = ngRedux;
    }
    loginGoogle() {
        this.auth
            .signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_2__["default"].auth.GoogleAuthProvider())
            .then((data) => {
            this.ngRedux.dispatch({
                type: 'SET_USER',
                user: data.user,
            });
            this.router.navigate(['/home']);
        });
    }
    signInEmailAndPassword(json) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.auth
                .signInWithEmailAndPassword('igorej@hotmail.com', 'admin1234')
                .then((data) => {
                this.ngRedux.dispatch({
                    type: 'SET_USER',
                    user: data.user,
                });
                this.router.navigate(['/home']);
            })
                .catch((err) => {
                alert('Error with email and password');
            });
            //
        });
    }
    logout() {
        this.auth.signOut();
        this.user = null;
        this.router.navigate(['/']);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_redux_store__WEBPACK_IMPORTED_MODULE_5__["NgRedux"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_redux_store__WEBPACK_IMPORTED_MODULE_5__["NgRedux"] }]; }, null); })();


/***/ }),

/***/ "sB8F":
/*!*************************!*\
  !*** ./src/requests.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const API_KEY = "5ecc73b79478ec517848a64e6e2a6df1";

const requests = [
  {
    title: "Popular Movies",
    url: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  },
  {
    title: "Popular Series",
    url: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
  },
  {
    title: "Family",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
  },
  {
    title: "Documentaries",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  },
];
/* harmony default export */ __webpack_exports__["default"] = (requests);


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/main-page/main-page.component */ "oaKM");
/* harmony import */ var _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sign-in/sign-in.component */ "UR1+");







const routes = [
    { path: '', component: _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__["MainPageComponent"] },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'signin', component: _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__["SignInComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "xX7k":
/*!******************************************!*\
  !*** ./src/app/actions/modal.actions.ts ***!
  \******************************************/
/*! exports provided: SET_STATUS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_STATUS", function() { return SET_STATUS; });
const SET_STATUS = 'SET_STATUS';


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map